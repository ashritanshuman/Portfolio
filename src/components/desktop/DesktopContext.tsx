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
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  restoreWindow: (id: string, options?: { workspace?: number }) => void;
  moveWindow: (id: string, x: number, y: number) => void;
  resizeWindow: (id: string, width: number, height: number) => void;
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

function clampSize(width: number, height: number, minWidth: number, minHeight: number) {
  if (typeof window === "undefined") return { width, height };
  const maxW = Math.max(240, window.innerWidth - 32);
  const maxH = Math.max(200, window.innerHeight - WINDOW_TOP_MARGIN - WINDOW_BOTTOM_RESERVE);
  return {
    width: Math.min(Math.max(width, Math.min(minWidth, maxW)), maxW),
    height: Math.min(Math.max(height, Math.min(minHeight, maxH)), maxH),
  };
}

function centerPosition(width: number, height: number, offset: number) {
  if (typeof window === "undefined") return { x: 80 + offset, y: 80 + offset };
  const maxW = window.innerWidth;
  const maxH = window.innerHeight;
  return {
    x: Math.max(8, Math.min(maxW - width - 24, (maxW - width) / 2 + offset)),
    y: Math.max(
      WINDOW_TOP_MARGIN,
      Math.min(maxH - height - WINDOW_BOTTOM_RESERVE, (maxH - height) / 2 + offset)
    ),
  };
}

export function DesktopProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const [workspace, setWorkspaceState] = useState(1);
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const zIndexRef = useRef(10);
  const openCountRef = useRef(0);

  const getAppConfig = useCallback((appId: AppId) => APPS[appId] ?? APPS.about, []);

  const focusWindow = useCallback((id: string) => {
    setWindows((prev) => {
      const target = prev.find((w) => w.id === id);
      if (!target || target.minimized) return prev;
      zIndexRef.current += 1;
      const nextZ = zIndexRef.current;
      return prev.map((w) =>
        w.id === id ? { ...w, focused: true, zIndex: nextZ } : { ...w, focused: false }
      );
    });
    setActiveWindowId(id);
  }, []);

  const openApp = useCallback(
    (appId: AppId, options?: { workspace?: number; focus?: boolean }) => {
      const config = getAppConfig(appId);
      const { width, height } = clampSize(config.width, config.height, config.minWidth, config.minHeight);
      const offset = openCountRef.current * 24;
      const { x, y } = centerPosition(width, height, offset);
      openCountRef.current += 1;
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
        const updated = prev.map((w) => ({ ...w, focused: false }));
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
    setWindows((prev) => {
      const remaining = prev.filter((w) => w.id !== id);
      const closed = prev.find((w) => w.id === id);
      if (closed && closed.focused) {
        const top = remaining
          .filter((w) => !w.minimized && w.workspace === closed.workspace)
          .sort((a, b) => b.zIndex - a.zIndex)[0];
        if (top) {
          setActiveWindowId(top.id);
          return remaining.map((w) => ({ ...w, focused: w.id === top.id }));
        }
        setActiveWindowId(null);
      }
      return remaining;
    });
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
        return next.map((w) => ({ ...w, focused: w.id === top?.id }));
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

  const restoreWindow = useCallback((id: string, options?: { workspace?: number }) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id
          ? { ...w, minimized: false, maximized: false, focused: true, workspace: options?.workspace ?? w.workspace }
          : { ...w, focused: false }
      )
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

  const setWindowWorkspace = useCallback((id: string, ws: number) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, workspace: ws } : w)));
  }, []);

  const setWorkspace = useCallback((ws: number) => {
    setWorkspaceState(Math.max(1, Math.min(WORKSPACE_COUNT, ws)));
  }, []);

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
        closeWindow,
        focusWindow,
        minimizeWindow,
        maximizeWindow,
        restoreWindow,
        moveWindow,
        resizeWindow,
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
