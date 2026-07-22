import { AppConfig, AppId, DesktopIcon, Project, SkillMetric } from "@/components/desktop/types";

export const APPS: Record<string, AppConfig> = {
  about: {
    id: "about",
    title: "Text Editor",
    icon: "FileText",
    color: "#f4f4f4",
    width: 640,
    height: 480,
    minWidth: 320,
    minHeight: 240,
    resizable: true,
    category: "Accessories",
  },
  skills: {
    id: "skills",
    title: "System Monitor",
    icon: "Activity",
    color: "#2d2d2d",
    width: 720,
    height: 520,
    minWidth: 400,
    minHeight: 300,
    resizable: true,
    category: "System",
  },
  projects: {
    id: "projects",
    title: "Files",
    icon: "FolderOpen",
    color: "#f4f4f4",
    width: 800,
    height: 560,
    minWidth: 400,
    minHeight: 300,
    resizable: true,
    category: "Accessories",
  },
  resume: {
    id: "resume",
    title: "Document Viewer",
    icon: "File",
    color: "#f4f4f4",
    width: 680,
    height: 720,
    minWidth: 360,
    minHeight: 400,
    resizable: true,
    category: "Office",
  },
  contact: {
    id: "contact",
    title: "Terminal",
    icon: "Terminal",
    color: "#300a24",
    width: 700,
    height: 460,
    minWidth: 360,
    minHeight: 240,
    resizable: true,
    category: "System",
  },
  browser: {
    id: "browser",
    title: "Firefox Web Browser",
    icon: "Globe",
    color: "#1e1e2e",
    width: 900,
    height: 620,
    minWidth: 400,
    minHeight: 300,
    resizable: true,
    category: "Internet",
  },
  vscode: {
    id: "vscode",
    title: "Visual Studio Code",
    icon: "Code2",
    color: "#1e1e2e",
    width: 920,
    height: 620,
    minWidth: 420,
    minHeight: 300,
    resizable: true,
    category: "Development",
  },
  terminal: {
    id: "terminal",
    title: "Terminal",
    icon: "Terminal",
    color: "#300a24",
    width: 700,
    height: 460,
    minWidth: 360,
    minHeight: 240,
    resizable: true,
    category: "System",
  },
  files: {
    id: "files",
    title: "Files",
    icon: "FolderOpen",
    color: "#f4f4f4",
    width: 800,
    height: 560,
    minWidth: 400,
    minHeight: 300,
    resizable: true,
    category: "Accessories",
  },
  settings: {
    id: "settings",
    title: "Settings",
    icon: "Settings",
    color: "#f4f4f4",
    width: 560,
    height: 420,
    minWidth: 320,
    minHeight: 240,
    resizable: false,
    category: "System",
  },
  trash: {
    id: "trash",
    title: "Trash",
    icon: "Trash2",
    color: "#f4f4f4",
    width: 400,
    height: 300,
    minWidth: 300,
    minHeight: 200,
    resizable: false,
    category: "Accessories",
  },
};

export const DESKTOP_ICONS: DesktopIcon[] = [
  { id: "home", appId: "about", label: "About Me", x: 24, y: 24 },
  { id: "projects", appId: "projects", label: "Projects", x: 24, y: 104 },
  { id: "resume", appId: "resume", label: "Resume.pdf", x: 24, y: 184 },
  { id: "contact", appId: "contact", label: "Contact", x: 24, y: 264 },
  { id: "github", appId: "browser", label: "GitHub", x: 24, y: 344, url: "https://github.com/ashrit" },
  { id: "linkedin", appId: "browser", label: "LinkedIn", x: 24, y: 424, url: "https://linkedin.com/in/ashrit" },
  { id: "trash", appId: "trash", label: "Trash", x: 24, y: 504 },
];

export const DOCK_APPS: AppId[] = [
  "files",
  "browser",
  "vscode",
  "terminal",
  "about",
  "skills",
  "projects",
  "resume",
  "contact",
  "settings",
  "trash",
];

export const SKILL_METRICS: SkillMetric[] = [
  { label: "CPU Usage", value: 92, color: "#e95420", usage: 78 },
  { label: "RAM Usage", value: 85, color: "#772953", usage: 82 },
  { label: "GPU Usage", value: 76, color: "#2c001e", usage: 91 },
  { label: "Storage", value: 64, color: "#5e2750", usage: 45 },
  { label: "Network", value: 88, color: "#aea79f", usage: 73 },
];

export const SKILL_MAP: Record<string, string> = {
  "CPU Usage": "Python",
  "RAM Usage": "Machine Learning",
  "GPU Usage": "Deep Learning",
  Storage: "Databases",
  Network: "APIs",
};

export const PROJECTS: Project[] = [
  {
    id: "ai-1",
    name: "Neural Vision",
    description: "Real-time object detection using YOLO and TensorFlow.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    github: "https://github.com/ashrit/neural-vision",
    folder: "AI",
  },
  {
    id: "ai-2",
    name: "NLP Assistant",
    description: "Conversational AI assistant powered by transformers.",
    tech: ["PyTorch", "Hugging Face", "FastAPI"],
    github: "https://github.com/ashrit/nlp-assistant",
    folder: "AI",
  },
  {
    id: "ml-1",
    name: "Churn Predictor",
    description: "Customer churn prediction model with 94% accuracy.",
    tech: ["Scikit-learn", "Pandas", "XGBoost"],
    github: "https://github.com/ashrit/churn-predictor",
    folder: "Machine Learning",
  },
  {
    id: "ml-2",
    name: "Recommender Engine",
    description: "Collaborative filtering recommendation engine.",
    tech: ["Python", "Surprise", "Redis"],
    github: "https://github.com/ashrit/recommender-engine",
    folder: "Machine Learning",
  },
  {
    id: "ds-1",
    name: "Sales Dashboard",
    description: "Interactive sales analytics dashboard.",
    tech: ["Python", "Plotly", "Dash"],
    github: "https://github.com/ashrit/sales-dashboard",
    folder: "Data Science",
  },
  {
    id: "ds-2",
    name: "Sentiment Analyzer",
    description: "Twitter sentiment analysis pipeline.",
    tech: ["Python", "NLTK", "Airflow"],
    github: "https://github.com/ashrit/sentiment-analyzer",
    folder: "Data Science",
  },
  {
    id: "web-1",
    name: "Portfolio OS",
    description: "This Ubuntu-inspired portfolio website.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/ashrit/portfolio-os",
    folder: "Web Development",
  },
  {
    id: "web-2",
    name: "E-commerce UI",
    description: "Modern e-commerce storefront UI.",
    tech: ["React", "TypeScript", "Shadcn"],
    github: "https://github.com/ashrit/ecommerce-ui",
    folder: "Web Development",
  },
  {
    id: "fs-1",
    name: "Task Manager",
    description: "Full-stack task management SaaS.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    github: "https://github.com/ashrit/task-manager",
    folder: "Full Stack",
  },
  {
    id: "fs-2",
    name: "Chat App",
    description: "Real-time chat with WebSockets.",
    tech: ["Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/ashrit/chat-app",
    folder: "Full Stack",
  },
];

export const FOLDERS = [
  "AI",
  "Machine Learning",
  "Data Science",
  "Web Development",
  "Full Stack",
];

export const VSCODE_FILES: Record<string, { language: string; content: string }> = {
  "about.js": {
    language: "javascript",
    content: `const about = {
  name: "Ashrit",
  role: "Full Stack Developer & AI Enthusiast",
  summary: \`
    I build elegant, high-performance web applications and
    intelligent systems that solve real-world problems.
  \`,
  education: [
    "B.Tech in Computer Science",
    "Specialization in AI/ML"
  ],
  interests: [
    "Open Source",
    "Distributed Systems",
    "Human-Computer Interaction",
    "Creative Coding"
  ],
  goals: [
    "Ship products that millions love",
    "Contribute to impactful OSS projects",
    "Bridge design and engineering"
  ]
};

export default about;`,
  },
  "projects.js": {
    language: "javascript",
    content: `const projects = [
  {
    name: "Portfolio OS",
    stack: ["Next.js", "React", "Tailwind", "Framer Motion"],
    description: "An Ubuntu desktop experience as a portfolio website."
  },
  {
    name: "Neural Vision",
    stack: ["Python", "TensorFlow", "OpenCV"],
    description: "Real-time object detection pipeline."
  },
  {
    name: "Task Manager",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    description: "Full-stack SaaS for team productivity."
  }
];

export default projects;`,
  },
  "skills.js": {
    language: "javascript",
    content: `const skills = {
  languages: ["Python", "TypeScript", "JavaScript", "SQL", "Go"],
  frameworks: ["Next.js", "React", "Node.js", "FastAPI", "Django"],
  ml: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face"],
  databases: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
  devops: ["Docker", "Kubernetes", "GitHub Actions", "Azure"],
  design: ["Figma", "Tailwind CSS", "Framer Motion"]
};

export default skills;`,
  },
  "contact.js": {
    language: "javascript",
    content: `const contact = {
  email: "ashrit@portfolio.dev",
  github: "github.com/ashrit",
  linkedin: "linkedin.com/in/ashrit",
  twitter: "x.com/ashrit",
  availability: "Open to full-time and freelance opportunities",
  preferred: [
    "Frontend engineering roles",
    "AI/ML product teams",
    "Remote-first startups"
  ]
};

export default contact;`,
  },
};
