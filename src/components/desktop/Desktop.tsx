"use client";

import { memo, useCallback, useMemo, useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { useDesktop } from "./DesktopContext";
import { TopPanel } from "./TopPanel";
import { Dock } from "./Dock";
import { DesktopIcons } from "./DesktopIcons";
import { HeroSection } from "./HeroSection";
import { DesktopWidgets } from "./DesktopWidgets";
import { MobileHome } from "./MobileHome";
import { ActivitiesOverview } from "./ActivitiesOverview";
import { WindowFrame } from "./WindowFrame";
import { AppRenderer } from "./AppRenderer";
import { BootScreen } from "./BootScreen";
import { useIsMobile } from "@/hooks/useBreakpoint";
import type { WindowState } from "./types";

/**
 * One window = one memoised host. The app subtree is memoised separately so a
 * focus change, drag commit, or other window's update never re-renders the
 * application content (terminal history, open folders, scroll state…).
 */
const WindowHost = memo(function WindowHost({
  w,
  mobile,
  isActiveMobile,
}: {
  w: WindowState;
  mobile: boolean;
  isActiveMobile: boolean;
}) {
  const content = useMemo(() => <AppRenderer appId={w.appId} />, [w.appId]);
  return (
    <WindowFrame window={w} appId={w.appId} mobile={mobile} isActiveMobile={isActiveMobile}>
      {content}
    </WindowFrame>
  );
});

export function Desktop() {
  const { windows, workspace, setWorkspace, activitiesOpen, setActivitiesOpen } = useDesktop();
  const [booted, setBooted] = useState(false);
  const isMobile = useIsMobile();

  // On phones only the top-most window is shown; the rest stay mounted so
  // their state (terminal history, open folder, …) survives app switching.
  const visibleWindows = windows.filter((w) => !w.minimized && w.workspace === workspace);
  const topMobileWindowId = [...visibleWindows].sort((a, b) => b.zIndex - a.zIndex)[0]?.id;

  // The desktop backdrop is blurred from real window state: any visible
  // window keeps it blurred, minimizing/closing the last one restores focus.
  const desktopBlurred = visibleWindows.length > 0;

  const finishBoot = useCallback(() => setBooted(true), []);

  return (
    <MotionConfig reducedMotion="user">
      {!booted && <BootScreen onComplete={finishBoot} />}
      <div
        className="fixed inset-0 overflow-hidden bg-[#14030f]"
        onClick={() => setActivitiesOpen(false)}
      >
        <TopPanel />

        {/* ---------- Desktop backdrop (wallpaper + icons + hero + widgets) ----------
            Kept in its own layer so window blur never touches the windows. */}
        <motion.div
          className="absolute inset-0 ubuntu-wallpaper"
          style={{ transformOrigin: "center" }}
          animate={{
            scale: isMobile ? 1 : activitiesOpen ? 0.985 : desktopBlurred ? 1.03 : 1,
            filter: desktopBlurred
              ? "blur(10px) saturate(0.95) brightness(0.72)"
              : "blur(0px) saturate(1) brightness(1)",
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <DesktopIcons />

          {/* Hero + information widgets */}
          <div className="desktop-stage desktop-only absolute inset-0 z-[90] flex items-center px-5 pb-24 pl-[6.75rem] pt-[calc(var(--statusbar-h)+1.25rem)] lg:pl-[7.5rem] lg:pr-8">
            <div className="grid w-full items-center gap-6 min-[1024px]:grid-cols-[minmax(0,1fr)_19rem] min-[1024px]:gap-8 xl:grid-cols-[minmax(0,1fr)_21rem] xl:gap-10">
              <HeroSection />
              <DesktopWidgets />
            </div>
          </div>

          {/* Workspace indicator (desktop / tablet) */}
          <div className="desktop-only absolute right-4 top-10 z-[95] flex gap-1.5">
            {[1, 2].map((ws) => (
              <button
                key={ws}
                onClick={(e) => {
                  e.stopPropagation();
                  setWorkspace(ws);
                }}
                onPointerDown={(e) => e.stopPropagation()}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  workspace === ws ? "w-5 bg-white" : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Switch to workspace ${ws}`}
                aria-pressed={workspace === ws}
              />
            ))}
          </div>
        </motion.div>

        {/* ---------- Dim layer (derived from window state) ---------- */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[120] bg-[#0b020a]"
          animate={{ opacity: desktopBlurred && !activitiesOpen ? 0.32 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* ---------- Windows ---------- */}
        <AnimatePresence>
          {windows.map((w) => (
            <WindowHost
              key={w.id}
              w={w}
              mobile={isMobile}
              isActiveMobile={w.id === topMobileWindowId}
            />
          ))}
        </AnimatePresence>

        <MobileHome hidden={isMobile && !!topMobileWindowId} />

        <Dock />

        <AnimatePresence>{activitiesOpen && <ActivitiesOverview />}</AnimatePresence>
      </div>
    </MotionConfig>
  );
}
