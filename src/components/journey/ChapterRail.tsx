"use client";

import { useEffect, useRef, useState } from "react";
import type { Property } from "@/data/properties";
import { COPY } from "@/data/copy";

export const buyBox = (p: Property) => p.scores.find((s) => s.label === "Buy-box")?.value ?? 0;
const distress = (p: Property) => p.scores.find((s) => s.label === "Distress")?.value;
export const rankProperties = (properties: Property[]) =>
  [...properties].sort((a, b) => buyBox(b) - buyBox(a));



export default function ChapterRail({
  theme,
  title,
  sub,
  chips,
  properties,
  active,
  initialRank = 1,
  selectedId: controlledSelectedId,
  onSelectedChange,
  onViewReport,
}: {
  theme: "dark" | "light";
  title: string;
  sub?: string;
  chips: { label: string; on: boolean }[];
  properties: Property[];
  active: boolean;
  initialRank?: number;
  selectedId?: string;
  onSelectedChange?: (id: string) => void;
  onViewReport?: (p: Property) => void;
}) {
  const dark = theme === "dark";
  const shown = rankProperties(properties);
  const [internalSelectedId, setInternalSelectedId] = useState(
    shown[initialRank - 1]?.id ?? shown[0]?.id,
  );
  // Controlled when the parent passes selectedId (so map-pin clicks can drive
  // the rail); uncontrolled otherwise (StaticFallback).
  const selectedId = controlledSelectedId ?? internalSelectedId;
  const select = (id: string) => {
    setInternalSelectedId(id);
    onSelectedChange?.(id);
  };
  const listRef = useRef<HTMLDivElement | null>(null);
  const expandedRef = useRef<HTMLDivElement | null>(null);
  // Keep the expanded card visible inside the list (matters on the mobile
  // sheet, where the default-expanded card can start below the fold). Scroll
  // the container directly — scrollIntoView could also scroll the document,
  // which would move the journey itself.
  useEffect(() => {
    const list = listRef.current;
    const card = expandedRef.current;
    if (!active || !list || !card) return;
    const top = card.offsetTop - list.offsetTop;
    const bottom = top + card.offsetHeight;
    if (top < list.scrollTop || bottom > list.scrollTop + list.clientHeight) {
      const target = card.offsetHeight > list.clientHeight ? top : bottom - list.clientHeight;
      list.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
    }
  }, [active, selectedId]);
  return (
    <div
      className={`absolute top-[88px] bottom-6 left-5 flex w-[304px] flex-col overflow-hidden rounded-2xl border p-4 backdrop-blur-md transition-all duration-500 md:left-6 ${
        dark ? "border-white/15 bg-black/60 text-paper" : "border-black/10 bg-white/75 text-ink shadow-xl"
      } ${active ? "pointer-events-auto translate-x-0 opacity-100" : "pointer-events-none -translate-x-4 opacity-0"} max-md:top-auto max-md:right-0 max-md:bottom-0 max-md:left-0 max-md:max-h-[58vh] max-md:w-full max-md:rounded-b-none max-md:border-x-0 max-md:border-b-0`}
    >
      <h2 className="text-lg font-semibold">{title}</h2>
      {sub && (
        <p className={`mt-1 text-[11px] leading-snug ${dark ? "text-paper/55" : "text-ink/55"}`}>
          {sub}
        </p>
      )}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {chips.map((chip, i) => (
          <span
            key={chip.label}
            style={{ transitionDelay: active ? `${120 + i * 60}ms` : "0ms" }}
            className={`rounded-full border px-2.5 py-1 text-[10.5px] font-medium transition-all duration-300 ${
              active ? "scale-100 opacity-100" : "scale-90 opacity-0"
            } ${
              chip.on
                ? dark
                  ? "border-paper bg-paper text-ink"
                  : "border-ink bg-ink text-paper"
                : dark
                  ? "border-white/25 text-paper/60"
                  : "border-black/20 text-ink/55"
            }`}
          >
            {chip.label}
          </span>
        ))}
      </div>
      <p
        className={`mt-4 border-t pt-3 text-[9.5px] font-medium tracking-[0.14em] uppercase ${
          dark ? "border-white/10 text-paper/45" : "border-black/10 text-ink/45"
        }`}
      >
        {COPY.rail.rankedSuffix}
      </p>
      <div
        ref={listRef}
        data-lenis-prevent
        className="rail-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain pt-1"
      >
        {shown.map((p, i) => {
          const d = distress(p);
          const rank = String(i + 1).padStart(2, "0");
          const isExpanded = p.id === selectedId;
          const enter = active ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0";
          const delay = { transitionDelay: active ? `${220 + Math.min(i, 5) * 70}ms` : "0ms" };
          if (isExpanded) {
            return (
              <div
                key={p.id}
                ref={expandedRef}
                style={delay}
                className={`my-1 rounded-xl border p-3 transition-all duration-300 ${enter} ${
                  dark ? "border-white/20 bg-white/[0.07]" : "border-black/15 bg-black/[0.05]"
                }`}
              >
                <div className="flex items-baseline gap-2.5">
                  <span className={`text-[10px] tabular-nums ${dark ? "text-paper/35" : "text-ink/35"}`}>
                    {rank}
                  </span>
                  <p className="min-w-0 flex-1 text-[13px] font-semibold">{p.address}</p>
                </div>
                <p className={`pl-[26px] text-[10px] ${dark ? "text-paper/50" : "text-ink/50"}`}>
                  {p.cityState}
                </p>
                <div className="mt-2 space-y-1">
                  {p.stats.map((s) => (
                    <div key={s.label} className="flex justify-between gap-3 text-[11px]">
                      <span className={dark ? "text-paper/70" : "text-ink/70"}>{s.label}</span>
                      <span className="font-medium tabular-nums">{s.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-2.5 space-y-2">
                  {p.scores.map((s) => (
                    <div key={s.label}>
                      <div
                        className={`flex justify-between text-[9px] font-medium tracking-[0.12em] uppercase ${
                          dark ? "text-paper/60" : "text-ink/60"
                        }`}
                      >
                        <span>{s.label}</span>
                        <span className="tabular-nums">{s.value}/100</span>
                      </div>
                      <div className={`mt-1 h-0.5 overflow-hidden rounded ${dark ? "bg-white/15" : "bg-black/10"}`}>
                        <div
                          className={`h-full ${dark ? "bg-paper" : "bg-ink"}`}
                          style={{ width: active ? `${s.value}%` : "0%", transition: "width 800ms 400ms ease-out" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {p.report && onViewReport && (
                  <button
                    type="button"
                    onClick={() => onViewReport?.(p)}
                    className={`mt-3 w-full cursor-pointer rounded-lg border py-2 text-[10px] font-medium tracking-wide uppercase ${
                      dark
                        ? "border-paper/40 text-paper hover:bg-white/10"
                        : "border-ink/30 text-ink hover:bg-black/5"
                    }`}
                  >
                    {p.report.cta}
                  </button>
                )}
                <button
                  type="button"
                  className={`w-full cursor-pointer rounded-lg py-2 text-[10.5px] font-medium tracking-widest uppercase ${
                    p.report ? "mt-2" : "mt-3"
                  } ${dark ? "bg-paper text-ink" : "bg-ink text-paper"}`}
                >
                  {p.kind === "off" ? COPY.rail.skipTrace : COPY.rail.viewListing}
                </button>
              </div>
            );
          }
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => select(p.id)}
              style={delay}
              className={`flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-1.5 py-2 text-left transition-all duration-300 ${enter} ${
                i > 0 ? (dark ? "border-t border-white/[0.07]" : "border-t border-black/[0.06]") : ""
              } ${dark ? "hover:bg-white/[0.05]" : "hover:bg-black/[0.04]"}`}
            >
              <span className={`text-[10px] tabular-nums ${dark ? "text-paper/35" : "text-ink/35"}`}>
                {rank}
              </span>
              <span className="block min-w-0 flex-1">
                <span className="block truncate text-[12px] leading-tight font-semibold">{p.address}</span>
                <span className={`block truncate text-[10px] ${dark ? "text-paper/45" : "text-ink/45"}`}>
                  {p.highlight}
                </span>
              </span>
              <span className="block text-right leading-tight whitespace-nowrap">
                <span className="block text-[10.5px] font-semibold">Buy-box {buyBox(p)}</span>
                {d !== undefined && (
                  <span className={`block text-[9.5px] ${dark ? "text-paper/50" : "text-ink/50"}`}>
                    Distress {d}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
