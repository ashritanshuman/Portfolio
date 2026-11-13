"use client";

import { Battery, Wifi, Volume2, VolumeX, User, LayoutGrid } from "lucide-react";
import { useDesktop } from "./DesktopContext";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { UbuntuMark } from "@/components/icons/BrandIcons";

export function TopPanel() {
  const { toggleActivities, setActivitiesOpen, activitiesOpen, soundEnabled, setSoundEnabled, windows, activeWindowId } =
    useDesktop();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Minute-level precision is enough; avoids a re-render every second.
    const t = setInterval(() => setTime(new Date()), 15000);
    return () => clearInterval(t);
  }, []);

  const timeStr = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const dateStr = time.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" });
  const activeWindow = windows.find((w) => w.id === activeWindowId && !w.minimized);
  const activeTitle = activeWindow?.title ?? "Desktop";

  return (
    <header
      role="banner"
      onClick={(e) => e.stopPropagation()}
      className="fixed top-0 left-0 right-0 z-[9999] statusbar-safe glass-panel text-white text-sm flex items-center justify-between gap-1 px-2 md:px-3 select-none"
    >
      <div className="flex items-center gap-1 md:gap-3 min-w-0">
        <button
          onClick={toggleActivities}
          aria-expanded={activitiesOpen}
          aria-label="Activities — switch between open apps and the app launcher"
          className="flex h-10 md:h-8 items-center gap-1.5 rounded-md px-1.5 md:px-0 text-[13px] md:text-sm font-semibold tracking-wide hover:bg-white/10 md:hover:bg-transparent active:bg-white/15 md:hover:text-white/80 transition-colors"
        >
          <LayoutGrid className="w-4 h-4 md:hidden" aria-hidden="true" />
          <span className="hidden min-[370px]:inline">Activities</span>
          <span className="min-[370px]:hidden sr-only">Activities</span>
        </button>

        {/* Brand cluster */}
        <div className="hidden sm:flex items-center gap-2 min-w-0 border-l border-white/10 pl-3 md:pl-4">
          <UbuntuMark className="h-[18px] w-[18px] shrink-0 drop-shadow-[0_2px_6px_rgba(233,84,32,0.45)]" />
          <span className="truncate text-[13px] font-semibold text-white/95">Ashrit Anshuman</span>
          <span className="hidden md:inline text-[11px] text-white/35" aria-hidden="true">
            ·
          </span>
          <span className="hidden md:inline whitespace-nowrap text-[11px] font-medium tracking-wide text-white/55">
            Portfolio OS
          </span>
        </div>

        <AnimatePresence>
          {activitiesOpen && (
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              className="hidden lg:inline text-xs text-white/70"
            >
              Desktop
            </motion.span>
          )}
        </AnimatePresence>

        {!activitiesOpen && (
          <span className="sm:hidden truncate max-w-[32vw] text-[11px] text-white/55" aria-live="polite">
            {activeTitle}
          </span>
        )}
      </div>

      <div className="flex items-center gap-0.5 md:gap-5 shrink-0">
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="flex h-9 w-9 md:h-auto md:w-auto items-center justify-center rounded-md hover:bg-white/10 md:hover:bg-transparent active:bg-white/15 transition-colors"
          aria-label={soundEnabled ? "Mute sound" : "Unmute sound"}
          aria-pressed={!soundEnabled}
        >
          {soundEnabled ? (
            <Volume2 className="w-4 h-4" aria-hidden="true" />
          ) : (
            <VolumeX className="w-4 h-4 text-white/60" aria-hidden="true" />
          )}
        </button>
        <Wifi className="w-4 h-4 mx-1 md:mx-0" aria-label="Wi-Fi connected" role="img" />
        <Battery className="w-4 h-4 mx-1 md:mx-0" aria-label="Battery 85 percent, charging" role="img" />
        <User className="hidden sm:block w-4 h-4" aria-label="User account" role="img" />
        <button
          onClick={() => setActivitiesOpen(true)}
          className="flex flex-col items-end leading-none px-1.5 h-9 md:h-auto justify-center rounded-md hover:bg-white/10 md:hover:bg-transparent active:bg-white/15 md:hover:opacity-80 transition-colors"
          aria-label={`${timeStr}. Open activities`}
          suppressHydrationWarning
        >
          <span className="font-medium text-[12px] md:text-sm" suppressHydrationWarning>
            {timeStr}
          </span>
          <span className="text-[10px] text-white/70 hidden sm:inline" suppressHydrationWarning>
            {dateStr}
          </span>
        </button>
      </div>
    </header>
  );
}
