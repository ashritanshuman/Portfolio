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
    title: "Projects",
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
    title: "Contact",
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
  { id: "github", appId: "browser", label: "GitHub", x: 24, y: 344, url: "https://github.com/ashritanshuman" },
  { id: "linkedin", appId: "browser", label: "LinkedIn", x: 24, y: 424, url: "https://linkedin.com/in/ashritanshuman/" },
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
  { label: "CPU Usage", value: 95, color: "#e95420", usage: 88 },
  { label: "RAM Usage", value: 90, color: "#772953", usage: 84 },
  { label: "GPU Usage", value: 86, color: "#2c001e", usage: 80 },
  { label: "Storage", value: 82, color: "#5e2750", usage: 75 },
  { label: "Network", value: 88, color: "#aea79f", usage: 82 },
];

export const SKILL_MAP: Record<string, string> = {
  "CPU Usage": "Python, Java, JavaScript, SQL",
  "RAM Usage": "React.js, Tailwind CSS, HTML/JS",
  "GPU Usage": "OpenRouter AI, NumPy, Pandas",
  Storage: "MongoDB, Firebase, Express.js",
  Network: "Git, GitHub, Docker, Linux",
};

export const PROJECTS: Project[] = [
  {
    id: "skillora-ai",
    name: "Skillora AI – AI-Powered Resume Builder",
    description: "AI-powered resume-building platform enabling users to create structured, professional resumes with dynamic customization, real-time preview, and AI content generation.",
    tech: ["React.js", "Tailwind CSS", "OpenRouter AI API Integration"],
    link: "https://skilloraai.vercel.app/",
    github: "https://github.com/ashritanshuman/skillora-ai",
    folder: "AI",
  },
  {
    id: "pathgen",
    name: "PathGen - Skills Roadmap Generator",
    description: "AI-powered learning roadmap platform that generates structured, personalized learning paths for technical skills and career roles with stage-by-stage curated resources.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    link: "https://ashritanshuman.github.io/skill-roadmap-generator/",
    github: "https://github.com/ashritanshuman/skill-roadmap-generator",
    folder: "Web Development",
  },
  {
    id: "sgf-phoenix",
    name: "Study Group Finder",
    description: "Full-stack student collaboration platform to discover and connect with study groups based on shared academic interests, featuring secure auth and real-time cloud data.",
    tech: ["React.js", "Tailwind CSS", "Firebase"],
    link: "https://sgfphoneix.vercel.app/",
    github: "https://github.com/ashritanshuman/study-group-finder",
    folder: "Full Stack",
  },
  {
    id: "sih-alumni",
    name: "Digital Alumni Data Management Platform",
    description: "Alumni Data Management and Engagement Platform built as Team Lead during Smart India Hackathon 2025 at ITM University Gwalior.",
    tech: ["React.js", "Tailwind CSS", "Express.js", "MongoDB"],
    github: "https://github.com/ashritanshuman/alumni-platform",
    folder: "Hackathons",
  },
  {
    id: "ubuntu-portfolio",
    name: "Ubuntu Portfolio OS",
    description: "Interactive desktop environment portfolio simulating Ubuntu Linux built with Next.js, React, Tailwind CSS, and Framer Motion.",
    tech: ["Next.js", "React.js", "Tailwind CSS", "TypeScript"],
    link: "https://ashritanshuman.vercel.app",
    github: "https://github.com/ashritanshuman/ubuntu-portfolio",
    folder: "Web Development",
  },
];

export const FOLDERS: ("AI" | "Web Development" | "Full Stack" | "Hackathons")[] = [
  "Full Stack",
  "Web Development",
  "AI",
  "Hackathons",
];

export const VSCODE_FILES: Record<string, { language: string; content: string }> = {
  "about.js": {
    language: "javascript",
    content: `const about = {
  name: "Ashrit Anshuman Pradhan",
  location: "Gwalior, Madhya Pradesh, India",
  role: "Full Stack Developer & Graphic Designer",
  education: {
    institution: "ITM University Gwalior",
    degree: "Bachelor of Technology in Computer Science",
    duration: "August 2025 -- September 2029"
  },
  experience: {
    role: "Freelance Web Developer and Graphic Designer",
    duration: "May 2025 -- Present",
    highlights: [
      "Delivered responsive, customized websites for 10+ local business clients",
      "Completed graphic design & promotional projects for 20+ clients",
      "Partnered with 3 schools for promotional event campaigns & creative outreach"
    ]
  },
  leadership: {
    event: "Smart India Hackathon (September 2025)",
    role: "Team Lead (6-member team)",
    project: "Digital Alumni Data Management and Engagement Platform"
  }
};

export default about;`,
  },
  "projects.js": {
    language: "javascript",
    content: `const projects = [
  {
    name: "Skillora AI – AI-Powered Resume Builder",
    stack: ["React.js", "Tailwind CSS", "OpenRouter AI API"],
    live: "https://skilloraai.vercel.app/",
    description: "Dynamic resume builder with real-time preview & AI content generation."
  },
  {
    name: "PathGen - Skills Roadmap Generator",
    stack: ["HTML", "Tailwind CSS", "JavaScript"],
    live: "https://ashritanshuman.github.io/skill-roadmap-generator/",
    description: "AI-powered personalized learning roadmap generator."
  },
  {
    name: "Study Group Finder",
    stack: ["React.js", "Tailwind CSS", "Firebase"],
    live: "https://sgfphoneix.vercel.app/",
    description: "Full-stack peer academic collaboration platform."
  },
  {
    name: "Digital Alumni Management Platform",
    stack: ["React.js", "Express.js", "MongoDB"],
    description: "SIH 2025 Alumni networking & data management platform."
  }
];

export default projects;`,
  },
  "skills.js": {
    language: "javascript",
    content: `const skills = {
  languages: ["Python", "Java", "JavaScript", "SQL"],
  developerTools: ["Git", "GitHub", "VS Code", "Docker", "Linux"],
  technologiesAndFrameworks: [
    "React.js",
    "Tailwind CSS",
    "MongoDB",
    "Express.js",
    "Firebase",
    "NumPy",
    "Pandas",
    "Matplotlib"
  ]
};

export default skills;`,
  },
  "contact.js": {
    language: "javascript",
    content: `const contact = {
  name: "Ashrit Anshuman Pradhan",
  email: "ashrit39@gmail.com",
  phone: "+91 6370205656",
  github: "https://github.com/ashritanshuman",
  linkedin: "https://linkedin.com/in/ashritanshuman/",
  portfolio: "https://ashritanshuman.vercel.app",
  location: "Gwalior, Madhya Pradesh, India",
  availability: "Open for freelance projects and technical opportunities"
};

export default contact;`,
  },
};
