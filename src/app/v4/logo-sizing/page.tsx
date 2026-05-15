"use client";

import Image from "next/image";
import Link from "next/link";

const DISPLAY = "var(--font-space-grotesk), system-ui, sans-serif";
const BODY = "var(--font-fustat), system-ui, sans-serif";

const NAVY = "#0F172A";
const NAVY_LIGHT = "#152639";

const LOGO_SRC = "/images/ten-ventra-logo-white.png";
// Source asset is 14724 × 3281 → aspect ratio ≈ 4.487
const LOGO_RATIO = 14724 / 3281;

function MockNav({ h }: { h: number }) {
  const w = Math.round(h * LOGO_RATIO);
  return (
    <div
      className="rounded-2xl border border-white/[0.08] overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0))",
      }}
    >
      <div className="backdrop-blur-xl bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center relative">
          <Link href="/" className="flex items-center">
            <Image
              src={LOGO_SRC}
              alt="Ten Ventra"
              width={w}
              height={h}
              priority
              style={{ width: w, height: h }}
            />
          </Link>
          <nav
            className="hidden md:flex items-center gap-10 text-sm text-white/70 absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: BODY }}
          >
            <span>Approach</span>
            <span>Capabilities</span>
            <span>Contact</span>
          </nav>
        </div>
      </div>
    </div>
  );
}

const SIZES = [
  { letter: "S1", h: 18, label: "18px — subtle / minimal" },
  { letter: "S2", h: 22, label: "22px — small" },
  { letter: "S3", h: 26, label: "26px — medium" },
  { letter: "S4", h: 30, label: "30px — large" },
  { letter: "S5", h: 36, label: "36px — very prominent" },
];

export default function LogoSizingPage() {
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
            Logo sizing — navbar variants
          </span>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-8 py-20 space-y-16">
        <div className="max-w-2xl">
          <p
            className="text-xs uppercase tracking-[0.25em] text-white/50 mb-4"
            style={{ fontFamily: BODY }}
          >
            Navbar — Logo sizing
          </p>
          <h1
            className="text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-tight"
            style={{ fontFamily: DISPLAY }}
          >
            Five heights for the white lockup.
          </h1>
          <p className="text-white/65 mt-5 max-w-xl">
            All in a 64px-tall navbar (the live one). The logo is wide
            (~4.5:1), so each step in height adds significant width. Pick the
            one that feels balanced against the centered nav links.
          </p>
        </div>

        {SIZES.map(({ letter, h, label }) => (
          <div key={letter} className="space-y-4">
            <div className="flex items-baseline gap-4 border-b border-white/10 pb-3">
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
              <span
                className="text-xs font-mono text-white/40 ml-auto"
                style={{ fontFamily: BODY }}
              >
                width ≈ {Math.round(h * LOGO_RATIO)}px
              </span>
            </div>
            <MockNav h={h} />
          </div>
        ))}
      </section>
    </main>
  );
}
