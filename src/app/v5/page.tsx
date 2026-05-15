"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Building2, Compass, Workflow } from "lucide-react";
import { siteConfig } from "@/config/site";

function NavBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/85 border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/redesigns"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-neutral-900"
        >
          <span className="w-5 h-5 rounded-md bg-neutral-900 flex items-center justify-center text-white text-[10px]">
            TV
          </span>
          Ten Ventra
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-neutral-600">
          <a
            href="#approach"
            className="hover:text-neutral-900 transition-colors"
          >
            Approach
          </a>
          <a
            href="#capabilities"
            className="hover:text-neutral-900 transition-colors"
          >
            Capabilities
          </a>
          <a
            href="#contact"
            className="hover:text-neutral-900 transition-colors"
          >
            Contact
          </a>
          <Link
            href="/redesigns"
            className="text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            ← Gallery
          </Link>
        </nav>
        <Link
          href="#contact"
          className="rounded-lg bg-neutral-900 text-white px-3.5 py-1.5 text-xs font-medium hover:bg-neutral-800 transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}

function Tilt({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], ["7deg", "-7deg"]), {
    stiffness: 150,
    damping: 18,
  });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], ["-7deg", "7deg"]), {
    stiffness: 150,
    damping: 18,
  });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative pt-16 pb-24 px-6 overflow-hidden bg-gradient-to-b from-white via-white to-neutral-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm"
          >
            <span className="text-red-600 font-mono text-[10px]">EARLY</span>
            <span className="w-px h-3 bg-neutral-300" />
            AI brokerage operating system
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] text-neutral-900 leading-[0.95]"
          >
            Every part of brokerage.{" "}
            <span className="text-neutral-400">Re-engineered.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg text-neutral-600 max-w-lg leading-relaxed"
          >
            {siteConfig.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              href="#capabilities"
              className="group inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors"
            >
              See what it does
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="rounded-lg border border-neutral-300 text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-100 transition-colors"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="lg:col-span-5"
          style={{ perspective: 1200 }}
        >
          <Tilt className="rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-widest text-neutral-500 font-mono">
                  platform · preview
                </p>
                <span className="flex h-2 w-2">
                  <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-red-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { k: "Active opportunities", v: "24" },
                  { k: "New signals · 24h", v: "8" },
                  { k: "Buyer matches", v: "12" },
                  { k: "Drafts ready", v: "5" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-xl border border-neutral-200 bg-white p-3"
                  >
                    <p className="text-[10px] uppercase tracking-wider text-neutral-500">
                      {s.k}
                    </p>
                    <p className="text-2xl font-semibold tracking-tight text-neutral-900 mt-1">
                      {s.v}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-3">
                <p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-2">
                  next best action
                </p>
                <p className="text-sm text-neutral-800">
                  Owner signal at <span className="font-medium">2407 Hillside</span>{" "}
                  matches a buyer in your network — draft outreach in your voice?
                </p>
                <button className="mt-3 text-xs rounded-md bg-neutral-900 text-white px-3 py-1.5 hover:bg-neutral-800 transition-colors">
                  Draft message →
                </button>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>
      <div className="absolute bottom-4 left-6 text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-mono">
        v5 · bento + tilt
      </div>
    </section>
  );
}

const ICONS = [Compass, Building2, Workflow];

function Approach() {
  return (
    <section id="approach" className="bg-neutral-50 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-neutral-500 mb-4 font-mono">
            approach
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-neutral-900">
            One platform.{" "}
            <span className="text-neutral-400">Three pillars of work.</span>
          </h2>
        </motion.div>
        <div
          className="grid grid-cols-1 md:grid-cols-6 gap-4"
          style={{ perspective: 1500 }}
        >
          {siteConfig.approach.pillars.map((p, i) => {
            const Icon = ICONS[i] ?? Compass;
            const big = i === 0;
            return (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className={big ? "md:col-span-3 md:row-span-2" : "md:col-span-3"}
              >
                <Tilt className="h-full rounded-2xl border border-neutral-200 bg-white p-7 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)]">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                      {p.number}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-neutral-600 leading-relaxed">
                    {p.body}
                  </p>
                </Tilt>
              </motion.div>
            );
          })}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-6 rounded-2xl border border-neutral-900 bg-neutral-900 text-white p-7"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-xl md:text-2xl font-medium tracking-tight max-w-xl">
                Humans own the relationship. Software owns the work.{" "}
                <span className="text-neutral-400">
                  That&apos;s the whole company.
                </span>
              </p>
              <Link
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-100 transition-colors w-fit"
              >
                Watch the demo
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const V5_CAPABILITIES = [
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

function Capabilities() {
  return (
    <section id="capabilities" className="bg-white py-28 px-6 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-neutral-500 mb-4 font-mono">
            capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-neutral-900">
            What the platform does today.
          </h2>
        </motion.div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          style={{ perspective: 1500 }}
        >
          {V5_CAPABILITIES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <Tilt className="h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.12)]">
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-semibold tracking-tight text-neutral-900 mt-2">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {c.body}
                </p>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoVideo() {
  return (
    <section id="demo" className="bg-neutral-50 py-28 px-6 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10 items-end"
        >
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500 mb-4 font-mono">
              demo
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-neutral-900">
              See the platform in motion.
            </h2>
          </div>
          <p className="md:col-span-5 text-base text-neutral-600 leading-relaxed">
            Three minutes through the platform — owner signal, comps, draft
            outreach. The whole loop, without the tab-juggling.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          style={{ perspective: 1500 }}
        >
          <Tilt className="md:col-span-2 relative aspect-video rounded-2xl overflow-hidden border border-neutral-200 bg-gradient-to-br from-neutral-900 to-neutral-700 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="absolute top-5 left-6 right-6 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/60">
                ten-ventra · pipeline
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                className="group relative w-20 h-20 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:scale-105 transition-transform"
                aria-label="Play demo"
              >
                <span className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
                <svg viewBox="0 0 24 24" className="w-7 h-7 ml-1 fill-current">
                  <path d="M5 3l14 9-14 9z" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between font-mono text-[10px] text-white/60">
              <span>0:00 / 3:14</span>
              <span>HD · 1080p</span>
            </div>
          </Tilt>
          <div className="md:col-span-1 grid grid-cols-1 gap-4">
            <Tilt className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)]">
              <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
                chapter 01
              </p>
              <p className="text-sm font-medium tracking-tight text-neutral-900 mt-1">
                Owner signal lands
              </p>
              <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                A new owner intent surfaces in the feed.
              </p>
            </Tilt>
            <Tilt className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)]">
              <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
                chapter 02
              </p>
              <p className="text-sm font-medium tracking-tight text-neutral-900 mt-1">
                Buyer match drafted
              </p>
              <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                A matching buyer is paired by intent and fit.
              </p>
            </Tilt>
            <Tilt className="rounded-2xl border border-neutral-900 bg-neutral-900 text-white p-5">
              <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                chapter 03
              </p>
              <p className="text-sm font-medium tracking-tight text-white mt-1">
                Outreach in your voice
              </p>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Draft written in the broker&apos;s tone. One keystroke to send.
              </p>
            </Tilt>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const V5_FAQ = [
  {
    q: "What does the platform actually do?",
    a: "It surfaces owner intent, matches buyers, builds comps, and drafts outreach. The broker keeps the relationship and makes the calls.",
  },
  {
    q: "Are you replacing brokers?",
    a: "The opposite. The thesis is that brokers are the trust layer; software is the labor layer. We do the labor.",
  },
  {
    q: "Where do you operate?",
    a: "We're an early-stage team. We're talking to brokers wherever they're interested in working with us.",
  },
  {
    q: "How do you charge?",
    a: "We're early. The right pricing for your situation is a conversation, not a price page.",
  },
  {
    q: "Can I try the platform?",
    a: "Yes — drop a note and we'll find time to walk you through it.",
  },
  {
    q: "Who built this?",
    a: "A small team with backgrounds in real estate and software. Reach out if you want to know more.",
  },
];

function FAQ() {
  return (
    <section className="bg-white py-28 px-6 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-neutral-500 mb-4 font-mono">
            questions
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-neutral-900">
            Honest answers.
          </h2>
        </motion.div>
        <div className="space-y-3">
          {V5_FAQ.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
            >
              <details className="group rounded-xl border border-neutral-200 bg-white hover:border-neutral-300 transition-all overflow-hidden">
                <summary className="cursor-pointer list-none p-5 flex items-center justify-between gap-4">
                  <span className="text-base md:text-lg font-medium tracking-tight text-neutral-900">
                    {item.q}
                  </span>
                  <span className="text-neutral-400 group-open:rotate-180 transition-transform text-sm">
                    ▾
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm text-neutral-600 leading-relaxed">
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

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 bg-neutral-50 border-t border-neutral-200"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.22em] text-neutral-500 mb-4 font-mono"
        >
          get in touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-neutral-900"
        >
          If you&apos;re a broker, we&apos;d like to hear from you.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-lg text-neutral-600 mt-6 max-w-xl mx-auto leading-relaxed"
        >
          {siteConfig.contact.intro}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="mailto:hello@tenventra.ai"
            className="group inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white px-6 py-3.5 text-sm font-medium hover:bg-neutral-800 transition-colors"
          >
            hello@tenventra.ai
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function FooterBar() {
  return (
    <footer className="bg-white border-t border-neutral-200 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <span>© {new Date().getFullYear()} Ten Ventra · Brokerage, rebuilt</span>
        <Link href="/redesigns" className="hover:text-neutral-900 transition-colors">
          ← Back to gallery
        </Link>
      </div>
    </footer>
  );
}

export default function V5Page() {
  return (
    <div className="bg-white text-neutral-900 min-h-screen">
      <NavBar />
      <Hero />
      <Approach />
      <Capabilities />
      <DemoVideo />
      <FAQ />
      <Contact />
      <FooterBar />
    </div>
  );
}
