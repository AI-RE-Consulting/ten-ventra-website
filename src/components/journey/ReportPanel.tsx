"use client";

import type { Property } from "@/data/properties";

export default function ReportPanel({
  property,
  theme,
  onClose,
}: {
  property: Property;
  theme: "dark" | "light";
  onClose: () => void;
}) {
  const dark = theme === "dark";
  if (!property.report) return null;
  return (
    <div
      className={`pointer-events-auto absolute top-[88px] right-6 bottom-6 left-[344px] z-10 flex flex-col overflow-hidden rounded-2xl border backdrop-blur-md ${
        dark ? "border-white/15 bg-black/60 text-paper" : "border-black/10 bg-white/75 text-ink shadow-xl"
      } max-md:inset-x-3 max-md:top-20 max-md:bottom-3 max-md:left-3 max-md:z-30`}
    >
      <div
        className={`flex items-center justify-between border-b px-4 py-3 ${
          dark ? "border-white/10" : "border-black/10"
        }`}
      >
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold">{property.address}</p>
          <p className={`text-[10px] tracking-[0.14em] uppercase ${dark ? "text-paper/50" : "text-ink/50"}`}>
            ADU feasibility report
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close report"
          className={`ml-3 flex h-7 w-7 flex-none cursor-pointer items-center justify-center rounded-full text-sm ${
            dark ? "bg-white/10 hover:bg-white/20" : "bg-black/5 hover:bg-black/10"
          }`}
        >
          ×
        </button>
      </div>
      <div className="min-h-0 flex-1 bg-[#faf9f7] p-3">
        {/* eslint-disable-next-line @next/next/no-img-element -- static local SVG, no optimization needed */}
        <img
          src={property.report.src}
          alt={`ADU feasibility report for ${property.address}`}
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
