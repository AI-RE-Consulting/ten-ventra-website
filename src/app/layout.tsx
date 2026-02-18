import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/content/content";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.companyName} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.companyName}`,
  },
  description:
    "AIRE Consulting helps real estate firms leverage artificial intelligence for market analytics, due diligence automation, and operational efficiency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background font-sans text-text-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
