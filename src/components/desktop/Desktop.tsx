"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { useDesktop } from "./DesktopContext";
import { TopPanel } from "./TopPanel";
import { Dock } from "./Dock";
import { DesktopIcons } from "./DesktopIcons";
import { MobileHome } from "./MobileHome";
import { ActivitiesOverview } from "./ActivitiesOverview";
import { WindowFrame } from "./WindowFrame";
import { AppRenderer } from "./AppRenderer";
import { BootScreen } from "./BootScreen";
import { useIsMobile } from "@/hooks/useBreakpoint";

export function Desktop() {
  const { windows, workspace, setWorkspace, activitiesOpen, setActivitiesOpen } = useDesktop();
  const [booted, setBooted] = useState(false);
  const isMobile = useIsMobile();

  // On phones only the top-most window is shown; the rest stay mounted so
  // their state (terminal history, open folder, …) survives app switching.
  const topMobileWindowId = windows
    .filter((w) => !w.minimized && w.workspace === workspace)
    .sort((a, b) => b.zIndex - a.zIndex)[0]?.id;

  const finishBoot = useCallback(() => setBooted(true), []);

  return (
    <MotionConfig reducedMotion="user">
      {!booted && <BootScreen onComplete={finishBoot} />}
      <div
        className="fixed inset-0 ubuntu-wallpaper overflow-hidden"
        onClick={() => setActivitiesOpen(false)}
      >
        <TopPanel />

        <motion.div
          className="absolute inset-0"
          animate={
            isMobile
              ? { scale: 1, borderRadius: 0, filter: "none" }
              : {
                  scale: activitiesOpen ? 0.85 : 1,
                  borderRadius: activitiesOpen ? 24 : 0,
                  filter: activitiesOpen ? "brightness(0.6) blur(8px)" : "brightness(1) blur(0px)",
                }
          }
          transition={{ type: "spring", stiffness: 250, damping: 28 }}
          style={{ overflow: "hidden" }}
        >
          <DesktopIcons />

          <AnimatePresence mode="popLayout">
            {windows.map((w) => (
              <WindowFrame
                key={w.id}
                window={w}
                appId={w.appId}
                mobile={isMobile}
                isActiveMobile={w.id === topMobileWindowId}
              >
                <AppRenderer appId={w.appId} />
              </WindowFrame>
            ))}
          </AnimatePresence>

          {/* Workspace indicator (desktop / tablet) */}
          <div className="desktop-only absolute top-10 right-4 flex gap-1.5 z-[150]">
            {[1, 2].map((ws) => (
              <button
                key={ws}
                onClick={(e) => {
                  e.stopPropagation();
                  setWorkspace(ws);
                }}
                onPointerDown={(e) => e.stopPropagation()}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  workspace === ws ? "bg-white w-5" : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Switch to workspace ${ws}`}
                aria-pressed={workspace === ws}
              />
            ))}
          </div>
        </motion.div>

        {/* Hide the home grid while a phone app is open so its text does not
            show through the translucent window gutters. */}
        <MobileHome hidden={isMobile && !!topMobileWindowId} />

        <Dock />

        <AnimatePresence>{activitiesOpen && <ActivitiesOverview />}</AnimatePresence>
      </div>
    </MotionConfig>
  );
}
