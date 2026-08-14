"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import { COPY } from "@/data/copy";
import { siteConfig } from "@/config/site";

export default function ContactOverlay({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.88, 0.94], [0, 1]);
  const y = useTransform(progress, [0.88, 0.95], [40, 0]);
  const pointerEvents = useTransform(progress, (p) => (p > 0.91 ? ("auto" as const) : ("none" as const)));
  return (
    <motion.div
      style={{ opacity, pointerEvents }}
      className="fixed inset-0 z-30 flex flex-col items-center justify-center px-6 text-ink"
    >
      <motion.div style={{ y }} className="w-full max-w-md text-center">
        <h2 className="text-3xl font-semibold tracking-tight">{COPY.contact.title}</h2>
        <p className="mt-2 text-sm text-ink/60">{COPY.contact.intro}</p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-8 inline-block rounded-full bg-ink px-14 py-5 text-lg font-medium tracking-wide text-paper transition-transform duration-200 hover:scale-[1.03]"
        >
          {COPY.contact.cta}
        </a>
        <p className="mt-4 text-xs text-ink/50">{siteConfig.email}</p>
      </motion.div>
      <p className="absolute bottom-5 text-[10px] text-ink/40">{COPY.footer}</p>
    </motion.div>
  );
}
