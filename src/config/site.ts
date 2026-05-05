export const siteConfig = {
  name: "Ten Ventra",
  description:
    "A real estate brokerage where humans own trust and AI owns the work.",
  url: "https://tenventra.ai",
  hero: {
    headline: "Brokerage, rebuilt.",
    subtitle:
      "A real estate brokerage where humans own trust and AI owns the work.",
    primaryCta: { label: "Approach", href: "#approach" },
    secondaryCta: { label: "Contact", href: "#contact" },
  },
  approach: {
    pillars: [
      {
        number: "01",
        name: "Relationships",
        body: "Brokerage is fundamentally human. Owners, buyers, and lenders move on trust — and trust is built by people, not platforms.",
      },
      {
        number: "02",
        name: "Sourcing",
        body: "We surface the right opportunities before the market does, matching properties to specific demand and identifying owners likely to transact.",
      },
      {
        number: "03",
        name: "Execution",
        body: "Software absorbs the operational weight of every deal so brokers stay focused on the conversations that move transactions forward.",
      },
    ],
  },
  contact: {
    intro:
      "For deal opportunities, partnerships, or general inquiries.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
