"use client";

import { motion, useMotionValue } from "framer-motion";
import { useRef, useEffect, ReactNode } from "react";
import { Minus, Square, X, Maximize2, ChevronDown } from "lucide-react";
import { useDesktop, WINDOW_TOP_MARGIN, WINDOW_BOTTOM_RESERVE } from "./DesktopContext";
import { WindowState, AppId } from "./types";
import { useSound } from "@/hooks/useSound";
import { AppIcon } from "./Icon";
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
    unmaximizeWindow,
    moveWindow,
    setWindowBounds,
    getAppConfig,
    workspace,
  } = useDesktop();
  const play = useSound();
  const config = getAppConfig(appId);

  const frameRef = useRef<HTMLDivElement>(null);

  // Position lives in motion values, not React state: dragging updates the
  // compositor directly and only commits to the store on pointer-up.
  const x = useMotionValue(w.x);
  const y = useMotionValue(w.y);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    originX: number;
    originY: number;
  } | null>(null);
  const dragRafRef = useRef(0);
  const dragTargetRef = useRef({ x: w.x, y: w.y });

  // Follow external position changes (open, restore, viewport clamp, drag end).
  useEffect(() => {
    if (dragRef.current) return;
    if (w.maximized) {
      x.set(0);
      y.set(32);
    } else {
      x.set(w.x);
      y.set(w.y);
    }
  }, [w.x, w.y, w.maximized, x, y]);

  useEffect(
    () => () => {
      if (dragRafRef.current) cancelAnimationFrame(dragRafRef.current);
    },
    []
  );

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
    if (w.maximized) unmaximizeWindow(w.id);
    else maximizeWindow(w.id);
  };

  const onTitlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button")) return;
    handleFocus();
    if (mobile || w.maximized) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.preventDefault();
    // Pointer capture keeps the drag alive outside the titlebar without
    // registering global listeners.
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* capture is best-effort */
    }
    dragRef.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      originX: x.get(),
      originY: y.get(),
    };
    dragTargetRef.current = { x: x.get(), y: y.get() };
    frameRef.current?.classList.add("window-dragging");
  };

  const onTitlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== e.pointerId) return;
    const nextX = Math.min(
      Math.max(0, drag.originX + e.clientX - drag.startX),
      Math.max(0, window.innerWidth - 80)
    );
    const nextY = Math.min(
      Math.max(32, drag.originY + e.clientY - drag.startY),
      Math.max(32, window.innerHeight - 80)
    );
    dragTargetRef.current = { x: nextX, y: nextY };
    // One motion-value write per frame; no React render until pointer-up.
    if (dragRafRef.current) return;
    dragRafRef.current = requestAnimationFrame(() => {
      dragRafRef.current = 0;
      x.set(dragTargetRef.current.x);
      y.set(dragTargetRef.current.y);
    });
  };

  const finishDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    dragRef.current = null;
    if (dragRafRef.current) {
      cancelAnimationFrame(dragRafRef.current);
      dragRafRef.current = 0;
    }
    x.set(dragTargetRef.current.x);
    y.set(dragTargetRef.current.y);
    try {
      e.currentTarget.releasePointerCapture(drag.pointerId);
    } catch {
      /* already released */
    }
    frameRef.current?.classList.remove("window-dragging");
    // Single store commit per drag gesture.
    moveWindow(w.id, Math.round(x.get()), Math.round(y.get()));
  };

  const onResizePointerDown = (e: React.PointerEvent<HTMLDivElement>, dir: string) => {
    if (!config.resizable || mobile) return;
    // Resizing with fingers on tiny handles is error-prone; mouse/pen only.
    if (e.pointerType === "touch") return;
    e.preventDefault();
    e.stopPropagation();

    const handle = e.currentTarget;
    const start = { px: e.clientX, py: e.clientY, w: w.width, h: w.height, x: w.x, y: w.y, dir };
    let rafId = 0;
    let pending: { x: number; y: number; width: number; height: number } | null = null;

    try {
      handle.setPointerCapture(e.pointerId);
    } catch {
      /* capture is best-effort */
    }

    const compute = (ev: PointerEvent) => {
      const dx = ev.clientX - start.px;
      const dy = ev.clientY - start.py;
      let newW = start.w;
      let newH = start.h;
      let newX = start.x;
      let newY = start.y;
      const maxW = Math.max(240, window.innerWidth - 16);
      const maxH = Math.max(200, window.innerHeight - WINDOW_TOP_MARGIN - WINDOW_BOTTOM_RESERVE);

      if (start.dir.includes("e")) {
        newW = Math.min(maxW, Math.max(config.minWidth, start.w + dx));
      }
      if (start.dir.includes("s")) {
        newH = Math.min(maxH, Math.max(config.minHeight, start.h + dy));
      }
      if (start.dir.includes("w")) {
        const proposed = start.w - dx;
        if (proposed >= config.minWidth) {
          newW = Math.min(maxW, proposed);
          newX = Math.max(0, start.x + dx);
        }
      }
      if (start.dir.includes("n")) {
        const proposed = start.h - dy;
        if (proposed >= config.minHeight) {
          newH = Math.min(maxH, proposed);
          newY = Math.max(WINDOW_TOP_MARGIN, start.y + dy);
        }
      }
      return { x: newX, y: newY, width: newW, height: newH };
    };

    const onPointerMove = (ev: PointerEvent) => {
      pending = compute(ev);
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        // One move+resize update per frame instead of two state writes.
        if (pending) setWindowBounds(w.id, pending);
      });
    };

    const finish = (ev: PointerEvent) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
      if (pending) setWindowBounds(w.id, pending);
      try {
        handle.releasePointerCapture(ev.pointerId);
      } catch {
        /* already released */
      }
      handle.removeEventListener("pointermove", onPointerMove);
      handle.removeEventListener("pointerup", finish);
      handle.removeEventListener("pointercancel", finish);
    };

    handle.addEventListener("pointermove", onPointerMove);
    handle.addEventListener("pointerup", finish);
    handle.addEventListener("pointercancel", finish);
  };

  const maximized = w.maximized;
  // Minimized and closing windows stay mounted (so app state survives a
  // minimize, and the exit transition can play on close) but animate out.
  const visible = !w.minimized && !w.closing && w.workspace === workspace;

  return (
    <motion.div
      key={w.id}
      ref={frameRef}
      role={mobile ? "dialog" : "region"}
      aria-modal={mobile ? true : undefined}
      aria-label={w.title}
      aria-hidden={!visible}
      onClick={handleFocus}
      onPointerDown={(e) => e.stopPropagation()}
      className={cn(
        // Outer layer only owns geometry; it never animates, so the
        // entry/exit transition can run on the compositor.
        "fixed flex",
        mobile ? "mobile-app-window" : "",
        !visible && "pointer-events-none",
        mobile && !isActiveMobile && "hidden"
      )}
      style={{
        ...(mobile
          ? { zIndex: 400 + w.zIndex }
          : {
              x,
              y,
              width: maximized ? "100vw" : w.width,
              height: maximized ? "calc(100dvh - 32px)" : w.height,
              zIndex: 200 + w.zIndex,
              maxWidth: maximized ? undefined : "calc(100vw - 32px)",
              maxHeight: maximized ? undefined : "calc(100dvh - 96px)",
            }),
        // Minimized windows stay mounted but leave hit-testing and the
        // accessibility tree once their fade-out has finished. Closing windows
        // keep their geometry visible until the exit transition ends, at which
        // point they are unmounted.
        visibility: w.minimized && !w.closing ? "hidden" : "visible",
        transition:
          w.minimized && !w.closing ? "visibility 0s linear 0.2s" : undefined,
      }}
    >
      <div
        className={cn(
          "glass-window window-surface flex h-full w-full flex-col overflow-hidden",
          // Entry animation plays once on mount.
          mobile ? "window-surface--enter-mobile" : "window-surface--enter",
          // Exit (minimize / close) is a transition, so it can be reversed
          // instantly when the window is restored.
          !visible && (mobile ? "window-surface--hidden-mobile" : "window-surface--hidden"),
          mobile
            ? "rounded-2xl ring-1 ring-white/15"
            : cn("rounded-xl", w.focused ? "ring-1 ring-white/20" : "ring-1 ring-white/5")
        )}
      >
        {mobile ? (
          /* ---------- Mobile app header (touch friendly) ---------- */
          <div
            className="h-12 shrink-0 flex items-center gap-1 px-1.5 window-titlebar"
            style={{ touchAction: "none" }}
          >
            <button
              onClick={handleClose}
              className="h-11 w-11 shrink-0 rounded-lg flex items-center justify-center text-white/80 hover:bg-white/10 active:bg-white/20 transition-colors"
              aria-label={`Close ${w.title}`}
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
            <div className="flex min-w-0 flex-1 items-center gap-2 px-1">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/10">
                <AppIcon name={config.icon} className="h-4 w-4 text-white/85" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium leading-tight text-white/90">{w.title}</p>
                <p className="text-[10px] leading-tight text-white/45">Ubuntu Portfolio</p>
              </div>
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
            onPointerMove={onTitlePointerMove}
            onPointerUp={finishDrag}
            onPointerCancel={finishDrag}
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
              <span className="ml-2 flex items-center gap-2 min-w-0">
                <AppIcon name={config.icon} className="h-3.5 w-3.5 shrink-0 text-white/60" />
                <span className="truncate text-sm font-medium text-white/90 select-none">{w.title}</span>
              </span>
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
      </div>
    </motion.div>
  );
}
