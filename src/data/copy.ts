// Copy for the journey. Lines marked COPY-TBD are placeholders to be rewritten later;
// everything else is lifted verbatim from the current tenventra.ai site.
export const COPY = {
  landing: {
    // Verbatim from the live tenventra.ai hero (2026-08-11).
    headline: "Real estate deal sourcing, done for you.",
    sub: "Tell us your buy-box. We find the opportunities, start the conversations, and bring you the deals worth pursuing.",
    scrollCue: "Scroll",
  },
  dive: {
    line: "Every deal starts with your buy-box.", // chosen 2026-08-13
  },
  offMarket: {
    title: "Off Market",
    // Rail sub-line: the machine. Approach sub-line: the story. Keep them distinct.
    sub: "Proprietary skip-tracing and automated outreach across calls, emails, letters and texts. Every touch tracked.",
    approach: "Off market, we run the outreach.", // shown before the California zoom
    approachSub: "Skip tracing, distress data, real conversations.", // list style per Lorenzo
  },
  onMarket: {
    title: "On Market",
    sub: "All newly listed deals, collected the moment they hit the market and matched against your buy-box.",
    approach: "On market, we deliver the moment a property lists.", // shown during the Phoenix approach
    approachSub: "Every new listing, filtered to your buy-box, in your inbox.",
  },
  ascend: {
    line: "One dedicated team. Both markets.", // chosen 2026-08-13
  },
  rail: {
    rankedSuffix: "Ranked by buy-box fit", // COPY-TBD
    skipTrace: "Skip trace owner", // COPY-TBD
    viewListing: "View listing", // COPY-TBD
  },
  contact: {
    // Mirrors the live tenventra.ai contact pattern: no form, one mailto button.
    title: "Tell us your buy-box.", // chosen 2026-08-12
    intro: "For deal opportunities, partnerships, or general inquiries.",
    cta: "Get in touch",
  },
  footer: `© ${new Date().getFullYear()} Ten Ventra, Inc.`,
} as const;
