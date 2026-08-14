"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useTransform, type MotionValue } from "motion/react";
import { PROPERTIES, OFF_FILTERS, ON_FILTERS, type Property } from "@/data/properties";
import { COPY } from "@/data/copy";
import ChapterRail, { rankProperties } from "./ChapterRail";
import PinLayer, { type PinLayerHandle } from "./PinLayer";
import ReportPanel from "./ReportPanel";

const CONFIG = {
  off: {
    theme: "dark" as const,
    fade: [0.285, 0.315, 0.43, 0.47] as [number, number, number, number],
    activeSpan: [0.3, 0.45] as const,
    title: COPY.offMarket.title,
    sub: COPY.offMarket.sub,
    filters: OFF_FILTERS,
    expandedRank: 1,
  },
  on: {
    theme: "light" as const,
    fade: [0.615, 0.645, 0.745, 0.79] as [number, number, number, number],
    activeSpan: [0.63, 0.775] as const,
    title: COPY.onMarket.title,
    sub: COPY.onMarket.sub,
    filters: ON_FILTERS,
    expandedRank: 1,
  },
};

export default function ChapterOverlay({
  progress,
  kind,
  pinsRef,
}: {
  progress: MotionValue<number>;
  kind: "off" | "on";
  pinsRef: React.Ref<PinLayerHandle>;
}) {
  const cfg = CONFIG[kind];
  const opacity = useTransform(progress, cfg.fade, [0, 1, 1, 0]);
  const [active, setActive] = useState(false);
  const [reportOf, setReportOf] = useState<Property | null>(null);
  useMotionValueEvent(progress, "change", (p) => {
    const next = p > cfg.activeSpan[0] && p < cfg.activeSpan[1];
    setActive(next);
    if (!next) setReportOf(null);
  });
  const properties = PROPERTIES.filter((p) => p.kind === kind);
  const [selectedId, setSelectedId] = useState(
    () => rankProperties(properties)[cfg.expandedRank - 1]?.id,
  );
  const handleSelect = (id: string) => {
    setSelectedId(id);
    setReportOf(null);
  };
  return (
    <motion.div style={{ opacity }} className="pointer-events-none fixed inset-0 z-20">
      <PinLayer
        kind={kind}
        active={active}
        selectedId={selectedId}
        onSelect={handleSelect}
        ref={pinsRef}
      />
      <ChapterRail
        theme={cfg.theme}
        title={cfg.title}
        sub={cfg.sub}
        chips={cfg.filters}
        properties={properties}
        active={active}
        initialRank={cfg.expandedRank}
        selectedId={selectedId}
        onSelectedChange={handleSelect}
        onViewReport={setReportOf}
      />
      {reportOf && (
        <ReportPanel property={reportOf} theme={cfg.theme} onClose={() => setReportOf(null)} />
      )}
    </motion.div>
  );
}
