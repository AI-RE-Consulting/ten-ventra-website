import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/sections/reveal";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="px-6 sm:px-10 pt-12 sm:pt-16 pb-24 sm:pb-32 bg-background scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
            Contact
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="text-base text-muted-foreground mb-10 max-w-2xl">
            {siteConfig.contact.intro}
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal className="h-full">
            <div className="h-full border border-border rounded-lg p-6 sm:p-8">
              <p className="font-mono text-xs text-muted-foreground mb-3">
                {siteConfig.contact.company.label}
              </p>
              <h2 className="text-lg font-bold mb-3 text-foreground">
                {siteConfig.name}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {siteConfig.contact.company.body}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="h-full">
            <div className="h-full border border-border rounded-lg p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
