import { easings, type EasingName } from "@/lib/easing";

export interface CameraPose {
  center: [number, number]; // [lng, lat]
  zoom: number;
  bearing: number;
  pitch: number;
}

export interface CameraKeyframe extends CameraPose {
  at: number; // progress 0..1
  ease?: EasingName; // easing of the segment ENDING at this keyframe
}

// Choreography from the spec (docs/superpowers/specs/2026-08-09-scroll-journey-design.md §5).
// Rests: 0 landing · 0.34 LA · 0.66 Phoenix · 1 contact. Zoom hard cap: 12.5.
// The pre-LA stretch is deliberately tight: visitors should reach the
// off-market chapter quickly (coworker feedback, 2026-08-11).
export const DEFAULT_CAMERA_PATH: CameraKeyframe[] = [
  { at: 0.0, center: [-145, 20], zoom: 1.4, bearing: 0, pitch: 0 },
  { at: 0.12, center: [-145, 20], zoom: 1.4, bearing: 0, pitch: 0 },
  { at: 0.2, center: [-98, 38], zoom: 3.3, bearing: 0, pitch: 0, ease: "inOutSine" },
  { at: 0.27, center: [-119.4, 36.2], zoom: 6.3, bearing: 0, pitch: 18, ease: "inOutCubic" },
  { at: 0.34, center: [-118.335, 34.035], zoom: 12.4, bearing: -12, pitch: 48, ease: "outCubic" },
  { at: 0.45, center: [-118.335, 34.035], zoom: 12.4, bearing: -12, pitch: 48 },
  { at: 0.53, center: [-115.3, 33.8], zoom: 5.2, bearing: 0, pitch: 0, ease: "inOutSine" },
  { at: 0.66, center: [-112.06, 33.49], zoom: 12.3, bearing: 8, pitch: 45, ease: "outCubic" },
  { at: 0.76, center: [-112.06, 33.49], zoom: 12.3, bearing: 8, pitch: 45 },
  { at: 0.84, center: [-105, 30], zoom: 2.4, bearing: 0, pitch: 0, ease: "inOutSine" },
  { at: 1.0, center: [-100, 24], zoom: 1.7, bearing: 0, pitch: 0, ease: "outCubic" },
];

export function lerpLng(a: number, b: number, t: number): number {
  const delta = ((b - a + 540) % 360) - 180;
  return a + delta * t;
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// Zoom-weighted pan progress (van Wijk-style): keeps on-screen lateral speed
// steady so the camera stays visually locked on its target. Zooming in, the
// pan front-loads while the view is still wide and the final approach is a
// straight-down zoom; zooming out, the camera lifts straight up first and
// slides away only once wide.
function panT(t: number, za: number, zb: number): number {
  const dz = zb - za;
  if (Math.abs(dz) < 0.5) return t;
  return (1 - Math.pow(2, -dz * t)) / (1 - Math.pow(2, -dz));
}

export function cameraAt(progress: number, path: CameraKeyframe[] = DEFAULT_CAMERA_PATH): CameraPose {
  const p = Math.min(1, Math.max(0, progress));
  const first = path[0];
  const last = path[path.length - 1];
  if (p <= first.at) {
    return { center: [...first.center], zoom: first.zoom, bearing: first.bearing, pitch: first.pitch };
  }
  if (p >= last.at) {
    return { center: [...last.center], zoom: last.zoom, bearing: last.bearing, pitch: last.pitch };
  }
  let i = 0;
  while (path[i + 1].at < p) i++;
  const a = path[i];
  const b = path[i + 1];
  const raw = (p - a.at) / (b.at - a.at);
  const t = easings[b.ease ?? "inOutCubic"](raw);
  const tc = panT(t, a.zoom, b.zoom);
  return {
    center: [lerpLng(a.center[0], b.center[0], tc), lerp(a.center[1], b.center[1], tc)],
    zoom: lerp(a.zoom, b.zoom, t),
    bearing: lerp(a.bearing, b.bearing, t),
    pitch: lerp(a.pitch, b.pitch, t),
  };
}

const SPIN_DEG_PER_SEC = 1.6;
const SPIN_ZONE = 0.02; // progress below which the idle spin runs
const SPIN_RELEASE_RATE = 0.97; // per-16.67ms exponential approach to the target

export function nextSpinOffset(current: number, progress: number, dtMs: number): number {
  if (progress < SPIN_ZONE) return current + (dtMs / 1000) * SPIN_DEG_PER_SEC;
  if (current === 0) return 0;
  // Shortest-path release: past half a revolution the globe keeps turning
  // forward to the nearest wrap (360 ≡ 0); under half it unwinds backward.
  const target = 360 * Math.round(current / 360);
  const eased = target + (current - target) * Math.pow(SPIN_RELEASE_RATE, dtMs / 16.67);
  return Math.abs(eased - target) < 0.05 ? 0 : eased;
}
