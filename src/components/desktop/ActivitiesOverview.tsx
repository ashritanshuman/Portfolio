"use client";

import { motion } from "framer-motion";
import { useDesktop } from "./DesktopContext";
import { useState, useMemo } from "react";
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
    appsByCategory,
  } = useDesktop();
  const [search, setSearch] = useState("");

  const filteredApps = useMemo(() => {
    if (!search.trim()) return [];
    return Object.values(APPS).filter((app) =>
      app.title.toLowerCase().includes(search.toLowerCase()) ||
      app.id.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  if (!activitiesOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9000] ubuntu-wallpaper"
      style={{ backgroundBlendMode: "screen, screen, multiply, normal" }}
      onClick={() => setActivitiesOpen(false)}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />

      <div
        className="relative z-10 h-full flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pt-10 px-8">
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type to search..."
              className="w-full h-12 bg-black/40 text-white rounded-full pl-12 pr-12 text-lg border border-white/10 focus:border-white/30 focus:outline-none placeholder:text-white/40 backdrop-blur-md"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          {search.trim() ? (
            <div className="max-w-6xl mx-auto">
              <h3 className="text-white/70 text-sm font-medium mb-4 uppercase tracking-wider">Applications</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
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
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/15 transition-colors"
                    >
                      <Icon className="w-10 h-10 text-white" />
                      <span className="text-white text-sm text-center">{app.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto h-full flex flex-col">
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                {[1, 2].map((ws) => (
                  <div
                    key={ws}
                    onClick={() => setWorkspace(ws)}
                    className={`relative aspect-video rounded-xl border-2 transition-all cursor-pointer overflow-hidden ${
                      workspace === ws ? "border-white/60 scale-105" : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex flex-wrap content-start gap-2 p-3">
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
                            >
                              <Icon className="w-5 h-5 text-white" />
                              <span className="text-white text-xs truncate">{w.title}</span>
                            </button>
                          );
                        })}
                    </div>
                    <div className="absolute bottom-2 left-2 text-white/80 text-xs font-medium">Workspace {ws}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-white/70 text-sm font-medium mb-4 uppercase tracking-wider">Application Launcher</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                  {Object.values(appsByCategory).flat().map((appId) => {
                    const app = APPS[appId];
                    const Icon = getIcon(app.icon);
                    return (
                      <button
                        key={appId}
                        onClick={() => {
                          openApp(appId as AppId);
                          setActivitiesOpen(false);
                        }}
                        className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/15 transition-colors"
                      >
                        <Icon className="w-8 h-8 text-white" />
                        <span className="text-white text-xs text-center">{app.title}</span>
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
