# Ten Ventra Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 3-page marketing website for Ten Ventra (`/`, `/approach`, `/contact`) per the design spec at `docs/superpowers/specs/2026-05-04-ten-ventra-website-design.md`, deployed-ready on Vercel with the contact form stubbed pending Resend wiring.

**Architecture:** Next.js 16 App Router. Each route is its own page; a shared `Header` (live PT timestamp client component) and `Footer` are mounted in the root layout so they render on every page. The interactive grid hero from `src/components/ui/infinite-grid-hero.tsx` is refactored to accept copy and CTA props, then composed into the landing page. The contact form POSTs to a stub Next.js route handler that logs the payload and returns `{ ok: true }` until Resend is wired in a follow-up task.

**Tech Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui (new-york) · Inter + Fragment Mono via `next/font/google` · framer-motion (already in the existing hero) · pnpm.

**Important — Next.js 16 caveats:** This project's `AGENTS.md` warns "This is NOT the Next.js you know" and asks contributors to read `node_modules/next/dist/docs/` before writing code. Skim that directory's relevant guides (App Router, route handlers, `next/font`, metadata) before each task that touches new APIs. If a pattern in this plan conflicts with what those docs say for v16.2.3, follow the docs.

**Verification model:** This is a static marketing site with no business logic, so traditional unit tests would be lower-value than they are for application code. Each task verifies via `pnpm typecheck`, `pnpm lint`, `pnpm build`, and (for visual changes) `pnpm dev` + manual browser inspection. The plan calls out exactly what to look at for each visual check.

**Commit cadence:** Commit after every task. The plan provides a commit step at the end of each task with a suggested message.

---

### Task 1: Add `typecheck` script and verify the project still builds

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Read `package.json` to confirm current scripts**

Run:
```bash
cd ~/Desktop/ten-ventra-website
cat package.json
```

Expected: `scripts` block contains `dev`, `build`, `start`, `lint`. No `typecheck` script.

- [ ] **Step 2: Add a `typecheck` script**

Edit `package.json` so the `scripts` block reads:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint",
  "typecheck": "tsc --noEmit"
}
```

- [ ] **Step 3: Install dependencies if needed and verify the project builds clean before any code changes**

Run:
```bash
pnpm install
pnpm typecheck
pnpm lint
pnpm build
```

Expected: all four commands exit 0. If any fail before changes, stop and report — the failure isn't from this plan.

- [ ] **Step 4: Commit**

```bash
git add package.json
git commit -m "chore: add typecheck script"
```

---

### Task 2: Update `siteConfig` with Ten Ventra brand, pillars, and contact copy

**Files:**
- Modify: `src/config/site.ts`

- [ ] **Step 1: Replace the file contents**

Write `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: "Ten Ventra",
  description:
    "A real estate brokerage where humans own trust and AI owns the work.",
  url: "https://tenventra.ai",
  hero: {
    headline: "Brokerage, rebuilt.",
    subtitle:
      "A real estate brokerage where humans own trust and AI owns the work.",
    primaryCta: { label: "Approach", href: "/approach" },
    secondaryCta: { label: "Contact", href: "/contact" },
  },
  approach: {
    pillars: [
      {
        number: "01",
        name: "Relationships",
        body: "Brokerage is fundamentally human. Owners, buyers, and lenders move on trust — and trust is built by people, not platforms.",
      },
      {
        number: "02",
        name: "Sourcing",
        body: "We surface the right opportunities before the market does, matching properties to specific demand and identifying owners likely to transact.",
      },
      {
        number: "03",
        name: "Execution",
        body: "Software absorbs the operational weight of every deal so brokers stay focused on the conversations that move transactions forward.",
      },
    ],
  },
  contact: {
    intro:
      "For deal opportunities, partnerships, or general inquiries.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
```

- [ ] **Step 2: Verify typecheck still passes**

Run: `pnpm typecheck`
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
git add src/config/site.ts
git commit -m "feat(config): set Ten Ventra brand, pillars, and contact copy"
```

---

### Task 3: Configure Inter + Fragment Mono fonts and update root layout metadata

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

**Reference:** Skim `node_modules/next/dist/docs/01-app/05-api-reference/01-directives/03-use-cache.mdx` and the `next/font` guide if you're unsure of any v16 specifics. The pattern below uses the standard `next/font/google` API.

- [ ] **Step 1: Replace `src/app/layout.tsx` with the updated version**

Write `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Inter, Fragment_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fragmentMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Open `src/app/globals.css` and confirm/extend the Tailwind v4 theme so `font-sans` and `font-mono` map to the CSS variables**

Read the existing file first:
```bash
cat src/app/globals.css
```

If the file already has a `@theme` block (Tailwind v4 inline theme), add these tokens inside it:

```css
@theme inline {
  --font-sans: var(--font-inter);
  --font-mono: var(--font-fragment-mono);
}
```

If `@theme` already declares `--font-sans` / `--font-mono`, replace the values with the variables above. Do not delete other tokens (shadcn registers color tokens in this file).

- [ ] **Step 3: Verify build (this will fail because Header/Footer don't exist yet — that is expected; you'll fix it in Task 4)**

Run: `pnpm typecheck`
Expected: error about `@/components/layout/header` and `@/components/layout/footer` not being found. Do not commit yet — proceed to Task 4 first, then come back here.

- [ ] **Step 4: Defer the commit until after Task 5 so the tree compiles**

(No commit. Continue.)

---

### Task 4: Build the `Footer` component

**Files:**
- Create: `src/components/layout/footer.tsx`

- [ ] **Step 1: Write `src/components/layout/footer.tsx`**

```tsx
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 sm:px-10 py-6 border-t border-border text-xs text-muted-foreground">
      © {year} {siteConfig.name}
    </footer>
  );
}
```

- [ ] **Step 2: Verify typecheck (will still fail because `Header` is missing — that is expected; fix in Task 5)**

Run: `pnpm typecheck`
Expected: error about `@/components/layout/header` only. Continue.

---

### Task 5: Build the `Header` component with live PT timestamp

**Files:**
- Create: `src/components/layout/header.tsx`

- [ ] **Step 1: Write `src/components/layout/header.tsx`**

This must be a client component because it uses `useEffect` to update the clock every second. It renders an empty placeholder pre-hydration to avoid layout shift.

```tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

function formatPacificTimestamp(now: Date): string {
  const dateAndTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(now);

  const seconds = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(now);

  return `${dateAndTime} PT · ${seconds}`;
}

export function Header() {
  const [stamp, setStamp] = useState<string>("");

  useEffect(() => {
    const tick = () => setStamp(formatPacificTimestamp(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="px-6 sm:px-10 py-5 flex items-baseline justify-between text-sm">
      <Link
        href="/"
        aria-label={`${siteConfig.name} — home`}
        className="font-bold tracking-tight text-foreground"
      >
        {siteConfig.name}
      </Link>
      <span
        aria-hidden="true"
        suppressHydrationWarning
        className="font-mono text-xs text-muted-foreground"
      >
        {stamp || " "}
      </span>
    </header>
  );
}
```

- [ ] **Step 2: Verify typecheck and lint pass**

Run:
```bash
pnpm typecheck
pnpm lint
```
Expected: both exit 0.

- [ ] **Step 3: Verify build**

Run: `pnpm build`
Expected: exits 0. Build artifacts produced.

- [ ] **Step 4: Manual visual check**

Run: `pnpm dev`
Open http://localhost:3000.
Expected: header shows `Ten Ventra` on the left and a live timestamp like `May 4, 2026, 03:14 PM PT · 15:14:22` on the right that updates every second. Footer at the bottom reads `© 2026 Ten Ventra`. Stop the dev server with Ctrl+C.

- [ ] **Step 5: Commit Tasks 3–5 together (font setup, layout wiring, header, footer)**

```bash
git add src/app/layout.tsx src/app/globals.css src/components/layout/header.tsx src/components/layout/footer.tsx
git commit -m "feat(layout): add Inter/Fragment Mono fonts, header with live PT clock, and footer"
```

---

### Task 6: Refactor `InfiniteGridHero` to accept copy and CTA props, raise base grid opacity, replace placeholder buttons

**Files:**
- Modify: `src/components/ui/infinite-grid-hero.tsx`

- [ ] **Step 1: Replace the file with the parameterized version**

```tsx
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from "framer-motion";

export type HeroCta = {
  label: string;
  href: string;
};

export type InfiniteGridHeroProps = {
  headline: string;
  subtitle: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  /** Resting opacity of the base grid layer. Default 0.15. */
  gridOpacity?: number;
  className?: string;
};

export const InfiniteGridHero = ({
  headline,
  subtitle,
  primaryCta,
  secondaryCta,
  gridOpacity = 0.15,
  className,
}: InfiniteGridHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const speedX = 0.5;
  const speedY = 0.5;

  useAnimationFrame(() => {
    const currentX = gridOffsetX.get();
    const currentY = gridOffsetY.get();
    gridOffsetX.set((currentX + speedX) % 40);
    gridOffsetY.set((currentY + speedY) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative w-full flex-1 flex flex-col items-center justify-center overflow-hidden bg-background",
        className,
      )}
    >
      <div
        className="absolute inset-0 z-0"
        style={{ opacity: gridOpacity }}
        aria-hidden="true"
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>
      <motion.div
        className="absolute inset-0 z-0 opacity-40"
        style={{ maskImage, WebkitMaskImage: maskImage }}
        aria-hidden="true"
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute right-[-20%] top-[-20%] w-[40%] h-[40%] rounded-full bg-orange-500/40 blur-[120px]" />
        <div className="absolute right-[10%] top-[-10%] w-[20%] h-[20%] rounded-full bg-primary/30 blur-[100px]" />
        <div className="absolute left-[-10%] bottom-[-20%] w-[40%] h-[40%] rounded-full bg-blue-500/40 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto space-y-6 pointer-events-none">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground drop-shadow-sm">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pointer-events-auto">
          <Link
            href={primaryCta.href}
            className="px-7 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all shadow-md active:scale-[0.98]"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="px-7 py-3 border border-border bg-background/60 text-foreground font-semibold rounded-md hover:bg-secondary/60 transition-all active:scale-[0.98]"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const GridPattern = ({
  offsetX,
  offsetY,
}: {
  offsetX: ReturnType<typeof useMotionValue<number>>;
  offsetY: ReturnType<typeof useMotionValue<number>>;
}) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id="grid-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-muted-foreground"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
};
```

Key changes from the original:
- Accepts `headline`, `subtitle`, `primaryCta`, `secondaryCta`, `gridOpacity`, `className` props.
- Removed the local `count` state and the placeholder `Interact ({count})` / `Learn More` buttons. CTAs are now `next/link` `Link`s rendered from props.
- Container is `flex-1` (fills the parent's remaining vertical space) instead of `h-screen` so the layout's header + hero + footer stack neatly within one viewport.
- Base grid layer opacity is now controlled by the `gridOpacity` prop (default `0.15`) instead of the hard-coded `opacity-[0.05]`.
- Decorative SVGs and blur layers receive `aria-hidden="true"`.

- [ ] **Step 2: Verify typecheck and lint**

Run:
```bash
pnpm typecheck
pnpm lint
```
Expected: both exit 0.

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/infinite-grid-hero.tsx
git commit -m "refactor(hero): parameterize grid hero copy/CTAs, raise base opacity"
```

---

### Task 7: Build the `Hero` section wrapper and wire up the landing page

**Files:**
- Create: `src/components/sections/hero.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Write `src/components/sections/hero.tsx`**

```tsx
import { InfiniteGridHero } from "@/components/ui/infinite-grid-hero";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <InfiniteGridHero
      headline={siteConfig.hero.headline}
      subtitle={siteConfig.hero.subtitle}
      primaryCta={siteConfig.hero.primaryCta}
      secondaryCta={siteConfig.hero.secondaryCta}
    />
  );
}
```

- [ ] **Step 2: Replace `src/app/page.tsx`**

```tsx
import { Hero } from "@/components/sections/hero";

export default function HomePage() {
  return <Hero />;
}
```

- [ ] **Step 3: Verify typecheck, lint, build**

Run:
```bash
pnpm typecheck
pnpm lint
pnpm build
```
Expected: all three exit 0.

- [ ] **Step 4: Manual visual check**

Run: `pnpm dev`
Open http://localhost:3000.
Expected:
- Header visible at top with wordmark + live PT timestamp.
- Hero fills the rest of the viewport: animated grid clearly visible at rest (the 0.15 opacity bump is the difference vs. the previous near-invisible grid), mouse-spotlight reveal still works, three colored blurs visible at the corners.
- H1 reads `Brokerage, rebuilt.`, subtitle reads `A real estate brokerage where humans own trust and AI owns the work.`
- Two CTA buttons: `Approach` (primary, dark) and `Contact` (secondary, outlined). Clicking `Approach` will 404 for now (expected — Task 8). Clicking `Contact` will 404 for now (expected — Task 10).
- Footer reads `© 2026 Ten Ventra` and is visible at the bottom of the same viewport without scrolling on a typical desktop window.

Stop the dev server.

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/hero.tsx src/app/page.tsx
git commit -m "feat(landing): replace default page with the grid hero"
```

---

### Task 8: Build the `Approach` section component

**Files:**
- Create: `src/components/sections/approach.tsx`

- [ ] **Step 1: Write `src/components/sections/approach.tsx`**

```tsx
import { siteConfig } from "@/config/site";

export function Approach() {
  return (
    <section className="flex-1 px-6 sm:px-10 py-20 sm:py-24 bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-12">
          Approach
        </p>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none p-0">
          {siteConfig.approach.pillars.map((pillar) => (
            <li
              key={pillar.number}
              className="border-t border-foreground pt-5"
            >
              <p className="font-mono text-xs text-muted-foreground mb-3">
                {pillar.number}
              </p>
              <h2 className="text-lg font-bold mb-2 text-foreground">
                {pillar.name}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify typecheck and lint**

Run:
```bash
pnpm typecheck
pnpm lint
```
Expected: both exit 0.

(No commit yet — paired with Task 9.)

---

### Task 9: Wire up the `/approach` route

**Files:**
- Create: `src/app/approach/page.tsx`

- [ ] **Step 1: Write `src/app/approach/page.tsx`**

```tsx
import type { Metadata } from "next";
import { Approach } from "@/components/sections/approach";

export const metadata: Metadata = {
  title: "Approach — Ten Ventra",
};

export default function ApproachPage() {
  return <Approach />;
}
```

- [ ] **Step 2: Verify typecheck, lint, build**

Run:
```bash
pnpm typecheck
pnpm lint
pnpm build
```
Expected: all three exit 0. Build output should list `/approach` as a route.

- [ ] **Step 3: Manual visual check**

Run: `pnpm dev`
Open http://localhost:3000/approach.
Expected: header at top, `APPROACH` small uppercase label, three pillars in a row (Relationships / Sourcing / Execution) on desktop, stacking to one column on mobile width. Each pillar has a top border, a `01`/`02`/`03` number, name, and body. Footer at the bottom.

Click the `Ten Ventra` wordmark in the header — should navigate back to `/`. Click `Approach` from the hero buttons on `/` — should navigate here.

Stop the dev server.

- [ ] **Step 4: Commit Tasks 8 and 9 together**

```bash
git add src/components/sections/approach.tsx src/app/approach/page.tsx
git commit -m "feat(approach): add /approach page with three pillars"
```

---

### Task 10: Build the `ContactForm` client component

**Files:**
- Create: `src/components/sections/contact-form.tsx`

- [ ] **Step 1: Write `src/components/sections/contact-form.tsx`**

```tsx
"use client";

import { useState, type FormEvent } from "react";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "submitting" });

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || payload.message.length < 10) {
      setStatus({
        kind: "error",
        message: "Please complete every field. Messages must be at least 10 characters.",
      });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Request failed");
      }
      setStatus({ kind: "success" });
    } catch (err) {
      setStatus({
        kind: "error",
        message:
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again.",
      });
    }
  }

  if (status.kind === "success") {
    return (
      <p className="text-sm text-muted-foreground">
        Thanks — we&apos;ll be in touch.
      </p>
    );
  }

  const isSubmitting = status.kind === "submitting";
  const fieldClass =
    "w-full rounded-md border border-border bg-background px-3.5 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5" noValidate>
      <label className="sr-only" htmlFor="contact-name">
        Name
      </label>
      <input
        id="contact-name"
        name="name"
        type="text"
        autoComplete="name"
        placeholder="Name"
        required
        className={fieldClass}
      />

      <label className="sr-only" htmlFor="contact-email">
        Email
      </label>
      <input
        id="contact-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Email"
        required
        className={fieldClass}
      />

      <label className="sr-only" htmlFor="contact-message">
        Message
      </label>
      <textarea
        id="contact-message"
        name="message"
        placeholder="Message"
        required
        minLength={10}
        rows={5}
        className={`${fieldClass} resize-vertical min-h-[140px]`}
      />

      {status.kind === "error" && (
        <p role="alert" className="text-sm text-destructive">
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="self-start px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
```

- [ ] **Step 2: Verify typecheck and lint**

Run:
```bash
pnpm typecheck
pnpm lint
```
Expected: both exit 0.

(No commit yet — paired with Tasks 11 and 12.)

---

### Task 11: Build the `/api/contact` route handler stub

**Files:**
- Create: `src/app/api/contact/route.ts`

- [ ] **Step 1: Write `src/app/api/contact/route.ts`**

```ts
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 },
    );
  }
  if (message.length < 10) {
    return NextResponse.json(
      { error: "Message is too short" },
      { status: 400 },
    );
  }

  // TODO(resend): replace this stub with a real Resend send call.
  console.log("[contact] submission received", { name, email, message });

  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 2: Verify typecheck and lint**

Run:
```bash
pnpm typecheck
pnpm lint
```
Expected: both exit 0.

(No commit yet — paired with Task 12.)

---

### Task 12: Wire up the `/contact` route

**Files:**
- Create: `src/app/contact/page.tsx`

- [ ] **Step 1: Write `src/app/contact/page.tsx`**

```tsx
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
```

- [ ] **Step 2: Verify typecheck, lint, build**

Run:
```bash
pnpm typecheck
pnpm lint
pnpm build
```
Expected: all three exit 0. Build output should list `/contact` and `/api/contact` as routes.

- [ ] **Step 3: Manual visual + functional check**

Run: `pnpm dev`

Visit http://localhost:3000/contact.
Expected:
- Header + footer present.
- Small uppercase `CONTACT` label.
- Intro line: `For deal opportunities, partnerships, or general inquiries.`
- Three fields (Name, Email, Message) and a `Send message` button.

Test the form:
1. Click `Send message` with empty fields → inline error `Please complete every field. Messages must be at least 10 characters.`
2. Fill in `Name: Test`, `Email: notanemail`, `Message: short` → button posts, server returns 400, error renders with the server's error message.
3. Fill in `Name: Test`, `Email: test@example.com`, `Message: This is a real test message`. Click `Send message`. Expected: form is replaced by `Thanks — we'll be in touch.` Check the dev server terminal — you should see `[contact] submission received { name: 'Test', email: 'test@example.com', message: '...' }`.

Click `Ten Ventra` to return home, then click the `Contact` button in the hero — should navigate to `/contact`.

Stop the dev server.

- [ ] **Step 4: Commit Tasks 10, 11, 12 together**

```bash
git add src/components/sections/contact-form.tsx src/app/api/contact/route.ts src/app/contact/page.tsx
git commit -m "feat(contact): add stubbed contact form and /api/contact handler"
```

---

### Task 13: Remove unused 21st.dev components

**Files:**
- Delete: `src/components/ui/contact-2.tsx`
- Delete: `src/components/ui/contact-sections.tsx`
- Delete: `src/components/ui/contact-sections-demo.tsx`
- Delete: `src/components/ui/footer-section.tsx`
- Delete: `src/components/ui/footer-column.tsx`

- [ ] **Step 1: Confirm none of these files are imported anywhere**

Run:
```bash
cd ~/Desktop/ten-ventra-website
grep -r --include='*.ts' --include='*.tsx' -nE 'contact-2|contact-sections|contact-sections-demo|footer-section|footer-column' src/
```
Expected: only the file definitions themselves (and possibly internal imports between footer-section/footer-column). If anything in `src/app/` or `src/components/sections/` imports them, stop and investigate before deleting.

- [ ] **Step 2: Delete the files**

```bash
rm src/components/ui/contact-2.tsx
rm src/components/ui/contact-sections.tsx
rm src/components/ui/contact-sections-demo.tsx
rm src/components/ui/footer-section.tsx
rm src/components/ui/footer-column.tsx
```

- [ ] **Step 3: Verify the project still builds**

Run:
```bash
pnpm typecheck
pnpm lint
pnpm build
```
Expected: all three exit 0.

- [ ] **Step 4: Commit**

```bash
git add -A src/components/ui/
git commit -m "chore: remove unused 21st.dev components"
```

---

### Task 14: Final end-to-end verification

- [ ] **Step 1: Clean install + full build**

Run:
```bash
cd ~/Desktop/ten-ventra-website
pnpm install
pnpm typecheck
pnpm lint
pnpm build
```
Expected: all four exit 0.

- [ ] **Step 2: End-to-end manual QA**

Run: `pnpm dev`

Walk through this checklist with the browser at http://localhost:3000:

1. **Landing (`/`)**
   - Header: wordmark + live PT timestamp updates every second.
   - Hero: animated grid visible at rest, mouse spotlight reveals brighter grid on hover, three colored blurs visible.
   - H1: `Brokerage, rebuilt.`
   - Subtitle: `A real estate brokerage where humans own trust and AI owns the work.`
   - Two CTAs: `Approach`, `Contact`.
   - Footer: `© 2026 Ten Ventra` visible at bottom of the same viewport.
   - Responsive: resize browser narrower; CTAs stack vertically; hero text sizes scale down at sm/md breakpoints.

2. **`/approach`**
   - Header + footer render.
   - `APPROACH` label.
   - Three pillars in a row on desktop, stacked on mobile. Numbers `01`, `02`, `03`. Names: Relationships, Sourcing, Execution. Bodies match `siteConfig`.

3. **`/contact`**
   - Header + footer render.
   - `CONTACT` label, intro line, three fields, button.
   - Empty submit → client-side error.
   - Bad email → server-side 400 surfaced inline.
   - Valid submission → success state.

4. **Navigation**
   - Hero `Approach` button → `/approach`.
   - Hero `Contact` button → `/contact`.
   - Wordmark on every page → `/`.

5. **Lighthouse smoke check (optional but recommended)**

In Chrome devtools, run a Lighthouse report against `/`. Performance and accessibility scores should both be ≥ 90.

Stop the dev server.

- [ ] **Step 3: Confirm git is clean**

Run: `git status`
Expected: `nothing to commit, working tree clean`.

- [ ] **Step 4: Confirm log**

Run: `git log --oneline | head -15`
Expected (newest at top, names may differ slightly):
```
chore: remove unused 21st.dev components
feat(contact): add stubbed contact form and /api/contact handler
feat(approach): add /approach page with three pillars
feat(landing): replace default page with the grid hero
refactor(hero): parameterize grid hero copy/CTAs, raise base opacity
feat(layout): add Inter/Fragment Mono fonts, header with live PT clock, and footer
feat(config): set Ten Ventra brand, pillars, and contact copy
chore: add typecheck script
Add ten-ventra-website design spec
```

---

## Out of scope (deferred follow-ups)

These are intentionally not in this plan:

- **Resend wiring.** Replace the stub in `src/app/api/contact/route.ts` with a real Resend `emails.send` call once the account, verified domain, and API key are set up. Recipient address still TBD.
- **Open Graph image.** A static or dynamic OG image at `app/opengraph-image.tsx`.
- **Analytics.** Vercel Analytics or similar.
- **Vercel deploy.** Connect the repo to Vercel and add `tenventra.ai` as a domain. Requires DNS access.
