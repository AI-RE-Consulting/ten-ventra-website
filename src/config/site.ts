export const siteConfig = {
  name: "Ten Ventra",
  description:
    "A real estate brokerage where humans own the relationship and AI owns the work.",
  url: "https://tenventra.ai",
  hero: {
    headline: "Real estate deal sourcing, done for you.",
    subtitle:
      "Tell us your buy-box. We find the opportunities, start the conversations, and bring you the deals worth pursuing.",
    primaryCta: { label: "Approach", href: "#approach" },
    secondaryCta: { label: "Contact", href: "#contact" },
  },
  approach: {
    pillars: [
      {
        number: "01",
        name: "Data",
        body: "Proprietary signals from sources others don't have, tuned to your buy-box. The signal you'd build in-house, without the build.",
      },
      {
        number: "02",
        name: "Relationships",
        body: "Cold calls, warm intros, and off-market sourcing, handled, so you see deals early.",
      },
      {
        number: "03",
        name: "Intelligence",
        body: "Technology that helps match opportunities to your criteria, surface owner signals, and support outreach.",
      },
    ],
  },
  contact: {
    intro:
      "For deal opportunities, partnerships, or general inquiries.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
