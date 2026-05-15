"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const DISPLAY = "var(--font-space-grotesk), system-ui, sans-serif";
const BODY = "var(--font-fustat), system-ui, sans-serif";

const NAVY = "#0F172A";
const NAVY_LIGHT = "#152639";
const RED = "#930002";

type Pillar = {
  num: string;
  name: string;
  body: string;
};

type Variant = {
  letter: string;
  label: string;
  blurb: string;
  kicker: string;
  headline: string;
  pillars: Pillar[];
};

const VARIANTS: Variant[] = [
  {
    letter: "A",
    label: "Direct & confident",
    blurb:
      "Short, declarative sentences. Each pillar makes one clear promise to the sponsor.",
    kicker: "Approach",
    headline:
      "Three things that put you first to the table.",
    pillars: [
      {
        num: "01",
        name: "Data",
        body: "Proprietary signals from sources others don't have. Filtered for accuracy and tuned to your exact buy box, so deals surface before they're listed.",
      },
      {
        num: "02",
        name: "Relationships",
        body: "We staff and run the broker and cold-caller bench for you. Sellers reached directly, off-market — first-look deals land on your desk.",
      },
      {
        num: "03",
        name: "Intelligence",
        body: "AI runs the work behind every outreach. Researched, drafted, followed up — sellers feel like they're talking to a broker who's done their homework.",
      },
    ],
  },
  {
    letter: "B",
    label: "Sponsor-focused, benefits-driven",
    blurb:
      "Explicitly addresses sponsors and what they get. Heavier on outcomes than mechanics.",
    kicker: "How we work",
    headline:
      "An outsourced acquisitions team that finds what no one else does.",
    pillars: [
      {
        num: "01",
        name: "Data",
        body: "We pull from proprietary feeds tuned to your buy box. Every signal is checked for accuracy before it reaches you, so what shows up is what fits.",
      },
      {
        num: "02",
        name: "Relationships",
        body: "Our brokers and callers work owners directly. Cold calls, warm intros, off-market sourcing — you get first look at every opportunity.",
      },
      {
        num: "03",
        name: "Intelligence",
        body: "A layer of AI underneath the team handles research, drafts, and follow-ups at scale. The conversations still feel human to the seller.",
      },
    ],
  },
  {
    letter: "C",
    label: "Edge-oriented, technical",
    blurb:
      "Treats each pillar as a layer of competitive edge. Slightly more abstract; positions Ten Ventra as an in-house capability sponsors don't have.",
    kicker: "The edge",
    headline:
      "Three layers of edge, working for sponsors who want off-market flow.",
    pillars: [
      {
        num: "01",
        name: "Data",
        body: "Proprietary data sources, scored for accuracy, custom-fit to your acquisition criteria. The signal you'd build in-house, without the build.",
      },
      {
        num: "02",
        name: "Relationships",
        body: "A managed team of brokers and cold callers, dialed in on sellers directly. Every off-market opportunity comes to you before it goes to market.",
      },
      {
        num: "03",
        name: "Intelligence",
        body: "AI streamlines the volume. The conversations stay personal — sellers don't notice the seams; you don't lose the touch.",
      },
    ],
  },
];

function Editable({
  as: As = "span",
  className,
  style,
  children,
}: {
  as?: "span" | "p" | "h2" | "h3";
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

function ApproachVariant({ variant }: { variant: Variant }) {
  return (
    <section
      className="relative py-24 px-8 overflow-hidden rounded-3xl border border-white/10"
      style={{
        background: `linear-gradient(to bottom, ${NAVY} 0%, ${NAVY_LIGHT} 100%)`,
      }}
    >
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <Editable
            as="p"
            className="text-xs uppercase tracking-[0.25em] text-white/50 mb-4 inline-block"
            style={{ fontFamily: BODY }}
          >
            {variant.kicker}
          </Editable>
          <Editable
            as="h2"
            className="text-4xl md:text-5xl font-medium tracking-[-0.03em] text-white leading-tight block"
            style={{ fontFamily: DISPLAY }}
          >
            {variant.headline}
          </Editable>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {variant.pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-2xl p-7 overflow-hidden"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-xs"
                    style={{ color: RED }}
                  >
                    {p.num}
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
                  {p.name}
                </Editable>
                <Editable
                  as="p"
                  className="text-sm md:text-base text-white/70 leading-relaxed block"
                  style={{ fontFamily: BODY }}
                >
                  {p.body}
                </Editable>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ApproachOptionsPage() {
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
            v4 · approach copy options
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-16">
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-4">
            Edit & pick
          </p>
          <h1
            className="text-4xl md:text-5xl font-medium tracking-[-0.03em] text-white leading-tight"
            style={{ fontFamily: DISPLAY }}
          >
            Three drafts of the Approach section.
          </h1>
          <p className="text-base text-white/65 mt-5 leading-relaxed max-w-2xl">
            All three target real estate sponsors and lead with the same three
            pillars (Data, Relationships, Intelligence). Tone, length, and
            framing differ. <span className="text-white">Click any text to edit it directly</span>{" "}
            — kicker, headline, pillar name, or body copy. Tell me which
            variant (with whatever tweaks you make) to wire into v4.
          </p>
          <div
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur px-3 py-1.5 text-xs text-white/70"
            style={{ fontFamily: BODY }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: RED }}
            />
            Heads up: edits live only in this tab — reload will reset
          </div>
        </div>

        <div className="space-y-16">
          {VARIANTS.map((v) => (
            <div key={v.letter}>
              <div className="mb-6 flex items-start gap-4 max-w-3xl">
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-md text-white text-base font-semibold shrink-0"
                  style={{ background: RED, fontFamily: DISPLAY }}
                >
                  {v.letter}
                </span>
                <div>
                  <h2
                    className="text-2xl font-medium tracking-tight text-white"
                    style={{ fontFamily: DISPLAY }}
                  >
                    Option {v.letter} — {v.label}
                  </h2>
                  <p className="text-sm text-white/60 mt-1 leading-relaxed">
                    {v.blurb}
                  </p>
                </div>
              </div>
              <ApproachVariant variant={v} />
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">
            Notes
          </p>
          <ul className="space-y-2 text-sm text-white/65 leading-relaxed">
            <li>
              • Pillar names are <em>Data, Relationships, Intelligence</em> in all
              three (also editable).
            </li>
            <li>
              • Headlines are intentionally distinct — A is short, B leads with
              outcome, C frames it as edge.
            </li>
            <li>
              • Once you pick one, I&apos;ll wire it into v4 with the
              gradient-on-keyword treatment that matches the rest of the page.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
