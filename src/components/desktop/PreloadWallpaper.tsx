"use client";

import ReactDOM from "react-dom";

export function PreloadWallpaper() {
  ReactDOM.preload("/assets/updates-wallpaper.webp", {
    as: "image",
    fetchPriority: "high",
  });
  return null;
}
