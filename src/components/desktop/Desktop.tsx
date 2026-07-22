"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDesktop } from "./DesktopContext";
import { TopPanel } from "./TopPanel";
import { Dock } from "./Dock";
import { DesktopIcons } from "./DesktopIcons";
import { ActivitiesOverview } from "./ActivitiesOverview";
import { WindowFrame } from "./WindowFrame";
import { AppRenderer } from "./AppRenderer";
import { BootScreen } from "./BootScreen";

// Toggle to re-enable workspace switching via horizontal mouse wheel.
const WHEEL_WORKSPACE_ENABLED = false;

export function Desktop() {
  const { windows, workspace, setWorkspace, activitiesOpen, setActivitiesOpen } = useDesktop();
  const [booted, setBooted] = useState(false);
  const swipeStartX = useRef(0);
  const swipeStartY = useRef(0);

  // Scroll gesture workspace activation is disabled to prevent accidental workspace/activities triggering while scrolling.

  // Touch swipe workspace switching
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      swipeStartX.current = e.touches[0].clientX;
      swipeStartY.current = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - swipeStartX.current;
      const dy = e.changedTouches[0].clientY - swipeStartY.current;
      if (activitiesOpen) {
        if (dy > 80) setActivitiesOpen(false);
        return;
      }
      if (Math.abs(dx) > 80) {
        if (dx > 0) setWorkspace(workspace - 1);
        else setWorkspace(workspace + 1);
      }
      if (dy < -100) setActivitiesOpen(true);
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [workspace, setWorkspace, activitiesOpen, setActivitiesOpen]);

  return (
    <>
      {!booted && <BootScreen onComplete={() => setBooted(true)} />}
      <div
        className="fixed inset-0 ubuntu-wallpaper overflow-hidden"
        onClick={() => setActivitiesOpen(false)}
      >
        <TopPanel />

        <motion.div
          className="absolute inset-0"
          animate={{
            scale: activitiesOpen ? 0.85 : 1,
            borderRadius: activitiesOpen ? 24 : 0,
            filter: activitiesOpen ? "brightness(0.6) blur(8px)" : "brightness(1) blur(0px)",
          }}
          transition={{ type: "spring", stiffness: 250, damping: 28 }}
          style={{ overflow: "hidden" }}
        >
          <DesktopIcons />

          <AnimatePresence mode="popLayout">
            {windows.map((w) => (
              <WindowFrame key={w.id} window={w} appId={w.appId}>
                <AppRenderer appId={w.appId} />
              </WindowFrame>
            ))}
          </AnimatePresence>

          {/* Workspace indicator */}
          <div className="absolute top-10 right-4 flex gap-1.5 z-[150]">
            {[1, 2].map((ws) => (
              <button
                key={ws}
                onClick={(e) => {
                  e.stopPropagation();
                  setWorkspace(ws);
                }}
                onPointerDown={(e) => e.stopPropagation()}
                className={`w-2 h-2 rounded-full transition-all ${
                  workspace === ws ? "bg-white w-4" : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Workspace ${ws}`}
              />
            ))}
          </div>
        </motion.div>

        <Dock />

        <AnimatePresence>{activitiesOpen && <ActivitiesOverview />}</AnimatePresence>
      </div>
    </>
  );
}
