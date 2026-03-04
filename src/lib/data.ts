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
    id: "ship-it",
    label: "Ship It",
    emoji: "🚀",
    color: "#ef4444",
    bg: "linear-gradient(135deg, #fecaca, #fca5a5)",
    rotation: -12,
    x: 8,
    y: 15,
    scale: 1,
  },
  {
    id: "react",
    label: "React",
    emoji: "⚛️",
    color: "#06b6d4",
    bg: "linear-gradient(135deg, #cffafe, #a5f3fc)",
    rotation: 8,
    x: 75,
    y: 10,
    scale: 1.1,
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    emoji: "🤖",
    color: "#8b5cf6",
    bg: "linear-gradient(135deg, #ede9fe, #ddd6fe)",
    rotation: -6,
    x: 5,
    y: 60,
    scale: 0.95,
  },
  {
    id: "code",
    label: "< / >",
    emoji: "💻",
    color: "#10b981",
    bg: "linear-gradient(135deg, #d1fae5, #a7f3d0)",
    rotation: 15,
    x: 80,
    y: 55,
    scale: 1.05,
  },
  {
    id: "cracked",
    label: "Cracked",
    emoji: "🔥",
    color: "#f59e0b",
    bg: "linear-gradient(135deg, #fef3c7, #fde68a)",
    rotation: -20,
    x: 42,
    y: 72,
    scale: 1,
  },
  {
    id: "fullstack",
    label: "Full Stack",
    emoji: "🧩",
    color: "#ec4899",
    bg: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
    rotation: 10,
    x: 70,
    y: 75,
    scale: 0.9,
  },
  {
    id: "terminal",
    label: "$ sudo",
    emoji: "⌨️",
    color: "#6366f1",
    bg: "linear-gradient(135deg, #e0e7ff, #c7d2fe)",
    rotation: -8,
    x: 15,
    y: 38,
    scale: 1.1,
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
    id: "synto",
    title: "Synto",
    subtitle: "AI-Powered Blockchain Interface",
    year: "2025",
    category: "Startup Project",
    description:
      "An AI-powered interface that transforms complex blockchain interactions into simple, natural language commands. Whether you want to send tokens, stake assets, swap coins, or even create NFTs or liquidity pools, just tell Synto what to do — no manual wallet interactions, no technical jargon. One of my biggest projects yet.",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Web3.js",
      "shadcn-ui",
      "TypeScript",
      "Phantom Wallet",
      "OpenAI API",
      "Vercel AI SDK",
      "Solana Agent Kit",
      "Neon",
      "Prisma",
    ],
    gradient: "from-violet-600 via-purple-600 to-indigo-700",
    color: "#8b5cf6",
    links: [
      { label: "Website", url: "#" },
      { label: "Launch Video", url: "#" },
      { label: "GitHub", url: "#" },
      { label: "Technical Video", url: "#" },
      { label: "Pitch Deck", url: "#" },
    ],
    featured: true,
  },
  {
    id: "closet-ai",
    title: "AI Closet Assistant",
    subtitle: "Computer Vision Meets Fashion",
    year: "2025",
    category: "Hackathon Winner",
    description:
      "A revolutionary wardrobe management system that uses GPT-4 Vision to digitize your closet, intelligently categorize garments, and generate context-aware outfit suggestions based on weather, occasion, and personal style. Won 1st place at Columbia Divhacks 2025.",
    technologies: [
      "React",
      "Python",
      "GPT-4V",
      "FastAPI",
      "TensorFlow",
      "PostgreSQL",
      "AWS S3",
      "Docker",
    ],
    gradient: "from-cyan-500 via-blue-600 to-indigo-600",
    color: "#06b6d4",
    links: [
      { label: "Demo Video", url: "#" },
      { label: "GitHub", url: "#" },
      { label: "Devpost", url: "#" },
    ],
    featured: true,
  },
];

// ── Archive Projects (for the grid) ────────────────────────────────────────────

export const archiveProjects: Project[] = [
  {
    id: "synto",
    title: "Synto",
    subtitle: "AI-Powered Blockchain Interface",
    year: "2025",
    category: "Startup Project",
    description:
      "An AI-powered interface that transforms complex blockchain interactions into simple, natural language commands. Whether you want to send tokens, stake assets, swap coins, or even create NFTs or liquidity pools, just tell Synto what to do.",
    technologies: ["Next.js", "TailwindCSS", "Web3.js", "TypeScript", "OpenAI API", "Solana Agent Kit", "Prisma"],
    gradient: "from-violet-600 to-purple-900",
    color: "#8b5cf6",
    links: [
      { label: "Website", url: "#" },
      { label: "GitHub", url: "#" },
      { label: "Pitch Deck", url: "#" },
    ],
  },
  {
    id: "closet-ai",
    title: "AI Closet Assistant",
    subtitle: "Computer Vision Meets Fashion",
    year: "2025",
    category: "Hackathon Winner",
    description:
      "Wardrobe management system using GPT-4 Vision to digitize your closet and generate context-aware outfit suggestions. Won 1st place at Columbia Divhacks.",
    technologies: ["React", "Python", "GPT-4V", "FastAPI", "TensorFlow", "PostgreSQL"],
    gradient: "from-cyan-500 to-blue-900",
    color: "#06b6d4",
    links: [
      { label: "Demo Video", url: "#" },
      { label: "GitHub", url: "#" },
    ],
  },
  {
    id: "fraud-detection",
    title: "Real-Time Fraud Engine",
    subtitle: "ML-Driven Anomaly Detection",
    year: "2024",
    category: "Enterprise ML",
    description:
      "A real-time fraud detection pipeline that processes millions of transactions using streaming ML models with sub-100ms latency. Built for the HSBC AI Hackathon.",
    technologies: ["Python", "Kafka", "TensorFlow", "Redis", "FastAPI", "Docker", "Kubernetes"],
    gradient: "from-red-500 to-rose-900",
    color: "#ef4444",
    links: [
      { label: "Architecture Doc", url: "#" },
      { label: "GitHub", url: "#" },
    ],
  },
  {
    id: "chair-patent",
    title: "Smart Chair System",
    subtitle: "AI Ergonomic Positioning",
    year: "2024",
    category: "Patent / Research",
    description:
      "An AI-based modular chair positioning system that uses sensor fusion and reinforcement learning to adapt seating configurations for optimal ergonomics in real-time.",
    technologies: ["Python", "TensorFlow", "IoT Sensors", "Raspberry Pi", "MQTT", "PostgreSQL"],
    gradient: "from-amber-500 to-orange-900",
    color: "#f59e0b",
    links: [
      { label: "Patent Filing", url: "#" },
      { label: "Research Paper", url: "#" },
    ],
  },
  {
    id: "thunder-client",
    title: "Thunder Client",
    subtitle: "VS Code REST API Client",
    year: "2023–Present",
    category: "Open Source",
    description:
      "Core contributor and stakeholder for the leading VS Code REST API testing extension with 10M+ installs. Led technical architecture improvements and feature development.",
    technologies: ["TypeScript", "VS Code API", "Node.js", "GraphQL", "CI/CD"],
    gradient: "from-purple-500 to-violet-900",
    color: "#a855f7",
    links: [
      { label: "VS Code Marketplace", url: "#" },
      { label: "GitHub", url: "#" },
    ],
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    subtitle: "The Hyper-Interactive Canvas",
    year: "2025",
    category: "Personal",
    description:
      "A physics-based, animation-heavy portfolio built with Next.js, Framer Motion, and TailwindCSS. Features draggable stickers, horizontal carousels, masonry grids, and shared layout animations.",
    technologies: ["Next.js", "Framer Motion", "TailwindCSS", "TypeScript", "Lucide React"],
    gradient: "from-emerald-500 to-teal-900",
    color: "#10b981",
    links: [
      { label: "Source Code", url: "#" },
    ],
  },
];

// ── Tech Stack ─────────────────────────────────────────────────────────────────

export const techStack: Record<string, Skill[]> = {
  Frontend: [
    { name: "React", color: "#61dafb" },
    { name: "Angular", color: "#dd0031" },
    { name: "AngularJS", color: "#e23237" },
    { name: "TypeScript", color: "#3178c6" },
    { name: "JavaScript", color: "#f7df1e" },
    { name: "Chart.js", color: "#ff6384" },
    { name: "Tailwind", color: "#06b6d4" },
    { name: "Bootstrap", color: "#7952b3" },
    { name: "Figma", color: "#f24e1e" },
    { name: "Storybook", color: "#ff4785" },
    { name: "HTML5", color: "#e34f26" },
    { name: "CSS3", color: "#1572b6" },
  ],
  "Backend / ML": [
    { name: "ASP.NET Web API", color: "#512bd4" },
    { name: "Ruby on Rails", color: "#cc0000" },
    { name: "GraphQL", color: "#e10098" },
    { name: "Apollo", color: "#311c87" },
    { name: "SQL Server", color: "#cc2927" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "Elasticsearch", color: "#005571" },
    { name: "Redis", color: "#dc382d" },
    { name: "Sidekiq", color: "#b1003e" },
    { name: "Azure Service Bus", color: "#0078d4" },
  ],
  "DevOps / Systems": [
    { name: "Kubernetes", color: "#326ce5" },
    { name: "GitHub Actions", color: "#2088ff" },
    { name: "Infrastructure as Code", color: "#7b42bc" },
    { name: "CI/CD", color: "#40b682" },
    { name: "Docker", color: "#2496ed" },
  ],
  Other: [
    { name: "DSA", color: "#f97316" },
    { name: "System Design", color: "#6366f1" },
    { name: "Git", color: "#f05032" },
    { name: "Python", color: "#3776ab" },
    { name: "Machine Learning", color: "#ff6f00" },
    { name: "Cypress", color: "#17202c" },
    { name: "React Testing Library", color: "#e33332" },
    { name: "Vitest", color: "#729b1b" },
    { name: "Responsive Design", color: "#06b6d4" },
    { name: "Critical Thinking", color: "#8b5cf6" },
    { name: "Problem Solving", color: "#10b981" },
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
    id: "thunder-client",
    role: "Stakeholder & Software Engineer",
    company: "Thunder Client",
    companyUrl: "https://thunderclient.com",
    period: "2023 — Present",
    location: "Remote",
    type: "open-source",
    description:
      "Core contributor and stakeholder for the leading VS Code REST API testing extension with 10M+ installs. Driving technical architecture, feature development, and engineering culture.",
    highlights: [
      "Architected plugin system enabling 3rd-party extension integrations",
      "Reduced API response rendering time by 40% through virtualized lists",
      "Implemented GraphQL support with schema introspection & autocomplete",
      "Led migration from Webpack to esbuild, cutting build times by 80%",
    ],
    technologies: ["TypeScript", "VS Code API", "Node.js", "GraphQL", "esbuild", "CI/CD"],
    color: "#8b5cf6",
    emoji: "⚡",
  },
  {
    id: "reforge-robotics",
    role: "Software Engineer",
    company: "Reforge Robotics",
    period: "2024 — 2025",
    location: "New York, NY",
    type: "contract",
    description:
      "Built AI-powered software for next-generation collaborative robotics. Developed real-time control interfaces and machine learning pipelines for robotic arm coordination.",
    highlights: [
      "Built real-time 3D visualization dashboard for robotic arm telemetry",
      "Developed ML pipeline for predictive maintenance using sensor fusion",
      "Created WebSocket-based control interface with sub-50ms latency",
      "Integrated computer vision for automated quality inspection",
    ],
    technologies: ["React", "Python", "TensorFlow", "WebSocket", "Three.js", "Docker"],
    color: "#ef4444",
    emoji: "🤖",
  },
  {
    id: "player-pursuits",
    role: "Full-Stack Engineer",
    company: "PlayerPursuits",
    period: "2025",
    location: "Remote",
    type: "contract",
    description:
      "Building the future platform for collegiate golfers. Developing a comprehensive analytics and recruitment platform connecting student-athletes with college programs.",
    highlights: [
      "Architected full-stack platform with Next.js, PostgreSQL & real-time analytics",
      "Built tournament scoring engine processing 10K+ rounds with live leaderboards",
      "Implemented video analysis pipeline with AI-powered swing breakdown",
      "Designed recruiter dashboard with advanced filtering and athlete comparison",
    ],
    technologies: ["Next.js", "PostgreSQL", "TailwindCSS", "Prisma", "AWS", "TypeScript"],
    color: "#10b981",
    emoji: "⛳",
  },
  {
    id: "hsbc-intern",
    role: "AI/ML Engineering Intern",
    company: "HSBC",
    period: "Summer 2024",
    location: "Pune, India",
    type: "internship",
    description:
      "Selected from 4,700+ applicants for the AI-focused engineering program. Built production ML models for real-time fraud detection and anomaly scoring.",
    highlights: [
      "Built fraud detection model achieving 97.3% precision on live transaction data",
      "Designed streaming pipeline processing 2M+ transactions/day with Kafka",
      "Won internal hackathon — top team out of 4,700+ participants globally",
      "Presented ML architecture to VP of Engineering and CTO office",
    ],
    technologies: ["Python", "TensorFlow", "Kafka", "Redis", "FastAPI", "Docker"],
    color: "#dc2626",
    emoji: "🏦",
  },
];
