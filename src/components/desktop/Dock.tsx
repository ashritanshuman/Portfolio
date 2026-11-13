"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import { useDesktop } from "./DesktopContext";
import type { AppId } from "./types";
import { APPS, DOCK_APPS } from "@/lib/data";
import { getIcon } from "./Icon";
import { useSound } from "@/hooks/useSound";

const MOBILE_DOCK_APPS: AppId[] = ["about", "projects", "resume", "contact"];

const MOBILE_LABELS: Partial<Record<AppId, string>> = {
  about: "About",
  projects: "Projects",
  resume: "Resume",
  contact: "Terminal",
};

const MENU_WIDTH = 184;
const MENU_HEIGHT = 132;

export function Dock() {
  const {
    openApp,
    focusWindow,
    restoreWindow,
    runningAppIds,
    activeWindowId,
    windows,
    workspace,
    setWorkspace,
    setActivitiesOpen,
    activitiesOpen,
  } = useDesktop();
  const [hovered, setHovered] = useState<string | null>(null);
  const [contextMenu, setContextMenu] = useState<{ appId: AppId; x: number; y: number } | null>(null);
  const play = useSound();

  const handleOpen = (appId: AppId) => {
    play("click");
    setActivitiesOpen(false);
    const existing = windows.find((w) => w.appId === appId);
    if (existing) {
      if (existing.minimized) {
        restoreWindow(existing.id, { workspace });
      } else {
        focusWindow(existing.id);
      }
    } else {
      openApp(appId, { focus: true });
    }
  };

  const openContextMenu = (e: React.MouseEvent, appId: AppId) => {
    e.preventDefault();
    // Keep the menu inside the viewport on small screens (clamped).
    const x = Math.max(8, Math.min(e.clientX, window.innerWidth - MENU_WIDTH - 8));
    const y = Math.max(8, Math.min(e.clientY, window.innerHeight - MENU_HEIGHT - 8));
    setContextMenu({ appId, x, y });
  };

  return (
    <>
      {/* ---------- Desktop / tablet dock ---------- */}
      <nav
        aria-label="Application dock"
        className="desktop-only fixed bottom-3 left-1/2 -translate-x-1/2 z-[9998]"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="glass-dock rounded-2xl px-2.5 lg:px-3 py-2 flex items-end gap-1.5 lg:gap-3">
          {DOCK_APPS.map((appId, index) => {
            const appConfig = APPS[appId];
            const Icon = getIcon(appConfig.icon);
            const isRunning = runningAppIds.includes(appId);
            const isActive = windows.some((w) => w.id === activeWindowId && w.appId === appId);
            const isHovered = hovered === appId;
            const scale = isHovered ? 1.35 : 1;
            const neighborScale =
              (hovered && DOCK_APPS[index - 1] === hovered) || DOCK_APPS[index + 1] === hovered ? 1.15 : 1;

            return (
              <div key={appId} className="relative flex flex-col items-center">
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="absolute -top-9 bg-black/80 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap pointer-events-none backdrop-blur-sm"
                    >
                      {appId.charAt(0).toUpperCase() + appId.slice(1)}
                    </motion.div>
                  )}
                </AnimatePresence>
                <motion.button
                  data-dock-icon={appId}
                  onPointerEnter={(e) => {
                    if (e.pointerType === "mouse") setHovered(appId);
                  }}
                  onPointerLeave={(e) => {
                    if (e.pointerType === "mouse") setHovered(null);
                  }}
                  onClick={() => handleOpen(appId)}
                  onPointerDown={(e) => e.stopPropagation()}
                  onContextMenu={(e) => openContextMenu(e, appId)}
                  whileTap={{ scale: 0.9 }}
                  animate={{ scale: scale * neighborScale, y: isHovered ? -8 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative p-1.5 lg:p-2 rounded-xl transition-shadow ${
                    isActive ? "shadow-[0_0_20px_rgba(233,84,32,0.5)]" : ""
                  }`}
                  aria-label={`Open ${appId}`}
                >
                  <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" aria-hidden="true" />
                  </div>
                  {isRunning && (
                    <motion.div
                      layoutId={`indicator-${appId}`}
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/90"
                    />
                  )}
                  {isActive && <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 pointer-events-none" />}
                </motion.button>
              </div>
            );
          })}
        </div>

        <AnimatePresence>
          {contextMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed bg-[#2c2c2c]/95 text-white text-sm rounded-lg shadow-2xl py-1 min-w-[176px] z-[10000] border border-white/10"
              style={{ left: contextMenu.x, top: contextMenu.y }}
              role="menu"
              onClick={() => setContextMenu(null)}
            >
              <button
                role="menuitem"
                className="w-full text-left px-3 py-2 hover:bg-white/10 transition-colors"
                onClick={() => {
                  openApp(contextMenu.appId);
                  setContextMenu(null);
                }}
              >
                New Window
              </button>
              <button
                role="menuitem"
                className="w-full text-left px-3 py-2 hover:bg-white/10 transition-colors"
                onClick={() => {
                  setWorkspace(1);
                  setContextMenu(null);
                }}
              >
                Show on Desktop
              </button>
              <div className="h-px bg-white/10 my-1" />
              <button
                role="menuitem"
                className="w-full text-left px-3 py-2 hover:bg-white/10 transition-colors text-white/60"
                onClick={() => setContextMenu(null)}
              >
                Cancel
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ---------- Mobile dock ---------- */}
      <nav
        aria-label="Mobile application dock"
        className="mobile-only fixed inset-x-0 bottom-0 z-[9998] dock-safe"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="glass-dock border-t border-white/10 px-1.5 pt-1 pb-1">
          <div className="grid grid-cols-5 items-stretch">
            {MOBILE_DOCK_APPS.map((appId) => {
              const appConfig = APPS[appId];
              const Icon = getIcon(appConfig.icon);
              const isOpen = windows.some((w) => w.appId === appId);
              const isActive = windows.some(
                (w) => w.id === activeWindowId && w.appId === appId && !w.minimized
              );
              return (
                <button
                  key={appId}
                  data-dock-icon={appId}
                  onClick={() => handleOpen(appId)}
                  className={`relative flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl active:bg-white/10 transition-colors ${
                    isActive ? "text-white" : "text-white/80"
                  }`}
                  aria-label={`Open ${appConfig.title}`}
                  aria-pressed={isActive}
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-white/20 to-white/5 ${
                      isActive ? "ring-1 ring-[#e95420]/70" : ""
                    }`}
                  >
                    <Icon className="w-[18px] h-[18px]" aria-hidden="true" />
                  </span>
                  <span className="text-[9px] leading-none">{MOBILE_LABELS[appId] ?? appConfig.title}</span>
                  {isOpen && (
                    <span
                      className="absolute bottom-0.5 h-1 w-1 rounded-full bg-white/90"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}

            <button
              onClick={() => {
                play("click");
                setActivitiesOpen(!activitiesOpen);
              }}
              className="flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-xl active:bg-white/10 transition-colors text-white/80"
              aria-label="Open all applications"
              aria-expanded={activitiesOpen}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-white/20 to-white/5">
                <LayoutGrid className="w-[18px] h-[18px]" aria-hidden="true" />
              </span>
              <span className="text-[9px] leading-none">Apps</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
