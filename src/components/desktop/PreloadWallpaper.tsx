"use client";

import ReactDOM from "react-dom";

/**
 * Start downloading the wallpaper during the initial HTML render, before
 * hydration, so the first paint already has it. The two variants are gated by
 * `media` so a phone never fetches the desktop image (and vice versa).
 */
export function PreloadWallpaper() {
  ReactDOM.preload("/assets/updates-wallpaper.webp", {
    as: "image",
    fetchPriority: "high",
    media: "(min-width: 768px)",
  });
  ReactDOM.preload("/assets/updates-wallpaper-mobile.webp", {
    as: "image",
    fetchPriority: "high",
    media: "(max-width: 767px)",
  });
  return null;
}
