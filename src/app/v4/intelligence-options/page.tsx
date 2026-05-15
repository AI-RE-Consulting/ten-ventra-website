"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const DISPLAY = "var(--font-space-grotesk), system-ui, sans-serif";
const BODY = "var(--font-fustat), system-ui, sans-serif";

const NAVY = "#0F172A";
const NAVY_LIGHT = "#152639";
const RED = "#930002";

function Editable({
  as: As = "span",
  className,
  style,
  children,
}: {
  as?: "span" | "p" | "h3";
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const Tag = As as React.ElementType;
  return (
    <Tag
      contentEditable
      suppressContentEditableWarning
      spellCheck
      className={`${className ?? ""} outline-none transition-colors rounded-sm hover:bg-white/[0.04] focus:bg-white/[0.06] focus:ring-2 focus:ring-[${RED}]/40 -mx-1 px-1`}
      style={style}
    >
      {children}
    </Tag>
  );
}

function PillarCard({
  num,
  name,
  body,
  muted = false,
}: {
  num: string;
  name: string;
  body: string;
  muted?: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-2xl p-7 overflow-hidden ${
        muted ? "opacity-90" : ""
      }`}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
      <div className="relative space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs" style={{ color: RED }}>
            {num}
          </span>
          <span className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 text-xs">
            ↗
          </span>
        </div>
        <Editable
          as="h3"
          className="text-2xl font-medium tracking-tight text-white block"
          style={{ fontFamily: DISPLAY }}
        >
          {name}
        </Editable>
        <Editable
          as="p"
          className="text-sm md:text-base text-white/70 leading-relaxed block"
          style={{ fontFamily: BODY }}
        >
          {body}
        </Editable>
      </div>
    </div>
  );
}

const INTELLIGENCE_OPTIONS = [
  {
    letter: "A",
    angle: "Your seed, verbatim",
    body: "An AI built into the platform, ready to talk. Talk it through; let it work.",
  },
  {
    letter: "B",
    angle: "Buy-box fluency",
    body: "An AI built into the platform, fluent in your buy box. Talk it through; let it work.",
  },
  {
    letter: "C",
    angle: "Seat at the table",
    body: "An AI seat at the table — on call to think and execute. Brief it like a colleague; the work runs from there.",
  },
  {
    letter: "D",
    angle: "Conversational handoff",
    body: "Built-in AI, ready when you are. Talk through the deal; the research, drafts, and follow-ups go to work.",
  },
  {
    letter: "E",
    angle: "Junior briefing, senior speed",
    body: "An AI that lives inside the platform, conversational by default. Brief it the way you'd brief a junior — watch it execute at senior speed.",
  },
  {
    letter: "F",
    angle: "Standby",
    body: "An AI built into the platform, on standby. Talk it through; the next steps run themselves.",
  },
  {
    letter: "G",
    angle: "Trained partner",
    body: "An AI partner inside the platform — trained on your portfolio, ready to act. Talk it through; let it work.",
  },
  {
    letter: "H",
    angle: "Always-on broker",
    body: "An always-on AI inside the platform. Brief it the way you would a broker; let it do what a broker would.",
  },
];

export default function IntelligenceOptionsPage() {
  return (
    <div
      className="min-h-screen text-white"
      style={{ background: NAVY, fontFamily: BODY }}
    >
      <header
        className="border-b border-white/[0.08]"
        style={{ background: "rgba(0,0,0,0.3)" }}
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link
            href="/v4"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            ← Back to v4
          </Link>
          <p className="text-xs uppercase tracking-[0.25em] text-white/40">
            v4 · intelligence copy options
          </p>
        </div>
      </header>

      <main
        className="max-w-7xl mx-auto px-8 py-16"
        style={{
          background: `linear-gradient(to bottom, ${NAVY} 0%, ${NAVY_LIGHT} 100%)`,
        }}
      >
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-4">
            Pick your third pillar
          </p>
          <h1
            className="text-4xl md:text-5xl font-medium tracking-[-0.03em] text-white leading-tight"
            style={{ fontFamily: DISPLAY }}
          >
            Eight ways to write Intelligence.
          </h1>
          <p className="text-base text-white/65 mt-5 leading-relaxed max-w-2xl">
            Your locked Data and Relationships copy sits up top for reference (still editable if you want to tweak). Below are eight angles for the Intelligence pillar, each two sentences in the same rhythm as the others.{" "}
            <span className="text-white">
              Click any text to edit it directly.
            </span>{" "}
            Tell me which one (with whatever tweaks you make) to wire into v4.
          </p>
        </div>

        {/* Locked Data + Relationships */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-5 font-mono">
            Locked &mdash; for reference
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <PillarCard
              num="01"
              name="Data"
              body="Proprietary signals from sources others don't have, tuned to your buy box. The signal you'd build in-house, without the build."
              muted
            />
            <PillarCard
              num="02"
              name="Relationships"
              body="We run the broker and cold-caller bench for you. Cold calls, warm intros, off-market sourcing — first-look deals land on your desk."
              muted
            />
          </div>
        </div>

        {/* Intelligence options */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-5 font-mono">
            Intelligence &mdash; pick one
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {INTELLIGENCE_OPTIONS.map((opt) => (
              <motion.div
                key={opt.letter}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-3 flex items-baseline gap-3">
                  <span
                    className="inline-flex items-center justify-center w-7 h-7 rounded-md text-white text-sm font-semibold shrink-0"
                    style={{ background: RED, fontFamily: DISPLAY }}
                  >
                    {opt.letter}
                  </span>
                  <p
                    className="text-sm text-white/55"
                    style={{ fontFamily: BODY }}
                  >
                    {opt.angle}
                  </p>
                </div>
                <PillarCard num="03" name="Intelligence" body={opt.body} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">
            Notes
          </p>
          <ul className="space-y-2 text-sm text-white/65 leading-relaxed">
            <li>
              • Each option is two sentences to match the rhythm of Data and
              Relationships.
            </li>
            <li>
              • Angles vary: research/homework, throughput, scale-with-touch,
              senior-vs-junior quality, hiding the seam, division of labor with
              brokers, in-house-team feel.
            </li>
            <li>
              • Edits live only in this tab — reload will reset.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
