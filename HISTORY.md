# HISTORY.md

A running log of work done in this repository. Updated each session so context survives chat clears.

---

## 2026-06-05

### Initialized CLAUDE.md
- Analyzed the full codebase structure (routes, components, lib, config, vite setup).
- Created `CLAUDE.md` at the repo root with:
  - Dev commands (bun dev, build, lint, format)
  - TanStack Start file-based routing conventions and constraints
  - shadcn/ui component locations and the `@/` alias
  - `createServerFn` pattern for server logic
  - `.server.ts` file convention and Cloudflare Workers env-read timing rules
  - Tailwind v4 setup via `@lovable.dev/vite-tanstack-config` and what not to duplicate
  - SSR error handling in `src/server.ts`
- Created `HISTORY.md` (this file) to track session work going forward.

**Project context:** Sarah is a landing page for a real estate AI agent product. The stack is TanStack Start + React 19 + Tailwind CSS v4 + shadcn/ui, deployed to Cloudflare Workers via Nitro.

---

### Hero section mobile/tablet layout — `src/components/sarah/Hero.tsx`

1. **Tighter navbar-to-headline gap** — Reduced section top padding from `pt-24 sm:pt-28` to `pt-18 sm:pt-20` on mobile/tablet (desktop `lg:pt-40` unchanged). Also reduced h1 top margin from `mt-6` to `mt-2` below `lg`.
2. **Hidden subheadline on mobile/tablet** — Added `hidden lg:block` to the subheadline `<p>` so it only renders on desktop.
3. **Hidden "See how Sarah works →" on mobile/tablet** — Added `hidden lg:inline` to the link so it only renders on desktop.

Mobile/tablet hero order is now: **Headline → "Hire Sarah for 3 days free" button → social proof badge.**

---

### Hero section copy edits — `src/components/sarah/Hero.tsx`

1. **Removed badge** — Deleted the "Digital team member for agency managers" pill/badge from the top of the hero copy entirely.
2. **Updated headline** — Changed from "Stop wasting team time on unqualified property inquiries." to "Stop wasting time on non-serious buyers." — "non-serious" styled with the gradient span.
3. **Shortened subheadline** — Replaced the long multi-clause sentence with: "Sarah qualifies leads, books viewings, and hands off serious buyers to your team, automatically, 24/7."
