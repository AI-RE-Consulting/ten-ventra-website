"use client";

import Link from "next/link";

const DISPLAY = "var(--font-space-grotesk), system-ui, sans-serif";
const BODY = "var(--font-fustat), system-ui, sans-serif";

const NAVY = "#0F172A";
const NAVY_LIGHT = "#152639";

type Capability = { title: string; body: string };

const CAPABILITIES: Capability[] = [
  {
    title: "Owner intent",
    body: "Surface the owners likely to transact before any listing exists.",
  },
  {
    title: "Buyer matching",
    body: "Pair properties to specific demand based on real buyer signals.",
  },
  {
    title: "Auto-comparables",
    body: "Comp sets generated for any property in seconds, not hours.",
  },
  {
    title: "Outreach drafting",
    body: "First drafts written in the broker's own voice, ready to send.",
  },
  {
    title: "Pipeline + CRM",
    body: "Hygiene work disappears into the background, where it belongs.",
  },
  {
    title: "Material prep",
    body: "OMs, broker briefs, follow-up notes — assembled on request.",
  },
];

const num = (i: number) => String(i + 1).padStart(2, "0");

function CardFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-2xl p-6 overflow-hidden">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

function CardCopy({ c }: { c: Capability }) {
  return (
    <>
      <h3
        className="text-xl font-semibold tracking-tight text-white mt-2"
        style={{ fontFamily: DISPLAY }}
      >
        {c.title}
      </h3>
      <p
        className="mt-2 text-sm text-white/65 leading-relaxed"
        style={{ fontFamily: BODY }}
      >
        {c.body}
      </p>
    </>
  );
}

/* ── B1: Faint top-right watermark ───────────────────────────────────────── */
function VariantB1({ c, i }: { c: Capability; i: number }) {
  return (
    <CardFrame>
      <span
        aria-hidden
        className="absolute -top-2 right-3 text-[6rem] leading-none font-medium text-white/[0.06] select-none pointer-events-none"
        style={{ fontFamily: DISPLAY }}
      >
        {num(i)}
      </span>
      <div className="relative pt-6">
        <CardCopy c={c} />
      </div>
    </CardFrame>
  );
}

/* ── B2: Oversized bleeding numeral ──────────────────────────────────────── */
function VariantB2({ c, i }: { c: Capability; i: number }) {
  return (
    <CardFrame>
      <span
        aria-hidden
        className="absolute -top-8 -right-3 text-[10rem] leading-none font-medium text-white/[0.07] select-none pointer-events-none tracking-[-0.04em]"
        style={{ fontFamily: DISPLAY }}
      >
        {num(i)}
      </span>
      <div className="relative pt-6">
        <CardCopy c={c} />
      </div>
    </CardFrame>
  );
}

/* ── B3: Outlined numeral ────────────────────────────────────────────────── */
function VariantB3({ c, i }: { c: Capability; i: number }) {
  return (
    <CardFrame>
      <span
        aria-hidden
        className="absolute top-1 right-3 text-[7rem] leading-none font-medium select-none pointer-events-none tracking-[-0.04em]"
        style={{
          fontFamily: DISPLAY,
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.18)",
        }}
      >
        {num(i)}
      </span>
      <div className="relative pt-6">
        <CardCopy c={c} />
      </div>
    </CardFrame>
  );
}

/* ── B4: Red-gradient watermark ──────────────────────────────────────────── */
function VariantB4({ c, i }: { c: Capability; i: number }) {
  return (
    <CardFrame>
      <span
        aria-hidden
        className="absolute -top-2 right-3 text-[7.5rem] leading-none font-medium select-none pointer-events-none bg-clip-text text-transparent tracking-[-0.04em]"
        style={{
          fontFamily: DISPLAY,
          backgroundImage:
            "linear-gradient(135deg, rgba(252,165,165,0.18), rgba(147,0,2,0.10) 60%, transparent 100%)",
        }}
      >
        {num(i)}
      </span>
      <div className="relative pt-6">
        <CardCopy c={c} />
      </div>
    </CardFrame>
  );
}

/* ── B5: Bottom-corner watermark ─────────────────────────────────────────── */
function VariantB5({ c, i }: { c: Capability; i: number }) {
  return (
    <CardFrame>
      <div className="relative">
        <CardCopy c={c} />
      </div>
      <span
        aria-hidden
        className="absolute -bottom-6 -right-2 text-[8rem] leading-none font-medium text-white/[0.05] select-none pointer-events-none tracking-[-0.04em]"
        style={{ fontFamily: DISPLAY }}
      >
        {num(i)}
      </span>
    </CardFrame>
  );
}

type VariantMeta = {
  letter: string;
  label: string;
  blurb: string;
  Component: (props: { c: Capability; i: number }) => React.ReactNode;
};

const VARIANTS: VariantMeta[] = [
  {
    letter: "B1",
    label: "Faint top-right",
    blurb:
      "Standard watermark — a single large numeral in the top-right corner at 6% white. Restrained, clean.",
    Component: VariantB1,
  },
  {
    letter: "B2",
    label: "Bleeding numeral",
    blurb:
      "Oversized, partly cropped by the card edge. Reads as editorial design — the number is graphic, not data.",
    Component: VariantB2,
  },
  {
    letter: "B3",
    label: "Outlined numeral",
    blurb:
      "Hollow, stroked numeral with no fill. Strong shape without competing for attention against the title.",
    Component: VariantB3,
  },
  {
    letter: "B4",
    label: "Red gradient watermark",
    blurb:
      "Numeral filled with a soft red→transparent gradient. Brings the brand red back in, but as ambient fill rather than as text contrast.",
    Component: VariantB4,
  },
  {
    letter: "B5",
    label: "Bottom-corner watermark",
    blurb:
      "Watermark anchored to the bottom-right, anchoring the card visually. Lets the title sit cleanly at the top.",
    Component: VariantB5,
  },
];

export default function CapabilityStylesPage() {
  return (
    <main
      className="min-h-screen text-white"
      style={{
        background: `linear-gradient(to bottom, ${NAVY_LIGHT} 0%, ${NAVY} 100%)`,
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
            Capabilities — watermark variants
          </span>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-8 py-20 space-y-24">
        <div className="max-w-2xl">
          <p
            className="text-xs uppercase tracking-[0.25em] text-white/50 mb-4"
            style={{ fontFamily: BODY }}
          >
            Capabilities — Numeral treatment
          </p>
          <h1
            className="text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-tight"
            style={{ fontFamily: DISPLAY }}
          >
            Five takes on a watermark numeral.
          </h1>
          <p className="text-white/65 mt-5 max-w-xl">
            Same six cards, same copy — only the numeral treatment changes.
            Pick one (or a hybrid: e.g. B2 cropped + B3 outlined) and I'll port
            it into the live Capabilities section.
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CAPABILITIES.map((c, i) => (
                <Component key={c.title} c={c} i={i} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
