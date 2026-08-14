# Ten Ventra — tenventra.ai

Scroll-driven site: a Mapbox satellite globe dives into the Los Angeles off-market
chapter, flies to the Phoenix on-market chapter, and lands on contact. Built with
Next.js 16, React 19, Tailwind 4, motion, Lenis, and mapbox-gl.

All property data on the site is fictional: real street names, invented numbers
and figures. The ADU feasibility reports in `public/reports/` are hand-drawn
vector recreations of engine output with parcel numbers and coordinates removed.

## Development

```bash
pnpm install
pnpm dev
```

Requires `NEXT_PUBLIC_MAPBOX_TOKEN` in `.env.local` (never committed). Without it
the site renders the static fallback. The same variable must be set in the Vercel
project (Production and Preview) with a URL-restricted Mapbox token.

## Checks

```bash
pnpm typecheck
pnpm test
pnpm build
```

## Structure

- `src/components/journey/` — the scroll journey (Journey.tsx orchestrates; a
  MotionValue progress in [0,1] drives the camera, overlays, and text).
- `src/lib/cameraPath.ts` — camera keyframes and easing; `src/lib/chapters.ts` —
  chapter rest points and snap. Timeline constants are also mirrored in
  ChapterOverlay/Journey/Washes/Nav/ContactOverlay: retune them together.
- `src/data/` — copy and fictional property data.
