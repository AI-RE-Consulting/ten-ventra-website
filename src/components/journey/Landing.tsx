"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import { COPY } from "@/data/copy";

export default function Landing({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.06, 0.105], [1, 1, 0]);
  const y = useTransform(progress, [0, 0.105], [0, -40]);
  return (
    <motion.div
      style={{ opacity, y }}
      className="pointer-events-none fixed inset-0 z-20 flex flex-col items-center justify-center px-6 text-center text-paper"
    >
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance [text-shadow:0_2px_28px_rgba(0,0,0,0.85)] md:text-6xl">
        {COPY.landing.headline}
      </h1>
      <p className="mt-5 max-w-xl text-sm font-medium text-paper/90 [text-shadow:0_1px_18px_rgba(0,0,0,0.9)] md:text-base">
        {COPY.landing.sub}
      </p>
      <div className="absolute bottom-10 flex flex-col items-center gap-2">
        <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-paper/60">
          {COPY.landing.scrollCue}
        </span>
        <span className="h-8 w-px animate-pulse bg-paper/50" />
      </div>
    </motion.div>
  );
}
