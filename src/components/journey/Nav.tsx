"use client";

import Image from "next/image";
import { motion, useTransform, type MotionValue } from "motion/react";

export default function Nav({
  progress,
  onContact,
}: {
  progress: MotionValue<number>;
  onContact: () => void;
}) {
  const color = useTransform(progress, [0.5, 0.6], ["#f2efe7", "#16140f"]);
  const borderColor = useTransform(progress, [0.5, 0.6], ["rgba(242,239,231,0.35)", "rgba(22,20,15,0.35)"]);
  const whiteOpacity = useTransform(progress, [0.5, 0.6], [1, 0]);
  const blackOpacity = useTransform(progress, [0.5, 0.6], [0, 1]);
  return (
    <motion.nav
      style={{ color }}
      className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-5 md:px-10"
    >
      <span className="relative block">
        <motion.span style={{ opacity: whiteOpacity }} className="block">
          <Image src="/logo-white.png" alt="Ten Ventra" width={144} height={32} priority className="h-8 w-auto" />
        </motion.span>
        <motion.span style={{ opacity: blackOpacity }} className="absolute inset-0" aria-hidden>
          <Image src="/logo-black.png" alt="" width={144} height={32} className="h-8 w-auto" />
        </motion.span>
      </span>
      <motion.button
        type="button"
        onClick={onContact}
        style={{ borderColor }}
        className="cursor-pointer rounded-full border px-4 py-1.5 text-xs font-medium tracking-widest uppercase"
      >
        Get in touch
      </motion.button>
    </motion.nav>
  );
}
