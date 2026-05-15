"use client";

import Image from "next/image";
import Link from "next/link";

const DISPLAY = "var(--font-space-grotesk), system-ui, sans-serif";
const BODY = "var(--font-fustat), system-ui, sans-serif";

const NAVY = "#0F172A";
const NAVY_LIGHT = "#152639";

const ICON_SRC = "/images/ten-ventra-icon.png";
// Source asset is 1880 × 3281
const ICON_RATIO = 1880 / 3281;

function NavShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl border border-white/[0.08] overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, rgba(255,255,255,0.02), rgba(255,255,255,0))",
      }}
    >
      <div className="backdrop-blur-xl bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          {children}
          <nav
            className="hidden md:flex items-center gap-10 text-sm text-white/70"
            style={{ fontFamily: BODY }}
          >
            <span>Approach</span>
            <span>Capabilities</span>
            <span>Contact</span>
          </nav>
          <span
            className="rounded-full border border-white/15 bg-white/10 backdrop-blur px-4 py-2 text-xs text-white"
            style={{ fontFamily: BODY }}
          >
            Get in touch
          </span>
        </div>
      </div>
    </div>
  );
}

function Wordmark({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={`text-sm font-medium tracking-tight text-white ${className}`}
      style={{ fontFamily: DISPLAY }}
    >
      Ten Ventra
    </span>
  );
}

function IconImg({ h }: { h: number }) {
  const w = Math.round(h * ICON_RATIO);
  return (
    <Image
      src={ICON_SRC}
      alt="Ten Ventra"
      width={w}
      height={h}
      priority
      style={{ width: w, height: h }}
    />
  );
}

/* ── L1: Bare icon (h-7) + wordmark ──────────────────────────────────────── */
function VariantL1() {
  return (
    <NavShell>
      <div className="flex items-center gap-2">
        <IconImg h={28} />
        <Wordmark />
      </div>
    </NavShell>
  );
}

/* ── L2: Icon on white rounded tile + wordmark ───────────────────────────── */
function VariantL2() {
  return (
    <NavShell>
      <div className="flex items-center gap-2.5">
        <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
          <IconImg h={22} />
        </span>
        <Wordmark />
      </div>
    </NavShell>
  );
}

/* ── L3: Icon on white circle tile + wordmark ────────────────────────────── */
function VariantL3() {
  return (
    <NavShell>
      <div className="flex items-center gap-2.5">
        <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
          <IconImg h={22} />
        </span>
        <Wordmark />
      </div>
    </NavShell>
  );
}

/* ── L4: Larger bare icon, no wordmark ───────────────────────────────────── */
function VariantL4() {
  return (
    <NavShell>
      <IconImg h={36} />
    </NavShell>
  );
}

/* ── L5: Icon + vertical divider + wordmark ──────────────────────────────── */
function VariantL5() {
  return (
    <NavShell>
      <div className="flex items-center gap-3">
        <IconImg h={28} />
        <span className="block w-px h-5 bg-white/20" />
        <Wordmark />
      </div>
    </NavShell>
  );
}

const VARIANTS = [
  {
    letter: "L1",
    label: "Bare icon + wordmark",
    blurb:
      "Icon sits directly on the nav at 28px tall, flush with the 'Ten Ventra' text. Test whether the navy 'O' reads against the navy bar.",
    Component: VariantL1,
  },
  {
    letter: "L2",
    label: "Icon on white rounded tile",
    blurb:
      "Icon in an 8×8 rounded-square white tile. Tile gives the dark glyph contrast against the navy. Classic 'app icon' feel.",
    Component: VariantL2,
  },
  {
    letter: "L3",
    label: "Icon on white circle tile",
    blurb:
      "Same idea as L2 but with a circular tile. Softer, slightly more premium read.",
    Component: VariantL3,
  },
  {
    letter: "L4",
    label: "Icon only (no wordmark)",
    blurb:
      "Drop the 'Ten Ventra' text — let the icon do the branding alone. Larger (36px). Works only if the icon is recognizable by itself.",
    Component: VariantL4,
  },
  {
    letter: "L5",
    label: "Icon · divider · wordmark",
    blurb:
      "Thin vertical divider between icon and wordmark. Treats them as two equal brand elements, not stacked.",
    Component: VariantL5,
  },
];

export default function LogoStylesPage() {
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
            Logo placement — nav variants
          </span>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-8 py-20 space-y-16">
        <div className="max-w-2xl">
          <p
            className="text-xs uppercase tracking-[0.25em] text-white/50 mb-4"
            style={{ fontFamily: BODY }}
          >
            Navbar — Logo treatments
          </p>
          <h1
            className="text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-tight"
            style={{ fontFamily: DISPLAY }}
          >
            Five takes on the icon in the nav.
          </h1>
          <p className="text-white/65 mt-5 max-w-xl">
            The icon's dark &ldquo;O&rdquo; sits close to our nav background,
            so contrast is the main variable. Pick one and I&apos;ll port it
            into the live navbar.
          </p>
        </div>

        {VARIANTS.map(({ letter, label, blurb, Component }) => (
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
              <p className="text-white/55 text-sm flex-1">{blurb}</p>
            </div>
            <Component />
          </div>
        ))}
      </section>
    </main>
  );
}
