import Hero from "@/components/Hero";
import FeaturePanel from "@/components/FeaturePanel";
import ServiceCard from "@/components/ServiceCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";
import SectionLabel from "@/components/SectionLabel";
import Container from "@/components/Container";
import {
  homePage,
  servicesPage,
  caseStudiesPage,
  aboutPage,
  contactPage,
  siteConfig,
} from "@/content/content";

export default function HomePage() {
  const { hero, featurePanel, capabilities, platform, cta } = homePage;

  return (
    <>
      {/* ── Hero ── */}
      <Hero
        label={hero.label}
        headline={hero.headline}
        subheadline={hero.subheadline}
        showCTA
      >
        <FeaturePanel
          title={featurePanel.title}
          features={featurePanel.features}
        />
      </Hero>

      {/* ── Services ── */}
      <section id="services" className="scroll-mt-20 border-t border-border-light py-20">
        <Container>
          <SectionLabel>{capabilities.label}</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold lg:text-4xl">
            {capabilities.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-text-body">
            {capabilities.description}
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {capabilities.items.map((item) => (
              <ServiceCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          {/* Detailed services */}
          <div className="mt-20 space-y-16">
            {servicesPage.services.map((service, i) => (
              <div
                key={service.title}
                className={`grid items-start gap-12 lg:grid-cols-2 ${
                  i > 0 ? "border-t border-border-light pt-16" : ""
                }`}
              >
                <div>
                  <p className="text-sm font-medium text-text-muted">
                    0{i + 1}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold lg:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-lg text-accent">{service.subtitle}</p>
                  <p className="mt-4 leading-relaxed text-text-body">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-3">
                  {service.details.map((detail, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-text-body"
                    >
                      <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Our Approach ── */}
      <section className="border-t border-border-light bg-surface py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionLabel>{platform.label}</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold lg:text-4xl">
                {platform.headline}
              </h2>
              <p className="mt-4 text-text-body">{platform.description}</p>
            </div>
            <ul className="space-y-4">
              {platform.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-text-body"
                >
                  <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── Case Studies ── */}
      <section id="case-studies" className="scroll-mt-20 border-t border-border-light py-20">
        <Container>
          <SectionLabel>{caseStudiesPage.hero.label}</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold lg:text-4xl">
            {caseStudiesPage.hero.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-text-body">
            {caseStudiesPage.hero.subheadline}
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {caseStudiesPage.studies.map((study) => (
              <CaseStudyCard
                key={study.title}
                title={study.title}
                client={study.client}
                challenge={study.challenge}
                result={study.result}
                tags={study.tags}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ── About ── */}
      <section id="about" className="scroll-mt-20 border-t border-border-light bg-surface py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionLabel>{aboutPage.mission.label}</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold lg:text-4xl">
              {aboutPage.mission.headline}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              {aboutPage.mission.description}
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl border-t border-border-light pt-16">
            <SectionLabel>{aboutPage.story.label}</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold lg:text-4xl">
              {aboutPage.story.headline}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              {aboutPage.story.description}
            </p>
          </div>

          <div className="mt-16 border-t border-border-light pt-16">
            <SectionLabel>{aboutPage.values.label}</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold lg:text-4xl">
              {aboutPage.values.headline}
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {aboutPage.values.items.map((value) => (
                <div
                  key={value.title}
                  className="border-l-2 border-accent py-1 pl-6"
                >
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-body">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <CTABanner headline={cta.headline} description={cta.description} />

      {/* ── Contact ── */}
      <section id="contact" className="scroll-mt-20 border-t border-border-light py-20">
        <Container>
          <SectionLabel>{contactPage.hero.label}</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold lg:text-4xl">
            {contactPage.hero.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-text-body">
            {contactPage.hero.subheadline}
          </p>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <ContactForm />

            <div>
              <h3 className="text-xl font-semibold">
                {contactPage.info.heading}
              </h3>
              <p className="mt-2 text-text-body">
                {contactPage.info.description}
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Email
                  </p>
                  <p className="mt-1 text-text-body">{siteConfig.email}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Phone
                  </p>
                  <p className="mt-1 text-text-body">{siteConfig.phone}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Office
                  </p>
                  <p className="mt-1 text-text-body">{siteConfig.address}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
