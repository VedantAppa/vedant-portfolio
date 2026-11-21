import {
  PersonalInfo,
  StrengthItem,
  EnjoyItem,
  SkillItem,
  ProjectItem,
  EducationItem,
  CertificationItem,
  AchievementItem,
  HobbyItem
} from '../types';

export const personalInfo: PersonalInfo = {
  fullName: "Vedant Sanjay Ghodeswar",
  role: "B.Tech Computer Engineering Student | Aspiring Software Developer",
  tagline: "Building Ideas Through Code & Creativity.",
  shortBio: "B.Tech Computer Engineering Student passionate about programming, technology, problem-solving and continuous learning.",
  location: "Talegaon Dabhade, Pune, Maharashtra, India",
  email: "vedantsghodeswar@gmail.com",
  phone: "+91 9665448436",
  whatsapp: "9665448436",
  whatsappUrl: "https://wa.me/919665448436",
  college: "Dr. D. Y. Patil College of Engineering and Innovation, Varale",
  degree: "Bachelor of Technology (B.Tech) – Computer Engineering",
  course: "B.Tech Computer Engineering",
  academicYear: "Second Year",
  semester: "Semester 2 (Beginning)",
  expectedGraduation: "2029",
  linkedin: "https://www.linkedin.com/in/vedant-ghodeswar-31921a42a/",
  github: "https://github.com/VedantAppa",
  resumeFileName: "Vedant_Ghodeswar_Resume.pdf",
  availableForWork: true,
  avatar: "./vedant.jpg"
};

export const introduction = {
  paragraphs: [
    "I am Vedant Sanjay Ghodeswar, a B.Tech Computer Engineering student with a strong interest in technology, programming, problem-solving and continuous learning.",
    "I enjoy exploring new technologies, understanding how different systems work and developing practical solutions to real-world problems.",
    "I believe in understanding concepts rather than simply memorising them. I enjoy tasks that challenge my thinking, encourage creativity and help me develop new skills.",
    "I am interested in programming, software development, artificial intelligence and exploring innovative ideas.",
    "My goal is to continuously improve my technical and professional abilities while gaining practical experience and preparing myself for future opportunities in the technology industry."
  ]
};

export const whatMakesMeDifferent = {
  quote: "What makes me different is my curiosity, practical approach to learning and willingness to continuously improve myself.",
  paragraphs: [
    "I believe in understanding concepts rather than simply memorising them. I enjoy exploring new technologies, solving problems and learning about different areas of computer science.",
    "I am someone who questions, analyses and tries to find better ways of doing things. I am open to new challenges and believe that every experience is an opportunity to learn something valuable.",
    "My goal is not just to gain knowledge but to apply it in practical situations and develop skills that will help me grow professionally."
  ],
  keywords: [
    { label: "Curiosity-Driven", desc: "Always digging into the 'why' behind systems" },
    { label: "Concept Over Rote", desc: "First-principles mental models, not memorization" },
    { label: "Practical Execution", desc: "Translating code and logic into real solutions" },
    { label: "Continuous Growth", desc: "Treating every challenge as a learning catalyst" }
  ]
};

export const whatIEnjoyDoing: EnjoyItem[] = [
  {
    id: "enjoy-1",
    title: "Problem-Solving",
    description: "Tackling algorithmic puzzles and debugging complex logic systematically until the solution is clean and efficient.",
    category: "Analytical"
  },
  {
    id: "enjoy-2",
    title: "Exploring Technology",
    description: "Staying curious about emerging paradigms, understanding how low-level and high-level tools operate under the hood.",
    category: "Exploration"
  },
  {
    id: "enjoy-3",
    title: "Programming",
    description: "Writing structured, readable code in C, C++, and Python to turn logic into reliable software programs.",
    category: "Engineering"
  },
  {
    id: "enjoy-4",
    title: "Research and Analysis",
    description: "Comparing technical trade-offs, studying architecture patterns, and understanding optimal system design decisions.",
    category: "Investigation"
  },
  {
    id: "enjoy-5",
    title: "Creative Thinking",
    description: "Approaching engineering obstacles with an open, inventive mindset to discover simpler and more elegant workflows.",
    category: "Innovation"
  },
  {
    id: "enjoy-6",
    title: "Practical Project Development",
    description: "Bridging the gap between classroom theory and deployable code through hands-on implementation and experiments.",
    category: "Execution"
  }
];

export const professionalStrengths: StrengthItem[] = [
  {
    id: "str-1",
    title: "Creativity",
    description: "Approaching technical challenges with fresh perspectives and inventive problem-solving angles.",
    iconName: "Sparkles"
  },
  {
    id: "str-2",
    title: "Leadership",
    description: "Taking initiative, guiding collaborative team efforts, and fostering a constructive project environment.",
    iconName: "Users"
  },
  {
    id: "str-3",
    title: "Communication Skills",
    description: "Articulating complex ideas clearly and collaborating effectively across teams and disciplines.",
    iconName: "MessageSquare"
  },
  {
    id: "str-4",
    title: "Willingness to Learn",
    description: "Constantly eager to expand technical horizons, adopt modern tools, and embrace new paradigms.",
    iconName: "GraduationCap"
  },
  {
    id: "str-5",
    title: "Practical Thinking",
    description: "Translating theoretical concepts into workable, efficient real-world implementations.",
    iconName: "Wrench"
  },
  {
    id: "str-6",
    title: "Analytical Thinking",
    description: "Breaking down intricate algorithms and problems into manageable, structured components.",
    iconName: "Brain"
  },
  {
    id: "str-7",
    title: "Adaptability",
    description: "Quickly adjusting to new toolchains, environments, and evolving engineering requirements.",
    iconName: "Shuffle"
  },
  {
    id: "str-8",
    title: "Clarity in Communication",
    description: "Ensuring transparent, concise, and structured documentation and technical dialogue.",
    iconName: "CheckCircle2"
  }
];

export const technicalSkills: {
  verified: SkillItem[];
  futureRoadmap: {
    categoryName: string;
    description: string;
    items: SkillItem[];
  }[];
} = {
  verified: [
    {
      name: "C Programming",
      level: "Intermediate",
      isVerified: true,
      category: "languages",
      description: "Certified with Grade A+. Structured programming, pointers, memory allocation, modular code and file I/O.",
      badge: "Grade A+ Certified"
    },
    {
      name: "C++",
      level: "Intermediate",
      isVerified: true,
      category: "languages",
      description: "Certified with Grade A+. Object-oriented programming, classes, inheritance, polymorphism, and standard libraries.",
      badge: "Grade A+ Certified"
    },
    {
      name: "Python for Data Science",
      level: "Beginner",
      isVerified: true,
      category: "languages",
      description: "NPTEL Certified (IIT Madras, Roll No: NPTEL26CS80S466205290). Syntax, data structures, scripting, and analytical data handling.",
      badge: "NPTEL Certified"
    },
    {
      name: "Data Structures",
      level: "Beginner",
      isVerified: true,
      category: "core",
      description: "Arrays, linked lists, stacks, queues, and foundational searching & sorting algorithms.",
      badge: "Core Foundations"
    }
  ],
  futureRoadmap: [
    {
      categoryName: "Artificial Intelligence & Domains",
      description: "Industry-aligned AI specialization and machine learning applications:",
      items: [
        { name: "AI in Financial Services (BFSI)", level: "Exploring", isVerified: true, category: "other", description: "Certified via NASSCOM FutureSkills Prime & SmartBridge virtual internship (VIP-BFSI-2026-0276)." },
        { name: "Risk & Fraud Analytics", level: "Roadmap / Upcoming", isVerified: false, category: "other", description: "Predictive modeling and analytical pipelines for enterprise workflows." }
      ]
    },
    {
      categoryName: "Programming Languages",
      description: "Languages planned for upcoming semesters and web/system development:",
      items: [
        { name: "JavaScript / TypeScript", level: "Roadmap / Upcoming", isVerified: false, category: "languages", description: "Modern web application development and scripting." },
        { name: "Java", level: "Roadmap / Upcoming", isVerified: false, category: "languages", description: "Enterprise OOP and cross-platform applications." }
      ]
    },
    {
      categoryName: "Core Computer Science",
      description: "Fundamental CS domains currently being studied or planned in curriculum:",
      items: [
        { name: "Algorithms & Analysis", level: "Roadmap / Upcoming", isVerified: false, category: "core", description: "Time & space complexity, dynamic programming, and greedy methods." },
        { name: "Database Management (DBMS)", level: "Roadmap / Upcoming", isVerified: false, category: "core", description: "Relational data modeling, SQL queries, and normalization." },
        { name: "Operating Systems", level: "Roadmap / Upcoming", isVerified: false, category: "core", description: "Processes, threads, scheduling, and memory architecture." }
      ]
    },
    {
      categoryName: "Development Tools",
      description: "Developer tooling currently in active learning and daily workflow usage:",
      items: [
        { name: "Git & GitHub", level: "Exploring", isVerified: false, category: "tools", description: "Version control, branching, repository management, and collaboration." },
        { name: "VS Code & IDEs", level: "Exploring", isVerified: false, category: "tools", description: "Development environment, debugging, extensions, and workspace setup." },
        { name: "Linux / CLI", level: "Roadmap / Upcoming", isVerified: false, category: "tools", description: "Command-line navigation, shell scripting, and basic administration." }
      ]
    }
  ]
};

export const projects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "CareFlow – Smart Healthcare Appointment System",
    description: "Developed for Smart India Hackathon 2026 (Problem Statement 29: Connected Healthcare). Solves hospital overcrowding and chaotic queues through GPS-based patient tracking with dynamic ETA estimation, AI healthcare assistance, and crowdsourced emergency blood & medicine availability tracking.",
    technologies: ["Smart India Hackathon 2026", "Team Power Rangers", "AI Assistant", "Queue Optimization", "GPS & ETA Tracking"],
    role: "Core Team Developer & Presentation Lead",
    status: "Ongoing",
    githubUrl: "https://github.com/VedantAppa",
    liveDemoUrl: "./certificates/SIH_Power_Rangers.pdf",
    pdfUrl: "./certificates/SIH_Power_Rangers.pdf",
    featured: true,
    isPlaceholder: false,
    category: "Systems & Algorithms"
  },
  {
    id: "proj-2",
    title: "Pothole Reporting & Tracking Platform",
    description: "Civic technology and community infrastructure web platform presented at DYPCOEI Varale. Allows citizens to report road hazards by uploading photos and GPS location with severity ranking (Low/Medium/High), complaint resolution tracking, and an engaging gamified civic rewards system (Bronze, Silver, Gold).",
    technologies: ["DTIL Project", "DYPCOEI Varale", "Geolocation API", "Civic Tech", "Gamified Rewards"],
    role: "Lead Presenter & Architecture",
    status: "Completed",
    githubUrl: "https://github.com/VedantAppa",
    liveDemoUrl: "./certificates/DTIL_Pothole_Project.pdf",
    pdfUrl: "./certificates/DTIL_Pothole_Project.pdf",
    featured: true,
    isPlaceholder: false,
    category: "Software & Automation"
  },
  {
    id: "proj-3",
    title: "Algorithmic Systems & Data Structures in C/C++",
    description: "Certified Grade A+ modular implementations of foundational computer science data structures and algorithms in C and C++. Features dynamic memory allocation, pointer manipulation, linked lists, stacks, queues, and systematic algorithmic efficiency benchmarking.",
    technologies: ["C++", "C Programming", "Grade A+ Certified", "Data Structures", "Algorithms"],
    role: "Developer",
    status: "Completed",
    githubUrl: "https://github.com/VedantAppa",
    liveDemoUrl: "./certificates/Vedant_CPP_Certificate.pdf",
    pdfUrl: "./certificates/Vedant_CPP_Certificate.pdf",
    featured: true,
    isPlaceholder: false,
    category: "Systems & Utilities"
  }
];

export const educationTimeline: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Technology (B.Tech) – Computer Engineering",
    institution: "Dr. D. Y. Patil College of Engineering and Innovation, Varale",
    location: "Varale, Pune, Maharashtra",
    period: "2024 – 2029 (Expected)",
    status: "Current: B.Tech Second Year (Semester 2 - Beginning)",
    isCurrent: true,
    isPlaceholder: false,
    details: [
      "Rigorous core curriculum in Computer Science & Engineering fundamentals.",
      "Practical coursework in C, C++, Data Structures, and Discrete Mathematics.",
      "Smart India Hackathon 2026 participant (CareFlow - Healthcare System).",
      "Active participant in technical presentations and DTIL innovation initiatives."
    ]
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Certificate (12th Standard) [Editable Placeholder]",
    institution: "[Add Junior College / High School Name - Placeholder]",
    location: "Pune / Maharashtra",
    period: "2023 – 2024",
    status: "Completed",
    isCurrent: false,
    isPlaceholder: true,
    details: [
      "Stream: Science (Physics, Chemistry, Mathematics / Computer Science).",
      "Notice: Academic scores and specific awards will be added upon confirmation.",
      "Built initial analytical foundation and passion for technical sciences."
    ]
  },
  {
    id: "edu-3",
    degree: "Secondary School Certificate (10th Standard) [Editable Placeholder]",
    institution: "[Add School Name - Placeholder]",
    location: "Maharashtra, India",
    period: "2021 – 2022",
    status: "Completed",
    isCurrent: false,
    isPlaceholder: true,
    details: [
      "General curriculum with high focus on Mathematics and Science.",
      "Notice: Official marks / achievements will be added by student.",
      "Developed early interest in logic, mathematics, and computers."
    ]
  }
];

export const certifications: CertificationItem[] = [
  {
    id: "cert-1",
    title: "AI Specialist - BFSI Track Virtual Internship",
    issuer: "NASSCOM FutureSkills Prime & SmartBridge",
    date: "August 24 – September 26, 2026 (Issued Nov 18, 2026)",
    credentialId: "VIP-BFSI-2026-0276",
    pdfUrl: "./certificates/Nasscom_Certificate.pdf",
    verificationUrl: "./certificates/Nasscom_Certificate.pdf",
    isPlaceholder: false,
    description: "Industry-integrated program with hands-on exposure to AI in Financial Services, Risk & Fraud Detection, Data Analytics for BFSI, and Insurance workflows."
  },
  {
    id: "cert-2",
    title: "Python for Data Science",
    issuer: "NPTEL & IIT Madras (Swayam)",
    date: "Jan – Feb 2026 (4-Week Course, 2 Credits)",
    credentialId: "NPTEL26CS80S466205290",
    score: "Score: 55 (Assignment: 17.75/25, Proctored Exam: 36.75/75)",
    pdfUrl: "./certificates/Vedant_NPTEL_Python.pdf",
    verificationUrl: "./certificates/Vedant_NPTEL_Python.pdf",
    isPlaceholder: false,
    description: "Official National Programme on Technology Enhanced Learning certification evaluating Python programming for data science and algorithmic problem-solving."
  },
  {
    id: "cert-3",
    title: "C & C++ Programming Certification",
    issuer: "Certified Technical Education",
    date: "May 08, 2026",
    credentialId: "3M3ATFWI0HA59",
    grade: "Grade A+",
    pdfUrl: "./certificates/Vedant_CPP_Certificate.pdf",
    verificationUrl: "./certificates/Vedant_CPP_Certificate.pdf",
    isPlaceholder: false,
    description: "Certified with Grade A+. Covers structured C development, pointer memory management, OOP paradigms, and standard library architectures."
  },
  {
    id: "cert-4",
    title: "Business Communication Workshop (7-Month Program)",
    issuer: "MyCaptain",
    date: "Batch: October 2025",
    pdfUrl: "./certificates/MyCaptain_Business_Communication.pdf",
    verificationUrl: "./certificates/MyCaptain_Business_Communication.pdf",
    isPlaceholder: false,
    description: "Ratified comprehensive course covering professional business dialogue, technical articulation, team communication, and executive presentations."
  },
  {
    id: "cert-5",
    title: "Bajaj CSR Skill Certificate",
    issuer: "Bajaj Finserv",
    date: "October 07, 2026",
    credentialId: "548688-37-2026-10-07",
    pdfUrl: "./certificates/Bajaj_Certificate.pdf",
    verificationUrl: "./certificates/Bajaj_Certificate.pdf",
    isPlaceholder: false,
    description: "Institutional capability certification awarded under Bajaj CSR initiatives for professional competency and corporate readiness."
  }
];

export const achievements: AchievementItem[] = [
  {
    id: "achieve-1",
    title: "Smart India Hackathon 2026 – Team Power Rangers (PS 29)",
    organization: "Ministry of Education & AICTE",
    year: "2026",
    description: "Developed 'CareFlow', an AI-assisted healthcare appointment and patient flow optimization system resolving hospital overcrowding and queue delays.",
    pdfUrl: "./certificates/SIH_Power_Rangers.pdf",
    isPlaceholder: false
  },
  {
    id: "achieve-2",
    title: "Pothole Reporting & Tracking Platform (DTIL Presentation)",
    organization: "Dr. D. Y. Patil College of Engineering and Innovation, Varale",
    year: "2025 – 2026",
    description: "Designed and presented civic innovation platform for crowdsourced pothole tracking with geolocation, severity tracking, and gamified municipal rewards.",
    pdfUrl: "./certificates/DTIL_Pothole_Project.pdf",
    isPlaceholder: false
  },
  {
    id: "achieve-3",
    title: "NPTEL Certified in Python for Data Science",
    organization: "IIT Madras / Swayam",
    year: "2026",
    description: "Earned 2 academic credits through rigorous proctored examination and assignments in Python data science paradigms.",
    pdfUrl: "./certificates/Vedant_NPTEL_Python.pdf",
    isPlaceholder: false
  }
];

export const hobbies: HobbyItem[] = [
  {
    id: "hobby-1",
    name: "Playing Sports",
    iconName: "Trophy",
    description: "Active engagement in sports and team games.",
    growthImpact: "Builds physical stamina, mental focus under pressure, strategic coordination, and healthy team collaboration."
  },
  {
    id: "hobby-2",
    name: "Learning New Things",
    iconName: "Compass",
    description: "Curious exploration of tech trends, science, and practical disciplines.",
    growthImpact: "Fosters intellectual adaptability, a genuine growth mindset, and the resilience to learn outside comfort zones."
  },
  {
    id: "hobby-3",
    name: "Travelling",
    iconName: "MapPin",
    description: "Discovering new places, cultures, and landscapes.",
    growthImpact: "Expands cultural awareness, develops situational problem-solving skills in unfamiliar environments, and offers mental rejuvenation."
  }
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Credentials", href: "#credentials" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" }
];
