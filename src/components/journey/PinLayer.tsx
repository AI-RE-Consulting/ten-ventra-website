"use client";

import { useImperativeHandle, useMemo, useRef } from "react";
import type mapboxgl from "mapbox-gl";
import { PROPERTIES } from "@/data/properties";

export interface PinLayerHandle {
  update(map: mapboxgl.Map): void;
}

export default function PinLayer({
  kind,
  active,
  selectedId,
  onSelect,
  ref,
}: {
  kind: "off" | "on";
  active: boolean;
  selectedId?: string;
  onSelect?: (id: string) => void;
  ref: React.Ref<PinLayerHandle>;
}) {
  const items = useMemo(() => PROPERTIES.filter((p) => p.kind === kind), [kind]);
  const els = useRef<(HTMLDivElement | null)[]>([]);

  useImperativeHandle(
    ref,
    () => ({
      update(map) {
        items.forEach((prop, i) => {
          const el = els.current[i];
          if (!el) return;
          const pt = map.project([prop.lng, prop.lat]);
          el.style.transform = `translate(${pt.x}px, ${pt.y}px)`;
        });
      },
    }),
    [items],
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {items.map((prop, i) => (
        <div
          key={prop.id}
          ref={(el) => {
            els.current[i] = el;
          }}
          className="absolute top-0 left-0 will-change-transform"
        >
          <div
            style={{ transitionDelay: active ? `${100 + i * 80}ms` : "0ms" }}
            className={`-translate-x-1/2 -translate-y-1/2 transition-all duration-400 ${
              active ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            {/* Padding widens the tap target; the negative margin cancels it in
                layout so the pin's geometry (and its ping rings) stay put. */}
            <button
              type="button"
              aria-label={`View ${prop.address}`}
              onClick={() => onSelect?.(prop.id)}
              className={`-m-3 block p-3 ${
                active ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
              }`}
            >
            <span className="relative block">
              <span
                className={`block rounded-full transition-all duration-300 ${
                  prop.id === selectedId ? "h-3.5 w-3.5" : "h-2.5 w-2.5"
                } ${
                  prop.justListed
                    ? "bg-accent shadow-[0_0_0_3px_rgba(224,52,43,0.3),0_0_16px_#e0342b]"
                    : "bg-beacon shadow-[0_0_0_3px_rgba(51,225,68,0.25),0_0_16px_#33e144]"
                }`}
              />
              {prop.id === selectedId && (
                <span
                  className={`absolute -inset-[7px] rounded-full border-2 ${
                    prop.justListed ? "border-accent/90" : "border-beacon/90"
                  }`}
                />
              )}
              <span
                className={`absolute -inset-1 animate-ping rounded-full border ${
                  prop.justListed ? "border-accent/70" : "border-beacon/70"
                }`}
                style={{ animationDuration: prop.justListed ? "1.6s" : "2.6s" }}
              />
              <span
                className={`absolute -inset-1 animate-ping rounded-full border ${
                  prop.justListed ? "border-accent/70" : "border-beacon/70"
                }`}
                style={{
                  animationDuration: prop.justListed ? "1.6s" : "2.6s",
                  animationDelay: prop.justListed ? "0.8s" : "1.3s",
                }}
              />
              {prop.justListed && (
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 rounded bg-accent px-1.5 py-0.5 text-[9px] leading-none font-semibold whitespace-nowrap text-white">
                  Just listed
                </span>
              )}
            </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
