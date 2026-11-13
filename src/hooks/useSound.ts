import { useCallback } from "react";
import { useDesktop } from "@/components/desktop/DesktopContext";

export type SoundName = "startup" | "open" | "close" | "click" | "type" | "notification" | "minimize" | "maximize";

const SOUND_URLS: Record<SoundName, string> = {
  startup: "https://actions.google.com/sounds/v1/ambient/space.ogg",
  open: "https://actions.google.com/sounds/v1/cartoon/pop.ogg",
  close: "https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg",
  click: "https://actions.google.com/sounds/v1/foley/click.ogg",
  type: "https://actions.google.com/sounds/v1/foley/keyboard_typing.ogg",
  notification: "https://actions.google.com/sounds/v1/notification/simple_notification.ogg",
  minimize: "https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg",
  maximize: "https://actions.google.com/sounds/v1/cartoon/pop.ogg",
};

// Lazily created, shared across hook instances. Nothing is downloaded until a
// sound is actually played, which keeps the boot light on slow connections.
const audioCache = new Map<SoundName, HTMLAudioElement>();

function getAudio(name: SoundName): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  let audio = audioCache.get(name);
  if (!audio) {
    try {
      audio = new Audio(SOUND_URLS[name]);
      audio.preload = "auto";
      audio.volume = 0.3;
      audioCache.set(name, audio);
    } catch {
      return null;
    }
  }
  return audio;
}

export function useSound() {
  const { soundEnabled } = useDesktop();

  return useCallback(
    (name: SoundName) => {
      if (!soundEnabled) return;
      const audio = getAudio(name);
      if (!audio) return;
      try {
        audio.currentTime = 0;
        // Autoplay policies may reject this until the user interacts.
        audio.play().catch(() => {});
      } catch {
        // Audio is a progressive enhancement; never let it break interaction.
      }
    },
    [soundEnabled]
  );
}
