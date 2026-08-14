import { describe, it, expect } from "vitest";
import { detectFallbackReason } from "@/lib/fallback";

const ok = { hasToken: true, hasWebGL: true, reducedMotion: false };

describe("detectFallbackReason", () => {
  it("returns null when everything is available", () => {
    expect(detectFallbackReason(ok)).toBeNull();
  });

  it("prioritizes reduced motion, then token, then webgl", () => {
    expect(detectFallbackReason({ ...ok, reducedMotion: true })).toBe("reduced-motion");
    expect(detectFallbackReason({ ...ok, hasToken: false })).toBe("no-token");
    expect(detectFallbackReason({ ...ok, hasWebGL: false })).toBe("no-webgl");
    expect(
      detectFallbackReason({ hasToken: false, hasWebGL: false, reducedMotion: true }),
    ).toBe("reduced-motion");
  });
});
