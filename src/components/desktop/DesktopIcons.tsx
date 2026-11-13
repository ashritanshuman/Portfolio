"use client";

import { motion } from "framer-motion";
import { DESKTOP_ICONS, APPS } from "@/lib/data";
import { getIcon } from "./Icon";
import { useDesktop } from "./DesktopContext";
import { useSound } from "@/hooks/useSound";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import type { AppId, DesktopIcon } from "./types";

export function DesktopIcons() {
  const { openApp, setActivitiesOpen } = useDesktop();
  const play = useSound();

  const handleClick = (icon: DesktopIcon) => {
    play("click");
    setActivitiesOpen(false);
    if (icon.url) {
      window.open(icon.url, "_blank", "noopener,noreferrer");
    } else {
      openApp(icon.appId as AppId);
    }
  };

  return (
    <div className="desktop-only fixed top-10 left-0 bottom-20 w-24 lg:w-28 z-[100] overflow-y-auto no-scrollbar">
      <div className="flex flex-col p-1.5 lg:p-2">
        {DESKTOP_ICONS.map((icon) => {
          const appConfig = APPS[icon.appId];
          const Icon =
            icon.label === "GitHub"
              ? GitHubIcon
              : icon.label === "LinkedIn"
              ? LinkedInIcon
              : getIcon(appConfig?.icon ?? "FileText");
          return (
            <motion.button
              key={icon.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleClick(icon)}
              onPointerDown={(e) => e.stopPropagation()}
              className="flex min-h-[64px] lg:min-h-[76px] flex-col items-center justify-center gap-1 group py-1.5 rounded-lg"
              aria-label={`Open ${icon.label}`}
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-sm group-hover:bg-white/20 transition-colors">
                <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <span className="text-[10px] lg:text-xs leading-tight text-white text-center drop-shadow-md px-1 rounded group-hover:bg-black/30 transition-colors">
                {icon.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
