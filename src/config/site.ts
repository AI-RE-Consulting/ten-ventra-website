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
        name: "Data",
        body: "Proprietary signals from sources others don't have, tuned to your buy-box. The signal you'd build in-house, without the build.",
      },
      {
        number: "02",
        name: "Relationships",
        body: "We run the broker and cold-caller bench for you. Cold calls, warm intros, off-market sourcing — first-look deals land on your desk.",
      },
      {
        number: "03",
        name: "Intelligence",
        body: "An AI built into the platform, fluent in your buy-box. Talk it through; let it work.",
      },
    ],
  },
  contact: {
    intro:
      "For deal opportunities, partnerships, or general inquiries.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
