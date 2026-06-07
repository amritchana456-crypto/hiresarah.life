# HISTORY.md

A running log of work done in this repository. Updated each session so context survives chat clears.

---

## 2026-06-07

### Refreshed the "How Sarah helps" card copy
- `src/components/sarah/HowSarahHelps.tsx`: updated all six demo-card titles and descriptions with sharper elite-manager inquiry-handling copy, and synced the mini visual labels for under-7-second replies, matched property links, booked viewings, and right-agent routing.

### Redesigned the "Why do people ignore?" bridge card
- `src/components/sarah/WhyIgnored.tsx`: replaced the saturated gradient bridge panel with a quieter white card, left-side "Elite managers don't let this happen." copy, three gradient-check checklist rows, and the existing real-estate SVG inside a soft-gradient visual frame matching the reason-card image backgrounds.
- Done to make the bridge feel like a calmer proof/standards section while preserving the final CTA as the page's strongest gradient conversion moment.

### Added branded Lottie animation and animated X badges to the bridge card
- `package.json`/`package-lock.json`: added `lottie-web` so the provided JSON animation can play from its original Lottie keyframes.
- `public/lottie/elite-managers.json`: copied the provided animation into the app and recolored non-skin accent/background tones into the Sarah purple/lavender/pink palette while preserving the original timing, transforms, and layer motion.
- `src/components/sarah/WhyIgnored.tsx` and `src/styles.css`: replaced the static bridge SVG with a client-side SVG-rendered Lottie animation, changed the bridge headline gradient to emphasize "Elite managers", and swapped checklist badges for subtly looping white X icons in brand-gradient circles.

### Tightened bridge card headline and X badge alignment
- `src/components/sarah/WhyIgnored.tsx`: removed the "What top teams do differently" eyebrow, nudged the bridge text column slightly upward on desktop, reduced the headline-to-list spacing, and center-aligned each X badge with its sentence text for cleaner row alignment.

### Enlarged and centered the bridge Lottie on mobile
- `src/components/sarah/WhyIgnored.tsx`: reduced only the mobile visual-frame padding, increased the mobile frame height slightly, and centered/scaled the Lottie animation on mobile while resetting scale at `sm` so tablet and desktop stay unchanged.

### Reframed the "How Sarah helps" section headline
- `src/components/sarah/HowSarahHelps.tsx`: removed the eyebrow and supporting paragraph, replaced the intro with "This is what handles inquiries when they can't." with gradient emphasis on "they can't.", and tightened the gap before the demo cards.

### Updated the "How Sarah helps" headline to elite-manager framing
- `src/components/sarah/HowSarahHelps.tsx`: changed the section headline to "This is how elite managers handle inquiries now." with gradient emphasis on "handle inquiries now."

### Refined the "How Sarah helps" headline wording
- `src/components/sarah/HowSarahHelps.tsx`: changed the section headline to "This is what handles inquiries for them now." with gradient emphasis on "handles inquiries for them now."

## 2026-06-06

### Swapped the bridge card illustration for a new brand-recolored "handshake" SVG
- Saved the user-provided "Real estate.svg" (two businessmen shaking hands, gold coin stacks, floating network/dollar icons, a background blob, and a floor bar) into the repo as `.svg/RealEstate.svg`.
- Recolored only the off-brand background/decorative shapes to the brand purple/lavender/pink family, while leaving the gold coin colors and the figures' navy suits untouched per the user's request: background blob `#ebf3fa` → `#A99AFB`, floor bar `#2e3552` → `#6446E8`, and the floating decorative bubble-icon/arrow fills `#8eb6dc` → alternating `#A99AFB`/`#C75CF0` (8 of the 13 occurrences — the other 5 are the figures' clothing and were left alone).
- Fixed a pre-existing bug in the source SVG: the root `<svg>` was missing the `xmlns:xlink` namespace declaration needed by its `<use xlink:href>` elements, which made browsers reject the file as malformed XML and show a broken-image icon when used in an `<img src>`. Added `xmlns:xlink="http://www.w3.org/1999/xlink"` to the root tag.
- `src/components/sarah/WhyIgnored.tsx`: replaced the `eliteAgenciesSvg` import/usage with `realEstateSvg`, and updated the `<img>`'s `width`/`height` to the new SVG's intrinsic `3200x2000` size (and bumped the mobile `max-w` from `280px` to `320px` to suit its wider aspect ratio).
- Verified visually with a headless-browser screenshot of the rendered "Why Ignored" section — the illustration now blends into the bold `bg-gradient-primary` bridge card the same way the previous illustration did.

### Added recolored illustration to the "Why do people ignore?" bridge card
- Saved the user-provided "person at laptop" illustration into the repo as `.svg/EliteAgencies.svg`, preserving all 41 `<animateTransform>` animations and both hidden popup-icon layers (Layer 12/13) intact.
- Removed the SVG's own pale-blue background blob group (`Layer 1`, two `#dff3fc` paths) since the gradient panel already provides the backdrop.
- Recolored the illustration into the Sarah brand palette: cool blues/navys → purple/lavender (`#7357F6`, `#6446E8`, `#A99AFB`, `#383a45`), warm red/orange/yellow accents → pink/violet (`#F45BD4`, `#A855F7`, `#C75CF0`), and skin tones → warm `#F6BC9F`/`#d2715e`.
- `src/components/sarah/WhyIgnored.tsx`: restructured the bridge card from a single centered headline into a responsive two-column layout (`grid grid-cols-1 sm:grid-cols-2`) with the headline on the left and the new illustration on the right, stacking on mobile.
- Done per user request to make the bridge card feel less generic by pairing the gradient panel's copy with a brand-recolored illustration.

### Restyled the "Why do people ignore?" bridge card as a gradient panel with new copy
- `src/components/sarah/WhyIgnored.tsx`: replaced the white "Elite agencies don't lose them to any of this..." bridge card with a `bg-gradient-primary` panel matching the final CTA panel style in `FounderCTA.tsx` (large rounded corners, white text, blurred white/pink corner orbs), and swapped the two-line copy for a single centered headline: "Top agencies stopped losing buyers the day they hired Sarah."
- Done per user request to make the bridge card visually consistent with the page's closing CTA section and to tighten the copy to a shorter, more direct, human line.

### Changed reason-card icon/text row from stacked to icon-left layout
- `src/components/sarah/WhyIgnored.tsx`: changed the icon+caption row in each illustrated `ReasonCard` (Speed, Low intent, Comparing) from a vertical `flex-col items-center text-center` stack back to a horizontal row (`flex items-center gap-4`), with the round icon badge pinned to the left (`shrink-0`) and the caption text in a `flex-1 text-center` wrapper so it's horizontally centered in the remaining space to the icon's right, vertically aligned with it. The illustration image on top of each card is unchanged.

### Updated "Why do people ignore?" section headline and card text placement
- Changed the section headline to "Your team replied. They were never buying" and removed the supporting line "It's rarely about your message."
- Reworked the illustrated reason cards so each icon and bold sentence sits centered at the bottom of the card, while preserving the existing SVG visuals and card structure.

### Replaced the Speed card illustration with catch SVG
- Copied the provided `C:\Users\Amrit\Downloads\catch.svg` asset into the repo as `.svg/SpeedCatch.svg`, preserving its animation while recoloring the bright cyan/blue/green/orange/red accent palette into Sarah purple, lavender, and pink tones.
- Updated `src/components/sarah/WhyIgnored.tsx` so the "Someone else got there first." card uses `.svg/SpeedCatch.svg` instead of the previous `.svg/SpeedAgent.svg` illustration, while keeping the current card layout, lightning icon badge, and text treatment.
- Restored `.svg/SpeedCatch.svg` from the original asset after removing the experimental wrapper/custom placeholder artwork, then reframed the real SVG content with a conservative `viewBox` crop and matching image metadata.
- Embedded the exact leg/shoe and bucket/pail image assets from the provided Lottie JSON into the original empty `foot` and `ember` SVG placeholders, replacing the earlier manual placeholder drawings while preserving the existing SVG animation.

### Swapped illustrated assets across the "Why do people ignore?" cards
- Copied the provided `C:\Users\Amrit\Downloads\options.svg` asset into the repo as `.svg/LowIntentOptions.svg`, recoloring its teal/green/cyan, red/yellow, and beige palette into Sarah purple/pink, warm skin, and soft neutral tones while preserving dark outlines and animation.
- Updated `src/components/sarah/WhyIgnored.tsx` so all three reason cards now use the same illustrated-card structure: Speed uses `.svg/SpeedAgent.svg`, Low intent uses `.svg/LowIntentOptions.svg`, and Comparing uses the previous `.svg/LowIntentPerson.svg`.
- Removed the visible card title labels ("Speed", "Low intent", "Comparing") and promoted each body sentence into the main card text with dark bold styling beside the circular icon badge.
- Fixed the `LowIntentOptions.svg` namespace declaration so its internal `xlink:href` references render instead of showing a broken-image placeholder.
- Fixed the Low intent SVG's internal monitor animation by clipping the scrolling people to the screen area and removing duplicate screen-fill layers that were covering the animation.

### Added brand-colored real-estate agent SVG to the "Speed" card
- Copied the provided `C:\Users\Amrit\Downloads\real estate agent.svg` asset into the repo as `.svg/SpeedAgent.svg`, preserving its existing SVG animation and using a repo-local import.
- Recolored the asset into the Sarah palette: navy/blue/teal real-estate object colors now use Sarah purple tones, red/orange clothing and accent colors now use pink/purple tones, and neutral grays now use softer lavender/white fills while preserving skin tones and core dark details.
- Updated `src/components/sarah/WhyIgnored.tsx` so the "Speed" card now uses the same illustrated-card structure as "Low intent": top SVG visual, then the existing circular lightning icon left-aligned beside the title and body copy.
- Left the "Comparing" card on the compact icon/title/text layout.

### Rebalanced Problem section columns so the two-line headline fits
- `src/components/sarah/Problem.tsx`: kept the existing headline font sizes unchanged, widened the desktop text column from the original `0.92fr 1.08fr` layout to `1.08fr 0.92fr`, and reduced the problem SVG wrapper cap from `max-w-[620px]` to `max-w-[520px]`.
- This keeps "First people text." and "Then they ignore." in the intended two-line format while allowing the illustration to stay as large as the adjusted text width can safely support.

### Updated Problem section headline to shorter two-line copy
- `src/components/sarah/Problem.tsx`: changed the headline to "First people text." followed by the gradient-emphasized "Then they ignore." so the section lands faster and removes the intermediate "They reply with links." line.

### Added brand-colored person-thinking SVG to the "Low intent" card
- Copied the provided `C:\Users\Amrit\Downloads\personthinking.svg` asset into the repo as `.svg/LowIntentPerson.svg` so the app no longer depends on a local Downloads path.
- Recolored the SVG's off-brand accent palette while preserving the original animation, skin tones, and dark illustration details: teal/blue clothing accents now use Sarah purple tones, red question marks/dots now use Sarah pink, and cream clothing fills now use soft white.
- Updated `src/components/sarah/WhyIgnored.tsx` so only the "Low intent" card gets the richer layout: the SVG renders first, then the existing Low intent circular icon stays left-aligned beside the title/body copy on the right.
- Kept the Speed and Comparing cards on the existing compact card layout and made the reason-card `Reveal` wrappers full-height so the three-card row stays aligned across responsive breakpoints.

### Replaced "Daily frustration" timeline section with "Why do people ignore?" cards section
- Removed `src/components/sarah/Frustration.tsx` (the 5-step inquiry timeline) and added `src/components/sarah/WhyIgnored.tsx` in its place; updated the import/usage in `src/routes/index.tsx` (`Frustration` → `WhyIgnored`, `id="frustration"` → `id="why-ignored"`; confirmed via grep that no navbar anchor referenced `#frustration`).
- New section opens with the locked headline "Why do people **ignore**?" (gradient on "ignore"), no eyebrow label (kept Problem-section-style minimalism), then a 3-card grid (`grid-cols-1 sm:grid-cols-3`) covering the three reasons — Speed ("Someone else got there first."), Low intent ("They were just checking. Not serious."), Comparing ("They were exploring options.") — using the same numbered gradient-circle badge motif as the old timeline's step markers.
- Closes with a bridge card (reusing Frustration's "highlight card" shadow/border treatment) that pivots toward the next section's positioning: "**Elite agencies** don't lose them to any of this. They reply instantly, qualify automatically, and never let a serious buyer slip through." — frames the product as how top agencies operate rather than a direct sales pitch, setting up `HowSarahHelps` which follows immediately.
- Kept the soft purple ambient blob background, `py-28 sm:py-36` spacing, `max-w-[1240px]` container, `.text-gradient` accents, and `Reveal` stagger choreography for visual/brand continuity with the section it replaced and its neighbors.
- Verified via SSR fetch of the dev server (`localhost:8081`) that all new copy renders under `id="why-ignored"`, no remnants of "Daily frustration"/`Frustration` remain, and the page returns HTTP 200 with no server errors.

### Replaced numbered badges with brand icons in "Why do people ignore?" cards — `src/components/sarah/WhyIgnored.tsx`
- User supplied three reference SVGs (lightning bolt, comparison shapes, thinking-character illustration) and asked for matching icons; the originals didn't fit (off-brand blue gradient, mismatched detail levels, one was a 3710×3710 animated character illustration too heavy for a ~44px badge).
- Instead, generated three new minimal stroke-based line-icon SVG components inline (`SpeedIcon`, `LowIntentIcon`, `ComparingIcon`) matching the existing `Logo.tsx` icon conventions (`stroke="currentColor"`, `strokeWidth="2.2"`, white-on-`bg-gradient-primary` circle, no embedded animation): a lightning bolt for Speed, a thought-bubble-with-dots for Low intent, and two overlapping circles for Comparing.
- Replaced the `{i + 1}` numbered badge markup with `<r.Icon className="h-[22px] w-[22px]" />` inside the same `h-11 w-11 rounded-full bg-gradient-primary` container, keeping sizing/spacing/shadow identical.
- Verified via curl against the dev server (`localhost:8082`) that the new `SpeedIcon` path renders in the served HTML.

### Revised Problem section headline copy to third-person framing
- `src/components/sarah/Problem.tsx`: changed the three-beat headline from "First people contact." / "You reply, send links." / "**They ignore.**" to "People contact them." / "They reply with links." / "**Then get ignored.**" — keeps a consistent third-person POV throughout (sets up framing the page around how "elite agencies" handle this, vs. addressing the reader directly) and resolves the dangling verb in "They ignore" by giving the letdown an explicit object ("get ignored").

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
