"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Check,
  Database,
  Flag,
  MoreHorizontal,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const DISPLAY = "var(--font-space-grotesk), system-ui, sans-serif";
const BODY = "var(--font-fustat), system-ui, sans-serif";

const NAVY = "#0F172A";
const NAVY_LIGHT = "#152639";
const NAVY_DEEP = "#0B1320";
const BLACK = "#000000";
const RED = "#930002";

function AuroraBg() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: NAVY }} />
      <motion.div
        aria-hidden
        className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[140vw] h-[140vw] opacity-80"
        style={{
          background:
            "conic-gradient(from 0deg at 50% 50%, #930002 0deg, #0F172A 90deg, #930002 180deg, #0F172A 270deg, #930002 360deg)",
          filter: "blur(120px)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "rgba(15,23,42,0.7)" }}
      />
      <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
    </div>
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

function NavBar() {
  return (
    <header
      className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-white/[0.02] border-b border-white/[0.08]"
      style={{ fontFamily: BODY }}
    >
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between relative">
        <Link href="/" className="flex items-center ml-2">
          <Image
            src="/images/ten-ventra-logo-white.png"
            alt="Ten Ventra"
            width={135}
            height={30}
            priority
            style={{ width: 135, height: 30 }}
          />
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm text-white/70 absolute left-1/2 -translate-x-1/2">
          <a href="#approach" className="hover:text-white transition-colors">
            Approach
          </a>
          <a
            href="#capabilities"
            className="hover:text-white transition-colors"
          >
            Capabilities
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>
        <Link
          href="#contact"
          className="rounded-full border border-white/15 bg-white/10 backdrop-blur px-4 py-2 text-xs text-white hover:bg-white/20 transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative isolate min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <AuroraBg />
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.05 }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-white leading-[1.05]"
              style={{ fontFamily: DISPLAY }}
            >
              Real estate deal sourcing,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #ffffff, #fca5a5, #930002)",
                }}
              >
                done for you.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="text-2xl md:text-3xl text-white/70 max-w-xl leading-snug"
              style={{ fontFamily: BODY }}
            >
              {siteConfig.hero.subtitle}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-5"
            style={{ perspective: 1200 }}
          >
            <Tilt className="rounded-3xl border border-white/15 bg-white p-5 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.6)]">
              <div className="space-y-4" style={{ fontFamily: BODY }}>
                {/* Property header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-8 h-8 rounded-md text-white flex items-center justify-center text-sm font-semibold"
                      style={{ background: RED, fontFamily: DISPLAY }}
                    >
                      1
                    </span>
                    <div>
                      <p
                        className="text-sm font-semibold tracking-tight text-neutral-900"
                        style={{ fontFamily: DISPLAY }}
                      >
                        2921 West Blvd
                      </p>
                      <p className="text-xs text-neutral-500">
                        Los Angeles, CA 90016
                      </p>
                    </div>
                  </div>
                  <MoreHorizontal className="w-4 h-4 text-neutral-400" />
                </div>

                <div className="h-px bg-neutral-200" />

                <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
                  Match Signals
                </p>

                {/* Distress rating */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="flex items-center gap-2">
                      <span
                        className="w-5 h-5 rounded-md flex items-center justify-center"
                        style={{ background: "rgba(147,0,2,0.08)" }}
                      >
                        <Flag className="w-3 h-3" style={{ color: RED }} />
                      </span>
                      <span className="text-sm font-medium text-neutral-900">
                        Distress rating
                      </span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span
                        className="text-sm font-semibold text-neutral-900"
                        style={{ fontFamily: DISPLAY }}
                      >
                        61
                        <span className="text-neutral-400 font-normal">
                          /100
                        </span>
                      </span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                        Moderate
                      </span>
                    </span>
                  </div>
                  <div className="h-1 rounded-full bg-neutral-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-amber-500"
                      style={{ width: "61%" }}
                    />
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {[
                    {
                      dot: "red",
                      title: "Owner death on title",
                      sub: "Recorded 8 months ago — heirs not yet vested",
                      value: "8 mo",
                      valueClass: "text-amber-700",
                    },
                    {
                      dot: "red",
                      title: "Missed property tax payment",
                      sub: "Delinquent since Aug 2024 — penalty accruing",
                      value: "$25,600",
                      valueClass: "text-neutral-900 font-semibold",
                    },
                    {
                      dot: "amber",
                      title: "Code enforcement complaint",
                      sub: "LADBS habitability complaint filed 6 weeks ago",
                      value: "6 wk",
                      valueClass: "text-amber-700",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{
                          background: item.dot === "red" ? RED : "#f59e0b",
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <span className="text-xs font-medium text-neutral-900">
                            {item.title}
                          </span>
                          <span
                            className={`text-xs whitespace-nowrap ${item.valueClass}`}
                          >
                            {item.value}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-500 leading-snug">
                          {item.sub}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Buy box rating */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-emerald-50 flex items-center justify-center">
                        <Check className="w-3 h-3 text-emerald-600" />
                      </span>
                      <span className="text-sm font-medium text-neutral-900">
                        Buy-box rating
                      </span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span
                        className="text-sm font-semibold text-neutral-900"
                        style={{ fontFamily: DISPLAY }}
                      >
                        94
                        <span className="text-neutral-400 font-normal">
                          /100
                        </span>
                      </span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        Strong
                      </span>
                    </span>
                  </div>
                  <div className="h-1 rounded-full bg-neutral-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-emerald-500"
                      style={{ width: "94%" }}
                    />
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {[
                    {
                      title: "Permit activity",
                      sub: "ADU eligibility confirmed · 8-unit potential",
                      value: "8 ADU",
                    },
                    {
                      title: "Comparable sales",
                      sub: "4 closed within 0.6 mi · last 9 mo",
                      value: "$418/sf avg",
                    },
                    {
                      title: "Cap rate",
                      sub: "Underwritten 5.4% vs. submarket 4.8%",
                      value: "5.4%",
                    },
                    {
                      title: "Recent leases",
                      sub: "3 new leases at 11–14% premium to in-place",
                      value: "+12% MTM",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <span className="text-xs font-medium text-neutral-900">
                            {item.title}
                          </span>
                          <span className="text-xs text-neutral-700 whitespace-nowrap font-mono">
                            {item.value}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-500 leading-snug">
                          {item.sub}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-1.5 text-xs rounded-md text-white px-3 py-2.5 hover:opacity-90 transition-opacity mt-1"
                  style={{ background: RED }}
                >
                  <Users className="w-3.5 h-3.5" />
                  Get owner contacts
                </button>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const PILLAR_ICONS: Record<string, LucideIcon> = {
  Data: Database,
  Relationships: Users,
  Intelligence: Sparkles,
};

function GlassCard({
  name,
  body,
  index,
}: {
  number: string;
  name: string;
  body: string;
  index: number;
}) {
  const Icon = PILLAR_ICONS[name] ?? Sparkles;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.12 }}
      className="relative rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-2xl p-8 overflow-hidden"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
      <div className="relative space-y-5">
        <span className="w-11 h-11 rounded-xl border border-white/15 bg-white/[0.06] flex items-center justify-center">
          <Icon className="w-5 h-5 text-white/85" strokeWidth={1.5} />
        </span>
        <h3
          className="text-3xl font-medium tracking-tight text-white"
          style={{ fontFamily: DISPLAY }}
        >
          {name}
        </h3>
        <p
          className="text-base md:text-lg text-white/65 leading-relaxed"
          style={{ fontFamily: BODY }}
        >
          {body}
        </p>
      </div>
    </motion.div>
  );
}

function Approach() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bg = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      ref={ref}
      id="approach"
      className="relative py-32 px-8 overflow-hidden"
    >
      <motion.div
        style={{ y: bg }}
        className="absolute inset-x-0 -top-32 h-[150%] -z-0 opacity-40"
      >
        <div
          className="absolute inset-0 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at 30% 30%, rgba(147,0,2,0.5), transparent 60%), radial-gradient(ellipse at 70% 70%, rgba(15,23,42,0.7), transparent 60%)",
          }}
        />
      </motion.div>
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <p
            className="text-xs uppercase tracking-[0.25em] text-white/50 mb-5"
            style={{ fontFamily: BODY }}
          >
            Approach
          </p>
          <h2
            className="text-5xl md:text-6xl font-medium tracking-[-0.03em] text-white leading-tight"
            style={{ fontFamily: DISPLAY }}
          >
            A sharper way to{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fca5a5, #930002)",
              }}
            >
              source deals.
            </span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.approach.pillars.map((p, i) => (
            <GlassCard key={p.number} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const V4_CAPABILITIES = [
  {
    title: "Buy-box matching",
    body: "Every property scored against your buy-box, so the closest fits surface first.",
  },
  {
    title: "Owner signals",
    body: "Identify likely sellers from ownership, property, and distress data, often before anything hits the market.",
  },
  {
    title: "Comparables",
    body: "Comp sets pulled together in a fraction of the time it takes by hand.",
  },
  {
    title: "Outreach drafting",
    body: "Personalized outreach drafted owner by owner, ready for your review.",
  },
  {
    title: "Pipeline tracking",
    body: "Conversations, notes, and next steps, all in one place.",
  },
  {
    title: "Deal materials",
    body: "Briefs, summaries, and supporting docs to help you move quickly.",
  },
];

function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative py-32 px-8 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(147,0,2,0.25), transparent 60%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p
            className="text-xs uppercase tracking-[0.25em] text-white/50 mb-4"
            style={{ fontFamily: BODY }}
          >
            Capabilities
          </p>
          <h2
            className="text-5xl md:text-6xl font-medium tracking-[-0.03em] text-white leading-tight"
            style={{ fontFamily: DISPLAY }}
          >
            What the platform supports.
          </h2>
        </motion.div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          style={{ perspective: 1500 }}
        >
          {V4_CAPABILITIES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <Tilt className="h-full rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-2xl p-6 overflow-hidden">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
                <div className="relative">
                  <span
                    className="inline-block font-mono text-[10px] tracking-[0.2em] uppercase text-white/45 px-2 py-1 rounded-md border border-white/10 bg-white/[0.03]"
                    style={{ fontFamily: BODY }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="text-2xl font-semibold tracking-tight text-white mt-4"
                    style={{ fontFamily: DISPLAY }}
                  >
                    {c.title}
                  </h3>
                  <p
                    className="mt-2 text-base md:text-lg text-white/65 leading-relaxed"
                    style={{ fontFamily: BODY }}
                  >
                    {c.body}
                  </p>
                </div>
              </Tilt>
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
      className="relative py-32 px-8 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.25em] text-white/50 mb-6"
          style={{ fontFamily: BODY }}
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-medium tracking-[-0.04em] text-white"
          style={{ fontFamily: DISPLAY }}
        >
          Let&apos;s talk about your deal.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-lg text-white/65 mt-6 max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: BODY }}
        >
          {siteConfig.contact.intro}
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-12 max-w-xl mx-auto"
      >
        <a
          href="mailto:hello@tenventra.ai"
          className="block rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-2xl p-8 text-center hover:bg-white/[0.06] transition-colors group"
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
            hello@tenventra.ai
          </p>
        </a>
      </motion.div>
    </section>
  );
}

function FooterBar() {
  return (
    <footer
      className="py-10 px-8"
      style={{ background: BLACK, fontFamily: BODY }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center text-xs text-white/40">
        <span>© {new Date().getFullYear()} Ten Ventra, Inc.</span>
      </div>
    </footer>
  );
}

export default function V4Page() {
  return (
    <div
      className="text-white min-h-screen"
      style={{
        background: `linear-gradient(180deg, ${NAVY} 0%, ${NAVY} 28%, ${NAVY_LIGHT} 50%, ${NAVY} 72%, ${BLACK} 100%)`,
        fontFamily: BODY,
      }}
    >
      <NavBar />
      <Hero />
      <Approach />
      <Capabilities />
      <Contact />
      <FooterBar />
    </div>
  );
}
