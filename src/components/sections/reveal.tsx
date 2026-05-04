"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const Component =
    as === "li" ? motion.li : as === "section" ? motion.section : motion.div;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={variants}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </Component>
  );
}
