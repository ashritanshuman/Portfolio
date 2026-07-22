import { useCallback, useEffect, useRef } from "react";
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

export function useSound() {
  const { soundEnabled } = useDesktop();
  const audioRefs = useRef<Partial<Record<SoundName, HTMLAudioElement>>>({});

  useEffect(() => {
    if (typeof window === "undefined") return;

    (Object.keys(SOUND_URLS) as SoundName[]).forEach((name) => {
      const audio = new Audio(SOUND_URLS[name]);
      audio.preload = "auto";
      audio.volume = 0.3;
      audioRefs.current[name] = audio;
    });

    return () => {
      audioRefs.current = {};
    };
  }, []);

  const play = useCallback(
    (name: SoundName) => {
      if (!soundEnabled || typeof window === "undefined") return;
      const audio = audioRefs.current[name];
      if (audio) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }
    },
    [soundEnabled]
  );

  return play;
}
