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
  { name: "skillora-ai", desc: "Skillora AI – AI-Powered Resume Builder with real-time preview", url: "https://skilloraai.vercel.app/", repoUrl: "https://github.com/ashritanshuman/skillora-ai", stars: 28, lang: "JavaScript" },
  { name: "skill-roadmap-generator", desc: "PathGen – AI-powered personalized learning roadmap platform", url: "https://ashritanshuman.github.io/skill-roadmap-generator/", repoUrl: "https://github.com/ashritanshuman/skill-roadmap-generator", stars: 35, lang: "JavaScript" },
  { name: "study-group-finder", desc: "Study Group Finder – Student peer collaboration platform", url: "https://sgfphoneix.vercel.app/", repoUrl: "https://github.com/ashritanshuman/study-group-finder", stars: 19, lang: "JavaScript" },
  { name: "alumni-platform", desc: "Digital Alumni Data Management & Engagement Platform (SIH 2025)", repoUrl: "https://github.com/ashritanshuman/alumni-platform", stars: 14, lang: "JavaScript" },
  { name: "ubuntu-portfolio", desc: "Ubuntu Desktop OS Portfolio built with Next.js & React", url: "https://ashritanshuman.vercel.app", repoUrl: "https://github.com/ashritanshuman/ubuntu-portfolio", stars: 42, lang: "TypeScript" },
];

export function BrowserApp() {
  const [url, setUrl] = useState("https://github.com/ashritanshuman");
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
        <a href={url} target="_blank" rel="noreferrer" className="p-1.5 rounded hover:bg-white/10 text-white/60">
          <ExternalLink className="w-4 h-4" />
        </a>
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
                <h1 className="text-2xl font-bold">ashritanshuman</h1>
                <p className="text-white/60">Full Stack Developer & Graphic Designer | B.Tech CS @ ITM University Gwalior</p>
                <div className="flex gap-4 mt-2 text-sm text-white/60">
                  <span>5 pinned repositories</span>
                  <span>Gwalior, India</span>
                </div>
              </div>
            </div>

            <h2 className="text-lg font-semibold mb-4">Popular Repositories & Deployments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {REPOS.map((repo) => (
                <div
                  key={repo.name}
                  className="p-4 rounded-xl bg-[#181825] border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start">
                      <a
                        href={repo.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-[#58a6ff] hover:underline"
                      >
                        {repo.name}
                      </a>
                      <span className="flex items-center gap-1 text-xs text-white/60">
                        <Star className="w-3 h-3 text-yellow-400" /> {repo.stars}
                      </span>
                    </div>
                    <p className="text-sm text-white/60 mt-1">{repo.desc}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4 text-xs">
                    <div className="flex items-center gap-2 text-white/50">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#e95420]" />
                      {repo.lang}
                    </div>
                    {repo.url && (
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-[#e95420] hover:underline font-medium"
                      >
                        Live Demo <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
