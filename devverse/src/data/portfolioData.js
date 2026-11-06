/* =======================================================
   portfolioData.js — Single Source of Truth for DEVVERSE
   Verified Data Only — Space Galaxy Edition
   ======================================================= */

export const personalData = {
  name: "Udbhav Singh Chouhan",
  title: "Full-Stack Web Developer",
  college: "Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore",
  degree: "B.Tech Computer Science and Engineering",
  duration: "2024–2028",
  semester: "5th Semester",
  cgpa: "9.2",
  leetcodeProblems: "150+",
  email: "udbhavsinhg2081@gmail.com",
  location: "Indore, Madhya Pradesh, India",
  tagline: "Building digital experiences, one line of code at a time.",
  heroSupportingText:
    "Exploring the universe of web development through creative ideas, powerful backend systems and modern web technologies.",
  introduction:
    "I am a Computer Science and Engineering student and Full-Stack Web Developer passionate about building practical, scalable web applications. I work primarily with JavaScript, Node.js, Express.js and MongoDB, and enjoy developing applications involving authentication, REST APIs, database integration and real-world problem solving. I am currently expanding my frontend skills by learning React.js.",
  aboutText:
    "I am a Computer Science student with a strong interest in full-stack web development. I enjoy transforming ideas into functional applications and understanding how frontend interfaces connect with backend systems and databases.",
  resumePath: "/resume/Udbhav_Resume.pdf",
  socials: {
    github: "https://github.com/udbhavsingh2081-arch",
    linkedin: "https://linkedin.com/in/udbhav-singh-cse",
    leetcode: "https://leetcode.com/u/Udbhav_singh_chouhan/",
  },
};

export const missionCards = [
  {
    title: "Backend Development",
    desc: "Architecting scalable RESTful APIs, secure session management, and robust database models using Node.js, Express, and MongoDB.",
    icon: "Server",
  },
  {
    title: "Problem Solving",
    desc: "150+ LeetCode problems solved with a disciplined focus on Data Structures, Algorithms, time-space efficiency, and core CS fundamentals.",
    icon: "Brain",
  },
  {
    title: "Full-Stack Missions",
    desc: "End-to-end web deployment experience spanning role-based access control, file storage integration, and responsive MVC architectures.",
    icon: "Rocket",
  },
];

export const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code2",
    skills: ["JavaScript", "Java", "C++", "C"],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: "Layout",
    skills: ["HTML5", "CSS3", "EJS", "Bootstrap", "Responsive Design"],
  },
  {
    id: "backend",
    title: "Backend Core",
    icon: "Server",
    skills: ["Node.js", "Express.js", "REST APIs", "Server-side Logic"],
  },
  {
    id: "database",
    title: "Database Systems",
    icon: "Database",
    skills: ["MongoDB", "Mongoose ODM"],
  },
  {
    id: "concepts",
    title: "Core Computer Science",
    icon: "Cpu",
    skills: [
      "OOP",
      "DSA",
      "MVC Architecture",
      "CRUD Operations",
      "Authentication",
      "Authorization",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    id: "tools",
    title: "Developer Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    id: "deployment",
    title: "Deployment Platforms",
    icon: "Cloud",
    skills: ["Render", "Vercel", "Netlify", "PieHost"],
  },
  {
    id: "learning",
    title: "Currently Learning",
    icon: "Sparkles",
    isLearning: true,
    skills: ["React.js", "Component Architecture", "Hooks & State"],
  },
];

export const projects = [
  {
    id: "talenttrack",
    projectNumber: "PROJECT 01",
    missionCode: "PRJ-01",
    name: "TalentTrack",
    category: "Recruitment Management / Applicant Tracking System",
    liveUrl: "https://talenttrack.pie.host/",
    githubUrl: "#", // confirmed on release
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Bootstrap",
      "Passport.js",
      "Joi",
    ],
    description:
      "TalentTrack is a recruitment management platform designed to connect students and recruiters through a centralized system. It provides role-based functionality for students, recruiters and administrators.",
    problem:
      "Campus recruitment and job application tracking often suffer from scattered communication channels, inefficient resume handling, and lack of role-specific workflows for candidates and recruiters.",
    objective:
      "Engineer a centralized, full-stack recruitment portal providing authenticated role-based access, automated application status tracking, and structured resume ingestion.",
    techChoices:
      "Engineered with Node.js and Express.js using standard Model-View-Controller (MVC) architecture. Implemented Passport.js for session authentication and Joi for strict runtime schema validation of inputs before database commits.",
    features: [
      "Student, recruiter and admin roles with dedicated authorization",
      "Role-based access control (RBAC) & user authentication",
      "Student profile registration and candidate management",
      "Recruiter profile & company details administration",
      "Job opening posting, filtering, and application tracking",
      "Recruiter applicant dashboard with shortlist/reject workflows",
      "Secure resume uploads and profile document handling",
      "MongoDB database integration with schema validation",
      "Input validation powered by Joi schemas",
      "Clean MVC application architecture",
    ],
    learnings: [
      "Designing multi-role authorization hierarchies with Passport.js",
      "Structuring relational document references in MongoDB via Mongoose",
      "Enforcing strict input validation schemas to prevent malicious payloads",
      "Deploying and managing production server instances on PieHost",
    ],
    highlights: ["Centralized Recruitment", "Role-Based Access", "Live on PieHost"],
    status: "PRODUCTION ACTIVE",
  },
  {
    id: "stayverse",
    projectNumber: "PROJECT 02",
    missionCode: "PRJ-02",
    name: "StayVerse",
    category: "Accommodation Listing Platform",
    liveUrl: "https://stay-verse-h1rd.onrender.com/listings",
    githubUrl: "https://github.com/udbhavsingh2081-arch",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Bootstrap",
      "Passport.js",
      "Cloudinary",
      "Multer",
      "Joi",
    ],
    description:
      "StayVerse is an Airbnb-inspired accommodation platform where users can explore property listings, create their own listings and manage accommodation information.",
    problem:
      "Building a reliable accommodation platform requires handling complex media pipelines, dynamic search queries, interactive maps, and atomic CRUD operations with proper authorization.",
    objective:
      "Create an end-to-end marketplace for accommodation listings with authenticated user listings, cloud-hosted property photography, geolocation maps, and review systems.",
    techChoices:
      "Utilized Multer and Cloudinary API for high-resolution image upload pipeline. Integrated Mapbox/Leaflet coordinates for spatial property mapping, combined with MongoDB geo-queries and Joi sanitization.",
    features: [
      "User signup, login, and session authentication using Passport.js",
      "Full property listing CRUD operations (Create, Read, Update, Delete)",
      "High-resolution image uploads via Multer and Cloudinary storage",
      "Dynamic search and category-based accommodation filters",
      "Comprehensive property listing details with pricing and reviews",
      "Map integration for geolocation and property coordinates",
      "Session management and flash notifications for user feedback",
      "Robust input validation using Joi",
      "Fully responsive mobile and desktop layout",
    ],
    learnings: [
      "Architecting multipart form data and third-party media storage pipelines",
      "Integrating geolocation coordinates with interactive map rendering",
      "Implementing optimistic flash messaging and error-handling middlewares",
      "Configuring continuous deployment and environment variable security on Render",
    ],
    highlights: ["Cloudinary Storage", "Map Integration", "Live on Render"],
    status: "PRODUCTION ACTIVE",
  },
];

export const educationHistory = [
  {
    id: "btech",
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore",
    duration: "2024–2028",
    result: "CGPA 9.2",
    status: "In Progress · 5th Semester",
    orbitLevel: "Deep Space Station",
  },
  {
    id: "class12",
    degree: "Class 12th (Higher Secondary)",
    institution: "St. Joseph School, Indore",
    board: "CBSE",
    duration: "2024",
    result: "80%",
    orbitLevel: "Orbital Tier 2",
  },
  {
    id: "class10",
    degree: "Class 10th (Secondary)",
    institution: "St. Joseph School, Indore",
    board: "CBSE",
    duration: "2022",
    result: "80%",
    orbitLevel: "Orbital Tier 1",
  },
];

export const certificates = [
  {
    id: "nptel-java",
    name: "Java Programming",
    issuer: "NPTEL",
    score: "90%",
    type: "Certified",
  },
  {
    id: "nptel-dbms",
    name: "Database Management System",
    issuer: "NPTEL",
    score: "68%",
    details: "8 weeks · July–September 2026",
    type: "Certified",
  },
  {
    id: "prompt-eng",
    name: "Prompt Engineering for ChatGPT",
    issuer: "Vanderbilt University / Coursera",
    details: "Verification on file",
    type: "Certified",
  },
  {
    id: "intro-ai",
    name: "Introduction to AI",
    issuer: "Google",
    type: "Certificate",
  },
  {
    id: "career-edge",
    name: "Career Edge – Young Professional",
    issuer: "TCS iON",
    type: "Certificate",
  },
];

export const spaceMilestones = [
  {
    id: "leetcode",
    target: 150,
    suffix: "+",
    label: "LeetCode Solved",
    desc: "Consistent algorithmic problem solving in DSA",
  },
  {
    id: "cgpa",
    target: 9.2,
    isFloat: true,
    label: "B.Tech CGPA",
    desc: "Academic excellence at SVVV Indore (5th Semester)",
  },
  {
    id: "nptel-java",
    target: 90,
    suffix: "%",
    label: "NPTEL Java Score",
    desc: "Top tier performance in Java programming",
  },
  {
    id: "nptel-dbms",
    target: 68,
    suffix: "%",
    label: "NPTEL DBMS",
    desc: "Completed 8-week rigorous database systems curriculum",
  },
  {
    id: "apps",
    target: 2,
    label: "Deployed Web Apps",
    desc: "TalentTrack and StayVerse operating in production",
  },
];
