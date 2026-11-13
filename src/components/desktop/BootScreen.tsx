"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSound } from "@/hooks/useSound";

export function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const play = useSound();
  const playRef = useRef(play);
  const completeRef = useRef(onComplete);

  useEffect(() => {
    playRef.current = play;
  }, [play]);

  useEffect(() => {
    completeRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    playRef.current("startup");

    let reduced = false;
    let alreadyBooted = false;
    try {
      reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      alreadyBooted = sessionStorage.getItem("ashrit-portfolio-booted") === "1";
      sessionStorage.setItem("ashrit-portfolio-booted", "1");
    } catch {
      // Storage may be unavailable in private mode — boot normally.
    }

    // Returning visitors skip straight to the desktop; first visits get a
    // shorter boot on phones so the site never feels slow to start.
    const duration = alreadyBooted || reduced ? 250 : window.innerWidth <= 767 ? 1500 : 2200;

    let interval: ReturnType<typeof setInterval> | undefined;
    let completeTimer: ReturnType<typeof setTimeout> | undefined;

    if (!alreadyBooted && !reduced) {
      interval = setInterval(() => {
        setProgress((prev) => Math.min(100, prev + Math.random() * 14));
      }, 180);
    }

    const hideTimer = setTimeout(() => {
      if (interval) clearInterval(interval);
      setProgress(100);
      setVisible(false);
      completeTimer = setTimeout(() => completeRef.current(), reduced ? 0 : 400);
    }, duration);

    return () => {
      if (interval) clearInterval(interval);
      clearTimeout(hideTimer);
      if (completeTimer) clearTimeout(completeTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[20000] bg-[#1e1e1e] flex flex-col items-center justify-center text-white px-6"
          role="status"
          aria-live="polite"
          aria-label="Booting Ubuntu Portfolio"
        >
          <div className="text-5xl sm:text-6xl mb-5 sm:mb-6" aria-hidden="true">
            🐧
          </div>
          <div className="text-xl sm:text-2xl font-light tracking-widest mb-8">ubuntu</div>
          <div className="w-full max-w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#e95420]"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <div className="mt-4 text-xs sm:text-sm text-white/50 font-mono text-center">
            Loading portfolio... {Math.min(progress, 100).toFixed(0)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
