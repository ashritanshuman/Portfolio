"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SKILL_METRICS, SKILL_MAP } from "@/lib/data";

function Bar({ label, value, color, usage }: { label: string; value: number; color: string; usage: number }) {
  const [currentUsage, setCurrentUsage] = useState(usage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUsage(Math.max(20, Math.min(98, usage + Math.floor(Math.random() * 21) - 10)));
    }, 3000);
    return () => clearInterval(interval);
  }, [usage]);

  return (
    <div className="mb-5 last:mb-0">
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <div className="flex items-center gap-2 min-w-0 flex-wrap">
          <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: color }} aria-hidden="true" />
          <span className="text-xs sm:text-sm font-medium text-white/90">{label}</span>
          <span className="text-[10px] sm:text-xs text-white/50 leading-snug">→ {SKILL_MAP[label]}</span>
        </div>
        <span className="text-xs sm:text-sm text-white/70 shrink-0 tabular-nums">{currentUsage}%</span>
      </div>
      <div
        className="h-3 bg-white/10 rounded-full overflow-hidden"
        role="progressbar"
        aria-label={`${label} proficiency`}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full relative"
          style={{ backgroundColor: color }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
}

export function SkillsApp() {
  return (
    <div className="h-full bg-[#1e1e1e] text-white p-4 sm:p-6 overflow-y-auto app-scroll">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5 sm:mb-6">
        <div>
          <h2 className="text-base sm:text-lg font-semibold">System Monitor</h2>
          <p className="text-[11px] sm:text-xs text-white/50">Skills visualized as live system metrics</p>
        </div>
        <div className="flex gap-2 text-[10px] sm:text-xs">
          <span className="px-2 py-1 rounded bg-white/10">4 cores</span>
          <span className="px-2 py-1 rounded bg-white/10">16 GB RAM</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          {SKILL_METRICS.map((metric) => (
            <Bar key={metric.label} {...metric} />
          ))}
        </div>

        <div className="space-y-4">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h3 className="text-sm font-medium mb-3 text-white/90">Core Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "Java", "JavaScript", "SQL", "React.js", "Tailwind CSS", "MongoDB", "Express.js", "Firebase", "Docker", "Linux", "NumPy", "Pandas", "Matplotlib"].map((skill) => (
                <span key={skill} className="px-2.5 py-1 rounded-md bg-white/10 text-xs text-white/80">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h3 className="text-sm font-medium mb-3 text-white/90">Process History</h3>
            <div className="space-y-2 text-xs text-white/70">
              <div className="flex justify-between gap-2"><span className="truncate">skillora-ai</span><span className="shrink-0">24.8% GPU</span></div>
              <div className="flex justify-between gap-2"><span className="truncate">skill-roadmap-gen</span><span className="shrink-0">14.2% CPU</span></div>
              <div className="flex justify-between gap-2"><span className="truncate">study-group-finder</span><span className="shrink-0">18.5% RAM</span></div>
              <div className="flex justify-between gap-2"><span className="truncate">sih-alumni-platform</span><span className="shrink-0">12.1% CPU</span></div>
              <div className="flex justify-between gap-2"><span className="truncate">ubuntu-portfolio-os</span><span className="shrink-0">10.4% RAM</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
