"use client";

import Link from "next/link";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

function NavBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-white/70 border-b border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/redesigns"
          className="text-sm font-medium tracking-tight text-neutral-900"
        >
          Ten Ventra<span className="text-red-600">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
          <a href="#approach" className="hover:text-neutral-900 transition-colors">
            Approach
          </a>
          <a href="#contact" className="hover:text-neutral-900 transition-colors">
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
          className="text-xs font-medium tracking-tight bg-neutral-900 text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mx}px ${my}px, rgba(220,38,38,0.16), transparent 55%)`;

  return (
    <section
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
      onMouseLeave={() => {
        mx.set(-9999);
        my.set(-9999);
      }}
      className="relative isolate min-h-screen flex items-center pt-20 overflow-hidden bg-white"
    >
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ background: spotlight }}
      />
      <div className="absolute inset-0 -z-20 [background-image:linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-9 space-y-9">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            New brokerage model
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-6xl md:text-7xl lg:text-[8rem] font-medium tracking-[-0.04em] text-neutral-900 leading-[0.95]"
            style={{ fontFamily: "var(--font-inter), system-ui" }}
          >
            Brokerage,
            <br />
            <span className="italic font-normal text-neutral-700">rebuilt</span>
            <span className="text-red-600">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-inter), system-ui" }}
          >
            {siteConfig.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <Link
              href="#approach"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-sm hover:bg-neutral-800 transition-colors"
            >
              See how it works
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-neutral-300 text-neutral-900 px-5 py-3 text-sm hover:bg-neutral-100 transition-colors"
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-8 left-6 text-xs tracking-wide text-neutral-400 font-mono">
        v1 · linear-minimal
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section
      id="approach"
      className="bg-white py-32 px-6"
      style={{ fontFamily: "var(--font-inter), system-ui" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-5">
            Approach
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.03em] text-neutral-900">
            Three things make a brokerage
            <span className="text-neutral-400"> work.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
          {siteConfig.approach.pillars.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="space-y-4"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-xs text-red-600 font-medium tracking-wide">
                  {p.number}
                </span>
                <span className="h-px flex-1 bg-neutral-200" />
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-neutral-900">
                {p.name}
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed">
                {p.body}
              </p>
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
      className="bg-neutral-50 py-32 px-6 border-t border-neutral-200"
      style={{ fontFamily: "var(--font-inter), system-ui" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl md:text-6xl font-medium tracking-[-0.04em] text-neutral-900"
        >
          Let&apos;s talk about your deal.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="text-lg text-neutral-600 mt-6 max-w-xl mx-auto leading-relaxed"
        >
          {siteConfig.contact.intro}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="mailto:hello@tenventra.ai"
            className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-6 py-3 text-sm hover:bg-neutral-800 transition-colors"
          >
            hello@tenventra.ai
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section
      className="bg-white py-32 px-6 border-y border-neutral-200"
      style={{ fontFamily: "var(--font-inter), system-ui" }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.22em] text-neutral-500 mb-6"
        >
          Why we&apos;re building this
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-medium tracking-[-0.03em] text-neutral-900 leading-[1.15]"
        >
          Brokerage software has spent a decade trying to{" "}
          <span className="text-neutral-400">replace the broker</span>. We
          think that&apos;s the wrong instinct.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 text-lg text-neutral-600 leading-relaxed"
        >
          Deals close because someone trusts someone else to make the call.
          Software does not produce trust. What it can do — when it&apos;s
          built carefully — is absorb the labor that gets in the way of the
          conversation. That&apos;s the entire idea behind Ten Ventra.
        </motion.p>
      </div>
    </section>
  );
}

function DemoVideo() {
  return (
    <section
      id="demo"
      className="bg-neutral-50 py-32 px-6"
      style={{ fontFamily: "var(--font-inter), system-ui" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">
            See it live
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.03em] text-neutral-900">
            Three minutes inside the platform.
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            From owner signal to outreach draft. The whole pipeline, end to end.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)] aspect-video bg-gradient-to-br from-white via-neutral-50 to-neutral-100"
        >
          <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="absolute top-5 left-6 right-6 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-neutral-500">
              tenventra.app / pipeline
            </span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              className="group relative w-20 h-20 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:scale-105 transition-transform"
              aria-label="Play demo video"
            >
              <span className="absolute inset-0 rounded-full bg-neutral-900/20 animate-ping" />
              <svg viewBox="0 0 24 24" className="w-7 h-7 ml-1 fill-current">
                <path d="M5 3l14 9-14 9z" />
              </svg>
            </button>
          </div>
          <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between font-mono text-[10px] text-neutral-500">
            <span>0:00 / 3:14</span>
            <span>1080p · captions on</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const V1_CAPABILITIES = [
  {
    title: "Owner intent",
    body: "Surface the owners likely to transact before the listing exists.",
  },
  {
    title: "Buyer matching",
    body: "Pair properties to specific demand based on actual buyer signals.",
  },
  {
    title: "Auto-comparables",
    body: "Comp sets generated for any property in seconds, not hours.",
  },
  {
    title: "Outreach drafting",
    body: "First drafts written in the broker's voice, ready to send.",
  },
  {
    title: "Pipeline + CRM",
    body: "The hygiene work happens automatically in the background.",
  },
  {
    title: "Material prep",
    body: "OMs, broker briefs, follow-up notes — assembled on request.",
  },
];

function Capabilities() {
  return (
    <section
      className="bg-white py-28 px-6 border-t border-neutral-200"
      style={{ fontFamily: "var(--font-inter), system-ui" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-5">
            What the platform does
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.03em] text-neutral-900">
            The work, handled.{" "}
            <span className="text-neutral-400">The decisions, yours.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {V1_CAPABILITIES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="space-y-3"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-xs text-red-600 font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-neutral-200" />
              </div>
              <h3 className="text-xl font-medium tracking-tight text-neutral-900">
                {c.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterBar() {
  return (
    <footer className="bg-white border-t border-neutral-200 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <span>© {new Date().getFullYear()} Ten Ventra</span>
        <Link href="/redesigns" className="hover:text-neutral-900 transition-colors">
          ← Back to redesign gallery
        </Link>
      </div>
    </footer>
  );
}

export default function V1Page() {
  return (
    <div className="bg-white text-neutral-900">
      <NavBar />
      <Hero />
      <Manifesto />
      <Approach />
      <Capabilities />
      <DemoVideo />
      <Contact />
      <FooterBar />
    </div>
  );
}
