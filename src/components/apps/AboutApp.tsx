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
• Explore the intersection of AI and creativity`,
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
