"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, ReactNode } from "react";
import { Minus, Square, X, Maximize2, ChevronDown } from "lucide-react";
import { useDesktop, WINDOW_TOP_MARGIN, WINDOW_BOTTOM_RESERVE } from "./DesktopContext";
import { WindowState, AppId } from "./types";
import { useSound } from "@/hooks/useSound";
import { cn } from "@/lib/utils";

interface WindowFrameProps {
  window: WindowState;
  children: ReactNode;
  appId: AppId;
  /** Mobile presentation: a full app panel between the status bar and dock. */
  mobile?: boolean;
  /** On mobile only the top-most window is visible; others stay mounted. */
  isActiveMobile?: boolean;
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

export function WindowFrame({
  window: w,
  children,
  appId,
  mobile = false,
  isActiveMobile = true,
}: WindowFrameProps) {
  const {
    focusWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    restoreWindow,
    moveWindow,
    resizeWindow,
    getAppConfig,
    workspace,
  } = useDesktop();
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

  const onTitlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (mobile) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    if ((e.target as HTMLElement).closest("button")) return;
    if (w.maximized) return;
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, wx: w.x, wy: w.y };
    handleFocus();
  };

  useEffect(() => {
    if (!isDragging || mobile) return;
    let rafId = 0;
    const onPointerMove = (e: PointerEvent) => {
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      // Throttle state updates to one per animation frame to avoid
      // re-rendering the whole desktop tree more often than the display refreshes
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const maxX = Math.max(0, window.innerWidth - 80);
        const maxY = Math.max(32, window.innerHeight - 80);
        moveWindow(
          w.id,
          Math.min(maxX, Math.max(0, dragStart.current.wx + dx)),
          Math.min(maxY, Math.max(32, dragStart.current.wy + dy))
        );
      });
    };
    const stopDragging = () => {
      cancelAnimationFrame(rafId);
      setIsDragging(false);
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", stopDragging);
    window.addEventListener("pointercancel", stopDragging);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", stopDragging);
      window.removeEventListener("pointercancel", stopDragging);
    };
  }, [isDragging, mobile, w.id, moveWindow]);

  const onResizePointerDown = (e: React.PointerEvent, dir: string) => {
    if (!config.resizable || mobile) return;
    // Resizing with fingers on tiny handles is error-prone; mouse/pen only.
    if (e.pointerType === "touch") return;
    e.preventDefault();
    e.stopPropagation();
    resizeStart.current = { x: e.clientX, y: e.clientY, width: w.width, height: w.height, dir };

    let rafId = 0;
    let pending = { width: w.width, height: w.height, x: w.x, y: w.y };

    const onPointerMove = (ev: PointerEvent) => {
      const dx = ev.clientX - resizeStart.current.x;
      const dy = ev.clientY - resizeStart.current.y;
      let newW = resizeStart.current.width;
      let newH = resizeStart.current.height;
      let newX = w.x;
      let newY = w.y;
      const maxW = Math.max(240, window.innerWidth - 16);
      const maxH = Math.max(200, window.innerHeight - WINDOW_TOP_MARGIN - WINDOW_BOTTOM_RESERVE);

      if (resizeStart.current.dir.includes("e")) {
        newW = Math.min(maxW, Math.max(config.minWidth, resizeStart.current.width + dx));
      }
      if (resizeStart.current.dir.includes("s")) {
        newH = Math.min(maxH, Math.max(config.minHeight, resizeStart.current.height + dy));
      }
      if (resizeStart.current.dir.includes("w")) {
        const proposed = resizeStart.current.width - dx;
        if (proposed >= config.minWidth) {
          newW = Math.min(maxW, proposed);
          newX = Math.max(0, w.x + dx);
        }
      }
      if (resizeStart.current.dir.includes("n")) {
        const proposed = resizeStart.current.height - dy;
        if (proposed >= config.minHeight) {
          newH = Math.min(maxH, proposed);
          newY = Math.max(WINDOW_TOP_MARGIN, w.y + dy);
        }
      }
      pending = { width: newW, height: newH, x: newX, y: newY };
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        resizeWindow(w.id, pending.width, pending.height);
        if (resizeStart.current.dir.includes("w") || resizeStart.current.dir.includes("n")) {
          moveWindow(w.id, pending.x, pending.y);
        }
      });
    };

    const onPointerUp = () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
  };

  const displayStyle = w.maximized
    ? { x: 0, y: 32, width: "100vw", height: "calc(100dvh - 32px)" }
    : { x: w.x, y: w.y, width: w.width, height: w.height };

  const springTransition = { type: "spring" as const, stiffness: 400, damping: 30, mass: 0.8 };

  return (
    <AnimatePresence>
      {!w.minimized && w.workspace === workspace && (
        <motion.div
          ref={frameRef}
          role={mobile ? "dialog" : "region"}
          aria-modal={mobile ? true : undefined}
          aria-label={w.title}
          layout={!isDragging && !mobile}
          initial={mobile ? { opacity: 0, y: 28 } : { opacity: 0, scale: 0.8 }}
          animate={
            mobile
              ? { opacity: 1, y: 0 }
              : {
                  opacity: 1,
                  scale: 1,
                  x: displayStyle.x,
                  y: displayStyle.y,
                  width: displayStyle.width,
                  height: displayStyle.height,
                }
          }
          exit={mobile ? { opacity: 0, y: 24 } : { opacity: 0, scale: 0.9 }}
          transition={
            mobile
              ? { type: "spring", stiffness: 340, damping: 34 }
              : isDragging
              ? { duration: 0 }
              : springTransition
          }
          onClick={handleFocus}
          onPointerDown={(e) => e.stopPropagation()}
          className={cn(
            "fixed z-10 overflow-hidden glass-window flex flex-col",
            mobile
              ? "mobile-app-window rounded-2xl ring-1 ring-white/15"
              : "rounded-xl",
            mobile && !isActiveMobile && "hidden",
            !mobile && (w.focused ? "ring-1 ring-white/20" : "ring-1 ring-white/5")
          )}
          style={{
            // Windows sit above desktop icons (z-100) and the quick-action
            // widgets (z-150), but below the activities view / dock / panel.
            zIndex: mobile ? 400 + w.zIndex : 200 + w.zIndex,
            maxWidth: mobile || w.maximized ? undefined : "calc(100vw - 32px)",
            maxHeight: mobile || w.maximized ? undefined : "calc(100dvh - 96px)",
          }}
        >
          {mobile ? (
            /* ---------- Mobile app header (touch friendly) ---------- */
            <div className="h-12 shrink-0 flex items-center gap-1 px-1.5 window-titlebar" style={{ touchAction: "none" }}>
              <button
                onClick={handleClose}
                className="h-11 w-11 shrink-0 rounded-lg flex items-center justify-center text-white/80 hover:bg-white/10 active:bg-white/20 transition-colors"
                aria-label={`Close ${w.title}`}
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
              <div className="flex-1 min-w-0 px-1">
                <p className="text-sm font-medium text-white/90 truncate leading-tight">{w.title}</p>
                <p className="text-[10px] text-white/45 leading-tight">Ubuntu Portfolio</p>
              </div>
              <button
                onClick={handleMinimize}
                className="h-11 w-11 shrink-0 rounded-lg flex items-center justify-center text-white/80 hover:bg-white/10 active:bg-white/20 transition-colors"
                aria-label={`Minimize ${w.title}`}
              >
                <ChevronDown className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          ) : (
            /* ---------- Desktop title bar ---------- */
            <div
              className={`h-9 shrink-0 flex items-center justify-between px-3 cursor-default window-titlebar ${
                w.focused ? "window-titlebar-active" : ""
              }`}
              onPointerDown={onTitlePointerDown}
              onDoubleClick={() => !mobile && handleMaximize()}
              style={{ touchAction: "none" }}
            >
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex gap-1.5 shrink-0">
                  <button
                    onClick={handleClose}
                    className="group/dot h-6 w-6 -m-1.5 flex items-center justify-center rounded-full"
                    aria-label="Close window"
                  >
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57] group-hover/dot:bg-[#ff5f57]/80 transition-colors" />
                  </button>
                  <button
                    onClick={handleMinimize}
                    className="group/dot h-6 w-6 -m-1.5 flex items-center justify-center rounded-full"
                    aria-label="Minimize window"
                  >
                    <span className="w-3 h-3 rounded-full bg-[#febc2e] group-hover/dot:bg-[#febc2e]/80 transition-colors" />
                  </button>
                  <button
                    onClick={handleMaximize}
                    className="group/dot h-6 w-6 -m-1.5 flex items-center justify-center rounded-full"
                    aria-label={w.maximized ? "Restore window" : "Maximize window"}
                  >
                    <span className="w-3 h-3 rounded-full bg-[#28c840] group-hover/dot:bg-[#28c840]/80 transition-colors" />
                  </button>
                </div>
                <span className="text-white/90 text-sm font-medium ml-2 select-none truncate">{w.title}</span>
              </div>
              <div className="flex items-center gap-0.5 shrink-0">
                <button
                  onClick={handleMinimize}
                  className="p-1.5 md:p-2 rounded hover:bg-white/10 text-white/70 transition-colors"
                  aria-label="Minimize"
                >
                  <Minus className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  onClick={handleMaximize}
                  className="p-1.5 md:p-2 rounded hover:bg-white/10 text-white/70 transition-colors"
                  aria-label={w.maximized ? "Restore" : "Maximize"}
                >
                  {w.maximized ? (
                    <Maximize2 className="w-4 h-4" aria-hidden="true" />
                  ) : (
                    <Square className="w-4 h-4" aria-hidden="true" />
                  )}
                </button>
                <button
                  onClick={handleClose}
                  className="p-1.5 md:p-2 rounded hover:bg-[#ff5f57]/80 text-white/70 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          )}

          {/* Content */}
          <div className="flex-1 min-h-0 overflow-hidden relative" style={{ background: config.color }}>
            {children}
          </div>

          {/* Resize handles (precise pointers only) */}
          {!mobile && config.resizable && !w.maximized &&
            resizeHandles.map((h) => (
              <div
                key={h.dir}
                className={`window-resize-handle absolute ${h.class} z-50`}
                style={{ cursor: h.cursor }}
                onPointerDown={(e) => onResizePointerDown(e, h.dir)}
              />
            ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
