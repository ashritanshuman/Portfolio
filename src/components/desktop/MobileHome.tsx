"use client";

import { Download, LayoutGrid, Mail } from "lucide-react";
import { APPS } from "@/lib/data";
import { getIcon } from "./Icon";
import { useDesktop } from "./DesktopContext";
import { useSound } from "@/hooks/useSound";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import type { AppId } from "./types";

const PORTFOLIO_APPS: AppId[] = ["about", "projects", "skills", "resume", "contact", "terminal"];

const HOME_LABELS: Record<string, string> = {
  about: "About Me",
  projects: "Projects",
  skills: "Skills",
  resume: "Resume",
  contact: "Contact",
  terminal: "Terminal",
};

export function MobileHome({ hidden = false }: { hidden?: boolean }) {
  const { openApp, setActivitiesOpen } = useDesktop();
  const play = useSound();

  const launch = (appId: AppId) => {
    play("click");
    setActivitiesOpen(false);
    openApp(appId);
  };

  return (
    <div
      className={`mobile-only fixed inset-x-0 below-statusbar above-dock z-[100] overflow-y-auto app-scroll ${
        hidden ? "hidden" : ""
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="px-3 pt-3 pb-6">
        {/* Greeting card */}
        <div className="glass-panel rounded-2xl p-4 shadow-lg">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 shrink-0 rounded-full bg-gradient-to-br from-[#e95420] to-[#5e2750] flex items-center justify-center text-white font-semibold text-sm shadow-inner"
              aria-hidden="true"
            >
              AP
            </div>
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/55">Ubuntu Portfolio</p>
              <h1 className="text-[15px] font-semibold text-white leading-tight truncate">
                Ashrit Anshuman Pradhan
              </h1>
              <p className="text-[11px] text-white/65 leading-snug mt-0.5">
                Full Stack Developer &amp; Graphic Designer
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={() => {
                play("click");
                setActivitiesOpen(true);
              }}
              className="flex-1 h-11 rounded-xl bg-white/10 active:bg-white/20 transition-colors flex items-center justify-center gap-2 text-xs font-medium text-white"
            >
              <LayoutGrid className="w-4 h-4" aria-hidden="true" />
              All applications
            </button>
            <a
              href="/resume.pdf"
              download="ashrit_anshuman_resume.pdf"
              onClick={() => play("click")}
              className="flex-1 h-11 rounded-xl bg-[#e95420] active:bg-[#d14b1b] transition-colors flex items-center justify-center gap-2 text-xs font-semibold text-white"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Resume
            </a>
          </div>
        </div>

        {/* Portfolio apps */}
        <h2 className="mt-5 mb-2 px-1 text-[10px] uppercase tracking-[0.18em] text-white/50">
          Portfolio
        </h2>
        <div className="grid grid-cols-3 gap-2">
          {PORTFOLIO_APPS.map((appId) => {
            const app = APPS[appId];
            const Icon = getIcon(app.icon);
            return (
              <button
                key={appId}
                onClick={() => launch(appId)}
                className="min-h-[84px] rounded-2xl bg-white/10 border border-white/10 active:bg-white/20 active:scale-[0.97] transition-[background-color,transform] flex flex-col items-center justify-center gap-1.5 px-1 py-2.5"
                aria-label={`Open ${app.title}`}
              >
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/25 to-white/5 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                </span>
                <span className="text-[10px] leading-tight text-white/90 text-center">
                  {HOME_LABELS[appId] ?? app.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Connect */}
        <h2 className="mt-5 mb-2 px-1 text-[10px] uppercase tracking-[0.18em] text-white/50">
          Connect
        </h2>
        <div className="grid grid-cols-3 gap-2">
          <a
            href="https://github.com/ashritanshuman"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => play("click")}
            className="min-h-[64px] rounded-2xl bg-white/10 border border-white/10 active:bg-white/20 transition-colors flex flex-col items-center justify-center gap-1.5 px-1 py-2"
          >
            <GitHubIcon className="w-5 h-5 text-white" />
            <span className="text-[10px] text-white/90">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/ashritanshuman/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => play("click")}
            className="min-h-[64px] rounded-2xl bg-white/10 border border-white/10 active:bg-white/20 transition-colors flex flex-col items-center justify-center gap-1.5 px-1 py-2"
          >
            <LinkedInIcon className="w-5 h-5 text-white" />
            <span className="text-[10px] text-white/90">LinkedIn</span>
          </a>
          <a
            href="mailto:ashrit39@gmail.com"
            onClick={() => play("click")}
            className="min-h-[64px] rounded-2xl bg-white/10 border border-white/10 active:bg-white/20 transition-colors flex flex-col items-center justify-center gap-1.5 px-1 py-2"
          >
            <Mail className="w-5 h-5 text-white" aria-hidden="true" />
            <span className="text-[10px] text-white/90">Email</span>
          </a>
        </div>

        <p className="mt-5 text-center text-[10px] text-white/50">
          Tap an app to open it · Swipe within apps to scroll
        </p>
      </div>
    </div>
  );
}
