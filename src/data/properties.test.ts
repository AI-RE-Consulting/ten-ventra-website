import { describe, it, expect } from "vitest";
import { PROPERTIES } from "@/data/properties";

const LA = { lngMin: -118.45, lngMax: -118.25, latMin: 33.98, latMax: 34.1 };
const PHX = { lngMin: -112.15, lngMax: -111.98, latMin: 33.43, latMax: 33.55 };

describe("PROPERTIES", () => {
  it("has 5 off-market and 4 on-market properties", () => {
    expect(PROPERTIES.filter((p) => p.kind === "off")).toHaveLength(5);
    expect(PROPERTIES.filter((p) => p.kind === "on")).toHaveLength(4);
  });

  it("has exactly one featured property per kind", () => {
    expect(PROPERTIES.filter((p) => p.kind === "off" && p.featured)).toHaveLength(1);
    expect(PROPERTIES.filter((p) => p.kind === "on" && p.featured)).toHaveLength(1);
  });

  it("keeps every pin inside its city's bounding box", () => {
    for (const p of PROPERTIES) {
      const box = p.kind === "off" ? LA : PHX;
      expect(p.lng).toBeGreaterThanOrEqual(box.lngMin);
      expect(p.lng).toBeLessThanOrEqual(box.lngMax);
      expect(p.lat).toBeGreaterThanOrEqual(box.latMin);
      expect(p.lat).toBeLessThanOrEqual(box.latMax);
    }
  });

  it("has unique ids", () => {
    expect(new Set(PROPERTIES.map((p) => p.id)).size).toBe(PROPERTIES.length);
  });
});
