export const siteConfig = {
  name: "Ten Ventra",
  description:
    "A real estate brokerage where humans own the relationship and AI owns the work.",
  url: "https://tenventra.ai",
  hero: {
    headline: "Brokerage, rebuilt.",
    subtitle:
      "A real estate brokerage where humans own the relationship and AI owns the work.",
    primaryCta: { label: "Approach", href: "#approach" },
    secondaryCta: { label: "Contact", href: "#contact" },
  },
  approach: {
    pillars: [
      {
        number: "01",
        name: "Relationships",
        body: "Brokerage runs on trust. Owners, buyers, and lenders close deals with people, not platforms. That's why we amplify the human layer while rebuilding the stack underneath it.",
      },
      {
        number: "02",
        name: "Sourcing",
        body: "We surface the right opportunities before the market does, matching properties to specific demand and identifying owners likely to transact.",
      },
      {
        number: "03",
        name: "Execution",
        body: "Materials, follow-ups, comps, CRM. Software handles the work so brokers stay focused on the conversations that move deals forward.",
      },
    ],
  },
  contact: {
    intro:
      "For deal opportunities, partnerships, or general inquiries.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
