"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const SERIF = "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif";
const SANS = "var(--font-inter), system-ui, sans-serif";

const BG = "#0c1a2c";
const BG_ELEV = "#142537";
const BG_DEEP = "#0a1422";
const TEXT = "#f0e6d2";
const MUTED = "#b8a982";
const GOLD = "#c9a961";
const GOLD_DIM = "rgba(201,169,97,0.4)";
const HAIRLINE = "rgba(201,169,97,0.15)";

function NavBar() {
  return (
    <header
      className="absolute top-0 inset-x-0 z-40 border-b"
      style={{ borderColor: HAIRLINE }}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <Link
          href="/redesigns"
          className="text-sm tracking-[0.32em] uppercase"
          style={{ fontFamily: SANS, color: TEXT }}
        >
          Ten · Ventra
        </Link>
        <nav
          className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.22em]"
          style={{ fontFamily: SANS, color: MUTED }}
        >
          <a
            href="#approach"
            className="hover:text-[#c9a961] transition-colors"
          >
            Approach
          </a>
          <a
            href="#capabilities"
            className="hover:text-[#c9a961] transition-colors"
          >
            Capabilities
          </a>
          <a href="#demo" className="hover:text-[#c9a961] transition-colors">
            Demo
          </a>
          <a
            href="#contact"
            className="hover:text-[#c9a961] transition-colors"
          >
            Contact
          </a>
          <Link
            href="/redesigns"
            className="hover:text-[#c9a961] transition-colors"
            style={{ color: "#5d4f33" }}
          >
            ← Gallery
          </Link>
        </nav>
      </div>
    </header>
  );
}

function GoldRule({
  label,
  centered = false,
}: {
  label: string;
  centered?: boolean;
}) {
  return (
    <p
      className={`text-[10px] uppercase tracking-[0.4em] flex items-center gap-3 ${
        centered ? "justify-center" : ""
      }`}
      style={{ fontFamily: SANS, color: GOLD }}
    >
      <span
        className="h-px w-6"
        style={{ background: GOLD, opacity: 0.5 }}
      />
      {label}
      {centered && (
        <span
          className="h-px w-6"
          style={{ background: GOLD, opacity: 0.5 }}
        />
      )}
    </p>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-8 pt-32 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse at center top, ${BG_ELEV} 0%, ${BG} 60%, ${BG} 100%)`,
        }}
      />
      <div className="absolute inset-0 -z-10 [background-image:radial-gradient(rgba(201,169,97,0.06)_1px,transparent_1px)] [background-size:32px_32px] opacity-50" />

      <div className="max-w-6xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex justify-center"
        >
          <GoldRule label="Established 2026" centered />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-7xl md:text-8xl lg:text-[10rem] leading-[0.95] tracking-[-0.02em]"
          style={{ fontFamily: SERIF, color: TEXT }}
        >
          Brokerage,
          <br />
          <span className="italic" style={{ color: GOLD }}>
            rebuilt.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="text-lg md:text-xl mt-10 max-w-2xl mx-auto leading-relaxed italic"
          style={{ fontFamily: SERIF, color: MUTED }}
        >
          {siteConfig.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-14 flex items-center justify-center gap-8 text-xs uppercase tracking-[0.3em]"
          style={{ fontFamily: SANS }}
        >
          <a
            href="#approach"
            className="border-b pb-1 hover:text-[#c9a961] transition-colors"
            style={{ color: TEXT, borderColor: GOLD }}
          >
            Read the brief
          </a>
          <a
            href="#contact"
            className="hover:text-[#c9a961] transition-colors"
            style={{ color: MUTED }}
          >
            ↘ Inquiries
          </a>
        </motion.div>
      </div>

      <div
        className="absolute bottom-6 left-8 text-[10px] tracking-[0.3em] uppercase"
        style={{ fontFamily: SANS, color: "#5d4f33" }}
      >
        v3 · old money
      </div>
    </section>
  );
}

function FoundersLetter() {
  return (
    <section
      className="py-32 px-8 border-t"
      style={{ background: BG, borderColor: HAIRLINE }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-3 flex justify-center"
        >
          <GoldRule label="A letter from the founders" centered />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl tracking-[-0.02em] text-center max-w-3xl mx-auto leading-tight italic mb-16 mt-4"
          style={{ fontFamily: SERIF, color: TEXT }}
        >
          Why we are building, openly, in 2026.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="max-w-3xl mx-auto text-lg leading-[1.85] space-y-6"
          style={{ fontFamily: SERIF, color: "#d8cba6" }}
        >
          <p className="first-letter:text-7xl first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:text-[#c9a961]">
            We have been brokers, owners, and engineers — sometimes in the same
            week. We watched the industry buy software it did not need, and
            ignore the parts of the job that actually decided the deal.
          </p>
          <p>
            Brokerage is, at its core, an act of trust. A buyer trusts you to
            see what they cannot. An owner trusts you to bring the room.
            Software does not produce trust, and pretending otherwise is what
            broke the last decade of real estate technology.
          </p>
          <p>
            What software <em>can</em> do, when it is built carefully, is
            absorb the labor that gets in the way of the conversation. Comps,
            comps again, the third draft of the follow-up email, the CRM
            hygiene no broker ever wanted — these are the tasks Ten Ventra is
            built to disappear.
          </p>
          <p>
            We hope you will read the rest of this site as a brief, not a
            brochure. We believe the people who close deals deserve a tool
            written for them.
          </p>
          <p
            className="text-sm mt-10 not-italic"
            style={{ fontFamily: SANS, color: MUTED, letterSpacing: "0.05em" }}
          >
            — The founders, Ten Ventra
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section
      id="approach"
      className="py-32 px-8 border-t"
      style={{ background: BG, borderColor: HAIRLINE }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6">
            <GoldRule label="§ Approach" />
          </div>
          <h2
            className="text-4xl md:text-6xl tracking-[-0.02em] leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: SERIF, color: TEXT }}
          >
            Three principles that decide whether a brokerage{" "}
            <span className="italic" style={{ color: GOLD }}>
              endures
            </span>
            .
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {siteConfig.approach.pillars.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="text-center"
            >
              <p
                className="text-5xl italic font-normal mb-4"
                style={{ fontFamily: SERIF, color: GOLD }}
              >
                {p.number}
              </p>
              <span
                className="block h-px w-12 mx-auto mb-6"
                style={{ background: GOLD }}
              />
              <h3
                className="text-2xl tracking-tight mb-4"
                style={{ fontFamily: SERIF, color: TEXT }}
              >
                {p.name}
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: SERIF, color: MUTED }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const V3_CAPABILITIES = [
  {
    num: "I.",
    t: "Owner intent",
    b: "The owners likely to transact, surfaced before any listing exists.",
  },
  {
    num: "II.",
    t: "Buyer matching",
    b: "Properties paired to specific demand, by signal and by fit.",
  },
  {
    num: "III.",
    t: "Auto-comparables",
    b: "Comp sets composed in seconds, with the rigor of a long afternoon.",
  },
  {
    num: "IV.",
    t: "Outreach drafting",
    b: "First drafts written in the broker's own voice, ready for the send.",
  },
  {
    num: "V.",
    t: "Pipeline & CRM",
    b: "The hygiene work disappears into the background, where it belongs.",
  },
  {
    num: "VI.",
    t: "Material preparation",
    b: "Briefs, offering memoranda, follow-up notes — assembled on request.",
  },
];

function CapabilitiesV3() {
  return (
    <section
      id="capabilities"
      className="py-32 px-8 border-t"
      style={{ background: BG_ELEV, borderColor: HAIRLINE }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6">
            <GoldRule label="§ Index of capabilities" />
          </div>
          <h2
            className="text-4xl md:text-6xl tracking-[-0.02em] leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: SERIF, color: TEXT }}
          >
            The platform, as it stands today.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {V3_CAPABILITIES.map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="border-t pt-6"
              style={{ borderColor: "rgba(201,169,97,0.2)" }}
            >
              <div className="flex items-baseline gap-4">
                <span
                  className="text-3xl italic font-normal"
                  style={{ fontFamily: SERIF, color: GOLD }}
                >
                  {c.num}
                </span>
                <h3
                  className="text-2xl tracking-tight"
                  style={{ fontFamily: SERIF, color: TEXT }}
                >
                  {c.t}
                </h3>
              </div>
              <p
                className="mt-3 text-base leading-relaxed"
                style={{ fontFamily: SERIF, color: MUTED }}
              >
                {c.b}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoSpread() {
  return (
    <section
      id="demo"
      className="py-32 px-8 border-t"
      style={{ background: BG, borderColor: HAIRLINE }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <GoldRule label="§ A walk-through" />
          </div>
          <h2
            className="text-4xl md:text-6xl tracking-[-0.02em] leading-tight max-w-3xl mx-auto italic"
            style={{ fontFamily: SERIF, color: TEXT }}
          >
            The platform, in moving image.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <div
            className="absolute -inset-1.5 rounded-sm pointer-events-none"
            style={{ border: `1px solid ${GOLD_DIM}` }}
          />
          <div
            className="relative aspect-[16/9] rounded-sm overflow-hidden"
            style={{
              background: BG_DEEP,
              border: `1px solid ${GOLD}`,
            }}
          >
            <div className="absolute inset-0 [background-image:radial-gradient(rgba(201,169,97,0.06)_1px,transparent_1px)] [background-size:8px_8px] opacity-50" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at top, rgba(201,169,97,0.08), transparent 60%)",
              }}
            />
            <div className="absolute top-5 left-6 right-6 flex items-center justify-between">
              <span
                className="text-[10px] uppercase tracking-[0.3em]"
                style={{ fontFamily: SANS, color: MUTED }}
              >
                Ten Ventra · Reel
              </span>
              <span
                className="text-[10px] uppercase tracking-[0.3em]"
                style={{ fontFamily: SANS, color: GOLD }}
              >
                Vol. 01
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                className="group w-24 h-24 rounded-full flex items-center justify-center transition-colors"
                style={{
                  border: `1px solid ${GOLD}`,
                  background: BG,
                  color: GOLD,
                }}
                aria-label="Play demo film"
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 ml-1 fill-current">
                  <path d="M5 3l14 9-14 9z" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
              <span
                className="text-[10px] uppercase tracking-[0.3em]"
                style={{ fontFamily: SANS, color: MUTED }}
              >
                3 min, 14 sec
              </span>
              <span
                className="text-[10px] uppercase tracking-[0.3em]"
                style={{ fontFamily: SANS, color: MUTED }}
              >
                4K · subtitled
              </span>
            </div>
          </div>
        </motion.div>
        <motion.figcaption
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 max-w-3xl mx-auto text-center"
        >
          <p
            className="text-[11px] uppercase tracking-[0.4em] mb-3"
            style={{ fontFamily: SANS, color: GOLD }}
          >
            Fig. 01
          </p>
          <p
            className="text-lg italic leading-relaxed"
            style={{ fontFamily: SERIF, color: MUTED }}
          >
            The film opens on a single owner signal. By the third minute, an
            outreach draft sits beside it, written in the broker&apos;s own
            voice and waiting for one keystroke.
          </p>
        </motion.figcaption>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-8 border-t"
      style={{ background: BG_DEEP, borderColor: HAIRLINE }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <GoldRule label="Correspondence" centered />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl tracking-[-0.02em] leading-tight"
          style={{ fontFamily: SERIF, color: TEXT }}
        >
          For the deals that{" "}
          <span className="italic" style={{ color: GOLD }}>
            deserve a careful hand.
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-lg mt-8 max-w-xl mx-auto leading-relaxed italic"
          style={{ fontFamily: SERIF, color: MUTED }}
        >
          {siteConfig.contact.intro}
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          href="mailto:hello@tenventra.ai"
          className="inline-block mt-10 text-2xl md:text-3xl border-b pb-2 hover:text-[#c9a961] transition-colors"
          style={{ fontFamily: SERIF, color: TEXT, borderColor: GOLD }}
        >
          hello@tenventra.ai
        </motion.a>
      </div>
    </section>
  );
}

function FooterBar() {
  return (
    <footer
      className="border-t py-10 px-8"
      style={{
        background: "#08111d",
        borderColor: HAIRLINE,
        fontFamily: SANS,
      }}
    >
      <div
        className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-[0.3em]"
        style={{ color: "#5d4f33" }}
      >
        <span>© {new Date().getFullYear()} · Ten Ventra</span>
        <Link
          href="/redesigns"
          className="hover:text-[#c9a961] transition-colors"
        >
          ← Gallery
        </Link>
      </div>
    </footer>
  );
}

export default function V3Page() {
  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT }}>
      <NavBar />
      <Hero />
      <FoundersLetter />
      <Approach />
      <CapabilitiesV3 />
      <DemoSpread />
      <Contact />
      <FooterBar />
    </div>
  );
}
