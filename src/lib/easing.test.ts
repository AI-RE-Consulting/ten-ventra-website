import { describe, it, expect } from "vitest";
import { easings, type EasingName } from "@/lib/easing";

const names: EasingName[] = ["linear", "inOutCubic", "outCubic", "inOutSine", "outExpo"];

describe("easings", () => {
  it("all map 0→0 and 1→1", () => {
    for (const n of names) {
      expect(easings[n](0)).toBeCloseTo(0, 6);
      expect(easings[n](1)).toBeCloseTo(1, 6);
    }
  });

  it("are monotonically non-decreasing on [0,1]", () => {
    for (const n of names) {
      let prev = -Infinity;
      for (let i = 0; i <= 100; i++) {
        const v = easings[n](i / 100);
        expect(v).toBeGreaterThanOrEqual(prev - 1e-9);
        prev = v;
      }
    }
  });

  it("linear is identity at midpoint, inOutCubic is symmetric", () => {
    expect(easings.linear(0.5)).toBeCloseTo(0.5, 6);
    expect(easings.inOutCubic(0.5)).toBeCloseTo(0.5, 6);
    expect(easings.inOutCubic(0.25) + easings.inOutCubic(0.75)).toBeCloseTo(1, 6);
  });
});
