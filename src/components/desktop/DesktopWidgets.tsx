"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  ExternalLink,
  FileText,
  FolderOpen,
  GraduationCap,
} from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { useDesktop } from "./DesktopContext";
import { useSound } from "@/hooks/useSound";

const skillora = PROJECTS.find((p) => p.id === "skillora-ai");

const cardMotion = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.25 + i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function CardShell({
  index,
  label,
  children,
  className = "",
}: {
  index: number;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      aria-label={label}
      custom={index}
      variants={cardMotion}
      initial="hidden"
      animate="show"
      className={`glass-card p-4 xl:p-5 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function WidgetTitle({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#f36b21]/25 bg-[#f36b21]/15 text-[#ff8a4c]">
        {icon}
      </span>
      <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
        {children}
      </h2>
    </div>
  );
}

export function DesktopWidgets() {
  const { launchApp } = useDesktop();
  const play = useSound();

  const openApp = (id: "projects" | "resume") => {
    play("click");
    launchApp(id);
  };

  return (
    <aside
      aria-label="Portfolio highlights"
      className="desktop-widgets grid grid-cols-1 gap-3 min-[640px]:grid-cols-3 min-[1024px]:w-[19rem] min-[1024px]:grid-cols-1 xl:w-[21rem]"
    >
      {/* Education */}
      <CardShell index={0} label="Education">
        <WidgetTitle icon={<GraduationCap className="h-4 w-4" aria-hidden="true" />}>
          Education
        </WidgetTitle>
        <div className="mt-3">
          <p className="text-[13px] font-semibold leading-snug text-white">ITM University, Gwalior</p>
          <p className="mt-0.5 text-[11px] text-white/65">B.Tech – Computer Science</p>
          <p className="mt-2 flex items-center gap-1.5 text-[10px] text-white/45">
            <CalendarDays className="h-3 w-3" aria-hidden="true" />
            Aug 2025 – Sep 2029
          </p>
        </div>
      </CardShell>

      {/* Quick access */}
      <CardShell index={1} label="Quick access">
        <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
          Quick Access
        </h2>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            onClick={() => openApp("projects")}
            className="glass-inset flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-white/85 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-offset-2"
          >
            <FolderOpen className="h-4 w-4" aria-hidden="true" />
            <span className="text-[10px] leading-none">Projects</span>
          </button>
          <button
            onClick={() => openApp("resume")}
            className="glass-inset flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-white/85 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-offset-2"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            <span className="text-[10px] leading-none">Resume</span>
          </button>
          <a
            href="https://github.com/ashritanshuman"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => play("click")}
            className="glass-inset flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-white/85 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-offset-2"
          >
            <GitHubIcon className="h-4 w-4" />
            <span className="text-[10px] leading-none">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/ashritanshuman/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => play("click")}
            className="glass-inset flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-white/85 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-offset-2"
          >
            <LinkedInIcon className="h-4 w-4" />
            <span className="text-[10px] leading-none">LinkedIn</span>
          </a>
        </div>
      </CardShell>

      {/* Now building */}
      <CardShell index={2} label="Now building">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
            Now Building
          </h2>
          <span className="flex items-center gap-1.5 text-[9px] font-medium text-emerald-300">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Active
          </span>
        </div>
        <a
          href={skillora?.link ?? "https://skilloraai.vercel.app/"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => play("click")}
          className="glass-inset group mt-3 flex items-center justify-between gap-3 rounded-xl p-3 transition-colors hover:bg-white/15 focus-visible:outline-offset-2"
          aria-label="Open SkilloraAI in a new tab"
        >
          <span className="min-w-0">
            <span className="block truncate text-[13px] font-semibold text-white">SkilloraAI</span>
            <span className="mt-0.5 block text-[10px] leading-snug text-white/55">
              AI Resume Builder &amp; ATS Checker
            </span>
          </span>
          <ExternalLink
            className="h-4 w-4 shrink-0 text-white/50 transition-colors group-hover:text-[#ff8a4c]"
            aria-hidden="true"
          />
        </a>
      </CardShell>
    </aside>
  );
}
