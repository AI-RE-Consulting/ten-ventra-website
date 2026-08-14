import { describe, it, expect } from "vitest";
import { createSettleDetector } from "@/lib/settle";

describe("createSettleDetector", () => {
  it("fires exactly once after N quiet frames", () => {
    const settled = createSettleDetector(3, 0.0001);
    expect(settled(0.5)).toBe(false); // first sample
    expect(settled(0.5)).toBe(false);
    expect(settled(0.5)).toBe(false);
    expect(settled(0.5)).toBe(true); // 3rd quiet frame
    expect(settled(0.5)).toBe(false); // does not re-fire
  });

  it("resets when the value moves", () => {
    const settled = createSettleDetector(2, 0.0001);
    settled(0.1);
    settled(0.1);
    expect(settled(0.2)).toBe(false); // moved — reset
    settled(0.2);
    expect(settled(0.2)).toBe(true);
  });
});
