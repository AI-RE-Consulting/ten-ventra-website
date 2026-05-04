import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact — Ten Ventra",
};

export default function ContactPage() {
  return (
    <section className="flex-1 px-6 sm:px-10 py-20 sm:py-24 bg-background">
      <div className="max-w-xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-8">
          Contact
        </p>
        <p className="text-base text-muted-foreground mb-8">
          {siteConfig.contact.intro}
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
