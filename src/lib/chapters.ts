export type ChapterId = "landing" | "offmarket" | "onmarket" | "contact";

export interface Chapter {
  id: ChapterId;
  rest: number;
  // range mirrors the chapter's on-screen fade window. The rendering source of
  // truth is ChapterOverlay's CONFIG (fade/activeSpan) and Journey's pin-update
  // gates — keep all three in sync when retuning the timeline.
  range: [number, number]; // progress span in which the chapter's UI is on screen
  theme: "dark" | "light";
}

export const CHAPTERS: Chapter[] = [
  { id: "landing", rest: 0, range: [0, 0.105], theme: "dark" },
  { id: "offmarket", rest: 0.34, range: [0.285, 0.47], theme: "dark" },
  { id: "onmarket", rest: 0.66, range: [0.615, 0.79], theme: "light" },
  { id: "contact", rest: 1, range: [0.88, 1], theme: "light" },
];

export const THEME_FLIP_AT = 0.55;

export function themeAt(progress: number): "dark" | "light" {
  return progress < THEME_FLIP_AT ? "dark" : "light";
}

export function nearestRestIndex(progress: number): number {
  let best = 0;
  let bestDist = Infinity;
  CHAPTERS.forEach((c, i) => {
    const d = Math.abs(progress - c.rest);
    if (d < bestDist) {
      bestDist = d;
      best = i;
    }
  });
  return best;
}

export function snapTarget(progress: number, threshold = 0.035, epsilon = 0.002): number | null {
  const rest = CHAPTERS[nearestRestIndex(progress)].rest;
  const dist = Math.abs(progress - rest);
  if (dist <= epsilon) return null; // already there
  return dist <= threshold ? rest : null;
}
