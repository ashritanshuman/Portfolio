"use client";

import { motion } from "framer-motion";
import { DESKTOP_ICONS, APPS } from "@/lib/data";
import { getIcon } from "./Icon";
import { useDesktop } from "./DesktopContext";
import { useSound } from "@/hooks/useSound";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import type { AppId, DesktopIcon } from "./types";

export function DesktopIcons() {
  const { launchApp, setActivitiesOpen, windows, activeWindowId } = useDesktop();
  const play = useSound();

  const handleClick = (icon: DesktopIcon) => {
    play("click");
    setActivitiesOpen(false);
    if (icon.url) {
      window.open(icon.url, "_blank", "noopener,noreferrer");
    } else {
      launchApp(icon.appId as AppId);
    }
  };

  return (
    <div className="desktop-only fixed bottom-24 left-0 top-10 z-[100] w-[88px] overflow-y-auto no-scrollbar lg:w-[96px]">
      <div className="flex flex-col gap-1 p-1.5">
        {DESKTOP_ICONS.map((icon) => {
          const appConfig = APPS[icon.appId];
          const Icon =
            icon.label === "GitHub"
              ? GitHubIcon
              : icon.label === "LinkedIn"
              ? LinkedInIcon
              : getIcon(appConfig?.icon ?? "FileText");

          // External shortcuts (GitHub / LinkedIn) never carry a window state.
          const runningWindow = icon.url
            ? undefined
            : windows.find((w) => w.appId === icon.appId);
          const isActive = !!runningWindow && runningWindow.id === activeWindowId && !runningWindow.minimized;

          return (
            <motion.button
              key={icon.id}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleClick(icon)}
              onPointerDown={(e) => e.stopPropagation()}
              className="group relative flex min-h-[76px] flex-col items-center justify-center gap-1 rounded-xl py-0.5"
              aria-label={`Open ${icon.label}`}
            >
              {/* Active indicator */}
              {isActive && (
                <motion.span
                  layoutId="desktop-icon-active"
                  className="absolute left-0 top-1/2 h-7 w-[3px] -translate-y-1/2 rounded-full bg-[#f36b21] shadow-[0_0_10px_rgba(243,107,33,0.8)]"
                  aria-hidden="true"
                />
              )}

              <span
                className={`flex h-[56px] w-[56px] items-center justify-center rounded-2xl border shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_8px_20px_-8px_rgba(0,0,0,0.6)] backdrop-blur-md transition-colors ${
                  isActive
                    ? "border-[#f36b21]/45 bg-gradient-to-br from-[#7a335f]/80 to-[#3a0f2f]/80"
                    : "border-white/12 bg-gradient-to-br from-[#5e2750]/70 to-[#2c001e]/70 group-hover:from-[#71345f]/80 group-hover:to-[#3a0f2f]/80"
                }`}
              >
                <Icon className="h-6 w-6 text-white drop-shadow-md" aria-hidden="true" />
              </span>

              <span className="max-w-full truncate rounded px-1 text-[10px] leading-tight text-white/90 drop-shadow-md">
                {icon.label}
              </span>

              {runningWindow && (
                <span
                  className="absolute bottom-0 h-1 w-1 rounded-full bg-[#f36b21]"
                  aria-hidden="true"
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
