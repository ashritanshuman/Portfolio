(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APPS",
    ()=>APPS,
    "DESKTOP_ICONS",
    ()=>DESKTOP_ICONS,
    "DOCK_APPS",
    ()=>DOCK_APPS,
    "FOLDERS",
    ()=>FOLDERS,
    "PROJECTS",
    ()=>PROJECTS,
    "SKILL_MAP",
    ()=>SKILL_MAP,
    "SKILL_METRICS",
    ()=>SKILL_METRICS,
    "VSCODE_FILES",
    ()=>VSCODE_FILES
]);
const APPS = {
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
        category: "Accessories"
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
        category: "System"
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
        category: "Accessories"
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
        category: "Office"
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
        category: "System"
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
        category: "Internet"
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
        category: "Development"
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
        category: "System"
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
        category: "Accessories"
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
        category: "System"
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
        category: "Accessories"
    }
};
const DESKTOP_ICONS = [
    {
        id: "home",
        appId: "about",
        label: "About Me",
        x: 24,
        y: 24
    },
    {
        id: "projects",
        appId: "projects",
        label: "Projects",
        x: 24,
        y: 104
    },
    {
        id: "resume",
        appId: "resume",
        label: "Resume.pdf",
        x: 24,
        y: 184
    },
    {
        id: "contact",
        appId: "contact",
        label: "Contact",
        x: 24,
        y: 264
    },
    {
        id: "github",
        appId: "browser",
        label: "GitHub",
        x: 24,
        y: 344,
        url: "https://github.com/ashrit"
    },
    {
        id: "linkedin",
        appId: "browser",
        label: "LinkedIn",
        x: 24,
        y: 424,
        url: "https://linkedin.com/in/ashrit"
    },
    {
        id: "trash",
        appId: "trash",
        label: "Trash",
        x: 24,
        y: 504
    }
];
const DOCK_APPS = [
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
    "trash"
];
const SKILL_METRICS = [
    {
        label: "CPU Usage",
        value: 92,
        color: "#e95420",
        usage: 78
    },
    {
        label: "RAM Usage",
        value: 85,
        color: "#772953",
        usage: 82
    },
    {
        label: "GPU Usage",
        value: 76,
        color: "#2c001e",
        usage: 91
    },
    {
        label: "Storage",
        value: 64,
        color: "#5e2750",
        usage: 45
    },
    {
        label: "Network",
        value: 88,
        color: "#aea79f",
        usage: 73
    }
];
const SKILL_MAP = {
    "CPU Usage": "Python",
    "RAM Usage": "Machine Learning",
    "GPU Usage": "Deep Learning",
    Storage: "Databases",
    Network: "APIs"
};
const PROJECTS = [
    {
        id: "ai-1",
        name: "Neural Vision",
        description: "Real-time object detection using YOLO and TensorFlow.",
        tech: [
            "Python",
            "TensorFlow",
            "OpenCV"
        ],
        github: "https://github.com/ashrit/neural-vision",
        folder: "AI"
    },
    {
        id: "ai-2",
        name: "NLP Assistant",
        description: "Conversational AI assistant powered by transformers.",
        tech: [
            "PyTorch",
            "Hugging Face",
            "FastAPI"
        ],
        github: "https://github.com/ashrit/nlp-assistant",
        folder: "AI"
    },
    {
        id: "ml-1",
        name: "Churn Predictor",
        description: "Customer churn prediction model with 94% accuracy.",
        tech: [
            "Scikit-learn",
            "Pandas",
            "XGBoost"
        ],
        github: "https://github.com/ashrit/churn-predictor",
        folder: "Machine Learning"
    },
    {
        id: "ml-2",
        name: "Recommender Engine",
        description: "Collaborative filtering recommendation engine.",
        tech: [
            "Python",
            "Surprise",
            "Redis"
        ],
        github: "https://github.com/ashrit/recommender-engine",
        folder: "Machine Learning"
    },
    {
        id: "ds-1",
        name: "Sales Dashboard",
        description: "Interactive sales analytics dashboard.",
        tech: [
            "Python",
            "Plotly",
            "Dash"
        ],
        github: "https://github.com/ashrit/sales-dashboard",
        folder: "Data Science"
    },
    {
        id: "ds-2",
        name: "Sentiment Analyzer",
        description: "Twitter sentiment analysis pipeline.",
        tech: [
            "Python",
            "NLTK",
            "Airflow"
        ],
        github: "https://github.com/ashrit/sentiment-analyzer",
        folder: "Data Science"
    },
    {
        id: "web-1",
        name: "Portfolio OS",
        description: "This Ubuntu-inspired portfolio website.",
        tech: [
            "Next.js",
            "React",
            "Tailwind CSS"
        ],
        github: "https://github.com/ashrit/portfolio-os",
        folder: "Web Development"
    },
    {
        id: "web-2",
        name: "E-commerce UI",
        description: "Modern e-commerce storefront UI.",
        tech: [
            "React",
            "TypeScript",
            "Shadcn"
        ],
        github: "https://github.com/ashrit/ecommerce-ui",
        folder: "Web Development"
    },
    {
        id: "fs-1",
        name: "Task Manager",
        description: "Full-stack task management SaaS.",
        tech: [
            "Next.js",
            "Prisma",
            "PostgreSQL"
        ],
        github: "https://github.com/ashrit/task-manager",
        folder: "Full Stack"
    },
    {
        id: "fs-2",
        name: "Chat App",
        description: "Real-time chat with WebSockets.",
        tech: [
            "Node.js",
            "Socket.io",
            "MongoDB"
        ],
        github: "https://github.com/ashrit/chat-app",
        folder: "Full Stack"
    }
];
const FOLDERS = [
    "AI",
    "Machine Learning",
    "Data Science",
    "Web Development",
    "Full Stack"
];
const VSCODE_FILES = {
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

export default about;`
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

export default projects;`
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

export default skills;`
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

export default contact;`
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DesktopProvider",
    ()=>DesktopProvider,
    "useDesktop",
    ()=>useDesktop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const DesktopContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const WORKSPACE_COUNT = 2;
function clampSize(width, height, minWidth, minHeight) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const maxW = window.innerWidth - 32;
    const maxH = window.innerHeight - 96;
    return {
        width: Math.max(minWidth, Math.min(width, maxW)),
        height: Math.max(minHeight, Math.min(height, maxH))
    };
}
function centerPosition(width, height, offset) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const maxW = window.innerWidth;
    const maxH = window.innerHeight;
    return {
        x: Math.max(24, Math.min(maxW - width - 24, (maxW - width) / 2 + offset)),
        y: Math.max(64, Math.min(maxH - height - 96, (maxH - height) / 2 + offset))
    };
}
function DesktopProvider({ children }) {
    _s();
    const [windows, setWindows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeWindowId, setActiveWindowId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [workspace, setWorkspaceState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [activitiesOpen, setActivitiesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [soundEnabled, setSoundEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const zIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(10);
    const openCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const getAppConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesktopProvider.useCallback[getAppConfig]": (appId)=>__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APPS"][appId] ?? __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APPS"].about
    }["DesktopProvider.useCallback[getAppConfig]"], []);
    const focusWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesktopProvider.useCallback[focusWindow]": (id)=>{
            setWindows({
                "DesktopProvider.useCallback[focusWindow]": (prev)=>{
                    const target = prev.find({
                        "DesktopProvider.useCallback[focusWindow].target": (w)=>w.id === id
                    }["DesktopProvider.useCallback[focusWindow].target"]);
                    if (!target || target.minimized) return prev;
                    zIndexRef.current += 1;
                    const nextZ = zIndexRef.current;
                    return prev.map({
                        "DesktopProvider.useCallback[focusWindow]": (w)=>w.id === id ? {
                                ...w,
                                focused: true,
                                zIndex: nextZ
                            } : {
                                ...w,
                                focused: false
                            }
                    }["DesktopProvider.useCallback[focusWindow]"]);
                }
            }["DesktopProvider.useCallback[focusWindow]"]);
            setActiveWindowId(id);
        }
    }["DesktopProvider.useCallback[focusWindow]"], []);
    const openApp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesktopProvider.useCallback[openApp]": (appId, options)=>{
            const config = getAppConfig(appId);
            const { width, height } = clampSize(config.width, config.height, config.minWidth, config.minHeight);
            const offset = openCountRef.current * 24;
            const { x, y } = centerPosition(width, height, offset);
            openCountRef.current += 1;
            const id = `${appId}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
            zIndexRef.current += 1;
            const newWindow = {
                id,
                appId,
                title: config.title,
                x,
                y,
                width,
                height,
                minimized: false,
                maximized: false,
                zIndex: zIndexRef.current,
                workspace: options?.workspace ?? workspace,
                focused: true
            };
            setWindows({
                "DesktopProvider.useCallback[openApp]": (prev)=>{
                    const updated = prev.map({
                        "DesktopProvider.useCallback[openApp].updated": (w)=>({
                                ...w,
                                focused: false
                            })
                    }["DesktopProvider.useCallback[openApp].updated"]);
                    return [
                        ...updated,
                        newWindow
                    ];
                }
            }["DesktopProvider.useCallback[openApp]"]);
            setActiveWindowId(id);
            if (options?.workspace && options.workspace !== workspace) {
                setWorkspaceState(options.workspace);
            }
            return id;
        }
    }["DesktopProvider.useCallback[openApp]"], [
        getAppConfig,
        workspace
    ]);
    const closeWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesktopProvider.useCallback[closeWindow]": (id)=>{
            setWindows({
                "DesktopProvider.useCallback[closeWindow]": (prev)=>{
                    const remaining = prev.filter({
                        "DesktopProvider.useCallback[closeWindow].remaining": (w)=>w.id !== id
                    }["DesktopProvider.useCallback[closeWindow].remaining"]);
                    const closed = prev.find({
                        "DesktopProvider.useCallback[closeWindow].closed": (w)=>w.id === id
                    }["DesktopProvider.useCallback[closeWindow].closed"]);
                    if (closed && closed.focused) {
                        const top = remaining.filter({
                            "DesktopProvider.useCallback[closeWindow]": (w)=>!w.minimized && w.workspace === closed.workspace
                        }["DesktopProvider.useCallback[closeWindow]"]).sort({
                            "DesktopProvider.useCallback[closeWindow]": (a, b)=>b.zIndex - a.zIndex
                        }["DesktopProvider.useCallback[closeWindow]"])[0];
                        if (top) {
                            setActiveWindowId(top.id);
                            return remaining.map({
                                "DesktopProvider.useCallback[closeWindow]": (w)=>({
                                        ...w,
                                        focused: w.id === top.id
                                    })
                            }["DesktopProvider.useCallback[closeWindow]"]);
                        }
                        setActiveWindowId(null);
                    }
                    return remaining;
                }
            }["DesktopProvider.useCallback[closeWindow]"]);
        }
    }["DesktopProvider.useCallback[closeWindow]"], []);
    const minimizeWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesktopProvider.useCallback[minimizeWindow]": (id)=>{
            setWindows({
                "DesktopProvider.useCallback[minimizeWindow]": (prev)=>{
                    const target = prev.find({
                        "DesktopProvider.useCallback[minimizeWindow].target": (w)=>w.id === id
                    }["DesktopProvider.useCallback[minimizeWindow].target"]);
                    if (!target) return prev;
                    const next = prev.map({
                        "DesktopProvider.useCallback[minimizeWindow].next": (w)=>w.id === id ? {
                                ...w,
                                minimized: true,
                                focused: false
                            } : w
                    }["DesktopProvider.useCallback[minimizeWindow].next"]);
                    if (target.focused) {
                        const top = next.filter({
                            "DesktopProvider.useCallback[minimizeWindow]": (w)=>!w.minimized && w.workspace === target.workspace
                        }["DesktopProvider.useCallback[minimizeWindow]"]).sort({
                            "DesktopProvider.useCallback[minimizeWindow]": (a, b)=>b.zIndex - a.zIndex
                        }["DesktopProvider.useCallback[minimizeWindow]"])[0];
                        setActiveWindowId(top?.id ?? null);
                        return next.map({
                            "DesktopProvider.useCallback[minimizeWindow]": (w)=>({
                                    ...w,
                                    focused: w.id === top?.id
                                })
                        }["DesktopProvider.useCallback[minimizeWindow]"]);
                    }
                    return next;
                }
            }["DesktopProvider.useCallback[minimizeWindow]"]);
        }
    }["DesktopProvider.useCallback[minimizeWindow]"], []);
    const maximizeWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesktopProvider.useCallback[maximizeWindow]": (id)=>{
            setWindows({
                "DesktopProvider.useCallback[maximizeWindow]": (prev)=>prev.map({
                        "DesktopProvider.useCallback[maximizeWindow]": (w)=>w.id === id ? {
                                ...w,
                                maximized: true,
                                minimized: false
                            } : w
                    }["DesktopProvider.useCallback[maximizeWindow]"])
            }["DesktopProvider.useCallback[maximizeWindow]"]);
            focusWindow(id);
        }
    }["DesktopProvider.useCallback[maximizeWindow]"], [
        focusWindow
    ]);
    const restoreWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesktopProvider.useCallback[restoreWindow]": (id, options)=>{
            setWindows({
                "DesktopProvider.useCallback[restoreWindow]": (prev)=>prev.map({
                        "DesktopProvider.useCallback[restoreWindow]": (w)=>w.id === id ? {
                                ...w,
                                minimized: false,
                                maximized: false,
                                focused: true,
                                workspace: options?.workspace ?? w.workspace
                            } : {
                                ...w,
                                focused: false
                            }
                    }["DesktopProvider.useCallback[restoreWindow]"])
            }["DesktopProvider.useCallback[restoreWindow]"]);
            setActiveWindowId(id);
        }
    }["DesktopProvider.useCallback[restoreWindow]"], []);
    const moveWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesktopProvider.useCallback[moveWindow]": (id, x, y)=>{
            setWindows({
                "DesktopProvider.useCallback[moveWindow]": (prev)=>prev.map({
                        "DesktopProvider.useCallback[moveWindow]": (w)=>w.id === id ? {
                                ...w,
                                x,
                                y,
                                maximized: false
                            } : w
                    }["DesktopProvider.useCallback[moveWindow]"])
            }["DesktopProvider.useCallback[moveWindow]"]);
        }
    }["DesktopProvider.useCallback[moveWindow]"], []);
    const resizeWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesktopProvider.useCallback[resizeWindow]": (id, width, height)=>{
            setWindows({
                "DesktopProvider.useCallback[resizeWindow]": (prev)=>prev.map({
                        "DesktopProvider.useCallback[resizeWindow]": (w)=>w.id === id ? {
                                ...w,
                                width,
                                height
                            } : w
                    }["DesktopProvider.useCallback[resizeWindow]"])
            }["DesktopProvider.useCallback[resizeWindow]"]);
        }
    }["DesktopProvider.useCallback[resizeWindow]"], []);
    const setWindowWorkspace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesktopProvider.useCallback[setWindowWorkspace]": (id, ws)=>{
            setWindows({
                "DesktopProvider.useCallback[setWindowWorkspace]": (prev)=>prev.map({
                        "DesktopProvider.useCallback[setWindowWorkspace]": (w)=>w.id === id ? {
                                ...w,
                                workspace: ws
                            } : w
                    }["DesktopProvider.useCallback[setWindowWorkspace]"])
            }["DesktopProvider.useCallback[setWindowWorkspace]"]);
        }
    }["DesktopProvider.useCallback[setWindowWorkspace]"], []);
    const setWorkspace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesktopProvider.useCallback[setWorkspace]": (ws)=>{
            setWorkspaceState(Math.max(1, Math.min(WORKSPACE_COUNT, ws)));
        }
    }["DesktopProvider.useCallback[setWorkspace]"], []);
    const toggleActivities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DesktopProvider.useCallback[toggleActivities]": ()=>{
            setActivitiesOpen({
                "DesktopProvider.useCallback[toggleActivities]": (v)=>!v
            }["DesktopProvider.useCallback[toggleActivities]"]);
        }
    }["DesktopProvider.useCallback[toggleActivities]"], []);
    const runningAppIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesktopProvider.useMemo[runningAppIds]": ()=>Array.from(new Set(windows.filter({
                "DesktopProvider.useMemo[runningAppIds]": (w)=>!w.minimized
            }["DesktopProvider.useMemo[runningAppIds]"]).map({
                "DesktopProvider.useMemo[runningAppIds]": (w)=>w.appId
            }["DesktopProvider.useMemo[runningAppIds]"])))
    }["DesktopProvider.useMemo[runningAppIds]"], [
        windows
    ]);
    const appsByCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DesktopProvider.useMemo[appsByCategory]": ()=>{
            const categories = {};
            Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APPS"]).forEach({
                "DesktopProvider.useMemo[appsByCategory]": (app)=>{
                    const cat = app.category ?? "Other";
                    if (!categories[cat]) categories[cat] = [];
                    categories[cat].push(app.id);
                }
            }["DesktopProvider.useMemo[appsByCategory]"]);
            return categories;
        }
    }["DesktopProvider.useMemo[appsByCategory]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DesktopProvider.useEffect": ()=>{
            const onKeyDown = {
                "DesktopProvider.useEffect.onKeyDown": (e)=>{
                    if (e.key === "Escape" && activitiesOpen) {
                        setActivitiesOpen(false);
                    }
                    if (e.key === "ArrowRight" && e.metaKey) {
                        setWorkspaceState({
                            "DesktopProvider.useEffect.onKeyDown": (v)=>Math.min(WORKSPACE_COUNT, v + 1)
                        }["DesktopProvider.useEffect.onKeyDown"]);
                    }
                    if (e.key === "ArrowLeft" && e.metaKey) {
                        setWorkspaceState({
                            "DesktopProvider.useEffect.onKeyDown": (v)=>Math.max(1, v - 1)
                        }["DesktopProvider.useEffect.onKeyDown"]);
                    }
                    if (e.key === "Tab" && e.altKey) {
                        e.preventDefault();
                        const visible = windows.filter({
                            "DesktopProvider.useEffect.onKeyDown.visible": (w)=>!w.minimized && w.workspace === workspace
                        }["DesktopProvider.useEffect.onKeyDown.visible"]);
                        if (visible.length > 0) {
                            const currentIndex = visible.findIndex({
                                "DesktopProvider.useEffect.onKeyDown.currentIndex": (w)=>w.id === activeWindowId
                            }["DesktopProvider.useEffect.onKeyDown.currentIndex"]);
                            const next = visible[(currentIndex + 1) % visible.length];
                            focusWindow(next.id);
                        }
                    }
                }
            }["DesktopProvider.useEffect.onKeyDown"];
            window.addEventListener("keydown", onKeyDown);
            return ({
                "DesktopProvider.useEffect": ()=>window.removeEventListener("keydown", onKeyDown)
            })["DesktopProvider.useEffect"];
        }
    }["DesktopProvider.useEffect"], [
        activitiesOpen,
        windows,
        workspace,
        activeWindowId,
        focusWindow
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesktopContext.Provider, {
        value: {
            windows,
            activeWindowId,
            workspace,
            activitiesOpen,
            soundEnabled,
            setSoundEnabled,
            openApp,
            closeWindow,
            focusWindow,
            minimizeWindow,
            maximizeWindow,
            restoreWindow,
            moveWindow,
            resizeWindow,
            setWindowWorkspace,
            setWorkspace,
            toggleActivities,
            setActivitiesOpen,
            getAppConfig,
            runningAppIds,
            appsByCategory
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopContext.tsx",
        lineNumber: 240,
        columnNumber: 5
    }, this);
}
_s(DesktopProvider, "FwPgmLzyUvy0rzOR6xUOsR/U600=");
_c = DesktopProvider;
function useDesktop() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(DesktopContext);
    if (!ctx) throw new Error("useDesktop must be used within DesktopProvider");
    return ctx;
}
_s1(useDesktop, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "DesktopProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/TopPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TopPanel",
    ()=>TopPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Battery$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/battery.mjs [app-client] (ecmascript) <export default as Battery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/wifi.mjs [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/volume-2.mjs [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function TopPanel() {
    _s();
    const { toggleActivities, setActivitiesOpen, activitiesOpen, soundEnabled, setSoundEnabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesktop"])();
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TopPanel.useEffect": ()=>{
            const t = setInterval({
                "TopPanel.useEffect.t": ()=>setTime(new Date())
            }["TopPanel.useEffect.t"], 1000);
            return ({
                "TopPanel.useEffect": ()=>clearInterval(t)
            })["TopPanel.useEffect"];
        }
    }["TopPanel.useEffect"], []);
    const timeStr = time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });
    const dateStr = time.toLocaleDateString([], {
        weekday: "short",
        month: "short",
        day: "numeric"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 left-0 right-0 z-[9999] h-8 glass-panel text-white text-sm flex items-center justify-between px-3 select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: toggleActivities,
                        className: "font-semibold tracking-wide hover:text-white/80 transition-colors",
                        children: "Activities"
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/TopPanel.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: activitiesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -10
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            exit: {
                                opacity: 0,
                                x: -10
                            },
                            className: "hidden sm:flex items-center gap-2 text-white/70",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "Desktop"
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/TopPanel.tsx",
                                lineNumber: 37,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/TopPanel.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/TopPanel.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/TopPanel.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 sm:gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSoundEnabled(!soundEnabled),
                        className: "hover:opacity-70 transition-opacity",
                        "aria-label": soundEnabled ? "Mute sound" : "Unmute sound",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/TopPanel.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/TopPanel.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/TopPanel.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Battery$3e$__["Battery"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/TopPanel.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/TopPanel.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActivitiesOpen(true),
                        className: "flex flex-col items-end leading-none hover:opacity-80 transition-opacity",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: timeStr
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/TopPanel.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-white/70 hidden sm:inline",
                                children: dateStr
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/TopPanel.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/TopPanel.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/TopPanel.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/TopPanel.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(TopPanel, "bQKkUxiNPd3khqddchXa5mK4Xc4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesktop"]
    ];
});
_c = TopPanel;
var _c;
__turbopack_context__.k.register(_c, "TopPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Icon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getIcon",
    ()=>getIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/activity.mjs [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/code-xml.mjs [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/file.mjs [app-client] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/folder-open.mjs [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/terminal.mjs [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript) <export default as Trash2>");
;
const ICON_MAP = {
    Activity: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
    Code2: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
    File: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"],
    FileText: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
    FolderOpen: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"],
    Globe: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
    Settings: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
    Terminal: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"],
    Trash2: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"]
};
function getIcon(name) {
    return ICON_MAP[name] ?? __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/hooks/useSound.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSound",
    ()=>useSound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const SOUND_URLS = {
    startup: "https://actions.google.com/sounds/v1/ambient/space.ogg",
    open: "https://actions.google.com/sounds/v1/cartoon/pop.ogg",
    close: "https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg",
    click: "https://actions.google.com/sounds/v1/foley/click.ogg",
    type: "https://actions.google.com/sounds/v1/foley/keyboard_typing.ogg",
    notification: "https://actions.google.com/sounds/v1/notification/simple_notification.ogg",
    minimize: "https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg",
    maximize: "https://actions.google.com/sounds/v1/cartoon/pop.ogg"
};
function useSound() {
    _s();
    const { soundEnabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesktop"])();
    const audioRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSound.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            Object.keys(SOUND_URLS).forEach({
                "useSound.useEffect": (name)=>{
                    const audio = new Audio(SOUND_URLS[name]);
                    audio.preload = "auto";
                    audio.volume = 0.3;
                    audioRefs.current[name] = audio;
                }
            }["useSound.useEffect"]);
            return ({
                "useSound.useEffect": ()=>{
                    audioRefs.current = {};
                }
            })["useSound.useEffect"];
        }
    }["useSound.useEffect"], []);
    const play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSound.useCallback[play]": (name)=>{
            if (!soundEnabled || ("TURBOPACK compile-time value", "object") === "undefined") return;
            const audio = audioRefs.current[name];
            if (audio) {
                audio.currentTime = 0;
                audio.play().catch({
                    "useSound.useCallback[play]": ()=>{}
                }["useSound.useCallback[play]"]);
            }
        }
    }["useSound.useCallback[play]"], [
        soundEnabled
    ]);
    return play;
}
_s(useSound, "UCMkii/V3aI8eYZ5HsXcAnGjSMo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesktop"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Dock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dock",
    ()=>Dock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$hooks$2f$useSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/hooks/useSound.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Dock() {
    _s();
    const { openApp, focusWindow, restoreWindow, runningAppIds, activeWindowId, windows, workspace, setWorkspace, setActivitiesOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesktop"])();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [contextMenu, setContextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$hooks$2f$useSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSound"])();
    const handleOpen = (appId)=>{
        play("click");
        setActivitiesOpen(false);
        const existing = windows.find((w)=>w.appId === appId);
        if (existing) {
            if (existing.minimized) {
                restoreWindow(existing.id, {
                    workspace
                });
            } else {
                focusWindow(existing.id);
            }
        } else {
            openApp(appId, {
                focus: true
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-3 left-1/2 -translate-x-1/2 z-[9998]",
        onPointerDown: (e)=>e.stopPropagation(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass-dock rounded-2xl px-3 py-2 flex items-end gap-2 sm:gap-3",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOCK_APPS"].map((appId, index)=>{
                    const appConfig = __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APPS"][appId];
                    const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIcon"])(appConfig.icon);
                    const isRunning = runningAppIds.includes(appId);
                    const isActive = windows.some((w)=>w.id === activeWindowId && w.appId === appId);
                    const isHovered = hovered === appId;
                    const scale = isHovered ? 1.35 : 1;
                    const neighborScale = hovered && __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOCK_APPS"][index - 1] === hovered || __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOCK_APPS"][index + 1] === hovered ? 1.15 : 1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 6
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: 6
                                    },
                                    className: "absolute -top-9 bg-black/80 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap pointer-events-none backdrop-blur-sm",
                                    children: appId.charAt(0).toUpperCase() + appId.slice(1)
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Dock.tsx",
                                    lineNumber: 48,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Dock.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                onMouseEnter: ()=>setHovered(appId),
                                onMouseLeave: ()=>setHovered(null),
                                onClick: ()=>handleOpen(appId),
                                onPointerDown: (e)=>e.stopPropagation(),
                                onContextMenu: (e)=>{
                                    e.preventDefault();
                                    setContextMenu({
                                        appId,
                                        x: e.clientX,
                                        y: e.clientY
                                    });
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                animate: {
                                    scale: scale * neighborScale,
                                    y: isHovered ? -8 : 0
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                },
                                className: `relative p-2 rounded-xl transition-shadow ${isActive ? "shadow-[0_0_20px_rgba(233,84,32,0.5)]" : ""}`,
                                "aria-label": `Open ${appId}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "w-6 h-6 sm:w-7 sm:h-7 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Dock.tsx",
                                            lineNumber: 76,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Dock.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this),
                                    isRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layoutId: `indicator-${appId}`,
                                        className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/90"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Dock.tsx",
                                        lineNumber: 79,
                                        columnNumber: 19
                                    }, this),
                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-xl ring-2 ring-white/20 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Dock.tsx",
                                        lineNumber: 85,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Dock.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this)
                        ]
                    }, appId, true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Dock.tsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Dock.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: contextMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95
                    },
                    className: "fixed bg-[#2c2c2c]/95 text-white text-sm rounded-lg shadow-2xl py-1 min-w-[160px] z-[10000] border border-white/10",
                    style: {
                        left: contextMenu.x,
                        top: contextMenu.y
                    },
                    onClick: ()=>setContextMenu(null),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full text-left px-3 py-1.5 hover:bg-white/10 transition-colors",
                            onClick: ()=>{
                                openApp(contextMenu.appId);
                                setContextMenu(null);
                            },
                            children: "New Window"
                        }, void 0, false, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Dock.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full text-left px-3 py-1.5 hover:bg-white/10 transition-colors",
                            onClick: ()=>{
                                setWorkspace(1);
                                setContextMenu(null);
                            },
                            children: "Show on Desktop"
                        }, void 0, false, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Dock.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-px bg-white/10 my-1"
                        }, void 0, false, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Dock.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full text-left px-3 py-1.5 hover:bg-white/10 transition-colors text-white/60",
                            onClick: ()=>setContextMenu(null),
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Dock.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Dock.tsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Dock.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Dock.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(Dock, "hJcaZ4TwJkC0nOM3HjEyVLLR380=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesktop"],
        __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$hooks$2f$useSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSound"]
    ];
});
_c = Dock;
var _c;
__turbopack_context__.k.register(_c, "Dock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopIcons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DesktopIcons",
    ()=>DesktopIcons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$hooks$2f$useSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/hooks/useSound.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function GitHubIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        }, void 0, false, {
            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopIcons.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopIcons.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = GitHubIcon;
function LinkedInIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
        }, void 0, false, {
            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopIcons.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopIcons.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = LinkedInIcon;
function DesktopIcons() {
    _s();
    const { openApp, setActivitiesOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesktop"])();
    const play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$hooks$2f$useSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSound"])();
    const handleClick = (icon)=>{
        play("click");
        setActivitiesOpen(false);
        if (icon.url) {
            window.open(icon.url, "_blank");
        } else {
            openApp(icon.appId);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-10 left-0 bottom-20 w-28 z-[100]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col p-2",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DESKTOP_ICONS"].map((icon)=>{
                const appConfig = __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APPS"][icon.appId];
                const Icon = icon.label === "GitHub" ? GitHubIcon : icon.label === "LinkedIn" ? LinkedInIcon : (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIcon"])(appConfig?.icon ?? "FileText");
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    whileHover: {
                        scale: 1.05
                    },
                    whileTap: {
                        scale: 0.95
                    },
                    onClick: ()=>handleClick(icon),
                    onPointerDown: (e)=>e.stopPropagation(),
                    className: "flex flex-col items-center gap-1 group py-2",
                    "aria-label": icon.url ? `Open ${icon.label}` : `Open ${icon.label}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-14 h-14 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-sm group-hover:bg-white/20 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "w-7 h-7 text-white"
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopIcons.tsx",
                                lineNumber: 61,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopIcons.tsx",
                            lineNumber: 60,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-white text-center drop-shadow-md px-1 rounded group-hover:bg-black/30 transition-colors",
                            children: icon.label
                        }, void 0, false, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopIcons.tsx",
                            lineNumber: 63,
                            columnNumber: 15
                        }, this)
                    ]
                }, icon.id, true, {
                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopIcons.tsx",
                    lineNumber: 51,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopIcons.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopIcons.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(DesktopIcons, "oPVxoj4bDbSdkIMWDYGbYzTNuw0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesktop"],
        __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$hooks$2f$useSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSound"]
    ];
});
_c2 = DesktopIcons;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "GitHubIcon");
__turbopack_context__.k.register(_c1, "LinkedInIcon");
__turbopack_context__.k.register(_c2, "DesktopIcons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActivitiesOverview",
    ()=>ActivitiesOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Icon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ActivitiesOverview() {
    _s();
    const { activitiesOpen, setActivitiesOpen, openApp, windows, workspace, setWorkspace, setWindowWorkspace, focusWindow, appsByCategory } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesktop"])();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const filteredApps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ActivitiesOverview.useMemo[filteredApps]": ()=>{
            if (!search.trim()) return [];
            return Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APPS"]).filter({
                "ActivitiesOverview.useMemo[filteredApps]": (app)=>app.title.toLowerCase().includes(search.toLowerCase()) || app.id.toLowerCase().includes(search.toLowerCase())
            }["ActivitiesOverview.useMemo[filteredApps]"]);
        }
    }["ActivitiesOverview.useMemo[filteredApps]"], [
        search
    ]);
    if (!activitiesOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 1.02
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 1.02
        },
        transition: {
            duration: 0.3,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        className: "fixed inset-0 z-[9000] ubuntu-wallpaper",
        style: {
            backgroundBlendMode: "screen, screen, multiply, normal"
        },
        onClick: ()=>setActivitiesOpen(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/40 backdrop-blur-xl"
            }, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 h-full flex flex-col",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-10 px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl mx-auto relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60"
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    autoFocus: true,
                                    value: search,
                                    onChange: (e)=>setSearch(e.target.value),
                                    placeholder: "Type to search...",
                                    className: "w-full h-12 bg-black/40 text-white rounded-full pl-12 pr-12 text-lg border border-white/10 focus:border-white/30 focus:outline-none placeholder:text-white/40 backdrop-blur-md"
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                search && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSearch(""),
                                    className: "absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-8",
                        children: search.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white/70 text-sm font-medium mb-4 uppercase tracking-wider",
                                    children: "Applications"
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4",
                                    children: filteredApps.map((app)=>{
                                        const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIcon"])(app.icon);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                openApp(app.id);
                                                setSearch("");
                                                setActivitiesOpen(false);
                                            },
                                            className: "flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/15 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "w-10 h-10 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white text-sm text-center",
                                                    children: app.title
                                                }, void 0, false, {
                                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, app.id, true, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                            lineNumber: 80,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto h-full flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center",
                                    children: [
                                        1,
                                        2
                                    ].map((ws)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>setWorkspace(ws),
                                            className: `relative aspect-video rounded-xl border-2 transition-all cursor-pointer overflow-hidden ${workspace === ws ? "border-white/60 scale-105" : "border-white/10 hover:border-white/30"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-black/20"
                                                }, void 0, false, {
                                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex flex-wrap content-start gap-2 p-3",
                                                    children: windows.filter((w)=>w.workspace === ws).map((w)=>{
                                                        const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIcon"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APPS"][w.appId].icon);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                setWindowWorkspace(w.id, ws);
                                                                focusWindow(w.id);
                                                                setActivitiesOpen(false);
                                                            },
                                                            className: "w-full h-12 bg-white/10 rounded-md flex items-center gap-2 px-3 hover:bg-white/20 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                    className: "w-5 h-5 text-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                                                    lineNumber: 124,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white text-xs truncate",
                                                                    children: w.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                                                    lineNumber: 125,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, w.id, true, {
                                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 29
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-2 left-2 text-white/80 text-xs font-medium",
                                                    children: [
                                                        "Workspace ",
                                                        ws
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, ws, true, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-white/70 text-sm font-medium mb-4 uppercase tracking-wider",
                                            children: "Application Launcher"
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3",
                                            children: Object.values(appsByCategory).flat().map((appId)=>{
                                                const app = __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APPS"][appId];
                                                const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$Icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIcon"])(app.icon);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        openApp(appId);
                                                        setActivitiesOpen(false);
                                                    },
                                                    className: "flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/15 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            className: "w-8 h-8 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white text-xs text-center",
                                                            children: app.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, appId, true, {
                                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(ActivitiesOverview, "oZ67+QYMxzR10SY47HDSNwj8LtY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesktop"]
    ];
});
_c = ActivitiesOverview;
var _c;
__turbopack_context__.k.register(_c, "ActivitiesOverview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/WindowFrame.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WindowFrame",
    ()=>WindowFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/minus.mjs [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/square.mjs [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/maximize-2.mjs [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$hooks$2f$useSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/hooks/useSound.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const resizeHandles = [
    {
        dir: "n",
        cursor: "n-resize",
        class: "top-0 left-1/2 -translate-x-1/2 w-[calc(100%-16px)] h-2"
    },
    {
        dir: "s",
        cursor: "s-resize",
        class: "bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-16px)] h-2"
    },
    {
        dir: "e",
        cursor: "e-resize",
        class: "right-0 top-1/2 -translate-y-1/2 w-2 h-[calc(100%-16px)]"
    },
    {
        dir: "w",
        cursor: "w-resize",
        class: "left-0 top-1/2 -translate-y-1/2 w-2 h-[calc(100%-16px)]"
    },
    {
        dir: "ne",
        cursor: "ne-resize",
        class: "top-0 right-0 w-4 h-4"
    },
    {
        dir: "nw",
        cursor: "nw-resize",
        class: "top-0 left-0 w-4 h-4"
    },
    {
        dir: "se",
        cursor: "se-resize",
        class: "bottom-0 right-0 w-4 h-4"
    },
    {
        dir: "sw",
        cursor: "sw-resize",
        class: "bottom-0 left-0 w-4 h-4"
    }
];
function WindowFrame({ window: w, children, appId }) {
    _s();
    const { focusWindow, closeWindow, minimizeWindow, maximizeWindow, restoreWindow, moveWindow, resizeWindow, getAppConfig, workspace } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesktop"])();
    const play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$hooks$2f$useSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSound"])();
    const config = getAppConfig(appId);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dragStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        wx: 0,
        wy: 0
    });
    const resizeStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        dir: ""
    });
    const handleFocus = ()=>focusWindow(w.id);
    const handleClose = ()=>{
        play("close");
        closeWindow(w.id);
    };
    const handleMinimize = ()=>{
        play("minimize");
        minimizeWindow(w.id);
    };
    const handleMaximize = ()=>{
        play(w.maximized ? "open" : "maximize");
        if (w.maximized) restoreWindow(w.id);
        else maximizeWindow(w.id);
    };
    const onTitleMouseDown = (e)=>{
        if (e.target !== e.currentTarget && !e.currentTarget.contains(e.target)) return;
        if (w.maximized) return;
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
        dragStart.current = {
            x: e.clientX,
            y: e.clientY,
            wx: w.x,
            wy: w.y
        };
        handleFocus();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WindowFrame.useEffect": ()=>{
            if (!isDragging) return;
            const onMouseMove = {
                "WindowFrame.useEffect.onMouseMove": (e)=>{
                    const dx = e.clientX - dragStart.current.x;
                    const dy = e.clientY - dragStart.current.y;
                    moveWindow(w.id, Math.max(0, dragStart.current.wx + dx), Math.max(28, dragStart.current.wy + dy));
                }
            }["WindowFrame.useEffect.onMouseMove"];
            const onMouseUp = {
                "WindowFrame.useEffect.onMouseUp": ()=>setIsDragging(false)
            }["WindowFrame.useEffect.onMouseUp"];
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
            return ({
                "WindowFrame.useEffect": ()=>{
                    window.removeEventListener("mousemove", onMouseMove);
                    window.removeEventListener("mouseup", onMouseUp);
                }
            })["WindowFrame.useEffect"];
        }
    }["WindowFrame.useEffect"], [
        isDragging,
        w.id,
        moveWindow
    ]);
    const onResizeMouseDown = (e, dir)=>{
        if (!config.resizable) return;
        e.preventDefault();
        e.stopPropagation();
        resizeStart.current = {
            x: e.clientX,
            y: e.clientY,
            width: w.width,
            height: w.height,
            dir
        };
        const onMouseMove = (ev)=>{
            const dx = ev.clientX - resizeStart.current.x;
            const dy = ev.clientY - resizeStart.current.y;
            let newW = resizeStart.current.width;
            let newH = resizeStart.current.height;
            let newX = w.x;
            let newY = w.y;
            if (resizeStart.current.dir.includes("e")) newW = Math.max(config.minWidth, resizeStart.current.width + dx);
            if (resizeStart.current.dir.includes("s")) newH = Math.max(config.minHeight, resizeStart.current.height + dy);
            if (resizeStart.current.dir.includes("w")) {
                const proposed = resizeStart.current.width - dx;
                if (proposed >= config.minWidth) {
                    newW = proposed;
                    newX = w.x + dx;
                }
            }
            if (resizeStart.current.dir.includes("n")) {
                const proposed = resizeStart.current.height - dy;
                if (proposed >= config.minHeight) {
                    newH = proposed;
                    newY = w.y + dy;
                }
            }
            resizeWindow(w.id, newW, newH);
            if (resizeStart.current.dir.includes("w") || resizeStart.current.dir.includes("n")) {
                moveWindow(w.id, newX, newY);
            }
        };
        const onMouseUp = ()=>{
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    };
    const displayStyle = w.maximized ? {
        x: 0,
        y: 28,
        width: "100vw",
        height: "calc(100vh - 28px)"
    } : {
        x: w.x,
        y: w.y,
        width: w.width,
        height: w.height
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: !w.minimized && w.workspace === workspace && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: frameRef,
            layout: true,
            initial: {
                opacity: 0,
                scale: 0.8
            },
            animate: {
                opacity: 1,
                scale: 1,
                x: displayStyle.x,
                y: displayStyle.y,
                width: displayStyle.width,
                height: displayStyle.height
            },
            exit: {
                opacity: 0,
                scale: 0.9
            },
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 0.8
            },
            onClick: handleFocus,
            onPointerDown: (e)=>e.stopPropagation(),
            className: `fixed z-10 rounded-xl overflow-hidden glass-window flex flex-col ${w.focused ? "ring-1 ring-white/20" : "ring-1 ring-white/5"}`,
            style: {
                zIndex: w.zIndex,
                maxWidth: w.maximized ? undefined : "calc(100vw - 32px)",
                maxHeight: w.maximized ? undefined : "calc(100vh - 96px)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `h-9 flex items-center justify-between px-3 cursor-default window-titlebar ${w.focused ? "window-titlebar-active" : ""}`,
                    onMouseDown: onTitleMouseDown,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleClose,
                                            className: "w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors",
                                            "aria-label": "Close"
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/WindowFrame.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleMinimize,
                                            className: "w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#febc2e]/80 transition-colors",
                                            "aria-label": "Minimize"
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/WindowFrame.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleMaximize,
                                            className: "w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#28c840]/80 transition-colors",
                                            "aria-label": "Maximize"
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/WindowFrame.tsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/WindowFrame.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/90 text-sm font-medium ml-2 select-none",
                                    children: w.title
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/WindowFrame.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/WindowFrame.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleMinimize,
                                    className: "p-1 rounded hover:bg-white/10 text-white/70",
                                    "aria-label": "Minimize",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/WindowFrame.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/WindowFrame.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleMaximize,
                                    className: "p-1 rounded hover:bg-white/10 text-white/70",
                                    "aria-label": "Maximize",
                                    children: w.maximized ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/WindowFrame.tsx",
                                        lineNumber: 187,
                                        columnNumber: 32
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/WindowFrame.tsx",
                                        lineNumber: 187,
                                        columnNumber: 68
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/WindowFrame.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleClose,
                                    className: "p-1 rounded hover:bg-[#ff5f57]/80 text-white/70 hover:text-white",
                                    "aria-label": "Close",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/WindowFrame.tsx",
                                        lineNumber: 194,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/WindowFrame.tsx",
                                    lineNumber: 189,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/WindowFrame.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/WindowFrame.tsx",
                    lineNumber: 148,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-hidden relative",
                    style: {
                        background: config.color
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/WindowFrame.tsx",
                    lineNumber: 200,
                    columnNumber: 11
                }, this),
                config.resizable && !w.maximized && resizeHandles.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute ${h.class} z-50`,
                        style: {
                            cursor: h.cursor
                        },
                        onMouseDown: (e)=>onResizeMouseDown(e, h.dir)
                    }, h.dir, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/WindowFrame.tsx",
                        lineNumber: 207,
                        columnNumber: 15
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/WindowFrame.tsx",
            lineNumber: 133,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/WindowFrame.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_s(WindowFrame, "qYq6PcmbS2xDo6/JFnDR4z/lQVg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesktop"],
        __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$hooks$2f$useSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSound"]
    ];
});
_c = WindowFrame;
var _c;
__turbopack_context__.k.register(_c, "WindowFrame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/AboutApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutApp",
    ()=>AboutApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/heart.mjs [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/target.mjs [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const tabs = [
    {
        id: "intro",
        label: "Introduction",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
    },
    {
        id: "education",
        label: "Education",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
    },
    {
        id: "interests",
        label: "Interests",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"]
    },
    {
        id: "goals",
        label: "Goals",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"]
    }
];
const content = {
    intro: `Hi, I'm Ashrit — a passionate developer who loves turning ideas into elegant, performant software.

I enjoy working at the intersection of design, engineering, and artificial intelligence. Whether it's building a beautiful UI, training a model, or architecting a distributed system, I approach every challenge with curiosity and craftsmanship.

This portfolio is a desktop environment because I believe the best interfaces are the ones that feel alive.`,
    education: `B.Tech in Computer Science
Specialization in Artificial Intelligence & Machine Learning

Key coursework:
• Data Structures & Algorithms
• Deep Learning & Neural Networks
• Database Management Systems
• Computer Networks & Distributed Systems
• Human-Computer Interaction`,
    interests: `• Creative coding & generative design
• Open-source tooling
• Robotics & embedded systems
• Music production & audio synthesis
• Long-distance running & hiking
• Science fiction & futurism`,
    goals: `Short-term:
• Ship a product used by thousands of people
• Contribute meaningfully to open-source projects
• Speak at a technical conference

Long-term:
• Build technology that democratizes AI
• Lead a team that values craft and inclusion
• Explore the intersection of AI and creativity`
};
function AboutApp() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("intro");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col bg-gray-100 text-[#1e1e1e]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex border-b border-black/10 bg-white",
                children: tabs.map((tab)=>{
                    const Icon = tab.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(tab.id),
                        className: `flex items-center gap-1.5 px-4 py-2 text-sm border-r border-black/5 transition-colors ${activeTab === tab.id ? "bg-[#e95420]/10 text-[#e95420]" : "hover:bg-black/5"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/AboutApp.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this),
                            tab.label
                        ]
                    }, tab.id, true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/AboutApp.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/AboutApp.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 p-6 overflow-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 8
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -8
                        },
                        className: "max-w-2xl whitespace-pre-line leading-relaxed text-[15px]",
                        children: content[activeTab]
                    }, activeTab, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/AboutApp.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/AboutApp.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/AboutApp.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-2 text-xs text-black/40 border-t border-black/10 bg-white flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "UTF-8"
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/AboutApp.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: tabs.find((t)=>t.id === activeTab)?.label
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/AboutApp.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/AboutApp.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/AboutApp.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(AboutApp, "YvowIrmI/n/8m9ZkZgr9CTBJVEU=");
_c = AboutApp;
var _c;
__turbopack_context__.k.register(_c, "AboutApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkillsApp",
    ()=>SkillsApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Bar({ label, value, color, usage }) {
    _s();
    const [animated, setAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentUsage, setCurrentUsage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(usage);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Bar.useEffect": ()=>{
            setAnimated(value);
            const interval = setInterval({
                "Bar.useEffect.interval": ()=>{
                    setCurrentUsage(Math.max(20, Math.min(98, usage + Math.floor(Math.random() * 21) - 10)));
                }
            }["Bar.useEffect.interval"], 1500);
            return ({
                "Bar.useEffect": ()=>clearInterval(interval)
            })["Bar.useEffect"];
        }
    }["Bar.useEffect"], [
        value,
        usage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 rounded-full",
                                style: {
                                    backgroundColor: color
                                }
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-white/90",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-white/50",
                                children: [
                                    "→ ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SKILL_MAP"][label]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-white/70",
                        children: [
                            currentUsage,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-3 bg-white/10 rounded-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        width: 0
                    },
                    animate: {
                        width: `${animated}%`
                    },
                    transition: {
                        duration: 1,
                        ease: "easeOut"
                    },
                    className: "h-full rounded-full relative",
                    style: {
                        backgroundColor: color
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-white/20 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(Bar, "k/Tzpuv6Qpq00bHRnGr+X1nGIJM=");
_c = Bar;
function SkillsApp() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full bg-[#1e1e1e] text-white p-6 overflow-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                children: "System Monitor"
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-white/50",
                                children: "Skills visualized as live system metrics"
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-1 rounded bg-white/10",
                                children: "4 cores"
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-1 rounded bg-white/10",
                                children: "16 GB RAM"
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/5 rounded-xl p-4 border border-white/10",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SKILL_METRICS"].map((metric)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Bar, {
                                ...metric
                            }, metric.label, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/5 rounded-xl p-4 border border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-medium mb-3 text-white/90",
                                        children: "Core Stack"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            "Python",
                                            "TypeScript",
                                            "Next.js",
                                            "React",
                                            "Node.js",
                                            "PostgreSQL",
                                            "Docker",
                                            "TensorFlow",
                                            "PyTorch",
                                            "Tailwind CSS"
                                        ].map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2.5 py-1 rounded-md bg-white/10 text-xs text-white/80",
                                                children: skill
                                            }, skill, false, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/5 rounded-xl p-4 border border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-medium mb-3 text-white/90",
                                        children: "Process History"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 text-xs text-white/70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "portfolio-os"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "12.4% CPU"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 78
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "neural-vision"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "31.2% GPU"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 79
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "churn-predictor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "8.7% CPU"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 81
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "recommender-engine"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "18.9% RAM"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 84
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c1 = SkillsApp;
var _c, _c1;
__turbopack_context__.k.register(_c, "Bar");
__turbopack_context__.k.register(_c1, "SkillsApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectsApp",
    ()=>ProjectsApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/folder.mjs [app-client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function GitHubIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        }, void 0, false, {
            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = GitHubIcon;
function ProjectsApp() {
    _s();
    const [selectedFolder, setSelectedFolder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedProject, setSelectedProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const folderProjects = selectedFolder ? __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"].filter((p)=>p.folder === selectedFolder) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex bg-gray-100 text-[#1e1e1e]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-52 bg-white border-r border-black/10 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 border-b border-black/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 text-sm text-black/60",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Projects"
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 flex-1 overflow-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setSelectedFolder(null);
                                    setSelectedProject(null);
                                },
                                className: `w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${selectedFolder === null ? "bg-[#e95420]/10 text-[#e95420]" : "hover:bg-black/5"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                        className: "w-4 h-4 text-[#e95420]"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    "Projects"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-4 mt-1 space-y-0.5",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOLDERS"].map((folder)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setSelectedFolder(folder);
                                            setSelectedProject(null);
                                        },
                                        className: `w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors ${selectedFolder === folder ? "bg-[#e95420]/10 text-[#e95420]" : "hover:bg-black/5"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                className: "w-4 h-4 text-[#e95420]"
                                            }, void 0, false, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, this),
                                            folder
                                        ]
                                    }, folder, true, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: !selectedFolder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -10
                        },
                        className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOLDERS"].map((folder)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedFolder(folder),
                                className: "flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-black/5 transition-colors group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                        className: "w-16 h-16 text-[#e95420] group-hover:scale-110 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                        lineNumber: 86,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-center font-medium",
                                        children: folder
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                        lineNumber: 87,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, folder, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                lineNumber: 81,
                                columnNumber: 17
                            }, this))
                    }, "root", false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, this) : selectedProject ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        exit: {
                            opacity: 0,
                            x: -20
                        },
                        className: "max-w-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedProject(null),
                                className: "flex items-center gap-1 text-sm text-black/60 hover:text-[#e95420] mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, this),
                                    " Back to ",
                                    selectedFolder
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold mb-2",
                                children: selectedProject.name
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-black/70 mb-4",
                                children: selectedProject.description
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 mb-6",
                                children: selectedProject.tech.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2.5 py-1 rounded-md bg-[#e95420]/10 text-[#e95420] text-xs font-medium",
                                        children: t
                                    }, t, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                        lineNumber: 109,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    selectedProject.github && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: selectedProject.github,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1e1e1e] text-white text-sm hover:bg-black/80 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GitHubIcon, {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                                lineNumber: 122,
                                                columnNumber: 21
                                            }, this),
                                            " View Source"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                        lineNumber: 116,
                                        columnNumber: 19
                                    }, this),
                                    selectedProject.link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: selectedProject.link,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "flex items-center gap-2 px-4 py-2 rounded-lg border border-black/20 text-sm hover:bg-black/5 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                                lineNumber: 132,
                                                columnNumber: 21
                                            }, this),
                                            " Live Demo"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                        lineNumber: 126,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                lineNumber: 114,
                                columnNumber: 15
                            }, this)
                        ]
                    }, "project", true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                        lineNumber: 92,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -10
                        },
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedFolder(null),
                                className: "col-span-full flex items-center gap-1 text-sm text-black/60 hover:text-[#e95420] mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, this),
                                    " Back"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                lineNumber: 145,
                                columnNumber: 15
                            }, this),
                            folderProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedProject(project),
                                    className: "p-4 rounded-xl bg-white border border-black/10 hover:border-[#e95420]/40 hover:shadow-md transition-all text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold mb-1",
                                            children: project.name
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                            lineNumber: 157,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-black/60 line-clamp-2 mb-3",
                                            children: project.description
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-1",
                                            children: project.tech.slice(0, 3).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 rounded bg-black/5 text-[10px] text-black/70",
                                                    children: t
                                                }, t, false, {
                                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                            lineNumber: 159,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, project.id, true, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, "folder", true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                        lineNumber: 138,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(ProjectsApp, "bUDm4eqjiXGzv3HOyYBVDc+EK2c=");
_c1 = ProjectsApp;
var _c, _c1;
__turbopack_context__.k.register(_c, "GitHubIcon");
__turbopack_context__.k.register(_c1, "ProjectsApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResumeApp",
    ()=>ResumeApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/printer.mjs [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/zoom-in.mjs [app-client] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/zoom-out.mjs [app-client] (ecmascript) <export default as ZoomOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ResumeApp() {
    _s();
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col bg-gray-100 text-[#1e1e1e]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-12 bg-white border-b border-black/10 flex items-center justify-between px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 rounded hover:bg-black/5",
                                onClick: ()=>setScale((s)=>Math.max(0.5, s - 0.1)),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__["ZoomOut"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-black/60 min-w-[3rem] text-center",
                                children: [
                                    Math.round(scale * 100),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 rounded hover:bg-black/5",
                                onClick: ()=>setScale((s)=>Math.min(2, s + 0.1)),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#e95420] text-white text-sm hover:bg-[#d14b1b] transition-colors",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    alert("Resume download would start here in production.");
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this),
                                    " Download"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-black/20 text-sm hover:bg-black/5 transition-colors",
                                onClick: ()=>window.print(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    " Print"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto p-6 bg-[#e0e0e0] flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white shadow-xl p-8 w-[210mm] min-h-[297mm] origin-top transition-transform",
                    style: {
                        transform: `scale(${scale})`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b-2 border-[#e95420] pb-4 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold text-[#1e1e1e]",
                                    children: "Ashrit"
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-black/60 mt-1",
                                    children: "Full Stack Developer & AI Enthusiast"
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-3 text-sm text-black/60 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "ashrit39@gmail.com"
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "github.com/ashritanshuman"
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "linkedin.com/in/ashritanshuman"
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-semibold text-[#e95420] mb-2",
                                            children: "Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-black/80 leading-relaxed",
                                            children: "Creative full-stack engineer with a strong foundation in AI/ML. Experienced in building performant web applications, scalable APIs, and intelligent systems. Passionate about design systems, developer experience, and open-source software."
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-semibold text-[#e95420] mb-2",
                                            children: "Experience"
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-medium",
                                                                    children: "Senior Frontend Engineer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                                                    lineNumber: 75,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-black/50",
                                                                    children: "2023 — Present"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                                                    lineNumber: 76,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-black/60",
                                                            children: "TechCorp • Remote"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "list-disc list-inside text-sm text-black/70 mt-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Led migration to Next.js and improved core web vitals by 40%."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                                                    lineNumber: 80,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Built a design system adopted across 5 product teams."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                                                    lineNumber: 81,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-medium",
                                                                    children: "ML Engineer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                                                    lineNumber: 86,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-black/50",
                                                                    children: "2021 — 2023"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                                                    lineNumber: 87,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-black/60",
                                                            children: "AI Labs • Bangalore"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "list-disc list-inside text-sm text-black/70 mt-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Shipped production computer vision and NLP pipelines."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                                                    lineNumber: 91,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Reduced model latency by 60% through quantization and caching."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                                                    lineNumber: 92,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-semibold text-[#e95420] mb-2",
                                            children: "Education"
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-black/80",
                                            children: "B.Tech in Computer Science, Specialization in AI/ML"
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-semibold text-[#e95420] mb-2",
                                            children: "Skills"
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: [
                                                "React",
                                                "Next.js",
                                                "TypeScript",
                                                "Node.js",
                                                "Python",
                                                "TensorFlow",
                                                "PostgreSQL",
                                                "Docker",
                                                "AWS",
                                                "Figma"
                                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2.5 py-1 rounded-md bg-black/5 text-xs text-black/70",
                                                    children: s
                                                }, s, false, {
                                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(ResumeApp, "KYf8QDfWi1lgQwjpWB5xVlmXlQo=");
_c = ResumeApp;
var _c;
__turbopack_context__.k.register(_c, "ResumeApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/TerminalApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TerminalApp",
    ()=>TerminalApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$hooks$2f$useSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/hooks/useSound.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const COMMANDS = [
    "help",
    "about",
    "skills",
    "projects",
    "contact",
    "resume",
    "github",
    "linkedin",
    "clear",
    "neofetch",
    "sudo hire-me"
];
const OUTPUT = {
    help: [
        "Available commands:",
        "",
        "  help        Show this help message",
        "  about       Open the About Me window",
        "  skills      Open the Skills window",
        "  projects    Open the Projects window",
        "  contact     Show contact information",
        "  resume      Open the Resume window",
        "  github      Open GitHub profile",
        "  linkedin    Open LinkedIn profile",
        "  clear       Clear the terminal",
        "  neofetch    Display system info",
        "  sudo hire-me  Send a hiring request"
    ],
    contact: [
        "Email:   ashrit@portfolio.dev",
        "GitHub:  github.com/ashrit",
        "LinkedIn: linkedin.com/in/ashrit",
        "Twitter: x.com/ashrit",
        "",
        "Availability: Open to full-time and freelance opportunities."
    ],
    neofetch: [
        "        .-://+oo+/:.          ashrit@portfolio",
        "    .:/osyyyyyyyyyyyyso/-.     ----------------",
        "  :oyyyyyyyyyyyyyyyyyyyyyyo:   OS: Ubuntu Portfolio 24.04 LTS",
        " :yyyyyyyyyyyyyyyyyyyyyyyyyy:  Kernel: React 19 + Next.js",
        ":yyyyyyyyyyyyyyyyyyyyyyyyyyyy: Uptime: Always coding",
        "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy Shell: zsh",
        "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy DE: GNOME / Framer Motion",
        ":yyyyyyyyyyyyyyyyyyyyyyyyyyyy:  WM: Ubuntu Desktop",
        " :yyyyyyyyyyyyyyyyyyyyyyyyyy:  CPU: Brain @ creativity-max",
        "  :oyyyyyyyyyyyyyyyyyyyyyyo:   GPU: Imagination RTX",
        "    .:/osyyyyyyyyyyyyso/-.     Memory: Infinite curiosity",
        "        .-://+oo+/:.          "
    ],
    "sudo hire-me": [
        "[sudo] password for recruiter: *******",
        "Authenticated successfully.",
        "",
        "Hiring request submitted! 🎉",
        "",
        "I will be in touch within 24 hours.",
        "Thanks for considering me for your team!"
    ]
};
function TerminalApp() {
    _s();
    const { openApp } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesktop"])();
    const play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$hooks$2f$useSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSound"])();
    const [lines, setLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            type: "output",
            text: "Welcome to Ubuntu Portfolio 24.04 LTS"
        },
        {
            type: "output",
            text: "Type 'help' to see available commands."
        },
        {
            type: "output",
            text: ""
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [historyIndex, setHistoryIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TerminalApp.useEffect": ()=>{
            scrollRef.current?.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: "smooth"
            });
        }
    }["TerminalApp.useEffect"], [
        lines
    ]);
    const runCommand = (raw)=>{
        const cmd = raw.trim();
        const newLines = [
            {
                type: "input",
                text: `ashrit@portfolio:~$ ${cmd}`
            }
        ];
        if (cmd === "") {
        // pass
        } else if (cmd === "clear") {
            setLines([]);
            setInput("");
            return;
        } else if (cmd === "about") {
            openApp("about");
            newLines.push({
                type: "output",
                text: "Opening About Me..."
            });
        } else if (cmd === "skills") {
            openApp("skills");
            newLines.push({
                type: "output",
                text: "Opening System Monitor..."
            });
        } else if (cmd === "projects") {
            openApp("projects");
            newLines.push({
                type: "output",
                text: "Opening Files..."
            });
        } else if (cmd === "resume") {
            openApp("resume");
            newLines.push({
                type: "output",
                text: "Opening Document Viewer..."
            });
        } else if (cmd === "github") {
            window.open("https://github.com/ashrit", "_blank");
            newLines.push({
                type: "output",
                text: "Opening GitHub in browser..."
            });
        } else if (cmd === "linkedin") {
            window.open("https://linkedin.com/in/ashrit", "_blank");
            newLines.push({
                type: "output",
                text: "Opening LinkedIn in browser..."
            });
        } else if (cmd === "contact") {
            OUTPUT.contact.forEach((t)=>newLines.push({
                    type: "output",
                    text: t
                }));
        } else if (cmd === "neofetch") {
            OUTPUT.neofetch.forEach((t)=>newLines.push({
                    type: "output",
                    text: t
                }));
        } else if (cmd === "sudo hire-me") {
            OUTPUT["sudo hire-me"].forEach((t)=>newLines.push({
                    type: "output",
                    text: t
                }));
        } else if (cmd === "help") {
            OUTPUT.help.forEach((t)=>newLines.push({
                    type: "output",
                    text: t
                }));
        } else {
            newLines.push({
                type: "output",
                text: `bash: ${cmd}: command not found`
            });
        }
        setLines((prev)=>[
                ...prev,
                ...newLines,
                {
                    type: "output",
                    text: ""
                }
            ]);
        setHistory((prev)=>[
                cmd,
                ...prev
            ].slice(0, 50));
        setHistoryIndex(-1);
        setInput("");
    };
    const onKeyDown = (e)=>{
        if (e.key === "Enter") {
            play("click");
            runCommand(input);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (historyIndex < history.length - 1) {
                const next = historyIndex + 1;
                setHistoryIndex(next);
                setInput(history[next]);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex > 0) {
                const next = historyIndex - 1;
                setHistoryIndex(next);
                setInput(history[next]);
            } else {
                setHistoryIndex(-1);
                setInput("");
            }
        } else if (e.key === "Tab") {
            e.preventDefault();
            const match = COMMANDS.find((c)=>c.startsWith(input));
            if (match) setInput(match);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col bg-[#300a24] text-white terminal-text",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: scrollRef,
            className: "flex-1 overflow-auto p-4 text-sm",
            children: [
                lines.map((line, i)=>line.type === "input" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white/90",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#8ae234] font-bold",
                                children: "ashrit@portfolio"
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/TerminalApp.tsx",
                                lineNumber: 173,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/70",
                                children: ":"
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/TerminalApp.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#729fcf]",
                                children: "~"
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/TerminalApp.tsx",
                                lineNumber: 175,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/70",
                                children: "$"
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/TerminalApp.tsx",
                                lineNumber: 176,
                                columnNumber: 15
                            }, this),
                            " ",
                            line.text.replace("ashrit@portfolio:~$ ", "")
                        ]
                    }, i, true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/TerminalApp.tsx",
                        lineNumber: 172,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white/80 whitespace-pre-wrap",
                        children: line.text
                    }, i, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/TerminalApp.tsx",
                        lineNumber: 179,
                        columnNumber: 13
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1 mt-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#8ae234] font-bold",
                            children: "ashrit@portfolio"
                        }, void 0, false, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/TerminalApp.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white/70",
                            children: ":"
                        }, void 0, false, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/TerminalApp.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#729fcf]",
                            children: "~"
                        }, void 0, false, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/TerminalApp.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white/70",
                            children: "$"
                        }, void 0, false, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/TerminalApp.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: input,
                            onChange: (e)=>setInput(e.target.value),
                            onKeyDown: onKeyDown,
                            className: "flex-1 bg-transparent outline-none text-white/90 ml-1 caret-white",
                            autoFocus: true,
                            spellCheck: false,
                            "aria-label": "Terminal input"
                        }, void 0, false, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/TerminalApp.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/TerminalApp.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/TerminalApp.tsx",
            lineNumber: 169,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/TerminalApp.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
}
_s(TerminalApp, "jQ/14BbsGPugoFtPj1Slso/p+Rk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesktop"],
        __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$hooks$2f$useSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSound"]
    ];
});
_c = TerminalApp;
var _c;
__turbopack_context__.k.register(_c, "TerminalApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrowserApp",
    ()=>BrowserApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/rotate-cw.mjs [app-client] (ecmascript) <export default as RotateCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/house.mjs [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function GitHubIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        }, void 0, false, {
            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = GitHubIcon;
const REPOS = [
    {
        name: "portfolio-os",
        desc: "Ubuntu desktop portfolio website",
        stars: 142,
        lang: "TypeScript"
    },
    {
        name: "neural-vision",
        desc: "Real-time object detection",
        stars: 89,
        lang: "Python"
    },
    {
        name: "task-manager",
        desc: "Full-stack SaaS for teams",
        stars: 67,
        lang: "TypeScript"
    },
    {
        name: "churn-predictor",
        desc: "Customer churn prediction",
        stars: 45,
        lang: "Python"
    },
    {
        name: "recommender-engine",
        desc: "Collaborative filtering engine",
        stars: 38,
        lang: "Python"
    },
    {
        name: "sales-dashboard",
        desc: "Interactive analytics dashboard",
        stars: 54,
        lang: "Python"
    }
];
function BrowserApp() {
    _s();
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("https://github.com/ashrit");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("github");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col bg-[#1e1e2e] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-end bg-[#181825] pt-1 px-1 gap-1",
                children: [
                    "github",
                    "projects",
                    "resume"
                ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(tab),
                        className: `px-4 py-2 rounded-t-lg text-sm flex items-center gap-2 transition-colors ${activeTab === tab ? "bg-[#1e1e2e] text-white" : "text-white/50 hover:bg-white/5"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GitHubIcon, {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, this),
                            tab.charAt(0).toUpperCase() + tab.slice(1)
                        ]
                    }, tab, true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-11 bg-[#1e1e2e] border-b border-white/10 flex items-center gap-2 px-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-1.5 rounded hover:bg-white/10 text-white/60",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-1.5 rounded hover:bg-white/10 text-white/60",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-1.5 rounded hover:bg-white/10 text-white/60",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__["RotateCw"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-1.5 rounded hover:bg-white/10 text-white/60",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 bg-[#181825] rounded-lg h-8 px-3 flex items-center text-sm text-white/80 border border-white/10",
                        children: url
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "p-1.5 rounded hover:bg-white/10 text-white/60",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -10
                        },
                        className: "max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-20 h-20 rounded-full bg-[#24292f] border border-white/10 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GitHubIcon, {
                                            className: "w-10 h-10 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl font-bold",
                                                children: "ashrit"
                                            }, void 0, false, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/60",
                                                children: "Full Stack Developer & AI Enthusiast"
                                            }, void 0, false, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4 mt-2 text-sm text-white/60",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "12 repositories"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "1.2k followers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "321 following"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold mb-4",
                                children: "Popular Repositories"
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: REPOS.map((repo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://github.com/ashrit/${repo.name}`,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "block p-4 rounded-xl bg-[#181825] border border-white/10 hover:border-white/20 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-[#58a6ff]",
                                                        children: repo.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1 text-xs text-white/60",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                                                                lineNumber: 106,
                                                                columnNumber: 23
                                                            }, this),
                                                            " ",
                                                            repo.stars
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-white/60 mt-1",
                                                children: repo.desc
                                            }, void 0, false, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mt-3 text-xs text-white/50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2.5 h-2.5 rounded-full bg-[#e95420]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 21
                                                    }, this),
                                                    repo.lang
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, repo.name, true, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                                        lineNumber: 96,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        ]
                    }, activeTab, true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(BrowserApp, "uoWkpFTxoRkv2Ws/xoM9AleleYU=");
_c1 = BrowserApp;
var _c, _c1;
__turbopack_context__.k.register(_c, "GitHubIcon");
__turbopack_context__.k.register(_c1, "BrowserApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VSCodeApp",
    ()=>VSCodeApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/file-code.mjs [app-client] (ecmascript) <export default as FileCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/folder-open.mjs [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$braces$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileJson$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/file-braces.mjs [app-client] (ecmascript) <export default as FileJson>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const syntaxColors = {
    const: "#c586c0",
    let: "#c586c0",
    var: "#c586c0",
    export: "#c586c0",
    default: "#c586c0",
    return: "#c586c0",
    import: "#c586c0",
    from: "#c586c0",
    function: "#569cd6",
    async: "#569cd6",
    await: "#569cd6",
    true: "#569cd6",
    false: "#569cd6",
    if: "#c586c0",
    else: "#c586c0",
    for: "#c586c0",
    while: "#c586c0"
};
const stringColor = "#ce9178";
const commentColor = "#6a9955";
const numberColor = "#b5cea8";
const keyColor = "#9cdcfe";
function highlight(line) {
    // Very simple syntax highlighter for demo
    const tokens = [];
    let remaining = line;
    let key = 0;
    const push = (text, color)=>{
        if (!text) return;
        tokens.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: color ? {
                color
            } : undefined,
            children: text
        }, key++, false, {
            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this));
    };
    // Comment
    const commentIndex = remaining.indexOf("//");
    if (commentIndex !== -1) {
        push(remaining.slice(0, commentIndex));
        push(remaining.slice(commentIndex), commentColor);
        return tokens;
    }
    // Strings
    const stringRegex = /("[^"]*"|'[^']*'|`[^`]*`)/g;
    let match;
    let lastIndex = 0;
    while((match = stringRegex.exec(remaining)) !== null){
        push(remaining.slice(lastIndex, match.index));
        push(match[0], stringColor);
        lastIndex = match.index + match[0].length;
    }
    push(remaining.slice(lastIndex));
    return tokens;
}
function VSCodeApp() {
    _s();
    const [activeFile, setActiveFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("about.js");
    const file = __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VSCODE_FILES"][activeFile];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex bg-[#1e1e2e] text-white code-font text-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-56 bg-[#181825] border-r border-white/10 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-9 flex items-center px-3 text-xs font-semibold text-white/70 uppercase tracking-wider",
                        children: "Explorer"
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 px-2 py-1 text-white/90",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                        className: "w-4 h-4 text-[#e95420]"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "portfolio"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-4",
                                children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VSCODE_FILES"]).map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveFile(name),
                                        className: `w-full flex items-center gap-2 px-2 py-1 text-sm transition-colors ${activeFile === name ? "bg-white/10 text-white" : "text-white/60 hover:text-white"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__["FileCode"], {
                                                className: `w-4 h-4 ${name.endsWith(".js") ? "text-[#f9d342]" : "text-white/50"}`
                                            }, void 0, false, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                                lineNumber: 95,
                                                columnNumber: 17
                                            }, this),
                                            name
                                        ]
                                    }, name, true, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex bg-[#181825] h-9 overflow-x-auto no-scrollbar",
                        children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VSCODE_FILES"]).map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveFile(name),
                                className: `flex items-center gap-2 px-3 text-sm border-t-2 min-w-fit ${activeFile === name ? "bg-[#1e1e2e] text-white border-[#e95420]" : "text-white/50 border-transparent hover:bg-white/5"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__["FileCode"], {
                                        className: `w-3.5 h-3.5 ${name.endsWith(".js") ? "text-[#f9d342]" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this),
                                    name
                                ]
                            }, name, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-7 flex items-center px-3 text-xs text-white/50 bg-[#1e1e2e] border-b border-white/5",
                        children: [
                            "portfolio ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-3 h-3 mx-1"
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                lineNumber: 125,
                                columnNumber: 21
                            }, this),
                            " src ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-3 h-3 mx-1"
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                lineNumber: 125,
                                columnNumber: 67
                            }, this),
                            " ",
                            activeFile
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-auto p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pr-4 text-right text-white/30 select-none min-w-[2rem]",
                                    children: file.content.split("\n").map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: i + 1
                                        }, i, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    className: "flex-1 whitespace-pre",
                                    children: file.content.split("\n").map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-h-[1.5em]",
                                            children: highlight(line)
                                        }, i, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this))
                                }, activeFile, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-6 bg-[#007acc] text-white text-xs flex items-center px-3 justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "master*"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$braces$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileJson$3e$__["FileJson"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                                lineNumber: 155,
                                                columnNumber: 55
                                            }, this),
                                            " ",
                                            file.language
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Ln 1, Col 1"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "UTF-8"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Prettier"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(VSCodeApp, "B8eV5svb27wBRLIGAdqb2FpFjdg=");
_c = VSCodeApp;
var _c;
__turbopack_context__.k.register(_c, "VSCodeApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/FilesApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilesApp",
    ()=>FilesApp,
    "TrashApp",
    ()=>TrashApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/folder.mjs [app-client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/image.mjs [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/music.mjs [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/film.mjs [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/house.mjs [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const items = [
    {
        name: "Documents",
        type: "folder",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"],
        color: "#e95420"
    },
    {
        name: "Downloads",
        type: "folder",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"],
        color: "#e95420"
    },
    {
        name: "Pictures",
        type: "folder",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"],
        color: "#e95420"
    },
    {
        name: "Projects",
        type: "folder",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"],
        color: "#e95420"
    },
    {
        name: "about.txt",
        type: "file",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        color: "#9cdcfe"
    },
    {
        name: "resume.pdf",
        type: "file",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        color: "#e95420"
    },
    {
        name: "avatar.png",
        type: "file",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
        color: "#5e2750"
    },
    {
        name: "playlist.mp3",
        type: "file",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"],
        color: "#f9d342"
    },
    {
        name: "demo.mp4",
        type: "file",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"],
        color: "#19b6ee"
    }
];
function FilesApp() {
    _s();
    const [path, setPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "Home"
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col bg-gray-100 text-[#1e1e1e]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-10 bg-white border-b border-black/10 flex items-center px-3 gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                        className: "w-4 h-4 text-black/50"
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/FilesApp.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    path.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center text-sm text-black/60",
                            children: [
                                i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-4 h-4 mx-1"
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/FilesApp.tsx",
                                    lineNumber: 27,
                                    columnNumber: 23
                                }, this),
                                p
                            ]
                        }, i, true, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/FilesApp.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/FilesApp.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 p-4 overflow-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3",
                    children: items.map((item)=>{
                        const Icon = item.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>item.type === "folder" && setPath([
                                    ...path,
                                    item.name
                                ]),
                            className: "flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-black/5 transition-colors group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "w-12 h-12 group-hover:scale-110 transition-transform",
                                    style: {
                                        color: item.color
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/FilesApp.tsx",
                                    lineNumber: 42,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-center",
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/FilesApp.tsx",
                                    lineNumber: 43,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.name, true, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/FilesApp.tsx",
                            lineNumber: 37,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/FilesApp.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/FilesApp.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-7 bg-white border-t border-black/10 flex items-center px-3 text-xs text-black/50 justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            items.length,
                            " items"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/FilesApp.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "7.2 GB available"
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/FilesApp.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/FilesApp.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/FilesApp.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(FilesApp, "7ry9GPLGjhNX3/BZNJF7Zdq/56k=");
_c = FilesApp;
function TrashApp() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col items-center justify-center bg-gray-100 text-[#1e1e1e]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-6xl mb-4",
                children: "🗑️"
            }, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/FilesApp.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-1",
                children: "Trash is Empty"
            }, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/FilesApp.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-black/60",
                children: "Deleted files will appear here."
            }, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/FilesApp.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/FilesApp.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c1 = TrashApp;
var _c, _c1;
__turbopack_context__.k.register(_c, "FilesApp");
__turbopack_context__.k.register(_c1, "TrashApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SettingsApp",
    ()=>SettingsApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/volume-2.mjs [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/volume-x.mjs [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/monitor.mjs [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/wifi.mjs [app-client] (ecmascript) <export default as Wifi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Battery$3e$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/lucide-react/dist/esm/icons/battery.mjs [app-client] (ecmascript) <export default as Battery>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SettingsApp() {
    _s();
    const { soundEnabled, setSoundEnabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesktop"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex bg-gray-100 text-[#1e1e1e]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-48 bg-white border-r border-black/10 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-semibold mb-2",
                        children: "Settings"
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    [
                        "Wi-Fi",
                        "Bluetooth",
                        "Background",
                        "Sound",
                        "Power",
                        "Accessibility"
                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `w-full text-left px-3 py-2 rounded-lg text-sm mb-1 ${s === "Sound" ? "bg-[#e95420]/10 text-[#e95420]" : "hover:bg-black/5"}`,
                            children: s
                        }, s, false, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 p-6 overflow-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-6",
                        children: "Sound"
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 max-w-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-3 rounded-xl bg-white border border-black/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            soundEnabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                className: "w-5 h-5 text-[#e95420]"
                                            }, void 0, false, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 30,
                                                columnNumber: 31
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                                className: "w-5 h-5 text-black/50"
                                            }, void 0, false, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 30,
                                                columnNumber: 80
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                children: "System Sounds"
                                            }, void 0, false, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 31,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSoundEnabled(!soundEnabled),
                                        className: `w-12 h-6 rounded-full transition-colors relative ${soundEnabled ? "bg-[#e95420]" : "bg-black/20"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all ${soundEnabled ? "left-6.5" : "left-0.5"}`
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-3 rounded-xl bg-white border border-black/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                                className: "w-5 h-5 text-[#5e2750]"
                                            }, void 0, false, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 49,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                children: "Dark Mode"
                                            }, void 0, false, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 50,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-black/50",
                                        children: "Always on"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-3 rounded-xl bg-white border border-black/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"], {
                                                className: "w-5 h-5 text-[#19b6ee]"
                                            }, void 0, false, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                children: "Resolution"
                                            }, void 0, false, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-black/50",
                                        children: "Auto"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-3 rounded-xl bg-white border border-black/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                                className: "w-5 h-5 text-[#0e8420]"
                                            }, void 0, false, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                children: "Wi-Fi"
                                            }, void 0, false, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-[#0e8420]",
                                        children: "Connected"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-3 rounded-xl bg-white border border-black/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$battery$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Battery$3e$__["Battery"], {
                                                className: "w-5 h-5 text-[#f9d342]"
                                            }, void 0, false, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                children: "Battery"
                                            }, void 0, false, {
                                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                                lineNumber: 74,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-black/50",
                                        children: "85% — Charging"
                                    }, void 0, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(SettingsApp, "PSOjzRcCgWWVqoLL/7CM9h2VEZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesktop"]
    ];
});
_c = SettingsApp;
var _c;
__turbopack_context__.k.register(_c, "SettingsApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/AppRenderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppRenderer",
    ()=>AppRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$apps$2f$AboutApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/AboutApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$apps$2f$SkillsApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SkillsApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$apps$2f$ProjectsApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ProjectsApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$apps$2f$ResumeApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/ResumeApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$apps$2f$TerminalApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/TerminalApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$apps$2f$BrowserApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/BrowserApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$apps$2f$VSCodeApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/VSCodeApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$apps$2f$FilesApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/FilesApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$apps$2f$SettingsApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/apps/SettingsApp.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function AppRenderer({ appId }) {
    switch(appId){
        case "about":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$apps$2f$AboutApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutApp"], {}, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/AppRenderer.tsx",
                lineNumber: 17,
                columnNumber: 14
            }, this);
        case "skills":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$apps$2f$SkillsApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkillsApp"], {}, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/AppRenderer.tsx",
                lineNumber: 19,
                columnNumber: 14
            }, this);
        case "projects":
        case "files":
            return appId === "projects" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$apps$2f$ProjectsApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectsApp"], {}, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/AppRenderer.tsx",
                lineNumber: 22,
                columnNumber: 37
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$apps$2f$FilesApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilesApp"], {}, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/AppRenderer.tsx",
                lineNumber: 22,
                columnNumber: 55
            }, this);
        case "resume":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$apps$2f$ResumeApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResumeApp"], {}, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/AppRenderer.tsx",
                lineNumber: 24,
                columnNumber: 14
            }, this);
        case "contact":
        case "terminal":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$apps$2f$TerminalApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TerminalApp"], {}, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/AppRenderer.tsx",
                lineNumber: 27,
                columnNumber: 14
            }, this);
        case "browser":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$apps$2f$BrowserApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrowserApp"], {}, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/AppRenderer.tsx",
                lineNumber: 29,
                columnNumber: 14
            }, this);
        case "vscode":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$apps$2f$VSCodeApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VSCodeApp"], {}, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/AppRenderer.tsx",
                lineNumber: 31,
                columnNumber: 14
            }, this);
        case "trash":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$apps$2f$FilesApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrashApp"], {}, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/AppRenderer.tsx",
                lineNumber: 33,
                columnNumber: 14
            }, this);
        case "settings":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$apps$2f$SettingsApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsApp"], {}, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/AppRenderer.tsx",
                lineNumber: 35,
                columnNumber: 14
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$apps$2f$AboutApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutApp"], {}, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/AppRenderer.tsx",
                lineNumber: 37,
                columnNumber: 14
            }, this);
    }
}
_c = AppRenderer;
var _c;
__turbopack_context__.k.register(_c, "AppRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/BootScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BootScreen",
    ()=>BootScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$hooks$2f$useSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/hooks/useSound.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function BootScreen({ onComplete }) {
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$hooks$2f$useSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSound"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BootScreen.useEffect": ()=>{
            play("startup");
            const p = setInterval({
                "BootScreen.useEffect.p": ()=>{
                    setProgress({
                        "BootScreen.useEffect.p": (prev)=>{
                            if (prev >= 100) {
                                clearInterval(p);
                                return 100;
                            }
                            return prev + Math.random() * 12;
                        }
                    }["BootScreen.useEffect.p"]);
                }
            }["BootScreen.useEffect.p"], 180);
            const t = setTimeout({
                "BootScreen.useEffect.t": ()=>{
                    setVisible(false);
                    setTimeout(onComplete, 500);
                }
            }["BootScreen.useEffect.t"], 2200);
            return ({
                "BootScreen.useEffect": ()=>{
                    clearInterval(p);
                    clearTimeout(t);
                }
            })["BootScreen.useEffect"];
        }
    }["BootScreen.useEffect"], [
        onComplete,
        play
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.5
            },
            className: "fixed inset-0 z-[20000] bg-[#1e1e1e] flex flex-col items-center justify-center text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-6xl mb-6",
                    children: "🐧"
                }, void 0, false, {
                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/BootScreen.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-2xl font-light tracking-widest mb-8",
                    children: "ubuntu"
                }, void 0, false, {
                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/BootScreen.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-64 h-1.5 bg-white/10 rounded-full overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "h-full bg-[#e95420]",
                        initial: {
                            width: 0
                        },
                        animate: {
                            width: `${Math.min(progress, 100)}%`
                        },
                        transition: {
                            duration: 0.2
                        }
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/BootScreen.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/BootScreen.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 text-sm text-white/50 font-mono",
                    children: [
                        "Loading portfolio... ",
                        Math.min(progress, 100).toFixed(0),
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/BootScreen.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/BootScreen.tsx",
            lineNumber: 38,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/BootScreen.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(BootScreen, "ySd7Qi1CsxifhVPO6lvIp+Fskfo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$hooks$2f$useSound$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSound"]
    ];
});
_c = BootScreen;
var _c;
__turbopack_context__.k.register(_c, "BootScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Desktop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Desktop",
    ()=>Desktop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$TopPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/TopPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$Dock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Dock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopIcons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$ActivitiesOverview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/ActivitiesOverview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$WindowFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/WindowFrame.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$AppRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/AppRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$BootScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/BootScreen.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
// Toggle to re-enable workspace switching via horizontal mouse wheel.
const WHEEL_WORKSPACE_ENABLED = false;
function Desktop() {
    _s();
    const { windows, workspace, setWorkspace, activitiesOpen, setActivitiesOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesktop"])();
    const [booted, setBooted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const swipeStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const swipeStartY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Scroll gesture workspace activation is disabled to prevent accidental workspace/activities triggering while scrolling.
    // Touch swipe workspace switching
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Desktop.useEffect": ()=>{
            const onTouchStart = {
                "Desktop.useEffect.onTouchStart": (e)=>{
                    swipeStartX.current = e.touches[0].clientX;
                    swipeStartY.current = e.touches[0].clientY;
                }
            }["Desktop.useEffect.onTouchStart"];
            const onTouchEnd = {
                "Desktop.useEffect.onTouchEnd": (e)=>{
                    const dx = e.changedTouches[0].clientX - swipeStartX.current;
                    const dy = e.changedTouches[0].clientY - swipeStartY.current;
                    if (activitiesOpen) {
                        if (dy > 80) setActivitiesOpen(false);
                        return;
                    }
                    if (Math.abs(dx) > 80) {
                        if (dx > 0) setWorkspace(workspace - 1);
                        else setWorkspace(workspace + 1);
                    }
                    if (dy < -100) setActivitiesOpen(true);
                }
            }["Desktop.useEffect.onTouchEnd"];
            window.addEventListener("touchstart", onTouchStart, {
                passive: true
            });
            window.addEventListener("touchend", onTouchEnd, {
                passive: true
            });
            return ({
                "Desktop.useEffect": ()=>{
                    window.removeEventListener("touchstart", onTouchStart);
                    window.removeEventListener("touchend", onTouchEnd);
                }
            })["Desktop.useEffect"];
        }
    }["Desktop.useEffect"], [
        workspace,
        setWorkspace,
        activitiesOpen,
        setActivitiesOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !booted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$BootScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BootScreen"], {
                onComplete: ()=>setBooted(true)
            }, void 0, false, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Desktop.tsx",
                lineNumber: 54,
                columnNumber: 19
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 ubuntu-wallpaper overflow-hidden",
                onClick: ()=>setActivitiesOpen(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$TopPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopPanel"], {}, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Desktop.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0",
                        animate: {
                            scale: activitiesOpen ? 0.85 : 1,
                            borderRadius: activitiesOpen ? 24 : 0,
                            filter: activitiesOpen ? "brightness(0.6) blur(8px)" : "brightness(1) blur(0px)"
                        },
                        transition: {
                            type: "spring",
                            stiffness: 250,
                            damping: 28
                        },
                        style: {
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesktopIcons"], {}, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Desktop.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "popLayout",
                                children: windows.map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$WindowFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WindowFrame"], {
                                        window: w,
                                        appId: w.appId,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$AppRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppRenderer"], {
                                            appId: w.appId
                                        }, void 0, false, {
                                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Desktop.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this)
                                    }, w.id, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Desktop.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Desktop.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-10 right-4 flex gap-1.5 z-[150]",
                                children: [
                                    1,
                                    2
                                ].map((ws)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            setWorkspace(ws);
                                        },
                                        onPointerDown: (e)=>e.stopPropagation(),
                                        className: `w-2 h-2 rounded-full transition-all ${workspace === ws ? "bg-white w-4" : "bg-white/40 hover:bg-white/70"}`,
                                        "aria-label": `Workspace ${ws}`
                                    }, ws, false, {
                                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Desktop.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Desktop.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Desktop.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$Dock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dock"], {}, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Desktop.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: activitiesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$ActivitiesOverview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActivitiesOverview"], {}, void 0, false, {
                            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Desktop.tsx",
                            lineNumber: 102,
                            columnNumber: 45
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Desktop.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Desktop.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Desktop, "n/qJx3kFgc6L8O3oawAY9TrTsJg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesktop"]
    ];
});
_c = Desktop;
var _c;
__turbopack_context__.k.register(_c, "Desktop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vibe-projects/pj1/ubuntu-portfolio/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/DesktopContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$Desktop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vibe-projects/pj1/ubuntu-portfolio/src/components/desktop/Desktop.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$DesktopContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesktopProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vibe$2d$projects$2f$pj1$2f$ubuntu$2d$portfolio$2f$src$2f$components$2f$desktop$2f$Desktop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Desktop"], {}, void 0, false, {
            fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/app/page.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vibe-projects/pj1/ubuntu-portfolio/src/app/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=vibe-projects_pj1_ubuntu-portfolio_src_0kxmznb._.js.map