"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Variant = {
  href: string;
  label: string;
  vibe: string;
  blurb: string;
  preview: React.ReactNode;
};

const VARIANTS: Variant[] = [
  {
    href: "/",
    label: "Original",
    vibe: "Mono · cream · grid",
    blurb: "The current production design — kept as the control.",
    preview: (
      <div className="absolute inset-0 bg-[oklch(0.962_0.008_85)]">
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-3 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-mono">
            ten ventra
          </p>
          <p className="text-xl font-medium tracking-tight text-neutral-900 font-mono">
            Brokerage<span className="text-red-600">,</span>
          </p>
          <p className="text-xl font-medium tracking-tight text-neutral-900 font-mono">
            rebuilt<span className="text-red-600">.</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    href: "/v1",
    label: "v1",
    vibe: "Linear · minimal · spotlight",
    blurb: "White space, cursor-following gradient, restrained motion.",
    preview: (
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute -top-4 -right-4 w-32 h-32 bg-red-500/15 rounded-full blur-2xl" />
        <div className="absolute inset-0 flex flex-col items-start justify-center px-4">
          <p className="text-2xl font-medium tracking-tight text-neutral-900">
            Brokerage,
          </p>
          <p className="text-2xl font-medium tracking-tight text-neutral-700 italic">
            rebuilt<span className="text-red-600">.</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    href: "/v2",
    label: "v2",
    vibe: "Vercel · dark · glow",
    blurb: "Pure black, animated grid, glowing gradient text.",
    preview: (
      <div className="absolute inset-0 bg-black overflow-hidden">
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-red-500/40 rounded-full blur-2xl" />
        <div className="absolute inset-0 flex flex-col items-start justify-center px-4">
          <p className="text-xl font-semibold tracking-tight text-white">
            Brokerage,
          </p>
          <p className="text-xl font-semibold tracking-tight bg-gradient-to-r from-white via-red-300 to-red-500 bg-clip-text text-transparent">
            rebuilt.
          </p>
        </div>
      </div>
    ),
  },
  {
    href: "/v3",
    label: "v3",
    vibe: "Old money · navy · gold",
    blurb: "Deep navy with champagne accents, classic serif type, private-banking feel.",
    preview: (
      <div className="absolute inset-0 bg-[#0c1a2c]">
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(201,169,97,0.08)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-3">
          <p
            className="text-[8px] uppercase tracking-[0.4em] text-[#c9a961] mb-3 flex items-center gap-1.5"
            style={{ fontFamily: "var(--font-inter), system-ui" }}
          >
            <span className="h-px w-3 bg-[#c9a961]/60" />
            Est. 2026
            <span className="h-px w-3 bg-[#c9a961]/60" />
          </p>
          <p
            className="text-3xl text-[#f0e6d2] font-normal leading-none"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Brokerage,
          </p>
          <p
            className="text-3xl text-[#c9a961] italic leading-none mt-1"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            rebuilt.
          </p>
        </div>
      </div>
    ),
  },
  {
    href: "/v4",
    label: "v4",
    vibe: "Cinematic · navy + red · parallax",
    blurb: "Rotating navy/red gradient mesh, glassmorphism cards, brand palette and fonts (Fustat + Space Grotesk).",
    preview: (
      <div className="absolute inset-0 bg-[#0F172A] overflow-hidden">
        <div
          className="absolute -top-12 -left-12 w-48 h-48 opacity-90 blur-2xl"
          style={{
            background:
              "conic-gradient(from 0deg, #930002, #0F172A, #930002, #0F172A, #930002)",
          }}
        />
        <div className="absolute inset-0 bg-[#0F172A]/60" />
        <div
          className="absolute inset-0 flex flex-col items-start justify-center px-4"
          style={{ fontFamily: "var(--font-space-grotesk), system-ui" }}
        >
          <p className="text-xl font-medium tracking-tight text-white">
            Brokerage,
          </p>
          <p
            className="text-xl font-medium tracking-tight bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff, #fca5a5, #930002)",
            }}
          >
            rebuilt.
          </p>
        </div>
      </div>
    ),
  },
  {
    href: "/v5",
    label: "v5",
    vibe: "Bento · 3D tilt · marquee",
    blurb: "Modular cards with hover-tilt, city marquee, product feel.",
    preview: (
      <div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-100 p-3">
        <div className="grid grid-cols-3 grid-rows-3 gap-1.5 h-full">
          <div className="col-span-2 row-span-2 rounded-md border border-neutral-200 bg-white shadow-sm flex items-center justify-center">
            <span className="text-[10px] font-mono text-neutral-500">
              Brokerage,<br />rebuilt.
            </span>
          </div>
          <div className="rounded-md border border-neutral-200 bg-white shadow-sm" />
          <div className="rounded-md border border-neutral-200 bg-white shadow-sm" />
          <div className="col-span-3 rounded-md border border-neutral-900 bg-neutral-900" />
        </div>
      </div>
    ),
  },
];

export default function RedesignsGallery() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-sm font-medium tracking-tight">
            Ten Ventra<span className="text-red-600">.</span>{" "}
            <span className="text-neutral-400 font-normal">/ redesigns</span>
          </Link>
          <span className="text-xs text-neutral-500 font-mono">
            6 variants · localhost
          </span>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.22em] text-neutral-500 mb-4 font-mono">
            local sandbox
          </p>
          <h1 className="text-4xl md:text-5xl font-medium tracking-[-0.03em] text-neutral-900">
            Five redesigns of{" "}
            <span className="italic text-neutral-700">Brokerage, rebuilt.</span>
          </h1>
          <p className="text-base text-neutral-600 mt-4 leading-relaxed">
            Same copy, same brand, five distinct visual languages. The original
            production site is preserved as the sixth tile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {VARIANTS.map((v, i) => (
            <motion.div
              key={v.href}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                href={v.href}
                className="group block rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg hover:border-neutral-300 transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  {v.preview}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium tracking-tight text-neutral-900">
                      {v.label}
                    </p>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500 font-mono mb-2">
                    {v.vibe}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {v.blurb}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <footer className="border-t border-neutral-200 py-8 px-6">
        <div className="max-w-6xl mx-auto text-xs text-neutral-500 flex justify-between">
          <span>© {new Date().getFullYear()} Ten Ventra</span>
          <span className="font-mono">localhost · sandbox</span>
        </div>
      </footer>
    </div>
  );
}
