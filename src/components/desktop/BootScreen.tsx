"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useSound } from "@/hooks/useSound";

export function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const play = useSound();

  useEffect(() => {
    play("startup");
    const p = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(p);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 180);

    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 500);
    }, 2200);

    return () => {
      clearInterval(p);
      clearTimeout(t);
    };
  }, [onComplete, play]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[20000] bg-[#1e1e1e] flex flex-col items-center justify-center text-white"
        >
          <div className="text-6xl mb-6">🐧</div>
          <div className="text-2xl font-light tracking-widest mb-8">ubuntu</div>
          <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#e95420]"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <div className="mt-4 text-sm text-white/50 font-mono">
            Loading portfolio... {Math.min(progress, 100).toFixed(0)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
