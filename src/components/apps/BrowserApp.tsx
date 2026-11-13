"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, RotateCw, Home, ExternalLink, Star } from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";

const REPOS = [
  { name: "skillora-ai", desc: "Skillora AI – AI-Powered Resume Builder with real-time preview", url: "https://skilloraai.vercel.app/", repoUrl: "https://github.com/ashritanshuman/skillora-ai", stars: 28, lang: "JavaScript" },
  { name: "skill-roadmap-generator", desc: "PathGen – AI-powered personalized learning roadmap platform", url: "https://ashritanshuman.github.io/skill-roadmap-generator/", repoUrl: "https://github.com/ashritanshuman/skill-roadmap-generator", stars: 35, lang: "JavaScript" },
  { name: "study-group-finder", desc: "Study Group Finder – Student peer collaboration platform", url: "https://sgfphoneix.vercel.app/", repoUrl: "https://github.com/ashritanshuman/study-group-finder", stars: 19, lang: "JavaScript" },
  { name: "alumni-platform", desc: "Digital Alumni Data Management & Engagement Platform (SIH 2025)", repoUrl: "https://github.com/ashritanshuman/alumni-platform", stars: 14, lang: "JavaScript" },
  { name: "ubuntu-portfolio", desc: "Ubuntu Desktop OS Portfolio built with Next.js & React", url: "https://ashritanshuman.vercel.app", repoUrl: "https://github.com/ashritanshuman/ubuntu-portfolio", stars: 42, lang: "TypeScript" },
];

export function BrowserApp() {
  const [url] = useState("https://github.com/ashritanshuman");
  const [activeTab, setActiveTab] = useState("github");

  return (
    <div className="h-full flex flex-col bg-[#1e1e2e] text-white">
      {/* Tabs */}
      <div className="flex items-end bg-[#181825] pt-1 px-1 gap-1 overflow-x-auto no-scrollbar shrink-0">
        {["github", "projects", "resume"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            aria-pressed={activeTab === tab}
            className={`shrink-0 px-3 sm:px-4 min-h-[44px] sm:min-h-0 sm:py-2 rounded-t-lg text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === tab ? "bg-[#1e1e2e] text-white" : "text-white/50 hover:bg-white/5"
            }`}
          >
            <GitHubIcon className="w-4 h-4" />
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Address bar */}
      <div className="min-h-11 shrink-0 bg-[#1e1e2e] border-b border-white/10 flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1">
        <div className="hidden sm:flex items-center gap-1">
          <button className="p-1.5 rounded hover:bg-white/10 text-white/60" aria-label="Back">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          </button>
          <button className="p-1.5 rounded hover:bg-white/10 text-white/60" aria-label="Forward">
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
          <button className="p-1.5 rounded hover:bg-white/10 text-white/60" aria-label="Reload">
            <RotateCw className="w-4 h-4" aria-hidden="true" />
          </button>
          <button className="p-1.5 rounded hover:bg-white/10 text-white/60" aria-label="Home">
            <Home className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
        <div className="flex-1 min-w-0 bg-[#181825] rounded-lg h-8 px-3 flex items-center text-xs sm:text-sm text-white/80 border border-white/10 truncate">
          <span className="truncate">{url}</span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded hover:bg-white/10 text-white/60 shrink-0"
          aria-label="Open address in a new tab"
        >
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>

      {/* Content */}
      <div className="flex-1 min-h-0 overflow-y-auto app-scroll p-4 sm:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full bg-[#24292f] border border-white/10 flex items-center justify-center">
                <GitHubIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <div className="min-w-0">
                <h1 className="text-xl sm:text-2xl font-bold">ashritanshuman</h1>
                <p className="text-sm sm:text-base text-white/60">
                  Full Stack Developer &amp; Graphic Designer | B.Tech CS @ ITM University Gwalior
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs sm:text-sm text-white/60">
                  <span>5 pinned repositories</span>
                  <span>Gwalior, India</span>
                </div>
              </div>
            </div>

            <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Popular Repositories &amp; Deployments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {REPOS.map((repo) => (
                <div
                  key={repo.name}
                  className="p-4 rounded-xl bg-[#181825] border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <a
                        href={repo.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-[#58a6ff] hover:underline break-words"
                      >
                        {repo.name}
                      </a>
                      <span className="flex items-center gap-1 text-xs text-white/60 shrink-0">
                        <Star className="w-3 h-3 text-yellow-400" aria-hidden="true" /> {repo.stars}
                      </span>
                    </div>
                    <p className="text-sm text-white/60 mt-1">{repo.desc}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4 text-xs">
                    <div className="flex items-center gap-2 text-white/50">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#e95420]" aria-hidden="true" />
                      {repo.lang}
                    </div>
                    {repo.url && (
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-[#e95420] hover:underline font-medium py-1"
                      >
                        Live Demo <ExternalLink className="w-3 h-3" aria-hidden="true" />
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
