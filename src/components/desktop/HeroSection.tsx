"use client";

import { motion } from "framer-motion";
import { ArrowRight, UserRound } from "lucide-react";
import { useDesktop } from "./DesktopContext";
import { useSound } from "@/hooks/useSound";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
};

export function HeroSection() {
  const { launchApp, setActivitiesOpen } = useDesktop();
  const play = useSound();

  return (
    <motion.section
      aria-label="Introduction"
      variants={container}
      initial="hidden"
      animate="show"
      className="desktop-hero max-w-[34rem] select-none"
    >
      {/* Welcome pill */}
      <motion.div variants={item} className="desktop-hero-pill">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-1.5 text-[11px] font-medium text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-md">
          <span aria-hidden="true">👋</span>
          Hey, Welcome to my Portfolio OS
        </span>
      </motion.div>

      {/* Name */}
      <motion.h1
        variants={item}
        className="desktop-hero-title mt-5 text-[clamp(2.85rem,5.4vw,4.75rem)] font-bold leading-[0.94] tracking-[-0.035em] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
      >
        <span className="block">Ashrit</span>
        <span className="block text-[#f36b21]">Anshuman</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        variants={item}
        className="desktop-hero-tagline mt-5 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.24em] text-white/75 drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)] sm:text-[11px]"
      >
        Developer <span className="text-[#f36b21]">·</span> Data Scientist (Aspiring){" "}
        <span className="text-[#f36b21]">·</span> Builder
      </motion.p>

      {/* Description */}
      <motion.p
        variants={item}
        className="desktop-hero-desc mt-4 max-w-[31rem] text-[13px] leading-relaxed text-white/70 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] sm:text-sm"
      >
        A computer science undergraduate who blends engineering, data and design to build
        meaningful products, solve real problems, and create impact through technology.
      </motion.p>

      {/* Actions */}
      <motion.div variants={item} className="desktop-hero-actions mt-7 flex flex-wrap items-center gap-3">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={(e) => {
            e.stopPropagation();
            play("click");
            setActivitiesOpen(true);
          }}
          className="group inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#e95420] px-5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(233,84,32,0.8)] transition-colors hover:bg-[#f36b21] focus-visible:outline-offset-4"
        >
          Explore Apps
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            play("click");
            launchApp("about");
          }}
          className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-5 text-sm font-semibold text-white/90 backdrop-blur-md transition-colors hover:border-white/35 hover:bg-white/10 focus-visible:outline-offset-4"
        >
          <UserRound className="h-4 w-4" aria-hidden="true" />
          About Me
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
