"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

const DISPLAY = "var(--font-space-grotesk), system-ui, sans-serif";
const BODY = "var(--font-fustat), system-ui, sans-serif";

const NAVY = "#0F172A";
const NAVY_LIGHT = "#152639";
const RED = "#930002";

const EMAIL = "hello@tenventra.ai";
const MAILTO = `mailto:${EMAIL}`;

/* ── M1: Eyebrow + big email card (current) ──────────────────────────────── */
function VariantM1() {
  return (
    <a
      href={MAILTO}
      className="block rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-2xl p-8 text-center hover:bg-white/[0.06] transition-colors"
    >
      <p
        className="text-xs uppercase tracking-[0.2em] text-white/50 mb-3"
        style={{ fontFamily: BODY }}
      >
        Email us
      </p>
      <p
        className="text-2xl md:text-3xl text-white font-medium tracking-tight"
        style={{ fontFamily: DISPLAY }}
      >
        {EMAIL}
      </p>
    </a>
  );
}

/* ── M2: Plain headline-style link, no chrome ────────────────────────────── */
function VariantM2() {
  return (
    <div className="text-center">
      <a
        href={MAILTO}
        className="text-3xl md:text-5xl font-medium tracking-tight text-white border-b border-white/30 pb-1 hover:border-white/80 transition-colors"
        style={{ fontFamily: DISPLAY }}
      >
        {EMAIL}
      </a>
    </div>
  );
}

/* ── M3: Red pill CTA with Mail icon ─────────────────────────────────────── */
function VariantM3() {
  return (
    <div className="flex justify-center">
      <a
        href={MAILTO}
        className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90"
        style={{
          background: RED,
          fontFamily: BODY,
          boxShadow: "0 8px 30px -10px rgba(147,0,2,0.6)",
        }}
      >
        <Mail className="w-4 h-4" />
        {EMAIL}
      </a>
    </div>
  );
}

/* ── M4: Card with body copy + arrow CTA ─────────────────────────────────── */
function VariantM4() {
  return (
    <a
      href={MAILTO}
      className="block rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-2xl p-8 hover:bg-white/[0.06] transition-colors group"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <p
            className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2"
            style={{ fontFamily: BODY }}
          >
            Email us
          </p>
          <p
            className="text-xl md:text-2xl text-white font-medium tracking-tight"
            style={{ fontFamily: DISPLAY }}
          >
            {EMAIL}
          </p>
          <p
            className="text-sm text-white/55 mt-3 max-w-sm"
            style={{ fontFamily: BODY }}
          >
            Deals, partnerships, intros — drop us a line and we&apos;ll be in
            touch.
          </p>
        </div>
        <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 group-hover:bg-white group-hover:text-black transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </a>
  );
}

/* ── M5: Stacked icon + label + email, minimal card ──────────────────────── */
function VariantM5() {
  return (
    <a
      href={MAILTO}
      className="block rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-2xl p-10 text-center hover:bg-white/[0.06] transition-colors"
    >
      <span className="inline-flex w-12 h-12 rounded-xl border border-white/15 bg-white/[0.06] items-center justify-center mb-4">
        <Mail className="w-5 h-5 text-white/85" strokeWidth={1.5} />
      </span>
      <p
        className="text-2xl md:text-3xl text-white font-medium tracking-tight"
        style={{ fontFamily: DISPLAY }}
      >
        {EMAIL}
      </p>
    </a>
  );
}

const VARIANTS = [
  {
    letter: "M1",
    label: "Eyebrow + big email card (current)",
    blurb:
      "Subtle 'Email us' label above the email address as a large headline. Card chrome makes it feel like a clear CTA.",
    Component: VariantM1,
  },
  {
    letter: "M2",
    label: "Plain headline link",
    blurb:
      "No card. Just the email address rendered as a giant underlined link. Maximum minimalism — feels editorial.",
    Component: VariantM2,
  },
  {
    letter: "M3",
    label: "Red pill button",
    blurb:
      "Compact red CTA button with mail icon. Most 'app-like' — clear button affordance, less visual weight in the section.",
    Component: VariantM3,
  },
  {
    letter: "M4",
    label: "Card with body copy + arrow",
    blurb:
      "Card with the email plus a one-line description and an arrow chip indicating action. More inviting if you want to encourage a real reach-out.",
    Component: VariantM4,
  },
  {
    letter: "M5",
    label: "Icon-led card",
    blurb:
      "Mail icon tile centered on top, email below. Quietly signals 'this is an email link' without needing the eyebrow text.",
    Component: VariantM5,
  },
];

export default function ContactStylesPage() {
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
            href="/"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            ← Back to homepage
          </Link>
          <span
            className="text-sm font-medium tracking-tight"
            style={{ fontFamily: DISPLAY }}
          >
            Contact card — variants
          </span>
        </div>
      </header>

      <section className="max-w-3xl mx-auto px-8 py-20 space-y-20">
        <div>
          <p
            className="text-xs uppercase tracking-[0.25em] text-white/50 mb-4"
            style={{ fontFamily: BODY }}
          >
            Contact section — Mailto presentation
          </p>
          <h1
            className="text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-tight"
            style={{ fontFamily: DISPLAY }}
          >
            Five takes on the email link.
          </h1>
          <p className="text-white/65 mt-5 max-w-xl">
            Each variant is what would sit below the &ldquo;Let&apos;s talk
            about your deal&rdquo; heading. All link to {EMAIL}.
          </p>
        </div>

        {VARIANTS.map(({ letter, label, blurb, Component }) => (
          <div key={letter} className="space-y-5">
            <div className="border-b border-white/10 pb-3">
              <div className="flex items-baseline gap-4 mb-1">
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
              </div>
              <p className="text-white/55 text-sm">{blurb}</p>
            </div>
            <Component />
          </div>
        ))}
      </section>
    </main>
  );
}
