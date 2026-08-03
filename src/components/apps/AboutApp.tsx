import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Heart, Target, GraduationCap, User } from "lucide-react";

const tabs = [
  { id: "intro", label: "Introduction", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "interests", label: "Interests", icon: Heart },
  { id: "goals", label: "Goals", icon: Target },
];

const content: Record<string, string> = {
  intro: `Hi, I'm Ashrit Anshuman Pradhan — a Computer Science student, Web Developer, and Graphic Designer based in Gwalior, Madhya Pradesh, India.

I specialize in building full-stack web applications, AI-powered tools, and graphic design assets. From freelancing with 30+ clients and local schools to leading a 6-member team at Smart India Hackathon 2025, I focus on delivering user-centric digital experiences.

This portfolio is an interactive Ubuntu desktop environment reflecting my passion for software engineering, modern web technologies, and clean design.`,
  education: `ITM University Gwalior
Bachelor of Technology in Computer Science (August 2025 – September 2029)
Location: Gwalior, Madhya Pradesh, India

Technical Focus & Skills:
• Languages: Python, Java, JavaScript, SQL
• Developer Tools: Git, GitHub, VS Code, Docker, Linux
• Frameworks & Libraries: React.js, Tailwind CSS, Express.js, MongoDB, Firebase, NumPy, Pandas, Matplotlib`,
  interests: `• Full-stack Web Development & AI Tools Integration
• Peer Collaboration Platforms & Academic Tools
• Graphic Design, Promotional Campaigns & Branding
• Hackathons & Technical Team Leadership
• Open-Source Software & Linux Ecosystems`,
  goals: `Short-term:
• Expand Skillora AI and PathGen with broader user capabilities
• Ship innovative full-stack solutions for client & community needs
• Contribute actively to open-source developer toolkits

Long-term:
• Engineer scalable AI-driven platforms that solve complex real-world challenges
• Lead high-impact engineering teams in fast-paced software environments`,
};

export function AboutApp() {
  const [activeTab, setActiveTab] = useState("intro");

  return (
    <div className="h-full flex flex-col bg-gray-100 text-[#1e1e1e]">
      <div className="flex border-b border-black/10 bg-white">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2 text-sm border-r border-black/5 transition-colors ${
                activeTab === tab.id ? "bg-[#e95420]/10 text-[#e95420]" : "hover:bg-black/5"
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="max-w-2xl whitespace-pre-line leading-relaxed text-[15px]"
          >
            {content[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="px-4 py-2 text-xs text-black/40 border-t border-black/10 bg-white flex items-center justify-between">
        <span>UTF-8</span>
        <span>{tabs.find((t) => t.id === activeTab)?.label}</span>
      </div>
    </div>
  );
}
