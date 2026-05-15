"use client";

import Link from "next/link";
import { Database, Sparkles, Users, type LucideIcon } from "lucide-react";

const DISPLAY = "var(--font-space-grotesk), system-ui, sans-serif";
const BODY = "var(--font-fustat), system-ui, sans-serif";

const NAVY = "#0F172A";
const NAVY_LIGHT = "#152639";
const RED = "#930002";

type Pillar = {
  number: string;
  name: string;
  body: string;
  Icon: LucideIcon;
};

const PILLARS: Pillar[] = [
  {
    number: "01",
    name: "Data",
    body: "Proprietary signals from sources others don't have, tuned to your buy box. The signal you'd build in-house, without the build.",
    Icon: Database,
  },
  {
    number: "02",
    name: "Relationships",
    body: "We run the broker and cold-caller bench for you. Cold calls, warm intros, off-market sourcing — first-look deals land on your desk.",
    Icon: Users,
  },
  {
    number: "03",
    name: "Intelligence",
    body: "An AI built into the platform, fluent in your buy box. Talk it through; let it work.",
    Icon: Sparkles,
  },
];

function CardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-2xl p-8 overflow-hidden">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
      <div className="relative space-y-5">{children}</div>
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-3xl font-medium tracking-tight text-white"
      style={{ fontFamily: DISPLAY }}
    >
      {children}
    </h3>
  );
}

function CardBody({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-sm md:text-base text-white/65 leading-relaxed"
      style={{ fontFamily: BODY }}
    >
      {children}
    </p>
  );
}

function ArrowChip() {
  return (
    <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 text-xs">
      ↗
    </span>
  );
}

/* ── Option A: Icon only ─────────────────────────────────────────────────── */
function VariantA({ p }: { p: Pillar }) {
  const { Icon } = p;
  return (
    <CardShell>
      <div className="flex items-center justify-between">
        <span className="w-11 h-11 rounded-xl border border-white/15 bg-white/[0.06] flex items-center justify-center">
          <Icon className="w-5 h-5 text-white/85" strokeWidth={1.5} />
        </span>
        <ArrowChip />
      </div>
      <CardTitle>{p.name}</CardTitle>
      <CardBody>{p.body}</CardBody>
    </CardShell>
  );
}

/* ── Option B: Watermark numeral ─────────────────────────────────────────── */
function VariantB({ p }: { p: Pillar }) {
  return (
    <CardShell>
      <span
        aria-hidden
        className="absolute top-4 right-5 text-[7rem] leading-none font-medium text-white/[0.06] select-none pointer-events-none"
        style={{ fontFamily: DISPLAY }}
      >
        {p.number}
      </span>
      <div className="flex items-center justify-between relative">
        <span
          className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/50"
          style={{ fontFamily: BODY }}
        >
          Pillar {p.number}
        </span>
        <ArrowChip />
      </div>
      <CardTitle>{p.name}</CardTitle>
      <CardBody>{p.body}</CardBody>
    </CardShell>
  );
}

/* ── Option C: Icon + tiny numeral chip ──────────────────────────────────── */
function VariantC({ p }: { p: Pillar }) {
  const { Icon } = p;
  return (
    <CardShell>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-11 h-11 rounded-xl border border-white/15 bg-white/[0.06] flex items-center justify-center">
            <Icon className="w-5 h-5 text-white/85" strokeWidth={1.5} />
          </span>
          <span
            className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/45 px-2 py-1 rounded-md border border-white/10 bg-white/[0.03]"
            style={{ fontFamily: BODY }}
          >
            {p.number}
          </span>
        </div>
        <ArrowChip />
      </div>
      <CardTitle>{p.name}</CardTitle>
      <CardBody>{p.body}</CardBody>
    </CardShell>
  );
}

type VariantMeta = {
  letter: string;
  label: string;
  blurb: string;
  Component: (props: { p: Pillar }) => React.ReactNode;
};

const VARIANTS: VariantMeta[] = [
  {
    letter: "A",
    label: "Icon only",
    blurb:
      "Drops the numerals entirely. Each pillar is identified by a single icon in a subtle glass tile. Cleanest, most modern.",
    Component: VariantA,
  },
  {
    letter: "B",
    label: "Watermark numeral",
    blurb:
      "Keeps the numbering as a decorative element — a large, faint number sits behind the card content. Reads as design, not data.",
    Component: VariantB,
  },
  {
    letter: "C",
    label: "Icon + numeral chip",
    blurb:
      "Icon leads, with the number as a small monospace chip beside it. Communicates both identity and sequence without leaning on red.",
    Component: VariantC,
  },
];

export default function PillarStylesPage() {
  return (
    <main
      className="min-h-screen text-white"
      style={{
        background: `linear-gradient(to bottom, ${NAVY} 0%, ${NAVY_LIGHT} 100%)`,
        fontFamily: BODY,
      }}
    >
      <header className="border-b border-white/[0.08] backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <Link
            href="/v4"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            ← Back to /v4
          </Link>
          <span
            className="text-sm font-medium tracking-tight"
            style={{ fontFamily: DISPLAY }}
          >
            Pillar header treatments
          </span>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-8 py-20 space-y-24">
        <div className="max-w-2xl">
          <p
            className="text-xs uppercase tracking-[0.25em] text-white/50 mb-4"
            style={{ fontFamily: BODY }}
          >
            Approach — Pillar header
          </p>
          <h1
            className="text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-tight"
            style={{ fontFamily: DISPLAY }}
          >
            The deep red{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fca5a5, #930002)",
              }}
            >
              01 / 02 / 03
            </span>{" "}
            on navy is hard to read. Pick a replacement.
          </h1>
          <p className="text-white/65 mt-5 max-w-xl">
            Three treatments below. Same cards, same copy — only the header
            element changes. The red headline above shows the current contrast
            problem.
          </p>
        </div>

        {VARIANTS.map(({ letter, label, blurb, Component }) => (
          <div key={letter} className="space-y-6">
            <div className="flex items-baseline gap-4 border-b border-white/10 pb-4">
              <span
                className="text-sm font-mono text-white/40"
                style={{ fontFamily: BODY }}
              >
                Option {letter}
              </span>
              <h2
                className="text-2xl font-medium tracking-tight"
                style={{ fontFamily: DISPLAY }}
              >
                {label}
              </h2>
              <p className="text-white/55 text-sm flex-1">{blurb}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PILLARS.map((p) => (
                <Component key={p.number} p={p} />
              ))}
            </div>
          </div>
        ))}

        {/* Reference: current treatment for comparison */}
        <div className="space-y-6">
          <div className="flex items-baseline gap-4 border-b border-white/10 pb-4">
            <span
              className="text-sm font-mono text-white/40"
              style={{ fontFamily: BODY }}
            >
              Current
            </span>
            <h2
              className="text-2xl font-medium tracking-tight"
              style={{ fontFamily: DISPLAY }}
            >
              What's live now
            </h2>
            <p className="text-white/55 text-sm flex-1">
              For comparison — red mono numeral, no icon. This is what we're
              replacing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((p) => (
              <CardShell key={p.number}>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs" style={{ color: RED }}>
                    {p.number}
                  </span>
                  <ArrowChip />
                </div>
                <CardTitle>{p.name}</CardTitle>
                <CardBody>{p.body}</CardBody>
              </CardShell>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
