"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { useDesktop } from "../desktop/DesktopContext";
import { useSound } from "@/hooks/useSound";

const COMMANDS = [
  "help",
  "about",
  "skills",
  "projects",
  "contact",
  "resume",
  "github",
  "linkedin",
  "clear",
  "neofetch",
  "sudo hire-me",
];

const OUTPUT: Record<string, string[]> = {
  help: [
    "Available commands:",
    "",
    "  help        Show this help message",
    "  about       Open the About Me window",
    "  skills      Open the Skills window",
    "  projects    Open the Projects window",
    "  contact     Show contact information",
    "  resume      Open the Resume window",
    "  github      Open GitHub profile",
    "  linkedin    Open LinkedIn profile",
    "  clear       Clear the terminal",
    "  neofetch    Display system info",
    "  sudo hire-me  Send a hiring request",
  ],
  contact: [
    "Name:      Ashrit Anshuman Pradhan",
    "Email:     ashrit39@gmail.com",
    "Phone:     +91 6370205656",
    "GitHub:    github.com/ashritanshuman",
    "LinkedIn:  linkedin.com/in/ashritanshuman",
    "Portfolio: ashritanshuman.vercel.app",
    "",
    "Availability: Open for freelance projects and technical opportunities.",
  ],
  neofetch: [
    "        .-://+oo+/:.          ashrit@portfolio",
    "    .:/osyyyyyyyyyyyyso/-.     ----------------",
    "  :oyyyyyyyyyyyyyyyyyyyyyyo:   OS: Ubuntu Portfolio 24.04 LTS",
    " :yyyyyyyyyyyyyyyyyyyyyyyyyy:  Kernel: React 19 + Next.js",
    ":yyyyyyyyyyyyyyyyyyyyyyyyyyyy: Uptime: Always coding",
    "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy Shell: zsh",
    "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy DE: GNOME / Framer Motion",
    ":yyyyyyyyyyyyyyyyyyyyyyyyyyyy:  WM: Ubuntu Desktop",
    " :yyyyyyyyyyyyyyyyyyyyyyyyyy:  CPU: B.Tech CS @ ITM Gwalior",
    "  :oyyyyyyyyyyyyyyyyyyyyyyo:   GPU: Skillora AI & PathGen",
    "    .:/osyyyyyyyyyyyyso/-.     Memory: Python, React & Tailwind",
    "        .-://+oo+/:.          ",
  ],
  "sudo hire-me": [
    "[sudo] password for recruiter: *******",
    "Authenticated successfully.",
    "",
    "Hiring request submitted! 🎉",
    "",
    "I will be in touch within 24 hours.",
    "Thanks for considering me for your team!",
  ],
};

interface Line {
  type: "input" | "output";
  text: string;
}

export function TerminalApp() {
  const { openApp } = useDesktop();
  const play = useSound();
  const [lines, setLines] = useState<Line[]>([
    { type: "output", text: "Welcome to Ubuntu Portfolio 24.04 LTS" },
    { type: "output", text: "Type 'help' to see available commands." },
    { type: "output", text: "" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [lines]);

  const runCommand = (raw: string) => {
    const cmd = raw.trim();
    const newLines: Line[] = [{ type: "input", text: `ashrit@portfolio:~$ ${cmd}` }];

    if (cmd === "") {
      // pass
    } else if (cmd === "clear") {
      setLines([]);
      setInput("");
      return;
    } else if (cmd === "about") {
      openApp("about");
      newLines.push({ type: "output", text: "Opening About Me..." });
    } else if (cmd === "skills") {
      openApp("skills");
      newLines.push({ type: "output", text: "Opening System Monitor..." });
    } else if (cmd === "projects") {
      openApp("projects");
      newLines.push({ type: "output", text: "Opening Files..." });
    } else if (cmd === "resume") {
      openApp("resume");
      newLines.push({ type: "output", text: "Opening Document Viewer..." });
    } else if (cmd === "github") {
      window.open("https://github.com/ashritanshuman", "_blank");
      newLines.push({ type: "output", text: "Opening GitHub in browser..." });
    } else if (cmd === "linkedin") {
      window.open("https://linkedin.com/in/ashritanshuman/", "_blank");
      newLines.push({ type: "output", text: "Opening LinkedIn in browser..." });
    } else if (cmd === "contact") {
      OUTPUT.contact.forEach((t) => newLines.push({ type: "output", text: t }));
    } else if (cmd === "neofetch") {
      OUTPUT.neofetch.forEach((t) => newLines.push({ type: "output", text: t }));
    } else if (cmd === "sudo hire-me") {
      OUTPUT["sudo hire-me"].forEach((t) => newLines.push({ type: "output", text: t }));
    } else if (cmd === "help") {
      OUTPUT.help.forEach((t) => newLines.push({ type: "output", text: t }));
    } else {
      newLines.push({ type: "output", text: `bash: ${cmd}: command not found` });
    }

    setLines((prev) => [...prev, ...newLines, { type: "output", text: "" }]);
    setHistory((prev) => [cmd, ...prev].slice(0, 50));
    setHistoryIndex(-1);
    setInput("");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      play("click");
      runCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const next = historyIndex + 1;
        setHistoryIndex(next);
        setInput(history[next]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const next = historyIndex - 1;
        setHistoryIndex(next);
        setInput(history[next]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = COMMANDS.find((c) => c.startsWith(input));
      if (match) setInput(match);
    }
  };

  return (
    <div className="h-full flex flex-col bg-[#300a24] text-white terminal-text">
      <div
        ref={scrollRef}
        className="flex-1 min-h-0 overflow-y-auto app-scroll p-3 sm:p-4 text-xs sm:text-sm"
        role="log"
        aria-live="polite"
        aria-label="Terminal output"
      >
        {lines.map((line, i) =>
          line.type === "input" ? (
            <div key={i} className="text-white/90 break-words">
              <span className="text-[#8ae234] font-bold">ashrit@portfolio</span>
              <span className="text-white/70">:</span>
              <span className="text-[#729fcf]">~</span>
              <span className="text-white/70">$</span> {line.text.replace("ashrit@portfolio:~$ ", "")}
            </div>
          ) : (
            <div key={i} className="text-white/80 whitespace-pre-wrap break-words">
              {line.text}
            </div>
          )
        )}
        <div className="flex items-center gap-1 mt-1">
          <span className="text-[#8ae234] font-bold shrink-0">ashrit@portfolio</span>
          <span className="text-white/70 shrink-0">:</span>
          <span className="text-[#729fcf] shrink-0">~</span>
          <span className="text-white/70 shrink-0">$</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            className="flex-1 min-w-0 bg-transparent outline-none text-base sm:text-sm text-white/90 ml-1 caret-white"
            autoFocus
            spellCheck={false}
            autoCapitalize="none"
            autoCorrect="off"
            autoComplete="off"
            aria-label="Terminal input"
          />
        </div>
      </div>
    </div>
  );
}
