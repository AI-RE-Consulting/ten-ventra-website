"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  Flag,
  MoreHorizontal,
  Trash2,
  Users,
} from "lucide-react";

const DISPLAY = "var(--font-space-grotesk), system-ui, sans-serif";
const BODY = "var(--font-fustat), system-ui, sans-serif";

const NAVY = "#0F172A";
const RED = "#930002";

function CardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-white/15 bg-white shadow-[0_40px_120px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
      {children}
    </div>
  );
}

function PropertyHeader({ withBadge = false }: { withBadge?: boolean }) {
  return (
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
          <p className="text-xs text-neutral-500">Los Angeles, CA 90016</p>
        </div>
      </div>
      {withBadge ? (
        <span
          className="text-[10px] font-medium px-2 py-1 rounded-full"
          style={{ background: "rgba(147,0,2,0.1)", color: RED }}
        >
          High priority
        </span>
      ) : (
        <MoreHorizontal className="w-4 h-4 text-neutral-400" />
      )}
    </div>
  );
}

/* ───────────────────────── Option A: Full ───────────────────────── */

function OptionA() {
  return (
    <div className="space-y-4 p-5" style={{ fontFamily: BODY }}>
      <PropertyHeader />

      <div className="h-px bg-neutral-200" />

      <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
        Match Signals
      </p>

      {/* Distress rating */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: "rgba(147,0,2,0.08)" }}>
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
              <span className="text-neutral-400 font-normal">/100</span>
            </span>
            <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-amber-100 text-amber-800">
              Moderate
            </span>
          </span>
        </div>
        <div className="h-1 rounded-full bg-neutral-100 overflow-hidden">
          <div className="h-full rounded-full bg-amber-500" style={{ width: "61%" }} />
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
              style={{ background: item.dot === "red" ? RED : "#f59e0b" }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <span className="text-xs font-medium text-neutral-900">
                  {item.title}
                </span>
                <span className={`text-xs whitespace-nowrap ${item.valueClass}`}>
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
              Buy box rating
            </span>
          </span>
          <span className="flex items-center gap-2">
            <span
              className="text-sm font-semibold text-neutral-900"
              style={{ fontFamily: DISPLAY }}
            >
              94<span className="text-neutral-400 font-normal">/100</span>
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

      <div className="flex gap-2 pt-1">
        <button
          type="button"
          className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs rounded-md border border-neutral-300 text-neutral-700 px-3 py-2 hover:bg-neutral-50 transition-colors"
        >
          <Trash2 className="w-3.5 h-3.5" />
          Remove
        </button>
        <button
          type="button"
          className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs rounded-md text-white px-3 py-2 hover:opacity-90 transition-opacity"
          style={{ background: RED }}
        >
          <Users className="w-3.5 h-3.5" />
          Get owner contacts
        </button>
      </div>
    </div>
  );
}

/* ───────────────────────── Option B: Compact two-rating ───────────────────────── */

function OptionB() {
  return (
    <div className="space-y-4 p-5" style={{ fontFamily: BODY }}>
      <PropertyHeader />

      <div className="h-px bg-neutral-200" />

      <div className="grid grid-cols-2 gap-2.5">
        <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Flag className="w-3 h-3" style={{ color: RED }} />
            <p className="text-[10px] uppercase tracking-wider text-neutral-500">
              Distress
            </p>
          </div>
          <p
            className="text-3xl font-semibold tracking-tight text-neutral-900 leading-none"
            style={{ fontFamily: DISPLAY }}
          >
            61
            <span className="text-base text-neutral-400 font-normal">/100</span>
          </p>
          <div className="h-1 mt-2 rounded-full bg-neutral-200 overflow-hidden">
            <div
              className="h-full rounded-full bg-amber-500"
              style={{ width: "61%" }}
            />
          </div>
          <p className="text-[10px] text-amber-700 font-medium mt-1.5">
            Moderate
          </p>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Check className="w-3 h-3 text-emerald-600" />
            <p className="text-[10px] uppercase tracking-wider text-neutral-500">
              Buy box
            </p>
          </div>
          <p
            className="text-3xl font-semibold tracking-tight text-neutral-900 leading-none"
            style={{ fontFamily: DISPLAY }}
          >
            94
            <span className="text-base text-neutral-400 font-normal">/100</span>
          </p>
          <div className="h-1 mt-2 rounded-full bg-neutral-200 overflow-hidden">
            <div
              className="h-full rounded-full bg-emerald-500"
              style={{ width: "94%" }}
            />
          </div>
          <p className="text-[10px] text-emerald-700 font-medium mt-1.5">
            Strong
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
          Top signals
        </p>
        <ul className="space-y-1.5">
          {[
            { dot: "red", text: "Owner death on title — heirs not yet vested" },
            { dot: "red", text: "$25,600 in unpaid property tax (since Aug 2024)" },
            { dot: "green", text: "ADU eligibility confirmed — 8-unit potential" },
            { dot: "green", text: "Recent leases at 11–14% premium to in-place" },
          ].map((s, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs text-neutral-700 leading-relaxed"
            >
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: s.dot === "red" ? RED : "#10b981" }}
              />
              <span>{s.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="w-full inline-flex items-center justify-center gap-1.5 text-xs rounded-md text-white px-3 py-2.5 hover:opacity-90 transition-opacity"
        style={{ background: RED }}
      >
        <Users className="w-3.5 h-3.5" />
        Get owner contacts
      </button>
    </div>
  );
}

/* ───────────────────────── Option C: Headline score ───────────────────────── */

function OptionC() {
  return (
    <div className="space-y-5 p-5" style={{ fontFamily: BODY }}>
      <PropertyHeader withBadge />

      <div className="text-center py-2">
        <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 font-mono">
          Buy box rating
        </p>
        <p
          className="text-6xl font-semibold tracking-tight text-neutral-900 leading-none"
          style={{ fontFamily: DISPLAY }}
        >
          94<span className="text-2xl text-neutral-400 font-normal">/100</span>
        </p>
        <p className="text-xs text-emerald-700 font-medium mt-2">Strong</p>
        <div className="h-1.5 mt-3 mx-auto max-w-[200px] rounded-full bg-neutral-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-emerald-500"
            style={{ width: "94%" }}
          />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
          Why it scores high
        </p>
        <ul className="space-y-1.5">
          {[
            "8-unit ADU eligibility confirmed",
            "Cap rate 5.4% vs. submarket 4.8%",
            "Recent leases +12% MTM premium",
          ].map((s, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs text-neutral-700 leading-relaxed"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-px bg-neutral-200" />

      <div className="flex items-start gap-2">
        <Flag
          className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
          style={{ color: RED }}
        />
        <p className="text-[11px] text-neutral-600 leading-snug">
          <span className="font-medium text-neutral-900">
            3 distress signals
          </span>{" "}
          — owner death on title, $25,600 unpaid tax, code enforcement
        </p>
      </div>

      <button
        type="button"
        className="w-full inline-flex items-center justify-center gap-1.5 text-xs rounded-md text-white px-3 py-2.5 hover:opacity-90 transition-opacity"
        style={{ background: RED }}
      >
        <Users className="w-3.5 h-3.5" />
        Get owner contacts
      </button>
    </div>
  );
}

/* ───────────────────────── Page ───────────────────────── */

const OPTIONS = [
  {
    letter: "A",
    title: "Full property card",
    blurb:
      "Faithful port of the platform screenshot — both ratings, every signal, both action buttons. Maximum information, tallest card.",
    Component: OptionA,
  },
  {
    letter: "B",
    title: "Compact ratings",
    blurb:
      "Both ratings side by side as the focal point, top 3–4 signals as bullets, single primary action. Balanced density.",
    Component: OptionB,
  },
  {
    letter: "C",
    title: "Headline score",
    blurb:
      "Leads with the buy box rating as a hero number, supporting reasons below, distress reduced to a one-line note. Most compact.",
    Component: OptionC,
  },
];

export default function PreviewOptionsPage() {
  return (
    <div
      className="min-h-screen text-white"
      style={{ background: NAVY, fontFamily: BODY }}
    >
      <header
        className="border-b border-white/[0.08]"
        style={{ background: "rgba(0,0,0,0.3)" }}
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <Link
            href="/v4"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            ← Back to v4
          </Link>
          <p className="text-xs uppercase tracking-[0.25em] text-white/40">
            v4 · platform preview options
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-16">
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-4">
            Pick one
          </p>
          <h1
            className="text-4xl md:text-5xl font-medium tracking-[-0.03em] text-white leading-tight"
            style={{ fontFamily: DISPLAY }}
          >
            Three options for the platform preview card.
          </h1>
          <p className="text-base text-white/65 mt-5 leading-relaxed max-w-2xl">
            Each option adapts the property-detail screen from your platform
            (2921 West Blvd) into the hero card on v4. They vary in density and
            visual hierarchy. Pick one and we&apos;ll wire it into v4 — or call
            out tweaks per option.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {OPTIONS.map((opt, i) => {
            const Component = opt.Component;
            return (
              <motion.div
                key={opt.letter}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="mb-5">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span
                      className="inline-flex items-center justify-center w-7 h-7 rounded-md text-white text-sm font-semibold"
                      style={{ background: RED, fontFamily: DISPLAY }}
                    >
                      {opt.letter}
                    </span>
                    <h2
                      className="text-xl font-medium tracking-tight text-white"
                      style={{ fontFamily: DISPLAY }}
                    >
                      {opt.title}
                    </h2>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {opt.blurb}
                  </p>
                </div>
                <CardShell>
                  <Component />
                </CardShell>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-3">
            Notes
          </p>
          <ul className="space-y-2 text-sm text-white/65 leading-relaxed">
            <li>
              • All three use real values from the screenshot (61 Moderate · 94
              Strong · $25,600 unpaid tax · 8-unit ADU · 5.4% cap · +12% MTM).
            </li>
            <li>
              • Brand red ({RED}) is applied to the badge, distress flag, and
              primary action so the card matches v4&apos;s palette even though
              it sits on a navy background.
            </li>
            <li>
              • Option A is closest to your actual product UI. B and C are
              landing-page summaries of that same data.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
