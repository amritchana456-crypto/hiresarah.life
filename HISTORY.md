# HISTORY.md

A running log of work done in this repository. Updated each session so context survives chat clears.

---

## 2026-06-10

- `CLAUDE.md`: Archived the old Google Calendar booking links and documented the new n8n-to-Google-Sheets lead form configuration.
- `src/components/sarah/BookingModal.tsx`: Replaced the embedded Google Calendar booking popup with a branded lead form that posts name, email, agency, role, inquiry channel, main problem, timestamp, and source to `VITE_N8N_LEAD_WEBHOOK_URL`.
- `src/components/sarah/BookingModal.tsx`: Removed the left-side form guidance panel and widened the lead form so it is two-column on desktop and single-column on mobile/tablet.
- `src/components/sarah/BookingModal.tsx`: Removed the form intro pill and updated the form headline/subtext to frame the lead-flow review more clearly.
- `src/components/sarah/BookingModal.tsx`: Moved the lead-flow headline and subtext into the modal header and removed the duplicate intro above the form fields.
- `src/components/sarah/BookingModal.tsx`: Added gradient emphasis and the animated hand underline to "understand" in the lead form modal headline.
- `.env.local` and `.env.example`: Added the n8n lead webhook environment variable for local form submissions and documented the expected deploy variable shape.

## 2026-06-09

- `src/components/sarah/HandUnderline.tsx`: Added a reusable curved gradient underline for hand-drawn emphasis under specific phrases.
- `src/components/sarah/Navbar.tsx`: Changed the mobile hamburger icon to use the Sarah purple-pink gradient.
- `src/components/sarah/Hero.tsx`: Added the hand-drawn underline under "never buy" in the hero subheadline.
- `src/components/sarah/Problem.tsx`: Updated section copy and added the hand-drawn underline under "30 minutes".
- `src/components/sarah/WhyIgnored.tsx`: Restyled the buyer line as subheadline copy, applied gradient only to "buyer", underlined "because", and shortened the time-wasters bullet.
- `src/components/sarah/HowSarahHelps.tsx`: Replaced the section headline and applied gradient emphasis to "inquiries".
- `src/components/sarah/FounderCTA.tsx`: Replaced the founder headline/body copy and updated the footer to a founder-style message.
- `src/components/sarah/WhyIgnored.tsx`: Split the buyer line into hero-style headline and subheadline typography while keeping the underline under "because".
- `src/components/sarah/WhyIgnored.tsx`: Removed the comma from the "They looked like a buyer" headline.
- `src/components/sarah/HandUnderline.tsx`: Added a one-time viewport draw animation with a 0.2s delay for every hand-written underline.
- `src/components/sarah/HowSarahHelps.tsx` and `src/components/sarah/FounderCTA.tsx`: Added hand-written underlines to "inquiries" and "cleaner lead flow".
- `src/components/sarah/BookingModal.tsx`: Added a branded Google Calendar booking popup for the Sarah setup call.
- `src/routes/index.tsx`, `src/components/sarah/Navbar.tsx`, `src/components/sarah/MobileMenu.tsx`, `src/components/sarah/Hero.tsx`, and `src/components/sarah/FounderCTA.tsx`: Wired Sarah CTA buttons to open the booking popup.
- `src/components/sarah/FounderCTA.tsx`: Shortened the final CTA headline and subheadline for mobile clarity.
- `src/components/sarah/Logo.tsx`: Replaced the sparkle mark with an animated code-built S monogram using Sarah's brand gradient.
- `src/components/sarah/BookingModal.tsx`: Changed desktop booking popup to a guide-left/calendar-right layout with example field guidance.
- `src/components/sarah/Logo.tsx`: Reworked the animated mark into a taller interlocking S ribbon while keeping the Sarah gradient, subtle shimmer, and reduced-motion support.
- `src/components/sarah/BookingModal.tsx`: Tightened the booking popup sizing, shortened the guide panel, reduced iframe height, and added a direct Google Calendar fallback link.

## 2026-06-07

- `src/components/sarah/HowSarahHelps.tsx`: Rewrote all section copy and restructured layout
  - Section heading: "This is what handles inquiries for them now." → "This is what catches leads before they disappear." (gradient on "before they disappear")
  - Removed 6th card ("Routes to the right agent") — now 5 cards total
  - Removed DemoVisual widgets, play buttons, and "Demo clip" badges from all cards
  - Updated card titles and body copy: Replies in seconds / Filters out time-wasters instantly / Every real buyer is captured and tracked / Buyers get the right listings instantly / Viewings get booked while interest is still high
  - Desktop layout: 6-column grid, top 3 cards fill row, bottom 2 cards centered (col-start-2 and col-start-4)
  - Mobile: single column unchanged

- `src/components/sarah/Hero.tsx`: Updated hero subheadline from "But your inbox is full of people who never will." to "Not chasing people who never buy."

## 2026-06-07

### Updated copy across four landing page sections
- **Hero.tsx**: Subheadline changed from "But they're answering useless questions… from people who never buy." to single-line "But your inbox is full of people who never will." (removed second span/line)
- **Problem.tsx**: h2 changed from "First they text. / Then they ignore." to "First people text. / Then they disappear."; sub changed from "spends 30 minutes talking to them" to "spent 30 minutes talking to a ghost."
- **WhyIgnored.tsx**: h2 changed from "They looked like leads. But they weren't." to "They looked like a buyer. But they weren't, because..."; Card 1 text updated from "Already working with another agent." to "Another agency caught them before you did."; Card 2 text updated from "Just browsing. Never buying." to "They were just browsing."
- **WhyIgnored.tsx**: Bridge card h3 changed from "Elite managers don't let this happen." to "Some managers figured this out." (gradient span updated, three bullet points kept as-is)

### Updated bullet points + heading layout in WhyIgnored.tsx
- `elitePoints` copy updated: "time-wasters", "replying instantly at 10:30 PM", "No message sits unanswered"
- Heading "They looked like a buyer..." now renders two centered lines on desktop (`<br />` between sentences) and a comma-joined single flow on mobile via `sm:hidden` / `hidden sm:inline` spans; no SVGs touched



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
