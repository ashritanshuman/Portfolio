"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, ReactNode } from "react";
import { Minus, Square, X, Maximize2 } from "lucide-react";
import { useDesktop } from "./DesktopContext";
import { WindowState, AppId } from "./types";
import { useSound } from "@/hooks/useSound";

interface WindowFrameProps {
  window: WindowState;
  children: ReactNode;
  appId: AppId;
  onOpen?: () => void;
  onClose?: () => void;
}

const resizeHandles = [
  { dir: "n", cursor: "n-resize", class: "top-0 left-1/2 -translate-x-1/2 w-[calc(100%-16px)] h-2" },
  { dir: "s", cursor: "s-resize", class: "bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-16px)] h-2" },
  { dir: "e", cursor: "e-resize", class: "right-0 top-1/2 -translate-y-1/2 w-2 h-[calc(100%-16px)]" },
  { dir: "w", cursor: "w-resize", class: "left-0 top-1/2 -translate-y-1/2 w-2 h-[calc(100%-16px)]" },
  { dir: "ne", cursor: "ne-resize", class: "top-0 right-0 w-4 h-4" },
  { dir: "nw", cursor: "nw-resize", class: "top-0 left-0 w-4 h-4" },
  { dir: "se", cursor: "se-resize", class: "bottom-0 right-0 w-4 h-4" },
  { dir: "sw", cursor: "sw-resize", class: "bottom-0 left-0 w-4 h-4" },
];

export function WindowFrame({ window: w, children, appId }: WindowFrameProps) {
  const { focusWindow, closeWindow, minimizeWindow, maximizeWindow, restoreWindow, moveWindow, resizeWindow, getAppConfig, workspace } = useDesktop();
  const play = useSound();
  const config = getAppConfig(appId);
  const frameRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, wx: 0, wy: 0 });
  const resizeStart = useRef({ x: 0, y: 0, width: 0, height: 0, dir: "" });

  const handleFocus = () => focusWindow(w.id);

  const handleClose = () => {
    play("close");
    closeWindow(w.id);
  };

  const handleMinimize = () => {
    play("minimize");
    minimizeWindow(w.id);
  };

  const handleMaximize = () => {
    play(w.maximized ? "open" : "maximize");
    if (w.maximized) restoreWindow(w.id);
    else maximizeWindow(w.id);
  };

  const onTitleMouseDown = (e: React.MouseEvent) => {
    if (e.target !== e.currentTarget && !(e.currentTarget as HTMLElement).contains(e.target as Node)) return;
    if (w.maximized) return;
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, wx: w.x, wy: w.y };
    handleFocus();
  };

  useEffect(() => {
    if (!isDragging) return;
    let rafId = 0;
    const onMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      // Throttle state updates to one per animation frame to avoid
      // re-rendering the whole desktop tree more often than the display refreshes
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        moveWindow(w.id, Math.max(0, dragStart.current.wx + dx), Math.max(28, dragStart.current.wy + dy));
      });
    };
    const onMouseUp = () => {
      cancelAnimationFrame(rafId);
      setIsDragging(false);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, w.id, moveWindow]);

  const onResizeMouseDown = (e: React.MouseEvent, dir: string) => {
    if (!config.resizable) return;
    e.preventDefault();
    e.stopPropagation();
    resizeStart.current = { x: e.clientX, y: e.clientY, width: w.width, height: w.height, dir };

    const onMouseMove = (ev: MouseEvent) => {
      const dx = ev.clientX - resizeStart.current.x;
      const dy = ev.clientY - resizeStart.current.y;
      let newW = resizeStart.current.width;
      let newH = resizeStart.current.height;
      let newX = w.x;
      let newY = w.y;

      if (resizeStart.current.dir.includes("e")) newW = Math.max(config.minWidth, resizeStart.current.width + dx);
      if (resizeStart.current.dir.includes("s")) newH = Math.max(config.minHeight, resizeStart.current.height + dy);
      if (resizeStart.current.dir.includes("w")) {
        const proposed = resizeStart.current.width - dx;
        if (proposed >= config.minWidth) {
          newW = proposed;
          newX = w.x + dx;
        }
      }
      if (resizeStart.current.dir.includes("n")) {
        const proposed = resizeStart.current.height - dy;
        if (proposed >= config.minHeight) {
          newH = proposed;
          newY = w.y + dy;
        }
      }
      resizeWindow(w.id, newW, newH);
      if (resizeStart.current.dir.includes("w") || resizeStart.current.dir.includes("n")) {
        moveWindow(w.id, newX, newY);
      }
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const displayStyle = w.maximized
    ? { x: 0, y: 28, width: "100vw", height: "calc(100vh - 28px)" }
    : { x: w.x, y: w.y, width: w.width, height: w.height };

  return (
    <AnimatePresence>
      {!w.minimized && w.workspace === workspace && (
        <motion.div
          ref={frameRef}
          layout={!isDragging}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, x: displayStyle.x, y: displayStyle.y, width: displayStyle.width, height: displayStyle.height }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={
            isDragging
              ? { duration: 0 }
              : { type: "spring", stiffness: 400, damping: 30, mass: 0.8 }
          }
          onClick={handleFocus}
          onPointerDown={(e) => e.stopPropagation()}
          className={`fixed z-10 rounded-xl overflow-hidden glass-window flex flex-col ${
            w.focused ? "ring-1 ring-white/20" : "ring-1 ring-white/5"
          }`}
          style={{ zIndex: w.zIndex, maxWidth: w.maximized ? undefined : "calc(100vw - 32px)", maxHeight: w.maximized ? undefined : "calc(100vh - 96px)" }}
        >
          {/* Title bar */}
          <div
            className={`h-9 flex items-center justify-between px-3 cursor-default window-titlebar ${
              w.focused ? "window-titlebar-active" : ""
            }`}
            onMouseDown={onTitleMouseDown}
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <button
                  onClick={handleClose}
                  className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors"
                  aria-label="Close"
                />
                <button
                  onClick={handleMinimize}
                  className="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#febc2e]/80 transition-colors"
                  aria-label="Minimize"
                />
                <button
                  onClick={handleMaximize}
                  className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#28c840]/80 transition-colors"
                  aria-label="Maximize"
                />
              </div>
              <span className="text-white/90 text-sm font-medium ml-2 select-none">{w.title}</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handleMinimize}
                className="p-1 rounded hover:bg-white/10 text-white/70"
                aria-label="Minimize"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button
                onClick={handleMaximize}
                className="p-1 rounded hover:bg-white/10 text-white/70"
                aria-label="Maximize"
              >
                {w.maximized ? <Maximize2 className="w-4 h-4" /> : <Square className="w-4 h-4" />}
              </button>
              <button
                onClick={handleClose}
                className="p-1 rounded hover:bg-[#ff5f57]/80 text-white/70 hover:text-white"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden relative" style={{ background: config.color }}>
            {children}
          </div>

          {/* Resize handles */}
          {config.resizable && !w.maximized &&
            resizeHandles.map((h) => (
              <div
                key={h.dir}
                className={`absolute ${h.class} z-50`}
                style={{ cursor: h.cursor }}
                onMouseDown={(e) => onResizeMouseDown(e, h.dir)}
              />
            ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
