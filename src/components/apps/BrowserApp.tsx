"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, RotateCw, Home, ExternalLink, Star } from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const REPOS = [
  { name: "portfolio-os", desc: "Ubuntu desktop portfolio website", stars: 142, lang: "TypeScript" },
  { name: "neural-vision", desc: "Real-time object detection", stars: 89, lang: "Python" },
  { name: "task-manager", desc: "Full-stack SaaS for teams", stars: 67, lang: "TypeScript" },
  { name: "churn-predictor", desc: "Customer churn prediction", stars: 45, lang: "Python" },
  { name: "recommender-engine", desc: "Collaborative filtering engine", stars: 38, lang: "Python" },
  { name: "sales-dashboard", desc: "Interactive analytics dashboard", stars: 54, lang: "Python" },
];

export function BrowserApp() {
  const [url, setUrl] = useState("https://github.com/ashrit");
  const [activeTab, setActiveTab] = useState("github");

  return (
    <div className="h-full flex flex-col bg-[#1e1e2e] text-white">
      {/* Tabs */}
      <div className="flex items-end bg-[#181825] pt-1 px-1 gap-1">
        {["github", "projects", "resume"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-t-lg text-sm flex items-center gap-2 transition-colors ${
              activeTab === tab ? "bg-[#1e1e2e] text-white" : "text-white/50 hover:bg-white/5"
            }`}
          >
                    <GitHubIcon className="w-4 h-4" />
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Address bar */}
      <div className="h-11 bg-[#1e1e2e] border-b border-white/10 flex items-center gap-2 px-3">
        <button className="p-1.5 rounded hover:bg-white/10 text-white/60">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button className="p-1.5 rounded hover:bg-white/10 text-white/60">
          <ArrowRight className="w-4 h-4" />
        </button>
        <button className="p-1.5 rounded hover:bg-white/10 text-white/60">
          <RotateCw className="w-4 h-4" />
        </button>
        <button className="p-1.5 rounded hover:bg-white/10 text-white/60">
          <Home className="w-4 h-4" />
        </button>
        <div className="flex-1 bg-[#181825] rounded-lg h-8 px-3 flex items-center text-sm text-white/80 border border-white/10">
          {url}
        </div>
        <button className="p-1.5 rounded hover:bg-white/10 text-white/60">
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-20 h-20 rounded-full bg-[#24292f] border border-white/10 flex items-center justify-center">
                <GitHubIcon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">ashrit</h1>
                <p className="text-white/60">Full Stack Developer & AI Enthusiast</p>
                <div className="flex gap-4 mt-2 text-sm text-white/60">
                  <span>12 repositories</span>
                  <span>1.2k followers</span>
                  <span>321 following</span>
                </div>
              </div>
            </div>

            <h2 className="text-lg font-semibold mb-4">Popular Repositories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {REPOS.map((repo) => (
                <a
                  key={repo.name}
                  href={`https://github.com/ashrit/${repo.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block p-4 rounded-xl bg-[#181825] border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-[#58a6ff]">{repo.name}</h3>
                    <span className="flex items-center gap-1 text-xs text-white/60">
                      <Star className="w-3 h-3" /> {repo.stars}
                    </span>
                  </div>
                  <p className="text-sm text-white/60 mt-1">{repo.desc}</p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-white/50">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#e95420]" />
                    {repo.lang}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
