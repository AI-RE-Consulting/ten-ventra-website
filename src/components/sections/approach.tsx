import { siteConfig } from "@/config/site";

export function Approach() {
  return (
    <section className="flex-1 px-6 sm:px-10 py-20 sm:py-24 bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-12">
          Approach
        </p>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none p-0">
          {siteConfig.approach.pillars.map((pillar) => (
            <li
              key={pillar.number}
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
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
