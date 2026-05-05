"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from "framer-motion";

export type HeroCta = {
  label: string;
  href: string;
};

export type InfiniteGridHeroProps = {
  headline: string;
  subtitle: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  /** Resting opacity of the base grid layer. Default 0.06. */
  gridOpacity?: number;
  className?: string;
};

export const InfiniteGridHero = ({
  headline,
  subtitle,
  primaryCta,
  secondaryCta,
  gridOpacity = 0.06,
  className,
}: InfiniteGridHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const speedX = 0.5;
  const speedY = 0.5;

  useAnimationFrame(() => {
    const currentX = gridOffsetX.get();
    const currentY = gridOffsetY.get();
    gridOffsetX.set((currentX + speedX) % 40);
    gridOffsetY.set((currentY + speedY) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative w-full min-h-[calc(100svh-5rem)] flex flex-col items-center justify-center overflow-hidden bg-background",
        className,
      )}
    >
      <div
        className="absolute inset-0 z-0"
        style={{ opacity: gridOpacity }}
        aria-hidden="true"
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} patternId="ten-ventra-grid-base" />
      </div>
      <motion.div
        className="absolute inset-0 z-0 opacity-70"
        style={{ maskImage, WebkitMaskImage: maskImage }}
        aria-hidden="true"
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} patternId="ten-ventra-grid-spotlight" />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute right-[-20%] top-[-20%] w-[40%] h-[40%] rounded-full bg-orange-500/40 blur-[120px]" />
        <div className="absolute right-[10%] top-[-10%] w-[20%] h-[20%] rounded-full bg-primary/30 blur-[100px]" />
        <div className="absolute left-[-10%] bottom-[-20%] w-[40%] h-[40%] rounded-full bg-blue-500/40 blur-[120px]" />
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-b from-transparent to-background z-[1] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto space-y-6 pointer-events-none">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pointer-events-auto">
          <Link
            href={primaryCta.href}
            className="px-7 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all shadow-md active:scale-[0.98]"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="px-7 py-3 border border-border bg-background/60 text-foreground font-semibold rounded-md hover:bg-secondary/60 transition-all active:scale-[0.98]"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const GridPattern = ({
  offsetX,
  offsetY,
  patternId,
}: {
  offsetX: ReturnType<typeof useMotionValue<number>>;
  offsetY: ReturnType<typeof useMotionValue<number>>;
  patternId: string;
}) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id={patternId}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-muted-foreground"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};
