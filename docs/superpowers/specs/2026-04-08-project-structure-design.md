# Project Structure Design — ten-ventra-website

## Overview

Single-page informational company website built with Next.js, Tailwind CSS, and shadcn/ui. The site presents company information across scrollable sections on one page, with light interactivity (contact form, newsletter signup) to be wired up later. Designed to grow into multi-page routes when needed.

## Stack

- **Framework:** Next.js (App Router, TypeScript, `src/` directory)
- **Styling:** Tailwind CSS
- **Component library:** shadcn/ui (new-york style, CSS variables)
- **Package manager:** pnpm
- **Deployment target:** AWS
- **Import alias:** `@/*` → `src/*`

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx          ← root layout (html, body, global providers)
│   ├── page.tsx            ← the single homepage (composes sections)
│   └── globals.css         ← Tailwind directives + global styles
│
├── components/
│   ├── ui/                 ← shadcn/ui components (auto-managed via CLI)
│   ├── layout/             ← header, footer, navbar
│   ├── sections/           ← page sections (hero, about, services, contact, etc.)
│   └── shared/             ← common elements beyond shadcn (e.g., section-wrapper, logo)
│
├── lib/
│   └── utils.ts            ← shadcn/ui cn() helper (created by shadcn init)
│
├── config/
│   └── site.ts             ← site name, description, nav links, social links
│
├── assets/                 ← static images, icons, fonts not in public/
│
└── styles/                 ← additional CSS modules or theme files if needed

public/
├── images/                 ← publicly served images (logos, og-images)
└── favicon.ico
```

## Structure Rationale

- **`components/ui/`** is managed by shadcn CLI (`pnpm dlx shadcn@latest add <component>`). Do not manually create files here.
- **`components/layout/`** holds site chrome (header, footer, nav) that wraps the page via the root layout.
- **`components/sections/`** holds the building blocks composed into `page.tsx`. Each section is a self-contained component.
- **`components/shared/`** holds reusable elements that don't fit shadcn or a specific section.
- **`config/site.ts`** centralizes site metadata so updates happen in one place.
- **`assets/`** is for files imported in code (processed by Next.js bundler). **`public/`** is for files served directly by URL.
- **Navigation** uses anchor links (`#about`, `#services`, `#contact`) to scroll to sections.

## Growth Path

When the site needs separate routes, add folders under `app/` (e.g., `app/blog/page.tsx`). The component structure already supports this — shared components stay in `components/`, page-specific ones can live alongside the route if needed.

## Configuration & Tooling

- TypeScript with strict mode (Next.js default)
- ESLint with Next.js config (Next.js default)
- Tailwind CSS via `tailwind.config.ts`
- shadcn/ui via `components.json` (new-york style, CSS variables for theming)
- No additional tooling (Prettier, Husky, etc.) beyond what Next.js provides

## Initialization Steps

1. `pnpm create next-app` with App Router, TypeScript, Tailwind, ESLint, `src/` directory
2. `pnpm dlx shadcn@latest init` (new-york style, CSS variables)
3. Create additional folders: `components/layout/`, `components/sections/`, `components/shared/`, `config/`, `assets/`, `styles/`, `public/images/`
4. Create `config/site.ts` placeholder
5. Add `.gitkeep` files to empty directories so they're tracked by git
