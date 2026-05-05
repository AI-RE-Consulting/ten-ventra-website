import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/sections/reveal";

export function Approach() {
  return (
    <section
      id="approach"
      className="px-6 sm:px-10 pt-12 sm:pt-16 pb-12 sm:pb-16 bg-background scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-12">
            Approach
          </p>
        </Reveal>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none p-0">
          {siteConfig.approach.pillars.map((pillar, index) => (
            <Reveal
              as="li"
              key={pillar.number}
              delay={index * 0.12}
              className="border-t border-foreground pt-5"
            >
              <p className="font-mono text-xs text-muted-foreground mb-3">
                {pillar.number}
              </p>
              <h2 className="text-lg font-bold mb-2 text-foreground">
                {pillar.name}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
