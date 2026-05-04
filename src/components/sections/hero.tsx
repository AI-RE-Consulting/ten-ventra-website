import { InfiniteGridHero } from "@/components/ui/infinite-grid-hero";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <InfiniteGridHero
      headline={siteConfig.hero.headline}
      subtitle={siteConfig.hero.subtitle}
      primaryCta={siteConfig.hero.primaryCta}
      secondaryCta={siteConfig.hero.secondaryCta}
    />
  );
}
