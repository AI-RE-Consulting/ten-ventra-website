export const siteConfig = {
  name: "Ten Ventra",
  tagline: "Real estate deal sourcing", // tab title: "Ten Ventra | Real estate deal sourcing" (chosen 2026-09-05)
  description:
    "A real estate brokerage where humans own the relationship and AI owns the work.",
  url: "https://tenventra.ai",
  email: "hello@tenventra.ai",
} as const;

export type SiteConfig = typeof siteConfig;
