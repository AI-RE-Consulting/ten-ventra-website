"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { cameraAt } from "@/lib/cameraPath";
import type { FallbackReason } from "@/lib/fallback";

interface MapCanvasProps {
  onReady: (map: mapboxgl.Map) => void;
  onFail: (reason: FallbackReason) => void;
}

export default function MapCanvas({ onReady, onFail }: MapCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const callbacks = useRef({ onReady, onFail });

  useEffect(() => {
    callbacks.current = { onReady, onFail };
  });

  useEffect(() => {
    if (!containerRef.current) return;
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";
    mapboxgl.prewarm();

    const start = cameraAt(0);
    let map: mapboxgl.Map;
    try {
      map = new mapboxgl.Map({
        container: containerRef.current,
        style: "mapbox://styles/mapbox/satellite-v9",
        projection: "globe",
        interactive: false,
        center: start.center,
        zoom: start.zoom,
        bearing: start.bearing,
        pitch: start.pitch,
        maxTileCacheSize: 4096,
        attributionControl: false,
      });
      // Mapbox ToS requires attribution; the compact control collapses it to
      // an expandable (i) so it stays compliant without the full text bar.
      map.addControl(new mapboxgl.AttributionControl({ compact: true }), "bottom-right");
    } catch {
      callbacks.current.onFail("map-error");
      return;
    }

    let loaded = false;
    // Hidden tabs freeze rAF, so the map can't render; keep re-arming the
    // watchdog until the tab is actually visible for a full window.
    let timeout = 0;
    const armWatchdog = () => {
      timeout = window.setTimeout(() => {
        if (loaded) return;
        if (document.hidden) {
          armWatchdog();
          return;
        }
        callbacks.current.onFail("map-timeout");
      }, 12000);
    };
    armWatchdog();

    map.on("style.load", () => {
      map.setFog({
        "horizon-blend": 0.02,
        color: "rgb(186, 210, 235)",
        "high-color": "rgb(36, 92, 223)",
        "space-color": "#000000",
        "star-intensity": 0.12,
      });
      map.setPaintProperty("satellite", "raster-fade-duration", 0);
    });

    map.on("error", (e) => {
      const err = e.error as { status?: number; message?: string } | undefined;
      if (err?.status === 401 || /unauthorized|access token/i.test(err?.message ?? "")) {
        callbacks.current.onFail("map-error");
      }
    });

    map.once("load", () => {
      loaded = true;
      window.clearTimeout(timeout);
      const container = map.getContainer();
      container.style.transition = "opacity 700ms ease";
      container.style.opacity = "1";
      callbacks.current.onReady(map);
    });

    return () => {
      window.clearTimeout(timeout);
      map.remove();
    };
  }, []);

  return (
    <div className="fixed inset-0" aria-hidden>
      <div ref={containerRef} className="h-full w-full" style={{ opacity: 0 }} />
    </div>
  );
}
