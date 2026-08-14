"use client";

import { motion, useTransform, type MotionValue } from "motion/react";

export default function TransitLine({
  progress,
  text,
  sub,
  range,
  theme = "dark",
}: {
  progress: MotionValue<number>;
  text: string;
  sub?: string;
  range: [number, number, number, number];
  theme?: "dark" | "light";
}) {
  const dark = theme === "dark";
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const y = useTransform(progress, [range[0], range[3]], [24, -24]);
  return (
    <motion.div
      style={{ opacity, y }}
      className="pointer-events-none fixed inset-x-0 top-[38%] z-20 px-6 text-center"
    >
      <p
        className={`text-2xl font-medium tracking-tight md:text-4xl ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {text}
      </p>
      {sub && (
        <p
          className={`mt-3 text-sm md:text-base ${
            dark
              ? "text-paper/85 [text-shadow:0_1px_16px_rgba(0,0,0,0.85)]"
              : "text-ink/80 [text-shadow:0_1px_16px_rgba(247,246,243,0.95)]"
          }`}
        >
          {sub}
        </p>
      )}
    </motion.div>
  );
}
