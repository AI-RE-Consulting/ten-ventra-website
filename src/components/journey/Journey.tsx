"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValue } from "motion/react";
import type mapboxgl from "mapbox-gl";
import Lenis from "lenis";
import { cameraAt, nextSpinOffset } from "@/lib/cameraPath";
import { snapTarget } from "@/lib/chapters";
import { createSettleDetector } from "@/lib/settle";
import { easings } from "@/lib/easing";
import { detectFallbackReason, supportsWebGL, type FallbackReason } from "@/lib/fallback";
import { COPY } from "@/data/copy";
import MapCanvas from "./MapCanvas";
import Washes from "./Washes";
import Nav from "./Nav";
import ChapterDots from "./ChapterDots";
import Landing from "./Landing";
import TransitLine from "./TransitLine";
import ChapterOverlay from "./ChapterOverlay";
import ContactOverlay from "./ContactOverlay";
import StaticFallback from "./StaticFallback";
import type { PinLayerHandle } from "./PinLayer";

const TRACK_VH_DESKTOP = 1200;
const TRACK_VH_MOBILE = 920;

export default function Journey() {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const offPinsRef = useRef<PinLayerHandle | null>(null);
  const onPinsRef = useRef<PinLayerHandle | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const isMobileRef = useRef(false);
  const progress = useMotionValue(0);
  const [fallback, setFallback] = useState<FallbackReason | null | undefined>(undefined);
  const [trackVh, setTrackVh] = useState(TRACK_VH_DESKTOP);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => {
      isMobileRef.current = mq.matches;
      setTrackVh(mq.matches ? TRACK_VH_MOBILE : TRACK_VH_DESKTOP);
    };
    apply();
    mq.addEventListener("change", apply);

    const detect = () => {
      setFallback(
        detectFallbackReason({
          hasToken: Boolean(process.env.NEXT_PUBLIC_MAPBOX_TOKEN),
          hasWebGL: supportsWebGL(),
          reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        }),
      );
    };
    detect();

    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (fallback !== null) return;
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.085 });
    lenisRef.current = lenis;
    const settled = createSettleDetector();
    let spin = 0;
    let lastTime = performance.now();
    let snapping = false;
    let snapDeadline = 0;
    let raf = 0;

    const frame = (time: number) => {
      lenis.raf(time);
      const dt = Math.min(100, time - lastTime);
      lastTime = time;
      const p = lenis.limit > 0 ? Math.min(1, Math.max(0, lenis.scroll / lenis.limit)) : 0;
      progress.set(p);

      const map = mapRef.current;
      if (map) {
        spin = nextSpinOffset(spin, p, dt);
        const pose = cameraAt(p);
        map.jumpTo({
          center: [pose.center[0] + spin, pose.center[1]],
          zoom: pose.zoom,
          bearing: pose.bearing,
          pitch: pose.pitch * (isMobileRef.current ? 0.6 : 1),
        });
        if (p > 0.22 && p < 0.51) offPinsRef.current?.update(map);
        if (p > 0.53 && p < 0.82) onPinsRef.current?.update(map);
      }

      if (snapping && time > snapDeadline) snapping = false;

      if (!snapping && settled(p)) {
        const target = snapTarget(p);
        if (target !== null) {
          snapping = true;
          snapDeadline = time + 1400; // snap duration 1.15s + margin
          lenis.scrollTo(target * lenis.limit, {
            duration: 1.15,
            easing: easings.outExpo,
            onComplete: () => {
              snapping = false;
            },
          });
        }
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [fallback, progress]);

  const scrollToProgress = (p: number) => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    lenis.scrollTo(p * lenis.limit, { duration: 1.6, easing: easings.outExpo });
  };

  if (fallback === undefined) return <div className="fixed inset-0 bg-ink" />;
  if (fallback !== null) return <StaticFallback />;

  return (
    <>
      <MapCanvas
        onReady={(map) => {
          mapRef.current = map;
        }}
        onFail={setFallback}
      />
      <Washes progress={progress} />
      <Landing progress={progress} />
      <ChapterOverlay progress={progress} kind="off" pinsRef={offPinsRef} />
      <ChapterOverlay progress={progress} kind="on" pinsRef={onPinsRef} />
      {/* Hard gap rule: every line fully exits ≥0.025 of progress before its
          chapter overlay starts fading in, and starts ≥0.01 after the previous
          overlay is fully out — no text is ever on screen with chapter UI. */}
      <TransitLine progress={progress} text={COPY.dive.line} range={[0.115, 0.14, 0.162, 0.182]} />
      <TransitLine
        progress={progress}
        text={COPY.offMarket.approach}
        sub={COPY.offMarket.approachSub}
        range={[0.19, 0.215, 0.24, 0.26]}
      />
      <TransitLine
        progress={progress}
        text={COPY.onMarket.approach}
        sub={COPY.onMarket.approachSub}
        range={[0.53, 0.555, 0.577, 0.595]}
        theme="light"
      />
      <TransitLine
        progress={progress}
        text={COPY.ascend.line}
        range={[0.8, 0.82, 0.85, 0.87]}
        theme="light"
      />
      <ContactOverlay progress={progress} />
      <Nav progress={progress} onContact={() => scrollToProgress(1)} />
      <ChapterDots progress={progress} onSelect={scrollToProgress} />
      <div style={{ height: `${trackVh}vh` }} aria-hidden />
    </>
  );
}
