import Container from "./Container";
import SectionLabel from "./SectionLabel";
import { siteConfig } from "@/content/content";

interface HeroProps {
  label: string;
  headline: string;
  subheadline: string;
  showCTA?: boolean;
  children?: React.ReactNode;
}

export default function Hero({
  label,
  headline,
  subheadline,
  showCTA = false,
  children,
}: HeroProps) {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div>
            <SectionLabel>{label}</SectionLabel>
            <h1 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl xl:text-6xl">
              {headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              {subheadline}
            </p>
            {showCTA && (
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-block rounded-full bg-accent px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:bg-navy-light"
                >
                  {siteConfig.scheduleCTA}
                </a>
                <a
                  href="#services"
                  className="inline-block rounded-full border border-accent px-8 py-3 text-sm font-medium tracking-wide text-accent transition-colors duration-200 hover:bg-accent hover:text-white"
                >
                  Our Services
                </a>
              </div>
            )}
          </div>

          {/* Right panel / children */}
          {children && <div>{children}</div>}
        </div>
      </Container>
    </section>
  );
}
