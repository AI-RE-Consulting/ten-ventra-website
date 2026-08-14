"use client";

import { motion, useTransform, type MotionValue } from "motion/react";

export default function Washes({ progress }: { progress: MotionValue<number> }) {
  const vignette = useTransform(progress, [0, 0.4, 0.55], [0.45, 0.3, 0]);
  const wash = useTransform(progress, [0.46, 0.57, 0.82, 0.93], [0, 0.12, 0.2, 0.88]);
  return (
    <div className="pointer-events-none fixed inset-0 z-10">
      <motion.div
        style={{ opacity: vignette }}
        className="absolute inset-0 [box-shadow:inset_0_0_180px_60px_rgba(0,0,0,0.9)]"
      />
      <motion.div style={{ opacity: wash }} className="absolute inset-0 bg-paper" />
    </div>
  );
}
