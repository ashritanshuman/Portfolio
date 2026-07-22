"use client";

import { Folder, FileText, Image, Music, Film, Home, ChevronRight } from "lucide-react";
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
      <div className="h-10 bg-white border-b border-black/10 flex items-center px-3 gap-1">
        <Home className="w-4 h-4 text-black/50" />
        {path.map((p, i) => (
          <span key={i} className="flex items-center text-sm text-black/60">
            {i > 0 && <ChevronRight className="w-4 h-4 mx-1" />}
            {p}
          </span>
        ))}
      </div>
      <div className="flex-1 p-4 overflow-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => item.type === "folder" && setPath([...path, item.name])}
                className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-black/5 transition-colors group"
              >
                <Icon className="w-12 h-12 group-hover:scale-110 transition-transform" style={{ color: item.color }} />
                <span className="text-sm text-center">{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="h-7 bg-white border-t border-black/10 flex items-center px-3 text-xs text-black/50 justify-between">
        <span>{items.length} items</span>
        <span>7.2 GB available</span>
      </div>
    </div>
  );
}

export function TrashApp() {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-gray-100 text-[#1e1e1e]">
      <div className="text-6xl mb-4">🗑️</div>
      <h2 className="text-xl font-semibold mb-1">Trash is Empty</h2>
      <p className="text-sm text-black/60">Deleted files will appear here.</p>
    </div>
  );
}
