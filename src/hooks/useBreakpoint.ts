"use client";

import { useSyncExternalStore } from "react";

export type Breakpoint = "mobile" | "tablet" | "desktop";

const MOBILE_MAX = 767;
const TABLET_MAX = 1023;

function getSnapshot(): Breakpoint {
  if (typeof window === "undefined") return "desktop";
  const width = window.innerWidth;
  if (width <= MOBILE_MAX) return "mobile";
  if (width <= TABLET_MAX) return "tablet";
  return "desktop";
}

function subscribe(onChange: () => void) {
  window.addEventListener("resize", onChange);
  window.addEventListener("orientationchange", onChange);
  return () => {
    window.removeEventListener("resize", onChange);
    window.removeEventListener("orientationchange", onChange);
  };
}

/**
 * Reactive breakpoint for behaviour that CSS alone cannot express
 * (window presentation, drag/resize support). Values are primitives so
 * useSyncExternalStore stays stable between renders.
 */
export function useBreakpoint(): Breakpoint {
  return useSyncExternalStore<Breakpoint>(subscribe, getSnapshot, () => "desktop");
}

export function useIsMobile(): boolean {
  return useBreakpoint() === "mobile";
}
