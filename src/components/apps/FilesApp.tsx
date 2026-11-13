"use client";

import { Folder, FileText, Image, Music, Film, Home, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

const items = [
  { name: "Documents", type: "folder", icon: Folder, color: "#e95420" },
  { name: "Downloads", type: "folder", icon: Folder, color: "#e95420" },
  { name: "Pictures", type: "folder", icon: Folder, color: "#e95420" },
  { name: "Projects", type: "folder", icon: Folder, color: "#e95420" },
  { name: "about.txt", type: "file", icon: FileText, color: "#9cdcfe" },
  { name: "resume.pdf", type: "file", icon: FileText, color: "#e95420" },
  { name: "avatar.png", type: "file", icon: Image, color: "#5e2750" },
  { name: "playlist.mp3", type: "file", icon: Music, color: "#f9d342" },
  { name: "demo.mp4", type: "file", icon: Film, color: "#19b6ee" },
];

export function FilesApp() {
  const [path, setPath] = useState(["Home"]);

  return (
    <div className="h-full flex flex-col bg-gray-100 text-[#1e1e1e]">
      <div className="h-10 shrink-0 bg-white border-b border-black/10 flex items-center px-2 gap-1 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setPath((p) => (p.length > 1 ? p.slice(0, -1) : p))}
          disabled={path.length === 1}
          className="h-8 w-8 shrink-0 flex items-center justify-center rounded hover:bg-black/5 disabled:opacity-30 disabled:hover:bg-transparent"
          aria-label="Go back"
        >
          <ChevronLeft className="w-4 h-4" aria-hidden="true" />
        </button>
        <Home className="w-4 h-4 text-black/50 shrink-0" aria-hidden="true" />
        {path.map((p, i) => (
          <span key={`${p}-${i}`} className="flex items-center shrink-0">
            {i > 0 && <ChevronRight className="w-4 h-4 mx-0.5 text-black/40" aria-hidden="true" />}
            <button
              onClick={() => setPath((prev) => prev.slice(0, i + 1))}
              className={`px-1.5 py-1 rounded text-xs sm:text-sm whitespace-nowrap hover:bg-black/5 ${
                i === path.length - 1 ? "text-black/80 font-medium" : "text-black/60"
              }`}
              aria-current={i === path.length - 1 ? "page" : undefined}
            >
              {p}
            </button>
          </span>
        ))}
      </div>
      <div className="flex-1 min-h-0 p-3 sm:p-4 overflow-y-auto app-scroll">
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => item.type === "folder" && setPath([...path, item.name])}
                className="flex flex-col items-center justify-center gap-1.5 p-2.5 sm:p-4 min-h-[90px] rounded-xl hover:bg-black/5 active:bg-black/10 transition-colors group"
              >
                <Icon
                  className="w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform"
                  style={{ color: item.color }}
                  aria-hidden="true"
                />
                <span className="text-[11px] sm:text-sm text-center leading-tight break-words w-full">{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="h-7 shrink-0 bg-white border-t border-black/10 flex items-center px-3 text-[10px] sm:text-xs text-black/50 justify-between">
        <span>{items.length} items</span>
        <span>7.2 GB available</span>
      </div>
    </div>
  );
}

export function TrashApp() {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-gray-100 text-[#1e1e1e] px-6 text-center">
      <div className="text-5xl sm:text-6xl mb-4" aria-hidden="true">
        🗑️
      </div>
      <h2 className="text-lg sm:text-xl font-semibold mb-1">Trash is Empty</h2>
      <p className="text-sm text-black/60">Deleted files will appear here.</p>
    </div>
  );
}
