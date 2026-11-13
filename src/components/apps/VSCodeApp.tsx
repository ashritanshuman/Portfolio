"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { VSCODE_FILES } from "@/lib/data";
import { FileCode, FolderOpen, ChevronRight, FileJson } from "lucide-react";

const stringColor = "#ce9178";
const commentColor = "#6a9955";

function highlight(line: string) {
  // Very simple syntax highlighter for demo
  const tokens: React.ReactElement[] = [];
  const remaining = line;
  let key = 0;

  const push = (text: string, color?: string) => {
    if (!text) return;
    tokens.push(
      <span key={key++} style={color ? { color } : undefined}>
        {text}
      </span>
    );
  };

  // Comment
  const commentIndex = remaining.indexOf("//");
  if (commentIndex !== -1) {
    push(remaining.slice(0, commentIndex));
    push(remaining.slice(commentIndex), commentColor);
    return tokens;
  }

  // Strings
  const stringRegex = /("[^"]*"|'[^']*'|`[^`]*`)/g;
  let match: RegExpExecArray | null;
  let lastIndex = 0;
  while ((match = stringRegex.exec(remaining)) !== null) {
    push(remaining.slice(lastIndex, match.index));
    push(match[0], stringColor);
    lastIndex = match.index + match[0].length;
  }
  push(remaining.slice(lastIndex));
  return tokens;
}

export function VSCodeApp() {
  const [activeFile, setActiveFile] = useState("about.js");
  const file = VSCODE_FILES[activeFile];

  return (
    <div className="h-full flex flex-col sm:flex-row bg-[#1e1e2e] text-white code-font text-sm">
      {/* Explorer */}
      <div className="w-full sm:w-56 shrink-0 bg-[#181825] border-b sm:border-b-0 sm:border-r border-white/10 flex flex-col">
        <div className="hidden sm:flex h-9 items-center px-3 text-xs font-semibold text-white/70 uppercase tracking-wider">
          Explorer
        </div>
        <div className="px-2 py-1.5 sm:py-0 min-w-0">
          <div className="hidden sm:flex items-center gap-1 px-2 py-1 text-white/90">
            <ChevronRight className="w-3.5 h-3.5" />
            <FolderOpen className="w-4 h-4 text-[#e95420]" />
            <span className="font-medium">portfolio</span>
          </div>
          <div className="flex sm:block gap-1 pl-0 sm:pl-4 overflow-x-auto no-scrollbar">
            {Object.keys(VSCODE_FILES).map((name) => (
              <button
                key={name}
                onClick={() => setActiveFile(name)}
                aria-pressed={activeFile === name}
                className={`shrink-0 sm:w-full flex items-center gap-2 px-2 min-h-[36px] sm:min-h-0 sm:py-1 rounded sm:rounded-none text-xs sm:text-sm whitespace-nowrap transition-colors ${
                  activeFile === name ? "bg-white/10 text-white" : "text-white/60 hover:text-white"
                }`}
              >
                <FileCode className={`w-4 h-4 ${name.endsWith(".js") ? "text-[#f9d342]" : "text-white/50"}`} />
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 flex flex-col min-w-0 min-h-0">
        {/* Tabs */}
        <div className="flex bg-[#181825] h-10 sm:h-9 overflow-x-auto no-scrollbar shrink-0">
          {Object.keys(VSCODE_FILES).map((name) => (
            <button
              key={name}
              onClick={() => setActiveFile(name)}
              className={`flex items-center gap-2 px-3 text-xs sm:text-sm border-t-2 min-w-fit ${
                activeFile === name
                  ? "bg-[#1e1e2e] text-white border-[#e95420]"
                  : "text-white/50 border-transparent hover:bg-white/5"
              }`}
            >
              <FileCode className={`w-3.5 h-3.5 ${name.endsWith(".js") ? "text-[#f9d342]" : ""}`} />
              {name}
            </button>
          ))}
        </div>

        {/* Breadcrumb */}
        <div className="hidden sm:flex h-7 items-center px-3 text-xs text-white/50 bg-[#1e1e2e] border-b border-white/5">
          portfolio <ChevronRight className="w-3 h-3 mx-1" /> src <ChevronRight className="w-3 h-3 mx-1" /> {activeFile}
        </div>

        {/* Code area */}
        <div className="flex-1 min-h-0 overflow-auto app-scroll p-3 sm:p-4 text-[11px] leading-5 sm:text-sm sm:leading-normal">
          <div className="flex min-w-fit">
            <div className="pr-3 sm:pr-4 text-right text-white/30 select-none min-w-[2rem] sticky left-0 bg-[#1e1e2e]">
              {file.content.split("\n").map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <motion.div
              key={activeFile}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 whitespace-pre"
            >
              {file.content.split("\n").map((line, i) => (
                <div key={i} className="min-h-[1.5em]">
                  {highlight(line)}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Status bar */}
        <div className="h-6 shrink-0 bg-[#007acc] text-white text-[10px] sm:text-xs flex items-center px-2 sm:px-3 justify-between">
          <div className="flex gap-2 sm:gap-3">
            <span>master*</span>
            <span className="flex items-center gap-1"><FileJson className="w-3 h-3" /> {file.language}</span>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <span className="hidden sm:inline">Ln 1, Col 1</span>
            <span>UTF-8</span>
            <span className="hidden sm:inline">Prettier</span>
          </div>
        </div>
      </div>
    </div>
  );
}
