/**
 * Shared engine for every page (Home, Work, category pages, project case
 * studies, About/Contact stub).
 * - One rAF loop computes normalized progress values per scene and writes
 *   them as CSS custom properties (--p, --pin-p). All motion is expressed
 *   in CSS (transform/opacity) driven by those variables — no per-component
 *   scroll listeners. Pages without [data-scene] elements simply no-op here.
 * - All copy/media comes from `portfolioData` (data.js). Renderers here
 *   only know how to render a shape of data, never the content itself.
 */
(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const currentPage = location.pathname.split("/").pop() || "index.html";

  /* ------------------------------------------------------------------ *
   * 0. LANGUAGE — portfolioData.th / portfolioData.en share one shape;
   *    activeData() is the single place every renderer reads through, so
   *    switching language is just "which half of portfolioData" + re-run
   *    the same renderers (no per-page if/else, no scattered textContent
   *    assignment).
   * ------------------------------------------------------------------ */
  let currentLang = "th";

  function activeData() {
    return portfolioData[currentLang];
  }

  /* ------------------------------------------------------------------ *
   * 2. DATA BINDING — simple path-based text/attr binding
   * ------------------------------------------------------------------ */
  function getPath(obj, path) {
    return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
  }

  function bindStaticFields() {
    document.querySelectorAll("[data-bind]").forEach((el) => {
      const value = getPath(activeData(), el.dataset.bind);
      if (value != null) el.textContent = value;
    });

    // same as [data-bind], but assigns innerHTML instead of textContent —
    // for the handful of copy fields that carry their own inline
    // <strong> emphasis (e.g. a highlighted quote) written directly into
    // the data.js string. Never use this for user-facing form input or
    // anything not fully authored in data.js.
    document.querySelectorAll("[data-bind-html]").forEach((el) => {
      const value = getPath(activeData(), el.dataset.bindHtml);
      if (value != null) el.innerHTML = value;
    });

    document.querySelectorAll("[data-bind-src]").forEach((el) => {
      const value = getPath(activeData(), el.dataset.bindSrc);
      if (value) el.src = value;
    });

    document.querySelectorAll("[data-bind-href]").forEach((el) => {
      const value = getPath(activeData(), el.dataset.bindHref);
      if (value) el.href = value;
    });

    // hero name may contain a line break placeholder — render as-is for now
    document.querySelectorAll("[data-bind-lines]").forEach((el) => {
      const value = getPath(activeData(), el.dataset.bindLines);
      if (value != null) el.textContent = value;
    });

    document.querySelectorAll("[data-bind-list]").forEach((el) => {
      const list = getPath(activeData(), el.dataset.bindList) || [];
      el.innerHTML = "";
      list.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        el.appendChild(li);
      });
    });
  }

  /* ------------------------------------------------------------------ *
   * 2b. HERO NAME — wraps each letter in its own span so CSS can give
   *     individual letters a hover flourish (scale + accent color) without
   *     touching the rest of the reveal/entrance system. Line breaks in
   *     the data (\n) become real <br> instead of relying on
   *     white-space:pre-line, since textContent is no longer used here.
   * ------------------------------------------------------------------ */
  // Splits by grapheme cluster, not code point — plain [...line] splits Thai
  // (and other combining-mark scripts) at each vowel/tone mark, orphaning
  // them from their base consonant into their own <span>. Each one then
  // shapes alone with no preceding base character, which browsers render
  // as a dotted-circle placeholder instead of the intended letter, so
  // names like "ชญานิษฐ์" fell apart into stray circles. Intl.Segmenter
  // keeps each base character with all its combining marks in one cluster.
  const graphemeSegmenter = typeof Intl !== "undefined" && Intl.Segmenter
    ? new Intl.Segmenter(undefined, { granularity: "grapheme" })
    : null;

  function splitGraphemes(str) {
    if (graphemeSegmenter) return Array.from(graphemeSegmenter.segment(str), (s) => s.segment);
    return [...str];
  }

  function renderHeroName() {
    const el = document.querySelector("[data-hero-name]");
    if (!el) return;
    const value = getPath(activeData(), "hero.name") || "";
    el.innerHTML = "";
    const lines = value.split("\n");
    lines.forEach((line, i) => {
      // each word gets its own wrapper (white-space:nowrap in styles.css) so
      // the browser can still wrap the line BETWEEN words if it has to, but
      // never INSIDE one — without this, every letter is its own sibling
      // <span> with no space between them, so a long word like
      // "Chansuttikanok" had just as many break opportunities as if it were
      // separate words, and the last letter or two could spill onto their
      // own line.
      line.split(" ").forEach((word, wi, words) => {
        const wordEl = document.createElement("span");
        wordEl.className = "hero__word";
        splitGraphemes(word).forEach((ch) => {
          const span = document.createElement("span");
          span.className = "hero__letter";
          span.textContent = ch;
          wordEl.appendChild(span);
        });
        el.appendChild(wordEl);
        if (wi < words.length - 1) el.appendChild(document.createTextNode(" "));
      });
      if (i < lines.length - 1) el.appendChild(document.createElement("br"));
    });
  }

  /* ------------------------------------------------------------------ *
   * 3. NAV — rendered from data so every page shares one source of truth,
   *    with the current page marked active by URL.
   * ------------------------------------------------------------------ */
  function renderNav() {
    const homeLink = document.querySelector("[data-nav-home]");
    if (homeLink) homeLink.setAttribute("href", activeData().nav.home);

    const linksContainer = document.querySelector("[data-nav-links]");
    if (!linksContainer) return;
    linksContainer.innerHTML = "";

    activeData().nav.links.forEach((link) => {
      const a = document.createElement("a");
      a.className = "nav__link";
      a.href = link.href;
      a.textContent = link.label;
      // the "Work" link only points at one page (work-projects.html), but
      // the archive is really 6 pages (work.html + 5 category filters) plus
      // every individual project case study (project.html) — treat all of
      // them as "Work" being the active section, not just an exact URL
      // match, so the highlight doesn't disappear the moment someone picks
      // a specific category or opens a project's full write-up.
      const isWorkSection = link.href.startsWith("work") && (currentPage.startsWith("work") || currentPage === "project.html");
      const isActive = link.href === currentPage || isWorkSection;
      if (isActive) a.classList.add("is-active");
      linksContainer.appendChild(a);
    });
  }

  // mobile hamburger menu — toggles a class rather than swapping markup,
  // so the same [data-nav-links] list renders both the desktop inline
  // pill and the mobile dropdown purely via CSS (see the ≤720px rules).
  function initNavMenu() {
    const nav = document.querySelector("[data-nav]");
    const burger = document.querySelector("[data-nav-burger]");
    const linksContainer = document.querySelector("[data-nav-links]");
    if (!nav || !burger || !linksContainer) return;

    const closeMenu = () => {
      nav.classList.remove("is-menu-open");
      burger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-menu-open");
    };

    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-menu-open");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.classList.toggle("nav-menu-open", isOpen);
    });
    linksContainer.addEventListener("click", (e) => {
      if (e.target.closest(".nav__link")) closeMenu();
    });
  }

  /* ------------------------------------------------------------------ *
   * 4. PROJECT LISTS — reused by Home (featured only), Work index (all),
   *    and category pages (filtered by data-category on the container).
   * ------------------------------------------------------------------ */
  function renderWork() {
    const field = document.querySelector("[data-work-field]");
    if (!field) return;
    field.innerHTML = "";

    const featuredOnly = field.hasAttribute("data-featured-only");
    let projects = activeData().projects;
    if (featuredOnly) projects = projects.filter((p) => p.featured);
    if (field.dataset.category) projects = projects.filter((p) => p.category === field.dataset.category);

    const ui = activeData().ui;

    if (projects.length === 0) {
      field.innerHTML = `<p class="work__empty">${ui.workEmpty}</p>`;
      return;
    }

    projects.forEach((project, i) => {
      const category = activeData().categories.find((c) => c.slug === project.category);
      const el = document.createElement("a");
      el.href = `project.html?slug=${project.slug}`;

      // gallery (if populated) drives a slideshow; heroImage alone is just
      // a single-slide gallery. Neither present -> placeholder text.
      const images = project.gallery && project.gallery.length
        ? project.gallery
        : project.heroImage ? [project.heroImage] : [];

      // Home's "Selected Work" is a curated highlight, not the archive — it
      // keeps a contained/framed card look distinct from the Work page's
      // borderless editorial objects, even though both read from projects[].
      if (featuredOnly) {
        el.className = "featured-work-card";
        el.innerHTML = `
          <div class="featured-work-card__media">${images.length ? "" : ui.projectImagePlaceholder}</div>
          <div class="featured-work-card__body">
            <h3 class="featured-work-card__title">${project.title}</h3>
            <p class="featured-work-card__category">${category ? category.label : ""}</p>
            <p class="featured-work-card__desc">${project.description}</p>
          </div>
        `;
        fillMediaSlides(el.querySelector(".featured-work-card__media"), images);
      } else {
        // tags line: tech stack + year, e.g. "Python · scikit-learn · 2026"
        // — data.js already carried both, just never surfaced them here
        // before (only inside the full case-study page).
        const tagParts = [...(project.technologies || []), project.year].filter(Boolean);
        el.className = "work-object";
        el.innerHTML = `
          <div class="work-object__media">${images.length ? "" : ui.projectImagePlaceholder}</div>
          <div class="work-object__meta">
            <p class="work-object__eyebrow">
              <span class="work-object__index">${String(i + 1).padStart(2, "0")}</span>
              <span class="work-object__rule"></span>
              <span class="work-object__category">${category ? category.label.toUpperCase() : ""}</span>
            </p>
            <h3 class="work-object__title">${project.title}</h3>
            <p class="work-object__desc">${project.description}</p>
            ${tagParts.length ? `<p class="work-object__tags">${tagParts.join(" · ")}</p>` : ""}
            <span class="work-object__link">${ui.viewProject}</span>
          </div>
        `;
        fillMediaSlides(el.querySelector(".work-object__media"), images);
      }
      field.appendChild(el);
    });
  }

  // shared by .featured-work-card__media and .work-object__media — builds
  // one .media-slide per image (see initMediaCarousels below for the
  // cross-fade timer that cycles them).
  function fillMediaSlides(media, images) {
    if (!images.length) return;
    images.forEach((src, i) => {
      const slide = document.createElement("div");
      slide.className = "media-slide" + (i === 0 ? " is-active" : "");
      slide.style.backgroundImage = `url("${src}")`;
      media.appendChild(slide);
    });
    // pagination dots + prev/next arrows — only meaningful once there's more
    // than one slide to page through; each dot mirrors the slide at the
    // same index.
    if (images.length > 1) {
      const dots = document.createElement("div");
      dots.className = "media-dots";
      images.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.className = "media-dots__dot" + (i === 0 ? " is-active" : "");
        dots.appendChild(dot);
      });
      media.appendChild(dots);

      // real <button>s, not <a>s — the whole card is itself a link to the
      // project page, so a click has to be stopped from bubbling into that
      // outer <a> or it would navigate away instead of just paging.
      const prevBtn = document.createElement("button");
      prevBtn.type = "button";
      prevBtn.className = "media-nav media-nav--prev";
      prevBtn.setAttribute("aria-label", "Previous image");
      prevBtn.innerHTML = "&#8249;";
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        stepMediaCarousel(media, -1);
      });

      const nextBtn = document.createElement("button");
      nextBtn.type = "button";
      nextBtn.className = "media-nav media-nav--next";
      nextBtn.setAttribute("aria-label", "Next image");
      nextBtn.innerHTML = "&#8250;";
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        stepMediaCarousel(media, 1);
      });

      media.appendChild(prevBtn);
      media.appendChild(nextBtn);
    }
  }

  /* ------------------------------------------------------------------ *
   * 4c. MEDIA CAROUSELS — cross-fades through project.gallery on a shared
   *     timer, for both Home's "Selected Work" cards and the Work
   *     archive's editorial rows (single-image or placeholder media just
   *     have one slide/zero slides and are unaffected either way). One
   *     interval for every card, not one per card, so they all change in
   *     the same rhythm instead of drifting out of sync. Cleared and
   *     rebuilt on every render (language switch tears down and rebuilds
   *     the cards, which would otherwise leak a duplicate timer advancing
   *     slide indices no element still needs).
   *
   *     Manual prev/next (above) calls the same step function directly and
   *     marks the card as briefly paused, so a manual choice isn't instantly
   *     overridden by the shared timer's very next tick, but idle cards
   *     (nothing clicked) just keep auto-advancing as before.
   * ------------------------------------------------------------------ */
  let mediaCarouselTimer = null;
  const mediaCarouselPausedUntil = new WeakMap();

  function stepMediaCarousel(media, direction) {
    const slides = media.querySelectorAll(".media-slide");
    const dots = media.querySelectorAll(".media-dots__dot");
    if (slides.length < 2) return;
    const activeIndex = Array.from(slides).findIndex((s) => s.classList.contains("is-active"));
    const nextIndex = (activeIndex + slides.length + direction) % slides.length;
    slides[activeIndex].classList.remove("is-active");
    slides[nextIndex].classList.add("is-active");
    if (dots.length) {
      dots[activeIndex].classList.remove("is-active");
      dots[nextIndex].classList.add("is-active");
    }
    mediaCarouselPausedUntil.set(media, Date.now() + 3500);
  }

  function initMediaCarousels() {
    if (mediaCarouselTimer) clearInterval(mediaCarouselTimer);
    const media = Array.from(document.querySelectorAll(".featured-work-card__media, .work-object__media"))
      .filter((el) => el.querySelectorAll(".media-slide").length > 1);
    if (media.length === 0) return;

    mediaCarouselTimer = window.setInterval(() => {
      const now = Date.now();
      media.forEach((el) => {
        const pausedUntil = mediaCarouselPausedUntil.get(el);
        if (pausedUntil && now < pausedUntil) return;
        stepMediaCarousel(el, 1);
      });
    }, 3500);
  }

  function renderCategoryHeader() {
    const field = document.querySelector("[data-work-field]");
    const titleEl = document.querySelector("[data-category-title]");
    const descEl = document.querySelector("[data-category-description]");
    const countEl = document.querySelector("[data-category-count]");
    if (!field || !field.dataset.category || !titleEl) return;

    const category = activeData().categories.find((c) => c.slug === field.dataset.category);
    if (!category) return;
    titleEl.textContent = category.label;
    if (descEl) descEl.textContent = category.description;
    if (countEl) {
      const count = activeData().projects.filter((p) => p.category === category.slug).length;
      countEl.textContent = currentLang === "th"
        ? `${count} โปรเจกต์`
        : (count === 1 ? "1 project" : `${count} projects`);
    }
  }

  function renderCategoryNav() {
    const list = document.querySelector("[data-category-list]");
    if (!list) return;
    list.innerHTML = "";

    // no "all" chip — the list only ever shows the specific categories, so
    // browsing always means picking one.
    activeData().categories.forEach((cat) => {
      const a = document.createElement("a");
      a.className = "category-chip";
      a.href = `work-${cat.slug}.html`;
      a.textContent = cat.label;
      if (currentPage === `work-${cat.slug}.html`) a.classList.add("is-active");
      list.appendChild(a);
    });
  }

  /* ------------------------------------------------------------------ *
   * 4b. PROJECT CASE STUDY — single template driven by ?slug=, so adding
   *     a project never requires a new HTML file.
   * ------------------------------------------------------------------ */
  function renderProjectPage() {
    if (document.body.dataset.page !== "project") return;

    const ui = activeData().ui;
    const slug = new URLSearchParams(location.search).get("slug");
    const projects = activeData().projects;
    const project = projects.find((p) => p.slug === slug) || projects[0];
    if (!project) return;

    document.title = `${project.title} — [NAME]`;

    document.querySelectorAll("[data-project-field]").forEach((el) => {
      const value = getPath(project, el.dataset.projectField);
      if (value != null) el.textContent = value;
    });

    // title gets split into one <span class="letter"> per grapheme (see
    // splitGraphemes above) so :hover in styles.css can grow/recolor just
    // the character under the cursor instead of the whole heading — has to
    // run after the generic loop above so it overrides that plain-text pass.
    const titleEl = document.querySelector(".case-hero__title[data-project-field='title']");
    if (titleEl) {
      titleEl.innerHTML = "";
      splitGraphemes(project.title || "").forEach((ch) => {
        if (ch === " ") {
          titleEl.appendChild(document.createTextNode(" "));
        } else {
          const span = document.createElement("span");
          span.className = "letter";
          span.textContent = ch;
          titleEl.appendChild(span);
        }
      });
    }

    // index shown in the hero ("01", "02"…) is the project's position
    // within its own category's filtered list (matching the numbering on
    // that category's Work page), not the static `index` field in
    // data.js — also has to run after the generic loop above to override it.
    const indexEl = document.querySelector('[data-project-field="index"]');
    if (indexEl) {
      const sameCategory = projects.filter((p) => p.category === project.category);
      const position = sameCategory.findIndex((p) => p.slug === project.slug) + 1;
      indexEl.textContent = String(position).padStart(2, "0");
    }

    const techList = document.querySelector("[data-project-tech]");
    if (techList) {
      techList.innerHTML = "";
      (project.technologies || []).forEach((t) => {
        const li = document.createElement("li");
        li.textContent = t;
        techList.appendChild(li);
      });
    }

    document.querySelectorAll("[data-case-section]").forEach((el) => {
      const label = ui.caseSection[el.dataset.caseSection];
      if (label != null) el.textContent = label;
    });
    document.querySelectorAll("[data-case-meta-label]").forEach((el) => {
      const label = ui.caseMeta[el.dataset.caseMetaLabel];
      if (label != null) el.textContent = label;
    });

    const category = activeData().categories.find((c) => c.slug === project.category);
    const catLink = document.querySelector("[data-project-category-link]");
    if (catLink) {
      catLink.href = `work-${project.category}.html`;
      catLink.textContent = `${ui.backToPrefix}${category ? category.label : project.category}`;
    }

    const nextLink = document.querySelector("[data-project-next-link]");
    if (nextLink) {
      const idx = projects.findIndex((p) => p.slug === project.slug);
      const next = projects[(idx + 1) % projects.length];
      nextLink.href = `project.html?slug=${next.slug}`;
      nextLink.textContent = ui.nextProject;
    }

    const workSection = document.querySelector("[data-project-work-section]");
    const workLinksEl = document.querySelector("[data-project-work-links]");
    if (workSection && workLinksEl) {
      const links = project.workLinks || [];
      workSection.style.display = links.length ? "" : "none";
      workLinksEl.innerHTML = "";
      links.forEach((link) => {
        const a = document.createElement("a");
        a.className = "case-section__link";
        a.href = link.href || "#";
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = link.label || ui.viewWorkLink;
        workLinksEl.appendChild(a);
      });
    }

    const certSection = document.querySelector("[data-project-certificate-section]");
    const certWrap = document.querySelector("[data-project-certificate]");
    if (certSection && certWrap) {
      const certs = project.certificateImages || [];
      certWrap.innerHTML = "";
      certWrap.classList.toggle("case-section__certificates--multi", certs.length > 1);
      if (certs.length) {
        certSection.style.display = "";
        certs.forEach((src) => {
          const box = document.createElement("div");
          box.className = "case-section__certificate has-image";
          box.style.backgroundImage = `url("${src}")`;
          certWrap.appendChild(box);
        });
      } else {
        certSection.style.display = "none";
      }
    }

    // hide case-study sections with no content for this project (e.g. a
    // one-day training has no real "Problem"/"Approach"/"Process" to
    // report — see the light-vs-rich shape used across projects.items in
    // data.js) rather than showing an empty heading with nothing under
    // it, then renumber whatever's left (plus Project Link/Certificate,
    // which hide/show on their own above) so the 00/01/02… sequence never
    // skips a number just because a section was hidden.
    document.querySelectorAll("[data-case-field]").forEach((el) => {
      const value = project.caseStudy ? project.caseStudy[el.dataset.caseField] : null;
      el.style.display = value ? "" : "none";
    });
    const visibleSections = Array.from(document.querySelectorAll(".case-section")).filter((el) => el.style.display !== "none");
    visibleSections.forEach((el, i) => {
      const numEl = el.querySelector(".case-section__num");
      if (numEl) numEl.textContent = String(i).padStart(2, "0");
    });

    // activity photos — unlimited entries, always a continuously
    // auto-scrolling strip (not a crossfade carousel): the list is rendered
    // twice back-to-back and the track animates translateX(0 -> -50%), so
    // the moment the first copy scrolls fully out of view the second copy
    // is sitting exactly where the first started, looping with no seam
    // regardless of how many photos there are. Duration is set from the
    // track's own measured width (not a fixed constant) so the strip moves
    // at the same visual speed whether a project has 3 photos or 30.
    const activityWrap = document.querySelector("[data-project-activity]");
    const activityTrack = document.querySelector("[data-project-activity-track]");
    if (activityWrap && activityTrack) {
      activityTrack.innerHTML = "";
      const photos = project.activityPhotos || [];
      activityWrap.style.display = photos.length ? "" : "none";
      if (photos.length) {
        const appendSet = () => {
          photos.forEach((src) => {
            const item = document.createElement("div");
            item.className = "case-activity__item";
            item.style.backgroundImage = `url("${src}")`;
            activityTrack.appendChild(item);
          });
        };
        // a project with only 1-3 photos would otherwise leave a visible
        // gap before the strip wraps around — keep repeating the set until
        // one lap is at least as wide as the viewport, then duplicate that
        // whole lap once so the 0 -> -50% loop below stays seamless.
        appendSet();
        const minWidth = Math.max(activityWrap.clientWidth, window.innerWidth);
        while (activityTrack.scrollWidth < minWidth && activityTrack.children.length < 200) appendSet();
        activityTrack.innerHTML += activityTrack.innerHTML;
        const setWidth = activityTrack.scrollWidth / 2;
        const pxPerSecond = 40;
        activityTrack.style.animationDuration = `${Math.max(setWidth / pxPerSecond, 8)}s`;
      }
    }
  }

  /* ------------------------------------------------------------------ *
   * 5. WHAT I'VE LEARNED — pinned stacked cards (Home only)
   * ------------------------------------------------------------------ */
  function renderLearned() {
    const stack = document.querySelector("[data-learned-stack]");
    if (!stack) return;
    stack.innerHTML = "";
    const layout = [
      { x: -320, y: 10, rot: -7, stackY: -34, baseOpacity: 0.55 },
      { x: 0, y: -20, rot: 0, stackY: 0, baseOpacity: 1 },
      { x: 320, y: 10, rot: 7, stackY: 34, baseOpacity: 0.55 }
    ];
    activeData().learned.items.forEach((item, i) => {
      const pos = layout[i % layout.length];
      const card = document.createElement("blockquote");
      card.className = "learned-card";
      card.style.setProperty("--spread-x", pos.x + "px");
      card.style.setProperty("--spread-y", pos.y + "px");
      card.style.setProperty("--stack-y", pos.stackY + "px");
      card.style.setProperty("--base-opacity", pos.baseOpacity);
      card.style.setProperty("--rot", pos.rot + "deg");
      card.style.zIndex = String(10 - Math.abs(1 - i));
      card.innerHTML = `
        <p class="learned-card__text">${item.text}</p>
        <footer class="learned-card__tag">${item.tag}</footer>
      `;
      stack.appendChild(card);
    });
  }

  function renderLearnedTrees() {
    const row = document.querySelector("[data-learned-trees]");
    if (!row) return;
    for (let i = 0; i < 6; i++) {
      const img = document.createElement("img");
      img.src = "assets/testimonials-trees.svg";
      img.alt = "";
      row.appendChild(img);
    }
  }

  /* ------------------------------------------------------------------ *
   * 5b. ABOUT PAGE — hero/whoiam facts, journey flow, education timeline,
   *     skills, build areas, achievements, personal photos, currently.
   *     All guarded; no-op elsewhere.
   * ------------------------------------------------------------------ */
  // shared by the Intro hero's BASED IN/FOCUS/CURRENTLY facts and A Little
  // About Me's NAME/FIELD/INTERESTS facts — both are the same {label,value}
  // shape, just two different short fact lists.
  function renderFactList(selector, facts) {
    const list = document.querySelector(selector);
    if (!list) return;
    list.innerHTML = "";
    (facts || []).forEach((fact) => {
      const item = document.createElement("div");
      item.className = "about-facts__item";
      item.innerHTML = `<dt>${fact.label}</dt><dd>${fact.value}</dd>`;
      list.appendChild(item);
    });
  }

  function renderAboutHeroFacts() {
    renderFactList("[data-hero-facts]", activeData().about.hero.facts);
  }

  function renderAboutWhoIAmFacts() {
    renderFactList("[data-whoiam-facts]", activeData().about.aLittleAboutMe.facts);
  }

  // 3 photos in a row below the "A Little About Me" text/facts — a real
  // photo once uploaded, or an honest placeholder box (same pattern as
  // the Gallery/beyond-photos grids elsewhere), each with a small caption
  // underneath and a hover lift/scale.
  function renderAboutWhoIAmPhotos() {
    const row = document.querySelector("[data-whoiam-photos]");
    if (!row) return;
    row.innerHTML = "";
    (activeData().about.aLittleAboutMe.photos || []).forEach((photo) => {
      const fig = document.createElement("figure");
      fig.className = "whoiam-photo";
      fig.innerHTML = `
        ${photo.image
          ? `<img src="${photo.image}" alt="${photo.caption || ""}">`
          : `<div class="whoiam-photo__placeholder">${photo.caption || "[PHOTO]"}</div>`}
        <figcaption>${photo.caption || ""}</figcaption>
      `;
      row.appendChild(fig);
    });
  }

  // vertical flow (curiosity -> learning -> building -> ...) — a down-arrow
  // sits between steps (not before the first one), driven by CSS :not(:first-
  // child)::before so the step count can change without touching markup.
  function renderAboutJourney() {
    const flow = document.querySelector("[data-journey-flow]");
    if (!flow) return;
    flow.innerHTML = "";
    activeData().about.journey.steps.forEach((step) => {
      const node = document.createElement("p");
      node.className = "journey-flow__step";
      node.setAttribute("data-reveal", "");
      node.textContent = step;
      flow.appendChild(node);
    });
  }

  // decorative "film strip" photos scattered beside the journey flow, not
  // meant to line up 1:1 with a step — purely an ambient decoration, like
  // photos tacked up next to a timeline. Alternates left/right and a small
  // rotation via CSS nth-child, so any number of photos still scatters
  // sensibly. Unlike the one-shot [data-reveal] system used everywhere
  // else (fades in once, then forgotten), these use initTwoWayReveal so
  // each frame rises into place while scrolling down past it and settles
  // back down/fades out again when scrolled back above it.
  function renderAboutJourneyPhotos() {
    const wrap = document.querySelector("[data-journey-photos]");
    if (!wrap) return;
    wrap.innerHTML = "";
    (activeData().about.journey.photos || []).forEach((photo) => {
      const fig = document.createElement("figure");
      fig.className = "journey-photo";
      fig.innerHTML = `
        ${photo.image
          ? `<img src="${photo.image}" alt="">`
          : `<div class="journey-photo__placeholder">${photo.caption || "[PHOTO]"}</div>`}
        <figcaption>${photo.caption || ""}</figcaption>
      `;
      wrap.appendChild(fig);
    });
  }

  // editorial vertical timeline — one entry per broad school stage
  // (Primary / Lower Secondary / Upper Secondary), each with a school logo
  // (or a colored monogram until one is uploaded), a dot on the connecting
  // line, and a short punch-list of what mattered that stage. Each entry
  // cycles through the same 3-color accent set as the Skills groups below,
  // so the timeline reads as colorful stages rather than one long list.
  const timelineAccents = ["sky", "coral", "moss"];

  function renderAboutEduTimeline() {
    const timeline = document.querySelector("[data-edu-timeline]");
    if (!timeline) return;
    timeline.innerHTML = "";
    activeData().about.educationTimeline.entries.forEach((entry, i) => {
      const el = document.createElement("div");
      el.className = "edu-timeline__entry";
      el.dataset.accent = timelineAccents[i % timelineAccents.length];
      el.setAttribute("data-reveal", "");
      el.innerHTML = `
        <div class="edu-timeline__logo">${entry.logo ? `<img src="${entry.logo}" alt="">` : monogram(entry.school)}</div>
        <div class="edu-timeline__line"><span class="edu-timeline__dot"></span></div>
        <div class="edu-timeline__body">
          <p class="edu-timeline__stage">${entry.stage}</p>
          <h3 class="edu-timeline__school">${entry.school}${entry.years ? ` · ${entry.years}` : ""}</h3>
          ${[entry.track, entry.gpax ? `GPAX ${entry.gpax}` : null].filter(Boolean).length ? `<p class="edu-timeline__track">${[entry.track, entry.gpax ? `GPAX ${entry.gpax}` : null].filter(Boolean).join(" · ")}</p>` : ""}
          <ul class="edu-timeline__points">${entry.points.filter((p) => p && p.trim()).map((p) => `<li>${p}</li>`).join("")}</ul>
        </div>
      `;
      timeline.appendChild(el);
    });
  }

  // one overlapping "photo pile" (not a photo per entry) — each card
  // starts fanned out at a small hand-placed offset/rotation (--base-x/
  // --base-y/--base-rot), drives its own resting transform in CSS, and
  // initEduTimelineStack (below) layers an additional drag offset on top
  // via inline style + calc() so dragging never has to fight the CSS
  // fan position.
  const stackFan = [
    { x: -16, y: 10, rot: -8 },
    { x: 14, y: -8, rot: 6 },
    { x: -4, y: -18, rot: -3 },
    { x: 18, y: 6, rot: 8 }
  ];

  function renderAboutEduTimelineStack() {
    const pile = document.querySelector("[data-stack-pile]");
    if (!pile) return;
    pile.innerHTML = "";
    activeData().about.educationTimeline.entries.forEach((entry, i) => {
      const base = stackFan[i % stackFan.length];
      const card = document.createElement("figure");
      card.className = "edu-timeline-stack__card";
      card.dataset.accent = timelineAccents[i % timelineAccents.length];
      card.style.setProperty("--base-x", base.x + "px");
      card.style.setProperty("--base-y", base.y + "px");
      card.style.setProperty("--base-rot", base.rot + "deg");
      card.style.zIndex = String(i + 1);
      card.innerHTML = `
        ${entry.photo
          ? `<img src="${entry.photo}" alt="">`
          : `<div class="edu-timeline-stack__placeholder">${entry.photoCaption || "[PHOTO]"}</div>`}
        <figcaption>${entry.photoCaption || ""}</figcaption>
      `;
      pile.appendChild(card);
    });
    initDragPile(pile, "var(--base-x)", "var(--base-y)");
  }

  // shared by the Education Timeline's small stack above and the Beyond-
  // the-Screen pile below — drag any card out to look at it (it stays
  // wherever it's dropped, no snap-back); grabbing/clicking any card also
  // raises it above the rest via an always-increasing z-index counter, so
  // whichever was touched most recently sits on top. baseXExpr/baseYExpr
  // are the CSS expressions for each card's *resting* position (read from
  // its own --base-x/--base-y custom properties for the timeline stack,
  // or the plain -50%/-50% centering offset for the pile below) — drag
  // just adds a pixel offset on top of that via calc(), so this never has
  // to know or care how a card's resting position was computed. Each
  // reset button is wired once (separately, since it isn't rebuilt per
  // render) to just re-run the render function for a clean restack,
  // rather than animating every card's ad-hoc drag state back by hand.
  function initDragPile(pile, baseXExpr, baseYExpr) {
    let topZ = pile.children.length;
    Array.from(pile.children).forEach((card) => {
      let dragging = false;
      let startX = 0, startY = 0, baseDx = 0, baseDy = 0;

      card.addEventListener("pointerdown", (e) => {
        dragging = true;
        card.setPointerCapture(e.pointerId);
        card.classList.add("is-dragging");
        card.style.zIndex = String(++topZ);
        startX = e.clientX;
        startY = e.clientY;
        baseDx = parseFloat(card.dataset.dx || "0");
        baseDy = parseFloat(card.dataset.dy || "0");
      });

      card.addEventListener("pointermove", (e) => {
        if (!dragging) return;
        const dx = baseDx + (e.clientX - startX);
        const dy = baseDy + (e.clientY - startY);
        card.style.transform = `translate(calc(${baseXExpr} + ${dx}px), calc(${baseYExpr} + ${dy}px)) rotate(var(--base-rot))`;
        card.dataset.dx = dx;
        card.dataset.dy = dy;
      });

      function endDrag() {
        dragging = false;
        card.classList.remove("is-dragging");
      }
      card.addEventListener("pointerup", endDrag);
      card.addEventListener("pointercancel", endDrag);
    });
  }

  // static button (not rebuilt per render), so it only needs wiring once.
  function initEduTimelineStackReset() {
    const btn = document.querySelector("[data-stack-reset]");
    if (!btn) return;
    btn.addEventListener("click", renderAboutEduTimelineStack);
  }

  // big, full-width, content-free version of the same photo-pile idea —
  // ~20 cards (however many about.beyondCode.photos has) scattered across
  // the whole pile area in a loose grid (cols x rows) with a small
  // deterministic per-index jitter/rotation and alternating portrait/
  // landscape framing, so it reads as a messy heap of photos rather than
  // a tidy arrangement. No caption text on these (unlike the timeline
  // stack) — this one is pure decoration.
  // true Math.random() (not a deterministic hash of index) for jitter,
  // rotation, orientation and tint — a fixed hash tied to index looked
  // patterned (visible column/stripe rhythm) because the grid position
  // itself is index-based, so anything else derived from the same index
  // inherited that same regularity. Randomizing for real also means
  // clicking reset genuinely re-shuffles the pile into a new mess each
  // time, not just back to one fixed arrangement.
  function renderAboutBeyondStack() {
    const pile = document.querySelector("[data-beyond-stack-pile]");
    if (!pile) return;
    pile.innerHTML = "";
    // real photo count has grown well past what this pile can render
    // smoothly (each card gets its own drag listeners via initDragPile) —
    // a random 30-photo sample keeps it fast, and reshuffles to a
    // different 30 every time Reset is clicked rather than always
    // settling back into the same subset.
    const allPhotos = activeData().about.beyondCode.photos || [];
    const shuffled = allPhotos.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const photos = shuffled.slice(0, 30);
    const cols = 5;
    const rows = Math.max(1, Math.ceil(photos.length / cols));
    const cellW = 100 / cols;
    const cellH = 100 / rows;
    const tints = ["moss", "sky", "coral"];
    photos.forEach((photo, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const jitterX = Math.random() * 18 - 9;
      const jitterY = Math.random() * 16 - 8;
      const rot = Math.random() * 30 - 15;
      const portrait = Math.random() < 0.5;
      const card = document.createElement("figure");
      card.className = "beyond-stack__card " + (portrait ? "is-portrait" : "is-landscape");
      card.dataset.tint = tints[Math.floor(Math.random() * tints.length)];
      card.style.setProperty("--base-left", (cellW * col + cellW / 2 + jitterX) + "%");
      card.style.setProperty("--base-top", (cellH * row + cellH / 2 + jitterY) + "%");
      card.style.setProperty("--base-rot", rot + "deg");
      card.style.zIndex = String(i + 1);
      card.innerHTML = photo.image
        ? `<img src="${photo.image}" alt="">`
        : `<div class="beyond-stack__placeholder"></div>`;
      pile.appendChild(card);
    });
    initDragPile(pile, "-50%", "-50%");
  }

  function initBeyondStackReset() {
    const btn = document.querySelector("[data-beyond-stack-reset]");
    if (!btn) return;
    btn.addEventListener("click", renderAboutBeyondStack);
  }

  // duplicates a marquee track's content back-to-back and sizes its
  // animation-duration from the actual rendered width, so translateX(-50%)
  // loops seamlessly at a constant visual speed no matter how many items
  // are in it (same technique as project.html's activity-photos strip).
  function sizeMarqueeTrack(track, pxPerSecond) {
    const setWidth = track.scrollWidth / 2;
    track.style.animationDuration = `${Math.max(setWidth / pxPerSecond, 6)}s`;
  }

  // fills a marquee track with enough repeated copies of `items` that one
  // half of the track (the "set" the -50% keyframe scrolls past) is at
  // least as wide as the viewport it sits in — a short item list (e.g. a
  // 3-tag skill group) duplicated just once could render narrower than the
  // viewport, leaving a blank gap for most of the loop instead of a
  // continuous strip. Still exactly 2x that wide-enough set, so the
  // translateX(-50%) loop stays seamless.
  function fillMarqueeLoop(track, items, renderItem, viewportEl, pxPerSecond) {
    if (!track || !items || !items.length) return;
    track.innerHTML = items.map(renderItem).join("");
    const unitWidth = track.scrollWidth || 1;
    const viewportWidth = (viewportEl || track.parentElement).getBoundingClientRect().width || 0;
    const setsNeeded = Math.max(1, Math.ceil(viewportWidth / unitWidth));
    track.innerHTML = "";
    for (let s = 0; s < setsNeeded * 2; s++) {
      items.forEach((item) => track.insertAdjacentHTML("beforeend", renderItem(item)));
    }
    sizeMarqueeTrack(track, pxPerSecond);
  }

  // first letter of a tool/skill name, used as a colored monogram badge
  // when no logo image is provided yet.
  function monogram(name) {
    return (name || "?").trim().charAt(0).toUpperCase();
  }

  // grouped skill map (AI/ML, Web, Data, Tools) — each tag pairs a name
  // with its tool/program logo (or a colored monogram badge until a real
  // logo image is uploaded), no percentage bars (those read as
  // self-assessed guesses, not evidence). Each group cycles through a
  // sky/coral/moss accent so the whole grid reads as colorful rather than
  // one flat list, and each group's tags scroll as their own independent,
  // infinitely looping strip (padded out with enough repeats to always
  // fill the row — see fillMarqueeLoop) rather than wrapping onto
  // multiple lines.
  function renderAboutSkills() {
    const grid = document.querySelector("[data-skill-grid]");
    if (!grid) return;
    grid.innerHTML = "";
    activeData().about.skills.groups.forEach((group, gi) => {
      const el = document.createElement("div");
      el.className = "skill-card";
      el.dataset.accent = timelineAccents[gi % timelineAccents.length];
      el.setAttribute("data-reveal", "");
      el.innerHTML = `
        <h3 class="skill-card__label">${group.label}</h3>
        <div class="skill-card__viewport">
          <ul class="skill-card__items"></ul>
        </div>
      `;
      grid.appendChild(el);
      const renderTag = (item) => `
        <li class="skill-tag">
          <span class="skill-tag__logo">${item.logo ? `<img src="${item.logo}" alt="">` : monogram(item.name)}</span>
          <span class="skill-tag__name">${item.name}</span>
        </li>`;
      fillMarqueeLoop(el.querySelector(".skill-card__items"), group.items, renderTag, el.querySelector(".skill-card__viewport"), 25);
    });
  }

  // a static grid, not a marquee — unlike the skill tags/achievement chips
  // above, these read as fixed "stamps" (see .stamp in styles.css), so
  // there's nothing to scroll and no fillMarqueeLoop padding needed.
  function renderAboutCertifications() {
    const grid = document.querySelector("[data-stamp-grid]");
    if (!grid) return;
    grid.innerHTML = "";
    activeData().about.certifications.items.forEach((item, i) => {
      // links through to that project's case-study page (see the matching
      // slug among projects[]) so the certificate image, once added, has
      // somewhere to actually be seen from a stamp click.
      const el = document.createElement(item.slug ? "a" : "div");
      el.className = "stamp";
      if (item.slug) el.href = `project.html?slug=${item.slug}`;
      el.dataset.accent = timelineAccents[i % timelineAccents.length];
      el.setAttribute("data-reveal", "");
      el.innerHTML = `
        <span class="stamp__star">✦</span>
        <span class="stamp__title">${item.title}</span>
        <span class="stamp__rule"></span>
        <span class="stamp__badge">${item.badge}</span>
      `;
      grid.appendChild(el);
    });
  }

  function renderAboutBuildAreas() {
    const grid = document.querySelector("[data-build-grid]");
    if (!grid) return;
    grid.innerHTML = "";
    activeData().about.whatIBuild.areas.forEach((area) => {
      const el = document.createElement("a");
      el.className = "build-card";
      el.href = area.categoryHref;
      el.setAttribute("data-reveal", "");
      el.innerHTML = `
        <h3 class="build-card__label">${area.label}</h3>
        <p class="build-card__desc">${area.description}</p>
        <ul class="tech-list">${area.technologies.map((t) => `<li>${t}</li>`).join("")}</ul>
      `;
      grid.appendChild(el);
    });
  }

  // same infinite-marquee treatment as the skill tags above — one shared
  // strip (not per-item) since achievements are a single flat list, not
  // grouped. Chips alternate colors via CSS nth-child, so padding the
  // strip out with fillMarqueeLoop (rather than a fixed x2) matters here
  // too, or a short achievements list would leave most of the row blank.
  function renderAboutAchievements() {
    const viewport = document.querySelector("[data-achievement-grid]");
    if (!viewport) return;
    viewport.innerHTML = "";
    const items = activeData().about.achievements.items;
    if (!items.length) return;
    const track = document.createElement("div");
    track.className = "achievement-track";
    viewport.appendChild(track);
    fillMarqueeLoop(track, items, (item) => `<span class="achievement-chip">${item.title}</span>`, viewport, 35);
  }

  function renderAboutCurrently() {
    const grid = document.querySelector("[data-currently-grid]");
    if (!grid) return;
    grid.innerHTML = "";
    activeData().about.currently.items.forEach((item) => {
      const el = document.createElement("div");
      el.className = "currently-item";
      el.setAttribute("data-reveal", "");
      el.innerHTML = `<span class="currently-item__label">${item.label}</span><span class="currently-item__value">${item.value}</span>`;
      grid.appendChild(el);
    });
  }

  /* ------------------------------------------------------------------ *
   * 5b. LIFE OUTSIDE THE SCREEN — multi-photo editorial grid (Home only).
   *     A fixed set of grid slots, laid out with CSS nth-child spans (not
   *     JS positioning). Real photos fill their slot; slots without a real
   *     photo yet show an honest [PHOTO 0x] placeholder — never a stock or
   *     generated person. The whole grid settles into place once via
   *     [data-reveal]; individual photos get a tiny staggered fade on top
   *     (see CSS), never independent movement. Hover reveals a caption
   *     overlay only when that photo actually has one.
   * ------------------------------------------------------------------ */
  function renderGallery() {
    const field = document.querySelector("[data-gallery-field]");
    if (!field) return;
    field.innerHTML = "";
    activeData().personalGallery.photos.forEach((photo) => {
      const fig = document.createElement("figure");
      fig.className = photo.image ? "gallery-photo" : "gallery-photo gallery-photo--empty";
      fig.innerHTML = photo.image
        ? `<img src="${photo.image}" alt="${photo.alt || ""}" loading="lazy">`
        : `<span class="gallery-photo__label">${photo.label || "[PHOTO]"}</span>`;
      if (photo.caption) {
        const overlay = document.createElement("div");
        overlay.className = "gallery-photo__overlay";
        overlay.innerHTML = `<p>${photo.caption}</p>`;
        fig.appendChild(overlay);
      }
      field.appendChild(fig);
    });
  }

  function renderFooterSocial() {
    const list = document.querySelector("[data-social-list]");
    if (!list) return;
    list.innerHTML = "";
    activeData().contact.social.forEach((link) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = link.href;
      a.textContent = link.label;
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  /* ------------------------------------------------------------------ *
   * 5c. CONTACT PAGE — hero heading (one line per array entry, staggered
   *    via the same [data-reveal] system as everywhere else) and the
   *    "Elsewhere" editorial link list. Both guarded; no-op on every
   *    other page.
   * ------------------------------------------------------------------ */
  function renderContactHero() {
    const el = document.querySelector("[data-contact-hero-lines]");
    if (!el) return;
    el.innerHTML = "";
    (activeData().contactPage.hero.headingLines || []).forEach((line) => {
      const span = document.createElement("span");
      span.className = "contact-hero__line";
      span.setAttribute("data-reveal", "");
      span.textContent = line;
      el.appendChild(span);
    });
  }

  // one simple line-art icon per platform, matching the rest of the
  // site's icon vocabulary (stroke/fill currentColor, no external
  // assets) — keyed by the label already in contact.social.
  const contactElsewhereIcons = {
    GitHub: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>`,
    Facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.86c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z"/></svg>`,
    Instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.2" cy="6.8" r="1"/></svg>`,
    Email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/></svg>`
  };

  // "Elsewhere" list reuses contact.social (same data Home's footer
  // reads), just skips the mailto: entry — email already gets its own
  // big callout right above this list.
  function renderContactElsewhere() {
    const list = document.querySelector("[data-contact-social]");
    if (!list) return;
    list.innerHTML = "";
    const items = (activeData().contact.social || []).filter((s) => !s.href.startsWith("mailto:"));
    items.forEach((item, i) => {
      const li = document.createElement("li");
      li.className = "contact-elsewhere__item";
      li.innerHTML = `
        <a href="${item.href}" target="_blank" rel="noopener">
          <span class="contact-elsewhere__icon">${contactElsewhereIcons[item.label] || ""}</span>
          <span class="contact-elsewhere__index">${String(i + 1).padStart(2, "0")}</span>
          <span class="contact-elsewhere__label">${item.label}</span>
          <span class="contact-elsewhere__arrow">↗</span>
        </a>
      `;
      list.appendChild(li);
    });
  }

  function renderContactEmailLink() {
    const link = document.querySelector("[data-contact-email-link]");
    if (!link) return;
    link.href = "mailto:" + activeData().contactPage.sayHello.email;
  }

  /* ------------------------------------------------------------------ *
   * 6. SCROLL ENGINE — one rAF loop, normalized progress per scene
   *    (no-ops on pages with no [data-scene] elements)
   * ------------------------------------------------------------------ */
  function initScrollEngine() {
    const scenes = Array.from(document.querySelectorAll("[data-scene]"));
    if (scenes.length === 0) return;
    // .featured-work-card isn't in here — Home's Selected Work is pinned
    // now (see .scene--work.scene--pin in styles.css), so its cards share
    // the section's own --pin-p (inherited) instead of each computing an
    // independent self-progress --p.
    const selfProgressEls = Array.from(document.querySelectorAll(".work-object, .case-section"));
    let ticking = false;

    function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

    function update() {
      const vh = window.innerHeight;

      scenes.forEach((scene) => {
        const rect = scene.getBoundingClientRect();

        // pass-through progress: 0 entering from bottom, 1 leaving past top
        const p = clamp((vh - rect.top) / (vh + rect.height), 0, 1);
        scene.style.setProperty("--p", p.toFixed(4));

        if (scene.classList.contains("scene--pin")) {
          const pinRange = rect.height - vh;
          const pinP = pinRange > 0 ? clamp(-rect.top / pinRange, 0, 1) : 0;
          scene.style.setProperty("--pin-p", pinP.toFixed(4));
        }
      });

      selfProgressEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // reaches 1 exactly when the element's own center crosses the
        // viewport's center (vh - rect.top === (vh + rect.height) / 2),
        // not some distance past it — previously the row was already well
        // past center before opacity finished ramping up, so the darkening
        // visibly lagged the row lining up on screen.
        const p = clamp((2 * (vh - rect.top)) / (vh + rect.height), 0, 1);
        el.style.setProperty("--p", p.toFixed(4));
      });

      // whole-page scroll progress (0 at top, 1 at the very bottom) for the
      // fixed "rocket" scroll-progress marker — same rAF tick as everything
      // above, no separate listener.
      const maxScroll = document.documentElement.scrollHeight - vh;
      const scrollProgress = maxScroll > 0 ? clamp(window.scrollY / maxScroll, 0, 1) : 0;
      document.documentElement.style.setProperty("--scroll-progress", scrollProgress.toFixed(4));

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }

  /* ------------------------------------------------------------------ *
   * 6b. HERO MOUSE PARALLAX — cursor-follow depth on the decorative layer
   *    and portrait, on top of the existing scroll-linked --p transform
   *    (see .scene--hero .hero__deco / .hero__portrait in styles.css,
   *    which read --mx/--my alongside --p in the same translate()).
   *    Desktop hover-capable pointers only; skipped under reduced motion.
   * ------------------------------------------------------------------ */
  function initHeroParallax() {
    const hero = document.getElementById("scene-hero");
    if (!hero || prefersReducedMotion) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const deco = hero.querySelector(".hero__deco");
    const portrait = hero.querySelector(".hero__portrait");
    if (!deco && !portrait) return;

    hero.addEventListener("mousemove", (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      if (deco) {
        deco.style.setProperty("--mx", (x * 18).toFixed(2) + "px");
        deco.style.setProperty("--my", (y * 12).toFixed(2) + "px");
      }
      if (portrait) {
        portrait.style.setProperty("--mx", (x * -8).toFixed(2) + "px");
        portrait.style.setProperty("--my", (y * -6).toFixed(2) + "px");
      }
    });

    hero.addEventListener("mouseleave", () => {
      [deco, portrait].forEach((el) => {
        if (!el) return;
        el.style.setProperty("--mx", "0px");
        el.style.setProperty("--my", "0px");
      });
    });
  }

  /* ------------------------------------------------------------------ *
   * 6c. ABOUT PAGE — READING FOCUS. Whichever section's center is
   *    nearest the viewport's center (the one actually being read) sits
   *    at full opacity; every other section dims slightly, so attention
   *    settles on whatever's in the middle of the screen as you scroll.
   *    A no-op on every other page (there just aren't any .about-hero/
   *    .about-section elements to select there).
   * ------------------------------------------------------------------ */
  function initAboutFocus() {
    const sections = Array.from(document.querySelectorAll(".about-hero, .about-section"));
    if (!sections.length || prefersReducedMotion) return;
    let ticking = false;

    function update() {
      const vh = window.innerHeight;
      sections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - vh / 2);
        const maxDist = vh / 2 + rect.height / 2;
        const focus = maxDist > 0 ? 1 - Math.min(dist / maxDist, 1) : 1;
        el.style.setProperty("--focus", focus.toFixed(3));
      });
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }

  /* ------------------------------------------------------------------ *
   * 7. REVEAL-ON-ENTER — simple fades, used everywhere (incl. reduced motion)
   * ------------------------------------------------------------------ */
  function initReveal() {
    const targets = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    targets.forEach((el) => observer.observe(el));
  }

  // like initReveal, but never unobserves — toggles .is-in on/off every
  // time the element crosses the viewport edge, so it rises into place
  // scrolling down and settles/fades back out scrolling back up past it,
  // instead of staying revealed forever after the first time. Used for
  // the About page's decorative journey photos, where that back-and-forth
  // is the point (see .journey-photo in styles.css for the transition).
  function initTwoWayReveal(selector) {
    const targets = document.querySelectorAll(selector);
    if (!targets.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-in", entry.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((el) => observer.observe(el));
  }

  /* ------------------------------------------------------------------ *
   * 8. LANGUAGE SWITCH — re-runs the same renderers used at load, just
   *    against the other half of portfolioData. Nothing here reloads the
   *    page, touches scrollY, or replays the Hero entrance — only content
   *    already in the DOM gets its text swapped/rebuilt in place, so the
   *    user stays exactly where they were scrolled to.
   * ------------------------------------------------------------------ */
  function renderLanguageDependent() {
    renderNav();
    initNavMenu();
    bindStaticFields();
    renderHeroName();
    renderWork();
    if (!prefersReducedMotion) initMediaCarousels();
    renderCategoryNav();
    renderCategoryHeader();
    renderProjectPage();
    renderLearned();
    renderGallery();
    renderAboutHeroFacts();
    renderAboutWhoIAmFacts();
    renderAboutWhoIAmPhotos();
    renderAboutJourney();
    renderAboutJourneyPhotos();
    renderAboutEduTimeline();
    renderAboutEduTimelineStack();
    renderAboutSkills();
    renderAboutCertifications();
    renderAboutBuildAreas();
    renderAboutAchievements();
    renderAboutBeyondStack();
    renderAboutCurrently();
    renderFooterSocial();
    renderContactHero();
    renderContactElsewhere();
    renderContactEmailLink();
    // grids/lists above are torn down and rebuilt, so their [data-reveal]
    // children are brand-new nodes with no observer attached yet — without
    // this they'd sit at opacity:0 forever after a language switch.
    initReveal();
    // journey-photos is also rebuilt above, and its back-and-forth reveal
    // needs its own (non-unobserving) observer re-attached the same way.
    initTwoWayReveal(".journey-photo");
  }

  function updateLangButton() {
    const label = document.querySelector("[data-lang-label]");
    if (label) label.textContent = currentLang === "th" ? "EN" : "TH";
  }

  function setLanguage(lang) {
    if (lang !== "th" && lang !== "en") lang = "th";
    currentLang = lang;
    localStorage.setItem("cn-lang", lang);
    document.documentElement.lang = lang;

    const main = document.getElementById("main");
    if (main && !prefersReducedMotion) {
      main.style.opacity = "0.4";
      window.setTimeout(() => {
        renderLanguageDependent();
        updateLangButton();
        main.style.opacity = "1";
      }, 120);
    } else {
      renderLanguageDependent();
      updateLangButton();
    }
  }

  function initLang() {
    const stored = localStorage.getItem("cn-lang");
    currentLang = stored === "th" || stored === "en" ? stored : "th";
    document.documentElement.lang = currentLang;
    updateLangButton();

    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        setLanguage(currentLang === "th" ? "en" : "th");
      });
    }
  }

  /* ------------------------------------------------------------------ *
   * INIT
   * ------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    initLang();
    renderLanguageDependent();
    renderLearnedTrees();
    initHeroParallax();
    initAboutFocus();
    initEduTimelineStackReset();
    initBeyondStackReset();
    if (!prefersReducedMotion) initScrollEngine();
  });
})();
