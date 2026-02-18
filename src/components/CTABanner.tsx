import Container from "./Container";
import { siteConfig } from "@/content/content";

interface CTABannerProps {
  headline: string;
  description: string;
}

export default function CTABanner({ headline, description }: CTABannerProps) {
  return (
    <section className="bg-navy py-20">
      <Container className="text-center">
        <h2 className="text-3xl font-bold text-white lg:text-4xl">
          {headline}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          {description}
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-block rounded-full border border-white bg-white px-8 py-3 text-sm font-medium tracking-wide text-navy transition-colors duration-200 hover:bg-white/90"
          >
            {siteConfig.scheduleCTA}
          </a>
        </div>
      </Container>
    </section>
  );
}
