// ── Types ──────────────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  description: string;
  technologies: string[];
  gradient: string;
  color: string;
  links: { label: string; url: string }[];
  featured?: boolean;
}

export interface Skill {
  name: string;
  color: string;
}

export interface Achievement {
  id: string;
  type: "polaroid" | "sticky" | "badge" | "card";
  title: string;
  subtitle?: string;
  description?: string;
  rotation: number;
  color: string;
  emoji: string;
  x: number;
  y: number;
}

export interface Sticker {
  id: string;
  label: string;
  emoji: string;
  color: string;
  bg: string;
  rotation: number;
  x: number;
  y: number;
  scale: number;
}

// ── Hero Stickers ──────────────────────────────────────────────────────────────

export const stickers: Sticker[] = [
  {
    id: "ai-research",
    label: "AI Pioneer",
    emoji: "🧠",
    color: "#8b5cf6",
    bg: "linear-gradient(135deg, #ede9fe, #ddd6fe)",
    rotation: -8,
    x: 10,
    y: 18,
    scale: 1.1,
  },
  {
    id: "fullstack-leader",
    label: "Full Stack Maestro",
    emoji: "🧩",
    color: "#06b6d4",
    bg: "linear-gradient(135deg, #cffafe, #a5f3fc)",
    rotation: 12,
    x: 75,
    y: 12,
    scale: 1.1,
  },
  {
    id: "systems-architect",
    label: "Systems Architect",
    emoji: "🛠️",
    color: "#10b981",
    bg: "linear-gradient(135deg, #d1fae5, #a7f3d0)",
    rotation: -10,
    x: 5,
    y: 60,
    scale: 1,
  },
  {
    id: "visionary",
    label: "Visionary Engineer",
    emoji: "🚀",
    color: "#ef4444",
    bg: "linear-gradient(135deg, #fecaca, #fca5a5)",
    rotation: 15,
    x: 80,
    y: 55,
    scale: 1.05,
  },
  {
    id: "security-mindset",
    label: "Security First",
    emoji: "🔒",
    color: "#f59e0b",
    bg: "linear-gradient(135deg, #fef3c7, #fde68a)",
    rotation: -20,
    x: 42,
    y: 72,
    scale: 1,
  },
  {
    id: "professor",
    label: "Mentor",
    emoji: "🎓",
    color: "#ec4899",
    bg: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
    rotation: 10,
    x: 70,
    y: 75,
    scale: 0.9,
  },
  {
    id: "terminal",
    label: "$ sudo AI",
    emoji: "⌨️",
    color: "#6366f1",
    bg: "linear-gradient(135deg, #e0e7ff, #c7d2fe)",
    rotation: -8,
    x: 20,
    y: 30,
    scale: 1,
  },
];

// ── Achievements for Vision Board ──────────────────────────────────────────────

export const achievements: Achievement[] = [
  {
    id: "divhacks",
    type: "polaroid",
    title: "Columbia Divhacks 2025",
    subtitle: "1st Place Winner",
    description:
      "Built an AI-powered Closet Assistant that uses computer vision to digitize your wardrobe and generate outfits using GPT-4V.",
    rotation: -4,
    color: "#3b82f6",
    emoji: "🏆",
    x: 5,
    y: 5,
  },
  {
    id: "patent",
    type: "sticky",
    title: "Patent Filed",
    subtitle: "AI Chair Positioning",
    description:
      "AI-based Modular Chair Positioning System — an intelligent ergonomic system that adapts seating configurations in real-time.",
    rotation: 3,
    color: "#f59e0b",
    emoji: "📜",
    x: 55,
    y: 2,
  },
  {
    id: "hsbc",
    type: "badge",
    title: "HSBC AI Hackathon",
    subtitle: "Winner — Top of 4,700+",
    description:
      "Selected from over 4,700 participants globally. Built an AI-driven fraud detection pipeline with real-time anomaly scoring.",
    rotation: -2,
    color: "#ef4444",
    emoji: "🎯",
    x: 30,
    y: 50,
  },
  {
    id: "thunder",
    type: "card",
    title: "Thunder Client",
    subtitle: "Stakeholder & Engineer",
    description:
      "Core contributor to the popular VS Code REST API testing extension with 10M+ installs. Drove technical architecture decisions.",
    rotation: 5,
    color: "#8b5cf6",
    emoji: "⚡",
    x: 65,
    y: 45,
  },
  {
    id: "excellence",
    type: "badge",
    title: "2x Excellence Award",
    subtitle: "Engineering Recognition",
    description:
      "Recognized for outstanding engineering contributions and technical leadership across multiple high-impact projects.",
    rotation: -6,
    color: "#10b981",
    emoji: "⭐",
    x: 8,
    y: 55,
  },
];

// ── Featured Projects (for the big carousel) ──────────────────────────────────

export const featuredProjects: Project[] = [
  {
    id: "chair-patent",
    title: "Patented AI Chair Positioning System",
    subtitle: "Sensor Fusion & Deep Learning Architecture",
    year: "2025",
    category: "Patent",
    description:
      "Designed and patented an autonomous modular chair positioning system. Engineered the core logic bridging physical hardware with machine learning, utilizing advanced sensor fusion and deep learning models to dynamically calculate and adjust spatial positioning in real-time. This system is now helping thousands of users achieve optimal ergonomic health in dynamic environments.",
    technologies: ["Deep Learning", "Sensor Fusion", "Embedded Systems", "Python"],
    gradient: "from-amber-500 to-orange-900",
    color: "#f59e0b",
    links: [
      { label: "Patent Filing", url: "#" },
      { label: "Research Paper", url: "#" },
    ],
    featured: true,
  },
  {
    id: "video-engine",
    title: "Automated Video Production Engine",
    subtitle: "Programmatic, Zero-Touch Render Pipeline",
    year: "2025",
    category: "Media Automation",
    description:
      "Completely bypassed manual video editing software by architecting a programmatic media rendering pipeline. Orchestrated scripts to dynamically slice, stitch, sync audio, and render heavy video layers autonomously, creating a highly scalable infrastructure for rapid, headless content generation. This engine powers content for thousands of users with zero manual intervention.",
    technologies: ["FFmpeg", "Python", "Media Automation", "Data Pipelines"],
    gradient: "from-blue-700 to-indigo-900",
    color: "#2563eb",
    links: [
      { label: "Demo Video", url: "#" },
      { label: "GitHub", url: "#" },
    ],
    featured: true,
  },
  {
    id: "pitchperfect",
    title: "PitchPerfect (Iterate NYC Winner)",
    subtitle: "Sub-200ms Audio Feedback Loop",
    year: "2024",
    category: "Hackathon Winner",
    description:
      "Architected a real-time voice processing system leveraging custom audio buffers and WebSockets to bypass standard HTTP overhead, achieving a <200ms latency feedback loop to dynamically align speaker tone with sentiment targets. This system has empowered presenters and educators to receive instant, actionable feedback at scale.",
    technologies: ["Python", "React", "WebSockets", "Audio Buffers"],
    gradient: "from-fuchsia-600 to-pink-700",
    color: "#d946ef",
    links: [
      { label: "Demo Video", url: "#" },
      { label: "GitHub", url: "#" },
    ],
    featured: true,
  },
];

// ── Archive Projects (for the grid) ────────────────────────────────────────────

export const archiveProjects: Project[] = [

  {
    id: "thunder-client-docs",
    title: "Thunder Client Official Documentation",
    subtitle: "High-Performance Docs Architecture",
    year: "2024",
    category: "Open Source",
    description:
      "Engineered the official documentation platform for Thunder Client. Focused strictly on optimal Developer Experience (DX) and ultra-fast page loads. Implemented a statically generated architecture to handle complex markdown rendering, ensuring the thousands of developers using the tool have instantaneous access to API testing guidelines.",
    technologies: ["Next.js", "MDX", "Static Site Generation (SSG)", "Developer Experience"],
    gradient: "from-purple-500 to-violet-900",
    color: "#a855f7",
    links: [
      { label: "VS Code Marketplace", url: "#" },
      { label: "GitHub", url: "#" },
    ],
  },
  {
    id: "ai-resume-builder",
    title: "Open-Source AI Resume Builder",
    subtitle: "Open-Source AI Resume Generator",
    year: "2024",
    category: "Open Source",
    description:
      "Built a privacy-first, open-source tool that programmatically designs and generates developer resumes. Integrated LLM APIs to dynamically rewrite and optimize bullet points based on target job descriptions, coupling prompt engineering with an automated PDF rendering engine.",
    technologies: ["React", "LLM APIs", "Prompt Engineering", "PDF Generation"],
    gradient: "from-green-500 to-emerald-900",
    color: "#10b981",
    links: [
      { label: "GitHub", url: "#" },
    ],
  },
    {
    id: "love-arbitrage",
    title: "Love Arbitrage",
    subtitle: "Algorithmic Asymmetry Exploitation",
    year: "2024",
    category: "Data Science",
    description:
      "Scraped and analyzed dating platform datasets to identify algorithmic inefficiencies, building a predictive matching model that exploits these data asymmetries.",
    technologies: ["Python", "Data Scraping", "Predictive Modeling"],
    gradient: "from-rose-500 to-pink-900",
    color: "#f43f5e",
    links: [
      { label: "GitHub", url: "#" },
    ],
  },

  {
    id: "self-improving-agent",
    title: "AI Self-Improving Backing Agent",
    subtitle: "Autonomous Self-Reflecting AI Agent",
    year: "2024",
    category: "AI Agents",
    description:
      "Implemented a reinforcement architecture where a backend agent reviews its own execution traces, identifies failure points, and dynamically iterates its internal prompts to optimize its own logic.",
    technologies: ["LLM Agents", "Reinforcement Learning", "Python"],
    gradient: "from-indigo-500 to-blue-900",
    color: "#6366f1",
    links: [
      { label: "GitHub", url: "#" },
    ],
  },
    {
      id: "connect2care",
      title: "Connect2Care",
      subtitle: "AI Hospital Management System",
      year: "2025",
      category: "Healthcare AI",
      description:
        "Designed and deployed an AI-driven hospital management system that streamlines patient care, resource allocation, and real-time analytics for large healthcare networks. Integrated predictive modeling for patient flow, automated triage, and intelligent scheduling, dramatically improving operational efficiency and patient outcomes. This platform is now supporting thousands of clinicians and patients across multiple hospitals.",
      technologies: ["Flutter", "AI Workflow Automation", "Predictive Analytics", "Healthcare IT"],
      gradient: "from-teal-500 to-cyan-900",
      color: "#14b8a6",
      links: [
        { label: "Demo Video", url: "#" },
        { label: "GitHub", url: "#" },
      ],
    },

  {
    id: "clovet",
    title: "Clovet",
    subtitle: "E-commerce Semantic Search",
    year: "2024",
    category: "Hackathon Runner Up",
    description:
      "Built a semantic search engine powered by the Gemini API, implemented cross-platform scraping logic, and integrated an advanced Computer Vision Virtual Try-On feature directly into a full-stack e-commerce flow.",
    technologies: ["MERN Stack", "Gemini API", "Computer Vision", "Web Scraping"],
    gradient: "from-pink-500 to-fuchsia-900",
    color: "#ec4899",
    links: [
      { label: "GitHub", url: "#" },
    ],
  },
    {
    id: "traffic-management",
    title: "Traffic Management System",
    subtitle: "YOLOv8 IoT Traffic Optimization",
    year: "2024",
    category: "IoT / Edge",
    description:
      "Deployed YOLOv8 models via OpenCV to monitor intersection density in real-time, engineering fail-safe logic to override standard light timers and reduce idle wait times by 60%.",
    technologies: ["YOLOv8", "OpenCV", "TensorFlow", "IoT / Edge"],
    gradient: "from-lime-500 to-green-900",
    color: "#84cc16",
    links: [
      { label: "GitHub", url: "#" },
    ],
  },

  {
    id: "buildbot-ai",
    title: "BuildBot AI",
    subtitle: "Autonomous Full-Stack Generation",
    year: "2024",
    category: "AI Infrastructure",
    description:
      "Engineered a local AI platform capable of generating complete Next.js/Node apps with custom syntax validation loops that force the LLM to test and repair its own output prior to delivery.",
    technologies: ["React", "Node.js", "Llama 3.1", "Ollama"],
    gradient: "from-blue-500 to-cyan-900",
    color: "#0ea5e9",
    links: [
      { label: "GitHub", url: "#" },
    ],
  },

    {
    id: "fitchgroup-esg",
    title: "FitchGroup ESG Modeler",
    subtitle: "Financial Data Skew Normalization",
    year: "2024",
    category: "Fintech Hackathon",
    description:
      "Solved extreme Pareto distribution skew in financial ESG datasets by building a 'physics-constrained' ensemble machine learning model, optimizing the data pipeline for enterprise-scale fintech environments.",
    technologies: ["Python", "Pandas", "Ensemble Models", "Fintech"],
    gradient: "from-yellow-500 to-amber-900",
    color: "#fbbf24",
    links: [
      { label: "GitHub", url: "#" },
    ],
  },
];

// ── Tech Stack ─────────────────────────────────────────────────────────────────

export const techStack: Record<string, Skill[]> = {
  "Frontend": [
    { name: "React", color: "#61dafb" },
    { name: "Next.js", color: "#000000" },
    { name: "TypeScript", color: "#3178c6" },
    { name: "JavaScript", color: "#f7df1e" },
    { name: "TailwindCSS", color: "#06b6d4" },
    { name: "Framer Motion", color: "#e10098" },
    { name: "Figma", color: "#f24e1e" },
    { name: "Storybook", color: "#ff4785" },
    { name: "HTML5", color: "#e34f26" },
    { name: "CSS3", color: "#1572b6" },
  ],
  "Backend / AI": [
    { name: "Python", color: "#3776ab" },
    { name: "FastAPI", color: "#009688" },
    { name: "Node.js", color: "#3c873a" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "Redis", color: "#dc382d" },
    { name: "GraphQL", color: "#e10098" },
    { name: "TensorFlow", color: "#ff6f00" },
    { name: "PyTorch", color: "#ee4c2c" },
    { name: "OpenAI API", color: "#10a37f" },
    { name: "LangChain", color: "#3b82f6" },
  ],
  "DevOps / Systems": [
    { name: "Docker", color: "#2496ed" },
    { name: "Kubernetes", color: "#326ce5" },
    { name: "AWS", color: "#ff9900" },
    { name: "GitHub Actions", color: "#2088ff" },
    { name: "CI/CD", color: "#40b682" },
    { name: "Infrastructure as Code", color: "#7b42bc" },
  ],
  "Other": [
    { name: "System Design", color: "#6366f1" },
    { name: "Critical Thinking", color: "#8b5cf6" },
    { name: "Problem Solving", color: "#10b981" },
    { name: "Mentorship", color: "#f59e42" },
    { name: "Open Source", color: "#24292f" },
    { name: "LLMs", color: "#a21caf" },
    { name: "Distributed Systems", color: "#0ea5e9" },
  ],
};

// ── Navigation Links ───────────────────────────────────────────────────────────

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Achievements", href: "#achievements" },
  { label: "Work", href: "#featured" },
  { label: "Projects", href: "#archive" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// ── Experience Timeline ────────────────────────────────────────────────────────

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: "full-time" | "contract" | "internship" | "open-source";
  description: string;
  highlights: string[];
  technologies: string[];
  color: string;
  emoji: string;
}

export const experiences: Experience[] = [
  {
    id: "nyu-tandon-stern",
    role: "Graduate Student, Computer Science & Business",
    company: "NYU Tandon School of Engineering & Stern School of Business",
    period: "2025 — Present",
    location: "New York, NY",
    type: "full-time",
    description:
      "Pursuing advanced graduate studies at the intersection of AI, security, and product innovation. Researching adversarial robustness, scalable distributed systems, and the business impact of AI. Collaborating with leading faculty and industry partners to drive real-world adoption of cutting-edge research.",
    highlights: [
      "Research focus: Out-of-Distribution (OOD) robustness, AI safety, and empirical evaluation of large-scale models",
      "Graduate coursework in machine learning, distributed systems, and product management",
      "Active member of AI research and entrepreneurship communities at NYU and in NYC",
    ],
    technologies: ["Python", "Distributed Systems", "AI Safety", "Business Analytics"],
    color: "#6366f1",
    emoji: "🎓",
  },
  {
    id: "thunder-client",
    role: "Founding Engineer",
    company: "Thunder Client",
    companyUrl: "https://thunderclient.com",
    period: "Apr 2023 — Aug 2025",
    location: "Remote",
    type: "open-source",
    description:
      "As Founding Engineer, architected and scaled the world’s leading API testing platform (10M+ installs). Built a secure SSO system (OAuth2/Okta/Google), a Node.js mock server for financial APIs, and a high-performance Swagger-to-OpenAPI 3.0 converter. Led the gRPC testing interface and implemented intelligent endpoint autocompletion. On the AI/infra side, designed an LLM-based documentation synthesis engine (RAG) to reduce hallucination in API specs and implemented semantic search (SBERT/FAISS) for developer docs.",
    highlights: [
      "Engineered secure SSO (OAuth2, Okta, Google) for seamless enterprise onboarding",
      "Developed Node.js mock server for financial API simulation, reducing dev setup time by 40%",
      "Architected Swagger-to-OpenAPI 3.0 converter in TypeScript, automating doc workflows (90% less manual effort)",
      "Led gRPC testing interface and intelligent endpoint autocompletion via OpenAPI schema parsing",
      "Built LLM-based doc synthesis engine (RAG) and semantic search (SBERT/FAISS) for developer experience",
    ],
    technologies: ["TypeScript", "Node.js", "React", "OAuth2", "gRPC", "OpenAPI", "SBERT", "FAISS", "LLMs"],
    color: "#8b5cf6",
    emoji: "⚡",
  },
  {
    id: "hsbc-intern",
    role: "Software Developer Intern",
    company: "HSBC Software Development India",
    period: "Jan 2025 — Mar 2025",
    location: "Pune, India",
    type: "internship",
    description:
      "Engineered adversarial safety classifiers (BERT/XGBoost) to detect non-compliant and risk-prone language in internal comms, focusing on OOD robustness to reduce false positives in financial news feeds. Improved risk monitoring accuracy by 45% using empirical evaluation. Also designed and deployed a Dockerized, real-time transaction monitoring platform (Python/SQL), built scalable data pipelines for 1M+ daily logs, and launched a React/Chart.js GitHub productivity dashboard, reducing dev cycle time by 15%.",
    highlights: [
      "Built adversarial safety classifiers (BERT/XGBoost) for risk-prone language detection in internal comms",
      "Focused on OOD robustness, reducing false positives in financial news feeds",
      "Improved risk monitoring accuracy by 45% using empirical evaluation metrics",
      "Deployed Dockerized, real-time transaction monitoring platform (Python/SQL) for fraud detection",
      "Built scalable data pipelines for 1M+ daily logs and a React/Chart.js productivity dashboard (15% faster cycles)",
    ],
    technologies: ["Python", "BERT", "XGBoost", "SQL", "Docker", "React", "Chart.js"],
    color: "#dc2626",
    emoji: "🏦",
  },
];
