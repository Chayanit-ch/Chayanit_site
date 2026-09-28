/**
 * Central content model, shared by every page (Home, Work, category pages,
 * project case studies, About, Contact stub).
 * Everything lives under two top-level language keys — `th` and `en` — with
 * an identical shape on both sides. Pages/renderers only know how to render
 * a shape of data; script.js picks which language object to read from
 * (see `activeData()`), so switching language never touches HTML structure,
 * only which language's copy is bound into it.
 * Replace placeholder strings with real content as it's ready — the arrays
 * below (categories, projects, etc.) must stay the same LENGTH and use the
 * same `slug`/`href` values on both sides, since those drive routing.
 */
const portfolioData = {

  en: {
    // small chrome/microcopy strings the renderers need but that aren't
    // "content" — kept here instead of hardcoded in script.js so language
    // switching never needs page-specific if/else branches.
    ui: {
      skipLink: "Skip to content",
      viewProject: "More details →",
      projectImagePlaceholder: "[PROJECT IMAGE]",
      workEmpty: "More work is on its way — check back soon.",
      backToPrefix: "← Back to ",
      allCategoriesChip: "All",
      nextProject: "Next project →",
      viewWorkLink: "Open project →",
      certificatePlaceholder: "[CERTIFICATE IMAGE]",
      resetPhotos: "↺ Reset photos",
      caseSection: { overview: "Project Overview", problem: "Problems Encountered", approach: "Solution Approach", process: "Working Process", result: "Result", learning: "What I Learned", workLink: "Project Link", certificate: "Certificate", activity: "Activity Photos" },
      caseMeta: { role: "Role", context: "Context", year: "Year", technology: "Technology" }
    },

    nav: {
      location: "Samutsakhon, Thailand",
      home: "index.html",
      avatar: "assets/คลังรูปภาพและ gallery/P1517965.JPEG",
      links: [
        { label: "Home", href: "index.html" },
        { label: "About Me", href: "about.html" },
        { label: "Work", href: "work-projects.html" },
        { label: "Contact", href: "contact.html" }
      ]
    },

    hero: {
      name: "Chayanit\nChansuttikanok",
      role: "Student at Samutsakhonburana School",
      portrait: "assets/chayanit-portrait.png",
      tags: ["Programming", "AI", "Design"]
    },

    intro: {
      eyebrow: "Introduction",
      heading: "Where I Started",
      body: "Hi, I'm Chayanit.\nI'm interested in programming, data analysis, and AI,\nstarting from one simple question:\n<strong>“How does an idea become something real?”</strong>\nToday, I'm still learning, experimenting, and building new things\nthrough projects, competitions, and hands-on practice :)",
      note: "More about my journey →"
    },

    home: {
      workEyebrow: "Work I'm Proud Of",
      workHeading: "My Selected Work",
      viewAllLabel: "View all work",
      viewAllHref: "work-projects.html",
      learnedEyebrow: "Quotes I Love",
      learnedHeading: "Words I Live By"
    },

    categories: [
      { slug: "projects", label: "Projects", description: "Various projects I've worked on." },
      { slug: "coding-ai", label: "Coding / AI", description: "Work and competitions in programming and artificial intelligence." },
      { slug: "graphic-3d", label: "Graphic / 3D", description: "Visual design and 3D modeling work." },
      { slug: "activity", label: "Activities / Volunteering", description: "Various activities and volunteer work I've taken part in." },
      { slug: "training", label: "Training / Courses", description: "Camps, trainings, and extra learning I've pursued." }
    ],

    projects: [
      {
        slug: "clock-drawing-test",
        index: "01",
        title: "Clock Drawing Test Dementia Screening",
        description: "An AI system that analyzes clock-drawing images and automatically screens for dementia risk, scoring against the Chula Clock Drawing Scoring System.",
        category: "projects",
        year: "2026",
        featured: true,
        heroImage: null,
        gallery: ["assets/AI Builders clock drawing/749213776_1051888347590083_6154981981130816501_n_Original.jpg", "assets/AI Builders clock drawing/IMG_1784.jpg", "assets/AI Builders clock drawing/IMG_1790.JPG", "assets/AI Builders clock drawing/IMG_1793.JPG", "assets/AI Builders clock drawing/IMG_1794.JPG", "assets/AI Builders clock drawing/IMG_1804.JPG", "assets/AI Builders clock drawing/IMG_1808.JPG", "assets/AI Builders clock drawing/IMG_1811.JPG", "assets/AI Builders clock drawing/IMG_1892.JPG", "assets/AI Builders clock drawing/IMG_20260719_145336.JPG", "assets/cer/cer aibuilders.png"],

        role: "Student selected for the AI Builders program",
        context: "1 of 40 projects selected",
        result: "Judges' Choice Award — AI Builders",
        technologies: ["Deep Learning", "Vision Transformer", "LLM", "Streamlit", "Python"],
        workLinks: [
          { label: "GitHub", href: "https://github.com/Chayanit-ch/cdt-dementia-screening" },
          { label: "Blog Medium", href: "https://medium.com/@baitoey8344/assessing-dementia-risk-by-clock-drawing-test-based-on-the-ccss-scoring-system-using-deep-learning-10328adc8a57?sharedUserId=baitoey8344" },
          { label: "Streamlit", href: "https://cdt-dementia-screening-as7vhbgavmfsmc9np9o5r7.streamlit.app/" }
        ],
        certificateImages: ["assets/cer/cer aibuilders.png"],

        activityPhotos: ["assets/AI Builders clock drawing/749213776_1051888347590083_6154981981130816501_n_Original.jpg", "assets/AI Builders clock drawing/IMG_1784.jpg", "assets/AI Builders clock drawing/IMG_1790.JPG", "assets/AI Builders clock drawing/IMG_1793.JPG", "assets/AI Builders clock drawing/IMG_1794.JPG", "assets/AI Builders clock drawing/IMG_1804.JPG", "assets/AI Builders clock drawing/IMG_1808.JPG", "assets/AI Builders clock drawing/IMG_1811.JPG", "assets/AI Builders clock drawing/IMG_1892.JPG", "assets/AI Builders clock drawing/IMG_20260719_145336.JPG", "assets/cer/cer aibuilders.png"],

        caseStudy: {
          overview: "An AI system for preliminary dementia-risk screening from the Clock Drawing Test, using deep learning to automatically analyze a patient's drawing of a clock showing 11:10, scoring against all 5 domains of the CCSS (Chula Clock Drawing Scoring System) — a score below 6 indicates risk of dementia.",
          problem: "The training dataset had heavy class imbalance, biasing the model toward the more common class, and there was a lack of datasets labeled across all 5 CCSS domains.",
          approach: "Generated labels with an LLM, then experimented with several model architectures, from Vision Transformers to a hybrid model fusing VQA features from an LLM, with Focal Loss to address class imbalance, plus data augmentation and oversampling to improve model performance.",
          process: "Tested a range of models, then deployed the final system via a Streamlit web application that supports both image upload and drawing directly on the page for automatic analysis.",
          result: "One of 40 projects selected for the AI Builders program, developed over a continuous 10-week project; selected to present at Siam Paragon and won the Judges' Choice Award for poster presentation.",
          learning: "Built AI knowledge spanning data preparation, model development and refinement, and real-world deployment, along with problem-solving, data management, and time management."
        }
      },
      {
        slug: "airsync",
        index: "02",
        title: "AirSync",
        description: "A web application for monitoring, alerting, and encouraging public participation in tackling PM2.5 dust pollution in an integrated way.",
        category: "projects",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/airsync/DSC_2275.JPEG", "assets/airsync/IMG_2470.JPG", "assets/airsync/IMG_2471.JPG", "assets/airsync/IMG_2472.JPG", "assets/airsync/IMG_2473.JPG", "assets/airsync/IMG_2474.JPG", "assets/airsync/IMG_2607.JPG", "assets/airsync/IMG_2613.JPG", "assets/airsync/IMG_2620.JPG", "assets/airsync/IMG_2621.JPG", "assets/airsync/IMG_2622.JPG", "assets/airsync/IMG_2624.JPG", "assets/airsync/IMG_2625.JPG", "assets/airsync/IMG_6778.JPEG", "assets/cer/cer airsync1.png", "assets/cer/cer airsync2.png"],

        role: "Web Application Developer",
        context: "Clean Air for Life Innovation Competition, Phetchaburi Rajabhat University",
        result: "Honorable Mention & Popular Vote — Clean Air for Life",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Leaflet", "Firebase", "Vercel"],
        workLinks: [{ label: "Web App", href: "https://airsync-eta.vercel.app/" }],
        certificateImages: ["assets/cer/cer airsync1.png", "assets/cer/cer airsync2.png"],
        activityPhotos: ["assets/airsync/DSC_2275.JPEG", "assets/airsync/IMG_2470.JPG", "assets/airsync/IMG_2471.JPG", "assets/airsync/IMG_2472.JPG", "assets/airsync/IMG_2473.JPG", "assets/airsync/IMG_2474.JPG", "assets/airsync/IMG_2607.JPG", "assets/airsync/IMG_2613.JPG", "assets/airsync/IMG_2620.JPG", "assets/airsync/IMG_2621.JPG", "assets/airsync/IMG_2622.JPG", "assets/airsync/IMG_2624.JPG", "assets/airsync/IMG_2625.JPG", "assets/airsync/IMG_6778.JPEG", "assets/cer/cer airsync1.png", "assets/cer/cer airsync2.png"],

        caseStudy: {
          overview: "A web application for monitoring and alerting on PM2.5 air quality, with a citizen-reporting system for pollution sources, built to widen access to air-quality data at the community level — applying real-time air-quality mapping and gamification to keep citizens engaged in ongoing reporting and monitoring.",
          problem: "Communities lacked fast, participatory access to air-quality data, making it hard to monitor or report pollution sources — like open burning, smoke-belching vehicles, and polluting factories — in time. Monitoring stations were also limited and didn't cover every area, leaving people without the information they needed to protect themselves from air pollution.",
          approach: "Designed a dashboard showing real-time PM2.5 and AQI readings, alongside an air-quality map, threshold-based alerts, and a citizen incident-reporting system with photos and location data — pulling from multiple data sources for the widest possible coverage, with gamification to keep citizens engaged in ongoing reporting and monitoring.",
          process: "Built as a mobile-first web application with React, TypeScript, Tailwind CSS, and Leaflet, plus a news and knowledge section about PM2.5.",
          result: "Advanced past the project-proposal round to the presentation round, and won an Honorable Mention and the Popular Vote award at Clean Air for Life: Mission to Beat PM2.5, Faculty of Information Technology, Phetchaburi Rajabhat University.",
          learning: "Developed skills in problem analysis, software design and development, troubleshooting during development, and time management — aiming to grow this into a platform that sustains community participation in tackling air pollution."
        }
      },
      {
        slug: "mindbloom",
        index: "03",
        title: "MindBloom",
        description: "A web application for mental health assessment and emotional-awareness tracking, applying AI and gamification.",
        category: "projects",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/mindbloom/Screenshot 2569-09-21 at 15.35.24.png", "assets/mindbloom/Screenshot 2569-09-21 at 15.35.29.png", "assets/mindbloom/Screenshot 2569-09-21 at 15.35.44.png", "assets/mindbloom/Screenshot 2569-09-21 at 15.36.02.png", "assets/mindbloom/mindbloom1.png", "assets/mindbloom/mindbloom2.png"],

        role: "Web Application Developer",
        context: "Personal project to promote preventive mental health care for teenagers",
        result: "Built a prototype web app for mental health assessment and emotional-awareness tracking, with a risk-alert system for caregivers",
        technologies: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Firebase"],
        workLinks: [{ label: "Demo Web App", href: "https://mindbloom-4edd3.web.app/" }, { label: "วิธีการใช้งาน", href: "https://drive.google.com/drive/folders/1xmnZlOWaiITqtfA5bFbtjakRqwsT84iL?usp=sharing" }],
        certificateImages: [],
        activityPhotos: ["assets/mindbloom/Screenshot 2569-09-21 at 15.35.24.png", "assets/mindbloom/Screenshot 2569-09-21 at 15.35.29.png", "assets/mindbloom/Screenshot 2569-09-21 at 15.35.44.png", "assets/mindbloom/Screenshot 2569-09-21 at 15.36.02.png", "assets/mindbloom/mindbloom1.png", "assets/mindbloom/mindbloom2.png"],

        caseStudy: {
          overview: "Many teenagers lack easily accessible tools to track and care for their own mental health before problems escalate, and caregivers often lack a timely way to learn about risk — which led to building a web application for preventive mental health support, with a tracking and alert system that flags risk to caregivers, to widen access to basic mental-health tools.",
          problem: "Had to be careful about the privacy and security of users' mental-health data, design for teenagers and caregivers with very different comfort levels with technology, and figure out how to keep users engaged in tracking their own mood consistently over time.",
          approach: "Designed a dashboard for daily mood logging with trend graphs, a gamification system where a character grows based on self-care, and AI that analyzes mood and suggests personalized coping strategies — without going into personal detail about the user. Also designed a risk-alert system for caregivers, paired with a preliminary mental-health assessment using the PHQ-9, GAD-7, and PSS-10 questionnaires; no personal user data is analyzed or stored by the system. Built as a mobile-first web application for easy access.",
          process: "Built an AI chatbot for mental-health conversations, PHQ-9, GAD-7, and PSS-10 assessments, an early-warning system that alerts automatically when risk is detected, and an admin dashboard for caregivers — all as a mobile-first web application with React, TypeScript, Tailwind CSS, and Firebase.",
          result: "Built a prototype web app for mental health assessment and emotional-awareness tracking, with a risk-alert system for caregivers, with the potential to grow into a platform for sustainable, community-level preventive mental health care and eventually a real application.",
          learning: "Developed skills in analyzing teen mental-health problems, designing psychology-informed software, integrating AI into a real application, troubleshooting during development, and time management — aiming to grow this into a platform for sustainable, community-level preventive mental health care."
        }
      },
      {
        slug: "check-skburana",
        index: "04",
        title: "Check Skburana Attendance System",
        description: "Co-developed an attendance-checking website for Samutsakhonburana School, currently in active use.",
        category: "projects",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/check skburana/Screenshot 2569-09-21 at 15.36.58.png", "assets/check skburana/Screenshot 2569-09-21 at 15.37.16.png", "assets/check skburana/Screenshot 2569-09-21 at 15.37.26.png", "assets/check skburana/Screenshot 2569-09-21 at 15.37.38.png", "assets/check skburana/Screenshot 2569-09-21 at 15.37.54.png", "assets/check skburana/Screenshot 2569-09-21 at 15.38.39.png", "assets/cer/cer check skburana.PNG"],
        role: "Developer — attendance statistics and charts for the admin dashboard, UI/UX design, and PDF/Excel report export",
        context: "Built for Samutsakhonburana School",
        result: "In active use at Samutsakhonburana School",
        technologies: ["HTML", "CSS", "PHP", "JavaScript", "MySQL", "Chart.js", "html2canvas"],
        workLinks: [],
        certificateImages: ["assets/cer/cer check skburana.PNG"],

        activityPhotos: ["assets/check skburana/Screenshot 2569-09-21 at 15.36.58.png", "assets/check skburana/Screenshot 2569-09-21 at 15.37.16.png", "assets/check skburana/Screenshot 2569-09-21 at 15.37.26.png", "assets/check skburana/Screenshot 2569-09-21 at 15.37.38.png", "assets/check skburana/Screenshot 2569-09-21 at 15.37.54.png", "assets/check skburana/Screenshot 2569-09-21 at 15.38.39.png", "assets/cer/cer check skburana.PNG"],
        caseStudy: {
          overview: "An attendance-checking system for Samutsakhonburana School, built as a mobile-first web application, currently in active use — built with PHP, JavaScript, and MySQL, tested on a local XAMPP server.",
          problem: "The school needed an attendance system supporting multiple user levels (students, teachers, and admins), with attendance statistics that are easy to analyze and track, to reduce teachers' workload.",
          approach: "The system covers attendance logging, real-time statistics, user management, and PDF/Excel report export; I was responsible for the attendance statistics and charts for the admin dashboard, multi-level data analysis, report export, and UI/UX design using Chart.js and html2canvas.",
          process: "Worked with a development team, testing on a local XAMPP server before deployment to the school.",
          result: "The system is now in active use at Samutsakhonburana School, improving attendance tracking and reducing teachers' workload.",
          learning: "Helped develop skills in software design and development, database management, troubleshooting from real-world usage, working with a team, and refining the system based on user feedback."
        }
      },
      {
        slug: "jwc-readdiva",
        index: "05",
        title: "Readdiva — Junior Web Master Camp 14",
        description: "A platform that makes reading more fun and engaging through a territory-capture reading competition, built at Junior Web Master Camp 14.",
        category: "projects",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/jwc/27BC3C75-3A7E-44B4-8C57-526E67E58CEB.JPG", "assets/jwc/DSC00426.JPEG", "assets/jwc/DSC06161.JPEG", "assets/jwc/DSC_5345.JPEG", "assets/jwc/DSC_8111.JPEG", "assets/jwc/F363F9F1-EB53-4C50-B959-F3E326F7BE6E.JPG", "assets/jwc/IMG_0030.JPEG", "assets/jwc/IMG_0031.JPEG", "assets/jwc/IMG_1013.jpg", "assets/jwc/IMG_1021.jpg", "assets/jwc/IMG_1032.jpg", "assets/jwc/IMG_1055.jpg", "assets/jwc/IMG_1059.jpg", "assets/jwc/IMG_3313.jpg", "assets/jwc/IMG_3317.jpg", "assets/jwc/IMG_3322.jpg", "assets/jwc/IMG_5407.jpg", "assets/jwc/IMG_5610.JPEG", "assets/jwc/IMG_7368.jpg", "assets/jwc/IMG_9405.jpg", "assets/jwc/IMG_9487.jpg", "assets/jwc/IMG_9494.jpg", "assets/cer/cer jwc.png"],

        role: "Selected for the camp's Web Programming track",
        context: "Junior Web Master Camp 14 — Hackathon: “Start Small, Think Big”",
        result: "Hackathon prototype built in 6 hours",
        technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
        workLinks: [{ label: "Web App", href: "https://readdiva.in.th" }],
        certificateImages: ["assets/cer/cer jwc.png"],

        activityPhotos: ["assets/jwc/27BC3C75-3A7E-44B4-8C57-526E67E58CEB.JPG", "assets/jwc/DSC00426.JPEG", "assets/jwc/DSC06161.JPEG", "assets/jwc/DSC_5345.JPEG", "assets/jwc/DSC_8111.JPEG", "assets/jwc/F363F9F1-EB53-4C50-B959-F3E326F7BE6E.JPG", "assets/jwc/IMG_0030.JPEG", "assets/jwc/IMG_0031.JPEG", "assets/jwc/IMG_1013.jpg", "assets/jwc/IMG_1021.jpg", "assets/jwc/IMG_1032.jpg", "assets/jwc/IMG_1055.jpg", "assets/jwc/IMG_1059.jpg", "assets/jwc/IMG_3313.jpg", "assets/jwc/IMG_3317.jpg", "assets/jwc/IMG_3322.jpg", "assets/jwc/IMG_5407.jpg", "assets/jwc/IMG_5610.JPEG", "assets/jwc/IMG_7368.jpg", "assets/jwc/IMG_9405.jpg", "assets/jwc/IMG_9487.jpg", "assets/jwc/IMG_9494.jpg", "assets/cer/cer jwc.png"],

        caseStudy: {
          overview: "A project from Junior Web Master Camp 14 (JWC14) — a camp for building web development and digital technology skills, covering web fundamentals, UX/UI, prototyping, and cross-functional teamwork across Programming, Design, Marketing, and Content.",
          problem: "The hackathon brief, under the theme “Start Small, Think Big,” called for finding a problem most people overlook and designing a website that sparks an idea and changes the world for good.",
          approach: "Co-developed Readdiva, a platform that makes reading more fun and engaging through a territory-capture reading competition.",
          process: "Responsible for web programming, building a website prototype with the team within a 6-hour window.",
          result: "Successfully presented the Readdiva website prototype within the time limit.",
          learning: "Developed skills in web development, teamwork, problem-solving under time constraints, and pitching an innovative concept that addresses a real social problem."
        }
      },
      {
        slug: "posn-computer-camp-2",
        index: "01",
        title: "POSN Computer Camp 2",
        description: "Completed POSN (Thailand Olympiad) Computer Camp 2 at Silpakorn University.",
        category: "coding-ai",
        year: "2024 - 2026",
        featured: true,
        heroImage: null,
        gallery: ["assets/สอวน/IMG_0198.JPEG", "assets/สอวน/IMG_0243.JPG", "assets/สอวน/IMG_0260.JPG", "assets/สอวน/IMG_0325.JPG", "assets/สอวน/IMG_0356.JPG", "assets/สอวน/IMG_0388.JPG", "assets/สอวน/IMG_0393.JPG", "assets/สอวน/IMG_0396.JPG", "assets/สอวน/IMG_0398.JPG", "assets/สอวน/IMG_0416.JPEG", "assets/สอวน/IMG_0454.JPEG", "assets/สอวน/IMG_3963.JPG", "assets/สอวน/IMG_3971.JPG", "assets/สอวน/IMG_4123.JPG", "assets/สอวน/IMG_4200.JPG", "assets/สอวน/IMG_4201.JPG", "assets/สอวน/IMG_4226.JPG", "assets/สอวน/IMG_4228.JPG", "assets/สอวน/IMG_4237.JPG", "assets/สอวน/IMG_4238.JPG", "assets/สอวน/IMG_4241.JPG", "assets/สอวน/IMG_4243.JPG", "assets/สอวน/IMG_4244.JPG", "assets/สอวน/IMG_4245.JPG", "assets/สอวน/IMG_5831.JPG", "assets/สอวน/IMG_5832.JPG", "assets/สอวน/IMG_5834.JPG", "assets/สอวน/IMG_5835.JPG", "assets/สอวน/IMG_5836.JPG", "assets/สอวน/IMG_5837.JPG", "assets/สอวน/IMG_6705.JPG", "assets/สอวน/IMG_6706.JPG", "assets/สอวน/IMG_6707.JPG", "assets/สอวน/IMG_6709.JPG", "assets/สอวน/IMG_6712.JPG", "assets/สอวน/IMG_8409.JPG", "assets/สอวน/IMG_8413.JPG", "assets/สอวน/IMG_8430.JPG", "assets/สอวน/IMG_8434.JPG", "assets/สอวน/IMG_8456.JPG", "assets/สอวน/IMG_8471.JPG", "assets/สอวน/IMG_8478.JPG", "assets/สอวน/IMG_8510.JPG", "assets/สอวน/IMG_8513.JPG", "assets/สอวน/IMG_8519.JPG", "assets/สอวน/IMG_8524.JPG", "assets/สอวน/IMG_8527.JPG", "assets/สอวน/IMG_8528.JPG", "assets/สอวน/IMG_8529.JPG", "assets/สอวน/IMG_8536.JPG", "assets/สอวน/IMG_8561.JPG", "assets/สอวน/IMG_8570.JPG", "assets/สอวน/IMG_8573.JPG", "assets/cer/cer posn com.png", "assets/cer/cer posn com2.png"],

        role: "Trainee",
        context: "POSN Computer Olympiad Camp, Silpakorn University Center",
        result: "Completed Camp 2 in the Computer track",
        technologies: ["C", "C++", "Algorithms", "Data Structures"],
        workLinks: [],
        certificateImages: ["assets/cer/cer posn com.png", "assets/cer/cer posn com2.png"],

        activityPhotos: ["assets/สอวน/IMG_0198.JPEG", "assets/สอวน/IMG_0243.JPG", "assets/สอวน/IMG_0260.JPG", "assets/สอวน/IMG_0325.JPG", "assets/สอวน/IMG_0356.JPG", "assets/สอวน/IMG_0388.JPG", "assets/สอวน/IMG_0393.JPG", "assets/สอวน/IMG_0396.JPG", "assets/สอวน/IMG_0398.JPG", "assets/สอวน/IMG_0416.JPEG", "assets/สอวน/IMG_0454.JPEG", "assets/สอวน/IMG_3963.JPG", "assets/สอวน/IMG_3971.JPG", "assets/สอวน/IMG_4123.JPG", "assets/สอวน/IMG_4200.JPG", "assets/สอวน/IMG_4201.JPG", "assets/สอวน/IMG_4226.JPG", "assets/สอวน/IMG_4228.JPG", "assets/สอวน/IMG_4237.JPG", "assets/สอวน/IMG_4238.JPG", "assets/สอวน/IMG_4241.JPG", "assets/สอวน/IMG_4243.JPG", "assets/สอวน/IMG_4244.JPG", "assets/สอวน/IMG_4245.JPG", "assets/สอวน/IMG_5831.JPG", "assets/สอวน/IMG_5832.JPG", "assets/สอวน/IMG_5834.JPG", "assets/สอวน/IMG_5835.JPG", "assets/สอวน/IMG_5836.JPG", "assets/สอวน/IMG_5837.JPG", "assets/สอวน/IMG_6705.JPG", "assets/สอวน/IMG_6706.JPG", "assets/สอวน/IMG_6707.JPG", "assets/สอวน/IMG_6709.JPG", "assets/สอวน/IMG_6712.JPG", "assets/สอวน/IMG_8409.JPG", "assets/สอวน/IMG_8413.JPG", "assets/สอวน/IMG_8430.JPG", "assets/สอวน/IMG_8434.JPG", "assets/สอวน/IMG_8456.JPG", "assets/สอวน/IMG_8471.JPG", "assets/สอวน/IMG_8478.JPG", "assets/สอวน/IMG_8510.JPG", "assets/สอวน/IMG_8513.JPG", "assets/สอวน/IMG_8519.JPG", "assets/สอวน/IMG_8524.JPG", "assets/สอวน/IMG_8527.JPG", "assets/สอวน/IMG_8528.JPG", "assets/สอวน/IMG_8529.JPG", "assets/สอวน/IMG_8536.JPG", "assets/สอวน/IMG_8561.JPG", "assets/สอวน/IMG_8570.JPG", "assets/สอวน/IMG_8573.JPG", "assets/cer/cer posn com.png", "assets/cer/cer posn com2.png"],

        caseStudy: {
          overview: "The POSN Computer Olympiad Camp was a great opportunity to learn step-by-step logical thinking, and a starting point for picking up other programming languages later.",
          problem: "Needed to build a foundation in systematic logical thinking and programming before tackling more complex algorithm problems.",
          approach: "Developed skills in designing flowcharts to communicate a process's steps, and practiced programming continuously in C and C++, while learning concepts and techniques for solving increasingly complex algorithm problems.",
          process: "Studied key algorithms such as Binary Search, Merge Sort, Decision Tree, BFS, DFS, Dijkstra's Algorithm, and more, along with data structures like Arrays, Linked Lists, Stacks, Queues, Trees, and Graphs.",
          result: "Completed Camp 2 in the Computer track with a stronger foundation for programming and higher-level competitions, and placed as the 2nd reserve candidate in the selection for the POSN Computer Olympiad Center representative team at Silpakorn University.",
          learning: "Gained programming knowledge, developed logical thinking and many other skills from this camp, along with experience in self-management, punctuality, and living alongside others throughout the camp — and made new friends along the way."
        }
      },
      {
        slug: "nova-data",
        index: "10",
        title: "Nova Data: Ignite Your Insight Galaxy",
        description: "Won 1st place in the Nova Data: Ignite Your Insight Galaxy data-science competition.",
        category: "coding-ai",
        year: "2026",
        featured: true,
        heroImage: null,
        gallery: ["assets/nova data/IMG_2728.jpg", "assets/nova data/IMG_2734.PNG", "assets/nova data/IMG_2740.JPG", "assets/nova data/IMG_2741.JPG", "assets/nova data/IMG_2913.JPG", "assets/nova data/IMG_6096.JPG", "assets/nova data/IMG_6100.JPG", "assets/nova data/IMG_6110.JPG", "assets/nova data/IMG_6112.JPG", "assets/nova data/att.eO_IjoMbIDNcYwTW1A1ERVaOlQYti9Irov-9Cs4rrZs.JPG", "assets/cer/cer nova data.png"],

        role: "Lead planner and data analyst",
        context: "IT Ladkrabang Open House 2026",
        result: "1st Place — Nova Data: Ignite Your Insight Galaxy",
        technologies: ["Data Analysis", "Machine Learning", "Python"],
        workLinks: [],
        certificateImages: ["assets/cer/cer nova data.png"],

        activityPhotos: ["assets/nova data/IMG_2728.jpg", "assets/nova data/IMG_2734.PNG", "assets/nova data/IMG_2740.JPG", "assets/nova data/IMG_2741.JPG", "assets/nova data/IMG_2913.JPG", "assets/nova data/IMG_6096.JPG", "assets/nova data/IMG_6100.JPG", "assets/nova data/IMG_6110.JPG", "assets/nova data/IMG_6112.JPG", "assets/nova data/att.eO_IjoMbIDNcYwTW1A1ERVaOlQYti9Irov-9Cs4rrZs.JPG", "assets/cer/cer nova data.png"],

        caseStudy: {
          overview: "A data-science competition built on a car-dealership business dataset, with the challenge of analyzing the factors affecting the business and proposing ways to grow it.",
          problem: "The business data was large and complex, and the real factors driving revenue and growth had to be found.",
          approach: "Applied a data science process from understanding the data, to finding patterns and relationships, to applying machine learning to help analyze it and answer the business question.",
          process: "The team interpreted the results together and turned them into recommendations that could actually inform business decisions, applying AI to help analyze the data and build predictive models, then presenting them in a way that was easy for judges to understand. Since AI assistance was allowed in this competition, we used it while staying the ones who framed the questions and interpreted the AI's output, so the final recommendations stayed grounded in the business's real needs.",
          result: "Won 1st place at Nova Data: Ignite Your Insight Galaxy, IT Ladkrabang Open House 2026.",
          learning: "Found that large volumes of data can become a powerful decision-making tool when you ask the right questions, analyze properly, and connect results back to the problem — and discovered a genuine interest in turning data into understanding and meaningful solutions. Also picked up teamwork, communicating results, and presenting data effectively."
        }
      },
      {
        slug: "compas-py1",
        index: "07",
        title: "COMPAS-PY1",
        description: "Passed COMPAS-PY1, organized by the Faculty of Engineering, Chulalongkorn University.",
        category: "coding-ai",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/compas/IMG_0581.jpg", "assets/cer/cer compas.png", "assets/cer/cer compas2.png"],
        role: "Test-taker",
        context: "Organized by the Faculty of Engineering, Chulalongkorn University",
        result: "Passed the basic Python programming proficiency test",
        technologies: ["Python"],
        workLinks: [],
        certificateImages: ["assets/cer/cer compas.png", "assets/cer/cer compas2.png"],

        activityPhotos: ["assets/compas/IMG_0581.jpg", "assets/cer/cer compas.png", "assets/cer/cer compas2.png"],
        caseStudy: {
          overview: "Took a proficiency test in basic Python programming.",
          problem: "",
          approach: "",
          process: "",
          result: "Passed the COMPAS-PY1 test.",
          learning: "Assessed and developed skills in programming, logical thinking, and systematic problem analysis."
        }
      },
      {
        slug: "cefr-test",
        index: "08",
        title: "CEFR English Proficiency Test — B1",
        description: "Took the CEFR English proficiency test and achieved level B1 (Intermediate).",
        category: "training",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/Proficiency Achievement Certificate - Chayanit Chansuttikanok.png"],
        role: "Test-taker",
        context: "CEFR (Common European Framework of Reference for Languages)",
        result: "B1 (Intermediate) result",
        technologies: [],
        workLinks: [],
        certificateImages: ["assets/cer/Proficiency Achievement Certificate - Chayanit Chansuttikanok.png"],
        activityPhotos: ["assets/cer/Proficiency Achievement Certificate - Chayanit Chansuttikanok.png"],
        caseStudy: {
          overview: "Took the CEFR English proficiency test, reflecting the ability to communicate in everyday situations and understand everyday content in English.",
          problem: "",
          approach: "",
          process: "",
          result: "Achieved a B1 (Intermediate) result.",
          learning: "Assessed my English proficiency and identified ways to keep improving."
        }
      },
      {
        slug: "cu-tep-test",
        index: "09",
        title: "CU-TEP English Proficiency Test",
        description: "Took the CU-TEP English proficiency test, organized by Chulalongkorn University.",
        category: "training",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/CU-TEP/Screenshot 2569-09-23 at 00.08.56.png"],
        role: "Test-taker",
        context: "Chulalongkorn University Academic Testing Center",
        result: "Completed all 3 sections of the CU-TEP test (listening, reading, writing)",
        technologies: [],
        workLinks: [],
        certificateImages: [],
        activityPhotos: ["assets/CU-TEP/Screenshot 2569-09-23 at 00.08.56.png"],
        caseStudy: {
          overview: "Took the CU-TEP exam to assess listening, reading, and writing skills in the test's set format.",
          problem: "",
          approach: "",
          process: "",
          result: "Completed every section of the CU-TEP test.",
          learning: "Assessed my English proficiency, practiced using the language systematically, and used the results to guide further improvement."
        }
      },
      {
        slug: "r-u-ready-data-analytics",
        index: "11",
        title: "R You Ready for Data Analytics",
        description: "Won 1st runner-up at R You Ready for Data Analytics.",
        category: "coding-ai",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/R you ready for analysys/IMG_2301.JPG", "assets/R you ready for analysys/IMG_2744.JPG", "assets/R you ready for analysys/att.3PsxPybp1mkGmdOWBcd_BdOWSke9hJkDJZd4_CW47ao.JPG", "assets/R you ready for analysys/att.ncSuxJnTfljcGfQGwes0FeM9Pu3BKIiInQ4f2GfyBdY.JPG", "assets/cer/cer R U ready for data analysis.png"],

        role: "Data Analyst",
        context: "Silpakorn University Science Week & Open House",
        result: "Won 1st runner-up",
        technologies: ["R", "RStudio", "Python", "Pandas", "NumPy"],
        workLinks: [],
        certificateImages: ["assets/cer/cer R U ready for data analysis.png"],

        activityPhotos: ["assets/R you ready for analysys/IMG_2301.JPG", "assets/R you ready for analysys/IMG_2744.JPG", "assets/R you ready for analysys/att.3PsxPybp1mkGmdOWBcd_BdOWSke9hJkDJZd4_CW47ao.JPG", "assets/R you ready for analysys/att.ncSuxJnTfljcGfQGwes0FeM9Pu3BKIiInQ4f2GfyBdY.JPG", "assets/cer/cer R U ready for data analysis.png"],

        caseStudy: {
          overview: "A data-analysis competition using R and RStudio, at Silpakorn University's Science Week and open house.",
          problem: "Had to analyze and interpret the given dataset accurately and quickly under a time limit.",
          approach: "Learned the basics of data analysis with R and RStudio, then applied that in the competition.",
          process: "Also used tools like Python, Pandas, and NumPy to prepare, analyze, and find interesting patterns in the data.",
          result: "Won 1st runner-up at R You Ready for Data Analytics.",
          learning: "Developed skills in data analytics, systematic analytical thinking, and choosing the right programming tools for data work."
        }
      },
      {
        slug: "programming-silpakorn",
        index: "12",
        title: "Silpakorn University Computer Programming Competition",
        description: "Won an honorable mention at the Silpakorn University computer programming competition.",
        category: "coding-ai",
        year: "2025 - 2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_2280.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_2284.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_2298.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8057.jpg", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8060.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8074.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8076.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9217.jpg", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9218.jpg", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9220.jpg", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9221.jpg", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9230.jpg", "assets/cer/cer เขียนโปรแกรมศิลปากร.png", "assets/cer/cer  เขียนโปรแกรมศิลปากร2.png", "assets/cer/cer เขียนโปรแกรมศิลปากร 3.png"],

        role: "Competitor",
        context: "Silpakorn University Science Week & Open House",
        result: "Honorable Mention",
        technologies: ["Programming", "Algorithms"],
        workLinks: [],
        certificateImages: ["assets/cer/cer เขียนโปรแกรมศิลปากร.png", "assets/cer/cer  เขียนโปรแกรมศิลปากร2.png", "assets/cer/cer เขียนโปรแกรมศิลปากร 3.png"],

        activityPhotos: ["assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_2280.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_2284.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_2298.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8057.jpg", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8060.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8074.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8076.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9217.jpg", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9218.jpg", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9220.jpg", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9221.jpg", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9230.jpg", "assets/cer/cer เขียนโปรแกรมศิลปากร.png", "assets/cer/cer  เขียนโปรแกรมศิลปากร2.png", "assets/cer/cer เขียนโปรแกรมศิลปากร 3.png"],

        caseStudy: {
          overview: "A computer programming competition at Silpakorn University's Science Week.",
          problem: "Had to solve problems through programming under a time limit.",
          approach: "Analyzed the problem, planned a solution's steps, and chose an appropriate programming approach, applying algorithm and data-structure knowledge from POSN camp to solve problems efficiently.",
          process: "",
          result: "Won an honorable mention.",
          learning: "Developed programming skills and step-by-step logical analytical thinking, along with working under pressure and time constraints."
        }
      },
      {
        slug: "bebras-thailand",
        index: "13",
        title: "Bebras Thailand — Best of School",
        description: "Won Best of School at Bebras Thailand and advanced to the national scholarship round.",
        category: "coding-ai",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/bebras/att.UMB876DbfDAlmYaK9h9V8XhPXEZutbznvMs3rwy_-9U.JPG", "assets/bebras/att.lP3UDqa2l2T7wQfF4T7Dlq77e-IXZ31By3W3WfQzGFI.JPG", "assets/cer/cer bebras.png", "assets/cer/cer bebras รอบประเทศ.png"],

        role: "Test-taker",
        context: "Bebras Thailand computational thinking test",
        result: "Best of School; advanced to national scholarship round",
        technologies: ["Computational Thinking"],
        workLinks: [],
        certificateImages: ["assets/cer/cer bebras.png", "assets/cer/cer bebras รอบประเทศ.png"],

        activityPhotos: ["assets/bebras/att.UMB876DbfDAlmYaK9h9V8XhPXEZutbznvMs3rwy_-9U.JPG", "assets/bebras/att.lP3UDqa2l2T7wQfF4T7Dlq77e-IXZ31By3W3WfQzGFI.JPG", "assets/cer/cer bebras.png", "assets/cer/cer bebras รอบประเทศ.png"],

        caseStudy: {
          overview: "A national computational-thinking and computer-science test.",
          problem: "Problems required weighing conditions, analyzing data, and sequencing steps to find a suitable solution.",
          approach: "Practiced systematic analytical and problem-solving thinking for each problem's conditions.",
          process: "",
          result: "Won Best of School and advanced to the national scholarship competition round.",
          learning: "Built logical thinking, step-by-step reasoning, and applying computational concepts to solve problems."
        }
      },
      {
        slug: "bangmod-hackathon-game-education",
        index: "14",
        title: "Bangmod Hackathon: Game Education — Make It Up",
        description: "Advanced past the first nationwide proposal round of Bangmod Hackathon, Game Education theme.",
        category: "coding-ai",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/bangmod hack game/Screenshot 2026-09-05 231705.png", "assets/cer/cer bangmod game education.PNG"],
        role: "Lead designer and planner",
        context: "Bangmod Hackathon, Game Education theme (1 of 50 teams nationwide)",
        result: "Advanced past the first proposal round",
        technologies: ["Roblox", "Game-Based Learning"],
        workLinks: [{ label: "ข้อเสนอโครงงาน", href: "https://drive.google.com/file/d/11AMQosWtgDF7hP1AzdPEHyIsKfc2Xkq_/view?usp=sharing" }],
        certificateImages: ["assets/cer/cer bangmod game education.PNG"],

        activityPhotos: ["assets/bangmod hack game/Screenshot 2026-09-05 231705.png", "assets/cer/cer bangmod game education.PNG"],
        caseStudy: {
          overview: "The Game Education brief called for an educational game to help develop youth. My team and I saw that youth aged 10–18 still lacked a concrete, fun tool for building decision-making, planning, and life-management skills.",
          problem: "",
          approach: "So we proposed \"Make It Up,\" an educational game on Roblox, designed around Game-Based Learning and the LADDER Model.",
          process: "Designed a simulation where players manage time, money, energy, stress, and learning under various constraints.",
          result: "One of 50 teams nationwide selected to advance past the first project-proposal round.",
          learning: "Practiced designing a fun, engaging learning experience that concretely builds systems thinking."
        }
      },
      {
        slug: "it-clash",
        index: "15",
        title: "IT CLASH: The Battle of IT - Coding Track",
        description: "Competed in IT CLASH: The Battle of IT - Coding Track, organized by KMITL.",
        category: "coding-ai",
        year: "2025 - 2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer it clash.png"],
        role: "Competitor",
        context: "Faculty of Information Technology, King Mongkut's Institute of Technology Ladkrabang",
        result: "Advanced to the first round",
        technologies: ["Python"],
        workLinks: [],
        certificateImages: ["assets/cer/cer it clash.png"],

        activityPhotos: ["assets/cer/cer it clash.png"],
        caseStudy: {
          overview: "A competition testing programming and problem-solving skills.",
          problem: "Had to analyze the problem and break it into steps under time constraints.",
          approach: "Designed a solution approach and programmed in Python.",
          process: "",
          result: "Successfully advanced to the first round.",
          learning: "Developed logical thinking and systematic problem-solving."
        }
      },
      {
        slug: "bangmod-hackathon-online",
        index: "16",
        title: "Bangmod Hackathon — Online Qualifying Round",
        description: "Competed in the online qualifying round of Bangmod Hackathon.",
        category: "coding-ai",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/bangmod hack online/att.DpFgd4S9iALc2mD2aB5-LyJkWyKMv5_yMIQnb41MwPc.JPG", "assets/cer/cer bangmod hack online.png"],

        role: "Competitor",
        context: "Bangmod Hackathon",
        result: "Competed in the online qualifying round",
        technologies: ["C/C++", "Competitive Programming", "Algorithms"],
        workLinks: [],
        certificateImages: ["assets/cer/cer bangmod hack online.png"],

        activityPhotos: ["assets/bangmod hack online/att.DpFgd4S9iALc2mD2aB5-LyJkWyKMv5_yMIQnb41MwPc.JPG", "assets/cer/cer bangmod hack online.png"],

        caseStudy: {
          overview: "Worked with a team to analyze the problem, find a solution approach, and apply technology to build a product under a time limit.",
          problem: "",
          approach: "",
          process: "",
          result: "Competed in Bangmod Hackathon's online qualifying round.",
          learning: "Built systems thinking, problem-solving, teamwork, and applying programming knowledge to a real challenge."
        }
      },
      {
        slug: "hack-the-scammer-ctf",
        index: "17",
        title: "Hack The Scammer CTF 2025",
        description: "Competed in Hack The Scammer CTF 2025, organized by Thailand's NCSA.",
        category: "coding-ai",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer hack the scammer.png"],
        role: "Competitor",
        context: "Thailand's National Cyber Security Agency (NCSA)",
        result: "Advanced to the first round",
        technologies: ["Cybersecurity", "CTF"],
        workLinks: [],
        certificateImages: ["assets/cer/cer hack the scammer.png"],

        activityPhotos: ["assets/cer/cer hack the scammer.png"],
        caseStudy: {
          overview: "A Capture The Flag (CTF) competition challenging competitors to analyze and solve cybersecurity problems.",
          problem: "Had to find anomalies and vulnerabilities under time constraints.",
          approach: "Practiced analytical thinking, spotting anomalies, and step-by-step problem-solving.",
          process: "",
          result: "Successfully advanced to the first round.",
          learning: "Applied cybersecurity knowledge under time constraints, and developed logical thinking, problem-solving, and teamwork."
        }
      },
      {
        slug: "math-aptitude-competition",
        index: "18",
        title: "Mathematics Aptitude Competition",
        description: "Won 1st place in the Mathematics Aptitude Competition, grade 12, at Samutsakhonburana School.",
        category: "activity",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/อัจฉริยะภาพคณิต/Screenshot 2026-09-05 231940.png", "assets/cer/cer อัฉริยภาพคณิต.png"],
        role: "Competitor",
        context: "School internal competition",
        result: "1st Place",
        technologies: ["Mathematics", "Problem Solving"],
        workLinks: [],
        certificateImages: ["assets/cer/cer อัฉริยภาพคณิต.png"],

        activityPhotos: ["assets/อัจฉริยะภาพคณิต/Screenshot 2026-09-05 231940.png", "assets/cer/cer อัฉริยภาพคณิต.png"],
        caseStudy: {
          overview: "The school's internal Mathematics Aptitude Competition, grade 12 level.",
          problem: "",
          approach: "",
          process: "",
          result: "Won 1st place.",
          learning: "Built analytical and mathematical problem-solving skills through problems requiring reasoning and spotting relationships in given data, and applied various math concepts — skills that carry over into programming and data analysis."
        }
      },
      {
        slug: "petch-chaiyaphruek-award",
        index: "19",
        title: "\"Petch Chaiyaphruek\" Award",
        description: "Received the \"Petch Chaiyaphruek\" award from Samutsakhonburana School.",
        category: "activity",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/เพชรชัยพฤกษ์/0A9A9566.JPEG", "assets/เพชรชัยพฤกษ์/0A9A9567.JPEG", "assets/เพชรชัยพฤกษ์/0A9A9570.JPEG", "assets/เพชรชัยพฤกษ์/IMG_0003.jpg", "assets/เพชรชัยพฤกษ์/P1092401.JPEG", "assets/เพชรชัยพฤกษ์/P1468173.JPEG", "assets/เพชรชัยพฤกษ์/P1468176.JPEG", "assets/cer/cer เพชรชัยพฤกษ์.png"],

        role: "Recipient",
        context: "Samutsakhonburana School honor award",
        result: "Received the Petch Chaiyaphruek award",
        technologies: [],
        workLinks: [],
        certificateImages: ["assets/cer/cer เพชรชัยพฤกษ์.png"],

        activityPhotos: ["assets/เพชรชัยพฤกษ์/0A9A9566.JPEG", "assets/เพชรชัยพฤกษ์/0A9A9567.JPEG", "assets/เพชรชัยพฤกษ์/0A9A9570.JPEG", "assets/เพชรชัยพฤกษ์/IMG_0003.jpg", "assets/เพชรชัยพฤกษ์/P1092401.JPEG", "assets/เพชรชัยพฤกษ์/P1468173.JPEG", "assets/เพชรชัยพฤกษ์/P1468176.JPEG", "assets/cer/cer เพชรชัยพฤกษ์.png"],

        caseStudy: {
          overview: "An award the school gives to students who bring recognition and benefit to the school.",
          problem: "",
          approach: "",
          process: "",
          result: "Received this award for completing POSN Computer Camp 2.",
          learning: "A motivator to keep building achievements for myself and the school."
        }
      },
      {
        slug: "silapahatthakam-3d-design",
        index: "20",
        title: "Silapahatthakam Arts & Crafts Competition — 3D Design",
        description: "Won Gold Medal, 1st place, at the Silapahatthakam Arts & Crafts Competition (Educational Service Area level), grades 10-12.",
        category: "graphic-3d",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/ศิลปหัตถกรรม/IMG_7319.jpg" ,"assets/ศิลปหัตถกรรม/IMG_6308.JPG", "assets/ศิลปหัตถกรรม/att.wjIn_N53unKIiUodjN4ic16HUI4nEfqeIGGVeWsT6y0.JPG", "assets/ศิลปหัตถกรรม/att.zGbbJzv5z60_G7AYmuxaB9kVM2tvZHp4LxnfjBCQ-BM.JPG", "assets/cer/cer ศิลปหัตถกรรม.png"],

        role: "Competitor and 3D modeler",
        context: "Educational Service Area-level competition",
        result: "Gold Medal, 1st Place",
        technologies: ["Blender", "3D Modeling"],
        workLinks: [],
        certificateImages: ["assets/cer/cer ศิลปหัตถกรรม.png"],

        activityPhotos: ["assets/ศิลปหัตถกรรม/IMG_7319.jpg" ,"assets/ศิลปหัตถกรรม/IMG_6308.JPG", "assets/ศิลปหัตถกรรม/att.wjIn_N53unKIiUodjN4ic16HUI4nEfqeIGGVeWsT6y0.JPG", "assets/ศิลปหัตถกรรม/att.zGbbJzv5z60_G7AYmuxaB9kVM2tvZHp4LxnfjBCQ-BM.JPG", "assets/cer/cer ศิลปหัตถกรรม.png"],

        caseStudy: {
          overview: "A competition to design an everyday object with computer programs, grades 10-12.",
          problem: "Had to design an object that fit the brief appropriately and matched real-world use — the brief given was to design the classroom of the future.",
          approach: "Practiced designing and building 3D models with Blender, starting from analyzing the brief and forming a concept for what a future classroom should look like to support learning, through to building a complete, polished 3D model.",
          process: "Built and refined the model to fit the brief.",
          result: "Won Gold Medal, 1st place, at the Educational Service Area level.",
          learning: "Saw that computer knowledge can turn an idea into a concrete digital work, and picked up tools and techniques for 3D modeling that carry over into other design work."
        }
      },
      {
        slug: "posn-tutor-mentor",
        index: "21",
        title: "Lead Tutor, POSN Computer Prep Sessions",
        description: "Volunteered to tutor and mentor juniors preparing for the POSN Computer exam.",
        category: "activity",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/tutor posn/IMG_1287.JPG", "assets/tutor posn/IMG_1288.JPG", "assets/tutor posn/IMG_1595.JPG", "assets/tutor posn/IMG_1596.JPG", "assets/tutor posn/IMG_1599.JPG", "assets/tutor posn/IMG_1600.JPG", "assets/tutor posn/IMG_1604.JPG", "assets/tutor posn/IMG_1605.JPG", "assets/tutor posn/IMG_20260604_073201.JPEG", "assets/cer/cer ติวสอวน.PNG"],

        role: "Tutor / Mentor",
        context: "School's POSN Computer exam prep sessions",
        result: "Helped juniors prepare for the POSN Computer exam",
        technologies: [],
        workLinks: [],
        certificateImages: ["assets/cer/cer ติวสอวน.PNG"],

        activityPhotos: ["assets/tutor posn/IMG_1287.JPG", "assets/tutor posn/IMG_1288.JPG", "assets/tutor posn/IMG_1595.JPG", "assets/tutor posn/IMG_1596.JPG", "assets/tutor posn/IMG_1599.JPG", "assets/tutor posn/IMG_1600.JPG", "assets/tutor posn/IMG_1604.JPG", "assets/tutor posn/IMG_1605.JPG", "assets/tutor posn/IMG_20260604_073201.JPEG", "assets/cer/cer ติวสอวน.PNG"],

        caseStudy: {
          overview: "Helped tutor and advise juniors on programming and problem-solving as they prepared for the POSN Computer exam, including troubleshooting their code.",
          problem: "",
          approach: "",
          process: "",
          result: "Helped juniors get ready for the POSN Computer exam.",
          learning: "Reviewed and deepened my own programming knowledge, practiced communication and explaining complex topics clearly, and shared knowledge with others."
        }
      },
      {
        slug: "skss-edu-spark-symposium",
        index: "25",
        title: "Presenter, SKSS Edu Spark 2026",
        description: "Presented the Clock Drawing Test Dementia Screening project at the SKSS Edu Spark 2026 symposium.",
        category: "activity",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/sympopsium skss edu park/IMG_2186.jpg", "assets/sympopsium skss edu park/IMG_2194 2.JPG", "assets/sympopsium skss edu park/IMG_2197.JPG", "assets/sympopsium skss edu park/IMG_2198.JPG", "assets/sympopsium skss edu park/IMG_2199.JPG", "assets/sympopsium skss edu park/IMG_2200.JPG", "assets/cer/cer skss edu park.png"],

        role: "Presenter",
        context: "SKSS Edu Spark 2026 symposium",
        result: "Presented the project and exchanged feedback with attendees",
        technologies: [],
        workLinks: [],
        certificateImages: ["assets/cer/cer skss edu park.png"],

        activityPhotos: ["assets/sympopsium skss edu park/IMG_2186.jpg", "assets/sympopsium skss edu park/IMG_2194 2.JPG", "assets/sympopsium skss edu park/IMG_2197.JPG", "assets/sympopsium skss edu park/IMG_2198.JPG", "assets/sympopsium skss edu park/IMG_2199.JPG", "assets/sympopsium skss edu park/IMG_2200.JPG", "assets/cer/cer skss edu park.png"],

        caseStudy: {
          overview: "Presented the Clock Drawing Test Dementia Screening project's concept, process, and results at the SKSS Edu Spark 2026 symposium, to exchange feedback and ideas with attendees.",
          problem: "",
          approach: "",
          process: "",
          result: "Presented the project and exchanged feedback with attendees.",
          learning: "Developed presentation skills, academic communication, explaining a concept systematically, and listening and responding to questions from attendees."
        }
      },
      {
        slug: "checkers-referee",
        index: "26",
        title: "Outstanding Checkers Tournament Referee",
        description: "Assigned to oversee and run the checkers tournament at the school's sports day.",
        category: "activity",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/หมากฮอส/0A9A5396.JPEG", "assets/หมากฮอส/0A9A6532.JPEG", "assets/หมากฮอส/0A9A6567.JPEG", "assets/หมากฮอส/0A9A6578.JPEG", "assets/หมากฮอส/1000007143.JPEG", "assets/หมากฮอส/1966_0.JPEG", "assets/หมากฮอส/IMG_4552.JPG", "assets/หมากฮอส/IMG_8880.jpg", "assets/หมากฮอส/IMG_8988.jpg", "assets/หมากฮอส/IMG_8991.JPG", "assets/หมากฮอส/P1063659.JPG", "assets/หมากฮอส/P1063669.JPG", "assets/หมากฮอส/P1335489.JPEG", "assets/cer/cer หมากฮอส.png"],

        role: "Tournament Referee",
        context: "School sports day",
        result: "Outstanding Referee award",
        technologies: [],
        workLinks: [],
        certificateImages: ["assets/cer/cer หมากฮอส.png"],

        activityPhotos: ["assets/หมากฮอส/0A9A5396.JPEG", "assets/หมากฮอส/0A9A6532.JPEG", "assets/หมากฮอส/0A9A6567.JPEG", "assets/หมากฮอส/0A9A6578.JPEG", "assets/หมากฮอส/1000007143.JPEG", "assets/หมากฮอส/1966_0.JPEG", "assets/หมากฮอส/IMG_4552.JPG", "assets/หมากฮอส/IMG_8880.jpg", "assets/หมากฮอส/IMG_8988.jpg", "assets/หมากฮอส/IMG_8991.JPG", "assets/หมากฮอส/P1063659.JPG", "assets/หมากฮอส/P1063669.JPG", "assets/หมากฮอส/P1335489.JPEG", "assets/cer/cer หมากฮอส.png"],

        caseStudy: {
          overview: "Planned and ran the checkers tournament, oversaw competitors, and resolved issues that came up during play.",
          problem: "",
          approach: "",
          process: "",
          result: "Received the Outstanding Referee award.",
          learning: "Developed leadership, responsibility, on-the-spot decision-making, communication, and teamwork skills."
        }
      },
      {
        slug: "figma-workshop-instructor",
        index: "23",
        title: "Figma Workshop Instructor",
        description: "Led a workshop on the basics of UI/UX design with Figma.",
        category: "activity",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/figma/IMG_7457.JPG", "assets/figma/P1500665.JPEG", "assets/figma/P1500679.JPEG", "assets/figma/P1500743.JPEG", "assets/figma/P1500746.JPEG", "assets/cer/cer figma.png"],

        role: "Workshop Instructor",
        context: "School workshop event",
        result: "Participants built their own designs and prototypes",
        technologies: ["Figma", "UI/UX Design"],
        workLinks: [],
        certificateImages: ["assets/cer/cer figma.png"],

        activityPhotos: ["assets/figma/IMG_7457.JPG", "assets/figma/P1500665.JPEG", "assets/figma/P1500679.JPEG", "assets/figma/P1500743.JPEG", "assets/figma/P1500746.JPEG", "assets/cer/cer figma.png"],

        caseStudy: {
          overview: "Led a workshop covering UI/UX design basics — introducing Figma from screen design to wireframes and prototypes, with hands-on practice.",
          problem: "",
          approach: "",
          process: "",
          result: "Participants successfully designed and built their own prototypes.",
          learning: "Developed digital design skills, systems thinking, user-experience-driven design, communication as an instructor, on-the-spot troubleshooting, and workshop time management."
        }
      },
      {
        slug: "hcec-volunteer",
        index: "22",
        title: "Volunteer Staff, HCEC Center",
        description: "Served as volunteer staff at the Human Capital Excellence Center (HCEC), Samut Sakhon.",
        category: "activity",
        year: "2024-2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/hece จิตอาสาดูแลความสะอาด/IMG_5768.JPG", "assets/hece จิตอาสาดูแลความสะอาด/IMG_5769.JPG", "assets/hece จิตอาสาดูแลความสะอาด/IMG_5770.JPG", "assets/cer/cer hece ความสะอาด.PNG"],

        role: "Volunteer Staff",
        context: "Samutsakhonburana School, academic years 2024-2026",
        result: "Served throughout the 2024-2026 academic years",
        technologies: [],
        workLinks: [],
        certificateImages: ["assets/cer/cer hece ความสะอาด.PNG"],

        activityPhotos: ["assets/hece จิตอาสาดูแลความสะอาด/IMG_5768.JPG", "assets/hece จิตอาสาดูแลความสะอาด/IMG_5769.JPG", "assets/hece จิตอาสาดูแลความสะอาด/IMG_5770.JPG", "assets/cer/cer hece ความสะอาด.PNG"],

        caseStudy: {
          overview: "Provided service and assistance to participants at the center's activities, and also helped maintain cleanliness in the area.",
          problem: "",
          approach: "",
          process: "",
          result: "Served as volunteer staff throughout the academic years.",
          learning: "Developed communication skills, working with others, responsibility, and learned the value of giving time for the common good."
        }
      },
      {
        slug: "student-enrollment-volunteer",
        index: "24",
        title: "Volunteer, Student Enrollment",
        description: "Volunteer activity helping teachers with new-year student enrollment.",
        category: "activity",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/รับสมัครนักเรียน/057e26279e397e04db24151a346b7fa5.JPEG", "assets/รับสมัครนักเรียน/IMG_0422.JPG", "assets/รับสมัครนักเรียน/IMG_0423.JPG", "assets/รับสมัครนักเรียน/IMG_0427.JPG", "assets/รับสมัครนักเรียน/ed5ee3933df90df98faa13b95d9cc726.JPEG"],

        role: "Student Volunteer",
        context: "Samutsakhonburana School",
        result: "Helped complete the enrollment process",
        technologies: [],
        workLinks: [],
        certificateImages: [],
        activityPhotos: ["assets/รับสมัครนักเรียน/057e26279e397e04db24151a346b7fa5.JPEG", "assets/รับสมัครนักเรียน/IMG_0422.JPG", "assets/รับสมัครนักเรียน/IMG_0423.JPG", "assets/รับสมัครนักเรียน/IMG_0427.JPG", "assets/รับสมัครนักเรียน/ed5ee3933df90df98faa13b95d9cc726.JPEG"],

        caseStudy: {
          overview: "Responsible for entering students' enrollment data and assisting parents through the enrollment process.",
          problem: "",
          approach: "",
          process: "",
          result: "Helped teachers complete the enrollment process smoothly.",
          learning: "Developed data-handling skills, attention to detail, communication, on-the-spot problem-solving, and a stronger sense of responsibility and public service."
        }
      },
      {
        slug: "wallpaper-3d-workshop-instructor",
        index: "27",
        title: "3D Wallpaper Workshop Instructor (Adobe Illustrator)",
        description: "Led a workshop on 3D wallpaper design with Adobe Illustrator at Samutsakhonburana School's open house.",
        category: "activity",
        year: "2024",
        featured: false,
        heroImage: null,
        gallery: ["assets/workshop 3D wallpaper/IMG_6497.JPG", "assets/cer/cer workshop wallpaper.png"],

        role: "Workshop Instructor",
        context: "School open house",
        result: "Ran the workshop with hands-on participation",
        technologies: ["Adobe Illustrator", "3D Design"],
        workLinks: [],
        certificateImages: ["assets/cer/cer workshop wallpaper.png"],
        activityPhotos: ["assets/workshop 3D wallpaper/IMG_6497.JPG", "assets/cer/cer workshop wallpaper.png"],

        caseStudy: {
          overview: "Taught 3D wallpaper design with Adobe Illustrator, demonstrating the steps and letting participants practice hands-on — from building elements, to layout, to applying design tools.",
          problem: "",
          approach: "",
          process: "",
          result: "Participants successfully designed their own 3D wallpaper.",
          learning: "Developed digital design skills, communication and knowledge-sharing, workshop planning, and troubleshooting for participants."
        }
      },
      {
        slug: "jaophor-parade-volunteer",
        index: "28",
        title: "Volunteer, Jao Phor Shrine Parade",
        description: "Volunteered in the Jao Phor Shrine parade, an annual Samut Sakhon province event.",
        category: "activity",
        year: "2024",
        featured: false,
        heroImage: null,
        gallery: ["assets/แห่เจ้าพ่อ/0A9A8879.JPEG", "assets/แห่เจ้าพ่อ/AIM_0216.JPEG", "assets/แห่เจ้าพ่อ/IMG_1255.jpg", "assets/แห่เจ้าพ่อ/IMG_1257.jpg", "assets/แห่เจ้าพ่อ/IMG_1323.JPG", "assets/แห่เจ้าพ่อ/IMG_1501.JPG", "assets/แห่เจ้าพ่อ/IMG_7097.JPG"],

        role: "Student Volunteer",
        context: "Samut Sakhon provincial event",
        result: "Took part throughout the event",
        technologies: [],
        workLinks: [],
        certificateImages: [],
        activityPhotos: ["assets/แห่เจ้าพ่อ/0A9A8879.JPEG", "assets/แห่เจ้าพ่อ/AIM_0216.JPEG", "assets/แห่เจ้าพ่อ/IMG_1255.jpg", "assets/แห่เจ้าพ่อ/IMG_1257.jpg", "assets/แห่เจ้าพ่อ/IMG_1323.JPG", "assets/แห่เจ้าพ่อ/IMG_1501.JPG", "assets/แห่เจ้าพ่อ/IMG_7097.JPG"],

        caseStudy: {
          overview: "Took part in the Jao Phor Shrine parade, an annual Samut Sakhon event, helping create a good atmosphere throughout.",
          problem: "",
          approach: "",
          process: "",
          result: "Participated throughout the event.",
          learning: "Learned to work with others, take responsibility, and participate in local community activities."
        }
      },
      {
        slug: "open-house-booth-math-computer",
        index: "29",
        title: "Math-Computer Track Open House Booth",
        description: "Led the planning and setup of a booth introducing the Math-Computer track at Samutsakhonburana School's open house.",
        category: "activity",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/ซุ้มเปิดบ้านวิชาการ/IMG_0012.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0016.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0023.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0045.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0047.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0049.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0050.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_9948.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_9977.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/P1257566.JPEG", "assets/ซุ้มเปิดบ้านวิชาการ/P1257567.JPEG", "assets/ซุ้มเปิดบ้านวิชาการ/ซุ้มเปิดบ้าน 2.png", "assets/ซุ้มเปิดบ้านวิชาการ/ซุ้มเปิดบ้าน.png"],

        role: "Booth Lead",
        context: "School open house",
        result: "Ran the booth successfully, introducing the track to interested students",
        technologies: [],
        workLinks: [],
        certificateImages: [],
        activityPhotos: ["assets/ซุ้มเปิดบ้านวิชาการ/IMG_0012.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0016.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0023.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0045.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0047.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0049.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0050.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_9948.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_9977.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/P1257566.JPEG", "assets/ซุ้มเปิดบ้านวิชาการ/P1257567.JPEG", "assets/ซุ้มเปิดบ้านวิชาการ/ซุ้มเปิดบ้าน 2.png", "assets/ซุ้มเปิดบ้านวิชาการ/ซุ้มเปิดบ้าน.png"],

        caseStudy: {
          overview: "Took the lead in co-designing the activity format and preparing content introducing the Math-Computer track to interested students, coordinating with team members.",
          problem: "",
          approach: "",
          process: "",
          result: "The activity ran smoothly and the booth met its goals.",
          learning: "Developed planning, management, communication, teamwork, and leadership skills."
        }
      },
      {
        slug: "science-week-booth",
        index: "30",
        title: "Science Week Booth — \"Global Boiling\"",
        description: "Led the planning and setup of a Science Week booth under the theme \"Global Boiling.\"",
        category: "activity",
        year: "2024",
        featured: false,
        heroImage: null,
        gallery: ["assets/ซุ้มวันวิทย์/IMG_2039.JPG", "assets/ซุ้มวันวิทย์/IMG_2647.jpg", "assets/ซุ้มวันวิทย์/IMG_2976.JPG"],

        role: "Booth Lead",
        context: "School Science Week",
        result: "Ran the booth successfully, teaching visitors about climate change",
        technologies: [],
        workLinks: [],
        certificateImages: [],
        activityPhotos: ["assets/ซุ้มวันวิทย์/IMG_2039.JPG", "assets/ซุ้มวันวิทย์/IMG_2647.jpg", "assets/ซุ้มวันวิทย์/IMG_2976.JPG"],

        caseStudy: {
          overview: "Took the lead in shaping the concept, designing the activity, and preparing materials to explain climate change and global warming in an easy, engaging way — while keeping it tied to our own track, Math and Computer, and making sure it could hold participating students' attention.",
          problem: "",
          approach: "",
          process: "",
          result: "The activity ran smoothly, attendees came away understanding the topic better, and it met its goals.",
          learning: "Developed planning, activity management, creativity, communication, and teamwork skills."
        }
      },
      {
        slug: "merit-scholarship",
        index: "31",
        title: "Merit Scholarship",
        description: "Received a merit scholarship based on academic performance and dedication.",
        category: "activity",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer ทุนเรียนดี.png"],
        role: "Scholarship Recipient",
        context: "Merit scholarship",
        result: "Received a merit scholarship",
        technologies: [],
        workLinks: [],
        certificateImages: ["assets/cer/cer ทุนเรียนดี.png"],

        activityPhotos: ["assets/cer/cer ทุนเรียนดี.png"],
        caseStudy: {
          overview: "Received a merit scholarship based on academic performance and dedication to studies.",
          problem: "",
          approach: "",
          process: "",
          result: "Received a merit scholarship from P.S.P Specialties.",
          learning: "A source of support and motivation to keep improving, both academically and in extracurricular activities."
        }
      },
      {
        slug: "good-child-award",
        index: "32",
        title: "Good Child Award, Mother's Day",
        description: "Selected as a \"Good Child\" for Mother's Day.",
        category: "activity",
        year: "2024",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer ลูกกตัญญู.png"],
        role: "Recipient",
        context: "School Mother's Day event",
        result: "Selected as a Good Child",
        technologies: [],
        workLinks: [],
        certificateImages: ["assets/cer/cer ลูกกตัญญู.png"],

        activityPhotos: ["assets/cer/cer ลูกกตัญญู.png"],
        caseStudy: {
          overview: "Selected as a Good Child for Mother's Day.",
          problem: "",
          approach: "",
          process: "",
          result: "Received the Good Child award.",
          learning: "Reflects a focus on family, responsibility, and being a good role model."
        }
      },
      {
        slug: "tpa-robot-training",
        index: "33",
        title: "TPA–OBEC Youth Robotics Training 2026",
        description: "Attended TPA–OBEC Youth Robotics training 2026, Robo Rescue with microROS category.",
        category: "training",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer tpa robot.png"],
        role: "Trainee",
        context: "Technology Promotion Association (Thailand–Japan)",
        result: "Passed the post-training assessment",
        technologies: ["Robotics", "microROS"],
        workLinks: [],
        certificateImages: ["assets/cer/cer tpa robot.png"],

        activityPhotos: ["assets/cer/cer tpa robot.png"],
        caseStudy: {
          overview: "Training on the Robo Rescue with microROS robotics competition category, covering basic robotics principles and concepts.",
          problem: "",
          approach: "",
          process: "",
          result: "Passed the post-training assessment.",
          learning: "Developed analytical thinking and systematic problem-solving, and a better understanding of applying computer knowledge to real robotic systems."
        }
      },
      {
        slug: "dev-commu-web-competition",
        index: "34",
        title: "Web Development Training & Competition (HTML/CSS/JS)",
        description: "Attended a 2-day web development training and competition using HTML, CSS, and JavaScript.",
        category: "training",
        year: "[YEAR]",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer html css devcommu.png", "assets/cer/cer web devcommu.png"],
        role: "Trainee",
        context: "Organized by DevCommu",
        result: "Built a real website of my own",
        technologies: ["HTML", "CSS", "JavaScript"],
        workLinks: [],
        certificateImages: ["assets/cer/cer html css devcommu.png", "assets/cer/cer web devcommu.png"],

        activityPhotos: ["assets/cer/cer html css devcommu.png", "assets/cer/cer web devcommu.png"],
        caseStudy: {
          overview: "A 2-day training and competition building websites with HTML, CSS, and JavaScript, culminating in a real website of my own, followed by building an entry that met the competition brief.",
          problem: "",
          approach: "",
          process: "",
          result: "Built my own website successfully within the training period, applying what I learned and practicing my programming skills.",
          learning: "Learned foundational web-building skills, with the opportunity to grow this further in future competitions."
        }
      },
      {
        slug: "ai-devcommu-bootcamp",
        index: "35",
        title: "Intro to AI Bootcamp by DevCommu",
        description: "Attended the Intro to AI Bootcamp organized by DevCommu.",
        category: "training",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer intro to ai devcommi.png"],
        role: "Trainee",
        context: "Organized by DevCommu",
        result: "Completed the bootcamp",
        technologies: ["Artificial Intelligence"],
        workLinks: [],
        certificateImages: ["assets/cer/cer intro to ai devcommi.png"],

        activityPhotos: ["assets/cer/cer intro to ai devcommi.png"],
        caseStudy: {
          overview: "Learned the basics of artificial intelligence and foundational concepts for applying AI to real problems.",
          problem: "",
          approach: "",
          process: "",
          result: "Completed the full bootcamp.",
          learning: "Opened up new perspectives on AI technology, developed analytical thinking, and built a foundation for further work in AI and machine learning."
        }
      },
      {
        slug: "face-detection-python-training",
        index: "36",
        title: "Face Detection & Recognition Training with Python",
        description: "Attended training on face detection and recognition using Python.",
        category: "training",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/ตรวจจับหน้า python/Screenshot 2025-12-27 135915.png", "assets/ตรวจจับหน้า python/Screenshot 2025-12-27 145142.png", "assets/ตรวจจับหน้า python/Screenshot 2025-12-27 151103.png", "assets/cer/cer ตรวจจับหน้า python.png"],
        role: "Trainee",
        context: "Faculty of Engineering and Industrial Technology, Silpakorn University",
        result: "Built a working face-detection program",
        technologies: ["Python", "Image Processing"],
        workLinks: [],
        certificateImages: ["assets/cer/cer ตรวจจับหน้า python.png"],

        activityPhotos: ["assets/ตรวจจับหน้า python/Screenshot 2025-12-27 135915.png", "assets/ตรวจจับหน้า python/Screenshot 2025-12-27 145142.png", "assets/ตรวจจับหน้า python/Screenshot 2025-12-27 151103.png", "assets/cer/cer ตรวจจับหน้า python.png"],
        caseStudy: {
          overview: "Learned the basics of image processing and applying Python to face detection and recognition.",
          problem: "",
          approach: "",
          process: "",
          result: "Successfully wrote and applied image-processing tools for face detection.",
          learning: "Understood the full pipeline — from capturing an image, to detecting a face, to processing and using that data."
        }
      },
      {
        slug: "coding-thailand-depa",
        index: "37",
        title: "Coding Thailand 2026: AI Inspires the Future",
        description: "Attended the Coding Thailand 2026: AI Inspires the Future program, organized by depa.",
        category: "training",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer depa1.png", "assets/cer/cer depa2.png", "assets/cer/cer depa3.png", "assets/cer/cer depa4.png", "assets/cer/cer depa5.png", "assets/cer/cer depa6.png", "assets/cer/cer depa7.png", "assets/cer/cer depa8.png", "assets/cer/cer depa9.png"],
        role: "Trainee",
        context: "Digital Economy Promotion Agency (depa)",
        result: "Completed the training program",
        technologies: ["C/C++", "Python", "Machine Learning", "AIoT", "ROS", "Design Thinking"],
        workLinks: [],
        certificateImages: ["assets/cer/cer depa1.png", "assets/cer/cer depa2.png", "assets/cer/cer depa3.png", "assets/cer/cer depa4.png", "assets/cer/cer depa5.png", "assets/cer/cer depa6.png", "assets/cer/cer depa7.png", "assets/cer/cer depa8.png", "assets/cer/cer depa9.png"],
        activityPhotos: ["assets/cer/cer depa1.png", "assets/cer/cer depa2.png", "assets/cer/cer depa3.png", "assets/cer/cer depa4.png", "assets/cer/cer depa5.png", "assets/cer/cer depa6.png", "assets/cer/cer depa7.png", "assets/cer/cer depa8.png", "assets/cer/cer depa9.png"],
        caseStudy: {
          overview: "Learned and practiced across many areas: Programming with C/C++, Python for AI & Data, Electronics, Microcontrollers, AIoT & Edge AI, Machine Learning, ROS Robotics, and Design Thinking via an Idea Canvas.",
          problem: "",
          approach: "",
          process: "",
          result: "Completed the training program.",
          learning: "Saw the through-line from programming to project development, with knowledge to build on for future technology and innovation work."
        }
      },
      {
        slug: "image-processing-training",
        index: "38",
        title: "Image Processing Training",
        description: "Attended a training on image processing and basic MATLAB usage.",
        category: "training",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/image processing/P1091357.JPG", "assets/image processing/P1091370.JPG", "assets/image processing/P1091406.JPG", "assets/image processing/P1091420.JPG", "assets/cer/cer image proccessing mathlab.png"],
        role: "Trainee",
        context: "Image processing training",
        result: "Successfully processed images with MATLAB",
        technologies: ["MATLAB", "Image Processing"],
        workLinks: [],
        certificateImages: ["assets/cer/cer image proccessing mathlab.png"],

        activityPhotos: ["assets/image processing/P1091357.JPG", "assets/image processing/P1091370.JPG", "assets/image processing/P1091406.JPG", "assets/image processing/P1091420.JPG", "assets/cer/cer image proccessing mathlab.png"],
        caseStudy: {
          overview: "Learned the basics of image processing and tried basic MATLAB for managing and analyzing image data.",
          problem: "",
          approach: "",
          process: "",
          result: "Successfully used MATLAB to process images.",
          learning: "Practiced step-by-step analytical thinking — a key foundation for Computer Vision, AI, and image data processing."
        }
      },
      {
        slug: "cyber-ground-training",
        index: "39",
        title: "Cyber Ground Training",
        description: "Attended the Cyber Ground training at IT Ladkrabang Open House.",
        category: "training",
        year: "2024",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer cyberground.png"],
        role: "Trainee",
        context: "Faculty of Information Technology, KMITL",
        result: "Built a stronger foundation in cybersecurity",
        technologies: ["Cybersecurity"],
        workLinks: [],
        certificateImages: ["assets/cer/cer cyberground.png"],

        activityPhotos: ["assets/cer/cer cyberground.png"],
        caseStudy: {
          overview: "Learned the basics of cybersecurity and concepts for protecting systems, with practice in analytical and systematic problem-solving.",
          problem: "",
          approach: "",
          process: "",
          result: "",
          learning: "Understood the importance of data and system security, a foundation for further work in IT and cybersecurity, and a starting point for continuing to learn and build cybersecurity skills in the future."
        }
      },
      {
        slug: "ai-education-seminar",
        index: "40",
        title: "Seminar: \"AI and Education\"",
        description: "Attended the academic seminar \"AI and Education: A Learning Assistant for Today.\"",
        category: "training",
        year: "2024",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer สัมนา ai.png"],
        role: "Attendee",
        context: "Department of Educational Technology, Silpakorn University",
        result: "Gained insight into AI applications in education",
        technologies: ["Artificial Intelligence"],
        workLinks: [],
        certificateImages: ["assets/cer/cer สัมนา ai.png"],

        activityPhotos: ["assets/cer/cer สัมนา ai.png"],
        caseStudy: {
          overview: "Learned about applying artificial intelligence to support learning and improve educational outcomes.",
          problem: "",
          approach: "",
          process: "",
          result: "",
          learning: "Saw real approaches for applying technology to solve real problems, and gained perspective on applying AI appropriately."
        }
      },
      {
        slug: "career-hub-comsci-camp",
        index: "41",
        title: "Computer Science Camp by Career Hub",
        description: "Completed a 2-day Computer Science Camp organized by Career Hub.",
        category: "training",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/comsci career hub/IMG_6347.JPEG", "assets/comsci career hub/IMG_6348.JPEG", "assets/comsci career hub/IMG_6466.JPEG", "assets/comsci career hub/IMG_7138.jpg", "assets/cer/cer career hub comsci.png"],

        role: "Trainee",
        context: "Organized by Career Hub",
        result: "Built a working interactive program",
        technologies: ["Python", "Pygame", "Data Science"],
        workLinks: [],
        certificateImages: ["assets/cer/cer career hub comsci.png"],

        activityPhotos: ["assets/comsci career hub/IMG_6347.JPEG", "assets/comsci career hub/IMG_6348.JPEG", "assets/comsci career hub/IMG_6466.JPEG", "assets/comsci career hub/IMG_7138.jpg", "assets/cer/cer career hub comsci.png"],

        caseStudy: {
          overview: "Learned and practiced Python programming through varied activities, from basic data science applications to using Pygame for interactive programs.",
          problem: "",
          approach: "",
          process: "",
          result: "Completed the camp and built a game with Pygame.",
          learning: "Developed programming skills, step-by-step thinking, and problem-solving, while seeing Python applied across multiple domains."
        }
      },
      {
        slug: "data-science-training",
        index: "42",
        title: "Intro to Data Science Training",
        description: "Attended an introductory Data Science training.",
        category: "training",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/อบรม data science/20250208_130429.JPEG", "assets/อบรม data science/20250208_133727.JPEG", "assets/อบรม data science/IMG_6429.JPG"],

        role: "Trainee",
        context: "Intro to Data Science training",
        result: "Understood the basic data workflow",
        technologies: ["Data Science", "Data Analytics", "Python"],
        workLinks: [],
        certificateImages: [],
        activityPhotos: ["assets/อบรม data science/20250208_130429.JPEG", "assets/อบรม data science/20250208_133727.JPEG", "assets/อบรม data science/IMG_6429.JPG"],

        caseStudy: {
          overview: "Learned the concepts and basics of working with data — from understanding and managing it, to analysis, to using it to find trends and support decisions.",
          problem: "",
          approach: "",
          process: "",
          result: "",
          learning: "Developed analytical thinking and systematic problem-solving, building a foundation for Data Science, Data Analytics, and AI."
        }
      },
      {
        slug: "drone-math-programming-training",
        index: "43",
        title: "Math & Programming for Drone Technology Workshop",
        description: "Attended a hands-on workshop on math and programming applied to drone technology.",
        category: "training",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/อบรมโดรน/IMG_7714.jpg", "assets/อบรมโดรน/IMG_7720.jpg", "assets/อบรมโดรน/IMG_7731.JPG", "assets/อบรมโดรน/IMG_7732.JPG", "assets/อบรมโดรน/IMG_7733.JPG", "assets/cer/cer อบรบโดรน.png"],

        role: "Trainee",
        context: "Drone technology workshop",
        result: "Understood how math, programming, and automation connect",
        technologies: ["Drone Technology", "Mathematics", "Programming"],
        workLinks: [],
        certificateImages: ["assets/cer/cer อบรบโดรน.png"],

        activityPhotos: ["assets/อบรมโดรน/IMG_7714.jpg", "assets/อบรมโดรน/IMG_7720.jpg", "assets/อบรมโดรน/IMG_7731.JPG", "assets/อบรมโดรน/IMG_7732.JPG", "assets/อบรมโดรน/IMG_7733.JPG", "assets/cer/cer อบรบโดรน.png"],

        caseStudy: {
          overview: "Learned how math principles combine with programming to understand and develop drone technology.",
          problem: "",
          approach: "",
          process: "",
          result: "",
          learning: "Saw math, programming, and automated systems working together — connecting to computer engineering, robotics, and smart technology."
        }
      },
      {
        slug: "future-skill-web-training",
        index: "44",
        title: "Web Development & Programming Basics by FutureSkill",
        description: "Attended a web development and programming basics training by FutureSkill.",
        category: "training",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer futureskill.png", "assets/cer/cer futureskill2.png", "assets/cer/cer futureskill3.png", "assets/cer/cer futureskill4.png"],
        role: "Trainee",
        context: "Organized by FutureSkill",
        result: "Built a foundation in web development",
        technologies: ["Web Development", "Programming"],
        workLinks: [],
        certificateImages: ["assets/cer/cer futureskill.png", "assets/cer/cer futureskill2.png", "assets/cer/cer futureskill3.png", "assets/cer/cer futureskill4.png"],

        activityPhotos: ["assets/cer/cer futureskill.png", "assets/cer/cer futureskill2.png", "assets/cer/cer futureskill3.png", "assets/cer/cer futureskill4.png"],
        caseStudy: {
          overview: "Learned the concepts and basics of web development, along with programming in various languages.",
          problem: "",
          approach: "",
          process: "",
          result: "Completed the full training.",
          learning: "Built a foundation in web development and programming to grow into future web and technology projects."
        }
      },
      {
        slug: "zigma-camp",
        index: "45",
        title: "Zigma Camp, Chulalongkorn Business School",
        description: "Selected to attend Zigma Camp, organized by the Faculty of Commerce and Accountancy, Chulalongkorn University.",
        category: "training",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/zigma camp/DSC02494.JPEG", "assets/zigma camp/DSC02495.JPEG", "assets/zigma camp/IMG_6248.jpg", "assets/zigma camp/IMG_6296.JPG", "assets/zigma camp/IMG_6298.JPG", "assets/zigma camp/IMG_6300.JPG", "assets/zigma camp/IMG_6302.JPG", "assets/cer/cer zigma camp.png"],

        role: "Camp Attendee",
        context: "Faculty of Commerce and Accountancy, Chulalongkorn University",
        result: "Completed the 2-day camp",
        technologies: ["Data Structure"],
        workLinks: [],
        certificateImages: ["assets/cer/cer zigma camp.png"],

        activityPhotos: ["assets/zigma camp/DSC02494.JPEG", "assets/zigma camp/DSC02495.JPEG", "assets/zigma camp/IMG_6248.jpg", "assets/zigma camp/IMG_6296.JPG", "assets/zigma camp/IMG_6298.JPG", "assets/zigma camp/IMG_6300.JPG", "assets/zigma camp/IMG_6302.JPG", "assets/cer/cer zigma camp.png"],

        caseStudy: {
          overview: "Selected to attend the camp, and learned about the faculty's curriculum and university-level learning style, trying sample classes such as Data Structure.",
          problem: "",
          approach: "",
          process: "",
          result: "Completed the full 2-day camp.",
          learning: "Saw how technology and data analysis knowledge apply in a business context."
        }
      },
      {
        slug: "onshape-3d-training",
        index: "46",
        title: "3D Onshape Training",
        description: "Attended 3D Onshape training, learning the basics of 3D design and modeling.",
        category: "training",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/onshape/IMG_7709.JPG", "assets/cer/cer onshape.png"],

        role: "Trainee",
        context: "3D Onshape training",
        result: "Built a 3D model of my own",
        technologies: ["Onshape", "3D Modeling"],
        workLinks: [],
        certificateImages: ["assets/cer/cer onshape.png"],

        activityPhotos: ["assets/onshape/IMG_7709.JPG", "assets/cer/cer onshape.png"],

        caseStudy: {
          overview: "Learned the basics of designing and building 3D models with Onshape — from building parts to adjusting shapes and designing pieces digitally.",
          problem: "",
          approach: "",
          process: "",
          result: "Successfully built my own 3D model.",
          learning: "Developed spatial thinking, systematic design, and using technology to build models that carry over into engineering and technology work."
        }
      },
      {
        slug: "blender-science-lab",
        index: "47",
        title: "3D Modeling: Science Lab",
        description: "Won 2nd runner-up in a science-lab design competition, built with 3D modeling in Blender.",
        category: "graphic-3d",
        year: "2024",
        featured: false,
        heroImage: null,
        gallery: ["assets/ห้องวิทย์ blender/Chayanit-Science laboratory (-1).png", "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (1).png", "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (2).png", "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (3).png", "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (4).png", "assets/cer/cer ห้องปฏิบัติการวิทย์.png"],

        role: "Designer",
        context: "Personal project",
        result: "Built a 3D model",
        technologies: ["Blender", "3D Modeling"],
        workLinks: [],
        certificateImages: ["assets/cer/cer ห้องปฏิบัติการวิทย์.png"],

        activityPhotos: ["assets/ห้องวิทย์ blender/Chayanit-Science laboratory (-1).png", "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (1).png", "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (2).png", "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (3).png", "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (4).png", "assets/cer/cer ห้องปฏิบัติการวิทย์.png"],

        caseStudy: {
          overview: "Designed a science lab in Blender, having to shape a concept and structure for the space that matched real-world use and the lab's overall composition.",
          problem: "Each space's concept and structure had to fit its real-world use and overall composition.",
          approach: "Started by shaping the concept and structure of the space, then built out the elements and refined the model.",
          process: "Adjusted the model's details to match its intended use and overall composition.",
          result: "Won 2nd runner-up in the science-lab 3D modeling design competition, part of Samutsakhonburana School's Science Week competition.",
          learning: "Practiced step-by-step thinking, analyzing and solving problems, managing complex compositions, self-taught software skills, and using a computer to turn an idea into a tangible digital work."
        }
      },
      {
        slug: "blender-happy-toilet",
        index: "48",
        title: "3D Modeling: Public Restroom",
        description: "Competed in a public-restroom design competition using 3D modeling in Blender, as part of The Happy Toilet project.",
        category: "graphic-3d",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/The Happy Toilet/1.png", "assets/The Happy Toilet/2.png", "assets/The Happy Toilet/3.png", "assets/The Happy Toilet/4.png", "assets/The Happy Toilet/5.png", "assets/The Happy Toilet/IMG_6907.JPG", "assets/The Happy Toilet/center.png", "assets/The Happy Toilet/perspective toilet.png", "assets/The Happy Toilet/perspective toilet2.png", "assets/The Happy Toilet/top.png", "assets/The Happy Toilet/สุขีสุขา-01.png", "assets/cer/cer the happy toilet.png"],

        role: "Designer",
        context: "The Happy Toilet public-restroom design competition, 3D modeling with Blender",
        result: "Successfully built the 3D model",
        technologies: ["Blender", "3D Modeling"],
        workLinks: [],
        certificateImages: ["assets/cer/cer the happy toilet.png"],

        activityPhotos: ["assets/The Happy Toilet/1.png", "assets/The Happy Toilet/2.png", "assets/The Happy Toilet/3.png", "assets/The Happy Toilet/4.png", "assets/The Happy Toilet/5.png", "assets/The Happy Toilet/IMG_6907.JPG", "assets/The Happy Toilet/center.png", "assets/The Happy Toilet/perspective toilet.png", "assets/The Happy Toilet/perspective toilet2.png", "assets/The Happy Toilet/top.png", "assets/The Happy Toilet/สุขีสุขา-01.png", "assets/cer/cer the happy toilet.png"],

        caseStudy: {
          overview: "Designed and modeled a public restroom in Blender, having to shape a concept and structure for the space that matched real-world use and the restroom's overall composition.",
          problem: "",
          approach: "Started by shaping the concept and structure of the space, then built out the elements and refined the model.",
          process: "Adjusted the model's details to match its intended use and overall composition.",
          result: "Successfully completed \"Your Own Side Quest\" as planned.",
          learning: "Practiced designing to a clear brief with specific conditions around room count and space, planning to meet a deadline, and using 3D modeling software effectively."
        }
      },
      {
        slug: "blender-3d-rooms",
        index: "49",
        title: "Other 3D Modeling Work",
        description: "Built various 3D modeling work in Blender.",
        category: "graphic-3d",
        year: "2024 - 2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/3D/IMG_7813.JPG", "assets/3D/P1163849.JPEG", "assets/3D/P1163988.JPEG", "assets/3D/P1182026.JPEG", "assets/3D/Screenshot 2026-09-21 154708.png", "assets/3D/Screenshot 2026-09-21 154750.png", "assets/3D/Screenshot 2026-09-21 154842.png", "assets/3D/Screenshot 2026-09-21 154925.png", "assets/3D/Screenshot 2569-09-21 at 15.45.26.png", "assets/3D/Screenshot 2569-09-21 at 15.45.32.png", "assets/3D/Screenshot 2569-09-21 at 15.45.37.png", "assets/3D/Screenshot 2569-09-21 at 15.45.44.png"],
        role: "Designer",
        context: "Personal project",
        result: "Practiced designing and building 3D models with Blender",
        technologies: ["Blender", "3D Modeling"],
        workLinks: [],
        certificateImages: [],
        activityPhotos: ["assets/3D/IMG_7813.JPG", "assets/3D/P1163849.JPEG", "assets/3D/P1163988.JPEG", "assets/3D/P1182026.JPEG", "assets/3D/Screenshot 2026-09-21 154708.png", "assets/3D/Screenshot 2026-09-21 154750.png", "assets/3D/Screenshot 2026-09-21 154842.png", "assets/3D/Screenshot 2026-09-21 154925.png", "assets/3D/Screenshot 2569-09-21 at 15.45.26.png", "assets/3D/Screenshot 2569-09-21 at 15.45.32.png", "assets/3D/Screenshot 2569-09-21 at 15.45.37.png", "assets/3D/Screenshot 2569-09-21 at 15.45.44.png"],
        caseStudy: {
          overview: "Practiced designing and building a variety of 3D models with Blender, to get more comfortable with the tools and grow more skilled at 3D modeling.",
          problem: "",
          approach: "",
          process: "",
          result: "",
          learning: "Developed skills in designing and building 3D models with Blender, practicing various tools and techniques to build increasingly complex work that carries over into design and engineering."
        }
      },
      {
        slug: "anti-drug-video-competition",
        index: "50",
        title: "Anti-Drug Awareness Video Competition",
        description: "Won 1st place in an anti-drug awareness video competition, organized by Rajamangala University of Technology Phra Nakhon.",
        category: "graphic-3d",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/คลิปยาเสพติด/20250604_092401.JPEG", "assets/คลิปยาเสพติด/20250604_145536.JPEG", "assets/คลิปยาเสพติด/IMG_8596.JPG", "assets/คลิปยาเสพติด/IMG_8597.JPG", "assets/cer/cer คลิปยาเสพติด.JPEG"],

        role: "Director and video editor",
        context: "Rajamangala University of Technology Phra Nakhon",
        result: "1st Place",
        technologies: ["Video Production", "Video Editing", "Adobe Premiere Pro"],
        workLinks: [{ label: "video", href: "https://youtu.be/AvgdiIXRMXA?si=byC6cBqJOj6lXMOM" }],
        certificateImages: ["assets/cer/cer คลิปยาเสพติด.JPEG"],

        activityPhotos: ["assets/คลิปยาเสพติด/20250604_092401.JPEG", "assets/คลิปยาเสพติด/20250604_145536.JPEG", "assets/คลิปยาเสพติด/IMG_8596.JPG", "assets/คลิปยาเสพติด/IMG_8597.JPG", "assets/cer/cer คลิปยาเสพติด.JPEG"],

        caseStudy: {
          overview: "A video competition promoting anti-drug awareness.",
          problem: "Had to communicate an anti-drug message clearly and engagingly in a short video format.",
          approach: "Led production planning as director, overseeing the overall filming, and edited the video to match the project's concept and goals.",
          process: "Edited the video and coordinated with the team from start to finish.",
          result: "Won 1st place in the competition.",
          learning: "Developed planning and project management, communication and coordination, on-the-spot problem-solving, and using digital tools for video production and editing — plus creative thinking, concept development, and storytelling through video, and working with others on a team."
        }
      },
      {
        slug: "logo-design-competition",
        index: "51",
        title: "School Bag Logo Design",
        description: "Won 1st place in a logo design competition for the school's backpacks and side bags.",
        category: "graphic-3d",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/ออกแบบโลโก้กระเป๋า/ออกแบบ logo1.png", "assets/ออกแบบโลโก้กระเป๋า/ออกแบบ logo2.png"],

        role: "Designer",
        context: "School logo design competition",
        result: "1st Place",
        technologies: ["Adobe Illustrator", "Logo Design"],
        workLinks: [],
        certificateImages: [],
        activityPhotos: ["assets/ออกแบบโลโก้กระเป๋า/ออกแบบ logo1.png", "assets/ออกแบบโลโก้กระเป๋า/ออกแบบ logo2.png"],

        caseStudy: {
          overview: "A logo design competition for the school's backpacks and side bags.",
          problem: "The logo had to be meaningful and suitable for real use printed on a bag.",
          approach: "Used Adobe Illustrator to design and develop the work, starting from concept through to composition.",
          process: "Refined the logo's details to suit real-world application.",
          result: "Won 1st place in the competition.",
          learning: "Developed digital design skills, creativity, problem-solving, and practiced turning a concept into a work that could be applied in the real world."
        }
      },
      {
        slug: "infographic-lotus-festival",
        index: "52",
        title: "Loy Krathong Infographic",
        description: "Won 1st place in an infographic design competition for Loy Krathong, held at Samutsakhonburana School.",
        category: "graphic-3d",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/infographic loykrathong/infographic loykrathong.png"],

        role: "Designer",
        context: "Loy Krathong infographic design competition",
        result: "1st Place",
        technologies: ["Adobe Illustrator", "Infographic Design", "Canva"],
        workLinks: [],
        certificateImages: [],
        activityPhotos: ["assets/infographic loykrathong/infographic loykrathong.png"],

        caseStudy: {
          overview: "An infographic design competition for Loy Krathong.",
          problem: "The infographic had to be meaningful and suitable for real use.",
          approach: "Designed an infographic on the theme \"Float a Krathong, Not Trash,\" using Canva, starting from concept through to composition.",
          process: "Refined the infographic's details to be clear, easy to read, and communicate the message effectively.",
          result: "Won 1st place in the competition.",
          learning: "Developed digital design skills, creativity, problem-solving, and practiced turning a concept into a work that could be applied in the real world."
        }
      },
      {
        slug: "brain-code-camp",
        index: "53",
        title: "Brain Code Camp: EEG Cognitive Fatigue Detection",
        description: "An in-progress project from Brain Code Camp, using machine learning to detect cognitive fatigue from EEG signals, building on and testing the findings of Yang et al. (2025).",
        category: "projects",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/braincode/A49D64C8-0220-4FD4-9D4D-D6E3FBCAC18E.JPG", "assets/braincode/IMG_2013.jpg", "assets/braincode/IMG_2233.JPG", "assets/braincode/IMG_2634.PNG", "assets/braincode/IMG_2900.JPG", "assets/braincode/IMG_2944.PNG"],

        role: "Brain Code Camp Participant — designing an individual research project",
        context: "Brain Code Camp — Neuroscience × AI Deep Learning program",
        result: "Project currently in progress",
        technologies: ["EEG Signal Processing", "Machine Learning", "Python", "Logistic Regression", "Random Forest", "XGBoost"],
        workLinks: [
          { label: "Course Site", href: "https://course2024-braincodecamp.web.app/intro.html" },
          { label: "GitHub Pages", href: "https://braincode101.github.io/" }
        ],
        certificateImages: [],
        activityPhotos: ["assets/braincode/A49D64C8-0220-4FD4-9D4D-D6E3FBCAC18E.JPG", "assets/braincode/IMG_2013.jpg", "assets/braincode/IMG_2233.JPG", "assets/braincode/IMG_2634.PNG", "assets/braincode/IMG_2900.JPG", "assets/braincode/IMG_2944.PNG"],

        caseStudy: {
          overview: "Brain Code Camp is a program focused on building programming skills and understanding the relationship between behavior and brain signals through mathematical modeling and AI (Neuroscience × AI/Deep Learning). This project started from an interest in burnout and chronic stress — existing assessment methods like monthly questionnaires are too slow and imprecise, raising the question of whether machine learning could detect these signals before a person even notices them.",
          problem: "Burnout is a very broad term that's hard to label directly, and datasets with direct burnout labels are extremely hard to find — so the focus shifted to cognitive fatigue, a measurable precursor of burnout that can be tracked directly via EEG. Yang et al., using the same dataset (ds005385, the Dortmund Vital Study on OpenNeuro), only ran statistical analysis — no one had yet tested whether an ML classifier could actually detect these patterns.",
          approach: "Building on Yang et al., the project asks: if statistical analysis found different EEG patterns by fatigue and age, can an ML classifier learn and predict those same patterns — and would age and behavioral data make it more accurate? The plan is to extract the same features the paper already validated — low alpha power, high alpha power, the aperiodic exponent, a Fatigue Index, and wPLI connectivity — then build 3 model tracks to compare: Model A (EEG only), Model B (+ age group), and Model C (+ synthetic behavioral data), each trained with Logistic Regression, Random Forest, and XGBoost, evaluated by F1-score and Recall.",
          process: "Planning to use roughly 90 of the dataset's 608 participants, split evenly by age group (30 each: Young 20–34, Middle 35–50, Older 51–70), with 2 recordings per person (pre-task and post-task) for 180 samples total. Results will be compared against Yang et al. (2025) and across Model A vs. B vs. C. Three primary outcomes are targeted: (1) F1-score and Recall for classifying pre- vs. post-task, aiming for F1 > 0.75; (2) a feature-importance ranking, checked against Yang et al.'s findings; (3) a comparison across the 3 age groups, testing whether younger adults really do classify better than older adults as predicted.",
          result: "The project is still in progress (currently in the data-preparation and experiment-design stage) — no final results yet. As far as research so far shows, no one has directly applied ML to the ds005385 dataset, or systematically compared 3 age groups with ML before, which makes this project a paper-replication study testing the original statistical findings with a new method.",
          learning: "Practiced reading and interpreting a scientific paper, framing a research question and designing a systematic experiment, working with EEG data and domain-specific feature engineering, and consulting with a TA to scope the question into something achievable."
        }
      },
      {
        slug: "sketchup-eco-trash-bin",
        index: "54",
        title: "Eco Trash Bin — 3D Design Competition",
        description: "A 3D design competition at Samut Sakhon Community College, tasked with designing an eco-friendly trash bin for schools using SketchUp.",
        category: "graphic-3d",
        year: "[YEAR]",
        featured: false,
        heroImage: null,
        gallery: ["assets/วิทยาลัยชุมชน 3D/IMG_7897.JPG", "assets/วิทยาลัยชุมชน 3D/IMG_7931.JPG", "assets/cer/cer วิทยาลัยชุมชน.png"],

        role: "3D Designer",
        context: "3D design competition, Samut Sakhon Community College",
        result: "[RESULT]",
        technologies: ["SketchUp", "3D Modeling"],
        workLinks: [],
        certificateImages: ["assets/cer/cer วิทยาลัยชุมชน.png"],

        activityPhotos: ["assets/วิทยาลัยชุมชน 3D/IMG_7897.JPG", "assets/วิทยาลัยชุมชน 3D/IMG_7931.JPG", "assets/cer/cer วิทยาลัยชุมชน.png"],

        caseStudy: {
          overview: "A 3D design competition organized by Samut Sakhon Community College, with the brief being to design an eco-friendly trash bin ('trash bin that helps the world') for use in schools, using SketchUp.",
          problem: "Had to design a trash bin that was genuinely usable in a school setting while also communicating an environmental-friendliness concept.",
          approach: "Used SketchUp to design and build a 3D model of the trash bin, from shaping the initial concept and form through to the piece's finer details.",
          process: "Refined the model to suit real school use and to fit the competition's brief.",
          result: "[RESULT]",
          learning: "Practiced 3D design with SketchUp, design thinking for environmental problem-solving, and applying sustainability concepts to a design project."
        }
      },
      {
        slug: "infographic-other-works",
        index: "55",
        title: "Other Infographic Work",
        description: "Various infographic design practice and work, made outside of specific competitions.",
        category: "graphic-3d",
        year: "[YEAR]",
        featured: false,
        heroImage: null,
        gallery: ["assets/infographic ต่าง ๆ/IMG_4638.JPG", "assets/infographic ต่าง ๆ/infographic 2.png", "assets/infographic ต่าง ๆ/infographic microplastic-01.JPEG", "assets/infographic ต่าง ๆ/infographic.png"],

        role: "Designer",
        context: "Personal project",
        result: "Practiced infographic design skills with various tools",
        technologies: ["Adobe Illustrator", "Canva", "Infographic Design"],
        workLinks: [],
        certificateImages: [],
        activityPhotos: ["assets/infographic ต่าง ๆ/IMG_4638.JPG", "assets/infographic ต่าง ๆ/infographic 2.png", "assets/infographic ต่าง ๆ/infographic microplastic-01.JPEG", "assets/infographic ต่าง ๆ/infographic.png"],

        caseStudy: {
          overview: "Practiced designing infographics on a variety of topics, to get more comfortable with the tools and grow more skilled at infographic design.",
          problem: "",
          approach: "",
          process: "",
          result: "",
          learning: "Developed infographic design skills, laying out information so it's easy to understand, and using design tools like Adobe Illustrator and Canva to create work that communicates effectively."
        }
      }
    ],

    personalGallery: {
      eyebrow: "Photos",
      heading: "My Gallery",
      photos: [
        { image: "assets/คลังรูปภาพและ gallery/IMG_0615.JPG", alt: "", caption: "" },
        { image: "assets/คลังรูปภาพและ gallery/P1518086.JPEG", alt: "", caption: "" },
        { image: "assets/คลังรูปภาพและ gallery/IMG_5522 2.jpg", alt: "", caption: "" },
        { image: "assets/คลังรูปภาพและ gallery/IMG_8147.JPG", alt: "", caption: "" },
        { image: "assets/คลังรูปภาพและ gallery/ITKMITL-OpenHouse-day2-2-106.JPEG", alt: "", caption: "" },
        { image: "assets/คลังรูปภาพและ gallery/P1517965.JPEG", alt: "", caption: "" },
        { image: "assets/คลังรูปภาพและ gallery/IMG_1501 2.JPG", alt: "", caption: "" },
        { image: "assets/คลังรูปภาพและ gallery/P1518106 2.JPEG", alt: "", caption: "" },
        { image: "assets/คลังรูปภาพและ gallery/P1518152.JPEG", alt: "", caption: "" }
      ]
    },

    learned: {
      items: [
        { text: "Life isn't cruel to us forever. Today might not be our day yet, but there will definitely come a day that is.", tag: "From the book “Growing Up, I Realized…”" },
        { text: "As long as the sun still rises every new morning, that means we always have a chance to start again.", tag: "From the book “Promise Me You'll Smile at Yourself”" },
        { text: "What I chose was the best choice I could make at the time I made it.", tag: "From the book “The Things You Carry, You're Allowed to Put Down”" }
      ]
    },

    about: {
      hero: {
        eyebrow: "About Me",
        greeting: "Hi, I'm Chayanit.",
        statement: "I like asking questions before writing code.\nI'm interested in Programming, Data, and AI,\nbut what interests me even more is understanding\n<strong>“what the real problem is, and how technology can help solve it.”</strong>",
        photo: "assets/คลังรูปภาพและ gallery/P1517984.JPEG",
        facts: [
          { label: "Based In", value: "Samutsakhon, Thailand" },
          { label: "Focus", value: "AI / ML · Web Development · Data Analysis" },
          { label: "Currently", value: "Learning · Building · Exploring" }
        ]
      },
      aLittleAboutMe: {
        eyebrow: "02 — A Little About Me",
        heading: "A Little About Me",
        photo: "assets/คลังรูปภาพและ gallery/P1517968.JPEG",
        body: "Hi, I'm Baitoey. My journey with technology started with a simple question: could the ideas in my head actually become something real? That curiosity became clearer in lower secondary school, when I joined a competition designing everyday objects using computer programs. That's when I discovered that <strong>a computer isn't just a tool for using things — it can be a tool for creating and solving problems.</strong> Since then, I've grown more interested in programming, data analysis, and AI/ML, especially in analyzing problems, breaking them down into parts, and finding solutions systematically.",
        facts: [
          { label: "Name", value: "Chayanit Chansuttikanok (Baitoey)" },
          { label: "Personality", value: "ISFJ — fairly quiet, overthinks a lot, ambitious, highly responsible" },
          { label: "Hobbies", value: "Trying new things, sleeping, listening to music" },
          { label: "Fun Fact", value: "Loves cats (unrequited), loves chocolate and sour food" }
        ],
        photos: [
          { image: "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0012.JPG", caption: "" },
          { image: "assets/สอวน/IMG_0243.JPG", caption: "" },
          { image: "assets/สอวน/IMG_8409.JPG", caption: "" }
        ]
      },
      journey: {
        eyebrow: "03 — My Journey",
        heading: "My Journey",
        intro: "It all started with curiosity and experimentation.",
        steps: [
          "A 3D design competition in lower secondary school showed me that an idea could be turned into something real — something you could see and actually use.",
          "In upper secondary school, I chose the Math-Computer program to seriously study technology, and started discovering that I genuinely enjoyed programming.",
          "Getting the chance to attend the Computer Science Olympiad Camp (POSN) let me study programming seriously, and became the starting point for picking up other programming languages.",
          "What I love about programming isn't just making code work — it's analyzing what a problem actually needs, breaking it down, and designing a systematic solution.",
          "From programming, I became more interested in the connection between math, data, and technology — which grew into an interest in data analysis and AI/ML."
        ],
        photos: [
          { image: "assets/คลังรูปภาพและ gallery/IMG_9266.JPG", caption: "พยายามมากขึ้น" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_7262.JPG", caption: "จุดเริ่มต้นในของสายคอม" },
          { image: "assets/คลังรูปภาพและ gallery/P1518152.JPEG", caption: "เรียนรู้" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_1501 2.JPG", caption: "ทดลองทำ" },
          { image: "assets/สอวน/IMG_8528.JPG", caption: "กล้าแสดงออกมากขึ้น" },
          { image: "assets/สอวน/IMG_0398.JPG", caption: "เรียนรู้สิ่งใหม่ ๆ" },
          { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8057.jpg", caption: "พัฒนาทักษะด้านต่าง ๆ" }
        ]
      },
      educationTimeline: {
        eyebrow: "04 — Education Timeline",
        heading: "Education History",
        entries: [
          { stage: "Primary School", years: "2012 - 2021", school: "Wantthamariaratchaburi School", track: null, gpax: "4.00", logo: "assets/โลโก้วันทามารีอา.webp", points: [""], photo: "assets/รูปอนุบาล.JPG", photoCaption: "วัยอนุบาล" },
          { stage: "Lower Secondary", years: "2021 - 2024", school: "Samutsakhonburana School", track: "Special SMTE Program", gpax: "4.00", logo: "assets/โลโก้สมุทรสาครบูรณะ.png", points: [""], photo: "assets/IMG_7595.JPG", photoCaption: "วัยมัธยมต้น" },
          { stage: "Upper Secondary", years: "2024 - Present", school: "Samutsakhonburana School", track: "Math-Computer Program", gpax: "4.00", logo: "assets/โลโก้สมุทรสาครบูรณะ.png", points: [""], photo: "assets/คลังรูปภาพและ gallery/P1517949.JPEG", photoCaption: "วัยมัธยมปลาย" }
        ]
      },
      skills: {
        eyebrow: "05 — Skills & Toolkit",
        heading: "SKILLS & TOOLKIT",
        groups: [
          { label: "Programming", items: [
            { name: "Python", logo: "https://cdn.simpleicons.org/python/fff8ea" }, { name: "C/C++", logo: "https://cdn.simpleicons.org/cplusplus/fff8ea" }, { name: "HTML", logo: "https://cdn.simpleicons.org/html5/fff8ea" }, { name: "CSS/Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/fff8ea" }, { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/fff8ea" }, { name: "React", logo: "https://cdn.simpleicons.org/react/fff8ea" }, { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/fff8ea" }, { name: "PHP", logo: "https://cdn.simpleicons.org/php/fff8ea" }, { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/fff8ea" }, { name: "Chart.js", logo: "https://cdn.simpleicons.org/chartdotjs/fff8ea" }, { name: "Leaflet", logo: "https://cdn.simpleicons.org/leaflet/fff8ea" }, { name: "Streamlit", logo: "https://cdn.simpleicons.org/streamlit/fff8ea" }, { name: "Pygame", logo: null }, { name: "Roblox Studio", logo: "https://cdn.simpleicons.org/roblox/fff8ea" }, { name: "html2canvas", logo: null }
          ] },
          { label: "AI / Machine Learning", items: [
            { name: "Python", logo: "https://cdn.simpleicons.org/python/fff8ea" }, { name: "Scikit-learn", logo: "https://cdn.simpleicons.org/scikitlearn/fff8ea" }, { name: "Pandas", logo: "https://cdn.simpleicons.org/pandas/fff8ea" }, { name: "NumPy", logo: "https://cdn.simpleicons.org/numpy/fff8ea" }, { name: "R", logo: "https://cdn.simpleicons.org/r/fff8ea" }, { name: "RStudio", logo: "https://cdn.simpleicons.org/rstudioide/fff8ea" }, { name: "XGBoost", logo: null }, { name: "MATLAB", logo: null }
          ] },
          { label: "Graphic Design & 3D", items: [
            { name: "Adobe Photoshop", logo: null }, { name: "Adobe Illustrator", logo: null }, { name: "Figma", logo: "https://cdn.simpleicons.org/figma/fff8ea" }, { name: "Blender", logo: "https://cdn.simpleicons.org/blender/fff8ea" }, { name: "SketchUp", logo: "https://cdn.simpleicons.org/sketchup/fff8ea" }, { name: "3Ds Max", logo: null }, { name: "Canva", logo: null }, { name: "Onshape", logo: null }
          ] },
          { label: "Editing", items: [
            { name: "Adobe Premiere Pro", logo: null }, { name: "Adobe After Effects", logo: null }, { name: "DaVinci Resolve", logo: "https://cdn.simpleicons.org/davinciresolve/fff8ea" }
          ] },
          { label: "Tools", items: [
            { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/fff8ea" }, { name: "Git", logo: "https://cdn.simpleicons.org/git/fff8ea" }, { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/fff8ea" }
          ] },
          { label: "Other Basic Skills", items: [
            { name: "Communication", logo: null }, { name: "Teamwork", logo: null }, { name: "Problem Solving", logo: null }, { name: "Critical Thinking", logo: null }, { name: "Time Management", logo: null }, { name: "Leadership", logo: null }
          ] }
        ]
      },
      /* not sure what to put here yet — section disabled on the page too
         (see about.html) until this has real content.
      whatIBuild: {
        eyebrow: "06 — What I Like to Do",
        heading: "Work I Enjoy, Explore, and Have Made",
        areas: [
          { label: "Coding / AI Projects", description: "[SHORT DESCRIPTION]", technologies: ["[TECH]", "[TECH]"], categoryHref: "work-coding-ai.html" },
          { label: "Graphic / 3D", description: "[SHORT DESCRIPTION]", technologies: ["[TECH]", "[TECH]"], categoryHref: "work-graphic-3d.html" },
          { label: "Activities / Volunteering", description: "[SHORT DESCRIPTION]", technologies: ["[TECH]", "[TECH]"], categoryHref: "work-activity.html" },
          { label: "Training / Courses", description: "[SHORT DESCRIPTION]", technologies: ["[TECH]", "[TECH]"], categoryHref: "work-training.html" }
        ]
      }, */
      certifications: {
        eyebrow: "06 — Certifications",
        heading: "Certifications & Test Results",
        items: [
          { title: "POSN Computer", badge: "Camp 2", slug: "posn-computer-camp-2" },
          { title: "CEFR", badge: "B1", slug: "cefr-test" },
          { title: "CU-TEP", badge: "35 points", slug: "cu-tep-test" },
          { title: "COMPAS-PY1", badge: "Passed", slug: "compas-py1" }
        ]
      },
      beyondCode: {
        eyebrow: "07 — Photos",
        heading: "My Photo Gallery",
        body: "Memories and stories from different moments of my life.",
        // no captions — this pile is pure decoration (see .beyond-stack in
        // styles.css), not a captioned gallery like personalGallery/photos
        // elsewhere.
        photos: [
          { image: "assets/3D/IMG_7813.JPG" }, { image: "assets/3D/P1163849.JPEG" }, { image: "assets/3D/P1163988.JPEG" },
          { image: "assets/3D/P1182026.JPEG" }, { image: "assets/3D/Screenshot 2026-09-21 154708.png" }, { image: "assets/3D/Screenshot 2026-09-21 154750.png" },
          { image: "assets/3D/Screenshot 2026-09-21 154842.png" }, { image: "assets/3D/Screenshot 2026-09-21 154925.png" }, { image: "assets/3D/Screenshot 2569-09-21 at 15.45.26.png" },
          { image: "assets/3D/Screenshot 2569-09-21 at 15.45.32.png" }, { image: "assets/3D/Screenshot 2569-09-21 at 15.45.37.png" }, { image: "assets/3D/Screenshot 2569-09-21 at 15.45.44.png" },
          { image: "assets/AI Builders clock drawing/749213776_1051888347590083_6154981981130816501_n_Original.jpg" }, { image: "assets/AI Builders clock drawing/IMG_1784.jpg" }, { image: "assets/AI Builders clock drawing/IMG_1790.JPG" },
          { image: "assets/AI Builders clock drawing/IMG_1793.JPG" }, { image: "assets/AI Builders clock drawing/IMG_1794.JPG" }, { image: "assets/AI Builders clock drawing/IMG_1804.JPG" },
          { image: "assets/AI Builders clock drawing/IMG_1808.JPG" }, { image: "assets/AI Builders clock drawing/IMG_1811.JPG" }, { image: "assets/AI Builders clock drawing/IMG_1892.JPG" },
          { image: "assets/AI Builders clock drawing/IMG_20260719_145336.JPG" }, { image: "assets/IMG_7595.JPG" }, { image: "assets/R you ready for analysys/IMG_2301.JPG" },
          { image: "assets/R you ready for analysys/IMG_2744.JPG" }, { image: "assets/R you ready for analysys/att.3PsxPybp1mkGmdOWBcd_BdOWSke9hJkDJZd4_CW47ao.JPG" }, { image: "assets/R you ready for analysys/att.ncSuxJnTfljcGfQGwes0FeM9Pu3BKIiInQ4f2GfyBdY.JPG" },
          { image: "assets/The Happy Toilet/1.png" }, { image: "assets/The Happy Toilet/2.png" }, { image: "assets/The Happy Toilet/3.png" },
          { image: "assets/The Happy Toilet/4.png" }, { image: "assets/The Happy Toilet/5.png" }, { image: "assets/The Happy Toilet/IMG_6907.JPG" },
          { image: "assets/The Happy Toilet/center.png" }, { image: "assets/The Happy Toilet/perspective toilet.png" }, { image: "assets/The Happy Toilet/perspective toilet2.png" },
          { image: "assets/The Happy Toilet/top.png" }, { image: "assets/The Happy Toilet/สุขีสุขา-01.png" }, { image: "assets/airsync/DSC_2275.JPEG" },
          { image: "assets/airsync/IMG_2470.JPG" }, { image: "assets/airsync/IMG_2471.JPG" }, { image: "assets/airsync/IMG_2472.JPG" },
          { image: "assets/airsync/IMG_2473.JPG" }, { image: "assets/airsync/IMG_2474.JPG" }, { image: "assets/airsync/IMG_2607.JPG" },
          { image: "assets/airsync/IMG_2613.JPG" }, { image: "assets/airsync/IMG_2620.JPG" }, { image: "assets/airsync/IMG_2621.JPG" },
          { image: "assets/airsync/IMG_2622.JPG" }, { image: "assets/airsync/IMG_2624.JPG" }, { image: "assets/airsync/IMG_2625.JPG" },
          { image: "assets/airsync/IMG_6778.JPEG" }, { image: "assets/bangmod hack game/Screenshot 2026-09-05 231705.png" }, { image: "assets/bangmod hack online/att.DpFgd4S9iALc2mD2aB5-LyJkWyKMv5_yMIQnb41MwPc.JPG" },
          { image: "assets/bebras/att.UMB876DbfDAlmYaK9h9V8XhPXEZutbznvMs3rwy_-9U.JPG" }, { image: "assets/bebras/att.lP3UDqa2l2T7wQfF4T7Dlq77e-IXZ31By3W3WfQzGFI.JPG" }, { image: "assets/braincode/A49D64C8-0220-4FD4-9D4D-D6E3FBCAC18E.JPG" },
          { image: "assets/braincode/IMG_2013.jpg" }, { image: "assets/braincode/IMG_2233.JPG" }, { image: "assets/braincode/IMG_2634.PNG" },
          { image: "assets/braincode/IMG_2900.JPG" }, { image: "assets/braincode/IMG_2944.PNG" }, { image: "assets/check skburana/Screenshot 2569-09-21 at 15.36.58.png" },
          { image: "assets/check skburana/Screenshot 2569-09-21 at 15.37.16.png" }, { image: "assets/check skburana/Screenshot 2569-09-21 at 15.37.26.png" }, { image: "assets/check skburana/Screenshot 2569-09-21 at 15.37.38.png" },
          { image: "assets/check skburana/Screenshot 2569-09-21 at 15.37.54.png" }, { image: "assets/check skburana/Screenshot 2569-09-21 at 15.38.39.png" }, { image: "assets/compas/IMG_0581.jpg" },
          { image: "assets/comsci career hub/IMG_6347.JPEG" }, { image: "assets/comsci career hub/IMG_6348.JPEG" }, { image: "assets/comsci career hub/IMG_6466.JPEG" },
          { image: "assets/comsci career hub/IMG_7138.jpg" }, { image: "assets/figma/IMG_7457.JPG" }, { image: "assets/figma/P1500665.JPEG" },
          { image: "assets/figma/P1500679.JPEG" }, { image: "assets/figma/P1500743.JPEG" }, { image: "assets/figma/P1500746.JPEG" },
          { image: "assets/hece จิตอาสาดูแลความสะอาด/IMG_5768.JPG" }, { image: "assets/hece จิตอาสาดูแลความสะอาด/IMG_5769.JPG" }, { image: "assets/hece จิตอาสาดูแลความสะอาด/IMG_5770.JPG" },
          { image: "assets/image processing/P1091357.JPG" }, { image: "assets/image processing/P1091370.JPG" }, { image: "assets/image processing/P1091406.JPG" },
          { image: "assets/image processing/P1091420.JPG" }, { image: "assets/infographic loykrathong/infographic loykrathong.png" }, { image: "assets/infographic ต่าง ๆ/IMG_4638.JPG" },
          { image: "assets/infographic ต่าง ๆ/infographic 2.png" }, { image: "assets/infographic ต่าง ๆ/infographic microplastic-01.JPEG" }, { image: "assets/infographic ต่าง ๆ/infographic.png" },
          { image: "assets/jwc/27BC3C75-3A7E-44B4-8C57-526E67E58CEB.JPG" }, { image: "assets/jwc/DSC00426.JPEG" }, { image: "assets/jwc/DSC06161.JPEG" },
          { image: "assets/jwc/DSC_5345.JPEG" }, { image: "assets/jwc/DSC_8111.JPEG" }, { image: "assets/jwc/F363F9F1-EB53-4C50-B959-F3E326F7BE6E.JPG" },
          { image: "assets/jwc/IMG_0030.JPEG" }, { image: "assets/jwc/IMG_0031.JPEG" }, { image: "assets/jwc/IMG_1013.jpg" },
          { image: "assets/jwc/IMG_1021.jpg" }, { image: "assets/jwc/IMG_1032.jpg" }, { image: "assets/jwc/IMG_1055.jpg" },
          { image: "assets/jwc/IMG_1059.jpg" }, { image: "assets/jwc/IMG_3313.jpg" }, { image: "assets/jwc/IMG_3317.jpg" },
          { image: "assets/jwc/IMG_3322.jpg" }, { image: "assets/jwc/IMG_5407.jpg" }, { image: "assets/jwc/IMG_5610.JPEG" },
          { image: "assets/jwc/IMG_7368.jpg" }, { image: "assets/jwc/IMG_9405.jpg" }, { image: "assets/jwc/IMG_9487.jpg" },
          { image: "assets/jwc/IMG_9494.jpg" }, { image: "assets/mindbloom/Screenshot 2569-09-21 at 15.35.24.png" }, { image: "assets/mindbloom/Screenshot 2569-09-21 at 15.35.29.png" },
          { image: "assets/mindbloom/Screenshot 2569-09-21 at 15.35.44.png" }, { image: "assets/mindbloom/Screenshot 2569-09-21 at 15.36.02.png" }, { image: "assets/mindbloom/mindbloom1.png" },
          { image: "assets/mindbloom/mindbloom2.png" }, { image: "assets/nova data/IMG_2728.jpg" }, { image: "assets/nova data/IMG_2734.PNG" },
          { image: "assets/nova data/IMG_2740.JPG" }, { image: "assets/nova data/IMG_2741.JPG" }, { image: "assets/nova data/IMG_2913.JPG" },
          { image: "assets/nova data/IMG_6096.JPG" }, { image: "assets/nova data/IMG_6100.JPG" }, { image: "assets/nova data/IMG_6110.JPG" },
          { image: "assets/nova data/IMG_6112.JPG" }, { image: "assets/nova data/att.eO_IjoMbIDNcYwTW1A1ERVaOlQYti9Irov-9Cs4rrZs.JPG" }, { image: "assets/onshape/IMG_7709.JPG" },
          { image: "assets/sympopsium skss edu park/IMG_2186.jpg" }, { image: "assets/sympopsium skss edu park/IMG_2194 2.JPG" }, { image: "assets/sympopsium skss edu park/IMG_2197.JPG" },
          { image: "assets/sympopsium skss edu park/IMG_2198.JPG" }, { image: "assets/sympopsium skss edu park/IMG_2199.JPG" }, { image: "assets/sympopsium skss edu park/IMG_2200.JPG" },
          { image: "assets/tutor posn/IMG_1287.JPG" }, { image: "assets/tutor posn/IMG_1288.JPG" }, { image: "assets/tutor posn/IMG_1595.JPG" },
          { image: "assets/tutor posn/IMG_1596.JPG" }, { image: "assets/tutor posn/IMG_1599.JPG" }, { image: "assets/tutor posn/IMG_1600.JPG" },
          { image: "assets/tutor posn/IMG_1604.JPG" }, { image: "assets/tutor posn/IMG_1605.JPG" }, { image: "assets/tutor posn/IMG_20260604_073201.JPEG" },
          { image: "assets/workshop 3D wallpaper/IMG_6497.JPG" }, { image: "assets/zigma camp/DSC02494.JPEG" }, { image: "assets/zigma camp/DSC02495.JPEG" },
          { image: "assets/zigma camp/IMG_6248.jpg" }, { image: "assets/zigma camp/IMG_6296.JPG" }, { image: "assets/zigma camp/IMG_6298.JPG" },
          { image: "assets/zigma camp/IMG_6300.JPG" }, { image: "assets/zigma camp/IMG_6302.JPG" }, { image: "assets/คลังรูปภาพและ gallery/20260827_084842.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/2E81C1F1-5D65-4662-9582-CEADDE44AD6F 2.JPG" }, { image: "assets/คลังรูปภาพและ gallery/47eb294605c2ec77a3628c4c495a669f.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/APAP0189.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/APAP0190.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/AV5A0065.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/AV5A0066.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/AV5A0067.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/C710751F-6B90-400F-8916-A6FB8883274E.JPG" }, { image: "assets/คลังรูปภาพและ gallery/DD006CAC-8C26-4D69-B1E3-33F04A6278B5.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/DSC00123-2.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/DSC02864.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_0615.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_0625.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_0657.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_0909.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_1060.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_1366.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_1371.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_1374.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_1405.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_1501 2.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_1750.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_1796.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_1800.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_2194.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_2662.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_2895.jpg" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_2993.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_3364.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_3832 2.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_3832.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_4660.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_4799.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_4805.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_4987.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_5016.jpg" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_5152.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_5469.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_5522 2.jpg" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_5873.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_6484.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_6578.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_6632.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_7262.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_7688.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_8145.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_8147.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_8777.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_9078.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_9264.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_9266.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_9431.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_9997.jpg" }, { image: "assets/คลังรูปภาพและ gallery/ITKMITL-OpenHouse-day2-2-106.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1161545.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1233147.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1436648.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1436710.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1436713.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1517931.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1517945.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1517949.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1517952.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1517956.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1517960.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1517965.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1517968.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1517970.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1517979.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1517982.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1517984.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1517989.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1517990.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1518086.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1518097.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1518104.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1518105.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1518106 2.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1518106.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1518116.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1518117 2.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1518117.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1518121.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1518124.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1518128.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1518147.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1518150.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1518152.JPEG" }, { image: "assets/คลิปยาเสพติด/20250604_092401.JPEG" }, { image: "assets/คลิปยาเสพติด/20250604_145536.JPEG" },
          { image: "assets/คลิปยาเสพติด/IMG_8596.JPG" }, { image: "assets/คลิปยาเสพติด/IMG_8597.JPG" }, { image: "assets/ซุ้มวันวิทย์/IMG_2039.JPG" },
          { image: "assets/ซุ้มวันวิทย์/IMG_2647.jpg" }, { image: "assets/ซุ้มวันวิทย์/IMG_2976.JPG" }, { image: "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0012.JPG" },
          { image: "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0016.JPG" }, { image: "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0023.JPG" }, { image: "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0045.JPG" },
          { image: "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0047.JPG" }, { image: "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0049.JPG" }, { image: "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0050.JPG" },
          { image: "assets/ซุ้มเปิดบ้านวิชาการ/IMG_9948.JPG" }, { image: "assets/ซุ้มเปิดบ้านวิชาการ/IMG_9977.JPG" }, { image: "assets/ซุ้มเปิดบ้านวิชาการ/P1257566.JPEG" },
          { image: "assets/ซุ้มเปิดบ้านวิชาการ/P1257567.JPEG" }, { image: "assets/ซุ้มเปิดบ้านวิชาการ/ซุ้มเปิดบ้าน 2.png" }, { image: "assets/ซุ้มเปิดบ้านวิชาการ/ซุ้มเปิดบ้าน.png" },
          { image: "assets/ตรวจจับหน้า python/Screenshot 2025-12-27 135915.png" }, { image: "assets/ตรวจจับหน้า python/Screenshot 2025-12-27 145142.png" }, { image: "assets/ตรวจจับหน้า python/Screenshot 2025-12-27 151103.png" },
          { image: "assets/รับสมัครนักเรียน/057e26279e397e04db24151a346b7fa5.JPEG" }, { image: "assets/รับสมัครนักเรียน/IMG_0422.JPG" }, { image: "assets/รับสมัครนักเรียน/IMG_0423.JPG" },
          { image: "assets/รับสมัครนักเรียน/IMG_0427.JPG" }, { image: "assets/รับสมัครนักเรียน/ed5ee3933df90df98faa13b95d9cc726.JPEG" }, { image: "assets/รูปอนุบาล.JPG" },
          { image: "assets/วิทยาลัยชุมชน 3D/IMG_7897.JPG" }, { image: "assets/วิทยาลัยชุมชน 3D/IMG_7931.JPG" }, { image: "assets/ศิลปหัตถกรรม/IMG_6308.JPG" },{ image: "assets/ศิลปหัตถกรรม/IMG_7319.jpg" },
          { image: "assets/ศิลปหัตถกรรม/att.wjIn_N53unKIiUodjN4ic16HUI4nEfqeIGGVeWsT6y0.JPG" }, { image: "assets/ศิลปหัตถกรรม/att.zGbbJzv5z60_G7AYmuxaB9kVM2tvZHp4LxnfjBCQ-BM.JPG" }, { image: "assets/สอวน/IMG_0198.JPEG" },
          { image: "assets/สอวน/IMG_0243.JPG" }, { image: "assets/สอวน/IMG_0260.JPG" }, { image: "assets/สอวน/IMG_0325.JPG" },
          { image: "assets/สอวน/IMG_0356.JPG" }, { image: "assets/สอวน/IMG_0388.JPG" }, { image: "assets/สอวน/IMG_0393.JPG" },
          { image: "assets/สอวน/IMG_0396.JPG" }, { image: "assets/สอวน/IMG_0398.JPG" }, { image: "assets/สอวน/IMG_0416.JPEG" },
          { image: "assets/สอวน/IMG_0454.JPEG" }, { image: "assets/สอวน/IMG_3963.JPG" }, { image: "assets/สอวน/IMG_3971.JPG" },
          { image: "assets/สอวน/IMG_4123.JPG" }, { image: "assets/สอวน/IMG_4200.JPG" }, { image: "assets/สอวน/IMG_4201.JPG" },
          { image: "assets/สอวน/IMG_4226.JPG" }, { image: "assets/สอวน/IMG_4228.JPG" }, { image: "assets/สอวน/IMG_4237.JPG" },
          { image: "assets/สอวน/IMG_4238.JPG" }, { image: "assets/สอวน/IMG_4241.JPG" }, { image: "assets/สอวน/IMG_4243.JPG" },
          { image: "assets/สอวน/IMG_4244.JPG" }, { image: "assets/สอวน/IMG_4245.JPG" }, { image: "assets/สอวน/IMG_5831.JPG" }, { image: "assets/สอวน/IMG_5832.JPG" }, { image: "assets/สอวน/IMG_5834.JPG" },
          { image: "assets/สอวน/IMG_5835.JPG" }, { image: "assets/สอวน/IMG_5836.JPG" }, { image: "assets/สอวน/IMG_5837.JPG" },
          { image: "assets/สอวน/IMG_6705.JPG" }, { image: "assets/สอวน/IMG_6706.JPG" }, { image: "assets/สอวน/IMG_6707.JPG" },
          { image: "assets/สอวน/IMG_6709.JPG" }, { image: "assets/สอวน/IMG_6712.JPG" }, { image: "assets/สอวน/IMG_8409.JPG" },
          { image: "assets/สอวน/IMG_8413.JPG" }, { image: "assets/สอวน/IMG_8430.JPG" }, { image: "assets/สอวน/IMG_8434.JPG" },
          { image: "assets/สอวน/IMG_8456.JPG" }, { image: "assets/สอวน/IMG_8471.JPG" }, { image: "assets/สอวน/IMG_8478.JPG" },
          { image: "assets/สอวน/IMG_8510.JPG" }, { image: "assets/สอวน/IMG_8513.JPG" }, { image: "assets/สอวน/IMG_8519.JPG" },
          { image: "assets/สอวน/IMG_8524.JPG" }, { image: "assets/สอวน/IMG_8527.JPG" }, { image: "assets/สอวน/IMG_8528.JPG" },
          { image: "assets/สอวน/IMG_8529.JPG" }, { image: "assets/สอวน/IMG_8536.JPG" }, { image: "assets/สอวน/IMG_8561.JPG" },
          { image: "assets/สอวน/IMG_8570.JPG" }, { image: "assets/สอวน/IMG_8573.JPG" }, { image: "assets/หมากฮอส/0A9A5396.JPEG" },
          { image: "assets/หมากฮอส/0A9A6532.JPEG" }, { image: "assets/หมากฮอส/0A9A6567.JPEG" }, { image: "assets/หมากฮอส/0A9A6578.JPEG" },
          { image: "assets/หมากฮอส/1000007143.JPEG" }, { image: "assets/หมากฮอส/1966_0.JPEG" }, { image: "assets/หมากฮอส/IMG_4552.JPG" },
          { image: "assets/หมากฮอส/IMG_8880.jpg" }, { image: "assets/หมากฮอส/IMG_8988.jpg" }, { image: "assets/หมากฮอส/IMG_8991.JPG" },
          { image: "assets/หมากฮอส/P1063659.JPG" }, { image: "assets/หมากฮอส/P1063669.JPG" }, { image: "assets/หมากฮอส/P1335489.JPEG" },
          { image: "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (-1).png" }, { image: "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (1).png" }, { image: "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (2).png" },
          { image: "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (3).png" }, { image: "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (4).png" }, { image: "assets/อบรม data science/20250208_130429.JPEG" },
          { image: "assets/อบรม data science/20250208_133727.JPEG" }, { image: "assets/อบรม data science/IMG_6429.JPG" }, { image: "assets/อบรมโดรน/IMG_7714.jpg" },
          { image: "assets/อบรมโดรน/IMG_7720.jpg" }, { image: "assets/อบรมโดรน/IMG_7731.JPG" }, { image: "assets/อบรมโดรน/IMG_7732.JPG" },
          { image: "assets/อบรมโดรน/IMG_7733.JPG" }, { image: "assets/ออกแบบโลโก้กระเป๋า/ออกแบบ logo1.png" }, { image: "assets/ออกแบบโลโก้กระเป๋า/ออกแบบ logo2.png" },
          { image: "assets/อัจฉริยะภาพคณิต/Screenshot 2026-09-05 231940.png" }, { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_2280.JPG" }, { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_2284.JPG" },
          { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_2298.JPG" }, { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8057.jpg" }, { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8060.JPG" },
          { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8074.JPG" }, { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8076.JPG" }, { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9217.jpg" },
          { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9218.jpg" }, { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9220.jpg" }, { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9221.jpg" },
          { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9230.jpg" }, { image: "assets/เพชรชัยพฤกษ์/0A9A9566.JPEG" }, { image: "assets/เพชรชัยพฤกษ์/0A9A9567.JPEG" },
          { image: "assets/เพชรชัยพฤกษ์/0A9A9570.JPEG" }, { image: "assets/เพชรชัยพฤกษ์/IMG_0003.jpg" }, { image: "assets/เพชรชัยพฤกษ์/P1092401.JPEG" },
          { image: "assets/เพชรชัยพฤกษ์/P1468173.JPEG" }, { image: "assets/เพชรชัยพฤกษ์/P1468176.JPEG" }, { image: "assets/แห่เจ้าพ่อ/0A9A8879.JPEG" },
          { image: "assets/แห่เจ้าพ่อ/AIM_0216.JPEG" }, { image: "assets/แห่เจ้าพ่อ/IMG_1255.jpg" }, { image: "assets/แห่เจ้าพ่อ/IMG_1257.jpg" },
          { image: "assets/แห่เจ้าพ่อ/IMG_1323.JPG" }, { image: "assets/แห่เจ้าพ่อ/IMG_1501.JPG" }, { image: "assets/แห่เจ้าพ่อ/IMG_7097.JPG" }
        ]
      },
      currently: {
        eyebrow: "08 — What I'm Up To",
        heading: "What I'm Currently Doing",
        items: [
          { label: "Learning", value: "Public speaking and Deep Learning" },
          { label: "Building", value: "My Coding & AI skills, and communication skills" },
          { label: "Exploring", value: "Cybersecurity, Computer Engineering, AI" }
        ]
      },
      achievements: {
        eyebrow: "08 — Achievements",
        heading: "[ACHIEVEMENTS HEADING]",
        items: [
          {
            title: "Completed POSN Computer Camp 2 (Computer Olympiad Training)",
            description: "The chance to attend the POSN (Thailand's Olympiad camp program) Computer track at Silpakorn University was a great opportunity to learn step-by-step logical thinking, and a starting point for later picking up other programming languages. Developed skills in designing flowcharts to communicate a process's sequence, and programming in languages like C and C++. Also studied key computer algorithms such as Binary Search, Merge Sort, Decision Tree, BFS, DFS, and Dijkstra's Algorithm, along with data structures like Arrays, Linked Lists, Stacks, Queues, Trees, and Graphs. Beyond the knowledge itself, gained experience in self-management, punctuality, and living alongside others throughout the camp — and made new friends along the way."
          },
          {
            title: "Passed COMPAS-PY1, organized by the Faculty of Engineering, Chulalongkorn University",
            description: "Took a proficiency test in basic Python programming. This test helped assess and develop skills in programming, logical thinking, and systematic problem analysis."
          },
          {
            title: "CEFR English Proficiency Test — Level B1 (Intermediate)",
            description: "Took the CEFR (Common European Framework of Reference for Languages) English proficiency test and achieved a B1 (Intermediate) result, reflecting the ability to communicate in everyday situations and understand everyday content in English. This test helped assess my English proficiency and identify ways to keep improving."
          },
          {
            title: "Took the CU-TEP English Proficiency Test, organized by Chulalongkorn University",
            description: "Took the CU-TEP (Chulalongkorn University Test of English Proficiency) exam, administered by Chulalongkorn University's Academic Testing Center, assessing listening, reading, and writing skills in the test's set format. This helped assess my English proficiency, practice using the language systematically, and use the results to guide further improvement."
          },
          {
            title: "1st Place — Nova Data: Ignite Your Insight Galaxy Competition",
            description: "Competed in the \"Nova Data: Ignite Your Insight Galaxy\" data science competition at IT Ladkrabang Open House 2026, and won 1st place. The competition began with a large dataset about a car dealership business, with the challenge of analyzing the data to find the factors affecting the business and proposing suitable ways to grow revenue and expand. My team applied a data science process to manage and analyze the data — from understanding it, to finding patterns and relationships, to applying machine learning to help analyze it and answer the business question. The challenging part was interpreting the results and turning them into recommendations that could actually inform business decisions. This experience showed me that a large volume of data can become a powerful decision-making tool if you know how to ask the right questions, analyze the data properly, and connect the results back to the problem you're trying to solve. Working on a problem with no ready-made answer, one that demanded analysis, experimentation, and decisions under time pressure, made me realize I genuinely enjoy the process of turning data into understanding, and turning that understanding into meaningful solutions."
          },
          {
            title: "1st Runner-Up — R You Ready for Data Analytics Competition",
            description: "Won 1st runner-up in the \"R You Ready for Data Analytics\" competition at Silpakorn University's Science Week and open house. Learned the basics of data analysis with R and RStudio, then applied that knowledge in the competition to analyze and interpret data and solve problems under a time limit. This experience helped develop skills in data analytics, systematic analytical thinking, and choosing the right programming tools to work with data — such as Python, Pandas, and NumPy — to prepare, analyze, and find interesting patterns in data."
          },
          {
            title: "Honorable Mention — Silpakorn University Computer Programming Competition",
            description: "Won an honorable mention in the computer programming competition at Silpakorn University's Science Week. Developed programming skills and logical analytical thinking by solving problems through programming under a time limit, and practiced analyzing problems, planning a solution's steps, and choosing an appropriate programming approach."
          },
          {
            title: "Best of School — Bebras Thailand, advanced to the national scholarship round",
            description: "Won the Best of School award in the Bebras Thailand computational thinking and computer science test, and advanced to the national scholarship competition round. This helped develop analytical and systematic problem-solving skills — weighing a problem's conditions, analyzing data, and sequencing steps to find a suitable solution — building logical thinking, step-by-step reasoning, and applying computational concepts to solve problems."
          },
          {
            title: "Advanced past the first nationwide proposal round — Bangmod Hackathon: Game Education",
            description: "One of 50 teams nationwide selected to advance past the first project-proposal round of Bangmod Hackathon, under the theme Game Education. Proposed \"Make It Up,\" an educational game on the Roblox platform for youth aged 10–18, designed to build decision-making, planning, and life-management skills through a simulation where players manage time, money, energy, stress, and learning under various constraints — designed around Game-Based Learning and the LADDER Model to create a fun, engaging learning experience that concretely builds systems thinking."
          },
          {
            title: "Competed in IT CLASH: The Battle of IT – Coding Track",
            description: "Competed in IT CLASH: The Battle of IT – Coding Track, organized by the Faculty of Information Technology, King Mongkut's Institute of Technology Ladkrabang, advancing to the first round — a test of programming and problem-solving skills. The competition built skills in analyzing a problem, breaking it into steps, designing a solution approach, and programming in Python under time constraints, developing logical thinking and systematic problem-solving."
          },
          {
            title: "Competed in Bangmod Hackathon's online qualifying round",
            description: "Competed in the online qualifying round of Bangmod Hackathon, working with a team to analyze the problem, find a solution approach, and apply technology to build a product under a time limit. Built skills in systems thinking, problem-solving, teamwork, and applying programming knowledge to a real-world challenge."
          },
          {
            title: "Competed in Hack The Scammer CTF 2025",
            description: "Competed in Hack The Scammer CTF 2025, organized by Thailand's National Cyber Security Agency (NCSA), advancing to the first round of this Capture The Flag (CTF) competition, which challenged competitors to analyze and solve cybersecurity problems. Built skills in analytical thinking, spotting anomalies, step-by-step problem-solving, and applying cybersecurity knowledge under time constraints."
          },
          {
            title: "1st Place — Mathematics Aptitude Competition",
            description: "Won 1st place in the school's internal Mathematics Aptitude Competition, grade 12 level. Built analytical and mathematical problem-solving skills through problems requiring reasoning, spotting relationships in data, and choosing an appropriate solution method under a time limit. This experience developed systematic thinking and step-by-step problem analysis — skills that carry directly over into programming, data analysis, and computer science problem-solving."
          },
          {
            title: "\"Petch Chaiyaphruek\" Award",
            description: "An award the school gives to students who bring recognition and benefit to the school. Received this award for completing POSN Computer Camp 2."
          },
          {
            title: "Gold Medal, 1st Place — Silapahatthakam Arts & Crafts Competition (Educational Service Area level), Everyday-Object Design with Computer Programs, Grades 10–12",
            description: "Practiced designing and building 3D models with Blender — from analyzing the brief and conceiving a concept and form for the object, through to building and refining the model to fit the brief. The competition built skills in digital-creation software alongside systems thinking, problem-solving, and attention to detail. This experience showed that computer knowledge can turn an idea into a concrete digital work, and became another starting point for my interest in studying digital technology and computer science further."
          }
        ]
      },
      cta: { heading: "Let's Talk", label: "Contact Me", href: "contact.html" }
    },

    contact: {
      heading: "Let's Learn Something New Together",
      body: "",
      cta: { label: "Contact Me", href: "contact.html" },
      social: [
        { label: "GitHub", href: "https://github.com/Chayanit-ch" },
        { label: "Facebook", href: "https://web.facebook.com/chayanit.chansuttikanok/" },
        { label: "Instagram", href: "https://www.instagram.com/chayatoeyy/" },
        { label: "Email", href: "mailto:chayatoey.y@gmail.com" }
      ],
      copyright: "© 2026 Chayanit Chansuttikanok"
    },

    // dedicated /contact.html page — distinct from the `contact` block
    // above (which only feeds Home's closing CTA scene). Reuses
    // contact.social for the "Elsewhere" list (script.js filters out the
    // mailto: entry there, since email already gets its own big callout).
    contactPage: {
      hero: {
        eyebrow: "Contact",
        headingLines: ["THE STORY", "DOESN'T HAVE", "TO END HERE."],
        sub: "Let's start the next chapter together.",
      },
      sayHello: {
        heading: "Let's Talk",
        body: "I'm always ready to learn something new.",
        photo: "assets/คลังรูปภาพและ gallery/P1517979.JPEG",
        emailLabel: "Email",
        email: "chayatoey.y@gmail.com",
        availabilityLabel: "Currently open",
        availabilityBody: "Open to new opportunities, interesting projects & collaborations.",
        elsewhereLabel: "Elsewhere"
      },
      finalCta: {
        heading: "Not ready to say hello?",
        body: "That's okay. Go see what I've been building.",
        label: "View My Work →",
        href: "work-projects.html"
      }
    }
  },

  th: {
    ui: {
      skipLink: "ข้ามไปที่เนื้อหา",
      viewProject: "รายละเอียดเพิ่มเติม →",
      projectImagePlaceholder: "[รูปภาพโปรเจกต์]",
      workEmpty: "ผลงานเพิ่มเติมกำลังจะมา แวะมาดูใหม่เร็ว ๆ นี้",
      backToPrefix: "← กลับไปที่ ",
      allCategoriesChip: "ทั้งหมด",
      nextProject: "โปรเจกต์ถัดไป →",
      viewWorkLink: "เปิดดูผลงาน →",
      certificatePlaceholder: "[ภาพเกียรติบัตร]",
      resetPhotos: "↺ จัดเรียงรูปใหม่",
      caseSection: { overview: "ภาพรวมงาน", problem: "ปัญหา", approach: "แนวทางการแก้ไขปัญหา", process: "กระบวนการทำ", result: "ผลลัพธ์", learning: "สิ่งที่ได้เรียนรู้", workLink: "ลิงก์ผลงาน", certificate: "เกียรติบัตร", activity: "รูปภาพกิจกรรม" },
      caseMeta: { role: "บทบาท", context: "บริบท", year: "ปี", technology: "เทคโนโลยีที่ใช้" }
    },

    nav: {
      location: "สมุทรสาคร, ประเทศไทย",
      home: "index.html",
      avatar: "assets/คลังรูปภาพและ gallery/P1517965.JPEG",
      links: [
        { label: "หน้าแรก", href: "index.html" },
        { label: "เกี่ยวกับฉัน", href: "about.html" },
        { label: "ผลงาน", href: "work-projects.html" },
        { label: "ติดต่อ", href: "contact.html" }
      ]
    },

    hero: {
      name: "ชญานิษฐ์\nชาญสุทธิกนก",
      role: "นักเรียนโรงเรียนสมุทรสาครบูรณะ",
      portrait: "assets/chayanit-portrait.png",
      tags: ["โปรแกรม", "ปัญญาประดิษฐ์", "การออกแบบ"]
    },

    intro: {
      eyebrow: "แนะนำตัว",
      heading: "จุดเริ่มต้นของฉัน",
      body: "สวัสดี ฉันชญานิษฐ์\nฉันสนใจในด้านการเขียนโปรแกรม การวิเคราะห์ข้อมูล และ AI\nโดยเริ่มต้นจากความอยากรู้ที่ว่า\n<strong>“ความคิดหนึ่งจะกลายเป็นสิ่งที่สร้างขึ้นจริงได้อย่างไร”</strong>\nวันนี้ฉันยังคงเรียนรู้ ทดลอง และสร้างสิ่งใหม่ ๆ\nผ่านโครงงาน การแข่งขัน และการลงมือทำจริง :)",
      note: "รายละเอียดเส้นทางของฉันเพิ่มเติม →"
    },

    home: {
      workEyebrow: "ผลงานที่ฉันภูมิใจ",
      workHeading: "ผลงานที่โดดเด่นของฉัน",
      viewAllLabel: "ดูผลงานทั้งหมด",
      viewAllHref: "work-projects.html",
      learnedEyebrow: "ประโยคที่ฉันชอบ",
      learnedHeading: "คติประจำใจของฉัน"
    },

    categories: [
      { slug: "projects", label: "โครงงาน", description: "โครงงานต่าง ๆ ที่ฉันได้ทำ" },
      { slug: "coding-ai", label: "Coding/AI", description: "ผลงานและการแข่งขันด้านการเขียนโปรแกรมและปัญญาประดิษฐ์" },
      { slug: "graphic-3d", label: "Graphic/3D", description: "ผลงานออกแบบภาพและโมเดล 3 มิติ" },
      { slug: "activity", label: "กิจกรรม/จิตอาสา", description: "กิจกรรมและงานจิตอาสาต่าง ๆ ที่ฉันเคยทำ" },
      { slug: "training", label: "การอบรม/เรียนเสริม", description: "ค่าย อบรม และการเรียนรู้เพิ่มเติมของฉัน" }
    ],

    projects: [
      {
        slug: "clock-drawing-test",
        index: "01",
        title: "Clock Drawing Test Dementia Screening",
        description: "ปัญญาประดิษฐ์วิเคราะห์ภาพวาดนาฬิกาและประเมินความเสี่ยงของภาวะสมองเสื่อมอัตโนมัติ โดยใช้ระบบคะแนนตาม Chula Clock Drawing Scoring System",
        category: "projects",
        year: "2026",
        featured: true,
        heroImage: null,
        gallery: ["assets/AI Builders clock drawing/749213776_1051888347590083_6154981981130816501_n_Original.jpg", "assets/AI Builders clock drawing/IMG_1784.jpg", "assets/AI Builders clock drawing/IMG_1790.JPG", "assets/AI Builders clock drawing/IMG_1793.JPG", "assets/AI Builders clock drawing/IMG_1794.JPG", "assets/AI Builders clock drawing/IMG_1804.JPG", "assets/AI Builders clock drawing/IMG_1808.JPG", "assets/AI Builders clock drawing/IMG_1811.JPG", "assets/AI Builders clock drawing/IMG_1892.JPG", "assets/AI Builders clock drawing/IMG_20260719_145336.JPG", "assets/cer/cer aibuilders.png"],

        role: "นักเรียนผู้ผ่านเกณฑ์การประเมินโครงการ AI Builders",
        context: " ใน 40 โครงงานที่ผ่านการคัดเลือก",
        result: "รางวัลขวัญใจคณะกรรมการ — AI Builders",
        technologies: ["Deep Learning", "Vision Transformer", "LLM", "Streamlit", "Python"],
        workLinks: [
          { label: "GitHub", href: "https://github.com/Chayanit-ch/cdt-dementia-screening" },
          { label: "Blog Medium", href: "https://medium.com/@baitoey8344/assessing-dementia-risk-by-clock-drawing-test-based-on-the-ccss-scoring-system-using-deep-learning-10328adc8a57?sharedUserId=baitoey8344" },
          { label: "Streamlit", href: "https://cdt-dementia-screening-as7vhbgavmfsmc9np9o5r7.streamlit.app/" }
        ],
        certificateImages: ["assets/cer/cer aibuilders.png"],

        activityPhotos: ["assets/AI Builders clock drawing/749213776_1051888347590083_6154981981130816501_n_Original.jpg", "assets/AI Builders clock drawing/IMG_1784.jpg", "assets/AI Builders clock drawing/IMG_1790.JPG", "assets/AI Builders clock drawing/IMG_1793.JPG", "assets/AI Builders clock drawing/IMG_1794.JPG", "assets/AI Builders clock drawing/IMG_1804.JPG", "assets/AI Builders clock drawing/IMG_1808.JPG", "assets/AI Builders clock drawing/IMG_1811.JPG", "assets/AI Builders clock drawing/IMG_1892.JPG", "assets/AI Builders clock drawing/IMG_20260719_145336.JPG", "assets/cer/cer aibuilders.png"],

        caseStudy: {
          overview: "ระบบปัญญาประดิษฐ์สำหรับคัดกรองความเสี่ยงภาวะสมองเสื่อมเบื้องต้นจาก Clock Drawing Test โดยใช้ Deep Learning วิเคราะห์ภาพวาดนาฬิกาที่ผู้ป่วยวาดเวลา 11:10 โดยอัตโนมัติ ให้คะแนนตามเกณฑ์ CCSS (Chula Clock Drawing Scoring System) ทั้ง 5 ด้าน ซึ่งหากคะแนนต่ำกว่า 6 บ่งชี้ถึงความเสี่ยงต่อภาวะสมองเสื่อม",
          problem: "Dataset ที่ใช้การฝึก class imbalance สูง ทำให้โมเดลมีแนวโน้มที่จะทำนายผลลัพธ์ไปทางคลาสที่มีจำนวนตัวอย่างมากกว่า และยังขาดชุดข้อมูลที่มี Label ครอบคลุมทั้ง 5 ด้านของ CCSS",
          approach: "สร้าง Label ด้วย LLM จากนั้นทดลองพัฒนาโมเดลหลายรูปแบบ ตั้งแต่ Vision Transformer จนถึง Hybrid Model ที่ผสาน VQA Features จาก LLM พร้อมใช้ Focal Loss เพื่อลดปัญหา Class Imbalance อีกทั้งยังทดลองแก้ไขด้วย data augmentation และ oversampling เพื่อปรับปรุงประสิทธิภาพของโมเดล",
          process: "ทดลองโมเดลหลากหลายรูปแบบ และสุดท้าย Deploy ระบบผ่าน Streamlit Web Application ที่รองรับทั้งการอัปโหลดภาพและวาดภาพบนหน้าเว็บโดยตรง เพื่อรับผลวิเคราะห์อัตโนมัติ",
          result: "เป็น 1 ใน 40 โครงงานที่ผ่านการคัดเลือกเข้าร่วมโครงการ AI Builders และพัฒนาโครงงานต่อเนื่อง 10 สัปดาห์ จนได้รับคัดเลือกให้ไปนำเสนอผลงานที่สยามพารากอน และได้รับรางวัลขวัญใจคณะกรรมการการนำเสนอโปสเตอร์โครงงาน",
          learning: "ได้พัฒนาความรู้ด้าน AI ครอบคลุมตั้งแต่การเตรียมข้อมูล การพัฒนาและปรับปรุงโมเดล ไปจนถึงการนำระบบไปใช้งานจริง รวมถึงทักษะการแก้ปัญหา การจัดการข้อมูล การแบ่งเวลาระหว่างการทำงาน"
        }
      },
      {
        slug: "airsync",
        index: "02",
        title: "AirSync",
        description: "เว็บแอปพลิเคชันเพื่อเฝ้าระวัง แจ้งเตือน และส่งเสริมการมีส่วนร่วมของภาคประชาชนในการจัดการปัญหาฝุ่น PM2.5 อย่างบูรณาการ",
        category: "projects",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/airsync/DSC_2275.JPEG", "assets/airsync/IMG_2470.JPG", "assets/airsync/IMG_2471.JPG", "assets/airsync/IMG_2472.JPG", "assets/airsync/IMG_2473.JPG", "assets/airsync/IMG_2474.JPG", "assets/airsync/IMG_2607.JPG", "assets/airsync/IMG_2613.JPG", "assets/airsync/IMG_2620.JPG", "assets/airsync/IMG_2621.JPG", "assets/airsync/IMG_2622.JPG", "assets/airsync/IMG_2624.JPG", "assets/airsync/IMG_2625.JPG", "assets/airsync/IMG_6778.JPEG", "assets/cer/cer airsync1.png", "assets/cer/cer airsync2.png"],

        role: "ผู้พัฒนาเว็บแอปพลิเคชัน",
        context: "การแข่งขันโครงงานนวัตกรรม Clean Air for Life มหาวิทยาลัยราชภัฏเพชรบุรี",
        result: "ได้รับรางวัลชมเชย และ Popular Vote — Clean Air for Life",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Leaflet","Firebase", "Vercel"],
        workLinks: [{label: "Web App", href: "https://airsync-eta.vercel.app/" }],
        certificateImages: ["assets/cer/cer airsync1.png", "assets/cer/cer airsync2.png"],
        activityPhotos: ["assets/airsync/DSC_2275.JPEG", "assets/airsync/IMG_2470.JPG", "assets/airsync/IMG_2471.JPG", "assets/airsync/IMG_2472.JPG", "assets/airsync/IMG_2473.JPG", "assets/airsync/IMG_2474.JPG", "assets/airsync/IMG_2607.JPG", "assets/airsync/IMG_2613.JPG", "assets/airsync/IMG_2620.JPG", "assets/airsync/IMG_2621.JPG", "assets/airsync/IMG_2622.JPG", "assets/airsync/IMG_2624.JPG", "assets/airsync/IMG_2625.JPG", "assets/airsync/IMG_6778.JPEG", "assets/cer/cer airsync1.png", "assets/cer/cer airsync2.png"],

        caseStudy: {
          overview: "เว็บแอปพลิเคชันสำหรับเฝ้าระวังและแจ้งเตือนคุณภาพอากาศ PM2.5 พร้อมระบบรายงานแหล่งกำเนิดมลพิษโดยประชาชน เพื่อเพิ่มการเข้าถึงข้อมูลคุณภาพอากาศในระดับชุมชน โดยประยุกต์ใช้เทคโนโลยี Web Application และแผนที่คุณภาพอากาศแบบเรียลไทม์ และ Gamification เพื่อดึงดูดให้ประชาชนมีส่วนร่วมในการรายงานแหล่งกำเนิดมลพิษและการเฝ้าระวังคุณภาพอากาศอย่างต่อเนื่อง",
          problem: "ชุมชนขาดการเข้าถึงข้อมูลคุณภาพอากาศที่รวดเร็วและมีส่วนร่วมได้ ทำให้ไม่สามารถเฝ้าระวังหรือรายงานแหล่งกำเนิดมลพิษ เช่น การเผาในที่โล่ง รถควันดำ และโรงงานปล่อยมลพิษ ได้ทันท่วงที อีกทั้งจำนวนจุดตรวจวัดคุณภาพอากาศยังมีจำกัดและไม่ครอบคลุมทุกพื้นที่ ทำให้ประชาชนขาดข้อมูลประกอบการตัดสินใจในการป้องกันตนเองจากมลพิษทางอากาศ",
          approach: "ออกแบบ Dashboard แสดงค่า PM2.5 และ AQI แบบเรียลไทม์ ร่วมกับแผนที่คุณภาพอากาศ ระบบแจ้งเตือนเมื่อค่าฝุ่นเกินเกณฑ์ และระบบรายงานเหตุการณ์พร้อมรูปภาพและตำแหน่งจากภาคประชาชน และพยายามดึงข้อมูลจากหลายแหล่งเพื่อให้ครอบคลุมพื้นที่มากที่สุด พร้อมระบบ Gamification เพื่อดึงดูดให้ประชาชนมีส่วนร่วมในการรายงานแหล่งกำเนิดมลพิษและการเฝ้าระวังคุณภาพอากาศอย่างต่อเนื่อง",
          process: "พัฒนาในรูปแบบ Mobile-First Web Application ด้วย React, TypeScript, Tailwind CSS และ Leaflet พร้อมส่วนข่าวสารและองค์ความรู้เกี่ยวกับ PM2.5",
          result: "ผ่านการคัดเลือกรอบข้อเสนอโครงงาน เข้าร่วมรอบนำเสนอผลงาน และได้รับรางวัลชมเชยและ Popular Vote จากการแข่งขันกิจกรรม Clean Air for Life: ภารกิจพิชิตฝุ่น PM2.5 คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยราชภัฏเพชรบุรี",
          learning: "ได้พัฒนาทักษะด้านการวิเคราะห์ปัญหา ออกแบบและพัฒนาซอฟต์แวร์ การแก้ไขปัญหาระหว่างการพัฒนา และการบริหารเวลา พร้อมต่อยอดสู่แพลตฟอร์มที่ส่งเสริมการมีส่วนร่วมของชุมชนในการจัดการปัญหามลพิษทางอากาศอย่างยั่งยืน"
        }
      },
      {
        slug: "mindbloom",
        index: "03",
        title: "MindBloom",
        description: "เว็บแอปพลิเคชันเพื่อการประเมินสุขภาพจิตและการติดตามตระหนักรู้ทางอารมณ์ โดยประยุกต์ใช้ปัญญาประดิษฐ์และเกมมิฟิเคชัน",
        category: "projects",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/mindbloom/Screenshot 2569-09-21 at 15.35.24.png", "assets/mindbloom/Screenshot 2569-09-21 at 15.35.29.png", "assets/mindbloom/Screenshot 2569-09-21 at 15.35.44.png", "assets/mindbloom/Screenshot 2569-09-21 at 15.36.02.png", "assets/mindbloom/mindbloom1.png", "assets/mindbloom/mindbloom2.png"],

        role: "ผู้พัฒนาเว็บแอปพลิเคชัน",
        context: "พัฒนาโปรเจกต์ส่วนตัวเพื่อส่งเสริมสุขภาพจิตเชิงป้องกันในวัยรุ่น",
        result: "ได้เว็บแอปต้นแบบสำหรับการประเมินสุขภาพจิตและการติดตามตระหนักรู้ทางอารมณ์ พร้อมระบบแจ้งเตือนความเสี่ยงด้านสุขภาพจิตสู่ผู้ดูแล",
        technologies: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Firebase"],
        workLinks: [{ label: "Demo Web App", href: "https://mindbloom-4edd3.web.app/" }, { label: "วิธีการใช้งาน", href: "https://drive.google.com/drive/folders/1xmnZlOWaiITqtfA5bFbtjakRqwsT84iL?usp=sharing" }],
        certificateImages: [],
        activityPhotos: ["assets/mindbloom/Screenshot 2569-09-21 at 15.35.24.png", "assets/mindbloom/Screenshot 2569-09-21 at 15.35.29.png", "assets/mindbloom/Screenshot 2569-09-21 at 15.35.44.png", "assets/mindbloom/Screenshot 2569-09-21 at 15.36.02.png", "assets/mindbloom/mindbloom1.png", "assets/mindbloom/mindbloom2.png"],

        caseStudy: {
          overview: "วัยรุ่นจำนวนมากขาดเครื่องมือที่เข้าถึงง่ายในการติดตามและดูแลสุขภาพจิตของตนเองก่อนที่ปัญหาจะรุนแรงขึ้น รวมถึงผู้ดูแลก็ขาดช่องทางรับรู้ความเสี่ยงได้ทันท่วงที จึงสนใจพัฒนาเว็บแอปพลิเคชันสำหรับส่งเสริมสุขภาพจิตเชิงป้องกัน พร้อมระบบติดตามและแจ้งเตือนความเสี่ยงด้านสุขภาพจิตสู่ผู้ดูแล เพื่อเพิ่มการเข้าถึงเครื่องมือดูแลสุขภาพจิตเบื้องต้น",
          problem: "ต้องระวังในเรื่องของความเป็นส่วนตัวและความปลอดภัยของข้อมูลด้านสุขภาพจิตของผู้ใช้ รวมถึงการออกแบบให้เหมาะสมกับวัยรุ่นและผู้ดูแลที่มีความเข้าใจด้านเทคโนโลยีแตกต่างกัน และเราจะทำยังไงให้ผู้ใช้มีส่วนร่วมในการติดตามอารมณ์ของตนเองอย่างต่อเนื่อง",
          approach: "ออกแบบ Dashboard สำหรับบันทึกอารมณ์รายวันพร้อมกราฟแนวโน้ม ระบบ Gamification ที่มีตัวละครเติบโตตามการดูแลตัวเอง และ AI วิเคราะห์อารมณ์พร้อมแนะนำวิธีรับมือความเครียดเฉพาะบุคคล โดยที่ยังไม่ลงรายละเอียดส่วนตัวของผู้ใช้ และออกแบบระบบแจ้งเตือนความเสี่ยงด้านสุขภาพจิตสู่ผู้ดูแล พร้อมระบบประเมินสุขภาพจิตเบื้องต้นด้วยแบบสอบถาม PHQ-9, GAD-7 และ PSS-10 ไม่มีการนำข้อมูลส่วนตัวของผู้ใช้ไปวิเคราะห์หรือเก็บไว้ในระบบ และออกแบบให้เป็น Mobile-First Web Application เพื่อให้เข้าถึงง่าย",
          process: "พัฒนา AI Chatbot สำหรับพูดคุยด้านสุขภาพจิต แบบประเมิน PHQ-9, GAD-7 และ PSS-10 ระบบ Early Warning แจ้งเตือนอัตโนมัติเมื่อตรวจพบความเสี่ยง และ Admin Dashboard สำหรับผู้ดูแล โดยพัฒนาในรูปแบบ Mobile-First Web Application ด้วย React, TypeScript, Tailwind CSS และ Firebase",
          result: "ได้เว็บแอปต้นแบบสำหรับการประเมินสุขภาพจิตและการติดตามตระหนักรู้ทางอารมณ์ พร้อมระบบแจ้งเตือนความเสี่ยงด้านสุขภาพจิตสู่ผู้ดูแล และสามารถต่อยอดสู่แพลตฟอร์มที่ส่งเสริมการดูแลสุขภาพจิตเชิงป้องกันในระดับชุมชนและสังคมอย่างยั่งยืน ที่สามารถนำไปต่อยอดพัฒนาเป็นแอปพลิเคชันจริงได้",
          learning: "ได้พัฒนาทักษะด้านการวิเคราะห์ปัญหาสุขภาพจิตในวัยรุ่น ออกแบบและพัฒนาซอฟต์แวร์เชิงจิตวิทยา การบูรณาการปัญญาประดิษฐ์เข้ากับแอปพลิเคชันจริง การแก้ไขปัญหาระหว่างการพัฒนา และการบริหารเวลา ต่อยอดสู่แพลตฟอร์มที่ส่งเสริมการดูแลสุขภาพจิตเชิงป้องกันในระดับชุมชนและสังคมอย่างยั่งยืน"
        }
      },
      {
        slug: "check-skburana",
        index: "04",
        title: "ระบบเช็คชื่อ Check Skburana",
        description: "ร่วมพัฒนาเว็บไซต์ระบบเช็คชื่อสำหรับโรงเรียนสมุทรสาครบูรณะ ที่มีการใช้งานจริงในปัจจุบัน",
        category: "projects",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/check skburana/Screenshot 2569-09-21 at 15.36.58.png", "assets/check skburana/Screenshot 2569-09-21 at 15.37.16.png", "assets/check skburana/Screenshot 2569-09-21 at 15.37.26.png", "assets/check skburana/Screenshot 2569-09-21 at 15.37.38.png", "assets/check skburana/Screenshot 2569-09-21 at 15.37.54.png", "assets/check skburana/Screenshot 2569-09-21 at 15.38.39.png", "assets/cer/cer check skburana.PNG"],
        role: "ผู้พัฒนา — รับผิดชอบส่วนสถิติและกราฟการมาเรียนสำหรับผู้ดูแลระบบ ออกแบบ UI/UX และระบบส่งออกรายงาน PDF/Excel",
        context: "ร่วมพัฒนาให้กับโรงเรียนสมุทรสาครบูรณะ",
        result: "ใช้งานจริงที่โรงเรียนสมุทรสาครบูรณะ",
        technologies: ["HTML","CSS", "PHP", "JavaScript", "MySQL", "Chart.js", "html2canvas"],
        workLinks: [],
        certificateImages: ["assets/cer/cer check skburana.PNG"],

        activityPhotos: ["assets/check skburana/Screenshot 2569-09-21 at 15.36.58.png", "assets/check skburana/Screenshot 2569-09-21 at 15.37.16.png", "assets/check skburana/Screenshot 2569-09-21 at 15.37.26.png", "assets/check skburana/Screenshot 2569-09-21 at 15.37.38.png", "assets/check skburana/Screenshot 2569-09-21 at 15.37.54.png", "assets/check skburana/Screenshot 2569-09-21 at 15.38.39.png", "assets/cer/cer check skburana.PNG"],
        caseStudy: {
          overview: "ระบบเช็คชื่อสำหรับโรงเรียนสมุทรสาครบูรณะในรูปแบบ Mobile-First Web Application ซึ่งมีการใช้งานจริงในปัจจุบัน พัฒนาโดยใช้ PHP, JavaScript และ MySQL และทดลองขึ้นเซิร์ฟเวอร์จำลองด้วย XAMPP",
          problem: "โรงเรียนต้องการระบบเช็คชื่อที่รองรับผู้ใช้หลายระดับ (นักเรียน ครู และผู้ดูแลระบบ) พร้อมข้อมูลสถิติการเข้าเรียนที่วิเคราะห์และติดตามได้ง่าย เพื่อลดภาระงานของครู",
          approach: "ระบบครอบคลุมการบันทึกการเข้าเรียน การแสดงสถิติแบบเรียลไทม์ การจัดการผู้ใช้ และการส่งออกรายงาน PDF/Excel โดยรับผิดชอบส่วนสถิติและกราฟการมาเรียนสำหรับผู้ดูแลระบบ ระบบวิเคราะห์ข้อมูลหลายระดับ ระบบส่งออกรายงาน และการออกแบบ UI/UX ด้วย Chart.js และ html2canvas",
          process: "ทำงานร่วมกับทีมพัฒนา ทดลองขึ้นเซิร์ฟเวอร์จำลองด้วย XAMPP ก่อนใช้งานจริงกับโรงเรียน",
          result: "ระบบถูกนำไปใช้งานจริงที่โรงเรียนสมุทรสาครบูรณะ ช่วยเพิ่มประสิทธิภาพการติดตามการเข้าเรียนและลดภาระงานของครู",
          learning: "ได้ช่วยพัฒนาทักษะด้านการออกแบบและพัฒนาซอฟต์แวร์ การจัดการฐานข้อมูล และการแก้ปัญหาจากการใช้งานจริง การทำงานร่วมกับทีม และการปรับปรุงระบบตามข้อเสนอแนะจากผู้ใช้"
        }
      },
      {
        slug: "jwc-readdiva",
        index: "05",
        title: "Readdiva — Junior Web Master Camp 14",
        description: "แพลตฟอร์มที่เปลี่ยนการอ่านหนังสือให้สนุกและมีส่วนร่วมมากขึ้น ผ่านระบบการแข่งขันยึดพื้นที่จากการอ่าน พัฒนาในค่าย Junior Web Master Camp ครั้งที่ 14",
        category: "projects",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/jwc/27BC3C75-3A7E-44B4-8C57-526E67E58CEB.JPG", "assets/jwc/DSC00426.JPEG", "assets/jwc/DSC06161.JPEG", "assets/jwc/DSC_5345.JPEG", "assets/jwc/DSC_8111.JPEG", "assets/jwc/F363F9F1-EB53-4C50-B959-F3E326F7BE6E.JPG", "assets/jwc/IMG_0030.JPEG", "assets/jwc/IMG_0031.JPEG", "assets/jwc/IMG_1013.jpg", "assets/jwc/IMG_1021.jpg", "assets/jwc/IMG_1032.jpg", "assets/jwc/IMG_1055.jpg", "assets/jwc/IMG_1059.jpg", "assets/jwc/IMG_3313.jpg", "assets/jwc/IMG_3317.jpg", "assets/jwc/IMG_3322.jpg", "assets/jwc/IMG_5407.jpg", "assets/jwc/IMG_5610.JPEG", "assets/jwc/IMG_7368.jpg", "assets/jwc/IMG_9405.jpg", "assets/jwc/IMG_9487.jpg", "assets/jwc/IMG_9494.jpg", "assets/cer/cer jwc.png"],

        role: "ผู้ผ่านการคัดเลือกเข้าค่ายสาย Web Programming",
        context: "ค่าย Junior Web Master Camp ครั้งที่ 14 — Hackathon หัวข้อ “Start Small, Think Big”",
        result: "ต้นแบบเว็บไซต์จาก Hackathon ภายใน 6 ชั่วโมง",
        technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
        workLinks: [{ label: "Web App", href: "https://readdiva.in.th" }],
        certificateImages: ["assets/cer/cer jwc.png"],

        activityPhotos: ["assets/jwc/27BC3C75-3A7E-44B4-8C57-526E67E58CEB.JPG", "assets/jwc/DSC00426.JPEG", "assets/jwc/DSC06161.JPEG", "assets/jwc/DSC_5345.JPEG", "assets/jwc/DSC_8111.JPEG", "assets/jwc/F363F9F1-EB53-4C50-B959-F3E326F7BE6E.JPG", "assets/jwc/IMG_0030.JPEG", "assets/jwc/IMG_0031.JPEG", "assets/jwc/IMG_1013.jpg", "assets/jwc/IMG_1021.jpg", "assets/jwc/IMG_1032.jpg", "assets/jwc/IMG_1055.jpg", "assets/jwc/IMG_1059.jpg", "assets/jwc/IMG_3313.jpg", "assets/jwc/IMG_3317.jpg", "assets/jwc/IMG_3322.jpg", "assets/jwc/IMG_5407.jpg", "assets/jwc/IMG_5610.JPEG", "assets/jwc/IMG_7368.jpg", "assets/jwc/IMG_9405.jpg", "assets/jwc/IMG_9487.jpg", "assets/jwc/IMG_9494.jpg", "assets/cer/cer jwc.png"],

        caseStudy: {
          overview: "โครงงานจากค่าย Junior Web Master Camp ครั้งที่ 14 (JWC14) เป็นค่ายพัฒนาทักษะด้านการพัฒนาเว็บไซต์และเทคโนโลยีดิจิทัล เรียนรู้ตั้งแต่พื้นฐานการพัฒนาเว็บ UX/UI การสร้าง Prototype และเรียนรู้การทำงานร่วมกันของ Programming, Design, Marketing และ Content",
          problem: "โจทย์ Hackathon ภายใต้แนวคิด “Start Small, Think Big” คิดปัญหาที่คนส่วนใหญ่มองไม่เห็น และออกแบบเว็บไซต์ที่ตุดประกายและเปลี่ยนโลกตลอดไป",
          approach: "ร่วมพัฒนา Readdiva แพลตฟอร์มที่เปลี่ยนการอ่านหนังสือให้สนุกและมีส่วนร่วมมากขึ้นผ่านระบบการแข่งขันยึดพื้นที่จากการอ่าน",
          process: "รับผิดชอบด้าน Web Programming พัฒนาต้นแบบเว็บไซต์ร่วมกับทีมภายในเวลา 6 ชั่วโมง",
          result: "นำเสนอต้นแบบเว็บไซต์ Readdiva สำเร็จภายในเวลาที่กำหนด",
          learning: "ได้พัฒนาทักษะด้านการพัฒนาเว็บไซต์ การทำงานเป็นทีม การแก้ปัญหาภายใต้ข้อจำกัดของเวลา และการนำเสนอแนวคิดเชิงนวัตกรรมที่ตอบโจทย์ปัญหาในสังคม"
        }
      },
      {
        slug: "posn-computer-camp-2",
        index: "01",
        title: "ค่ายโอลิมปิกวิชาการ สอวน. คอมพิวเตอร์ ค่าย 2",
        description: "ผ่านการอบรมค่ายโอลิมปิกวิชาการ (สอวน.) ค่าย 2 ในวิชาคอมพิวเตอร์ ศูนย์มหาวิทยาลัยศิลปากร",
        category: "coding-ai",
        year: "2024 - 2026",
        featured: true,
        heroImage: null,
        gallery: ["assets/สอวน/IMG_0198.JPEG", "assets/สอวน/IMG_0243.JPG", "assets/สอวน/IMG_0260.JPG", "assets/สอวน/IMG_0325.JPG", "assets/สอวน/IMG_0356.JPG", "assets/สอวน/IMG_0388.JPG", "assets/สอวน/IMG_0393.JPG", "assets/สอวน/IMG_0396.JPG", "assets/สอวน/IMG_0398.JPG", "assets/สอวน/IMG_0416.JPEG", "assets/สอวน/IMG_0454.JPEG", "assets/สอวน/IMG_3963.JPG", "assets/สอวน/IMG_3971.JPG", "assets/สอวน/IMG_4123.JPG", "assets/สอวน/IMG_4200.JPG", "assets/สอวน/IMG_4201.JPG", "assets/สอวน/IMG_4226.JPG", "assets/สอวน/IMG_4228.JPG", "assets/สอวน/IMG_4237.JPG", "assets/สอวน/IMG_4238.JPG", "assets/สอวน/IMG_4241.JPG", "assets/สอวน/IMG_4243.JPG", "assets/สอวน/IMG_4244.JPG", "assets/สอวน/IMG_4245.JPG", "assets/สอวน/IMG_5831.JPG", "assets/สอวน/IMG_5832.JPG", "assets/สอวน/IMG_5834.JPG", "assets/สอวน/IMG_5835.JPG", "assets/สอวน/IMG_5836.JPG", "assets/สอวน/IMG_5837.JPG", "assets/สอวน/IMG_6705.JPG", "assets/สอวน/IMG_6706.JPG", "assets/สอวน/IMG_6707.JPG", "assets/สอวน/IMG_6709.JPG", "assets/สอวน/IMG_6712.JPG", "assets/สอวน/IMG_8409.JPG", "assets/สอวน/IMG_8413.JPG", "assets/สอวน/IMG_8430.JPG", "assets/สอวน/IMG_8434.JPG", "assets/สอวน/IMG_8456.JPG", "assets/สอวน/IMG_8471.JPG", "assets/สอวน/IMG_8478.JPG", "assets/สอวน/IMG_8510.JPG", "assets/สอวน/IMG_8513.JPG", "assets/สอวน/IMG_8519.JPG", "assets/สอวน/IMG_8524.JPG", "assets/สอวน/IMG_8527.JPG", "assets/สอวน/IMG_8528.JPG", "assets/สอวน/IMG_8529.JPG", "assets/สอวน/IMG_8536.JPG", "assets/สอวน/IMG_8561.JPG", "assets/สอวน/IMG_8570.JPG", "assets/สอวน/IMG_8573.JPG", "assets/cer/cer posn com.png", "assets/cer/cer posn com2.png"],

        role: "ผู้เข้าร่วมอบรม",
        context: "ค่ายโอลิมปิกวิชาการ สอวน. สาขาคอมพิวเตอร์ ศูนย์มหาวิทยาลัยศิลปากร",
        result: "ผ่านการอบรมค่าย 2 วิชาคอมพิวเตอร์",
        technologies: ["C", "C++", "Algorithms", "Data Structures"],
        workLinks: [],
        certificateImages: ["assets/cer/cer posn com.png", "assets/cer/cer posn com2.png"],

        activityPhotos: ["assets/สอวน/IMG_0198.JPEG", "assets/สอวน/IMG_0243.JPG", "assets/สอวน/IMG_0260.JPG", "assets/สอวน/IMG_0325.JPG", "assets/สอวน/IMG_0356.JPG", "assets/สอวน/IMG_0388.JPG", "assets/สอวน/IMG_0393.JPG", "assets/สอวน/IMG_0396.JPG", "assets/สอวน/IMG_0398.JPG", "assets/สอวน/IMG_0416.JPEG", "assets/สอวน/IMG_0454.JPEG", "assets/สอวน/IMG_3963.JPG", "assets/สอวน/IMG_3971.JPG", "assets/สอวน/IMG_4123.JPG", "assets/สอวน/IMG_4200.JPG", "assets/สอวน/IMG_4201.JPG", "assets/สอวน/IMG_4226.JPG", "assets/สอวน/IMG_4228.JPG", "assets/สอวน/IMG_4237.JPG", "assets/สอวน/IMG_4238.JPG", "assets/สอวน/IMG_4241.JPG", "assets/สอวน/IMG_4243.JPG", "assets/สอวน/IMG_4244.JPG", "assets/สอวน/IMG_4245.JPG", "assets/สอวน/IMG_5831.JPG", "assets/สอวน/IMG_5832.JPG", "assets/สอวน/IMG_5834.JPG", "assets/สอวน/IMG_5835.JPG", "assets/สอวน/IMG_5836.JPG", "assets/สอวน/IMG_5837.JPG", "assets/สอวน/IMG_6705.JPG", "assets/สอวน/IMG_6706.JPG", "assets/สอวน/IMG_6707.JPG", "assets/สอวน/IMG_6709.JPG", "assets/สอวน/IMG_6712.JPG", "assets/สอวน/IMG_8409.JPG", "assets/สอวน/IMG_8413.JPG", "assets/สอวน/IMG_8430.JPG", "assets/สอวน/IMG_8434.JPG", "assets/สอวน/IMG_8456.JPG", "assets/สอวน/IMG_8471.JPG", "assets/สอวน/IMG_8478.JPG", "assets/สอวน/IMG_8510.JPG", "assets/สอวน/IMG_8513.JPG", "assets/สอวน/IMG_8519.JPG", "assets/สอวน/IMG_8524.JPG", "assets/สอวน/IMG_8527.JPG", "assets/สอวน/IMG_8528.JPG", "assets/สอวน/IMG_8529.JPG", "assets/สอวน/IMG_8536.JPG", "assets/สอวน/IMG_8561.JPG", "assets/สอวน/IMG_8570.JPG", "assets/สอวน/IMG_8573.JPG", "assets/cer/cer posn com.png", "assets/cer/cer posn com2.png"],

        caseStudy: {
          overview: "ผ่านการอบรมค่ายโอลิมปิกวิชาการ สอวน. สาขาคอมพิวเตอร์ เป็นโอกาสที่ดีในการเรียนรู้ทักษะกระบวนการคิดเชิงตรรกะอย่างเป็นขั้นตอน และเป็นจุดเริ่มต้นในการต่อยอดสู่การเขียนโปรแกรมภาษาอื่น ๆ",
          problem: "ต้องฝึกพื้นฐานกระบวนการคิดเชิงตรรกะและการเขียนโปรแกรมอย่างเป็นระบบ ก่อนต่อยอดไปสู่การแก้โจทย์อัลกอริทึมที่ซับซ้อนขึ้น",
          approach: "พัฒนาทักษะออกแบบและสร้าง Flowchart เพื่อสื่อสารลำดับขั้นของการทำงาน และฝึกเขียนโปรแกรมด้วยภาษา C และ C++ อย่างต่อเนื่อง พร้อมเรียนรู้แนวคิดและเทคนิคการแก้โจทย์อัลกอริทึมที่ซับซ้อนขึ้น",
          process: "ศึกษาอัลกอริทึมสำคัญ เช่น Binary Search, Merge Sort, Decision Tree, BFS, DFS และ Dijkstra's Algorithm และอีกมากมายรวมถึงโครงสร้างข้อมูล เช่น Array, Linked List, Stack, Queue, Tree และกราฟ",
          result: "ผ่านการอบรมค่าย 2 วิชาคอมพิวเตอร์ พร้อมพื้นฐานที่แน่นขึ้นสำหรับการเขียนโปรแกรมและการแข่งขันในระดับที่สูงขึ้น อีกทั้งยังติดสำรองอันดับที่ 2 การคัดเลือกผู้แทนศูนย์โอลิมปิกวิชาการ สอวน. สาขาคอมพิวเตอร์ ศูนย์มหาวิทยาลัยศิลปากร",
          learning: "ได้ความรู้ในเรื่องของการเขียนโปรแกรม ได้พัฒนาทักษะการคิดเชิงตรรกะ และทักษะด้านอื่น ๆ อีกมากมายจากค่ายนี้เลย ได้ประสบการณ์การจัดการตนเอง ความตรงต่อเวลา และการอยู่ร่วมกับผู้อื่นตลอดระยะเวลาการอยู่ค่าย อีกทั้งยังได้เพื่อนใหม่ ๆ อีกด้วย"
        }
      },
      {
        slug: "nova-data",
        index: "10",
        title: "Nova Data: Ignite Your Insight Galaxy",
        description: "ได้รับรางวัลชนะเลิศในการแข่งขันการแก้ปัญหาด้านวิทยาการข้อมูล Nova Data: Ignite Your Insight Galaxy",
        category: "coding-ai",
        year: "2026",
        featured: true,
        heroImage: null,
        gallery: ["assets/nova data/IMG_2728.jpg", "assets/nova data/IMG_2734.PNG", "assets/nova data/IMG_2740.JPG", "assets/nova data/IMG_2741.JPG", "assets/nova data/IMG_2913.JPG", "assets/nova data/IMG_6096.JPG", "assets/nova data/IMG_6100.JPG", "assets/nova data/IMG_6110.JPG", "assets/nova data/IMG_6112.JPG", "assets/nova data/att.eO_IjoMbIDNcYwTW1A1ERVaOlQYti9Irov-9Cs4rrZs.JPG", "assets/cer/cer nova data.png"],

        role: "คนหลักในการวางแผนและวิเคราะห์ข้อมูล",
        context: "IT Ladkrabang Open House 2026",
        result: "รางวัลชนะเลิศ — Nova Data: Ignite Your Insight Galaxy",
        technologies: ["Data Analysis", "Machine Learning", "Python"],
        workLinks: [],
        certificateImages: ["assets/cer/cer nova data.png"],

        activityPhotos: ["assets/nova data/IMG_2728.jpg", "assets/nova data/IMG_2734.PNG", "assets/nova data/IMG_2740.JPG", "assets/nova data/IMG_2741.JPG", "assets/nova data/IMG_2913.JPG", "assets/nova data/IMG_6096.JPG", "assets/nova data/IMG_6100.JPG", "assets/nova data/IMG_6110.JPG", "assets/nova data/IMG_6112.JPG", "assets/nova data/att.eO_IjoMbIDNcYwTW1A1ERVaOlQYti9Irov-9Cs4rrZs.JPG", "assets/cer/cer nova data.png"],

        caseStudy: {
          overview: "การแข่งขันแก้ปัญหาด้านวิทยาการข้อมูลจากชุดข้อมูลธุรกิจจำหน่ายรถยนต์ โดยมีโจทย์ให้วิเคราะห์ปัจจัยที่ส่งผลต่อธุรกิจ และเสนอแนวทางพัฒนาธุรกิจให้เติบโตขึ้น",
          problem: "ข้อมูลธุรกิจมีจำนวนมากและซับซ้อน ต้องค้นหาปัจจัยที่แท้จริงที่ส่งผลต่อรายได้และการเติบโตของธุรกิจ",
          approach: "นำกระบวนการด้านวิทยาการข้อมูลมาใช้ตั้งแต่การทำความเข้าใจข้อมูล ค้นหารูปแบบและความสัมพันธ์ ไปจนถึงการประยุกต์ใช้ Machine Learning เพื่อวิเคราะห์และตอบโจทย์ทางธุรกิจ",
          process: "ร่วมกันตีความผลลัพธ์ที่ได้ และเปลี่ยนข้อมูลเหล่านั้นให้กลายเป็นข้อเสนอที่นำไปใช้ตัดสินใจทางธุรกิจได้จริง โดยประยุกต์ใช้ AI ช่วยในการวิเคราะห์และสร้างโมเดลทำนายผลลัพธ์ พร้อมนำเสนอในรูปแบบที่เข้าใจง่ายต่อผู้บริหาร งานแข่งนี้สามารถใช้ AI ช่วยได้ เราจึงปรับใช้โดยที่เราเป็นผู้กำหนดโจทย์และตีความผลลัพธ์จาก AI เพื่อให้ได้ข้อเสนอที่เหมาะสมกับธุรกิจ",
          result: "ได้รับรางวัลชนะเลิศจากการแข่งขัน Nova Data: Ignite Your Insight Galaxy ในงาน IT Ladkrabang Open House 2026",
          learning: "พบว่าข้อมูลจำนวนมากสามารถกลายเป็นเครื่องมือสำคัญในการตัดสินใจได้ หากตั้งคำถาม วิเคราะห์ข้อมูลอย่างเหมาะสม และเชื่อมโยงผลลัพธ์กลับไปยังปัญหาที่ต้องการแก้ไข และค้นพบว่าตนเองชอบกระบวนการเปลี่ยนข้อมูลให้กลายเป็นความเข้าใจและแนวทางแก้ปัญหาที่มีความหมาย อีกทั้งยังได้เรียนรู้ทักษะการทำงานร่วมกับทีม การสื่อสารผลลัพธ์ และการนำเสนอข้อมูลอย่างมีประสิทธิภาพ"
        }
      },
      {
        slug: "compas-py1",
        index: "07",
        title: "COMPAS-PY1",
        description: "ผ่านการทดสอบ COMPAS-PY1 ซึ่งจัดโดยคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
        category: "coding-ai",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/compas/IMG_0581.jpg", "assets/cer/cer compas.png", "assets/cer/cer compas2.png"],
        role: "ผู้เข้าสอบ",
        context: "จัดโดยคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
        result: "ผ่านการทดสอบวัดระดับความสามารถด้านการเขียนโปรแกรม Python ขั้นพื้นฐาน",
        technologies: ["Python"],
        workLinks: [],
        certificateImages: ["assets/cer/cer compas.png", "assets/cer/cer compas2.png"],

        activityPhotos: ["assets/compas/IMG_0581.jpg", "assets/cer/cer compas.png", "assets/cer/cer compas2.png"],
        caseStudy: {
          overview: "เข้าร่วมสอบวัดระดับความสามารถด้านการเขียนโปรแกรมขั้นพื้นฐานด้วยภาษา Python",
          problem: "",
          approach: "",
          process: "",
          result: "ผ่านการทดสอบ COMPAS-PY1",
          learning: "ได้ประเมินและพัฒนาทักษะด้าน Programming การคิดเชิงตรรกะ และการวิเคราะห์เพื่อแก้ปัญหาอย่างเป็นระบบ"
        }
      },
      {
        slug: "cefr-test",
        index: "08",
        title: "CEFR English Proficiency Test — B1",
        description: "เข้าร่วมการทดสอบวัดระดับภาษาอังกฤษ CEFR และได้รับผลการประเมินอยู่ในระดับ B1 (Intermediate)",
        category: "training",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/Proficiency Achievement Certificate - Chayanit Chansuttikanok.png"],
        role: "ผู้เข้าสอบ",
        context: "กรอบมาตรฐาน CEFR (Common European Framework of Reference for Languages)",
        result: "ผลการประเมินระดับ B1 (Intermediate)",
        technologies: [],
        workLinks: [],
        certificateImages: ["assets/cer/Proficiency Achievement Certificate - Chayanit Chansuttikanok.png"],
        activityPhotos: ["assets/cer/Proficiency Achievement Certificate - Chayanit Chansuttikanok.png"],
        caseStudy: {
          overview: "เข้าร่วมการทดสอบวัดระดับความสามารถทางภาษาอังกฤษตามกรอบมาตรฐาน CEFR ซึ่งสะท้อนถึงความสามารถในการใช้ภาษาอังกฤษเพื่อสื่อสารในสถานการณ์ทั่วไปและทำความเข้าใจเนื้อหาที่เกี่ยวข้องกับชีวิตประจำวัน",
          problem: "",
          approach: "",
          process: "",
          result: "ได้รับผลการประเมินระดับ B1 (Intermediate)",
          learning: "ได้ประเมินระดับความสามารถทางภาษาอังกฤษของตนเอง และตระหนักถึงแนวทางในการพัฒนาทักษะภาษาอังกฤษให้ดียิ่งขึ้น"
        }
      },
      {
        slug: "cu-tep-test",
        index: "09",
        title: "CU-TEP English Proficiency Test",
        description: "เข้าร่วมการทดสอบวัดระดับความสามารถทางภาษาอังกฤษ CU-TEP จัดโดยจุฬาลงกรณ์มหาวิทยาลัย",
        category: "training",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/CU-TEP/Screenshot 2569-09-23 at 00.08.56.png"],
        role: "ผู้เข้าสอบ",
        context: "ศูนย์ทดสอบทางวิชาการแห่งจุฬาลงกรณ์มหาวิทยาลัย",
        result: "เข้าร่วมการทดสอบ CU-TEP ครบทั้ง 3 ทักษะ (ฟัง อ่าน เขียน)",
        technologies: [],
        workLinks: [],
        certificateImages: [],
        activityPhotos: ["assets/CU-TEP/Screenshot 2569-09-23 at 00.08.56.png"],
        caseStudy: {
          overview: "เข้าร่วมการทดสอบวัดระดับความสามารถทางภาษาอังกฤษ CU-TEP เพื่อประเมินทักษะการฟัง การอ่าน และการเขียนตามรูปแบบการทดสอบที่กำหนด",
          problem: "",
          approach: "",
          process: "",
          result: "เข้าร่วมการทดสอบ CU-TEP ครบทุกทักษะ",
          learning: "ได้ประเมินความสามารถทางภาษาอังกฤษของตนเอง ฝึกฝนการใช้ภาษาอย่างเป็นระบบ และนำผลการทดสอบไปใช้เป็นแนวทางในการพัฒนาทักษะภาษาอังกฤษต่อไป"
        }
      },
      {
        slug: "r-u-ready-data-analytics",
        index: "11",
        title: "R You Ready for Data Analytics",
        description: "ได้รับรางวัลรองชนะเลิศอันดับที่ 1 การแข่งขัน R You Ready for Data Analytics",
        category: "coding-ai",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/R you ready for analysys/IMG_2301.JPG", "assets/R you ready for analysys/IMG_2744.JPG", "assets/R you ready for analysys/att.3PsxPybp1mkGmdOWBcd_BdOWSke9hJkDJZd4_CW47ao.JPG", "assets/R you ready for analysys/att.ncSuxJnTfljcGfQGwes0FeM9Pu3BKIiInQ4f2GfyBdY.JPG", "assets/cer/cer R U ready for data analysis.png"],

        role: "Data Analyst",
        context: "สัปดาห์วิทยาศาสตร์และเปิดบ้านวิชาการ มหาวิทยาลัยศิลปากร",
        result: "ได้รับรางวัลรองชนะเลิศอันดับที่ 1",
        technologies: ["R", "RStudio", "Python", "Pandas", "NumPy"],
        workLinks: [],
        certificateImages: ["assets/cer/cer R U ready for data analysis.png"],

        activityPhotos: ["assets/R you ready for analysys/IMG_2301.JPG", "assets/R you ready for analysys/IMG_2744.JPG", "assets/R you ready for analysys/att.3PsxPybp1mkGmdOWBcd_BdOWSke9hJkDJZd4_CW47ao.JPG", "assets/R you ready for analysys/att.ncSuxJnTfljcGfQGwes0FeM9Pu3BKIiInQ4f2GfyBdY.JPG", "assets/cer/cer R U ready for data analysis.png"],

        caseStudy: {
          overview: "การแข่งขันวิเคราะห์ข้อมูลด้วยภาษา R และโปรแกรม RStudio ในกิจกรรมสัปดาห์วิทยาศาสตร์และเปิดบ้านมหาวิทยาลัยศิลปากร",
          problem: "ต้องวิเคราะห์และตีความชุดข้อมูลที่กำหนดให้ถูกต้องและรวดเร็วภายใต้เวลาที่จำกัด",
          approach: "เรียนรู้พื้นฐานการวิเคราะห์ข้อมูลด้วยภาษา R และ RStudio แล้วนำมาประยุกต์ใช้ในการแข่งขัน",
          process: "ใช้เครื่องมือทางโปรแกรมมิ่ง เช่น Python, Pandas และ NumPy ร่วมด้วยเพื่อจัดเตรียม วิเคราะห์ และค้นหารูปแบบที่น่าสนใจจากข้อมูล",
          result: "ได้รับรางวัลรองชนะเลิศอันดับที่ 1 จากการแข่งขัน R You Ready for Data Analytics",
          learning: "ได้พัฒนาทักษะด้าน Data Analytics การคิดวิเคราะห์อย่างเป็นระบบ และการเลือกใช้เครื่องมือทางโปรแกรมมิ่งที่เหมาะสมกับข้อมูล"
        }
      },
      {
        slug: "programming-silpakorn",
        index: "12",
        title: "การแข่งขันเขียนโปรแกรมคอมพิวเตอร์ มหาวิทยาลัยศิลปากร",
        description: "ได้รับรางวัลชมเชย การแข่งขันเขียนโปรแกรมคอมพิวเตอร์ มหาวิทยาลัยศิลปากร",
        category: "coding-ai",
        year: "2025 - 2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_2280.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_2284.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_2298.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8057.jpg", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8060.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8074.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8076.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9217.jpg", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9218.jpg", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9220.jpg", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9221.jpg", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9230.jpg", "assets/cer/cer เขียนโปรแกรมศิลปากร.png", "assets/cer/cer  เขียนโปรแกรมศิลปากร2.png", "assets/cer/cer เขียนโปรแกรมศิลปากร 3.png"],

        role: "ผู้เข้าแข่งขัน",
        context: "งานสัปดาห์วิทยาศาสตร์และเปิดบ้านวิชาการ มหาวิทยาลัยศิลปากร",
        result: "รางวัลชมเชย",
        technologies: ["Programming", "Algorithms"],
        workLinks: [],
        certificateImages: ["assets/cer/cer เขียนโปรแกรมศิลปากร.png", "assets/cer/cer  เขียนโปรแกรมศิลปากร2.png", "assets/cer/cer เขียนโปรแกรมศิลปากร 3.png"],

        activityPhotos: ["assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_2280.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_2284.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_2298.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8057.jpg", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8060.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8074.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8076.JPG", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9217.jpg", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9218.jpg", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9220.jpg", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9221.jpg", "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9230.jpg", "assets/cer/cer เขียนโปรแกรมศิลปากร.png", "assets/cer/cer  เขียนโปรแกรมศิลปากร2.png", "assets/cer/cer เขียนโปรแกรมศิลปากร 3.png"],

        caseStudy: {
          overview: "การแข่งขันเขียนโปรแกรมคอมพิวเตอร์ในงานสัปดาห์วิทยาศาสตร์มหาวิทยาลัยศิลปากร",
          problem: "ต้องแก้โจทย์ปัญหาด้วยการเขียนโปรแกรมภายใต้เวลาที่กำหนด",
          approach: "วิเคราะห์โจทย์ วางแผนขั้นตอนการแก้ปัญหา และเลือกใช้แนวทางที่เหมาะสมในการเขียนโปรแกรม ประยุกต์ใช้ความรู้ด้านอัลกอริทึมและโครงสร้างข้อมูลจากค่ายสอวน. เพื่อแก้โจทย์อย่างมีประสิทธิภาพ",
          process: "",
          result: "ได้รับรางวัลชมเชยจากการแข่งขัน",
          learning: "ได้พัฒนาทักษะการเขียนโปรแกรมและการคิดวิเคราะห์เชิงตรรกะอย่างเป็นขั้นตอน รวมถึงการทำงานภายใต้ความกดดันและเวลาที่จำกัด"
        }
      },
      {
        slug: "bebras-thailand",
        index: "13",
        title: "Bebras Thailand — Best of School",
        description: "ได้รับรางวัล Best of School ในการทดสอบ Bebras Thailand และเข้าแข่งขันรอบชิงทุนการศึกษาระดับประเทศ",
        category: "coding-ai",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/bebras/att.UMB876DbfDAlmYaK9h9V8XhPXEZutbznvMs3rwy_-9U.JPG", "assets/bebras/att.lP3UDqa2l2T7wQfF4T7Dlq77e-IXZ31By3W3WfQzGFI.JPG", "assets/cer/cer bebras.png", "assets/cer/cer bebras รอบประเทศ.png"],

        role: "ผู้เข้าทดสอบ",
        context: "การทดสอบทักษะการคิดเชิงคำนวณและวิทยาการคอมพิวเตอร์ Bebras Thailand",
        result: "รางวัล Best of School และผ่านเข้ารอบชิงทุนระดับประเทศ",
        technologies: ["Computational Thinking"],
        workLinks: [],
        certificateImages: ["assets/cer/cer bebras.png", "assets/cer/cer bebras รอบประเทศ.png"],

        activityPhotos: ["assets/bebras/att.UMB876DbfDAlmYaK9h9V8XhPXEZutbznvMs3rwy_-9U.JPG", "assets/bebras/att.lP3UDqa2l2T7wQfF4T7Dlq77e-IXZ31By3W3WfQzGFI.JPG", "assets/cer/cer bebras.png", "assets/cer/cer bebras รอบประเทศ.png"],

        caseStudy: {
          overview: "การทดสอบทักษะการคิดเชิงคำนวณและวิทยาการคอมพิวเตอร์ระดับประเทศ",
          problem: "โจทย์ต้องพิจารณาเงื่อนไข วิเคราะห์ข้อมูล และวางลำดับขั้นตอนเพื่อหาวิธีแก้ปัญหาที่เหมาะสม",
          approach: "ฝึกการคิดวิเคราะห์และการแก้ปัญหาอย่างเป็นระบบตามเงื่อนไขของแต่ละโจทย์",
          process: "",
          result: "ได้รับรางวัล Best of School และผ่านเข้าสู่การแข่งขันรอบชิงทุนการศึกษาระดับประเทศ",
          learning: "พัฒนาทักษะการคิดเชิงตรรกะ การคิดอย่างเป็นขั้นตอน และการประยุกต์ใช้แนวคิดทางคอมพิวเตอร์ในการแก้ไขปัญหา"
        }
      },
      {
        slug: "bangmod-hackathon-game-education",
        index: "14",
        title: "Bangmod Hackathon: Game Education — Make It Up",
        description: "ผ่านการคัดเลือกข้อเสนอโครงงานรอบแรกจากทั่วประเทศ รายการ Bangmod Hackathon หัวข้อ Game Education",
        category: "coding-ai",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/bangmod hack game/Screenshot 2026-09-05 231705.png", "assets/cer/cer bangmod game education.PNG"],
        role: "คนหลักในการออกแบบและวางแผนโครงงาน",
        context: "Bangmod Hackathon หัวข้อ Game Education (1 ใน 50 ทีมทั่วประเทศ)",
        result: "ผ่านการคัดเลือกข้อเสนอโครงงานรอบแรก",
        technologies: ["Roblox", "Game-Based Learning"],
        workLinks: [{ label: "ข้อเสนอโครงงาน", href: "https://drive.google.com/file/d/11AMQosWtgDF7hP1AzdPEHyIsKfc2Xkq_/view?usp=sharing" }],
        certificateImages: ["assets/cer/cer bangmod game education.PNG"],

        activityPhotos: ["assets/bangmod hack game/Screenshot 2026-09-05 231705.png", "assets/cer/cer bangmod game education.PNG"],
        caseStudy: {
          overview: "โจทย์ Game Education ของ Bangmod Hackathon ต้องการเกมเพื่อการศึกษาที่ช่วยพัฒนาเยาวชน ดิฉันและทีมจึงคิดว่าเยาวชนอายุ 10 - 18 ปี ยังขาดเครื่องมือที่ช่วยฝึกทักษะการตัดสินใจ การวางแผน และการบริหารชีวิตอย่างเป็นรูปธรรมและสนุก",
          problem: "",
          approach: "จึงเสนอพัฒนาเกมเพื่อการศึกษา “Make It Up” บนแพลตฟอร์ม Roblox ออกแบบตามแนวคิด Game-Based Learning และ LADDER Model",
          process: "โดยออกแบบระบบจำลองสถานการณ์ที่ผู้เล่นต้องจัดการเวลา เงิน พลังงาน ความเครียด และการเรียนรู้ภายใต้ข้อจำกัดต่าง ๆ",
          result: "เป็น 1 ใน 50 ทีมที่ผ่านการคัดเลือกข้อเสนอโครงงานรอบแรกจากทั่วประเทศ",
          learning: "ได้ฝึกออกแบบประสบการณ์การเรียนรู้ที่สนุก มีส่วนร่วม และพัฒนาทักษะการคิดเชิงระบบได้อย่างเป็นรูปธรรม"
        }
      },
      {
        slug: "it-clash",
        index: "15",
        title: "IT CLASH: The Battle of IT - Coding Track",
        description: "เข้าร่วมการแข่งขัน IT CLASH: The Battle of IT - Coding Track จัดโดย สจล.",
        category: "coding-ai",
        year: "2025 - 2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer it clash.png"],
        role: "ผู้เข้าแข่งขัน",
        context: "คณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
        result: "เข้าร่วมการแข่งขันรอบแรก",
        technologies: ["Python"],
        workLinks: [],
        certificateImages: ["assets/cer/cer it clash.png"],

        activityPhotos: ["assets/cer/cer it clash.png"],
        caseStudy: {
          overview: "การแข่งขันทดสอบทักษะการเขียนโปรแกรมและการแก้โจทย์ปัญหา",
          problem: "ต้องวิเคราะห์โจทย์และแยกปัญหาออกเป็นขั้นตอนภายใต้ข้อจำกัดด้านเวลา",
          approach: "ออกแบบแนวทางการแก้ปัญหาและเขียนโปรแกรมด้วยภาษา Python",
          process: "",
          result: "เข้าร่วมการแข่งขันในรอบแรกได้สำเร็จ",
          learning: "พัฒนาทักษะการคิดเชิงตรรกะและการแก้ปัญหาอย่างเป็นระบบ"
        }
      },
      {
        slug: "bangmod-hackathon-online",
        index: "16",
        title: "Bangmod Hackathon — รอบคัดเลือกออนไลน์",
        description: "เข้าร่วมการแข่งขัน Bangmod Hackathon ในรอบคัดเลือกออนไลน์",
        category: "coding-ai",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/bangmod hack online/att.DpFgd4S9iALc2mD2aB5-LyJkWyKMv5_yMIQnb41MwPc.JPG", "assets/cer/cer bangmod hack online.png"],

        role: "ผู้เข้าแข่งขัน",
        context: "Bangmod Hackathon",
        result: "เข้าร่วมรอบคัดเลือกออนไลน์",
        technologies: ["C/C++", "Competitive Programming", "Algorithms"],
        workLinks: [],
        certificateImages: ["assets/cer/cer bangmod hack online.png"],

        activityPhotos: ["assets/bangmod hack online/att.DpFgd4S9iALc2mD2aB5-LyJkWyKMv5_yMIQnb41MwPc.JPG", "assets/cer/cer bangmod hack online.png"],

        caseStudy: {
          overview: "ทำงานร่วมกับทีมเพื่อวิเคราะห์โจทย์ หาแนวทางการแก้ปัญหา และประยุกต์ใช้เทคโนโลยีเพื่อพัฒนาผลงานภายใต้เวลาที่กำหนด",
          problem: "",
          approach: "",
          process: "",
          result: "เข้าร่วมรอบคัดเลือกออนไลน์ของ Bangmod Hackathon",
          learning: "ฝึกทักษะการคิดเชิงระบบ การแก้ปัญหา การทำงานเป็นทีม และการนำความรู้ด้านการเขียนโปรแกรมมาประยุกต์ใช้กับโจทย์จริง"
        }
      },
      {
        slug: "hack-the-scammer-ctf",
        index: "17",
        title: "Hack The Scammer CTF 2025",
        description: "เข้าร่วมการแข่งขัน Hack The Scammer CTF 2025 จัดโดย สกมช.",
        category: "coding-ai",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer hack the scammer.png"],
        role: "ผู้เข้าแข่งขัน",
        context: "สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ (สกมช.)",
        result: "เข้าร่วมการแข่งขันรอบแรก",
        technologies: ["Cybersecurity", "CTF"],
        workLinks: [],
        certificateImages: ["assets/cer/cer hack the scammer.png"],

        activityPhotos: ["assets/cer/cer hack the scammer.png"],
        caseStudy: {
          overview: "การแข่งขันรูปแบบ Capture The Flag (CTF) ที่ท้าทายให้วิเคราะห์และแก้โจทย์ด้านความมั่นคงปลอดภัยไซเบอร์",
          problem: "ต้องค้นหาจุดผิดปกติและช่องโหว่ภายใต้ข้อจำกัดด้านเวลา",
          approach: "ฝึกทักษะการคิดวิเคราะห์ การค้นหาจุดผิดปกติ และการแก้ปัญหาอย่างเป็นขั้นตอน",
          process: "",
          result: "เข้าร่วมการแข่งขันในรอบแรกได้สำเร็จ",
          learning: "ได้ประยุกต์ใช้ความรู้ด้าน Cybersecurity ภายใต้ข้อจำกัดด้านเวลา และพัฒนาทักษะการคิดเชิงตรรกะ การแก้ปัญหา และการทำงานร่วมกับทีม"
        }
      },
      {
        slug: "math-aptitude-competition",
        index: "18",
        title: "การแข่งขันอัจฉริยภาพทางคณิตศาสตร์",
        description: "ได้รับรางวัลชนะเลิศ การแข่งขันอัจฉริยภาพทางคณิตศาสตร์ ระดับชั้น ม.6 ภายในโรงเรียนสมุทรสาครบูรณะ",
        category: "activity",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/อัจฉริยะภาพคณิต/Screenshot 2026-09-05 231940.png", "assets/cer/cer อัฉริยภาพคณิต.png"],
        role: "ผู้เข้าแข่งขัน",
        context: "การแข่งขันภายในโรงเรียน",
        result: "รางวัลชนะเลิศ",
        technologies: ["Mathematics", "Problem Solving"],
        workLinks: [],
        certificateImages: ["assets/cer/cer อัฉริยภาพคณิต.png"],

        activityPhotos: ["assets/อัจฉริยะภาพคณิต/Screenshot 2026-09-05 231940.png", "assets/cer/cer อัฉริยภาพคณิต.png"],
        caseStudy: {
          overview: "การแข่งขันอัจฉริยภาพทางคณิตศาสตร์ภายในโรงเรียน ระดับชั้นมัธยมศึกษาปีที่ 6",
          problem: "",
          approach: "",
          process: "",
          result: "ได้รับรางวัลชนะเลิศ",
          learning: "ฝึกทักษะการคิดวิเคราะห์และการแก้ปัญหาทางคณิตศาสตร์ผ่านโจทย์ที่ต้องอาศัยการใช้เหตุผลและการมองหาความสัมพันธ์ของข้อมูลที่ให้มาเพื่อแก้โจทย์ปัญหา และยังประยุกต์ใช้เนื้อหาทางคณิตศาสตร์ในเรื่องต่าง ๆ ซึ่งต่อยอดสู่การเขียนโปรแกรมและการวิเคราะห์ข้อมูลได้"
        }
      },
      {
        slug: "petch-chaiyaphruek-award",
        index: "19",
        title: "รางวัล “เพชรชัยพฤกษ์”",
        description: "ได้รับรางวัล “เพชรชัยพฤกษ์” จากโรงเรียนสมุทรสาครบูรณะ",
        category: "activity",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/เพชรชัยพฤกษ์/0A9A9566.JPEG", "assets/เพชรชัยพฤกษ์/0A9A9567.JPEG", "assets/เพชรชัยพฤกษ์/0A9A9570.JPEG", "assets/เพชรชัยพฤกษ์/IMG_0003.jpg", "assets/เพชรชัยพฤกษ์/P1092401.JPEG", "assets/เพชรชัยพฤกษ์/P1468173.JPEG", "assets/เพชรชัยพฤกษ์/P1468176.JPEG", "assets/cer/cer เพชรชัยพฤกษ์.png"],

        role: "ผู้ได้รับรางวัล",
        context: "รางวัลเกียรติยศของโรงเรียนสมุทรสาครบูรณะ",
        result: "ได้รับรางวัลเพชรชัยพฤกษ์",
        technologies: [],
        workLinks: [],
        certificateImages: ["assets/cer/cer เพชรชัยพฤกษ์.png"],

        activityPhotos: ["assets/เพชรชัยพฤกษ์/0A9A9566.JPEG", "assets/เพชรชัยพฤกษ์/0A9A9567.JPEG", "assets/เพชรชัยพฤกษ์/0A9A9570.JPEG", "assets/เพชรชัยพฤกษ์/IMG_0003.jpg", "assets/เพชรชัยพฤกษ์/P1092401.JPEG", "assets/เพชรชัยพฤกษ์/P1468173.JPEG", "assets/เพชรชัยพฤกษ์/P1468176.JPEG", "assets/cer/cer เพชรชัยพฤกษ์.png"],

        caseStudy: {
          overview: "รางวัลที่โรงเรียนมอบให้กับนักเรียนที่สร้างชื่อเสียงและคุณประโยชน์ให้กับโรงเรียน",
          problem: "",
          approach: "",
          process: "",
          result: "ได้รับรางวัลนี้เนื่องจากผ่านการอบรม สอวน. ค่าย 2 วิชาคอมพิวเตอร์",
          learning: "เป็นแรงผลักดันให้มุ่งมั่นสร้างผลงานและชื่อเสียงให้กับตนเองและโรงเรียนต่อไป"
        }
      },
      {
        slug: "silapahatthakam-3d-design",
        index: "20",
        title: "ศิลปหัตถกรรม — ออกแบบสิ่งของเครื่องใช้ด้วยโปรแกรมคอมพิวเตอร์",
        description: "ได้รับรางวัลเหรียญทองชนะเลิศ การแข่งขันศิลปหัตถกรรม ระดับเขตพื้นที่การศึกษา ระดับชั้น ม.4-ม.6",
        category: "graphic-3d",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/ศิลปหัตถกรรม/IMG_7319.jpg" ,"assets/ศิลปหัตถกรรม/IMG_6308.JPG", "assets/ศิลปหัตถกรรม/att.wjIn_N53unKIiUodjN4ic16HUI4nEfqeIGGVeWsT6y0.JPG", "assets/ศิลปหัตถกรรม/att.zGbbJzv5z60_G7AYmuxaB9kVM2tvZHp4LxnfjBCQ-BM.JPG", "assets/cer/cer ศิลปหัตถกรรม.png"],

        role: "ผู้เข้าแข่งขัน และผู้สร้างแบบจำลองสามมิติ",
        context: "การแข่งขันศิลปหัตถกรรม ระดับเขตพื้นที่การศึกษา",
        result: "เหรียญทองชนะเลิศ",
        technologies: ["Blender", "3D Modeling"],
        workLinks: [],
        certificateImages: ["assets/cer/cer ศิลปหัตถกรรม.png"],

        activityPhotos: ["assets/ศิลปหัตถกรรม/IMG_7319.jpg" ,"assets/ศิลปหัตถกรรม/IMG_6308.JPG", "assets/ศิลปหัตถกรรม/att.wjIn_N53unKIiUodjN4ic16HUI4nEfqeIGGVeWsT6y0.JPG", "assets/ศิลปหัตถกรรม/att.zGbbJzv5z60_G7AYmuxaB9kVM2tvZHp4LxnfjBCQ-BM.JPG", "assets/cer/cer ศิลปหัตถกรรม.png"],

        caseStudy: {
          overview: "การแข่งขันออกแบบสิ่งของเครื่องใช้ด้วยโปรแกรมคอมพิวเตอร์ ระดับชั้น ม.4-ม.6",
          problem: "ต้องออกแบบสิ่งของเครื่องใช้ที่ตอบโจทย์ที่กำหนดให้เหมาะสมและสอดคล้องกับการใช้งานจริง โดยโจทย์ที่ได้คือออกแบบห้องเรียนในอนาคต",
          approach: "ฝึกการออกแบบและสร้างแบบจำลองสามมิติ (3D Modeling) ด้วยโปรแกรม Blender ตั้งแต่การวิเคราะห์โจทย์และวางแนวคิดว่าในอนาคตห้องเรียนควรมีลักษณะอย่างไรที่จะสามารถส่งเสริมการเรียนรู้ จนถึงการสร้างแบบจำลองสามมิติที่สมบูรณ์และสวยงาม",
          process: "สร้างและปรับแก้แบบจำลองให้มีความเหมาะสมและสอดคล้องกับโจทย์ที่กำหนด",
          result: "ได้รับรางวัลเหรียญทองชนะเลิศ ระดับเขตพื้นที่การศึกษา",
          learning: "เห็นว่าความรู้ด้านคอมพิวเตอร์สามารถนำมาใช้เปลี่ยนแนวคิดให้กลายเป็นผลงานดิจิทัลที่เป็นรูปธรรม อีกทั้งยังได้เรียนรู้เครื่องมือและเทคนิคการสร้างแบบจำลองสามมิติ (3D Modeling) ที่สามารถนำไปประยุกต์ใช้ในงานออกแบบอื่น ๆ ได้"
        }
      },
      {
        slug: "posn-tutor-mentor",
        index: "21",
        title: "วิทยากรหลักในการติว สอวน. คอมพิวเตอร์",
        description: "ทำหน้าที่นักเรียนจิตอาสาติวและให้คำแนะนำด้านการเขียนโปรแกรมแก่รุ่นน้องที่เตรียมสอบ สอวน. คอมพิวเตอร์",
        category: "activity",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/tutor posn/IMG_1287.JPG", "assets/tutor posn/IMG_1288.JPG", "assets/tutor posn/IMG_1595.JPG", "assets/tutor posn/IMG_1596.JPG", "assets/tutor posn/IMG_1599.JPG", "assets/tutor posn/IMG_1600.JPG", "assets/tutor posn/IMG_1604.JPG", "assets/tutor posn/IMG_1605.JPG", "assets/tutor posn/IMG_20260604_073201.JPEG", "assets/cer/cer ติวสอวน.PNG"],

        role: "วิทยากร/ติวเตอร์",
        context: "เตรียมตัวสอบ สอวน. คอมพิวเตอร์ภายในโรงเรียน",
        result: "ช่วยติวรุ่นน้องเตรียมสอบ สอวน. คอมพิวเตอร์",
        technologies: [],
        workLinks: [],
        certificateImages: ["assets/cer/cer ติวสอวน.PNG"],

        activityPhotos: ["assets/tutor posn/IMG_1287.JPG", "assets/tutor posn/IMG_1288.JPG", "assets/tutor posn/IMG_1595.JPG", "assets/tutor posn/IMG_1596.JPG", "assets/tutor posn/IMG_1599.JPG", "assets/tutor posn/IMG_1600.JPG", "assets/tutor posn/IMG_1604.JPG", "assets/tutor posn/IMG_1605.JPG", "assets/tutor posn/IMG_20260604_073201.JPEG", "assets/cer/cer ติวสอวน.PNG"],

        caseStudy: {
          overview: "ช่วยติวและให้คำแนะนำด้านการเขียนโปรแกรมและการแก้โจทย์แก่รุ่นน้องที่เตรียมสอบ สอวน. คอมพิวเตอร์ รวมถึงให้คำแนะนำเมื่อพบปัญหาในการเขียนโปรแกรม",
          problem: "",
          approach: "",
          process: "",
          result: "ช่วยรุ่นน้องเตรียมความพร้อมก่อนสอบ สอวน. คอมพิวเตอร์",
          learning: "ได้ทบทวนและพัฒนาความรู้ด้าน Programming ของตนเอง ฝึกทักษะการสื่อสาร การอธิบายเรื่องซับซ้อนให้ผู้อื่นเข้าใจ และแบ่งปันความรู้"
        }
      },
      {
        slug: "skss-edu-spark-symposium",
        index: "25",
        title: "นำเสนอผลงานในงาน SKSS Edu Spark 2026",
        description: "นำเสนอผลงาน Clock Drawing Test Dementia Screening ในงานมหกรรมเวทีแลกเปลี่ยนเรียนรู้ (SYMPOSIUM) SKSS Edu Spark 2026",
        category: "activity",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/sympopsium skss edu park/IMG_2186.jpg", "assets/sympopsium skss edu park/IMG_2194 2.JPG", "assets/sympopsium skss edu park/IMG_2197.JPG", "assets/sympopsium skss edu park/IMG_2198.JPG", "assets/sympopsium skss edu park/IMG_2199.JPG", "assets/sympopsium skss edu park/IMG_2200.JPG", "assets/cer/cer skss edu park.png"],

        role: "ผู้นำเสนอผลงาน",
        context: "งาน SKSS Edu Spark 2026 — จุดประกายการเรียนรู้ สู่อนาคตที่ยั่งยืน",
        result: "นำเสนอผลงานสำเร็จ พร้อมแลกเปลี่ยนความคิดเห็นกับผู้เข้าร่วมงาน",
        technologies: [],
        workLinks: [],
        certificateImages: ["assets/cer/cer skss edu park.png"],

        activityPhotos: ["assets/sympopsium skss edu park/IMG_2186.jpg", "assets/sympopsium skss edu park/IMG_2194 2.JPG", "assets/sympopsium skss edu park/IMG_2197.JPG", "assets/sympopsium skss edu park/IMG_2198.JPG", "assets/sympopsium skss edu park/IMG_2199.JPG", "assets/sympopsium skss edu park/IMG_2200.JPG", "assets/cer/cer skss edu park.png"],

        caseStudy: {
          overview: "นำผลงาน Clock Drawing Test Dementia Screening ไปสื่อสารแนวคิด กระบวนการทำ และผลลัพธ์ของโครงงานในงาน SYMPOSIUM SKSS Edu Spark 2026 เพื่อแลกเปลี่ยนความคิดเห็นและข้อเสนอแนะกับผู้เข้าร่วมงาน",
          problem: "",
          approach: "",
          process: "",
          result: "ได้นำเสนอผลงานและแลกเปลี่ยนความคิดเห็นกับผู้เข้าร่วมงาน",
          learning: "พัฒนาทักษะการนำเสนอ การสื่อสารเชิงวิชาการ และการอธิบายแนวคิดอย่างเป็นระบบ ตลอดจนการรับฟังและตอบคำถามจากผู้เข้าร่วมงาน"
        }
      },
      {
        slug: "checkers-referee",
        index: "26",
        title: "ผู้คุมกีฬาหมากฮอสดีเด่น",
        description: "ได้รับมอบหมายให้ดูแลและจัดการแข่งขันหมากฮอสในงานกีฬาสีของโรงเรียน",
        category: "activity",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/หมากฮอส/0A9A5396.JPEG", "assets/หมากฮอส/0A9A6532.JPEG", "assets/หมากฮอส/0A9A6567.JPEG", "assets/หมากฮอส/0A9A6578.JPEG", "assets/หมากฮอส/1000007143.JPEG", "assets/หมากฮอส/1966_0.JPEG", "assets/หมากฮอส/IMG_4552.JPG", "assets/หมากฮอส/IMG_8880.jpg", "assets/หมากฮอส/IMG_8988.jpg", "assets/หมากฮอส/IMG_8991.JPG", "assets/หมากฮอส/P1063659.JPG", "assets/หมากฮอส/P1063669.JPG", "assets/หมากฮอส/P1335489.JPEG", "assets/cer/cer หมากฮอส.png"],

        role: "ผู้ควบคุมการแข่งขัน",
        context: "งานกีฬาสีโรงเรียน",
        result: "รางวัลผู้คุมกีฬาหมากฮอสดีเด่น",
        technologies: [],
        workLinks: [],
        certificateImages: ["assets/cer/cer หมากฮอส.png"],

        activityPhotos: ["assets/หมากฮอส/0A9A5396.JPEG", "assets/หมากฮอส/0A9A6532.JPEG", "assets/หมากฮอส/0A9A6567.JPEG", "assets/หมากฮอส/0A9A6578.JPEG", "assets/หมากฮอส/1000007143.JPEG", "assets/หมากฮอส/1966_0.JPEG", "assets/หมากฮอส/IMG_4552.JPG", "assets/หมากฮอส/IMG_8880.jpg", "assets/หมากฮอส/IMG_8988.jpg", "assets/หมากฮอส/IMG_8991.JPG", "assets/หมากฮอส/P1063659.JPG", "assets/หมากฮอส/P1063669.JPG", "assets/หมากฮอส/P1335489.JPEG", "assets/cer/cer หมากฮอส.png"],

        caseStudy: {
          overview: "วางแผนและควบคุมการแข่งขันหมากฮอส ดูแลผู้เข้าแข่งขัน และจัดการปัญหาที่เกิดขึ้นระหว่างการแข่งขันให้ดำเนินไปอย่างเรียบร้อย",
          problem: "",
          approach: "",
          process: "",
          result: "ได้รับรางวัลผู้คุมกีฬาหมากฮอสดีเด่น",
          learning: "พัฒนาทักษะความเป็นผู้นำ ความรับผิดชอบ การตัดสินใจและแก้ไขปัญหาเฉพาะหน้า ตลอดจนการสื่อสารและการทำงานร่วมกับผู้อื่น"
        }
      },
      {
        slug: "figma-workshop-instructor",
        index: "23",
        title: "วิทยากรอบรม Figma",
        description: "วิทยากรจัดอบรมพื้นฐาน UI/UX Design ด้วย Figma",
        category: "activity",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/figma/IMG_7457.JPG", "assets/figma/P1500665.JPEG", "assets/figma/P1500679.JPEG", "assets/figma/P1500743.JPEG", "assets/figma/P1500746.JPEG", "assets/cer/cer figma.png"],

        role: "วิทยากร",
        context: "กิจกรรมอบรมของโรงเรียน",
        result: "จัดอบรม Figma ให้ผู้เข้าร่วมได้ทดลองออกแบบและสร้างต้นแบบของตนเอง",
        technologies: ["Figma", "UI/UX Design"],
        workLinks: [],
        certificateImages: ["assets/cer/cer figma.png"],

        activityPhotos: ["assets/figma/IMG_7457.JPG", "assets/figma/P1500665.JPEG", "assets/figma/P1500679.JPEG", "assets/figma/P1500743.JPEG", "assets/figma/P1500746.JPEG", "assets/cer/cer figma.png"],

        caseStudy: {
          overview: "จัดอบรมถ่ายทอดความรู้พื้นฐานด้าน UI/UX Design โดยแนะนำการใช้งาน Figma ตั้งแต่การออกแบบหน้าจอ การสร้าง Wireframe และ Prototype ไปจนถึงการฝึกปฏิบัติจริง",
          problem: "",
          approach: "",
          process: "",
          result: "ผู้เข้าร่วมได้ทดลองออกแบบและสร้างงานต้นแบบของตนเองได้สำเร็จ",
          learning: "พัฒนาทักษะด้านการออกแบบดิจิทัล การคิดอย่างเป็นระบบ การออกแบบโดยคำนึงถึงประสบการณ์ผู้ใช้งาน และทักษะการสื่อสารในฐานะวิทยากร การแก้ปัญหาเฉพาะหน้า และการจัดการเวลาในการอบรม"
        }
      },
      {
        slug: "hcec-volunteer",
        index: "22",
        title: "เจ้าหน้าที่จิตอาสา ศูนย์ HCEC",
        description: "ปฏิบัติหน้าที่เจ้าหน้าที่จิตอาสาบริการ ศูนย์พัฒนาศักยภาพบุคคลเพื่อความเป็นเลิศ (HCEC) จังหวัดสมุทรสาคร",
        category: "activity",
        year: "2024-2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/hece จิตอาสาดูแลความสะอาด/IMG_5768.JPG", "assets/hece จิตอาสาดูแลความสะอาด/IMG_5769.JPG", "assets/hece จิตอาสาดูแลความสะอาด/IMG_5770.JPG", "assets/cer/cer hece ความสะอาด.PNG"],

        role: "เจ้าหน้าที่จิตอาสา",
        context: "โรงเรียนสมุทรสาครบูรณะ ปีการศึกษา 2567-2569",
        result: "ปฏิบัติหน้าที่ตลอดปีการศึกษา 2567-2569",
        technologies: [],
        workLinks: [],
        certificateImages: ["assets/cer/cer hece ความสะอาด.PNG"],

        activityPhotos: ["assets/hece จิตอาสาดูแลความสะอาด/IMG_5768.JPG", "assets/hece จิตอาสาดูแลความสะอาด/IMG_5769.JPG", "assets/hece จิตอาสาดูแลความสะอาด/IMG_5770.JPG", "assets/cer/cer hece ความสะอาด.PNG"],

        caseStudy: {
          overview: "ให้บริการและอำนวยความสะดวกแก่ผู้เข้าร่วมกิจกรรมของศูนย์ฯ อีกทั้งช่วยดูแลรักษาความสะอาดในพื้นที่",
          problem: "",
          approach: "",
          process: "",
          result: "ปฏิบัติหน้าที่จิตอาสาบริการของศูนย์ฯ ตลอดปีการศึกษา",
          learning: "พัฒนาทักษะการสื่อสาร การทำงานร่วมกับผู้อื่น ความรับผิดชอบ และเรียนรู้การเสียสละเวลาเพื่อประโยชน์ส่วนรวม"
        }
      },
      {
        slug: "student-enrollment-volunteer",
        index: "24",
        title: "จิตอาสาช่วยรับสมัครนักเรียน",
        description: "กิจกรรมจิตอาสาช่วยเหลือครูในการรับสมัครนักเรียนเข้าเรียนปีการศึกษาใหม่",
        category: "activity",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/รับสมัครนักเรียน/057e26279e397e04db24151a346b7fa5.JPEG", "assets/รับสมัครนักเรียน/IMG_0422.JPG", "assets/รับสมัครนักเรียน/IMG_0423.JPG", "assets/รับสมัครนักเรียน/IMG_0427.JPG", "assets/รับสมัครนักเรียน/ed5ee3933df90df98faa13b95d9cc726.JPEG"],

        role: "นักเรียนจิตอาสา",
        context: "โรงเรียนสมุทรสาครบูรณะ",
        result: "ช่วยดำเนินการรับสมัครนักเรียนสำเร็จ",
        technologies: [],
        workLinks: [],
        certificateImages: [],
        activityPhotos: ["assets/รับสมัครนักเรียน/057e26279e397e04db24151a346b7fa5.JPEG", "assets/รับสมัครนักเรียน/IMG_0422.JPG", "assets/รับสมัครนักเรียน/IMG_0423.JPG", "assets/รับสมัครนักเรียน/IMG_0427.JPG", "assets/รับสมัครนักเรียน/ed5ee3933df90df98faa13b95d9cc726.JPEG"],

        caseStudy: {
          overview: "รับผิดชอบการกรอกข้อมูลการสมัครของนักเรียนและให้บริการอำนวยความสะดวกแก่ผู้ปกครองในขั้นตอนการรับสมัคร",
          problem: "",
          approach: "",
          process: "",
          result: "ช่วยเหลือครูดำเนินการรับสมัครนักเรียนได้อย่างเรียบร้อย",
          learning: "พัฒนาทักษะการจัดการข้อมูล ความละเอียดรอบคอบ การสื่อสาร การแก้ไขปัญหาเฉพาะหน้า และเสริมสร้างความรับผิดชอบและจิตสาธารณะ"
        }
      },
      {
        slug: "wallpaper-3d-workshop-instructor",
        index: "27",
        title: "วิทยากร Workshop 3D Wallpaper ด้วย Adobe Illustrator",
        description: "วิทยากรจัดอบรมและ Workshop การออกแบบ 3D Wallpaper ด้วย Adobe Illustrator ในงานเปิดบ้านวิชาการของโรงเรียนสมุทรสาครบูรณะ",
        category: "activity",
        year: "2024",
        featured: false,
        heroImage: null,
        gallery: ["assets/workshop 3D wallpaper/IMG_6497.JPG", "assets/cer/cer workshop wallpaper.png"],

        role: "วิทยากร",
        context: "งานเปิดบ้านวิชาการของโรงเรียน",
        result: "จัดอบรมและ Workshop สำเร็จ พร้อมผู้เข้าร่วมลงมือปฏิบัติจริง",
        technologies: ["Adobe Illustrator", "3D Design"],
        workLinks: [],
        certificateImages: ["assets/cer/cer workshop wallpaper.png"],
        activityPhotos: ["assets/workshop 3D wallpaper/IMG_6497.JPG", "assets/cer/cer workshop wallpaper.png"],

        caseStudy: {
          overview: "ถ่ายทอดความรู้เกี่ยวกับการออกแบบ 3D Wallpaper ด้วย Adobe Illustrator พร้อมสาธิตขั้นตอนและให้ผู้เข้าร่วมได้ลงมือปฏิบัติจริง ตั้งแต่การสร้างองค์ประกอบ การจัดวาง และการประยุกต์ใช้เครื่องมือในการออกแบบ",
          problem: "",
          approach: "",
          process: "",
          result: "ผู้เข้าร่วม Workshop ได้ลงมือออกแบบ 3D Wallpaper ของตนเองสำเร็จ",
          learning: "พัฒนาทักษะด้านการออกแบบดิจิทัล การสื่อสารและถ่ายทอดความรู้ การวางแผนการอบรม และการแก้ไขปัญหาให้คำแนะนำแก่ผู้เข้าร่วม"
        }
      },
      {
        slug: "jaophor-parade-volunteer",
        index: "28",
        title: "จิตอาสาเดินขบวนแห่ศาลเจ้าพ่อ",
        description: "เข้าร่วมกิจกรรมจิตอาสาร่วมเดินขบวนแห่ศาลเจ้าพ่อ งานประจำจังหวัดสมุทรสาคร",
        category: "activity",
        year: "2024",
        featured: false,
        heroImage: null,
        gallery: ["assets/แห่เจ้าพ่อ/0A9A8879.JPEG", "assets/แห่เจ้าพ่อ/AIM_0216.JPEG", "assets/แห่เจ้าพ่อ/IMG_1255.jpg", "assets/แห่เจ้าพ่อ/IMG_1257.jpg", "assets/แห่เจ้าพ่อ/IMG_1323.JPG", "assets/แห่เจ้าพ่อ/IMG_1501.JPG", "assets/แห่เจ้าพ่อ/IMG_7097.JPG"],

        role: "นักเรียนจิตอาสา",
        context: "งานประจำจังหวัดสมุทรสาคร",
        result: "ร่วมกิจกรรมและช่วยสร้างบรรยากาศที่ดีภายในงาน",
        technologies: [],
        workLinks: [],
        certificateImages: [],
        activityPhotos: ["assets/แห่เจ้าพ่อ/0A9A8879.JPEG", "assets/แห่เจ้าพ่อ/AIM_0216.JPEG", "assets/แห่เจ้าพ่อ/IMG_1255.jpg", "assets/แห่เจ้าพ่อ/IMG_1257.jpg", "assets/แห่เจ้าพ่อ/IMG_1323.JPG", "assets/แห่เจ้าพ่อ/IMG_1501.JPG", "assets/แห่เจ้าพ่อ/IMG_7097.JPG"],

        caseStudy: {
          overview: "มีส่วนร่วมในขบวนแห่ศาลเจ้าพ่อ ซึ่งเป็นงานประจำจังหวัดสมุทรสาคร และช่วยสร้างบรรยากาศที่ดีภายในงาน",
          problem: "",
          approach: "",
          process: "",
          result: "ร่วมกิจกรรมสำเร็จตลอดงาน",
          learning: "เรียนรู้การทำงานร่วมกับผู้อื่น ความรับผิดชอบต่อหน้าที่ และการมีส่วนร่วมในกิจกรรมของชุมชนและท้องถิ่น"
        }
      },
      {
        slug: "open-house-booth-math-computer",
        index: "29",
        title: "จัดซุ้มแนะนำสายการเรียนคณิต–คอมพิวเตอร์",
        description: "รับผิดชอบหลักในการวางแผนและจัดซุ้มกิจกรรมแนะนำสายการเรียนคณิต–คอมพิวเตอร์ ในงานเปิดบ้านวิชาการของโรงเรียนสมุทรสาครบูรณะ",
        category: "activity",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/ซุ้มเปิดบ้านวิชาการ/IMG_0012.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0016.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0023.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0045.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0047.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0049.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0050.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_9948.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_9977.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/P1257566.JPEG", "assets/ซุ้มเปิดบ้านวิชาการ/P1257567.JPEG", "assets/ซุ้มเปิดบ้านวิชาการ/ซุ้มเปิดบ้าน 2.png", "assets/ซุ้มเปิดบ้านวิชาการ/ซุ้มเปิดบ้าน.png"],

        role: "จัดซุ้มกิจกรรม",
        context: "งานเปิดบ้านวิชาการของโรงเรียน",
        result: "จัดซุ้มกิจกรรมสำเร็จ แนะนำสายการเรียนให้นักเรียนที่สนใจ",
        technologies: [],
        workLinks: [],
        certificateImages: [],
        activityPhotos: ["assets/ซุ้มเปิดบ้านวิชาการ/IMG_0012.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0016.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0023.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0045.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0047.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0049.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0050.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_9948.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/IMG_9977.JPG", "assets/ซุ้มเปิดบ้านวิชาการ/P1257566.JPEG", "assets/ซุ้มเปิดบ้านวิชาการ/P1257567.JPEG", "assets/ซุ้มเปิดบ้านวิชาการ/ซุ้มเปิดบ้าน 2.png", "assets/ซุ้มเปิดบ้านวิชาการ/ซุ้มเปิดบ้าน.png"],

        caseStudy: {
          overview: "เป็นคนหลักในการร่วมออกแบบรูปแบบกิจกรรมและจัดเตรียมเนื้อหาสำหรับแนะนำสายการเรียนคณิต–คอมพิวเตอร์ให้แก่นักเรียนที่สนใจ พร้อมประสานงานกับสมาชิกในทีม",
          problem: "",
          approach: "",
          process: "",
          result: "กิจกรรมดำเนินไปอย่างราบรื่น และจัดซุ้มกิจกรรมสำเร็จตามเป้าหมาย",
          learning: "พัฒนาทักษะการวางแผน การบริหารจัดการ การสื่อสาร การทำงานเป็นทีม และความเป็นผู้นำ"
        }
      },
      {
        slug: "science-week-booth",
        index: "30",
        title: "จัดซุ้มกิจกรรมสัปดาห์วิทยาศาสตร์ “Global Boiling”",
        description: "รับผิดชอบหลักในการวางแผนและจัดซุ้มกิจกรรมสัปดาห์วิทยาศาสตร์ของโรงเรียน ภายใต้ธีม “Global Boiling”",
        category: "activity",
        year: "2024",
        featured: false,
        heroImage: null,
        gallery: ["assets/ซุ้มวันวิทย์/IMG_2039.JPG", "assets/ซุ้มวันวิทย์/IMG_2647.jpg", "assets/ซุ้มวันวิทย์/IMG_2976.JPG"],

        role: "จัดซุ้มกิจกรรม",
        context: "งานสัปดาห์วิทยาศาสตร์ของโรงเรียน",
        result: "จัดซุ้มกิจกรรมสำเร็จ ถ่ายทอดความรู้เรื่องภาวะโลกร้อน",
        technologies: [],
        workLinks: [],
        certificateImages: [],
        activityPhotos: ["assets/ซุ้มวันวิทย์/IMG_2039.JPG", "assets/ซุ้มวันวิทย์/IMG_2647.jpg", "assets/ซุ้มวันวิทย์/IMG_2976.JPG"],

        caseStudy: {
          overview: "คนหลักในการร่วมวางแนวคิด ออกแบบรูปแบบกิจกรรม และจัดเตรียมสื่อเพื่อถ่ายทอดความรู้เกี่ยวกับการเปลี่ยนแปลงสภาพภูมิอากาศและภาวะโลกร้อนให้เข้าใจง่ายและน่าสนใจ โดยต้องสอดคล้องกับสายการเรียนของเรานั่นคือ คณิตศาสตร์และคอมพิวเตอร์ และสามารถดึงดูดความสนใจของนักเรียนที่เข้าร่วมกิจกรรมได้",
          problem: "",
          approach: "",
          process: "",
          result: "กิจกรรมดำเนินไปอย่างราบรื่น ผู้เข้าร่วมงานเข้าใจประเด็นโลกร้อนมากขึ้น สำเร็จตามเป้าหมายที่วางไว้",
          learning: "พัฒนาทักษะการวางแผน การจัดการกิจกรรม ความคิดสร้างสรรค์ การสื่อสาร และการทำงานเป็นทีม"
        }
      },
      {
        slug: "merit-scholarship",
        index: "31",
        title: "ทุนเรียนดี",
        description: "ได้รับทุนการศึกษาเรียนดี จากผลการเรียนและความมุ่งมั่นในการศึกษา",
        category: "activity",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer ทุนเรียนดี.png"],
        role: "ผู้ได้รับทุนการศึกษา",
        context: "ทุนการศึกษาเรียนดี",
        result: "ได้รับทุนการศึกษาเรียนดี",
        technologies: [],
        workLinks: [],
        certificateImages: ["assets/cer/cer ทุนเรียนดี.png"],

        activityPhotos: ["assets/cer/cer ทุนเรียนดี.png"],
        caseStudy: {
          overview: "ได้รับทุนการศึกษาเรียนดีจากผลการเรียนและความมุ่งมั่นในการศึกษา",
          problem: "",
          approach: "",
          process: "",
          result: "ได้รับทุนการศึกษาเรียนดี จากบริษัท P.S.P Specialties",
          learning: "เป็นแรงสนับสนุนและกำลังใจให้ตั้งใจพัฒนาตนเองอย่างต่อเนื่อง ทั้งด้านการเรียนและการเข้าร่วมกิจกรรมต่าง ๆ"
        }
      },
      {
        slug: "good-child-award",
        index: "32",
        title: "รางวัลลูกกตัญญู วันแม่",
        description: "ได้รับการคัดเลือกให้เป็นลูกกตัญญูเนื่องในวันแม่",
        category: "activity",
        year: "2024",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer ลูกกตัญญู.png"],
        role: "ผู้ได้รับรางวัล",
        context: "กิจกรรมวันแม่ของโรงเรียน",
        result: "ได้รับการคัดเลือกเป็นลูกกตัญญู",
        technologies: [],
        workLinks: [],
        certificateImages: ["assets/cer/cer ลูกกตัญญู.png"],

        activityPhotos: ["assets/cer/cer ลูกกตัญญู.png"],
        caseStudy: {
          overview: "ได้รับการคัดเลือกให้เป็นลูกกตัญญูเนื่องในวันแม่",
          problem: "",
          approach: "",
          process: "",
          result: "ได้รับรางวัลลูกกตัญญู",
          learning: "สะท้อนถึงการให้ความสำคัญกับครอบครัว ความรับผิดชอบ และการประพฤติตนเป็นแบบอย่างที่ดี"
        }
      },
      {
        slug: "tpa-robot-training",
        index: "33",
        title: "อบรมหุ่นยนต์ ส.ส.ท.–สพฐ. ยุวชน 2569",
        description: "เข้ารับการอบรมการแข่งขันหุ่นยนต์ ส.ส.ท.–สพฐ. ยุวชน ประจำปี 2569 ประเภท Robo Rescue with microROS",
        category: "training",
        year: "2569",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer tpa robot.png"],
        role: "ผู้เข้าร่วมอบรม",
        context: "ส.ส.ท. (สมาคมส่งเสริมเทคโนโลยี ไทย-ญี่ปุ่น)",
        result: "ผ่านการประเมินหลังการอบรมตามเกณฑ์ที่กำหนด",
        technologies: ["Robotics", "microROS"],
        workLinks: [],
        certificateImages: ["assets/cer/cer tpa robot.png"],

        activityPhotos: ["assets/cer/cer tpa robot.png"],
        caseStudy: {
          overview: "อบรมเกี่ยวกับการแข่งขันหุ่นยนต์ประเภท Robo Rescue with microROS เรียนรู้หลักการและแนวคิดพื้นฐานด้าน Robotics",
          problem: "",
          approach: "",
          process: "",
          result: "ผ่านการประเมินหลังการอบรมตามเกณฑ์ที่กำหนด",
          learning: "พัฒนาทักษะการคิดวิเคราะห์ การแก้ปัญหาอย่างเป็นระบบ และเข้าใจการนำความรู้ด้านคอมพิวเตอร์มาประยุกต์ใช้กับระบบหุ่นยนต์จริง"
        }
      },
      {
        slug: "dev-commu-web-competition",
        index: "34",
        title: "อบรมและแข่งขันสร้างเว็บไซต์ด้วย HTML/CSS/JavaScript",
        description: "เข้าร่วมอบรมและแข่งขันสร้างเว็บไซต์ด้วยภาษา HTML, CSS และ JavaScript เป็นเวลา 2 วัน",
        category: "training",
        year: "[ปี]",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer html css devcommu.png", "assets/cer/cer web devcommu.png"],
        role: "ผู้เข้าร่วมอบรม",
        context: "จัดโดย DevCommu",
        result: "สร้างเว็บไซต์ที่ตนเองสนใจได้จริง",
        technologies: ["HTML", "CSS", "JavaScript"],
        workLinks: [],
        certificateImages: ["assets/cer/cer html css devcommu.png", "assets/cer/cer web devcommu.png"],

        activityPhotos: ["assets/cer/cer html css devcommu.png", "assets/cer/cer web devcommu.png"],
        caseStudy: {
          overview: "อบรมและแข่งขันสร้างเว็บไซต์ด้วย HTML, CSS และ JavaScript เป็นเวลา 2 วัน จนได้ลองสร้างเว็บที่ตนเองสนใจขึ้นจริง หลังจากนั้นจึงสร้างผลงานตามที่โจทย์กำหนด",
          problem: "",
          approach: "",
          process: "",
          result: "สร้างเว็บไซต์ของตนเองสำเร็จภายในระยะเวลาที่กำหนด โดยประยุกต์ใช้ความรู้ที่ได้จากการอบรมและฝึกฝนทักษะการเขียนโปรแกรม",
          learning: "เรียนรู้ทักษะพื้นฐานในการสร้างเว็บไซต์ และมีโอกาสต่อยอดทักษะนี้ไปในงานแข่งขันต่าง ๆ"
        }
      },
      {
        slug: "ai-devcommu-bootcamp",
        index: "35",
        title: "Intro to AI Bootcamp โดย DevCommu",
        description: "เข้าร่วมอบรม Intro to AI Bootcamp จัดโดย DevCommu",
        category: "training",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer intro to ai devcommi.png"],
        role: "ผู้เข้าร่วมอบรม",
        context: "จัดโดย DevCommu",
        result: "เข้าใจพื้นฐานปัญญาประดิษฐ์และแนวทางการประยุกต์ใช้",
        technologies: ["Artificial Intelligence"],
        workLinks: [],
        certificateImages: ["assets/cer/cer intro to ai devcommi.png"],

        activityPhotos: ["assets/cer/cer intro to ai devcommi.png"],
        caseStudy: {
          overview: "เรียนรู้พื้นฐานเกี่ยวกับปัญญาประดิษฐ์ (AI) และแนวคิดเบื้องต้นในการนำ AI มาประยุกต์ใช้กับปัญหาต่าง ๆ",
          problem: "",
          approach: "",
          process: "",
          result: "เข้าร่วมอบรมจนจบหลักสูตร",
          learning: "เปิดมุมมองเกี่ยวกับเทคโนโลยี AI พัฒนาทักษะการคิดวิเคราะห์ และเป็นพื้นฐานต่อยอดด้าน AI, Machine Learning ในอนาคต"
        }
      },
      {
        slug: "face-detection-python-training",
        index: "36",
        title: "อบรมการตรวจจับและรู้จำใบหน้าด้วย Python",
        description: "เข้าร่วมอบรมการตรวจจับและรู้จำใบหน้าด้วยภาษา Python",
        category: "training",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/ตรวจจับหน้า python/Screenshot 2025-12-27 135915.png", "assets/ตรวจจับหน้า python/Screenshot 2025-12-27 145142.png", "assets/ตรวจจับหน้า python/Screenshot 2025-12-27 151103.png", "assets/cer/cer ตรวจจับหน้า python.png"],
        role: "ผู้เข้าร่วมอบรม",
        context: "คณะวิศวกรรมศาสตร์และเทคโนโลยีอุตสาหกรรม มหาวิทยาลัยศิลปากร",
        result: "ทดลองเขียนโปรแกรมตรวจจับใบหน้าได้สำเร็จ",
        technologies: ["Python", "Image Processing"],
        workLinks: [],
        certificateImages: ["assets/cer/cer ตรวจจับหน้า python.png"],

        activityPhotos: ["assets/ตรวจจับหน้า python/Screenshot 2025-12-27 135915.png", "assets/ตรวจจับหน้า python/Screenshot 2025-12-27 145142.png", "assets/ตรวจจับหน้า python/Screenshot 2025-12-27 151103.png", "assets/cer/cer ตรวจจับหน้า python.png"],
        caseStudy: {
          overview: "เรียนรู้หลักการเบื้องต้นของเทคโนโลยี Image Processing และการนำ Python มาประยุกต์ใช้ในการตรวจจับและรู้จำใบหน้า",
          problem: "",
          approach: "",
          process: "",
          result: "ทดลองเขียนโปรแกรมและประยุกต์ใช้เครื่องมือประมวลผลภาพได้สำเร็จ",
          learning: "เข้าใจขั้นตอนการทำงานของระบบตั้งแต่การรับภาพ การตรวจจับใบหน้า ไปจนถึงการนำข้อมูลไปประมวลผลและใช้งาน"
        }
      },
      {
        slug: "coding-thailand-depa",
        index: "37",
        title: "Coding Thailand 2026: AI Inspires the Future",
        description: "เข้าร่วมการอบรมในรายการ Coding Thailand 2026: AI Inspires the Future จัดโดย depa",
        category: "training",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer depa1.png", "assets/cer/cer depa2.png", "assets/cer/cer depa3.png", "assets/cer/cer depa4.png", "assets/cer/cer depa5.png", "assets/cer/cer depa6.png", "assets/cer/cer depa7.png", "assets/cer/cer depa8.png", "assets/cer/cer depa9.png"],
        role: "ผู้เข้าร่วมอบรม",
        context: "สำนักงานส่งเสริมเศรษฐกิจดิจิทัล (depa)",
        result: "ผ่านการอบรมครอบคลุมหลายด้านด้านเทคโนโลยี",
        technologies: ["C/C++", "Python", "Machine Learning", "AIoT", "ROS", "Design Thinking"],
        workLinks: [],
        certificateImages: ["assets/cer/cer depa1.png", "assets/cer/cer depa2.png", "assets/cer/cer depa3.png", "assets/cer/cer depa4.png", "assets/cer/cer depa5.png", "assets/cer/cer depa6.png", "assets/cer/cer depa7.png", "assets/cer/cer depa8.png", "assets/cer/cer depa9.png"],
        activityPhotos: ["assets/cer/cer depa1.png", "assets/cer/cer depa2.png", "assets/cer/cer depa3.png", "assets/cer/cer depa4.png", "assets/cer/cer depa5.png", "assets/cer/cer depa6.png", "assets/cer/cer depa7.png", "assets/cer/cer depa8.png", "assets/cer/cer depa9.png"],
        caseStudy: {
          overview: "ได้รับความรู้และฝึกปฏิบัติหลากหลายด้าน ได้แก่ Programming with C/C++, Python Programming for AI & Data, Electronics, Microcontroller, AIoT & Edge AI, Machine Learning, ROS Robotics และ Design Thinking ผ่าน Idea Canvas",
          problem: "",
          approach: "",
          process: "",
          result: "ผ่านการอบรมหลักสูตร",
          learning: "เห็นความเชื่อมโยงตั้งแต่การเขียนโปรแกรมไปจนถึงการพัฒนาโครงงาน และนำความรู้ไปต่อยอดสร้างเทคโนโลยีและนวัตกรรมในอนาคตได้"
        }
      },
      {
        slug: "image-processing-training",
        index: "38",
        title: "อบรม Image Processing",
        description: "เข้าร่วมการอบรมด้าน Image Processing และทดลองใช้งาน MATLAB เบื้องต้น",
        category: "training",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/image processing/P1091357.JPG", "assets/image processing/P1091370.JPG", "assets/image processing/P1091406.JPG", "assets/image processing/P1091420.JPG", "assets/cer/cer image proccessing mathlab.png"],
        role: "ผู้เข้าร่วมอบรม",
        context: "อบรม Image Processing",
        result: "ทดลองประมวลผลภาพด้วย MATLAB ได้สำเร็จ",
        technologies: ["MATLAB", "Image Processing"],
        workLinks: [],
        certificateImages: ["assets/cer/cer image proccessing mathlab.png"],

        activityPhotos: ["assets/image processing/P1091357.JPG", "assets/image processing/P1091370.JPG", "assets/image processing/P1091406.JPG", "assets/image processing/P1091420.JPG", "assets/cer/cer image proccessing mathlab.png"],
        caseStudy: {
          overview: "เรียนรู้พื้นฐานการประมวลผลภาพและทดลองใช้งานโปรแกรม MATLAB เบื้องต้นในการจัดการและวิเคราะห์ข้อมูลภาพ",
          problem: "",
          approach: "",
          process: "",
          result: "ทดลองใช้งาน MATLAB ประมวลผลภาพได้สำเร็จ",
          learning: "ฝึกการคิดวิเคราะห์อย่างเป็นขั้นตอน เป็นพื้นฐานสำคัญสำหรับการต่อยอดด้าน Computer Vision, AI และการประมวลผลข้อมูลภาพ"
        }
      },
      {
        slug: "cyber-ground-training",
        index: "39",
        title: "อบรม Cyber Ground",
        description: "เข้าร่วมการอบรม Cyber Ground ในงาน IT Ladkrabang Open House",
        category: "training",
        year: "2024",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer cyberground.png"],
        role: "ผู้เข้าร่วมอบรม",
        context: "คณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
        result: "เข้าใจพื้นฐาน Cybersecurity มากขึ้น",
        technologies: ["Cybersecurity"],
        workLinks: [],
        certificateImages: ["assets/cer/cer cyberground.png"],

        activityPhotos: ["assets/cer/cer cyberground.png"],
        caseStudy: {
          overview: "เรียนรู้พื้นฐานด้าน Cybersecurity และแนวคิดเกี่ยวกับการรักษาความปลอดภัยทางไซเบอร์ พร้อมฝึกการคิดวิเคราะห์และการแก้ปัญหาอย่างเป็นระบบ",
          problem: "",
          approach: "",
          process: "",
          result: "",
          learning: "เข้าใจความสำคัญของความปลอดภัยของข้อมูลและระบบคอมพิวเตอร์ เป็นพื้นฐานต่อยอดด้านเทคโนโลยีสารสนเทศและความมั่นคงปลอดภัยไซเบอร์ เป็นจุดเริ่มต้นในการเรียนรู้และพัฒนาทักษะด้าน Cybersecurity ต่อไปในอนาคต"
        }
      },
      {
        slug: "ai-education-seminar",
        index: "40",
        title: "สัมมนา “AI กับการศึกษา”",
        description: "เข้าร่วมสัมมนาวิชาการ “AI กับการศึกษา ผู้ช่วยจัดการเรียนรู้ในยุคปัจจุบัน”",
        category: "training",
        year: "2024",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer สัมนา ai.png"],
        role: "ผู้เข้าร่วมสัมมนา",
        context: "ภาควิชาเทคโนโลยีการศึกษา มหาวิทยาลัยศิลปากร",
        result: "เข้าใจแนวทางการประยุกต์ใช้ AI ในการศึกษา",
        technologies: ["Artificial Intelligence"],
        workLinks: [],
        certificateImages: ["assets/cer/cer สัมนา ai.png"],

        activityPhotos: ["assets/cer/cer สัมนา ai.png"],
        caseStudy: {
          overview: "เรียนรู้แนวทางการประยุกต์ใช้ Artificial Intelligence (AI) เพื่อสนับสนุนการจัดการเรียนรู้และเพิ่มประสิทธิภาพทางการศึกษา",
          problem: "",
          approach: "",
          process: "",
          result: "",
          learning: "เห็นแนวทางการนำเทคโนโลยีมาประยุกต์ใช้แก้ปัญหาจริง และเปิดมุมมองในการพัฒนาและประยุกต์ใช้ AI อย่างเหมาะสม"
        }
      },
      {
        slug: "career-hub-comsci-camp",
        index: "41",
        title: "Computer Science Camp โดย Career Hub",
        description: "ผ่านการอบรม Computer Science Camp จัดโดย Career Hub เป็นระยะเวลา 2 วัน",
        category: "training",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/comsci career hub/IMG_6347.JPEG", "assets/comsci career hub/IMG_6348.JPEG", "assets/comsci career hub/IMG_6466.JPEG", "assets/comsci career hub/IMG_7138.jpg", "assets/cer/cer career hub comsci.png"],

        role: "ผู้เข้าร่วมอบรม",
        context: "จัดโดย Career Hub",
        result: "ทดลองสร้างโปรแกรมโต้ตอบได้สำเร็จ",
        technologies: ["Python", "Pygame", "Data Science"],
        workLinks: [],
        certificateImages: ["assets/cer/cer career hub comsci.png"],

        activityPhotos: ["assets/comsci career hub/IMG_6347.JPEG", "assets/comsci career hub/IMG_6348.JPEG", "assets/comsci career hub/IMG_6466.JPEG", "assets/comsci career hub/IMG_7138.jpg", "assets/cer/cer career hub comsci.png"],

        caseStudy: {
          overview: "เรียนรู้และทดลองเขียนโปรแกรมด้วยภาษา Python ผ่านกิจกรรมหลากหลาย ทั้งการประยุกต์ใช้ Python ด้าน Data Science เบื้องต้น และการใช้ไลบรารี Pygame สร้างโปรแกรมเชิงโต้ตอบ",
          problem: "",
          approach: "",
          process: "",
          result: "เข้าร่วมค่ายจนจบและได้ทดลองสร้างเกมด้วย Pygame",
          learning: "พัฒนาทักษะการเขียนโปรแกรม การคิดอย่างเป็นขั้นตอน และการแก้ปัญหา พร้อมเห็นการประยุกต์ใช้ Python ได้หลายรูปแบบ"
        }
      },
      {
        slug: "data-science-training",
        index: "42",
        title: "อบรม Data Science เบื้องต้น",
        description: "เข้าร่วมการอบรม Data Science เบื้องต้น",
        category: "training",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/อบรม data science/20250208_130429.JPEG", "assets/อบรม data science/20250208_133727.JPEG", "assets/อบรม data science/IMG_6429.JPG"],

        role: "ผู้เข้าร่วมอบรม",
        context: "อบรม Data Science เบื้องต้น",
        result: "เข้าใจกระบวนการทำงานด้านข้อมูลเบื้องต้น",
        technologies: ["Data Science", "Data Analytics", "Python"],
        workLinks: [],
        certificateImages: [],
        activityPhotos: ["assets/อบรม data science/20250208_130429.JPEG", "assets/อบรม data science/20250208_133727.JPEG", "assets/อบรม data science/IMG_6429.JPG"],

        caseStudy: {
          overview: "เรียนรู้แนวคิดและพื้นฐานของกระบวนการทำงานด้านข้อมูล ตั้งแต่การทำความเข้าใจและจัดการข้อมูล การวิเคราะห์ข้อมูล ไปจนถึงการนำข้อมูลมาใช้หาแนวโน้มและสนับสนุนการตัดสินใจ",
          problem: "",
          approach: "",
          process: "",
          result: "",
          learning: "พัฒนาทักษะการคิดวิเคราะห์ การแก้ปัญหาอย่างเป็นระบบ และสร้างพื้นฐานต่อยอดด้าน Data Science, Data Analytics และ AI"
        }
      },
      {
        slug: "drone-math-programming-training",
        index: "43",
        title: "อบรมคณิตศาสตร์และการโปรแกรมอากาศยานไร้คนขับ",
        description: "เข้าร่วมการอบรมเชิงปฏิบัติการคณิตศาสตร์และการโปรแกรมในเทคโนโลยีอากาศยานไร้คนขับ",
        category: "training",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/อบรมโดรน/IMG_7714.jpg", "assets/อบรมโดรน/IMG_7720.jpg", "assets/อบรมโดรน/IMG_7731.JPG", "assets/อบรมโดรน/IMG_7732.JPG", "assets/อบรมโดรน/IMG_7733.JPG", "assets/cer/cer อบรบโดรน.png"],

        role: "ผู้เข้าร่วมอบรม",
        context: "อบรมเชิงปฏิบัติการเทคโนโลยีโดรน",
        result: "เข้าใจการทำงานร่วมกันของคณิตศาสตร์ การเขียนโปรแกรม และระบบอัตโนมัติ",
        technologies: ["Drone Technology", "Mathematics", "Programming"],
        workLinks: [],
        certificateImages: ["assets/cer/cer อบรบโดรน.png"],

        activityPhotos: ["assets/อบรมโดรน/IMG_7714.jpg", "assets/อบรมโดรน/IMG_7720.jpg", "assets/อบรมโดรน/IMG_7731.JPG", "assets/อบรมโดรน/IMG_7732.JPG", "assets/อบรมโดรน/IMG_7733.JPG", "assets/cer/cer อบรบโดรน.png"],

        caseStudy: {
          overview: "เรียนรู้การประยุกต์ใช้หลักคณิตศาสตร์ร่วมกับการเขียนโปรแกรมเพื่อทำความเข้าใจและพัฒนาเทคโนโลยีอากาศยานไร้คนขับ",
          problem: "",
          approach: "",
          process: "",
          result: "",
          learning: "เห็นการทำงานร่วมกันระหว่างคณิตศาสตร์ การเขียนโปรแกรม และระบบอัตโนมัติ ซึ่งต่อยอดสู่วิศวกรรมคอมพิวเตอร์ Robotics และเทคโนโลยีอัจฉริยะได้"
        }
      },
      {
        slug: "future-skill-web-training",
        index: "44",
        title: "อบรมสร้างเว็บไซต์และพื้นฐานการเขียนโปรแกรม โดย FutureSkill",
        description: "เข้าร่วมการอบรมด้านการสร้างเว็บไซต์และพื้นฐานการเขียนโปรแกรม โดย FutureSkill",
        category: "training",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/cer/cer futureskill.png", "assets/cer/cer futureskill2.png", "assets/cer/cer futureskill3.png", "assets/cer/cer futureskill4.png"],
        role: "ผู้เข้าร่วมอบรม",
        context: "จัดโดย FutureSkill",
        result: "เข้าใจพื้นฐานการพัฒนาเว็บไซต์และการเขียนโปรแกรม",
        technologies: ["Web Development", "Programming"],
        workLinks: [],
        certificateImages: ["assets/cer/cer futureskill.png", "assets/cer/cer futureskill2.png", "assets/cer/cer futureskill3.png", "assets/cer/cer futureskill4.png"],

        activityPhotos: ["assets/cer/cer futureskill.png", "assets/cer/cer futureskill2.png", "assets/cer/cer futureskill3.png", "assets/cer/cer futureskill4.png"],
        caseStudy: {
          overview: "เรียนรู้แนวคิดและพื้นฐานการพัฒนาเว็บไซต์ รวมถึงการเขียนโปรแกรมด้วยภาษาต่าง ๆ",
          problem: "",
          approach: "",
          process: "",
          result: "เข้าร่วมอบรมจนจบหลักสูตร",
          learning: "วางพื้นฐานด้าน Web Development และ Programming ต่อยอดสู่การพัฒนาเว็บไซต์และโปรเจกต์ด้านเทคโนโลยีในอนาคต"
        }
      },
      {
        slug: "zigma-camp",
        index: "45",
        title: "Zigma Camp คณะพาณิชยศาสตร์และการบัญชี จุฬาฯ",
        description: "ผ่านการคัดเลือกเข้าร่วม Zigma Camp จัดโดยคณะพาณิชยศาสตร์และการบัญชี จุฬาลงกรณ์มหาวิทยาลัย",
        category: "training",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/zigma camp/DSC02494.JPEG", "assets/zigma camp/DSC02495.JPEG", "assets/zigma camp/IMG_6248.jpg", "assets/zigma camp/IMG_6296.JPG", "assets/zigma camp/IMG_6298.JPG", "assets/zigma camp/IMG_6300.JPG", "assets/zigma camp/IMG_6302.JPG", "assets/cer/cer zigma camp.png"],

        role: "ผู้เข้าร่วมค่าย",
        context: "คณะพาณิชยศาสตร์และการบัญชี จุฬาลงกรณ์มหาวิทยาลัย",
        result: "เข้าร่วมค่ายเป็นระยะเวลา 2 วัน",
        technologies: ["Data Structure"],
        workLinks: [],
        certificateImages: ["assets/cer/cer zigma camp.png"],

        activityPhotos: ["assets/zigma camp/DSC02494.JPEG", "assets/zigma camp/DSC02495.JPEG", "assets/zigma camp/IMG_6248.jpg", "assets/zigma camp/IMG_6296.JPG", "assets/zigma camp/IMG_6298.JPG", "assets/zigma camp/IMG_6300.JPG", "assets/zigma camp/IMG_6302.JPG", "assets/cer/cer zigma camp.png"],

        caseStudy: {
          overview: "ผ่านการคัดเลือกเข้าค่าย และได้เรียนรู้เกี่ยวกับหลักสูตรและรูปแบบการเรียนระดับมหาวิทยาลัย พร้อมทดลองเรียนในบางรายวิชาต่าง ๆ ของคณะ เช่น Data Structure",
          problem: "",
          approach: "",
          process: "",
          result: "เข้าร่วมค่ายครบ 2 วัน",
          learning: "เห็นแนวทางการนำความรู้ด้านเทคโนโลยีและการวิเคราะห์ข้อมูลไปประยุกต์ใช้ในบริบททางธุรกิจ"
        }
      },
      {
        slug: "onshape-3d-training",
        index: "46",
        title: "อบรม 3D Onshape",
        description: "เข้าร่วมการอบรม 3D Onshape เรียนรู้พื้นฐานการออกแบบและสร้างแบบจำลองสามมิติ",
        category: "training",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/onshape/IMG_7709.JPG", "assets/cer/cer onshape.png"],

        role: "ผู้เข้าร่วมอบรม",
        context: "อบรม 3D Onshape",
        result: "สร้างแบบจำลองสามมิติของตนเองได้สำเร็จ",
        technologies: ["Onshape", "3D Modeling"],
        workLinks: [],
        certificateImages: ["assets/cer/cer onshape.png"],

        activityPhotos: ["assets/onshape/IMG_7709.JPG", "assets/cer/cer onshape.png"],

        caseStudy: {
          overview: "เรียนรู้พื้นฐานการออกแบบและสร้างแบบจำลองสามมิติด้วยโปรแกรม Onshape ตั้งแต่การสร้างชิ้นส่วน การปรับแต่งรูปทรง และการออกแบบชิ้นงานผ่านระบบดิจิทัล",
          problem: "",
          approach: "",
          process: "",
          result: "สร้างแบบจำลองสามมิติของตนเองได้สำเร็จ",
          learning: "พัฒนาทักษะการคิดเชิงพื้นที่ การออกแบบอย่างเป็นระบบ และการใช้เทคโนโลยีสร้างแบบจำลองที่ต่อยอดสู่งานวิศวกรรมและเทคโนโลยีได้"
        }
      },
      {
        slug: "blender-science-lab",
        index: "47",
        title: "ผลงาน 3D Modeling: ห้องปฏิบัติการวิทยาศาสตร์",
        description: "ได้รับรางวัลรองชนะเลิศอันดับ 1 งานออกแบบห้องปฏิบัติการวิทยาศาสตร์ 3D Modeling ด้วย Blender",
        category: "graphic-3d",
        year: "2024",
        featured: false,
        heroImage: null,
        gallery: ["assets/ห้องวิทย์ blender/Chayanit-Science laboratory (-1).png", "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (1).png", "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (2).png", "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (3).png", "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (4).png", "assets/cer/cer ห้องปฏิบัติการวิทย์.png"],

        role: "ผู้ออกแบบ",
        context: "ผลงานส่วนตัว",
        result: "สร้างแบบจำลอง 3D",
        technologies: ["Blender", "3D Modeling"],
        workLinks: [],
        certificateImages: ["assets/cer/cer ห้องปฏิบัติการวิทย์.png"],

        activityPhotos: ["assets/ห้องวิทย์ blender/Chayanit-Science laboratory (-1).png", "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (1).png", "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (2).png", "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (3).png", "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (4).png", "assets/cer/cer ห้องปฏิบัติการวิทย์.png"],

        caseStudy: {
          overview: "ออกแบบห้องปฏิบัติการวิทยาศาสตร์ด้วย Blender โดยต้องวางแนวคิดและโครงสร้างของพื้นที่ให้สอดคล้องกับการใช้งานจริงและองค์ประกอบโดยรวมของห้องปฏิบัติการ",
          problem: "ต้องวางแนวคิดและโครงสร้างของแต่ละพื้นที่ให้สอดคล้องกับการใช้งานจริงและองค์ประกอบโดยรวม",
          approach: "เริ่มจากการวางแนวคิดและโครงสร้างของพื้นที่ ก่อนสร้างองค์ประกอบและปรับรายละเอียดของโมเดล",
          process: "ปรับรายละเอียดของโมเดลให้สอดคล้องกับการใช้งานและองค์ประกอบโดยรวมของแต่ละพื้นที่",
          result: "ได้รับรางวัลรองชนะเลิศอันดับ 1 งานออกแบบห้องปฏิบัติการวิทยาศาสตร์ 3D Modeling ด้วย Blender ซึ่งเป็นการแข่งขันภายในงานสัปดาห์วิทยาศาสตร์ของโรงเรียนสมุทรสาครบูรณะ",
          learning: "ฝึกการคิดเป็นขั้นตอน การวิเคราะห์และแก้ไขปัญหา การจัดการองค์ประกอบที่ซับซ้อน การเรียนรู้ซอฟต์แวร์ด้วยตนเอง และการใช้คอมพิวเตอร์เปลี่ยนแนวคิดให้กลายเป็นผลงานดิจิทัลที่จับต้องได้"
        }
      },
      {
        slug: "blender-happy-toilet",
        index: "48",
        title: "ผลงาน 3D Modeling: ห้องน้ำสาธารณะ",
        description: "เข้าร่วมการแข่งขันออกแบบห้องน้ำสาธารณะ 3D Modeling ด้วย Blender ในโครงการสุขาสุขี The Happy Toilet",
        category: "graphic-3d",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/The Happy Toilet/1.png", "assets/The Happy Toilet/2.png", "assets/The Happy Toilet/3.png", "assets/The Happy Toilet/4.png", "assets/The Happy Toilet/5.png", "assets/The Happy Toilet/IMG_6907.JPG", "assets/The Happy Toilet/center.png", "assets/The Happy Toilet/perspective toilet.png", "assets/The Happy Toilet/perspective toilet2.png", "assets/The Happy Toilet/top.png", "assets/The Happy Toilet/สุขีสุขา-01.png", "assets/cer/cer the happy toilet.png"],

        role: "ผู้ออกแบบ",
        context: "การแข่งขันออกแบบห้องน้ำสาธารณะ 3D Modeling ด้วย Blender ในโครงการสุขาสุขี The Happy Toilet",
        result: "สร้างแบบจำลอง 3D สำเร็จ",
        technologies: ["Blender", "3D Modeling"],
        workLinks: [],
        certificateImages: ["assets/cer/cer the happy toilet.png"],

        activityPhotos: ["assets/The Happy Toilet/1.png", "assets/The Happy Toilet/2.png", "assets/The Happy Toilet/3.png", "assets/The Happy Toilet/4.png", "assets/The Happy Toilet/5.png", "assets/The Happy Toilet/IMG_6907.JPG", "assets/The Happy Toilet/center.png", "assets/The Happy Toilet/perspective toilet.png", "assets/The Happy Toilet/perspective toilet2.png", "assets/The Happy Toilet/top.png", "assets/The Happy Toilet/สุขีสุขา-01.png", "assets/cer/cer the happy toilet.png"],

        caseStudy: {
          overview: "ออกแบบและจำลองห้องน้ำสาธารณะด้วย Blender โดยต้องวางแนวคิดและโครงสร้างของพื้นที่ให้สอดคล้องกับการใช้งานจริงและองค์ประกอบโดยรวมของห้องน้ำ",
          problem: "",
          approach: "เริ่มจากการวางแนวคิดและโครงสร้างของพื้นที่ ก่อนสร้างองค์ประกอบและปรับรายละเอียดของโมเดล",
          process: "ปรับรายละเอียดของโมเดลให้สอดคล้องกับการใช้งานและองค์ประกอบโดยรวมของแต่ละพื้นที่",
          result: "สร้างผลงาน Your own side quest ได้สำเร็จตามที่ได้วางแผนไว้",
          learning: "ได้ฝึกการออกแบบที่มีการกำหนดโจทย์และเงื่อนไขที่ชัดเจนในเรื่องของจำนวนห้องและพื้นที่ การวางแผนและทำให้ทันเวลา และการใช้ซอฟต์แวร์ 3D Modeling อย่างมีประสิทธิภาพ"
        }
      },
      {
        slug: "blender-3d-rooms",
        index: "49",
        title: "ผลงาน 3D Modeling อื่น ๆ",
        description: "พัฒนาผลงาน 3D Modeling ด้วย Blender",
        category: "graphic-3d",
        year: "2024 - 2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/3D/IMG_7813.JPG", "assets/3D/P1163849.JPEG", "assets/3D/P1163988.JPEG", "assets/3D/P1182026.JPEG", "assets/3D/Screenshot 2026-09-21 154708.png", "assets/3D/Screenshot 2026-09-21 154750.png", "assets/3D/Screenshot 2026-09-21 154842.png", "assets/3D/Screenshot 2026-09-21 154925.png", "assets/3D/Screenshot 2569-09-21 at 15.45.26.png", "assets/3D/Screenshot 2569-09-21 at 15.45.32.png", "assets/3D/Screenshot 2569-09-21 at 15.45.37.png", "assets/3D/Screenshot 2569-09-21 at 15.45.44.png"],
        role: "ผู้ออกแบบ",
        context: "ผลงานส่วนตัว",
        result: "ฝึกทักษะการออกแบบและสร้างแบบจำลอง 3D ด้วย Blender",
        technologies: ["Blender", "3D Modeling"],
        workLinks: [],
        certificateImages: [],
        activityPhotos: ["assets/3D/IMG_7813.JPG", "assets/3D/P1163849.JPEG", "assets/3D/P1163988.JPEG", "assets/3D/P1182026.JPEG", "assets/3D/Screenshot 2026-09-21 154708.png", "assets/3D/Screenshot 2026-09-21 154750.png", "assets/3D/Screenshot 2026-09-21 154842.png", "assets/3D/Screenshot 2026-09-21 154925.png", "assets/3D/Screenshot 2569-09-21 at 15.45.26.png", "assets/3D/Screenshot 2569-09-21 at 15.45.32.png", "assets/3D/Screenshot 2569-09-21 at 15.45.37.png", "assets/3D/Screenshot 2569-09-21 at 15.45.44.png"],
        caseStudy: {
          overview: "ได้ฝึกออกแบบและสร้างแบบจำลอง 3D ด้วย Blender หลากหลายผลงาน เพื่อฝึกการใช้เครื่องมือและพัฒนาทักษะการออกแบบ 3D Modeling ให้มีความชำนาญมากขึ้น",
          problem: "",
          approach: "",
          process: "",
          result: "",
          learning: "พัฒนาทักษะการออกแบบและสร้างแบบจำลอง 3D ด้วย Blender ฝึกการใช้เครื่องมือและเทคนิคต่าง ๆ เพื่อสร้างผลงานที่มีความซับซ้อนมากขึ้น และสามารถนำไปประยุกต์ใช้ในงานออกแบบและวิศวกรรมได้"
        }
      },
      {
        slug: "anti-drug-video-competition",
        index: "50",
        title: "คลิปวิดีโอรณรงค์ต่อต้านยาเสพติด",
        description: "ได้รับรางวัลชนะเลิศ การประกวดคลิปวิดีโอรณรงค์ต่อต้านยาเสพติด จัดโดยมหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร",
        category: "graphic-3d",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/คลิปยาเสพติด/20250604_092401.JPEG", "assets/คลิปยาเสพติด/20250604_145536.JPEG", "assets/คลิปยาเสพติด/IMG_8596.JPG", "assets/คลิปยาเสพติด/IMG_8597.JPG", "assets/cer/cer คลิปยาเสพติด.JPEG"],

        role: "ผู้กำกับ และตัดต่อวิดีโอ",
        context: "มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร",
        result: "รางวัลชนะเลิศ",
        technologies: ["Video Production", "Video Editing", "Adobe Premiere Pro"],
        workLinks: [{ label: "คลิปวิดีโอผลงาน", href: "https://youtu.be/AvgdiIXRMXA?si=byC6cBqJOj6lXMOM" }],
        certificateImages: ["assets/cer/cer คลิปยาเสพติด.JPEG"],

        activityPhotos: ["assets/คลิปยาเสพติด/20250604_092401.JPEG", "assets/คลิปยาเสพติด/20250604_145536.JPEG", "assets/คลิปยาเสพติด/IMG_8596.JPG", "assets/คลิปยาเสพติด/IMG_8597.JPG", "assets/cer/cer คลิปยาเสพติด.JPEG"],

        caseStudy: {
          overview: "การประกวดคลิปวิดีโอรณรงค์ต่อต้านยาเสพติด",
          problem: "ต้องสื่อสารประเด็นการต่อต้านยาเสพติดให้เข้าใจง่ายและน่าสนใจภายในรูปแบบคลิปวิดีโอสั้น",
          approach: "รับผิดชอบหลักด้านการวางแผนการผลิต ทำหน้าที่ผู้กำกับ ควบคุมภาพรวมของการถ่ายทำ และตัดต่อวิดีโอให้สอดคล้องกับแนวคิดและเป้าหมายของโครงการ",
          process: "ตัดต่อวิดีโอและประสานงานกับสมาชิกในทีมตั้งแต่เริ่มต้นจนเสร็จสมบูรณ์",
          result: "ได้รับรางวัลชนะเลิศจากการประกวด",
          learning: "พัฒนาทักษะการวางแผนและบริหารจัดการงาน การสื่อสารและประสานงาน การแก้ไขปัญหาเฉพาะหน้า และการใช้เครื่องมือดิจิทัลผลิต/ตัดต่อสื่อ นอกจากนั้นยังได้ทักษะการคิดสร้างสรรค์ การวางแนวคิดและการเล่าเรื่องผ่านสื่อวิดีโอ รวมถึงการทำงานร่วมกับผู้อื่นในทีม"
        }
      },
      {
        slug: "logo-design-competition",
        index: "51",
        title: "ออกแบบโลโก้กระเป๋านักเรียน",
        description: "ได้รับรางวัลชนะเลิศ การประกวดออกแบบโลโก้สำหรับกระเป๋านักเรียนและกระเป๋าเคียงของโรงเรียน",
        category: "graphic-3d",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/ออกแบบโลโก้กระเป๋า/ออกแบบ logo1.png", "assets/ออกแบบโลโก้กระเป๋า/ออกแบบ logo2.png"],

        role: "ผู้ออกแบบ",
        context: "การประกวดออกแบบโลโก้ของโรงเรียน",
        result: "รางวัลชนะเลิศ",
        technologies: ["Adobe Illustrator", "Logo Design"],
        workLinks: [],
        certificateImages: [],
        activityPhotos: ["assets/ออกแบบโลโก้กระเป๋า/ออกแบบ logo1.png", "assets/ออกแบบโลโก้กระเป๋า/ออกแบบ logo2.png"],

        caseStudy: {
          overview: "การประกวดออกแบบโลโก้สำหรับกระเป๋านักเรียนและกระเป๋าเคียงของโรงเรียน",
          problem: "ต้องออกแบบโลโก้ให้สื่อความหมายและเหมาะสมกับการนำไปใช้งานจริงบนกระเป๋า",
          approach: "ใช้ Adobe Illustrator ในการออกแบบและพัฒนาผลงาน ตั้งแต่การคิดแนวคิดและออกแบบองค์ประกอบ",
          process: "ปรับรายละเอียดของโลโก้ให้เหมาะสมกับการนำไปใช้งานจริง",
          result: "ได้รับรางวัลชนะเลิศจากการประกวด",
          learning: "พัฒนาทักษะการออกแบบดิจิทัล ความคิดสร้างสรรค์ การแก้ปัญหา และฝึกเปลี่ยนแนวคิดให้กลายเป็นผลงานที่นำไปประยุกต์ใช้ได้จริง"
        }
      },
      {
        slug: "infographic-lotus-festival",
        index: "52",
        title: "Infographic วันลอยกระทง",
        description: "ได้รับรางวัลชนะเลิศ การประกวดออกแบบ Infographic วันลอยกระทง ภายในโรงเรียนสมุทรสาครบูรณะ",
        category: "graphic-3d",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/infographic loykrathong/infographic loykrathong.png"],

        role: "ผู้ออกแบบ",
        context: "การประกวดออกแบบ Infographic วันลอยกระทง",
        result: "รางวัลชนะเลิศ",
        technologies: ["Adobe Illustrator", "Infographic Design","Canva"],
        workLinks: [],
        certificateImages: [],
        activityPhotos: ["assets/infographic loykrathong/infographic loykrathong.png"],

        caseStudy: {
          overview: "การประกวดออกแบบ Infographic วันลอยกระทง",
          problem: "ต้องออกแบบ Infographic ให้สื่อความหมายและเหมาะสมกับการนำไปใช้งานจริง",
          approach: "ได้ออกแบบ Infographic หัวข้อ 'ลอยกระทง ไม่ลอยขยะ' โดยใข้ Canva ในการออกแบบและพัฒนาผลงาน ตั้งแต่การคิดแนวคิดและออกแบบองค์ประกอบ",
          process: "ปรับรายละเอียดของ Infographic ให้เหมาะสม อ่ายง่าย และสื่อความหมายได้ชัดเจน",
          result: "ได้รับรางวัลชนะเลิศจากการประกวด",
          learning: "ได้พัฒนาทักษะการออกแบบดิจิทัล ความคิดสร้างสรรค์ การแก้ปัญหา และฝึกเปลี่ยนแนวคิดให้กลายเป็นผลงานที่นำไปประยุกต์ใช้ได้จริง"
        }
      },
      {
        slug: "brain-code-camp",
        index: "53",
        title: "Brain Code Camp: ตรวจจับ Cognitive Fatigue จากคลื่นสมอง (EEG)",
        description: "โครงงานที่กำลังพัฒนาในโครงการ Brain Code Camp ใช้ Machine Learning ตรวจจับ cognitive fatigue จากคลื่นสมอง (EEG) โดยอ้างอิงและต่อยอดจากงานวิจัย Yang et al. (2025)",
        category: "projects",
        year: "2026",
        featured: false,
        heroImage: null,
        gallery: ["assets/braincode/A49D64C8-0220-4FD4-9D4D-D6E3FBCAC18E.JPG", "assets/braincode/IMG_2013.jpg", "assets/braincode/IMG_2233.JPG", "assets/braincode/IMG_2634.PNG", "assets/braincode/IMG_2900.JPG", "assets/braincode/IMG_2944.PNG"],

        role: "ผู้เข้าร่วมโครงการ Brain Code Camp — ออกแบบและพัฒนาโปรเจกต์วิจัยส่วนตัว",
        context: "โครงการ Brain Code Camp",
        result: "โครงงานยังอยู่ระหว่างดำเนินการ",
        technologies: ["EEG Signal Processing", "Machine Learning", "Python", "Logistic Regression", "Random Forest", "XGBoost"],
        workLinks: [
          { label: "เว็บไซต์ braincode", href: "https://course2024-braincodecamp.web.app/intro.html" },
          { label: "GitHub Pages Braincode", href: "https://braincode101.github.io/" }
        ],
        certificateImages: [],
        activityPhotos: ["assets/braincode/A49D64C8-0220-4FD4-9D4D-D6E3FBCAC18E.JPG", "assets/braincode/IMG_2013.jpg", "assets/braincode/IMG_2233.JPG", "assets/braincode/IMG_2634.PNG", "assets/braincode/IMG_2900.JPG", "assets/braincode/IMG_2944.PNG"],

        caseStudy: {
          overview: "Brain Code Camp เป็นโครงการที่มุ่งพัฒนาทักษะและความเข้าใจด้านการเขียนโปรแกรมเพื่อทำความเข้าใจความสัมพันธ์ระหว่างพฤติกรรมและสัญญาณสมอง ผ่านการสร้างแบบจำลองทางคณิตศาสตร์และปัญญาประดิษฐ์ (Neuroscience x AI/Deep Learning) จุดเริ่มต้นของโปรเจกต์นี้มาจากความสนใจในเรื่องภาวะหมดไฟ (burnout) และความเครียดสะสม ซึ่งวิธีประเมินที่มีอยู่อย่างแบบสอบถามรายเดือนนั้นช้าเกินไปและไม่แม่นยำ จึงอยากรู้ว่า Machine Learning จะช่วยตรวจจับสัญญาณเหล่านี้ได้ก่อนที่คนจะรู้ตัวไหม",
          problem: "Burnout เป็นคำที่กว้างมากและยากต่อการ label โดยตรง อีกทั้ง dataset ที่มี burnout label โดยตรงก็หาได้ยากมาก จึงปรับโฟกัสมาที่ cognitive fatigue ซึ่งเป็น precursor ของ burnout ที่วัดได้จาก EEG โดยตรง และพบว่างานวิจัย Yang et al. ที่ใช้ dataset เดียวกัน (ds005385, Dortmund Vital Study บน OpenNeuro) ทำเพียง statistical analysis เท่านั้น ยังไม่มีใครนำ ML classifier มาทดสอบว่าจับ pattern เหล่านี้ได้จริงหรือไม่",
          approach: "ต่อยอดจาก Yang et al. โดยตั้งคำถามว่า ถ้า statistical analysis พบว่า EEG มี pattern ต่างกันตาม fatigue และอายุ ML classifier จะจับ pattern เหล่านั้นและทำนายได้ไหม และอายุกับ behavioral data จะช่วยให้แม่นยำขึ้นอีกไหม จึง extract features เดียวกับที่ paper พิสูจน์แล้วว่ามีความหมาย ได้แก่ low alpha power, high alpha power, aperiodic exponent, Fatigue Index และ wPLI connectivity จากนั้นสร้าง 3 model tracks เพื่อเปรียบเทียบ: Model A ใช้ EEG อย่างเดียว, Model B เพิ่ม age group, Model C เพิ่ม synthetic behavioral data โดยแต่ละ track เทรนด้วย Logistic Regression, Random Forest และ XGBoost แล้ววัดผลด้วย F1-Score และ Recall",
          process: "เลือกตัวอย่างจาก dataset ทั้งหมด 608 คน มาใช้ราว 90 คน แบ่งสม่ำเสมอตาม age group (Young 20-34 ปี, Middle 35-50 ปี, Older 51-70 ปี กลุ่มละ 30 คน) แต่ละคนมี 2 recordings คือ pre-task และ post-task รวม 180 samples และวางแผนเปรียบเทียบผลกับ Yang et al. (2025) รวมถึงเปรียบเทียบ Model A vs B vs C กันเอง โดยตั้งเป้า Primary Outcome ไว้ 3 อย่าง: (1) F1-Score และ Recall ของแต่ละ model ในการแยก pre-task vs post-task เป้าหมาย F1 > 0.75 (2) Feature importance ranking ว่าตรงกับที่ Yang et al. พบไหม (3) เปรียบเทียบผลระหว่าง 3 age groups ว่า young classify ได้ดีกว่า older จริงไหม",
          result: "โครงงานยังอยู่ระหว่างดำเนินการ (อยู่ในขั้นตอนเตรียมข้อมูลและออกแบบการทดลอง)",
          learning: "ได้ฝึกอ่านและตีความงานวิจัยทางวิทยาศาสตร์ (scientific paper) การตั้งคำถามวิจัยและออกแบบการทดลองอย่างเป็นระบบ การทำงานกับข้อมูล EEG และ feature engineering เฉพาะทาง รวมถึงการปรึกษาและรับคำแนะนำจากผู้เชี่ยวชาญ (TA) เพื่อปรับขอบเขตโจทย์ให้เป็นไปได้จริง"
        }
      },
      {
        slug: "sketchup-eco-trash-bin",
        index: "54",
        title: "ถังขยะช่วยโลก — การแข่งขันออกแบบ 3D",
        description: "การแข่งขันออกแบบ 3D ด้วย SketchUp ที่วิทยาลัยชุมชนจังหวัดสมุทรสาคร โดยได้โจทย์ให้ออกแบบถังขยะช่วยโลกสำหรับใช้ในโรงเรียน",
        category: "graphic-3d",
        year: "2025",
        featured: false,
        heroImage: null,
        gallery: ["assets/วิทยาลัยชุมชน 3D/IMG_7897.JPG", "assets/วิทยาลัยชุมชน 3D/IMG_7931.JPG", "assets/cer/cer วิทยาลัยชุมชน.png"],

        role: "ผู้ออกแบบ 3D",
        context: "การแข่งขันออกแบบ 3D วิทยาลัยชุมชนจังหวัดสมุทรสาคร",
        result: "ได้รับรางวัลชนะเลิศจากการแข่งขันออกแบบ 3D ด้วย SketchUp",
        technologies: ["SketchUp", "3D Modeling"],
        workLinks: [],
        certificateImages: ["assets/cer/cer วิทยาลัยชุมชน.png"],

        activityPhotos: ["assets/วิทยาลัยชุมชน 3D/IMG_7897.JPG", "assets/วิทยาลัยชุมชน 3D/IMG_7931.JPG", "assets/cer/cer วิทยาลัยชุมชน.png"],

        caseStudy: {
          overview: "การแข่งขันออกแบบ 3D จัดโดยวิทยาลัยชุมชนจังหวัดสมุทรสาคร โดยโจทย์คือการออกแบบถังขยะช่วยโลกสำหรับใช้งานในโรงเรียน ด้วยโปรแกรม SketchUp",
          problem: "ต้องออกแบบถังขยะที่ใช้งานได้จริงในโรงเรียน และสื่อถึงแนวคิดการช่วยรักษาสิ่งแวดล้อม",
          approach: "ใช้โปรแกรม SketchUp ในการออกแบบและสร้างแบบจำลองสามมิติของถังขยะ ตั้งแต่การวางแนวคิดรูปแบบ ไปจนถึงรายละเอียดของชิ้นงาน",
          process: "ปรับแก้แบบจำลองให้เหมาะสมกับการใช้งานจริงในโรงเรียน และสอดคล้องกับโจทย์การแข่งขัน",
          result: "ได้รับรางวัลชนะเลิศจากการแข่งขันออกแบบ 3D ด้วย SketchUp",
          learning: "ได้ฝึกการออกแบบ 3D ด้วยโปรแกรม SketchUp การคิดเชิงออกแบบเพื่อแก้ปัญหาสิ่งแวดล้อม และการนำแนวคิดด้านความยั่งยืนมาประยุกต์ใช้ในงานออกแบบ"
        }
      },
      {
        slug: "infographic-other-works",
        index: "55",
        title: "ผลงาน Infographic อื่น ๆ",
        description: "พัฒนาผลงานออกแบบ Infographic หลากหลายชิ้น เพื่อฝึกฝนเพิ่มเติมนอกเหนือจากงานประกวด",
        category: "graphic-3d",
        year: "[ปี]",
        featured: false,
        heroImage: null,
        gallery: ["assets/infographic ต่าง ๆ/IMG_4638.JPG", "assets/infographic ต่าง ๆ/infographic 2.png", "assets/infographic ต่าง ๆ/infographic microplastic-01.JPEG", "assets/infographic ต่าง ๆ/infographic.png"],

        role: "ผู้ออกแบบ",
        context: "ผลงานส่วนตัว",
        result: "ฝึกทักษะการออกแบบ Infographic ด้วยเครื่องมือต่าง ๆ",
        technologies: ["Adobe Illustrator", "Canva", "Infographic Design"],
        workLinks: [],
        certificateImages: [],
        activityPhotos: ["assets/infographic ต่าง ๆ/IMG_4638.JPG", "assets/infographic ต่าง ๆ/infographic 2.png", "assets/infographic ต่าง ๆ/infographic microplastic-01.JPEG", "assets/infographic ต่าง ๆ/infographic.png"],

        caseStudy: {
          overview: "ได้ฝึกออกแบบ Infographic หลากหลายหัวข้อ เพื่อฝึกการใช้เครื่องมือและพัฒนาทักษะการออกแบบ Infographic ให้มีความชำนาญมากขึ้น",
          problem: "",
          approach: "",
          process: "",
          result: "",
          learning: "พัฒนาทักษะการออกแบบ Infographic การจัดวางข้อมูลให้เข้าใจง่าย และการใช้โปรแกรมออกแบบต่าง ๆ เช่น Adobe Illustrator และ Canva เพื่อสร้างผลงานที่สื่อสารได้อย่างมีประสิทธิภาพ"
        }
      }
    ],

    personalGallery: {
      eyebrow: "รูปภาพ",
      heading: "แกลเลอรี่ของฉัน",
      photos: [
        { image: "assets/คลังรูปภาพและ gallery/IMG_0615.JPG", alt: "", caption: "" },
        { image: "assets/คลังรูปภาพและ gallery/P1518086.JPEG", alt: "", caption: "" },
        { image: "assets/คลังรูปภาพและ gallery/IMG_5522 2.jpg", alt: "", caption: "" },
        { image: "assets/คลังรูปภาพและ gallery/IMG_8147.JPG", alt: "", caption: "" },
        { image: "assets/คลังรูปภาพและ gallery/ITKMITL-OpenHouse-day2-2-106.JPEG", alt: "", caption: "" },
        { image: "assets/คลังรูปภาพและ gallery/P1517965.JPEG", alt: "", caption: "" },
        { image: "assets/คลังรูปภาพและ gallery/IMG_1501 2.JPG", alt: "", caption: "" },
        { image: "assets/คลังรูปภาพและ gallery/P1518106 2.JPEG", alt: "", caption: "" },
        { image: "assets/คลังรูปภาพและ gallery/P1518152.JPEG", alt: "", caption: "" }
      ]
    },

    learned: {
      items: [
        { text: "ชีวิตไม่ได้ใจร้ายกับเราตลอดไปหรอก วันนี้อาจจะยังไม่ใช่วันของเรา แต่มันต้องมีสักวันที่เป็นวันของเราอย่างแน่นอน", tag: "จากหนังสือ 'โตขึ้นจึงรู้ว่า...'" },
        { text: "หากพระอาทิตย์ยังคงส่องแสงในทุกเช้าวันใหม่ นั่นแปลว่าเรายังมีโอกาสเริ่มต้นใหม่เสมอ", tag: "จากหนังสือ 'สัญญานะว่าจะยิ้มให้กับตัวเอง'" },
        { text: "สิ่งที่ฉันเลือกคือสิ่งที่ดีที่สุดสำหรับตอนที่เลือกแล้ว", tag: "จากหนังสือ 'เรื่องท่่แบกไว้เธอจะวางก็ได้นะ'" }
      ]
    },

    about: {
      hero: {
        eyebrow: "เกี่ยวกับฉัน",
        greeting: "สวัสดี ฉันชญานิษฐ์",
        statement: "I like asking questions before writing code.\nฉันสนใจ Programming, Data และ AI\nแต่สิ่งที่สนใจมากกว่าคือการเข้าใจว่า\n<strong>“ปัญหาจริง ๆ คืออะไร และเราจะใช้เทคโนโลยีแก้มันได้อย่างไรบ้าง”</strong>",
        photo: "assets/คลังรูปภาพและ gallery/P1517984.JPEG",
        facts: [
          { label: "ที่อยู่", value: "สมุทรสาคร, ประเทศไทย" },
          { label: "ความสนใจ", value: "AI / ML · เว็บ · วิเคราะห์ข้อมูล" },
          { label: "ตอนนี้กำลัง", value: "เรียนรู้ · สร้าง · สำรวจ" }
        ]
      },
      aLittleAboutMe: {
        eyebrow: "02 — A Little About Me",
        heading: "เกี่ยวกับฉัน",
        photo: "assets/คลังรูปภาพและ gallery/P1517968.JPEG",
        body: "สวัสดี ฉันใบเตย จุดเริ่มต้นของฉันกับเทคโนโลยีเกิดขึ้นจากความสงสัยว่า สิ่งที่เราคิดขึ้นมาในหัวสามารถกลายเป็นสิ่งที่สร้างขึ้นจริงได้หรือไม่ ความสนใจนี้เริ่มชัดเจนขึ้นในช่วงมัธยมต้น จากการเข้าร่วมการแข่งขันการออกแบบสิ่งของเครื่องใช้ด้วยโปรแกรมคอมพิวเตอร์ ทำให้ฉันค้นพบว่า<strong>คอมพิวเตอร์ไม่ได้เป็นเพียงเครื่องมือสำหรับใช้งาน แต่สามารถเป็นเครื่องมือในการสร้างและแก้ปัญหาได้</strong> ตั้งแต่นั้นมา ฉันจึงเริ่มสนใจ Programming, Data Analysis และ AI/ML มากขึ้น โดยเฉพาะการวิเคราะห์ปัญหา แยกปัญหาออกเป็นส่วน ๆ และหาวิธีแก้ปัญหาอย่างเป็นระบบ",
        facts: [
          { label: "ชื่อ", value: "ชญานิษฐ์ ชาญสุทธิกนก (ใบเตย)" },
          { label: "บุคลิกภาพ", value: "ISFJ - ค่อนข้างเงียบ คิดมาก ทะเยอทะยาน รับผิดชอบสูง" },
          { label: "งานอดิเรก", value: "หาสิ่งใหม่ ๆ ทำ, นอน, ฟังเพลง" },
          { label: "เรื่องน่ารู้", value: "รักแมวแต่แมวไม่รัก, ชอบกินช็อกโกแลตและของเปรี้ยว ๆ" }
        ],
        photos: [
          { image: "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0012.JPG", caption: "" },
          { image: "assets/สอวน/IMG_0243.JPG", caption: "" },
          { image: "assets/สอวน/IMG_8409.JPG", caption: "" }
        ]
      },
      journey: {
        eyebrow: "03 — เส้นทางของฉัน",
        heading: "My Journey",
        intro: "ทุกอย่างเริ่มต้นจากความสงสัยและทดลอง",
        steps: [
          "การแข่งขันสร้าง 3D ในช่วงมัธยมต้นทำให้ฉันเริ่มเห็นว่า ความคิดหนึ่งสามารถถูกเปลี่ยนให้กลายเป็นสิ่งที่มองเห็นและใช้งานได้จริง",
          "เมื่อเข้าสู่มัธยมปลาย ฉันเลือกเรียนแผน Math-Computer เพื่อเรียนรู้เทคโนโลยีอย่างจริงจัง และเริ่มค้นพบว่าตัวเองสนุกกับการเขียนโปรแกรม",
          "มีโอกาสได้เข้าค่ายโอลิมปิกวิชาการ (สอวน.) วิชาคอมพิวเตอร์ ทำให้ได้เรียนรู้ด้านการเขียนโปรแกรมอย่างจริงจัง และเป็นจุดเริ่มต้นในการนำไปต่อยอดการเขียนโปรแกรมภาษาอื่น ๆ",
          "สิ่งที่ฉันชอบใน Programming ไม่ใช่แค่การทำให้โค้ดทำงาน แต่คือการวิเคราะห์ว่าโจทย์ต้องการอะไร แบ่งปัญหาอย่างไร และออกแบบวิธีแก้ที่เป็นระบบ",
          "จาก Programming ฉันเริ่มสนใจการเชื่อมโยงระหว่างคณิตศาสตร์ ข้อมูล และเทคโนโลยีมากขึ้น จนเกิดความสนใจใน Data Analysis และ AI/ML"
        ],
        photos: [
          { image: "assets/คลังรูปภาพและ gallery/IMG_9266.JPG", caption: "" },
          { image: "assets/คลังรูปภาพและ gallery/P1518152.JPEG", caption: "" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_1501 2.JPG", caption: "" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_7262.JPG", caption: "" },
          { image: "assets/สอวน/IMG_8528.JPG", caption: "" },
          { image: "assets/สอวน/IMG_0398.JPG", caption: "" },
          { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8057.jpg", caption: "" }
        ]
      },
      educationTimeline: {
        eyebrow: "04 — เส้นทางการศึกษา",
        heading: "ประวัติการศึกษา",
        entries: [
          { stage: "ประถมศึกษา", years: "2012 - 2021", school: "โรงเรียนวันทามารีอา ราชบุรี", track: null, gpax: "4.00", logo: "assets/โลโก้วันทามารีอา.webp", points: [""], photo: "assets/รูปอนุบาล.JPG", photoCaption: "วัยอนุบาล" },
          { stage: "มัธยมต้น", years: "2021 - 2024", school: "โรงเรียนสมุทรสาครบูรณะ", track: "ห้องเรียนพิเศษ SMTE", gpax: "4.00", logo: "assets/โลโก้สมุทรสาครบูรณะ.png", points: [""], photo: "assets/IMG_7595.JPG", photoCaption: "วัยมัธยมต้น" },
          { stage: "มัธยมปลาย", years: "2024 - ปัจจุบัน", school: "โรงเรียนสมุทรสาครบูรณะ", track: "สายการเรียนคณิตศาสตร์ - คอมพิวเตอร์", gpax: "4.00", logo: "assets/โลโก้สมุทรสาครบูรณะ.png", points: [""], photo: "assets/คลังรูปภาพและ gallery/P1517949.JPEG", photoCaption: "วัยมัธยมปลาย" }
        ]
      },
      skills: {
        eyebrow: "05 — ทักษะและเครื่องมือที่มี",
        heading: "สกิลที่ฉันมีและเครื่องมือที่ฉันเคยใช้",
        groups: [
          { label: "Programming", items: [
            { name: "Python", logo: "https://cdn.simpleicons.org/python/fff8ea" }, { name: "C/C++", logo: "https://cdn.simpleicons.org/cplusplus/fff8ea" }, { name: "HTML", logo: "https://cdn.simpleicons.org/html5/fff8ea" }, { name: "CSS/Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/fff8ea" }, { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/fff8ea" }, { name: "React", logo: "https://cdn.simpleicons.org/react/fff8ea" }, { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/fff8ea" }, { name: "PHP", logo: "https://cdn.simpleicons.org/php/fff8ea" }, { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/fff8ea" }, { name: "Chart.js", logo: "https://cdn.simpleicons.org/chartdotjs/fff8ea" }, { name: "Leaflet", logo: "https://cdn.simpleicons.org/leaflet/fff8ea" }, { name: "Streamlit", logo: "https://cdn.simpleicons.org/streamlit/fff8ea" }, { name: "Pygame", logo: null }, { name: "Roblox Studio", logo: "https://cdn.simpleicons.org/roblox/fff8ea" }, { name: "html2canvas", logo: null }
          ] },
          { label: "AI / Machine Learning", items: [
            { name: "Python", logo: "https://cdn.simpleicons.org/python/fff8ea" }, { name: "Scikit-learn", logo: "https://cdn.simpleicons.org/scikitlearn/fff8ea" }, { name: "Pandas", logo: "https://cdn.simpleicons.org/pandas/fff8ea" }, { name: "NumPy", logo: "https://cdn.simpleicons.org/numpy/fff8ea" }, { name: "R", logo: "https://cdn.simpleicons.org/r/fff8ea" }, { name: "RStudio", logo: "https://cdn.simpleicons.org/rstudioide/fff8ea" }, { name: "XGBoost", logo: null }, { name: "MATLAB", logo: null }
          ] },
          { label: "Graphic Design & 3D", items: [
            { name: "Adobe Photoshop", logo: null }, { name: "Adobe Illustrator", logo: null }, { name: "Figma", logo: "https://cdn.simpleicons.org/figma/fff8ea" }, { name: "Blender", logo: "https://cdn.simpleicons.org/blender/fff8ea" }, { name: "SketchUp", logo: "https://cdn.simpleicons.org/sketchup/fff8ea" }, { name: "3Ds Max", logo: null }, { name: "Canva", logo: null }, { name: "Onshape", logo: null }
          ] },
          { label: "Editing", items: [
            { name: "Adobe Premiere Pro", logo: null }, { name: "Adobe After Effects", logo: null }, { name: "DaVinci Resolve", logo: "https://cdn.simpleicons.org/davinciresolve/fff8ea" }
          ] },
          { label: "เครื่องมือ", items: [
            { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/fff8ea" }, { name: "Git", logo: "https://cdn.simpleicons.org/git/fff8ea" }, { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/fff8ea" }
          ] },
          { label: "ทักษะพื้นฐานอื่น ๆ", items: [
            { name: "การสื่อสาร", logo: null }, { name: "การทำงานเป็นทีม", logo: null }, { name: "การแก้ปัญหา", logo: null }, { name: "การคิดวิเคราะห์", logo: null }, { name: "การบริหารเวลา", logo: null }, { name: "ความเป็นผู้นำ", logo: null }
          ] }
        ]
      },
      /* ยังไม่รู้จะใส่อะไรดี — ปิดส่วนนี้ไว้ก่อน (ดู about.html ด้วย)
         จนกว่าจะมีเนื้อหาจริง
      whatIBuild: {
        eyebrow: "06 — สิ่งที่ฉันชอบทำ",
        heading: "งานที่ฉันชอบ สนใจและเคยทำ",
        areas: [
          { label: "Coding/AI", description: "[คำอธิบายสั้น ๆ]", technologies: ["[เทคโนโลยี]", "[เทคโนโลยี]"], categoryHref: "work-coding-ai.html" },
          { label: "Graphic/3D", description: "[คำอธิบายสั้น ๆ]", technologies: ["[เทคโนโลยี]", "[เทคโนโลยี]"], categoryHref: "work-graphic-3d.html" },
          { label: "กิจกรรม/จิตอาสา", description: "[คำอธิบายสั้น ๆ]", technologies: ["[เทคโนโลยี]", "[เทคโนโลยี]"], categoryHref: "work-activity.html" },
          { label: "การอบรม/เรียนเสริม", description: "[คำอธิบายสั้น ๆ]", technologies: ["[เทคโนโลยี]", "[เทคโนโลยี]"], categoryHref: "work-training.html" }
        ]
      }, */
      certifications: {
        eyebrow: "06 — ใบรับรองและผลการทดสอบ",
        heading: "ใบรับรองและผลการทดสอบ",
        items: [
          { title: "สอวน. คอมพิวเตอร์", badge: "ค่าย 2", slug: "posn-computer-camp-2" },
          { title: "CEFR", badge: "B1", slug: "cefr-test" },
          { title: "CU-TEP", badge: "35", slug: "cu-tep-test" },
          { title: "COMPAS-PY1", badge: "ผ่านการทดสอบ", slug: "compas-py1" }
        ]
      },
      beyondCode: {
        eyebrow: "07 — รูปภาพ",
        heading: "คลังรูปภาพของฉัน",
        body: "ความทรงจำและเรื่องราวที่ผ่านมาของฉันในแต่ละช่วงเวลา",
        photos: [
          { image: "assets/3D/IMG_7813.JPG" }, { image: "assets/3D/P1163849.JPEG" }, { image: "assets/3D/P1163988.JPEG" },
          { image: "assets/3D/P1182026.JPEG" }, { image: "assets/3D/Screenshot 2026-09-21 154708.png" }, { image: "assets/3D/Screenshot 2026-09-21 154750.png" },
          { image: "assets/3D/Screenshot 2026-09-21 154842.png" }, { image: "assets/3D/Screenshot 2026-09-21 154925.png" }, { image: "assets/3D/Screenshot 2569-09-21 at 15.45.26.png" },
          { image: "assets/3D/Screenshot 2569-09-21 at 15.45.32.png" }, { image: "assets/3D/Screenshot 2569-09-21 at 15.45.37.png" }, { image: "assets/3D/Screenshot 2569-09-21 at 15.45.44.png" },
          { image: "assets/AI Builders clock drawing/749213776_1051888347590083_6154981981130816501_n_Original.jpg" }, { image: "assets/AI Builders clock drawing/IMG_1784.jpg" }, { image: "assets/AI Builders clock drawing/IMG_1790.JPG" },
          { image: "assets/AI Builders clock drawing/IMG_1793.JPG" }, { image: "assets/AI Builders clock drawing/IMG_1794.JPG" }, { image: "assets/AI Builders clock drawing/IMG_1804.JPG" },
          { image: "assets/AI Builders clock drawing/IMG_1808.JPG" }, { image: "assets/AI Builders clock drawing/IMG_1811.JPG" }, { image: "assets/AI Builders clock drawing/IMG_1892.JPG" },
          { image: "assets/AI Builders clock drawing/IMG_20260719_145336.JPG" }, { image: "assets/IMG_7595.JPG" }, { image: "assets/R you ready for analysys/IMG_2301.JPG" },
          { image: "assets/R you ready for analysys/IMG_2744.JPG" }, { image: "assets/R you ready for analysys/att.3PsxPybp1mkGmdOWBcd_BdOWSke9hJkDJZd4_CW47ao.JPG" }, { image: "assets/R you ready for analysys/att.ncSuxJnTfljcGfQGwes0FeM9Pu3BKIiInQ4f2GfyBdY.JPG" },
          { image: "assets/The Happy Toilet/1.png" }, { image: "assets/The Happy Toilet/2.png" }, { image: "assets/The Happy Toilet/3.png" },
          { image: "assets/The Happy Toilet/4.png" }, { image: "assets/The Happy Toilet/5.png" }, { image: "assets/The Happy Toilet/IMG_6907.JPG" },
          { image: "assets/The Happy Toilet/center.png" }, { image: "assets/The Happy Toilet/perspective toilet.png" }, { image: "assets/The Happy Toilet/perspective toilet2.png" },
          { image: "assets/The Happy Toilet/top.png" }, { image: "assets/The Happy Toilet/สุขีสุขา-01.png" }, { image: "assets/airsync/DSC_2275.JPEG" },
          { image: "assets/airsync/IMG_2470.JPG" }, { image: "assets/airsync/IMG_2471.JPG" }, { image: "assets/airsync/IMG_2472.JPG" },
          { image: "assets/airsync/IMG_2473.JPG" }, { image: "assets/airsync/IMG_2474.JPG" }, { image: "assets/airsync/IMG_2607.JPG" },
          { image: "assets/airsync/IMG_2613.JPG" }, { image: "assets/airsync/IMG_2620.JPG" }, { image: "assets/airsync/IMG_2621.JPG" },
          { image: "assets/airsync/IMG_2622.JPG" }, { image: "assets/airsync/IMG_2624.JPG" }, { image: "assets/airsync/IMG_2625.JPG" },
          { image: "assets/airsync/IMG_6778.JPEG" }, { image: "assets/bangmod hack game/Screenshot 2026-09-05 231705.png" }, { image: "assets/bangmod hack online/att.DpFgd4S9iALc2mD2aB5-LyJkWyKMv5_yMIQnb41MwPc.JPG" },
          { image: "assets/bebras/att.UMB876DbfDAlmYaK9h9V8XhPXEZutbznvMs3rwy_-9U.JPG" }, { image: "assets/bebras/att.lP3UDqa2l2T7wQfF4T7Dlq77e-IXZ31By3W3WfQzGFI.JPG" }, { image: "assets/braincode/A49D64C8-0220-4FD4-9D4D-D6E3FBCAC18E.JPG" },
          { image: "assets/braincode/IMG_2013.jpg" }, { image: "assets/braincode/IMG_2233.JPG" }, { image: "assets/braincode/IMG_2634.PNG" },
          { image: "assets/braincode/IMG_2900.JPG" }, { image: "assets/braincode/IMG_2944.PNG" }, { image: "assets/check skburana/Screenshot 2569-09-21 at 15.36.58.png" },
          { image: "assets/check skburana/Screenshot 2569-09-21 at 15.37.16.png" }, { image: "assets/check skburana/Screenshot 2569-09-21 at 15.37.26.png" }, { image: "assets/check skburana/Screenshot 2569-09-21 at 15.37.38.png" },
          { image: "assets/check skburana/Screenshot 2569-09-21 at 15.37.54.png" }, { image: "assets/check skburana/Screenshot 2569-09-21 at 15.38.39.png" }, { image: "assets/compas/IMG_0581.jpg" },
          { image: "assets/comsci career hub/IMG_6347.JPEG" }, { image: "assets/comsci career hub/IMG_6348.JPEG" }, { image: "assets/comsci career hub/IMG_6466.JPEG" },
          { image: "assets/comsci career hub/IMG_7138.jpg" }, { image: "assets/figma/IMG_7457.JPG" }, { image: "assets/figma/P1500665.JPEG" },
          { image: "assets/figma/P1500679.JPEG" }, { image: "assets/figma/P1500743.JPEG" }, { image: "assets/figma/P1500746.JPEG" },
          { image: "assets/hece จิตอาสาดูแลความสะอาด/IMG_5768.JPG" }, { image: "assets/hece จิตอาสาดูแลความสะอาด/IMG_5769.JPG" }, { image: "assets/hece จิตอาสาดูแลความสะอาด/IMG_5770.JPG" },
          { image: "assets/image processing/P1091357.JPG" }, { image: "assets/image processing/P1091370.JPG" }, { image: "assets/image processing/P1091406.JPG" },
          { image: "assets/image processing/P1091420.JPG" }, { image: "assets/infographic loykrathong/infographic loykrathong.png" }, { image: "assets/infographic ต่าง ๆ/IMG_4638.JPG" },
          { image: "assets/infographic ต่าง ๆ/infographic 2.png" }, { image: "assets/infographic ต่าง ๆ/infographic microplastic-01.JPEG" }, { image: "assets/infographic ต่าง ๆ/infographic.png" },
          { image: "assets/jwc/27BC3C75-3A7E-44B4-8C57-526E67E58CEB.JPG" }, { image: "assets/jwc/DSC00426.JPEG" }, { image: "assets/jwc/DSC06161.JPEG" },
          { image: "assets/jwc/DSC_5345.JPEG" }, { image: "assets/jwc/DSC_8111.JPEG" }, { image: "assets/jwc/F363F9F1-EB53-4C50-B959-F3E326F7BE6E.JPG" },
          { image: "assets/jwc/IMG_0030.JPEG" }, { image: "assets/jwc/IMG_0031.JPEG" }, { image: "assets/jwc/IMG_1013.jpg" },
          { image: "assets/jwc/IMG_1021.jpg" }, { image: "assets/jwc/IMG_1032.jpg" }, { image: "assets/jwc/IMG_1055.jpg" },
          { image: "assets/jwc/IMG_1059.jpg" }, { image: "assets/jwc/IMG_3313.jpg" }, { image: "assets/jwc/IMG_3317.jpg" },
          { image: "assets/jwc/IMG_3322.jpg" }, { image: "assets/jwc/IMG_5407.jpg" }, { image: "assets/jwc/IMG_5610.JPEG" },
          { image: "assets/jwc/IMG_7368.jpg" }, { image: "assets/jwc/IMG_9405.jpg" }, { image: "assets/jwc/IMG_9487.jpg" },
          { image: "assets/jwc/IMG_9494.jpg" }, { image: "assets/mindbloom/Screenshot 2569-09-21 at 15.35.24.png" }, { image: "assets/mindbloom/Screenshot 2569-09-21 at 15.35.29.png" },
          { image: "assets/mindbloom/Screenshot 2569-09-21 at 15.35.44.png" }, { image: "assets/mindbloom/Screenshot 2569-09-21 at 15.36.02.png" }, { image: "assets/mindbloom/mindbloom1.png" },
          { image: "assets/mindbloom/mindbloom2.png" }, { image: "assets/nova data/IMG_2728.jpg" }, { image: "assets/nova data/IMG_2734.PNG" },
          { image: "assets/nova data/IMG_2740.JPG" }, { image: "assets/nova data/IMG_2741.JPG" }, { image: "assets/nova data/IMG_2913.JPG" },
          { image: "assets/nova data/IMG_6096.JPG" }, { image: "assets/nova data/IMG_6100.JPG" }, { image: "assets/nova data/IMG_6110.JPG" },
          { image: "assets/nova data/IMG_6112.JPG" }, { image: "assets/nova data/att.eO_IjoMbIDNcYwTW1A1ERVaOlQYti9Irov-9Cs4rrZs.JPG" }, { image: "assets/onshape/IMG_7709.JPG" },
          { image: "assets/sympopsium skss edu park/IMG_2186.jpg" }, { image: "assets/sympopsium skss edu park/IMG_2194 2.JPG" }, { image: "assets/sympopsium skss edu park/IMG_2197.JPG" },
          { image: "assets/sympopsium skss edu park/IMG_2198.JPG" }, { image: "assets/sympopsium skss edu park/IMG_2199.JPG" }, { image: "assets/sympopsium skss edu park/IMG_2200.JPG" },
          { image: "assets/tutor posn/IMG_1287.JPG" }, { image: "assets/tutor posn/IMG_1288.JPG" }, { image: "assets/tutor posn/IMG_1595.JPG" },
          { image: "assets/tutor posn/IMG_1596.JPG" }, { image: "assets/tutor posn/IMG_1599.JPG" }, { image: "assets/tutor posn/IMG_1600.JPG" },
          { image: "assets/tutor posn/IMG_1604.JPG" }, { image: "assets/tutor posn/IMG_1605.JPG" }, { image: "assets/tutor posn/IMG_20260604_073201.JPEG" },
          { image: "assets/workshop 3D wallpaper/IMG_6497.JPG" }, { image: "assets/zigma camp/DSC02494.JPEG" }, { image: "assets/zigma camp/DSC02495.JPEG" },
          { image: "assets/zigma camp/IMG_6248.jpg" }, { image: "assets/zigma camp/IMG_6296.JPG" }, { image: "assets/zigma camp/IMG_6298.JPG" },
          { image: "assets/zigma camp/IMG_6300.JPG" }, { image: "assets/zigma camp/IMG_6302.JPG" }, { image: "assets/คลังรูปภาพและ gallery/20260827_084842.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/2E81C1F1-5D65-4662-9582-CEADDE44AD6F 2.JPG" }, { image: "assets/คลังรูปภาพและ gallery/47eb294605c2ec77a3628c4c495a669f.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/APAP0189.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/APAP0190.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/AV5A0065.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/AV5A0066.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/AV5A0067.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/C710751F-6B90-400F-8916-A6FB8883274E.JPG" }, { image: "assets/คลังรูปภาพและ gallery/DD006CAC-8C26-4D69-B1E3-33F04A6278B5.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/DSC00123-2.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/DSC02864.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_0615.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_0625.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_0657.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_0909.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_1060.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_1366.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_1371.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_1374.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_1405.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_1501 2.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_1750.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_1796.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_1800.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_2194.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_2662.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_2895.jpg" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_2993.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_3364.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_3832 2.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_3832.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_4660.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_4799.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_4805.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_4987.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_5016.jpg" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_5152.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_5469.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_5522 2.jpg" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_5873.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_6484.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_6578.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_6632.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_7262.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_7688.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_8145.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_8147.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_8777.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_9078.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_9264.JPG" }, { image: "assets/คลังรูปภาพและ gallery/IMG_9266.JPG" },
          { image: "assets/คลังรูปภาพและ gallery/IMG_9431.jpg" }, { image: "assets/คลังรูปภาพและ gallery/IMG_9997.jpg" }, { image: "assets/คลังรูปภาพและ gallery/ITKMITL-OpenHouse-day2-2-106.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1161545.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1233147.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1436648.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1436710.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1436713.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1517931.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1517945.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1517949.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1517952.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1517956.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1517960.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1517965.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1517968.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1517970.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1517979.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1517982.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1517984.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1517989.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1517990.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1518086.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1518097.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1518104.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1518105.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1518106 2.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1518106.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1518116.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1518117 2.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1518117.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1518121.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1518124.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1518128.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1518147.JPEG" }, { image: "assets/คลังรูปภาพและ gallery/P1518150.JPEG" },
          { image: "assets/คลังรูปภาพและ gallery/P1518152.JPEG" }, { image: "assets/คลิปยาเสพติด/20250604_092401.JPEG" }, { image: "assets/คลิปยาเสพติด/20250604_145536.JPEG" },
          { image: "assets/คลิปยาเสพติด/IMG_8596.JPG" }, { image: "assets/คลิปยาเสพติด/IMG_8597.JPG" }, { image: "assets/ซุ้มวันวิทย์/IMG_2039.JPG" },
          { image: "assets/ซุ้มวันวิทย์/IMG_2647.jpg" }, { image: "assets/ซุ้มวันวิทย์/IMG_2976.JPG" }, { image: "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0012.JPG" },
          { image: "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0016.JPG" }, { image: "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0023.JPG" }, { image: "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0045.JPG" },
          { image: "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0047.JPG" }, { image: "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0049.JPG" }, { image: "assets/ซุ้มเปิดบ้านวิชาการ/IMG_0050.JPG" },
          { image: "assets/ซุ้มเปิดบ้านวิชาการ/IMG_9948.JPG" }, { image: "assets/ซุ้มเปิดบ้านวิชาการ/IMG_9977.JPG" }, { image: "assets/ซุ้มเปิดบ้านวิชาการ/P1257566.JPEG" },
          { image: "assets/ซุ้มเปิดบ้านวิชาการ/P1257567.JPEG" }, { image: "assets/ซุ้มเปิดบ้านวิชาการ/ซุ้มเปิดบ้าน 2.png" }, { image: "assets/ซุ้มเปิดบ้านวิชาการ/ซุ้มเปิดบ้าน.png" },
          { image: "assets/ตรวจจับหน้า python/Screenshot 2025-12-27 135915.png" }, { image: "assets/ตรวจจับหน้า python/Screenshot 2025-12-27 145142.png" }, { image: "assets/ตรวจจับหน้า python/Screenshot 2025-12-27 151103.png" },
          { image: "assets/รับสมัครนักเรียน/057e26279e397e04db24151a346b7fa5.JPEG" }, { image: "assets/รับสมัครนักเรียน/IMG_0422.JPG" }, { image: "assets/รับสมัครนักเรียน/IMG_0423.JPG" },
          { image: "assets/รับสมัครนักเรียน/IMG_0427.JPG" }, { image: "assets/รับสมัครนักเรียน/ed5ee3933df90df98faa13b95d9cc726.JPEG" }, { image: "assets/รูปอนุบาล.JPG" },
          { image: "assets/วิทยาลัยชุมชน 3D/IMG_7897.JPG" }, { image: "assets/วิทยาลัยชุมชน 3D/IMG_7931.JPG" }, { image: "assets/ศิลปหัตถกรรม/IMG_6308.JPG" },
          { image: "assets/ศิลปหัตถกรรม/att.wjIn_N53unKIiUodjN4ic16HUI4nEfqeIGGVeWsT6y0.JPG" }, { image: "assets/ศิลปหัตถกรรม/att.zGbbJzv5z60_G7AYmuxaB9kVM2tvZHp4LxnfjBCQ-BM.JPG" }, { image: "assets/สอวน/IMG_0198.JPEG" },
          { image: "assets/สอวน/IMG_0243.JPG" }, { image: "assets/สอวน/IMG_0260.JPG" }, { image: "assets/สอวน/IMG_0325.JPG" },
          { image: "assets/สอวน/IMG_0356.JPG" }, { image: "assets/สอวน/IMG_0388.JPG" }, { image: "assets/สอวน/IMG_0393.JPG" },
          { image: "assets/สอวน/IMG_0396.JPG" }, { image: "assets/สอวน/IMG_0398.JPG" }, { image: "assets/สอวน/IMG_0416.JPEG" },
          { image: "assets/สอวน/IMG_0454.JPEG" }, { image: "assets/สอวน/IMG_3963.JPG" }, { image: "assets/สอวน/IMG_3971.JPG" },
          { image: "assets/สอวน/IMG_4123.JPG" }, { image: "assets/สอวน/IMG_4200.JPG" }, { image: "assets/สอวน/IMG_4201.JPG" },
          { image: "assets/สอวน/IMG_4226.JPG" }, { image: "assets/สอวน/IMG_4228.JPG" }, { image: "assets/สอวน/IMG_4237.JPG" },
          { image: "assets/สอวน/IMG_4238.JPG" }, { image: "assets/สอวน/IMG_4241.JPG" }, { image: "assets/สอวน/IMG_4243.JPG" },
          { image: "assets/สอวน/IMG_4244.JPG" }, { image: "assets/สอวน/IMG_4245.JPG" }, { image: "assets/สอวน/IMG_5831.JPG" }, { image: "assets/สอวน/IMG_5832.JPG" }, { image: "assets/สอวน/IMG_5834.JPG" },
          { image: "assets/สอวน/IMG_5835.JPG" }, { image: "assets/สอวน/IMG_5836.JPG" }, { image: "assets/สอวน/IMG_5837.JPG" },
          { image: "assets/สอวน/IMG_6705.JPG" }, { image: "assets/สอวน/IMG_6706.JPG" }, { image: "assets/สอวน/IMG_6707.JPG" },
          { image: "assets/สอวน/IMG_6709.JPG" }, { image: "assets/สอวน/IMG_6712.JPG" }, { image: "assets/สอวน/IMG_8409.JPG" },
          { image: "assets/สอวน/IMG_8413.JPG" }, { image: "assets/สอวน/IMG_8430.JPG" }, { image: "assets/สอวน/IMG_8434.JPG" },
          { image: "assets/สอวน/IMG_8456.JPG" }, { image: "assets/สอวน/IMG_8471.JPG" }, { image: "assets/สอวน/IMG_8478.JPG" },
          { image: "assets/สอวน/IMG_8510.JPG" }, { image: "assets/สอวน/IMG_8513.JPG" }, { image: "assets/สอวน/IMG_8519.JPG" },
          { image: "assets/สอวน/IMG_8524.JPG" }, { image: "assets/สอวน/IMG_8527.JPG" }, { image: "assets/สอวน/IMG_8528.JPG" },
          { image: "assets/สอวน/IMG_8529.JPG" }, { image: "assets/สอวน/IMG_8536.JPG" }, { image: "assets/สอวน/IMG_8561.JPG" },
          { image: "assets/สอวน/IMG_8570.JPG" }, { image: "assets/สอวน/IMG_8573.JPG" }, { image: "assets/หมากฮอส/0A9A5396.JPEG" },
          { image: "assets/หมากฮอส/0A9A6532.JPEG" }, { image: "assets/หมากฮอส/0A9A6567.JPEG" }, { image: "assets/หมากฮอส/0A9A6578.JPEG" },
          { image: "assets/หมากฮอส/1000007143.JPEG" }, { image: "assets/หมากฮอส/1966_0.JPEG" }, { image: "assets/หมากฮอส/IMG_4552.JPG" },
          { image: "assets/หมากฮอส/IMG_8880.jpg" }, { image: "assets/หมากฮอส/IMG_8988.jpg" }, { image: "assets/หมากฮอส/IMG_8991.JPG" },
          { image: "assets/หมากฮอส/P1063659.JPG" }, { image: "assets/หมากฮอส/P1063669.JPG" }, { image: "assets/หมากฮอส/P1335489.JPEG" },
          { image: "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (-1).png" }, { image: "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (1).png" }, { image: "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (2).png" },
          { image: "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (3).png" }, { image: "assets/ห้องวิทย์ blender/Chayanit-Science laboratory (4).png" }, { image: "assets/อบรม data science/20250208_130429.JPEG" },
          { image: "assets/อบรม data science/20250208_133727.JPEG" }, { image: "assets/อบรม data science/IMG_6429.JPG" }, { image: "assets/อบรมโดรน/IMG_7714.jpg" },
          { image: "assets/อบรมโดรน/IMG_7720.jpg" }, { image: "assets/อบรมโดรน/IMG_7731.JPG" }, { image: "assets/อบรมโดรน/IMG_7732.JPG" },
          { image: "assets/อบรมโดรน/IMG_7733.JPG" }, { image: "assets/ออกแบบโลโก้กระเป๋า/ออกแบบ logo1.png" }, { image: "assets/ออกแบบโลโก้กระเป๋า/ออกแบบ logo2.png" },
          { image: "assets/อัจฉริยะภาพคณิต/Screenshot 2026-09-05 231940.png" }, { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_2280.JPG" }, { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_2284.JPG" },
          { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_2298.JPG" }, { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8057.jpg" }, { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8060.JPG" },
          { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8074.JPG" }, { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_8076.JPG" }, { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9217.jpg" },
          { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9218.jpg" }, { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9220.jpg" }, { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9221.jpg" },
          { image: "assets/เขียนโปรแกรม เปิดบ้านศิลปากร/IMG_9230.jpg" }, { image: "assets/เพชรชัยพฤกษ์/0A9A9566.JPEG" }, { image: "assets/เพชรชัยพฤกษ์/0A9A9567.JPEG" },
          { image: "assets/เพชรชัยพฤกษ์/0A9A9570.JPEG" }, { image: "assets/เพชรชัยพฤกษ์/IMG_0003.jpg" }, { image: "assets/เพชรชัยพฤกษ์/P1092401.JPEG" },
          { image: "assets/เพชรชัยพฤกษ์/P1468173.JPEG" }, { image: "assets/เพชรชัยพฤกษ์/P1468176.JPEG" }, { image: "assets/แห่เจ้าพ่อ/0A9A8879.JPEG" },
          { image: "assets/แห่เจ้าพ่อ/AIM_0216.JPEG" }, { image: "assets/แห่เจ้าพ่อ/IMG_1255.jpg" }, { image: "assets/แห่เจ้าพ่อ/IMG_1257.jpg" },
          { image: "assets/แห่เจ้าพ่อ/IMG_1323.JPG" }, { image: "assets/แห่เจ้าพ่อ/IMG_1501.JPG" }, { image: "assets/แห่เจ้าพ่อ/IMG_7097.JPG" }
        ]
      },
      currently: {
        eyebrow: "08 — กำลังทำอะไรอยู่",
        heading: "สิ่งที่กำลังทำอยู่ตอนนี้",
        items: [
          { label: "กำลังเรียนรู้", value: "การพูดในที่สาธารณะ และ Deep Learning" },
          { label: "กำลังทำ", value: "พัฒนาทักษะด้าน Coding&AI และทักษะการสื่อสาร" },
          { label: "กำลังสนใจ", value: "Cybersecurity, Computer Engineering, AI" }
        ]
      },
      achievements: {
        eyebrow: "08 — ความสำเร็จ",
        heading: "[หัวข้อความสำเร็จ]",
        items: [
          {
            title: "ผ่านการอบรมค่ายโอลิมปิกวิชาการ (สอวน.) ค่าย 2 ในวิชาคอมพิวเตอร์",
            description: "การได้มีโอกาสเข้าร่วมค่ายโอลิมปิกวิชาการ สอวน. ในสาขาวิชาคอมพิวเตอร์ ศูนย์มหาวิทยาลัยศิลปากร เป็นโอกาสที่ดีที่ได้เรียนรู้ทักษะกระบวนการคิดเชิงตรรกะอย่างเป็นขั้นตอน และเป็นจุดเริ่มต้นในการนำไปต่อยอดในการเขียนโปรแกรมภาษาอื่น ๆ อีกด้วย ได้พัฒนาทักษะออกแบบและสร้าง Flowchart เพื่อสื่อสารลำดับขั้นของการทำงาน และการเขียนโปรแกรมด้วยภาษาต่าง ๆ เช่น C และ C++ นอกจากนี้ ยังได้ศึกษาอัลกอริทึมทางคอมพิวเตอร์ที่สำคัญ เช่น Binary Search, Merge Sort, Decision Tree, BFS, DFS และ Dijkstra's Algorithm รวมไปถึงการจัดการกับโครงสร้างข้อมูลต่าง ๆ อย่าง Array, Linked List, Stack, Queue, Tree และกราฟ นอกจากความรู้แล้ว ยังได้ประสบการณ์การจัดการตนเอง ความตรงต่อเวลา และการอยู่ร่วมกับผู้อื่นตลอดระยะเวลาการอยู่ค่าย อีกทั้งยังได้เพื่อนใหม่ ๆ อีกด้วย"
          },
          {
            title: "ผ่านการทดสอบ COMPAS-PY1 จัดโดยคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
            description: "ได้เข้าร่วมสอบวัดระดับความสามารถด้านการเขียนโปรแกรมขั้นพื้นฐานด้วยภาษา Python การทดสอบนี้ทำให้ได้ประเมินและพัฒนาทักษะด้าน Programming การคิดเชิงตรรกะ และการวิเคราะห์เพื่อแก้ปัญหาอย่างเป็นระบบ"
          },
          {
            title: "ผ่านการทดสอบวัดระดับภาษาอังกฤษ CEFR ระดับ B1 (Intermediate)",
            description: "เข้าร่วมการทดสอบวัดระดับความสามารถทางภาษาอังกฤษตามกรอบมาตรฐาน CEFR (Common European Framework of Reference for Languages) และได้รับผลการประเมินอยู่ในระดับ B1 (Intermediate) ซึ่งสะท้อนถึงความสามารถในการใช้ภาษาอังกฤษเพื่อสื่อสารในสถานการณ์ทั่วไปและทำความเข้าใจเนื้อหาที่เกี่ยวข้องกับชีวิตประจำวัน การสอบครั้งนี้ช่วยให้ได้ประเมินระดับความสามารถทางภาษาอังกฤษของตนเอง และตระหนักถึงแนวทางในการพัฒนาทักษะภาษาอังกฤษให้ดียิ่งขึ้น"
          },
          {
            title: "เข้าร่วมการทดสอบวัดระดับภาษาอังกฤษ CU-TEP จัดโดยจุฬาลงกรณ์มหาวิทยาลัย",
            description: "เข้าร่วมการทดสอบวัดระดับความสามารถทางภาษาอังกฤษ CU-TEP (Chulalongkorn University Test of English Proficiency) จัดโดยศูนย์ทดสอบทางวิชาการแห่งจุฬาลงกรณ์มหาวิทยาลัย เพื่อประเมินทักษะภาษาอังกฤษด้านการฟัง การอ่าน และการเขียนตามรูปแบบการทดสอบที่กำหนด การสอบครั้งนี้ช่วยให้ได้ประเมินความสามารถทางภาษาอังกฤษของตนเอง ฝึกฝนการใช้ภาษาอย่างเป็นระบบ และนำผลการทดสอบไปใช้เป็นแนวทางในการพัฒนาทักษะภาษาอังกฤษต่อไป"
          },
          {
            title: "รางวัลชนะเลิศ การแข่งขัน Nova Data: Ignite Your Insight Galaxy",
            description: "ได้เข้าร่วมการแข่งขันการแก้ปัญหาด้านวิทยาการข้อมูล “Nova Data: Ignite your insight galaxy” ในงาน IT Ladkrabang Open House 2026 ซึ่งได้รับรางวัลชนะเลิศ โดยการแข่งขันเริ่มต้นจากการได้รับข้อมูลจำนวนมากเกี่ยวกับธุรกิจจำหน่ายรถยนต์ และมีโจทย์ให้วิเคราะห์ข้อมูลเพื่อค้นหาปัจจัยที่ส่งผลต่อธุรกิจ รวมถึงเสนอแนวทางที่เหมาะสมในการพัฒนาธุรกิจให้สามารถสร้างรายได้และเติบโตได้มากขึ้น ในการแข่งขัน ได้นำกระบวนการด้านวิทยาการข้อมูลมาใช้ในการจัดการและวิเคราะห์ข้อมูล ตั้งแต่การทำความเข้าใจข้อมูล การค้นหารูปแบบและความสัมพันธ์ของข้อมูล ไปจนถึงการประยุกต์ใช้ Machine Learning เพื่อช่วยวิเคราะห์และตอบโจทย์ทางธุรกิจ สิ่งที่ท้าทายคือการตีความผลลัพธ์ที่ได้และเปลี่ยนข้อมูลเหล่านั้นให้กลายเป็นข้อเสนอที่สามารถนำไปใช้ในการตัดสินใจทางธุรกิจได้จริง ประสบการณ์ครั้งนี้ทำให้เห็นว่าข้อมูลที่มีอยู่จำนวนมากสามารถกลายเป็นเครื่องมือสำคัญในการตัดสินใจได้ หากสามารถตั้งคำถาม วิเคราะห์ข้อมูลอย่างเหมาะสม และเชื่อมโยงผลลัพธ์กลับไปยังปัญหาที่ต้องการแก้ไขได้ การได้ทำงานกับโจทย์ที่ไม่มีคำตอบสำเร็จรูปและต้องอาศัยทั้งการวิเคราะห์ การทดลอง และการตัดสินใจภายใต้เวลาที่จำกัด ทำให้พบว่าตนเองมีความชอบในกระบวนการเปลี่ยนข้อมูลให้กลายเป็นความเข้าใจ และนำความเข้าใจนั้นไปสร้างแนวทางแก้ปัญหาที่มีความหมาย"
          },
          {
            title: "รางวัลรองชนะเลิศอันดับที่ 1 การแข่งขัน R You Ready for Data Analytics",
            description: "ได้รับรางวัลรองชนะเลิศอันดับที่ 1 จากการแข่งขัน “R You Ready for Data Analytics” ในกิจกรรมสัปดาห์วิทยาศาสตร์และเปิดบ้านมหาวิทยาลัยศิลปากร โดยได้เรียนรู้พื้นฐานการวิเคราะห์ข้อมูลด้วยภาษา R และโปรแกรม RStudio พร้อมนำความรู้ที่ได้มาประยุกต์ใช้ในการแข่งขันเพื่อวิเคราะห์และตีความข้อมูล แก้โจทย์ภายใต้เวลาที่กำหนด ประสบการณ์ครั้งนี้ทำให้ได้พัฒนาทักษะด้าน Data Analytics การคิดวิเคราะห์อย่างเป็นระบบ และการเลือกใช้เครื่องมือทางโปรแกรมมิ่งเพื่อจัดการกับข้อมูล เช่น Python, Pandas และ NumPy เพื่อจัดเตรียม วิเคราะห์ และค้นหารูปแบบที่น่าสนใจจากข้อมูล"
          },
          {
            title: "รางวัลชมเชย การแข่งขันเขียนโปรแกรมคอมพิวเตอร์ มหาวิทยาลัยศิลปากร",
            description: "ได้รับรางวัลชมเชย การแข่งขันเขียนโปรแกรมคอมพิวเตอร์ ในงานสัปดาห์วิทยาศาสตร์มหาวิทยาลัยศิลปากร โดยได้พัฒนาทักษะการเขียนโปรแกรมและการคิดวิเคราะห์เชิงตรรกะ ผ่านการแก้โจทย์ปัญหาด้วยการเขียนโปรแกรมภายใต้เวลาที่กำหนด รวมถึงได้ฝึกการวิเคราะห์โจทย์ วางแผนขั้นตอนการแก้ปัญหา และเลือกใช้แนวทางที่เหมาะสมในการเขียนโปรแกรม"
          },
          {
            title: "รางวัล Best of School การทดสอบ Bebras Thailand และผ่านเข้ารอบชิงทุนระดับประเทศ",
            description: "ได้รับรางวัล Best of School จากการทดสอบทักษะการคิดเชิงคำนวณและวิทยาการคอมพิวเตอร์ Bebras Thailand และผ่านเข้าสู่การแข่งขันรอบชิงทุนการศึกษาระดับประเทศ การเข้าร่วมกิจกรรมครั้งนี้ทำให้ได้ฝึกการคิดวิเคราะห์และการแก้ปัญหาอย่างเป็นระบบ โดยต้องพิจารณาเงื่อนไขของโจทย์ วิเคราะห์ข้อมูล และวางลำดับขั้นตอนเพื่อหาวิธีแก้ปัญหาที่เหมาะสม ส่งผลให้พัฒนาทักษะการคิดเชิงตรรกะ การคิดอย่างเป็นขั้นตอน และการประยุกต์ใช้แนวคิดทางคอมพิวเตอร์ในการแก้ไขปัญหา"
          },
          {
            title: "ผ่านการคัดเลือกข้อเสนอโครงงานรอบแรกทั่วประเทศ Bangmod Hackathon หัวข้อ Game Education",
            description: "เป็น 1 ใน 50 ทีมที่ผ่านการคัดเลือกข้อเสนอโครงงานรอบแรกจากทั่วประเทศ รายการ Bangmod Hackathon หัวข้อ Game Education ได้เสนอพัฒนาเกมเพื่อการศึกษา Make It Up บนแพลตฟอร์ม Roblox สำหรับเยาวชนอายุ 10–18 ปี เพื่อส่งเสริมทักษะการตัดสินใจ การวางแผน และการบริหารชีวิต ผ่านระบบจำลองสถานการณ์ที่ผู้เล่นต้องจัดการเวลา เงิน พลังงาน ความเครียด และการเรียนรู้ภายใต้ข้อจำกัดต่าง ๆ โดยออกแบบตามแนวคิด Game-Based Learning และ LADDER Model เพื่อสร้างประสบการณ์การเรียนรู้ที่สนุก มีส่วนร่วม และสามารถพัฒนาทักษะการคิดเชิงระบบได้อย่างเป็นรูปธรรม"
          },
          {
            title: "เข้าร่วมการแข่งขัน IT CLASH: The Battle of IT – Coding Track",
            description: "เข้าร่วมการแข่งขัน IT CLASH: The Battle of IT – Coding Track จัดโดยคณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง โดยได้เข้าร่วมการแข่งขันในรอบแรก ซึ่งเป็นการทดสอบทักษะการเขียนโปรแกรมและการแก้โจทย์ปัญหา การแข่งขันช่วยฝึกการวิเคราะห์โจทย์ แยกปัญหาออกเป็นขั้นตอน ออกแบบแนวทางการแก้ปัญหา และเขียนโปรแกรมด้วยภาษา Python ภายใต้ข้อจำกัดด้านเวลา ทำให้พัฒนาทักษะการคิดเชิงตรรกะและการแก้ปัญหาอย่างเป็นระบบ"
          },
          {
            title: "เข้าร่วมการแข่งขัน Bangmod Hackathon รอบคัดเลือกออนไลน์",
            description: "เข้าร่วมการแข่งขัน Bangmod Hackathon ในรอบคัดเลือกออนไลน์ โดยทำงานร่วมกับทีมเพื่อวิเคราะห์โจทย์ หาแนวทางการแก้ปัญหา และประยุกต์ใช้เทคโนโลยีเพื่อพัฒนาผลงานภายใต้เวลาที่กำหนด ได้ฝึกทักษะการคิดเชิงระบบ การแก้ปัญหา การทำงานเป็นทีม และการนำความรู้ด้านการเขียนโปรแกรมมาประยุกต์ใช้กับโจทย์จริง"
          },
          {
            title: "เข้าร่วมการแข่งขัน Hack The Scammer CTF 2025",
            description: "เข้าร่วมการแข่งขัน Hack The Scammer CTF 2025 จัดโดยสำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ (สกมช.) โดยเข้าร่วมการแข่งขันในรอบแรก ซึ่งเป็นการแข่งขันในรูปแบบ Capture The Flag (CTF) ที่ท้าทายให้ผู้เข้าแข่งขันวิเคราะห์และแก้โจทย์ด้านความมั่นคงปลอดภัยไซเบอร์ ได้ฝึกทักษะการคิดวิเคราะห์ การค้นหาจุดผิดปกติ การแก้ปัญหาอย่างเป็นขั้นตอน และการประยุกต์ใช้ความรู้ด้าน Cybersecurity ภายใต้ข้อจำกัดด้านเวลา"
          },
          {
            title: "รางวัลชนะเลิศ การแข่งขันอัจฉริยภาพทางคณิตศาสตร์",
            description: "ได้รับรางวัลชนะเลิศ การแข่งขันอัจฉริยภาพทางคณิตศาสตร์ ระดับชั้น ม.6 การแข่งขันภายในโรงเรียน ได้ฝึกทักษะการคิดวิเคราะห์และการแก้ปัญหาทางคณิตศาสตร์ผ่านโจทย์ที่ต้องอาศัยการใช้เหตุผล การมองหาความสัมพันธ์ของข้อมูล และการเลือกวิธีการแก้ปัญหาที่เหมาะสมภายใต้เวลาที่กำหนด ประสบการณ์นี้ช่วยพัฒนาการคิดอย่างเป็นระบบและการวิเคราะห์ปัญหาอย่างมีขั้นตอน ซึ่งเป็นทักษะที่สามารถต่อยอดสู่การเขียนโปรแกรม การวิเคราะห์ข้อมูล และการแก้ปัญหาทางด้านคอมพิวเตอร์ได้"
          },
          {
            title: "รางวัล “เพชรชัยพฤกษ์”",
            description: "เป็นรางวัลที่โรงเรียนมอบให้กับนักเรียนที่สร้างชื่อเสียงและคุณประโยชน์ให้กับโรงเรียน ได้รับรางวัลนี้เนื่องจากผ่านการอบรม สอวน. ค่าย 2 วิชาคอมพิวเตอร์"
          },
          {
            title: "รางวัลเหรียญทองชนะเลิศ การแข่งขันศิลปหัตถกรรม ระดับเขตพื้นที่การศึกษา (ออกแบบสิ่งของเครื่องใช้ด้วยโปรแกรมคอมพิวเตอร์ ม.4–ม.6)",
            description: "ได้ฝึกการออกแบบและสร้างแบบจำลองสามมิติ (3D Modeling) ด้วยโปรแกรม Blender โดยเริ่มตั้งแต่การวิเคราะห์โจทย์ วางแนวคิดและรูปแบบของสิ่งของเครื่องใช้ ไปจนถึงการสร้างและปรับแก้แบบจำลองให้มีความเหมาะสมและสอดคล้องกับโจทย์ที่กำหนด การแข่งขันทำให้ได้พัฒนาทักษะการใช้ซอฟต์แวร์ด้านการสร้างสรรค์งานดิจิทัล ควบคู่กับการคิดอย่างเป็นระบบ การแก้ไขปัญหา และการใส่ใจในรายละเอียด ประสบการณ์นี้ทำให้เห็นว่าความรู้ด้านคอมพิวเตอร์สามารถนำมาใช้เปลี่ยนแนวคิดให้กลายเป็นผลงานดิจิทัลที่เป็นรูปธรรม และเป็นอีกหนึ่งจุดเริ่มต้นที่ทำให้สนใจศึกษาต่อด้านเทคโนโลยีดิจิทัลและคอมพิวเตอร์"
          }
        ]
      },
      cta: { heading: "มาร่วมพูดคุยกัน", label: "ติดต่อฉัน", href: "contact.html" }
    },

    contact: {
      heading: "เริ่มเรียนรู้สิ่งใหม่ ๆ ด้วยกัน",
      body: "",
      cta: { label: "ติดต่อฉัน", href: "contact.html" },
      social: [
        { label: "GitHub", href: "https://github.com/Chayanit-ch" },
        { label: "Facebook", href: "https://web.facebook.com/chayanit.chansuttikanok/" },
        { label: "Instagram", href: "https://www.instagram.com/chayatoeyy/" },
        { label: "Email", href: "mailto:chayatoey.y@gmail.com" }
      ],
      copyright: "© 2026 Chayanit Chansuttikanok"
    },

    contactPage: {
      hero: {
        eyebrow: "ติดต่อ",
        headingLines: ["เรื่องราวไม่จำเป็น", "ต้องจบ", "ลงแค่นี้"],
        sub: "มาเริ่มบทต่อไปด้วยกัน",
      },
      sayHello: {
        heading: "มาพูดคุยกัน",
        body: "ฉันพร้อมเรียนรู้สิ่งใหม่ ๆ อยู่เสมอ",
        photo: "assets/คลังรูปภาพและ gallery/P1517979.JPEG",
        emailLabel: "อีเมล",
        email: "chayatoey.y@gmail.com",
        availabilityLabel: "เปิดรับโอกาสใหม่อยู่",
        availabilityBody: "ยินดีพูดคุยเกี่ยวกับโปรเจกต์ การแข่งขัน หรือความร่วมมือใหม่ ๆ",
        elsewhereLabel: "ช่องทางอื่น ๆ"
      },
      finalCta: {
        heading: "ยังไม่พร้อมทักทายใช่ไหม?",
        body: "ไม่เป็นไร ไปดูผลงานที่ฉันทำมาก่อนได้นะ",
        label: "ดูผลงานของฉัน →",
        href: "work-projects.html"
      }
    }
  }
};
