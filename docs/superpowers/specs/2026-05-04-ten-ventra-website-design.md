# Ten Ventra Website — Design Spec

## Overview

Three-page marketing website for Ten Ventra, a relationship-driven real estate brokerage with AI-native execution. Modeled on thrivecap.com: minimal copy, restrained chrome, the brand carried by typography and a single signature visual element (the interactive grid hero). The site exists to establish presence, state a worldview, and surface a contact path — not to sell or describe the product in detail.

## Stack

- **Framework:** Next.js 16 App Router (already scaffolded), TypeScript, `src/` directory
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui (new-york), plus the staged 21st.dev `InfiniteGridHero`
- **Fonts:** Inter (UI) + Fragment Mono (timestamps, numerals, section labels) — both via Google Fonts using `next/font/google`
- **Package manager:** pnpm
- **Deploy:** Vercel
- **Domain:** `tenventra.ai`

## Theme

Light. Off-white background (`#fafafa` body, `#fff` panels), near-black text (`#0a0a0a`). Subtle warm/cool blurs from the hero are the only color accents. No dark-mode toggle in v1.

## Routes

| Route | Purpose |
|---|---|
| `/` | Landing — full-viewport interactive grid hero |
| `/approach` | Three-pillar statement of how Ten Ventra operates |
| `/contact` | Contact form |

## Site chrome

### Header (every page)

- Left: `Ten Ventra` wordmark (Inter, 700, slight negative tracking)
- Right: live timestamp formatted as `Mon DD, YYYY, HH:MM AM/PM PT · HH:MM:SS` in Fragment Mono, ~50% opacity. Updates client-side every second. Time zone fixed to America/Los_Angeles regardless of visitor location.
- No nav links. The wordmark is a link back to `/`.

### Footer (every page)

- Single line: `© 2026 Ten Ventra`, low-opacity, Fragment Mono optional. Top border separator.

## Page 1 — Landing (`/`)

Full viewport (`h-screen`) hero. The existing `src/components/ui/infinite-grid-hero.tsx` is the basis; modifications:

- **Base grid opacity:** raise from `0.05` → `0.15` so gridlines are visible at rest.
- **Mouse-spotlight reveal layer:** keep as-is (`opacity-40` with radial mask following cursor).
- **Animated grid scroll:** keep as-is (slow x/y drift via `useAnimationFrame`).
- **Color blurs:** keep the orange / primary / blue radial blurs.
- **Replace placeholder content:**
  - H1: `Brokerage, rebuilt.`
  - Subtitle: `A real estate brokerage where humans own trust and AI owns the work.`
  - Two buttons: **Approach** (primary, links to `/approach`) and **Contact** (secondary outline, links to `/contact`). Replace the existing `Interact` counter and `Learn More` placeholder buttons.
- **Pointer events:** the centered text block currently has `pointer-events-none` to let the spotlight follow the cursor across it. Keep that, but the buttons re-enable pointer events (already structured this way).
- **Layout stacking on `/`:** header (normal flow, not sticky) → hero (sized to fill remaining viewport so header + hero ≈ 100vh) → footer just below the hero. Achieved by changing the existing `h-screen` on the hero root to `flex-1` and relying on the existing `min-h-full flex flex-col` body. No scroll required to see the footer; it sits at the bottom of the first viewport.

## Page 2 — Approach (`/approach`)

A single content block, not a hero. White background panel.

- Top: small uppercase Fragment Mono label `APPROACH` (the section's only "heading" — no body H2).
- Three-column grid of pillars (stacks to one column on mobile). Each pillar:
  - Top border (1px, near-black)
  - Number in Fragment Mono (`01`, `02`, `03`)
  - Pillar name (Inter, 700, ~18px)
  - One-paragraph description (Inter, 400, ~14px, slight opacity)

**Pillar copy:**

1. **Relationships** — Brokerage is fundamentally human. Owners, buyers, and lenders move on trust — and trust is built by people, not platforms.
2. **Sourcing** — We surface the right opportunities before the market does, matching properties to specific demand and identifying owners likely to transact.
3. **Execution** — Software absorbs the operational weight of every deal so brokers stay focused on the conversations that move transactions forward.

## Page 3 — Contact (`/contact`)

Single column, narrow (~560px max width).

- Top: small uppercase Fragment Mono label `CONTACT`.
- Intro line: `For deal opportunities, partnerships, or general inquiries.`
- Form fields:
  - **Name** — text, required
  - **Email** — email, required, basic email validation
  - **Message** — textarea, required, min ~10 chars
- Submit button: `Send message` (near-black, off-white text).
- On submit:
  - Client-side validation (HTML5 + light JS for the email pattern)
  - POST to a Next.js Route Handler at `app/api/contact/route.ts`
  - **v1 stub:** route validates the payload and `console.log`s it; returns `{ ok: true }`. Wire Resend later (separate task).
  - Success state: replace the form with a brief confirmation (`Thanks — we'll be in touch.`)
  - Error state: inline error above the submit button.
- Recipient email address: TBD — to be configured when Resend is wired.

## Component organization

```
src/
├── app/
│   ├── layout.tsx              ← root: <Header/> + {children} + <Footer/>, font setup, metadata
│   ├── page.tsx                ← Landing (renders <Hero/>)
│   ├── approach/page.tsx       ← Approach page
│   ├── contact/page.tsx        ← Contact page
│   ├── api/contact/route.ts    ← stubbed POST handler
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── header.tsx          ← wordmark + live PT timestamp
│   │   └── footer.tsx          ← copyright line
│   ├── sections/
│   │   ├── hero.tsx            ← thin wrapper around InfiniteGridHero with our copy + buttons
│   │   ├── approach.tsx        ← pillar grid section
│   │   └── contact-form.tsx    ← client component, owns form state
│   └── ui/
│       └── infinite-grid-hero.tsx  ← keep, but parameterize copy + button props
│
├── config/
│   └── site.ts                 ← brand name, domain, pillar content, contact copy
│
└── lib/
    └── utils.ts                ← (existing shadcn cn helper)
```

### Key boundaries

- **`Header`** is a client component (live clock). **`Footer`** is a server component.
- **`InfiniteGridHero`** stays a client component. Refactor it to accept props: `headline`, `subtitle`, `primaryCta: { label, href }`, `secondaryCta: { label, href }`, plus a `gridOpacity` knob (default `0.15`). The current implementation hard-codes copy and button behavior — those become props.
- **`ContactForm`** is a client component. The page (`app/contact/page.tsx`) is a server component that renders the section label, intro line, and `<ContactForm/>`.
- **`siteConfig`** centralizes name, domain, pillar content, and contact copy. Update the existing stub: rename to "Ten Ventra", remove `navLinks` (we're not using anchor nav), add `pillars` array and `contact.intro` string.

### Components to remove

The following 21st.dev components are staged but unused under this design — delete from `src/components/ui/` to keep the surface area small:

- `contact-2.tsx`, `contact-sections.tsx`, `contact-sections-demo.tsx` (we're using a custom minimal form)
- `footer-section.tsx`, `footer-column.tsx` (footer is a single line of text)

Keep: `button.tsx`, `input.tsx`, `label.tsx`, `textarea.tsx`, `infinite-grid-hero.tsx`.

## Typography

- `--font-inter` and `--font-fragment-mono` registered as CSS variables on `<html>` via `next/font/google`. Fragment Mono used for the header timestamp, pillar numbers, and section labels (`APPROACH`, `CONTACT`). Everything else is Inter.
- Tailwind: extend `fontFamily` with `sans: ['var(--font-inter)', ...]` and `mono: ['var(--font-fragment-mono)', ...]` in the Tailwind v4 theme block in `globals.css`.

## Metadata

`layout.tsx` exports:
- `title: 'Ten Ventra'`
- `description: 'A real estate brokerage where humans own trust and AI owns the work.'`
- `metadataBase: new URL('https://tenventra.ai')`
- Open Graph: same title + description; OG image deferred to a follow-up task.

## Live timestamp implementation

Client component, `useEffect` setInterval at 1000ms, renders nothing on server (or a placeholder of fixed width to avoid layout shift) and updates after mount. Format with `Intl.DateTimeFormat` using `timeZone: 'America/Los_Angeles'`. Display:

```
Mon DD, YYYY, HH:MM AM/PM PT · HH:MM:SS
```

Two segments, separated by a Fragment Mono middot. Server-side mismatch is acceptable since the value is intentionally dynamic — render a non-breaking space placeholder pre-hydration to keep header height stable.

## Accessibility

- Header wordmark is a `<Link href="/">` with `aria-label="Ten Ventra — home"`.
- Live timestamp wrapped in `<span aria-hidden="true">` (it's decorative; screen readers shouldn't announce it every second).
- Form fields have explicit `<label>` (visually hidden via `sr-only` if we want a labeless look, but rendered for AT). Use `aria-invalid` on validation failure.
- Hero buttons are real `<Link>` elements, not `<button>`. Color contrast on light theme passes WCAG AA at the chosen text/button colors.
- The infinite grid is decorative — keep `aria-hidden="true"` on the grid SVGs.

## Out of scope (deferred)

- Resend integration (separate task: account, verified sending domain, API key, replace contact route stub)
- OG image
- Analytics / Vercel Analytics
- robots.txt / sitemap.xml beyond Next.js defaults
- 404 page customization (use Next.js default for now)
- Mobile menu (no nav, so n/a)
- Dark mode

## Growth path

- A `/info`-style about page slots in cleanly as `app/info/page.tsx` if needed later.
- Multi-section content (e.g., team, portfolio) can live as new routes or as additional sections within `/approach`.
- If "Insights" eventually becomes a real publishing surface, it gets its own route (`/insights`) without disturbing the existing pages.
