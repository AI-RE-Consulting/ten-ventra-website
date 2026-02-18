"use client";

import { useState } from "react";
import { navLinks, siteConfig } from "@/content/content";
import Container from "./Container";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border-light bg-surface/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-xl font-bold text-navy">
          {siteConfig.companyName}
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-body transition-colors duration-200 hover:text-navy"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-block rounded-full border border-accent px-8 py-3 text-sm font-medium tracking-wide text-accent transition-colors duration-200 hover:bg-accent hover:text-white"
          >
            {siteConfig.scheduleCTA}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-navy transition-transform duration-200 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-navy transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-navy transition-transform duration-200 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border-light bg-surface md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-text-body"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-block rounded-full bg-accent px-8 py-3 text-center text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:bg-navy-light"
            >
              {siteConfig.scheduleCTA}
            </a>
          </Container>
        </div>
      )}
    </nav>
  );
}
