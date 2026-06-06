# HISTORY.md

A running log of work done in this repository. Updated each session so context survives chat clears.

---

## 2026-06-06

### Reworked Problem section headline into a three-beat line
- `src/components/sarah/Problem.tsx`: changed the headline from "First they contact. **Then they ignore.**" to three explicit lines — "First people contact." / "You reply, send links." / "**They ignore.**" — moving the `text-gradient` accent span to the final line so the irony lands on the punchline. Spells out the wasted reply/link-sending effort referenced by the subheading below it.

### Updated hero subheadline copy/gradient and tightened spacing to Problem section
- `src/components/sarah/Hero.tsx`: replaced the subheadline text — `Or to answer "is this still available?" 40 times a day.` is now `Or to answer the same questions 40 times a day.`, with the `text-gradient` utility (the same purple→pink gradient as "close deals?") applied to "40 times a day." instead of bolding the old quoted phrase. Same font-weight/size as the rest of the line.
- `src/components/sarah/Hero.tsx`: reduced the section's bottom padding from `pb-16 sm:pb-20 md:pb-24 lg:pb-28` to `pb-10 sm:pb-14 md:pb-16 lg:pb-20` to close the overly large gap before the Problem section.
- Investigated the headline font per a report that it looked different from "Plus Jakarta Sans": confirmed via Playwright (computed styles + screenshot) that the `<h1>` already inherits `--font-sans` ("Plus Jakarta Sans") identically to the rest of the page and the Google Font request loads successfully (200) — no code change needed there.

### Halved hero SVG message animation speed, simplified hero font, de-gradiented subheadline quote
- Doubled the `dur` and `begin` values on every chat-message pop-in/pop-out scale animation and opacity fade-out in `.svg/Hero.svg` (26 unique animation timings, 32 instances) so the message bubbles grow in, hold, and fade out at roughly half the previous speed while preserving their original stagger order. Left the character's idle micro-animations (head/eye/arm) untouched since only the messages were flagged as too fast.
- Removed the redundant local `heroFont` constant and inline `fontFamily` styles from `src/components/sarah/Hero.tsx` — the headline and subheadline now simply inherit `font-family: var(--font-sans)` from `body` (already "Plus Jakarta Sans"), guaranteeing they match the site-wide font by construction instead of duplicating the value.
- Removed the `text-gradient` class from `"is this still available?"` in the hero subheadline so it renders in plain dark/foreground text like the rest of the line, keeping `font-bold` for emphasis. The headline's gradient on "close deals?" is unchanged.

### Slowed hero message pop-ins and widened mobile visual
- Slowed the hero SVG message scale keyframes so message cards grow in over a calmer interval instead of snapping open quickly.
- Replaced the small mobile/tablet hero visual caps with viewport-aware widths so the SVG fills the available horizontal screen space.
- Kept the desktop hero visual capped and right-aligned for balance with the headline.

### Tuned hero SVG color, loop speed, and sizing
- Recolored the hero SVG's teal/orange UI accents into the Sarah purple-pink brand palette while leaving skin tones, outlines, and whites intact.
- Slowed the quick hero message opacity fade-outs so the animated message loop reads calmer.
- Increased the hero visual wrapper sizes on mobile, tablet, and desktop so the square SVG fills the section more naturally.

### Re-added full problem SVG arm movement
- Restored the looping rotation on the reused hand/arm layer in `.svg/Problem.svg` so the scratching motion again moves the full arm.
- Left the existing finger squeeze details, slower question reveal loop, and brand recoloring unchanged.

### Limited problem SVG scratch motion to fingers
- Removed the scratch animation from the full reused hand/arm layer so the sleeve and arm stay still.
- Added subtle squeeze animation only to the skin hand/finger paths in `.svg/Problem.svg`.
- Kept the slower question reveal loop and green plant with purple pot treatment unchanged.

### Tuned problem SVG animation details
- Slowed the problem SVG question/reveal animation from the original rapid pop-in timing to a calmer four-second loop.
- Added subtle motion to the existing hand layer so the human reads as scratching their head.
- Restored the plant leaves to green while keeping the pot in the Sarah purple-pink brand palette.

### Cleaned and brand-recolored problem SVG
- Replaced the composed problem illustration with the provided Downloads SVG as the direct section asset, removing the added story overlays.
- Removed only the original gear group from `.svg/Problem.svg` and recolored the illustration accents into the Sarah purple-pink brand palette.
- Updated the problem section image alt text and dimensions to match the cleaned `300x274` SVG.

### Replaced problem illustration with provided SVG story scene
- Rebuilt `.svg/Problem.svg` around the provided Downloads SVG, preserving the laptop worker as the agent while adding buyer inquiry, agent reply, buyer fade-away, no-reply, waiting, and clock animations.
- Added visible confusion cues on the agent with raised brows, a worried mouth, and animated question marks so the scene better supports "First they contact. Then they ignore."
- Updated the problem section image alt text to describe the confused-agent ghosting scene while keeping the existing section layout and image dimensions stable.

### Improved problem section illustration story
- Replaced the dashboard-like `.svg/Problem.svg` with a more human animated scene showing a buyer contacting an agent, receiving details, then fading away without replying.
- Added calmer looping motion for the inquiry, agent response, buyer fade-out, no-reply trail, and time-passing clock while keeping the site's purple-pink palette.
- Updated the problem section image alt text to describe the new buyer-agent ghosting scene.

### Rebuilt problem section with new copy and animated SVG
- Replaced the card-based problem section copy with "First they contact. Then they ignore." and emphasized "Then they ignore." with the existing gradient text treatment.
- Removed the "THE PROBLEM" label, four problem cards, and quote box to make the section a focused text-and-visual story.
- Added `.svg/Problem.svg`, a custom looping SVG that shows an inquiry appearing, the team waiting, and the buyer conversation fading away in the site's purple-pink palette.

### Added reveal animation to hero SVG
- Wrapped the hero SVG visual in the existing `Reveal` component so it fades/slides in with the headline and subheadline.
- Delayed the hero CTA reveal slightly so the mobile/tablet sequence remains headline, subheadline, SVG, then button.

### Corrected hero font, subheadline contrast, and mobile order
- Explicitly pinned the hero headline and subheadline to Plus Jakarta Sans, matching the restored global site font.
- Changed the hero subheadline normal text from slightly muted to fully dark foreground text while keeping the gradient only on `"is this still available?"`.
- Updated mobile/tablet hero ordering to headline, subheadline, SVG, then button.

### Reverted site font and improved hero subheadline readability
- Reverted the global site font from Manrope back to Plus Jakarta Sans by updating the root Google Fonts link and `src/styles.css` font stack.
- Increased the hero subheadline size, darkened its normal text, and kept the gradient effect on only `"is this still available?"` for better readability.

### Updated hero copy, layout, and site font
- Changed the hero headline to "Did you hire agents to close deals?" with the existing gradient effect applied to "close deals?" and updated the subheadline with gradient emphasis on `"is this still available?"`.
- Reworked the hero layout so desktop shows copy and CTA on the left with the SVG on the right, while mobile/tablet orders content as headline, SVG, subheadline, then button.
- Switched the global site font from Plus Jakarta Sans to Manrope by updating the root font preload/link and `src/styles.css` font stack.

### Replaced hero artwork with provided animated SVG
- Replaced `.svg/Hero.svg` with the provided `C:\Users\Amrit\Downloads\Hero.svg` asset so the hero uses the new animated illustration while keeping the existing import path.
- Updated `src/components/sarah/Hero.tsx` image sizing and alt text for the new square `512x512` SVG without changing the hero copy, CTA, or surrounding sections.

## 2026-06-05 (session 2)

### Replaced HeroVisual JSX component with Hero.svg
- Created `.svg/Hero.svg` — a hand-crafted SVG (viewBox 0 0 560 620) replicating the entire 5-card hero visual cluster previously rendered as React JSX.
  - Cards included: main chat card, lead profile card, CRM saved badge, "Replies in seconds" pill, booking mini card.
  - All colors hardcoded from CSS token values in `src/styles.css` (gradients, glass fills, shadows).
  - SMIL `<animateTransform>` used to replicate `float-slow` (6s), `float-slower` (8s), and delayed variants so cards float without CSS.
  - `feDropShadow` SVG filters approximate the `shadow-card` utility.
- Modified `src/components/sarah/Hero.tsx`:
  - Removed the `HeroVisual` function entirely.
  - Added `import heroSvg from "../../../.svg/Hero.svg"`.
  - Replaced `<HeroVisual />` with `<img src={heroSvg} width={560} height={620} className="w-full h-auto" />`.

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

### Hero CTA moved below container — `src/components/sarah/Hero.tsx`

- Moved the "Hire Sarah for 3 days free" button and "Only 3 agency managers can test Sarah free." social proof line out of the left grid column and into a new centered block after the grid container.
- Layout order is now: **Headline → Container → Button**.

---

### CLAUDE.md — Change Log instruction added

- Added a "Change Log" section instructing Claude to append a summary to `HISTORY.md` after every edit, fix, or change.

---

### Hero section copy edits — `src/components/sarah/Hero.tsx`

1. **Removed badge** — Deleted the "Digital team member for agency managers" pill/badge from the top of the hero copy entirely.
2. **Updated headline** — Changed from "Stop wasting team time on unqualified property inquiries." to "Stop wasting time on non-serious buyers." — "non-serious" styled with the gradient span.
3. **Shortened subheadline** — Replaced the long multi-clause sentence with: "Sarah qualifies leads, books viewings, and hands off serious buyers to your team, automatically, 24/7."
