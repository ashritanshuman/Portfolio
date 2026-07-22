"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDesktop } from "./DesktopContext";
import type { AppId } from "./types";
import { APPS, DOCK_APPS } from "@/lib/data";
import { getIcon } from "./Icon";
import { useSound } from "@/hooks/useSound";

export function Dock() {
  const { openApp, focusWindow, restoreWindow, runningAppIds, activeWindowId, windows, workspace, setWorkspace, setActivitiesOpen } = useDesktop();
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

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-[9998]" onPointerDown={(e) => e.stopPropagation()}>
      <div className="glass-dock rounded-2xl px-3 py-2 flex items-end gap-2 sm:gap-3">
        {DOCK_APPS.map((appId, index) => {
          const appConfig = APPS[appId];
          const Icon = getIcon(appConfig.icon);
          const isRunning = runningAppIds.includes(appId);
          const isActive = windows.some((w) => w.id === activeWindowId && w.appId === appId);
          const isHovered = hovered === appId;
          const scale = isHovered ? 1.35 : 1;
          const neighborScale = hovered && DOCK_APPS[index - 1] === hovered || DOCK_APPS[index + 1] === hovered ? 1.15 : 1;

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
                onMouseEnter={() => setHovered(appId)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleOpen(appId)}
                onPointerDown={(e) => e.stopPropagation()}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setContextMenu({ appId, x: e.clientX, y: e.clientY });
                }}
                whileTap={{ scale: 0.9 }}
                animate={{ scale: scale * neighborScale, y: isHovered ? -8 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative p-2 rounded-xl transition-shadow ${
                  isActive ? "shadow-[0_0_20px_rgba(233,84,32,0.5)]" : ""
                }`}
                aria-label={`Open ${appId}`}
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center shadow-lg">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                {isRunning && (
                  <motion.div
                    layoutId={`indicator-${appId}`}
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/90"
                  />
                )}
                {isActive && (
                  <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 pointer-events-none" />
                )}
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
            className="fixed bg-[#2c2c2c]/95 text-white text-sm rounded-lg shadow-2xl py-1 min-w-[160px] z-[10000] border border-white/10"
            style={{ left: contextMenu.x, top: contextMenu.y }}
            onClick={() => setContextMenu(null)}
          >
            <button
              className="w-full text-left px-3 py-1.5 hover:bg-white/10 transition-colors"
              onClick={() => {
                openApp(contextMenu.appId);
                setContextMenu(null);
              }}
            >
              New Window
            </button>
            <button
              className="w-full text-left px-3 py-1.5 hover:bg-white/10 transition-colors"
              onClick={() => {
                setWorkspace(1);
                setContextMenu(null);
              }}
            >
              Show on Desktop
            </button>
            <div className="h-px bg-white/10 my-1" />
            <button
              className="w-full text-left px-3 py-1.5 hover:bg-white/10 transition-colors text-white/60"
              onClick={() => setContextMenu(null)}
            >
              Cancel
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
