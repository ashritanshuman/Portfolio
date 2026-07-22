"use client";

import { Battery, Wifi, Volume2, User } from "lucide-react";
import { useDesktop } from "./DesktopContext";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function TopPanel() {
  const { toggleActivities, setActivitiesOpen, activitiesOpen, soundEnabled, setSoundEnabled } = useDesktop();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const timeStr = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const dateStr = time.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" });

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-8 glass-panel text-white text-sm flex items-center justify-between px-3 select-none">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleActivities}
          className="font-semibold tracking-wide hover:text-white/80 transition-colors"
        >
          Activities
        </button>
        <AnimatePresence>
          {activitiesOpen && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="hidden sm:flex items-center gap-2 text-white/70"
            >
              <span className="text-xs">Desktop</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="hover:opacity-70 transition-opacity"
          aria-label={soundEnabled ? "Mute sound" : "Unmute sound"}
        >
          <Volume2 className="w-4 h-4" />
        </button>
        <Wifi className="w-4 h-4" />
        <Battery className="w-4 h-4" />
        <User className="w-4 h-4" />
        <button
          onClick={() => setActivitiesOpen(true)}
          className="flex flex-col items-end leading-none hover:opacity-80 transition-opacity"
        >
          <span className="font-medium">{timeStr}</span>
          <span className="text-[10px] text-white/70 hidden sm:inline">{dateStr}</span>
        </button>
      </div>
    </div>
  );
}
