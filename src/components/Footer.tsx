import { siteConfig, navLinks } from "@/content/content";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <Container className="grid gap-12 py-16 md:grid-cols-3">
        {/* Brand */}
        <div>
          <a href="#" className="font-serif text-xl font-bold text-white">
            {siteConfig.companyName}
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            {siteConfig.tagline}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Navigation
          </h4>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Contact
          </h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>{siteConfig.email}</li>
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.address}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6 text-center text-xs text-white/40">
          {siteConfig.copyright}
        </Container>
      </div>
    </footer>
  );
}
