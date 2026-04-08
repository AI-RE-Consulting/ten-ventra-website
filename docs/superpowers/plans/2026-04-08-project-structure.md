# Project Structure Initialization Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Initialize a Next.js project with Tailwind CSS and shadcn/ui, then create the folder structure defined in the design spec.

**Architecture:** Single-page informational site using Next.js App Router. The `src/` directory holds all source code. Components are organized by purpose: `ui/` (shadcn-managed), `layout/` (site chrome), `sections/` (page sections), `shared/` (reusable elements). Site configuration is centralized in `config/site.ts`.

**Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, pnpm

---

### Task 1: Install pnpm

**Files:**
- None (system-level install)

- [ ] **Step 1: Install pnpm globally via npm**

```bash
npm install -g pnpm
```

- [ ] **Step 2: Verify installation**

```bash
pnpm --version
```

Expected: A version number like `10.x.x`

---

### Task 2: Initialize Next.js project

**Files:**
- Create: All default `create-next-app` files in project root

**Important:** `create-next-app` must be run from the **parent directory** and target the existing `ten-ventra-website` folder. The existing `.git/` and `docs/` directories will be preserved — `create-next-app` does not delete existing files.

- [ ] **Step 1: Run create-next-app targeting the existing directory**

```bash
cd /Users/dimitri/Documents/git/Ventra-Solutions
pnpm create next-app ten-ventra-website --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-pnpm --turbopack
```

When prompted about Turbopack for development, select **Yes** (the `--turbopack` flag handles this).

- [ ] **Step 2: Verify the project was created correctly**

```bash
cd /Users/dimitri/Documents/git/Ventra-Solutions/ten-ventra-website
ls src/app/
```

Expected: `favicon.ico`, `globals.css`, `layout.tsx`, `page.tsx` (and possibly `fonts/`)

- [ ] **Step 3: Verify it runs**

```bash
pnpm dev
```

Expected: Dev server starts at `http://localhost:3000`. Stop with Ctrl+C after confirming.

- [ ] **Step 4: Commit the initialized project**

```bash
git add -A
git commit -m "Initialize Next.js project with TypeScript, Tailwind, and ESLint"
```

---

### Task 3: Initialize shadcn/ui

**Files:**
- Create: `components.json` (project root)
- Create: `src/lib/utils.ts`
- Modify: `src/app/globals.css` (shadcn adds CSS variables)
- Modify: `tailwind.config.ts` (shadcn extends config)

- [ ] **Step 1: Run shadcn init**

```bash
cd /Users/dimitri/Documents/git/Ventra-Solutions/ten-ventra-website
pnpm dlx shadcn@latest init
```

When prompted:
- Style: **New York**
- Base color: **Neutral** (or your preference)
- CSS variables: **Yes**

- [ ] **Step 2: Verify shadcn files were created**

```bash
cat components.json
ls src/lib/utils.ts
ls src/components/ui/
```

Expected: `components.json` exists with `"style": "new-york"`, `src/lib/utils.ts` exists with the `cn()` helper, `src/components/ui/` directory exists (may be empty).

- [ ] **Step 3: Commit shadcn initialization**

```bash
git add -A
git commit -m "Initialize shadcn/ui with new-york style and CSS variables"
```

---

### Task 4: Create folder structure

**Files:**
- Create: `src/components/layout/.gitkeep`
- Create: `src/components/sections/.gitkeep`
- Create: `src/components/shared/.gitkeep`
- Create: `src/config/site.ts`
- Create: `src/assets/.gitkeep`
- Create: `src/styles/.gitkeep`
- Create: `public/images/.gitkeep`

- [ ] **Step 1: Create component directories**

```bash
cd /Users/dimitri/Documents/git/Ventra-Solutions/ten-ventra-website
mkdir -p src/components/layout
mkdir -p src/components/sections
mkdir -p src/components/shared
```

- [ ] **Step 2: Create remaining directories**

```bash
mkdir -p src/config
mkdir -p src/assets
mkdir -p src/styles
mkdir -p public/images
```

- [ ] **Step 3: Add .gitkeep files to empty directories**

```bash
touch src/components/layout/.gitkeep
touch src/components/sections/.gitkeep
touch src/components/shared/.gitkeep
touch src/assets/.gitkeep
touch src/styles/.gitkeep
touch public/images/.gitkeep
```

- [ ] **Step 4: Create config/site.ts with placeholder structure**

Create `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: "Ventra",
  description: "Ventra Solutions — informational website",
  url: "https://ventra.com",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: {
    linkedin: "",
    twitter: "",
  },
} as const;
```

- [ ] **Step 5: Verify the full folder structure**

```bash
find src -type f -o -type d | sort
```

Expected output should include:
```
src/app/globals.css
src/app/layout.tsx
src/app/page.tsx
src/assets/.gitkeep
src/components/layout/.gitkeep
src/components/sections/.gitkeep
src/components/shared/.gitkeep
src/components/ui/
src/config/site.ts
src/lib/utils.ts
src/styles/.gitkeep
```

- [ ] **Step 6: Commit the folder structure**

```bash
git add -A
git commit -m "Add project folder structure: layout, sections, shared, config, assets, styles"
```

---

### Task 5: Final verification

- [ ] **Step 1: Verify the dev server still runs cleanly**

```bash
cd /Users/dimitri/Documents/git/Ventra-Solutions/ten-ventra-website
pnpm dev
```

Expected: Dev server starts without errors at `http://localhost:3000`. Stop with Ctrl+C.

- [ ] **Step 2: Verify git is clean**

```bash
git status
```

Expected: `nothing to commit, working tree clean`

- [ ] **Step 3: Review final commit history**

```bash
git log --oneline
```

Expected (newest first):
```
<hash> Add project folder structure: layout, sections, shared, config, assets, styles
<hash> Initialize shadcn/ui with new-york style and CSS variables
<hash> Initialize Next.js project with TypeScript, Tailwind, and ESLint
<hash> Add project structure design spec
<hash> Clear all project files for repo rename to ten-ventra-website
<hash> Initial site: single-page AIRE Consulting website
```
