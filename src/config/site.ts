export const siteConfig = {
  name: "Ten Ventra",
  description:
    "A real estate brokerage where humans own the relationship and AI owns the work.",
  url: "https://tenventra.ai",
  email: "hello@tenventra.ai",
} as const;

export type SiteConfig = typeof siteConfig;
