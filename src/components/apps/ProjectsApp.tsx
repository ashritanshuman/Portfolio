"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FOLDERS, PROJECTS } from "@/lib/data";
import { Folder, ChevronRight, ExternalLink, ArrowLeft } from "lucide-react";
import type { Project } from "../desktop/types";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function ProjectsApp() {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const folderProjects = selectedFolder
    ? PROJECTS.filter((p) => p.folder === selectedFolder)
    : [];

  return (
    <div className="h-full flex bg-gray-100 text-[#1e1e1e]">
      {/* Sidebar */}
      <div className="w-52 bg-white border-r border-black/10 flex flex-col">
        <div className="p-3 border-b border-black/10">
          <div className="flex items-center gap-1 text-sm text-black/60">
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span>Projects</span>
          </div>
        </div>
        <div className="p-2 flex-1 overflow-auto">
          <button
            onClick={() => {
              setSelectedFolder(null);
              setSelectedProject(null);
            }}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
              selectedFolder === null ? "bg-[#e95420]/10 text-[#e95420]" : "hover:bg-black/5"
            }`}
          >
            <Folder className="w-4 h-4 text-[#e95420]" />
            Projects
          </button>
          <div className="pl-4 mt-1 space-y-0.5">
            {FOLDERS.map((folder) => (
              <button
                key={folder}
                onClick={() => {
                  setSelectedFolder(folder);
                  setSelectedProject(null);
                }}
                className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  selectedFolder === folder ? "bg-[#e95420]/10 text-[#e95420]" : "hover:bg-black/5"
                }`}
              >
                <Folder className="w-4 h-4 text-[#e95420]" />
                {folder}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main area */}
      <div className="flex-1 overflow-auto p-6">
        <AnimatePresence mode="wait">
          {!selectedFolder ? (
            <motion.div
              key="root"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {FOLDERS.map((folder) => (
                <button
                  key={folder}
                  onClick={() => setSelectedFolder(folder)}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-black/5 transition-colors group"
                >
                  <Folder className="w-16 h-16 text-[#e95420] group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-center font-medium">{folder}</span>
                </button>
              ))}
            </motion.div>
          ) : selectedProject ? (
            <motion.div
              key="project"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-1 text-sm text-black/60 hover:text-[#e95420] mb-4"
              >
                <ArrowLeft className="w-4 h-4" /> Back to {selectedFolder}
              </button>
              <h2 className="text-2xl font-bold mb-2">{selectedProject.name}</h2>
              <p className="text-black/70 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-[#e95420]/10 text-[#e95420] text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1e1e1e] text-white text-sm hover:bg-black/80 transition-colors"
                  >
                    <GitHubIcon className="w-4 h-4" /> View Source
                  </a>
                )}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-black/20 text-sm hover:bg-black/5 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="folder"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              <button
                onClick={() => setSelectedFolder(null)}
                className="col-span-full flex items-center gap-1 text-sm text-black/60 hover:text-[#e95420] mb-2"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              {folderProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="p-4 rounded-xl bg-white border border-black/10 hover:border-[#e95420]/40 hover:shadow-md transition-all text-left"
                >
                  <h3 className="font-semibold mb-1">{project.name}</h3>
                  <p className="text-xs text-black/60 line-clamp-2 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((t: string) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-black/5 text-[10px] text-black/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
