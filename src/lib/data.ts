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

// ── Hero Stickers (The First Impression) ───────────────────────────────────────
// These float around "WELCOME TO TANISH'S TERMINAL". 
// They are instant, 1-second visual flexes.
export const stickers: Sticker[] = [
  {
    id: "nyc-streak",
    label: "5-0 NYC Hackathon Record",
    emoji: "🗽",
    color: "#f59e0b", // Amber
    bg: "linear-gradient(135deg, #fef3c7, #fde68a)",
    rotation: -8,
    x: 4,
    y: 12,
    scale: 1.15,
  },
  {
    id: "tech-stack",
    label: "AI & Systems Architecture",
    emoji: "⚙️",
    color: "#10b981", // Emerald
    bg: "linear-gradient(135deg, #d1fae5, #a7f3d0)",
    rotation: -5,
    x: 8,
    y: 55,
    scale: 1.1,
  },
  {
    id: "operator",
    label: "10M+ Users Served",
    emoji: "🚀",
    color: "#ef4444", // Red
    bg: "linear-gradient(135deg, #fecaca, #fca5a5)",
    rotation: 15,
    x: 82,
    y: 55,
    scale: 1.05,
  },
  {
    id: "terminal",
    label: "$ sudo ship_it",
    emoji: "⌨️",
    color: "#6366f1", // Indigo
    bg: "linear-gradient(135deg, #e0e7ff, #c7d2fe)",
    rotation: -2,
    x: 25,
    y: 33,
    scale: 1,
  },
  {
    id: "anti-ai-slop",
    label: "Production Apps. Not AI Slop.",
    emoji: "⚠️",
    color: "#0f172a", // Deep slate/black text
    bg: "linear-gradient(135deg, #fde047, #eab308)", // Sharp warning yellow
    rotation: 6,
    x: 75,
    y: 25,
    scale: 0.9,
  },
];

// ── Achievements for Vision Board ──────────────────────────────────────────────

// ── Achievements for Vision Board (The Proof) ──────────────────────────────────
// This is the digital whiteboard. We are adding your specific hackathon wins, 
// the patent, your enterprise stint, and your NYU credentials.
export const achievements: Achievement[] = [
  {
    id: "hackathon-dominance",
    type: "card", // Make this a massive, bold card
    title: "The NYC Streak",
    subtitle: "5 AI Hackathons. 5 Wins.",
    description:
      "Currently 5-0 in the New York City hackathon circuit. Architecting and shipping winning AI infrastructure under extreme 24-48 hour time constraints against thousands of competitors. Not luck — systems.",
    rotation: -2,
    color: "#dc2626", // Aggressive Red
    emoji: "🏆",
    x: 35,
    y: 7,
  },
  {
    id: "chair-research",
    type: "sticky",
    title: "Patent Filed: Hardware + AI",
    subtitle: "Back Position Chair Research",
    description:
      "Engineered an AI-based Modular Chair Positioning System. Applied deep learning and sensor fusion to track back positioning and dynamically adjust to human ergonomics in real-time.",
    rotation: 4,
    color: "#f59e0b", // Amber
    emoji: "🪑",
    x: 8,
    y: 8,
  },
  {
    id: "iterate-nyc",
    type: "polaroid",
    title: "Iterate NYC Hackathon",
    subtitle: "1st Place Winner",
    description:
      "PitchPerfect: Architected a real-time voice processing system with custom audio buffers over WebSockets for a <200ms latency feedback loop.",
    rotation: -5,
    color: "#ec4899", // Pink
    emoji: "🎙️",
    x: 65,
    y: 12,
  },
  {
    id: "divhacks",
    type: "polaroid",
    title: "Columbia Divhacks 2025",
    subtitle: "1st Place Winner",
    description:
      "Clovet: Built an AI-powered e-commerce virtual try-on and semantic search engine using the MERN stack and Gemini API.",
    rotation: 6,
    color: "#3b82f6", // Blue
    emoji: "👕",
    x: 40,
    y: 55,
  },
  // ... (keep Thunder Client, FitchGroup, and NYU ID)
  {
    id: "thunder-client",
    type: "card",
    title: "Thunder Client",
    subtitle: "Core Engineer & Stakeholder",
    description:
      "Architected core features for the world's leading API testing platform (10M+ installs). Built LLM-based doc synthesis, semantic search, and secure enterprise SSO. Not a contributor — the founding engineer.",
    rotation: 2,
    color: "#8b5cf6", // Violet
    emoji: "⚡",
    x: 10,
    y: 50,
  },
  {
    id: "fitchgroup",
    type: "sticky",
    title: "FitchGroup Codeathon",
    subtitle: "Runner Up",
    description:
      "ESG Modeler: Tamed massive Pareto distribution data skew in financial datasets using a physics-constrained ensemble ML model.",
    rotation: 8,
    color: "#10b981", // Emerald
    emoji: "📈",
    x: 60,
    y: 80,
  },
  {
    id: "nyu-id",
    type: "badge", // Design this specific badge to look like an ID card
    title: "NYU Tandon",
    subtitle: "MS Computer Engineering",
    description:
      "Bridging the gap between raw algorithmic theory and high-level business execution in New York City.",
    rotation: -4,
    color: "#4f46e5", // Indigo
    emoji: "🎓",
    x: 75,
    y: 48,
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
      "Engineered the official documentation platform for Thunder Client. Focused strictly on optimal Developer Experience (DX) and ultra-fast page loads. Implemented a statically generated architecture to handle complex markdown rendering, ensuring the 10M+ developers using the tool have instantaneous access to API testing guidelines.",
    technologies: ["Next.js", "TypeScript", "MDX", "Static Site Generation (SSG)", "TailwindCSS"],
    gradient: "from-purple-500 to-violet-900",
    color: "#a855f7",
    links: [
      { label: "VS Code Marketplace", url: "https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client" },
      { label: "GitHub", url: "#" }, // <-- Add correct link here
    ],
  },
  {
    id: "ai-resume-builder",
    title: "Open-Source AI Resume Builder",
    subtitle: "Autonomous Resume Generation Engine",
    year: "2024",
    category: "Open Source",
    description:
      "Built a privacy-first, open-source tool that programmatically designs and generates developer resumes. Integrated LLM APIs to dynamically rewrite and optimize bullet points based on target job descriptions, coupling advanced prompt engineering with an automated, headless PDF rendering engine.",
    technologies: ["React", "TypeScript", "Node.js", "LLM APIs", "Puppeteer/PDF Generation"],
    gradient: "from-green-500 to-emerald-900",
    color: "#10b981",
    links: [
      { label: "GitHub (CareerCraft)", url: "https://github.com/tanish1608/CareerCraft-AI" },
      { label: "GitHub (ResumeAI)", url: "https://github.com/tanish1608/ResumeAI" },
    ],
  },
  {
    id: "love-arbitrage",
    title: "Love Arbitrage",
    subtitle: "Algorithmic Asymmetry Exploitation",
    year: "2024",
    category: "Data Science",
    description:
      "A purely data-driven approach to matchmaking. Scraped and analyzed dating platform datasets to identify algorithmic inefficiencies. Built a predictive matching model using Scikit-learn that exploits these data asymmetries, effectively treating human connection like a quantifiable arbitrage opportunity.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Data Scraping", "Predictive Modeling"],
    gradient: "from-rose-500 to-pink-900",
    color: "#f43f5e",
    links: [
      { label: "GitHub", url: "https://github.com/ostsam/love-arbitrage.git" }, // <-- Add correct link here
    ],
  },
  {
    id: "self-improving-agent",
    title: "AI Self-Improving Backing Agent",
    subtitle: "Autonomous Self-Reflecting AI",
    year: "2024",
    category: "AI Agents",
    description:
      "Implemented a reinforcement architecture where a backend agent reviews its own execution traces, identifies failure points, and dynamically iterates its internal prompts. This self-healing loop optimizes its own logic over time without human intervention.",
    technologies: ["Python", "LangChain", "LLM Agents", "Reinforcement Learning", "AST Parsing"],
    gradient: "from-indigo-500 to-blue-900",
    color: "#6366f1",
    links: [
      { label: "GitHub", url: "https://github.com/tanish1608/ScriptCraft-Agent" }, 
    ],
  },
  {
    id: "connect2care",
    title: "Connect2Care",
    subtitle: "AI Hospital Management System",
    year: "2025",
    category: "Healthcare AI",
    description:
      "Designed an AI-driven hospital management system that streamlines patient care and resource allocation. Integrated predictive modeling for patient flow, automated triage, and intelligent scheduling. Architected with strict compliance and data security in mind.",
    technologies: ["Flutter", "Python", "Predictive Analytics", "Firebase/Supabase", "Healthcare IT"],
    gradient: "from-teal-500 to-cyan-900",
    color: "#14b8a6",
    links: [
      { label: "GitHub", url: "https://github.com/tanish1608/Connect2Care.git" }, // <-- Add correct link here
    ],
  },
  {
    id: "clovet",
    title: "Clovet",
    subtitle: "E-commerce Semantic Search",
    year: "2024",
    category: "Hackathon Runner Up",
    description:
      "Built a semantic search engine powered by the Gemini API, implemented cross-platform scraping logic, and integrated an advanced Computer Vision Virtual Try-On feature directly into a full-stack e-commerce flow. Handled complex state management and asynchronous API calls seamlessly.",
    technologies: ["React", "Node.js", "MongoDB", "Gemini API", "Computer Vision", "Web Scraping"],
    gradient: "from-pink-500 to-fuchsia-900",
    color: "#ec4899",
    links: [
      { label: "GitHub", url: "https://github.com/tanish1608/clovet" },
    ],
  },
  {
    id: "traffic-management",
    title: "Traffic Management System",
    subtitle: "YOLOv8 IoT Traffic Optimization",
    year: "2024",
    category: "IoT / Edge",
    description:
      "Designed an edge-computing IoT system to dynamically manage traffic flow. Deployed YOLOv8 models via OpenCV to monitor intersection density in real-time. Engineered fail-safe logic to override standard light timers, reducing idle wait times by a measured 60%.",
    technologies: ["Python", "YOLOv8", "OpenCV", "TensorFlow", "IoT / Edge Computing"],
    gradient: "from-lime-500 to-green-900",
    color: "#84cc16",
    links: [
      { label: "GitHub", url: "https://github.com/tanish1608/AI-Traffic-Lights" },
    ],
  },
  {
    id: "buildbot-ai",
    title: "BuildBot AI",
    subtitle: "Autonomous Full-Stack Generation",
    year: "2024",
    category: "AI Infrastructure",
    description:
      "Engineered a local, privacy-first AI platform capable of generating complete Next.js/Node apps. Built custom syntax validation loops that force the LLM to test and repair its own output prior to delivery, ensuring zero-hallucination, executable code.",
    technologies: ["React", "Node.js", "Llama 3.1", "Ollama", "Docker", "Syntax Validation"],
    gradient: "from-blue-500 to-cyan-900",
    color: "#0ea5e9",
    links: [
      { label: "GitHub", url: "https://github.com/tanish1608/AI-Developer" },
    ],
  },
  {
    id: "fitchgroup-esg",
    title: "FitchGroup ESG Modeler",
    subtitle: "Financial Data Skew Normalization",
    year: "2024",
    category: "Fintech Hackathon",
    description:
      "Solved extreme Pareto distribution skew in financial ESG datasets by building a 'physics-constrained' ensemble machine learning model. Optimized the data engineering pipeline to normalize and predict across highly skewed data in enterprise-scale fintech environments.",
    technologies: ["Python", "Pandas", "XGBoost", "Ensemble Models", "Data Engineering"],
    gradient: "from-yellow-500 to-amber-900",
    color: "#fbbf24",
    links: [
      { label: "GitHub (Private)", url: "https://github.com/tanish1608/fitch-codeathon2025" },
    ],
  },
  {
    id: "project-argus",
    title: "Project Argus",
    subtitle: "Multi-Agent Procedural Generation Engine",
    year: "2024",
    category: "AI Architecture",
    description:
      "Engineered a dynamic, multi-agent simulation engine powered by the Gemini API. Bypassed standard chatbot limitations by implementing long-term vector memory (FAISS) for autonomous NPCs. Architected a mathematical semantic contradiction detection system that flags narrative divergences in real-time.",
    technologies: ["Python", "FAISS Vector DB", "Gemini API", "State Machines", "ElevenLabs TTS"],
    gradient: "from-slate-700 to-black",
    color: "#64748b",
    links: [
      { label: "GitHub", url: "#" }, // <-- Add correct link here
    ],
  },
  {
    id: "marketique-saas",
    title: "Marketique",
    subtitle: "Autonomous Social Media Infrastructure",
    year: "2024",
    category: "Full Stack SaaS",
    description:
      "Architected a serverless publishing pipeline for Instagram. Engineered secure OAuth token lifecycle management and orchestrated database-level cron jobs (pg_cron) to trigger Supabase Edge Functions. Autonomously generates context-aware content and executes Graph API mutations.",
    technologies: ["React", "TypeScript", "Supabase Edge Functions", "pg_cron", "Instagram Graph API"],
    gradient: "from-violet-600 to-purple-900",
    color: "#8b5cf6",
    links: [
      { label: "GitHub (Private)", url: "https://github.com/tanish1608/ai-insta-spark" },
    ],
  },
  {
    id: "geo-estate",
    title: "Geospatial Real Estate Engine",
    subtitle: "High-Performance Geospatial Data Sync",
    year: "2023",
    category: "Web Platforms",
    description:
      "Built a high-performance property platform capable of handling complex geographical datasets (KML/GeoJSON). Integrated Mapbox with custom rendering logic to display dense property markers without dropping frames. Managed complex client-side state with Zustand and ensured data consistency via Supabase.",
    technologies: ["React", "TypeScript", "Zustand", "Mapbox", "Supabase Realtime"],
    gradient: "from-sky-500 to-blue-900",
    color: "#0ea5e9",
    links: [
      { label: "GitHub", url: "https://github.com/tanish1608/FullStack-realestate-platform" },
    ],
  },
  {
    id: "fitmapp-telemetry",
    title: "Fitmapp Biometrics",
    subtitle: "Predictive Biometric Analytics Engine",
    year: "2023",
    category: "Data Analytics",
    description:
      "Developed a robust biometric telemetry tracking system. Engineered an analytical layer that processes raw user fitness metrics to generate predictive insights and personalized recommendations. Implemented strict Row Level Security (RLS) in the database to ensure absolute privacy of sensitive health data.",
    technologies: ["React", "TypeScript", "Vite", "Supabase RLS", "Predictive Analytics"],
    gradient: "from-emerald-500 to-teal-900",
    color: "#10b981",
    links: [
      { label: "GitHub", url: "https://github.com/tanish1608/Fitmapp-website" },
    ],
  },
];
// ── Tech Stack ─────────────────────────────────────────────────────────────────

export const techStack: Record<string, Skill[]> = {
  "Frontend": [
    { name: "React", color: "#61dafb" },
    { name: "Next.js", color: "#000000" },
    { name: "TypeScript", color: "#3178c6" },
    { name: "TailwindCSS", color: "#06b6d4" },
    { name: "Framer Motion", color: "#e10098" },
    { name: "Zustand", color: "#764abc" },       // Added (Geo Estate)
    { name: "Mapbox", color: "#000000" },        // Added (Geo Estate)
    { name: "WebSockets", color: "#f39c12" },    // Added (PitchPerfect / Low Latency)
  ],
  "Backend & Database": [
    { name: "Python", color: "#3776ab" },
    { name: "Node.js", color: "#3c873a" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "Supabase", color: "#3ecf8e" },      // Critical (Marketique, Fitmapp, Geo Estate)
    { name: "Redis", color: "#dc382d" },
    { name: "GraphQL & REST", color: "#e10098" },
    { name: "Pandas", color: "#150458" },        // Added (FitchGroup / Data Skew)
    { name: "C / C++", color: "#00599c" },       // Added (Hardware/Patent context)
  ],
  "AI & Machine Learning": [
    { name: "TensorFlow", color: "#ff6f00" },
    { name: "PyTorch", color: "#ee4c2c" },
    { name: "Vector DBs (FAISS)", color: "#10b981" }, // Critical (Project Argus / Thunder Client)
    { name: "LLM Agents", color: "#a21caf" },    // Critical (Argus / Backing Agent)
    { name: "OpenAI / Gemini", color: "#10a37f" },
    { name: "SBERT", color: "#4f46e5" },         // Added (Thunder Client Semantic Search)
  ],
  "DevOps & Architecture": [
    { name: "Docker", color: "#2496ed" },
    { name: "AWS", color: "#ff9900" },
    { name: "CI/CD Pipeline", color: "#40b682" },
    { name: "Edge Functions", color: "#8b5cf6" },// Critical (Marketique / Serverless)
    { name: "System Design", color: "#6366f1" },
    { name: "Distributed Systems", color: "#0ea5e9" },
    { name: "Sensor Fusion", color: "#f59e0b" }, // Added (Patent context)
    { name: "Row Level Security", color: "#ef4444" }, // Added (Fitmapp / DB Architecture)
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
