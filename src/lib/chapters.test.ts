import { describe, it, expect } from "vitest";
import { CHAPTERS, THEME_FLIP_AT, themeAt, nearestRestIndex, snapTarget } from "@/lib/chapters";

describe("CHAPTERS", () => {
  it("has the four spec rest points in order", () => {
    expect(CHAPTERS.map((c) => c.rest)).toEqual([0, 0.34, 0.66, 1]);
  });

  it("dark chapters precede the flip, light chapters follow it", () => {
    for (const c of CHAPTERS) {
      expect(c.theme).toBe(c.rest < THEME_FLIP_AT ? "dark" : "light");
    }
  });
});

describe("themeAt", () => {
  it("flips at THEME_FLIP_AT", () => {
    expect(themeAt(0.54)).toBe("dark");
    expect(themeAt(0.56)).toBe("light");
  });
});

describe("nearestRestIndex", () => {
  it("picks the closest rest point", () => {
    expect(nearestRestIndex(0.05)).toBe(0);
    expect(nearestRestIndex(0.3)).toBe(1);
    expect(nearestRestIndex(0.6)).toBe(2);
    expect(nearestRestIndex(0.9)).toBe(3);
  });
});

describe("snapTarget", () => {
  it("returns the rest point when within threshold", () => {
    expect(snapTarget(0.36)).toBe(0.34);
    expect(snapTarget(0.97)).toBe(1);
  });

  it("returns null when far from any rest", () => {
    expect(snapTarget(0.25)).toBeNull();
    expect(snapTarget(0.56)).toBeNull();
  });

  it("returns null when already settled on the rest (epsilon)", () => {
    expect(snapTarget(0.34)).toBeNull();
    expect(snapTarget(0.3401)).toBeNull();
  });
});
