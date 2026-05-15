"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

function NavBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/redesigns" className="text-sm font-medium tracking-tight text-white">
          ten ventra<span className="text-red-500">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="#approach" className="hover:text-white transition-colors">Approach</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <Link href="/redesigns" className="text-white/40 hover:text-white transition-colors">
            ← Gallery
          </Link>
        </nav>
        <Link
          href="#contact"
          className="relative text-xs font-medium tracking-tight px-4 py-2 rounded-md bg-white text-black hover:bg-neutral-200 transition-colors"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}

function GridBg() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <motion.div
        className="absolute -top-40 -right-40 w-[42rem] h-[42rem] rounded-full bg-red-600/20 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-[42rem] h-[42rem] rounded-full bg-orange-500/15 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-screen flex items-center pt-20 overflow-hidden">
      <GridBg />
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="space-y-9 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
            ai-native real estate
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-semibold tracking-[-0.04em] text-white leading-[0.95]"
            style={{
              textShadow:
                "0 0 60px rgba(239,68,68,0.25), 0 0 120px rgba(239,68,68,0.1)",
            }}
          >
            Brokerage,
            <br />
            <span className="bg-gradient-to-r from-white via-red-300 to-red-500 bg-clip-text text-transparent">
              rebuilt.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-lg md:text-xl text-white/65 max-w-2xl leading-relaxed"
          >
            {siteConfig.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <Link
              href="#approach"
              className="group relative inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-neutral-200 transition-colors"
            >
              <span>Explore the approach</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span className="absolute inset-0 -z-10 rounded-md bg-white/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 text-white px-5 py-3 text-sm hover:bg-white/10 transition-colors"
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-8 left-6 text-xs tracking-wide text-white/30 font-mono">
        v2 · vercel-glow
      </div>
    </section>
  );
}

function PillarCard({
  number,
  name,
  body,
  index,
}: {
  number: string;
  name: string;
  body: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm overflow-hidden"
    >
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/0 to-transparent group-hover:via-red-500 transition-all duration-700" />
      <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/0 via-transparent to-orange-500/0 group-hover:from-red-500/10 group-hover:to-orange-500/10 transition-all duration-700" />
      <div className="relative space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-red-500">{number}</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
            pillar
          </span>
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {name}
        </h3>
        <p className="text-sm text-white/60 leading-relaxed">{body}</p>
      </div>
    </motion.div>
  );
}

function Approach() {
  return (
    <section
      id="approach"
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:120px_120px] opacity-50" />
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-white/40 mb-5 font-mono">
            // approach
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white">
            Three pillars.{" "}
            <span className="text-white/40">One operating system.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {siteConfig.approach.pillars.map((p, i) => (
            <PillarCard key={p.number} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-black overflow-hidden border-t border-white/5"
    >
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-red-600/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.22em] text-white/40 mb-6 font-mono"
        >
          // contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-white"
        >
          Have a deal in motion?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-white/60 mt-6 max-w-xl mx-auto leading-relaxed"
        >
          {siteConfig.contact.intro}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="mailto:hello@tenventra.ai"
            className="group relative inline-flex items-center justify-center gap-2 rounded-md bg-white text-black px-6 py-3 text-sm font-medium hover:bg-neutral-200 transition-colors"
          >
            hello@tenventra.ai
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <span className="absolute inset-0 -z-10 rounded-md bg-white/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function DemoVideo() {
  return (
    <section
      id="demo"
      className="relative py-32 px-6 bg-black overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:120px_120px] opacity-30" />
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-white/40 mb-4 font-mono">
            // see it run
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white">
            Watch the operating system{" "}
            <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">
              source a deal
            </span>
            .
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-red-500/40 via-fuchsia-500/30 to-orange-500/40 blur-xl opacity-70" />
          <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-neutral-950 aspect-video">
            <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="absolute top-5 left-6 right-6 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/50">
                ten-ventra · pipeline.live
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                className="group relative w-20 h-20 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
                aria-label="Play demo"
              >
                <span className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
                <svg viewBox="0 0 24 24" className="w-7 h-7 ml-1 fill-current">
                  <path d="M5 3l14 9-14 9z" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between font-mono text-[10px] text-white/50">
              <span>0:00 / 3:14</span>
              <span>4K · ENCRYPTED</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const V2_CAPABILITIES = [
  {
    k: "OWNER",
    c: "text-emerald-400",
    t: "Owner intent",
    b: "Surface owners likely to transact before the listing exists.",
  },
  {
    k: "BUYER",
    c: "text-cyan-400",
    t: "Buyer matching",
    b: "Pair properties to specific demand based on actual buyer signals.",
  },
  {
    k: "COMP ",
    c: "text-fuchsia-400",
    t: "Auto-comparables",
    b: "Comp sets generated for any property in seconds, not hours.",
  },
  {
    k: "DRAFT",
    c: "text-red-400",
    t: "Outreach drafting",
    b: "First drafts written in the broker's voice, ready to send.",
  },
  {
    k: "PIPE ",
    c: "text-amber-400",
    t: "Pipeline + CRM",
    b: "The hygiene work runs automatically in the background.",
  },
  {
    k: "MAT  ",
    c: "text-indigo-400",
    t: "Material prep",
    b: "OMs, briefs, follow-up notes — assembled on request.",
  },
];

function CapabilitiesV2() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:120px_120px] opacity-30" />
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-white/40 mb-4 font-mono">
            // capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-tight">
            What the platform does today.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {V2_CAPABILITIES.map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-lg border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.05] hover:border-white/20 transition-all overflow-hidden"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/0 to-transparent group-hover:via-red-500/60 transition-all duration-700" />
              <div className="flex items-start gap-4">
                <span className={`font-mono text-[11px] mt-1 ${c.c}`}>
                  {c.k}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-medium tracking-tight text-white">
                    {c.t}
                  </h3>
                  <p className="mt-1.5 text-sm text-white/60 leading-relaxed">
                    {c.b}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const V2_FAQ = [
  {
    q: "Where does the owner-intent data come from?",
    a: "Public records, permit filings, ownership and tax movements, and a handful of niche signals that quietly correlate with intent to transact. We only use sources we have a clear right to use.",
  },
  {
    q: "How does it plug into my MLS and CRM?",
    a: "We sync with MLS feeds where we have access and import from common CRMs. If your stack is unusual, we work it out one-on-one during onboarding.",
  },
  {
    q: "How does the AI 'write in my voice'?",
    a: "It learns from your past correspondence — emails you've sent, briefs you've written, the way you phrase a follow-up. The more you let it see, the closer it gets. You always sign off.",
  },
  {
    q: "What does onboarding actually look like?",
    a: "About a week. We sit with you, point the platform at your existing pipeline, and tune the signals to your asset class and market.",
  },
  {
    q: "How is deal and client data handled?",
    a: "Encrypted at rest and in transit. We don't sell or share data, and your activity isn't used to train models for anyone but you.",
  },
  {
    q: "What's the trial like?",
    a: "Start with a walk-through together. If the fit feels right, we set you up on a real deal so you see the work, not the slides.",
  },
];

function FAQ() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden border-t border-white/5">
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-white/40 mb-4 font-mono">
            // faq
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-tight">
            Honest answers to obvious questions.
          </h2>
        </motion.div>
        <div className="space-y-3">
          {V2_FAQ.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
            >
              <details className="group rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all overflow-hidden">
                <summary className="cursor-pointer list-none p-5 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-emerald-400/80">
                      $
                    </span>
                    <span className="text-white text-base md:text-lg">
                      {item.q}
                    </span>
                  </span>
                  <span className="text-white/40 group-open:rotate-180 transition-transform text-sm">
                    ▾
                  </span>
                </summary>
                <div className="px-5 pb-5 pl-12 text-sm text-white/65 leading-relaxed">
                  {item.a}
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterBar() {
  return (
    <footer className="bg-black border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono">
        <span>© {new Date().getFullYear()} ten ventra</span>
        <Link href="/redesigns" className="hover:text-white transition-colors">
          ← gallery
        </Link>
      </div>
    </footer>
  );
}

export default function V2Page() {
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar />
      <Hero />
      <Approach />
      <CapabilitiesV2 />
      <DemoVideo />
      <FAQ />
      <Contact />
      <FooterBar />
    </div>
  );
}
