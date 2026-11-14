"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useRef,
  useEffect,
} from "react";
import { AppConfig, AppId, WindowState } from "./types";
import { APPS } from "@/lib/data";

interface DesktopContextType {
  windows: WindowState[];
  activeWindowId: string | null;
  workspace: number;
  activitiesOpen: boolean;
  soundEnabled: boolean;
  setSoundEnabled: (v: boolean) => void;
  openApp: (appId: AppId, options?: { workspace?: number; focus?: boolean }) => string | undefined;
  launchApp: (appId: AppId, options?: { workspace?: number }) => string | undefined;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  unmaximizeWindow: (id: string) => void;
  restoreWindow: (id: string, options?: { workspace?: number }) => void;
  moveWindow: (id: string, x: number, y: number) => void;
  resizeWindow: (id: string, width: number, height: number) => void;
  /** One state update for a combined move + resize (used while resizing). */
  setWindowBounds: (
    id: string,
    bounds: Partial<Pick<WindowState, "x" | "y" | "width" | "height">>
  ) => void;
  setWindowWorkspace: (id: string, workspace: number) => void;
  setWorkspace: (workspace: number) => void;
  toggleActivities: () => void;
  setActivitiesOpen: (open: boolean) => void;
  getAppConfig: (appId: AppId) => AppConfig;
  runningAppIds: AppId[];
  appsByCategory: Record<string, AppId[]>;
}

const DesktopContext = createContext<DesktopContextType | undefined>(undefined);

const WORKSPACE_COUNT = 2;

// Keep windows clear of the top panel and the dock.
export const WINDOW_TOP_MARGIN = 40;
export const WINDOW_BOTTOM_RESERVE = 96;

/**
 * Length of the window exit transition (mirrors `.window-surface` in
 * globals.css). Close keeps the window mounted for this long so the fade-out
 * can play, then unmounts it.
 */
export const WINDOW_EXIT_MS = 200;

function clampSize(width: number, height: number, minWidth: number, minHeight: number) {
  if (typeof window === "undefined") return { width, height };
  const maxW = Math.max(240, window.innerWidth - 32);
  const maxH = Math.max(200, window.innerHeight - WINDOW_TOP_MARGIN - WINDOW_BOTTOM_RESERVE);
  return {
    width: Math.min(Math.max(width, Math.min(minWidth, maxW)), maxW),
    height: Math.min(Math.max(height, Math.min(minHeight, maxH)), maxH),
  };
}

/**
 * Usable desktop workspace: the viewport minus the top system panel and the
 * bottom dock. Every new window is placed at the exact centre of this area.
 *
 * Windows are `position: fixed`, so the returned values are plain viewport
 * coordinates for the window's top-left corner.
 */
export function centeredWindowPosition(width: number, height: number) {
  if (typeof window === "undefined") return { x: 0, y: WINDOW_TOP_MARGIN };
  const workspaceWidth = window.innerWidth;
  const workspaceHeight = Math.max(0, window.innerHeight - WINDOW_TOP_MARGIN - WINDOW_BOTTOM_RESERVE);
  return {
    x: Math.max(0, Math.round((workspaceWidth - width) / 2)),
    y: WINDOW_TOP_MARGIN + Math.max(0, Math.round((workspaceHeight - height) / 2)),
  };
}

export function DesktopProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const [workspace, setWorkspaceState] = useState(1);
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const zIndexRef = useRef(10);
  const closeTimersRef = useRef(new Map<string, ReturnType<typeof setTimeout>>());

  const getAppConfig = useCallback((appId: AppId) => APPS[appId] ?? APPS.about, []);

  // Cancel any in-flight close timers if the provider unmounts.
  useEffect(() => {
    const timers = closeTimersRef.current;
    return () => {
      for (const t of timers.values()) clearTimeout(t);
      timers.clear();
    };
  }, []);

  const focusWindow = useCallback((id: string) => {
    setWindows((prev) => {
      const target = prev.find((w) => w.id === id);
      // A closing window is already leaving; never raise it.
      if (!target || target.minimized || target.closing) return prev;
      // Already focused and on top: nothing to re-render.
      const topZ = prev.reduce((max, w) => Math.max(max, w.zIndex), 0);
      if (target.focused && target.zIndex === topZ) return prev;
      zIndexRef.current += 1;
      const nextZ = zIndexRef.current;
      // Only the previously focused window and the target change, so React
      // keeps every other window's props identical (memo-friendly).
      return prev.map((w) => {
        if (w.id === id) return { ...w, focused: true, zIndex: nextZ };
        return w.focused ? { ...w, focused: false } : w;
      });
    });
    setActiveWindowId(id);
  }, []);

  const openApp = useCallback(
    (appId: AppId, options?: { workspace?: number; focus?: boolean }) => {
      const config = getAppConfig(appId);
      const { width, height } = clampSize(config.width, config.height, config.minWidth, config.minHeight);
      // Always the centre of the usable workspace; no per-open cascade offset,
      // so reopening an app never nudges the window off-centre.
      const { x, y } = centeredWindowPosition(width, height);
      const id = `${appId}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      zIndexRef.current += 1;

      const newWindow: WindowState = {
        id,
        appId,
        title: config.title,
        x,
        y,
        width,
        height,
        minimized: false,
        maximized: false,
        zIndex: zIndexRef.current,
        workspace: options?.workspace ?? workspace,
        focused: true,
      };

      setWindows((prev) => {
        const updated = prev.map((w) => (w.focused ? { ...w, focused: false } : w));
        return [...updated, newWindow];
      });
      setActiveWindowId(id);
      if (options?.workspace && options.workspace !== workspace) {
        setWorkspaceState(options.workspace);
      }
      return id;
    },
    [getAppConfig, workspace]
  );

  const closeWindow = useCallback((id: string) => {
    // Phase 1: mark the window as closing so it plays its exit animation,
    // and hand focus to the next top window straight away.
    setWindows((prev) => {
      const target = prev.find((w) => w.id === id);
      if (!target) return prev;
      const others = prev.filter((w) => w.id !== id);
      if (target.focused) {
        const top = others
          .filter((w) => !w.minimized && w.workspace === target.workspace)
          .sort((a, b) => b.zIndex - a.zIndex)[0];
        if (top) {
          setActiveWindowId(top.id);
          return prev.map((w) => {
            if (w.id === id) return { ...w, closing: true, focused: false };
            if (w.id === top.id) return { ...w, focused: true };
            return w.focused ? { ...w, focused: false } : w;
          });
        }
        setActiveWindowId(null);
      }
      return prev.map((w) => (w.id === id ? { ...w, closing: true, focused: false } : w));
    });

    // Phase 2: unmount once the exit transition has finished.
    const timer = setTimeout(() => {
      closeTimersRef.current.delete(id);
      setWindows((prev) => prev.filter((w) => w.id !== id));
    }, WINDOW_EXIT_MS + 30);

    closeTimersRef.current.set(id, timer);
  }, []);

  const minimizeWindow = useCallback((id: string) => {
    setWindows((prev) => {
      const target = prev.find((w) => w.id === id);
      if (!target) return prev;
      const next = prev.map((w) => (w.id === id ? { ...w, minimized: true, focused: false } : w));
      if (target.focused) {
        const top = next
          .filter((w) => !w.minimized && w.workspace === target.workspace)
          .sort((a, b) => b.zIndex - a.zIndex)[0];
        setActiveWindowId(top?.id ?? null);
        return next.map((w) =>
          w.id === top?.id ? { ...w, focused: true } : w.focused ? { ...w, focused: false } : w
        );
      }
      return next;
    });
  }, []);

  const maximizeWindow = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, maximized: true, minimized: false } : w))
    );
    focusWindow(id);
  }, [focusWindow]);

  /**
   * Leaves full-screen mode and returns the window to its stored (centred)
   * position and size. Distinct from `restoreWindow`, which un-minimizes.
   */
  const unmaximizeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, maximized: false } : w)));
    focusWindow(id);
  }, [focusWindow]);

  const restoreWindow = useCallback((id: string, options?: { workspace?: number }) => {
    // Restoring a window that is mid-close cancels the close instead of
    // letting it vanish under the pointer.
    const pending = closeTimersRef.current.get(id);
    if (pending) {
      clearTimeout(pending);
      closeTimersRef.current.delete(id);
      zIndexRef.current += 1;
      const nextZ = zIndexRef.current;
      setWindows((prev) =>
        prev.map((w) =>
          w.id === id
            ? {
                ...w,
                closing: false,
                minimized: false,
                focused: true,
                zIndex: nextZ,
                workspace: options?.workspace ?? w.workspace,
              }
            : w.focused
              ? { ...w, focused: false }
              : w
        )
      );
      setActiveWindowId(id);
      return;
    }
    // Restoring should raise the window above the others and keep its
    // maximized state so a minimized-maximized window comes back intact.
    zIndexRef.current += 1;
    const nextZ = zIndexRef.current;
    setWindows((prev) =>
      prev.map((w) => {
        if (w.id === id) {
          return {
            ...w,
            minimized: false,
            focused: true,
            zIndex: nextZ,
            workspace: options?.workspace ?? w.workspace,
          };
        }
        return w.focused ? { ...w, focused: false } : w;
      })
    );
    setActiveWindowId(id);
  }, []);

  const moveWindow = useCallback((id: string, x: number, y: number) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, x, y, maximized: false } : w))
    );
  }, []);

  const resizeWindow = useCallback((id: string, width: number, height: number) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, width, height } : w)));
  }, []);

  /** Single update for move+resize so a resize frame costs one render, not two. */
  const setWindowBounds = useCallback(
    (id: string, bounds: Partial<Pick<WindowState, "x" | "y" | "width" | "height">>) => {
      setWindows((prev) =>
        prev.map((w) => {
          if (w.id !== id) return w;
          const next = { ...w, ...bounds, maximized: false };
          const unchanged =
            next.x === w.x &&
            next.y === w.y &&
            next.width === w.width &&
            next.height === w.height &&
            next.maximized === w.maximized;
          return unchanged ? w : next;
        })
      );
    },
    []
  );

  const setWindowWorkspace = useCallback((id: string, ws: number) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, workspace: ws } : w)));
  }, []);

  const setWorkspace = useCallback((ws: number) => {
    setWorkspaceState(Math.max(1, Math.min(WORKSPACE_COUNT, ws)));
  }, []);

  /**
   * Single entry point for every launcher (desktop icons, dock, hero,
   * widgets, mobile home). Focuses an existing window instead of opening a
   * duplicate, and restores minimized windows.
   */
  const launchApp = useCallback(
    (appId: AppId, options?: { workspace?: number }) => {
      const targetWorkspace = options?.workspace ?? workspace;
      const existing = windows.find((w) => w.appId === appId);
      if (existing) {
        if (existing.workspace !== targetWorkspace) {
          setWindows((prev) =>
            prev.map((w) => (w.id === existing.id ? { ...w, workspace: targetWorkspace } : w))
          );
        }
        if (targetWorkspace !== workspace) setWorkspaceState(targetWorkspace);
        if (existing.minimized) restoreWindow(existing.id, { workspace: targetWorkspace });
        else focusWindow(existing.id);
        return existing.id;
      }
      return openApp(appId, { workspace: targetWorkspace, focus: true });
    },
    [windows, workspace, focusWindow, restoreWindow, openApp]
  );

  const toggleActivities = useCallback(() => {
    setActivitiesOpen((v) => !v);
  }, []);

  const runningAppIds = useMemo(
    () => Array.from(new Set(windows.filter((w) => !w.minimized).map((w) => w.appId))),
    [windows]
  );

  const appsByCategory = useMemo(() => {
    const categories: Record<string, AppId[]> = {};
    Object.values(APPS).forEach((app) => {
      const cat = app.category ?? "Other";
      if (!categories[cat]) categories[cat] = [];
      categories[cat].push(app.id);
    });
    return categories;
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activitiesOpen) {
        setActivitiesOpen(false);
      }
      if (e.key === "ArrowRight" && e.metaKey) {
        setWorkspaceState((v) => Math.min(WORKSPACE_COUNT, v + 1));
      }
      if (e.key === "ArrowLeft" && e.metaKey) {
        setWorkspaceState((v) => Math.max(1, v - 1));
      }
      if (e.key === "Tab" && e.altKey) {
        e.preventDefault();
        const visible = windows.filter((w) => !w.minimized && w.workspace === workspace);
        if (visible.length > 0) {
          const currentIndex = visible.findIndex((w) => w.id === activeWindowId);
          const next = visible[(currentIndex + 1) % visible.length];
          focusWindow(next.id);
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activitiesOpen, windows, workspace, activeWindowId, focusWindow]);

  // Keep windows inside the viewport when the browser is resized or the
  // device is rotated (phones/tablets switching orientation).
  useEffect(() => {
    let rafId = 0;
    const onResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setWindows((prev) =>
          prev.map((w) => {
            const maxW = Math.max(240, window.innerWidth - 32);
            const maxH = Math.max(200, window.innerHeight - WINDOW_TOP_MARGIN - WINDOW_BOTTOM_RESERVE);
            const width = Math.min(w.width, maxW);
            const height = Math.min(w.height, maxH);
            const x = Math.min(Math.max(8, w.x), Math.max(8, window.innerWidth - width - 16));
            const y = Math.min(
              Math.max(WINDOW_TOP_MARGIN, w.y),
              Math.max(WINDOW_TOP_MARGIN, window.innerHeight - height - WINDOW_BOTTOM_RESERVE)
            );
            if (width === w.width && height === w.height && x === w.x && y === w.y) return w;
            return { ...w, width, height, x, y };
          })
        );
      });
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  return (
    <DesktopContext.Provider
      value={{
        windows,
        activeWindowId,
        workspace,
        activitiesOpen,
        soundEnabled,
        setSoundEnabled,
        openApp,
        launchApp,
        closeWindow,
        focusWindow,
        minimizeWindow,
        maximizeWindow,
        unmaximizeWindow,
        restoreWindow,
        moveWindow,
        resizeWindow,
        setWindowBounds,
        setWindowWorkspace,
        setWorkspace,
        toggleActivities,
        setActivitiesOpen,
        getAppConfig,
        runningAppIds,
        appsByCategory,
      }}
    >
      {children}
    </DesktopContext.Provider>
  );
}

export function useDesktop() {
  const ctx = useContext(DesktopContext);
  if (!ctx) throw new Error("useDesktop must be used within DesktopProvider");
  return ctx;
}
