"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { VSCODE_FILES } from "@/lib/data";
import { FileCode, FolderOpen, ChevronRight, FileJson } from "lucide-react";

const syntaxColors: Record<string, string> = {
  const: "#c586c0",
  let: "#c586c0",
  var: "#c586c0",
  export: "#c586c0",
  default: "#c586c0",
  return: "#c586c0",
  import: "#c586c0",
  from: "#c586c0",
  function: "#569cd6",
  async: "#569cd6",
  await: "#569cd6",
  true: "#569cd6",
  false: "#569cd6",
  if: "#c586c0",
  else: "#c586c0",
  for: "#c586c0",
  while: "#c586c0",
};

const stringColor = "#ce9178";
const commentColor = "#6a9955";
const numberColor = "#b5cea8";
const keyColor = "#9cdcfe";

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
    <div className="h-full flex bg-[#1e1e2e] text-white code-font text-sm">
      {/* Explorer */}
      <div className="w-56 bg-[#181825] border-r border-white/10 flex flex-col">
        <div className="h-9 flex items-center px-3 text-xs font-semibold text-white/70 uppercase tracking-wider">
          Explorer
        </div>
        <div className="px-2">
          <div className="flex items-center gap-1 px-2 py-1 text-white/90">
            <ChevronRight className="w-3.5 h-3.5" />
            <FolderOpen className="w-4 h-4 text-[#e95420]" />
            <span className="font-medium">portfolio</span>
          </div>
          <div className="pl-4">
            {Object.keys(VSCODE_FILES).map((name) => (
              <button
                key={name}
                onClick={() => setActiveFile(name)}
                className={`w-full flex items-center gap-2 px-2 py-1 text-sm transition-colors ${
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
      <div className="flex-1 flex flex-col min-w-0">
        {/* Tabs */}
        <div className="flex bg-[#181825] h-9 overflow-x-auto no-scrollbar">
          {Object.keys(VSCODE_FILES).map((name) => (
            <button
              key={name}
              onClick={() => setActiveFile(name)}
              className={`flex items-center gap-2 px-3 text-sm border-t-2 min-w-fit ${
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
        <div className="h-7 flex items-center px-3 text-xs text-white/50 bg-[#1e1e2e] border-b border-white/5">
          portfolio <ChevronRight className="w-3 h-3 mx-1" /> src <ChevronRight className="w-3 h-3 mx-1" /> {activeFile}
        </div>

        {/* Code area */}
        <div className="flex-1 overflow-auto p-4">
          <div className="flex">
            <div className="pr-4 text-right text-white/30 select-none min-w-[2rem]">
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
        <div className="h-6 bg-[#007acc] text-white text-xs flex items-center px-3 justify-between">
          <div className="flex gap-3">
            <span>master*</span>
            <span className="flex items-center gap-1"><FileJson className="w-3 h-3" /> {file.language}</span>
          </div>
          <div className="flex gap-3">
            <span>Ln 1, Col 1</span>
            <span>UTF-8</span>
            <span>Prettier</span>
          </div>
        </div>
      </div>
    </div>
  );
}
