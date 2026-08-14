"use client";

import { useState } from "react";
import { useMotionValueEvent, type MotionValue } from "motion/react";
import { CHAPTERS, nearestRestIndex, themeAt } from "@/lib/chapters";

export default function ChapterDots({
  progress,
  onSelect,
}: {
  progress: MotionValue<number>;
  onSelect: (rest: number) => void;
}) {
  const [active, setActive] = useState(0);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useMotionValueEvent(progress, "change", (p) => {
    setActive(nearestRestIndex(p));
    setTheme(themeAt(p));
  });
  const base = theme === "dark" ? "bg-paper" : "bg-ink";
  return (
    <div className="fixed top-1/2 right-4 z-40 flex -translate-y-1/2 flex-col gap-3 max-md:hidden md:right-6">
      {CHAPTERS.map((c, i) => (
        <button
          key={c.id}
          type="button"
          aria-label={`Go to ${c.id}`}
          onClick={() => onSelect(c.rest)}
          className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-300 ${base} ${
            i === active ? "scale-125 opacity-90" : "opacity-30 hover:opacity-60"
          }`}
        />
      ))}
    </div>
  );
}
