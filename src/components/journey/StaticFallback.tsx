"use client";

import { PROPERTIES, OFF_FILTERS, ON_FILTERS } from "@/data/properties";
import { COPY } from "@/data/copy";
import { siteConfig } from "@/config/site";
import ChapterRail from "./ChapterRail";

export default function StaticFallback() {
  const offProps = PROPERTIES.filter((p) => p.kind === "off");
  const onProps = PROPERTIES.filter((p) => p.kind === "on");
  return (
    <main>
      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-ink px-6 text-center text-paper">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
          {COPY.landing.headline}
        </h1>
        <p className="mt-5 max-w-xl text-sm text-paper/70">{COPY.landing.sub}</p>
      </section>
      <section className="bg-[#101014] py-24">
        <div className="relative mx-auto h-[560px] max-w-sm">
          <ChapterRail
            theme="dark"
            title={COPY.offMarket.title}
            sub={COPY.offMarket.sub}
            chips={OFF_FILTERS}
            properties={offProps}
            active
            initialRank={1}
          />
        </div>
      </section>
      <section className="bg-paper py-24">
        <div className="relative mx-auto h-[560px] max-w-sm">
          <ChapterRail
            theme="light"
            title={COPY.onMarket.title}
            sub={COPY.onMarket.sub}
            chips={ON_FILTERS}
            properties={onProps}
            active
            initialRank={1}
          />
        </div>
      </section>
      <section className="bg-paper px-6 pb-16 text-ink">
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-3xl font-semibold tracking-tight">{COPY.contact.title}</h2>
          <p className="mt-2 text-sm text-ink/60">{COPY.contact.intro}</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-8 inline-block rounded-full bg-ink px-14 py-5 text-lg font-medium tracking-wide text-paper"
          >
            {COPY.contact.cta}
          </a>
          <p className="mt-4 text-xs text-ink/50">{siteConfig.email}</p>
          <p className="mt-10 text-[10px] text-ink/40">{COPY.footer}</p>
        </div>
      </section>
    </main>
  );
}
