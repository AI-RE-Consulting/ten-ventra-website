import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 sm:px-10 py-6 border-t border-border text-xs text-muted-foreground">
      © {year} {siteConfig.name}
    </footer>
  );
}
