"use client";

import { motion } from "framer-motion";
import { useDesktop } from "./DesktopContext";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { getIcon } from "./Icon";
import { APPS } from "@/lib/data";
import { AppId } from "./types";

export function ActivitiesOverview() {
  const {
    activitiesOpen,
    setActivitiesOpen,
    openApp,
    windows,
    workspace,
    setWorkspace,
    setWindowWorkspace,
    focusWindow,
    restoreWindow,
    appsByCategory,
  } = useDesktop();
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredApps = useMemo(() => {
    if (!search.trim()) return [];
    return Object.values(APPS).filter(
      (app) =>
        app.title.toLowerCase().includes(search.toLowerCase()) ||
        app.id.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // Only focus the search field on precise pointers so the on-screen
  // keyboard does not immediately cover the launcher on phones/tablets.
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
      inputRef.current?.focus();
    }
  }, []);

  if (!activitiesOpen) return null;

  const openWindows = windows
    .filter((w) => w.workspace === workspace)
    .sort((a, b) => b.zIndex - a.zIndex);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9000] ubuntu-wallpaper"
      style={{ backgroundBlendMode: "screen, screen, multiply, normal" }}
      onClick={() => setActivitiesOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Activities and application launcher"
    >
      <div className="absolute inset-0 bg-black/50 md:bg-black/40 md:backdrop-blur-xl" />

      <div
        className="relative z-10 h-full flex flex-col pt-[calc(var(--statusbar-h)+env(safe-area-inset-top,0px)+8px)] md:pt-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search + close */}
        <div className="shrink-0 px-3 md:px-8">
          <div className="max-w-2xl mx-auto flex items-center gap-2">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-white/60"
                aria-hidden="true"
              />
              <input
                ref={inputRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type to search applications..."
                aria-label="Search applications"
                className="w-full h-11 md:h-12 bg-black/40 text-white rounded-full pl-10 md:pl-12 pr-10 md:pr-12 text-base md:text-lg border border-white/10 focus:border-white/40 focus:outline-none placeholder:text-white/40 backdrop-blur-md"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </div>
            <button
              onClick={() => setActivitiesOpen(false)}
              className="md:hidden h-11 w-11 shrink-0 flex items-center justify-center rounded-full bg-black/40 border border-white/10 text-white/80 active:bg-white/10"
              aria-label="Close activities"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto app-scroll px-3 py-4 md:p-8 pb-[calc(var(--dock-h)+env(safe-area-inset-bottom,0px)+16px)] md:pb-8">
          {search.trim() ? (
            <div className="max-w-6xl mx-auto">
              <h3 className="text-white/70 text-xs md:text-sm font-medium mb-3 md:mb-4 uppercase tracking-wider">
                Applications
              </h3>
              {filteredApps.length === 0 ? (
                <p className="text-white/50 text-sm py-6">No applications found.</p>
              ) : (
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-4">
                  {filteredApps.map((app) => {
                    const Icon = getIcon(app.icon);
                    return (
                      <button
                        key={app.id}
                        onClick={() => {
                          openApp(app.id as AppId);
                          setSearch("");
                          setActivitiesOpen(false);
                        }}
                        className="flex flex-col items-center justify-center gap-2 min-h-[84px] md:min-h-0 p-3 md:p-4 rounded-xl bg-white/5 hover:bg-white/15 active:bg-white/20 transition-colors"
                      >
                        <Icon className="w-7 h-7 md:w-10 md:h-10 text-white" aria-hidden="true" />
                        <span className="text-white text-[11px] md:text-sm text-center leading-tight">
                          {app.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <div className="max-w-6xl mx-auto flex flex-col">
              {/* Mobile: open windows list */}
              {openWindows.length > 0 && (
                <div className="md:hidden mb-5">
                  <h3 className="text-white/70 text-xs font-medium mb-2 uppercase tracking-wider">
                    Open windows
                  </h3>
                  <div className="space-y-1.5">
                    {openWindows.map((w) => {
                      const Icon = getIcon(APPS[w.appId].icon);
                      return (
                        <button
                          key={w.id}
                          onClick={() => {
                            if (w.minimized) restoreWindow(w.id);
                            else focusWindow(w.id);
                            setActivitiesOpen(false);
                          }}
                          className="w-full min-h-[48px] bg-white/10 rounded-lg flex items-center gap-3 px-3 active:bg-white/20 transition-colors"
                        >
                          <Icon className="w-5 h-5 text-white shrink-0" aria-hidden="true" />
                          <span className="text-white text-sm truncate flex-1 text-left">{w.title}</span>
                          {w.minimized && (
                            <span className="text-[10px] text-white/50 uppercase tracking-wide">Minimized</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Desktop / tablet: workspace thumbnails */}
              <div className="hidden md:grid flex-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                {[1, 2].map((ws) => (
                  <div
                    key={ws}
                    onClick={() => setWorkspace(ws)}
                    className={`relative aspect-video rounded-xl border-2 transition-all cursor-pointer overflow-hidden ${
                      workspace === ws ? "border-white/60 scale-105" : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex flex-wrap content-start gap-2 p-3 overflow-hidden">
                      {windows
                        .filter((w) => w.workspace === ws)
                        .map((w) => {
                          const Icon = getIcon(APPS[w.appId].icon);
                          return (
                            <button
                              key={w.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                setWindowWorkspace(w.id, ws);
                                focusWindow(w.id);
                                setActivitiesOpen(false);
                              }}
                              className="w-full h-12 bg-white/10 rounded-md flex items-center gap-2 px-3 hover:bg-white/20 transition-colors"
                              aria-label={`Focus ${w.title}`}
                            >
                              <Icon className="w-5 h-5 text-white shrink-0" aria-hidden="true" />
                              <span className="text-white text-xs truncate">{w.title}</span>
                            </button>
                          );
                        })}
                    </div>
                    <div className="absolute bottom-2 left-2 text-white/80 text-xs font-medium">
                      Workspace {ws}
                    </div>
                  </div>
                ))}
              </div>

              {/* Application launcher */}
              <div className="mt-2 md:mt-8">
                <h3 className="text-white/70 text-xs md:text-sm font-medium mb-2.5 md:mb-4 uppercase tracking-wider">
                  Application Launcher
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3">
                  {Object.values(appsByCategory)
                    .flat()
                    .map((appId) => {
                      const app = APPS[appId];
                      const Icon = getIcon(app.icon);
                      return (
                        <button
                          key={appId}
                          onClick={() => {
                            openApp(appId as AppId);
                            setActivitiesOpen(false);
                          }}
                          className="flex flex-col items-center justify-center gap-1.5 min-h-[84px] md:min-h-0 p-2.5 md:p-3 rounded-xl bg-white/5 hover:bg-white/15 active:bg-white/20 transition-colors"
                        >
                          <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" aria-hidden="true" />
                          <span className="text-white text-[11px] md:text-xs text-center leading-tight">
                            {app.title}
                          </span>
                        </button>
                      );
                    })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
