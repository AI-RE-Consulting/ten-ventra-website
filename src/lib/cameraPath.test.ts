import { describe, it, expect } from "vitest";
import {
  cameraAt,
  lerpLng,
  nextSpinOffset,
  DEFAULT_CAMERA_PATH,
  type CameraKeyframe,
} from "@/lib/cameraPath";

const simple: CameraKeyframe[] = [
  { at: 0, center: [0, 0], zoom: 2, bearing: 0, pitch: 0 },
  { at: 1, center: [10, 20], zoom: 12, bearing: 40, pitch: 60, ease: "linear" },
];

describe("cameraAt", () => {
  it("returns exact first/last poses at 0 and 1, clamping outside", () => {
    expect(cameraAt(0, simple)).toEqual({ center: [0, 0], zoom: 2, bearing: 0, pitch: 0 });
    expect(cameraAt(1, simple)).toEqual({ center: [10, 20], zoom: 12, bearing: 40, pitch: 60 });
    expect(cameraAt(-0.5, simple)).toEqual(cameraAt(0, simple));
    expect(cameraAt(1.5, simple)).toEqual(cameraAt(1, simple));
  });

  it("interpolates zoom/bearing/pitch linearly mid-segment when ease is linear", () => {
    const p = cameraAt(0.5, simple);
    expect(p.zoom).toBeCloseTo(7, 6);
    expect(p.bearing).toBeCloseTo(20, 6);
    expect(p.pitch).toBeCloseTo(30, 6);
  });

  it("weights the pan by zoom mid-segment (van Wijk-style lock-on)", () => {
    // za=2, zb=12: pan fraction at t=0.5 is (1-2^-5)/(1-2^-10)
    const tc = (1 - 2 ** -5) / (1 - 2 ** -10);
    const p = cameraAt(0.5, simple);
    expect(p.center[0]).toBeCloseTo(10 * tc, 6);
    expect(p.center[1]).toBeCloseTo(20 * tc, 6);
  });

  it("pans linearly when zoom is constant across the segment", () => {
    const flat: CameraKeyframe[] = [
      { at: 0, center: [0, 0], zoom: 5, bearing: 0, pitch: 0 },
      { at: 1, center: [10, 20], zoom: 5, bearing: 0, pitch: 0, ease: "linear" },
    ];
    const p = cameraAt(0.5, flat);
    expect(p.center[0]).toBeCloseTo(5, 6);
    expect(p.center[1]).toBeCloseTo(10, 6);
  });

  it("locks onto the target early while zooming in", () => {
    // By 60% through a deep zoom-in, the pan is essentially complete.
    const p = cameraAt(0.6, simple);
    expect(p.center[0] / 10).toBeGreaterThan(0.95);
  });

  it("stays locked on the origin early while zooming out", () => {
    const out: CameraKeyframe[] = [
      { at: 0, center: [0, 0], zoom: 12, bearing: 0, pitch: 0 },
      { at: 1, center: [10, 20], zoom: 2, bearing: 0, pitch: 0, ease: "linear" },
    ];
    // 30% into a zoom-out, the camera has barely begun sliding away.
    const p = cameraAt(0.3, out);
    expect(p.center[0] / 10).toBeLessThan(0.05);
  });

  it("holds pose across identical keyframes (rest holds)", () => {
    const hold: CameraKeyframe[] = [
      { at: 0, center: [-118, 34], zoom: 12, bearing: -12, pitch: 48 },
      { at: 0.1, center: [-118, 34], zoom: 12, bearing: -12, pitch: 48 },
    ];
    expect(cameraAt(0.05, hold).zoom).toBe(12);
  });
});

describe("lerpLng", () => {
  it("takes the short way across the antimeridian", () => {
    expect(lerpLng(170, -170, 0.5)).toBeCloseTo(180, 6);
    expect(lerpLng(-170, 170, 0.5)).toBeCloseTo(-180, 6);
    expect(lerpLng(-160, -98, 0.5)).toBeCloseTo(-129, 6);
  });
});

describe("DEFAULT_CAMERA_PATH", () => {
  it("has ascending progress stamps from 0 to 1", () => {
    expect(DEFAULT_CAMERA_PATH[0].at).toBe(0);
    expect(DEFAULT_CAMERA_PATH[DEFAULT_CAMERA_PATH.length - 1].at).toBe(1);
    for (let i = 1; i < DEFAULT_CAMERA_PATH.length; i++) {
      expect(DEFAULT_CAMERA_PATH[i].at).toBeGreaterThan(DEFAULT_CAMERA_PATH[i - 1].at);
    }
  });

  it("never exceeds zoom 12.5 (spec: no identifiable single building)", () => {
    for (const k of DEFAULT_CAMERA_PATH) expect(k.zoom).toBeLessThanOrEqual(12.5);
  });

  it("rests match the spec choreography", () => {
    expect(cameraAt(0.34).zoom).toBeGreaterThan(11); // LA settled
    expect(cameraAt(0.66).zoom).toBeGreaterThan(11); // Phoenix settled
    expect(cameraAt(0.53).zoom).toBeLessThan(7); // traverse apex is pulled out
    expect(cameraAt(1).zoom).toBeLessThan(3); // contact bookend is a globe
  });
});

describe("nextSpinOffset", () => {
  it("accumulates while at the landing rest", () => {
    expect(nextSpinOffset(0, 0, 1000)).toBeGreaterThan(0);
  });

  it("unwinds small offsets backward toward 0 (imperceptible correction)", () => {
    const d = nextSpinOffset(10, 0.5, 16.67);
    expect(d).toBeLessThan(10);
    expect(d).toBeGreaterThan(0);
  });

  it("unwinds backward when under half a revolution (shortest path)", () => {
    const d = nextSpinOffset(90, 0.5, 16.67);
    expect(d).toBeLessThan(90);
    expect(d).toBeGreaterThan(0);
  });

  it("continues forward when past half a revolution (shortest path)", () => {
    let spin = 200;
    let prev = spin;
    for (let i = 0; i < 2000 && spin !== 0; i++) {
      spin = nextSpinOffset(spin, 0.5, 16.67);
      if (spin !== 0) {
        expect(spin).toBeGreaterThan(prev); // always forward, never rewinding
        expect(spin).toBeLessThanOrEqual(360);
        prev = spin;
      }
    }
    expect(spin).toBe(0); // completes the revolution (360 ≡ 0)
  });

  it("targets the nearest wrap for multi-revolution offsets", () => {
    const d = nextSpinOffset(400, 0.5, 16.67); // nearest wrap is 360 → backward
    expect(d).toBeLessThan(400);
    expect(d).toBeGreaterThan(360);
  });

  it("snaps to exactly 0 when tiny", () => {
    expect(nextSpinOffset(0.005, 0.5, 16.67)).toBe(0);
  });

  it("stays exactly 0 once released", () => {
    expect(nextSpinOffset(0, 0.5, 16.67)).toBe(0);
  });
});
