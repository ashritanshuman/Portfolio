"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FOLDERS, PROJECTS } from "@/lib/data";
import { Folder, ChevronRight, ExternalLink, ArrowLeft } from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import type { Project } from "../desktop/types";

export function ProjectsApp() {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const folderProjects = selectedFolder
    ? PROJECTS.filter((p) => p.folder === selectedFolder)
    : [];

  return (
    <div className="h-full flex flex-col md:flex-row bg-gray-100 text-[#1e1e1e]">
      {/* Sidebar / folder chips */}
      <div className="w-full md:w-52 shrink-0 bg-white border-b md:border-b-0 md:border-r border-black/10 flex flex-col">
        <div className="hidden md:block p-3 border-b border-black/10">
          <div className="flex items-center gap-1 text-sm text-black/60">
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span>Projects</span>
          </div>
        </div>
        <div className="p-2 flex md:block gap-1.5 overflow-x-auto no-scrollbar app-scroll">
          <button
            onClick={() => {
              setSelectedFolder(null);
              setSelectedProject(null);
            }}
            aria-pressed={selectedFolder === null}
            className={`shrink-0 md:w-full flex items-center gap-2 px-3 min-h-[44px] md:min-h-0 md:py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap transition-colors ${
              selectedFolder === null ? "bg-[#e95420]/10 text-[#e95420]" : "hover:bg-black/5"
            }`}
          >
            <Folder className="w-4 h-4 text-[#e95420]" aria-hidden="true" />
            Projects
          </button>
          <div className="flex md:block shrink-0 gap-1.5 md:mt-1 md:pl-4 md:space-y-0.5">
            {FOLDERS.map((folder) => (
              <button
                key={folder}
                onClick={() => {
                  setSelectedFolder(folder);
                  setSelectedProject(null);
                }}
                aria-pressed={selectedFolder === folder}
                className={`shrink-0 md:w-full flex items-center gap-2 px-3 min-h-[44px] md:min-h-0 md:py-1.5 rounded-lg text-xs sm:text-sm whitespace-nowrap transition-colors ${
                  selectedFolder === folder ? "bg-[#e95420]/10 text-[#e95420]" : "hover:bg-black/5"
                }`}
              >
                <Folder className="w-4 h-4 text-[#e95420]" aria-hidden="true" />
                {folder}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main area */}
      <div className="flex-1 min-w-0 overflow-y-auto app-scroll p-4 sm:p-6">
        <AnimatePresence mode="wait">
          {!selectedFolder ? (
            <motion.div
              key="root"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
            >
              {FOLDERS.map((folder) => (
                <button
                  key={folder}
                  onClick={() => setSelectedFolder(folder)}
                  className="flex flex-col items-center justify-center gap-2 p-4 min-h-[104px] rounded-xl hover:bg-black/5 active:bg-black/10 transition-colors group"
                >
                  <Folder className="w-12 h-12 sm:w-16 sm:h-16 text-[#e95420] group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <span className="text-xs sm:text-sm text-center font-medium">{folder}</span>
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
                className="flex items-center gap-1 text-sm text-black/60 hover:text-[#e95420] py-2 -mt-1 mb-2"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to {selectedFolder}
              </button>
              <h2 className="text-xl sm:text-2xl font-bold mb-2">{selectedProject.name}</h2>
              <p className="text-sm sm:text-base text-black/70 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-[#e95420]/10 text-[#e95420] text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-4 min-h-[44px] rounded-lg bg-[#1e1e1e] text-white text-sm hover:bg-black/80 active:bg-black transition-colors"
                  >
                    <GitHubIcon className="w-4 h-4" /> View Source
                  </a>
                )}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-4 min-h-[44px] rounded-lg border border-black/20 text-sm hover:bg-black/5 active:bg-black/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" /> Live Demo
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
            >
              <button
                onClick={() => setSelectedFolder(null)}
                className="col-span-full flex items-center gap-1 text-sm text-black/60 hover:text-[#e95420] py-2 -mt-1 mb-1"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back
              </button>
              {folderProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="p-4 min-h-[110px] rounded-xl bg-white border border-black/10 hover:border-[#e95420]/40 hover:shadow-md active:bg-black/[0.03] transition-all text-left"
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
