export type FallbackReason = "no-token" | "no-webgl" | "reduced-motion" | "map-error" | "map-timeout";

export function detectFallbackReason(env: {
  hasToken: boolean;
  hasWebGL: boolean;
  reducedMotion: boolean;
}): FallbackReason | null {
  if (env.reducedMotion) return "reduced-motion";
  if (!env.hasToken) return "no-token";
  if (!env.hasWebGL) return "no-webgl";
  return null;
}

export function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}
