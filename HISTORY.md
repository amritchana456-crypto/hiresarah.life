# HISTORY.md

A running log of work done in this repository. Updated each session so context survives chat clears.

---

## 2026-06-22 (session 4)

- Netlify: Reconnected GitHub repo `amritchana456-crypto/hiresarah.life` via "Link repository" flow — generated fresh deploy key, fixing "Unable to access repository" error.
- Netlify: Added `VITE_N8N_LEAD_WEBHOOK_URL=https://amrit456.app.n8n.cloud/webhook/sarah-lead-form` as env variable so lead form works in production build.
- Netlify: Full build now succeeds from GitHub (Initializing → Building → Deploying → Cleanup → "Site is live"). Auto-deploy from `main` branch is active.

## 2026-06-22 (session 3)

- DNS: Deleted old zone from `amritchana61`, created new zone `6a395042b54d95432b75a50e` in `amritchana456` for `hiresarah.life`.
- DNS: Removed duplicate CNAME/A records, kept managed NETLIFY records. Added explicit A records `75.2.60.5` and `99.83.231.61` (Netlify load balancer IPs) after NETLIFY ALIAS records failed to synthesize IPs.
- DNS: `hiresarah.life` now resolves correctly on all 4 Netlify nameservers and Cloudflare 1.1.1.1. User changed Windows DNS to 1.1.1.1 to bypass router's stale NXDOMAIN cache — site loaded successfully.
- Site is live at https://hiresarah.life (deployed build: `main@fcd36f7`, published 6:05 PM).

## 2026-06-22 (session 2)

- `netlify.toml`: Fixed publish dir to `dist` (actual Nitro output), restored `npm run build` command, kept `NODE_VERSION = "22"`.
- Git: Added remote `hiresarah` → `https://github.com/amritchana456-crypto/hiresarah.life.git` and force-pushed `main`.
- Netlify: Connected site `symphonious-jalebi-55af20` (amritchana456 account) to `amritchana456-crypto/hiresarah.life` via PATCH API. Auto-deploy now triggers on push to `main`.

## 2026-06-22

- `netlify.toml`: Changed `NODE_VERSION` from `"20"` to `"22"` — `nitro@3.0.260603-beta` requires `^20.19.0 || >=22.12.0`; Netlify's "20" resolves to an older 20.x that fails the engine check.
- `netlify.toml`: Changed build `command` from `"npm run build"` to `""` (skip remote build) and noted correct static output is `dist/` not `.netlify/static/`.
- `.netlify/static/`: Created by copying local `dist/` build output (without MP4 videos) so pre-built files can be uploaded directly to Netlify CLI deploy.
- `.netlify/state.json`: Updated `siteId` to `43cebcb4-ae53-4611-a517-d0d699f1eab0` (kaleidoscopic-biscotti-fbe535, amritchana61 team) to match the correct deploy target.
- Deployed successfully to `symphonious-jalebi-55af20.netlify.app` (amritchana456 account) using Netlify CLI with personal access token + pre-built `dist/` output. amritchana61 account blocked due to exceeded credits.

## 2026-06-21

- `package.json`: Bumped `nitro` from `3.0.260429-beta` to `3.0.260603-beta` to resolve npm ERESOLVE peer dependency conflict with `@lovable.dev/vite-tanstack-config@2.3.2` during Netlify build.
- `package-lock.json`: Regenerated with `npm install` so Netlify's `npm ci` uses the correct locked nitro version (`3.0.260603-beta`).

- `src/components/sarah/Navbar.tsx`: Updated nav links — renamed "How Sarah Helps" → "How It Works", renamed "Creator" → "About", added "FAQ" link pointing to `#faq`. Now 4 links + CTA button.
- `src/components/sarah/FAQ.tsx`: Added `id="faq"` to the outer `<section>` so the navbar FAQ link scrolls correctly.
- `vite.config.ts`: Added `nitro: { preset: "netlify" }` — switches Nitro build target from Cloudflare Workers to Netlify Functions for Netlify deployment.
- `netlify.toml` (new): Netlify build config — command `npm run build`, publish `.netlify/static`, functions `.netlify/functions-internal`, Node 20.

---

## 2026-06-21

- `src/components/sarah/FounderCTA.tsx`: Replaced bottom CTA headline and sub-headline with fear-forward copy — headline "Someone is going to message your agency tonight.", sub-headline contrasting silence vs. booked viewing and the late-night lead bleed.
- `src/components/sarah/FounderCTA.tsx`: Added `ChatAnimation` Lottie component (chat.json) to the CTA panel. Restructured layout from centered single column to two-column flex row — text left, animation right. Animation hidden on mobile. Reuses lottie_light dynamic import pattern from WhyIgnored.tsx.
- `src/components/sarah/FounderCTA.tsx`: Made animation visible on mobile (removed `hidden md:flex`). Added off-white/light-purple background to animation container (`bg-gradient-to-br from-primary-softer via-white to-pink-soft`) — matching the WhyIgnored bridge card animation area style.
- `public/images/video-cover.svg`: Created SVG cover image for the phone demo video — WhatsApp-style chat mockup with gradient header, user bubble, and Sarah reply bubble.
- `src/components/sarah/VideoDemo.tsx`: Added `poster="/images/video-cover.svg"` to the video element so the chat cover shows instead of a black screen before play.
- `src/components/sarah/Hero.tsx`: Reduced top padding from `pt-18…lg:pt-32` to flat `pt-20` — hero content now sits higher/above the fold on landing. Trimmed bottom padding to `pb-8 sm:pb-10 lg:pb-12`.
- `src/components/sarah/Problem.tsx`, `WhyIgnored.tsx`, `HowSarahHelps.tsx`, `VideoDemo.tsx`, `FAQ.tsx`, `FounderCTA.tsx`: Standardised all section vertical padding to uniform `py-20 sm:py-24` (reduced from `py-24–py-36`). No content changes.

---

## 2026-06-21

- `src/components/sarah/FAQ.tsx`: Replaced accordion FAQ with numbered editorial layout. Each item has a large typographic number (01–05) in brand purple, bold question, and muted answer below. Items separated by heavy horizontal rules. Removed all accordion logic.
- `src/components/sarah/FAQ.tsx`: Replaced all five FAQ answers with new brand-aligned copy. Q1 updated to use universal "next listing site" instead of region-specific platforms (broad European targeting). Q3 corrected — leads go to CRM, not agents' WhatsApp. Layout and section header unchanged.
- `src/components/sarah/FAQ.tsx`: Removed "Common questions" eyebrow label above the FAQ heading.
- `src/components/sarah/FAQ.tsx`: Replaced numbered list design with collapsible accordion. Uses existing `src/components/ui/accordion.tsx` (Radix UI). Removed number badges and per-item Reveal wrappers; single Reveal delay=120 wraps the whole accordion block. Question text bumped to 17–19px bold; answer in muted foreground/65.
- `src/styles.css`: Added `accordion-down` / `accordion-up` keyframes and `animate-accordion-down` / `animate-accordion-up` utility classes required by the Radix accordion content animation.

---

- `src/components/sarah/VideoDemo.tsx`: Replaced headline "Reply first. Book the viewing." with a `9:04 AM` timeline stamp followed by headline "You open your CRM." and subhead. Updated bullets to new copy. (session 1)
- `src/components/sarah/VideoDemo.tsx`: Visual refinements — "9:04 AM" and "your CRM" made gradient at headline size (44px desktop), removed timeline dot; "already qualified" and "is booked" wrapped in `HandUnderline` draw animation; floating "Watch it happen" pill added below phone frame. (session 2)
- `src/components/sarah/VideoDemo.tsx`: Top-aligned text column with phone frame (items-center → items-start on desktop grid); removed pill badge below phone; added prominent gradient "Watch it happen" CTA button below bullets that opens the video lightbox. (session 3)
- `src/components/sarah/VideoDemo.tsx`: Matched headline font sizes to Hero h1 (42px/58px/72px + leading-[1.06]) on both mobile and desktop versions; added radial purple glow blob behind phone mockup using brand gradient. (session 4)

## 2026-06-20 (session 6)

- `public/lottie/Share.json`: Added Share.json ("Refer_to_Friends") Lottie animation from Downloads.
- `src/components/sarah/WhyIgnored.tsx`: Replaced `ChatAnimation` with `ShareAnimation` — swapped path from `/lottie/chat.json` to `/lottie/Share.json`, increased size from `260×260` to `300×300` (sm: `340×340`), renamed function accordingly.

## 2026-06-20 (session 5)

- `src/components/sarah/FounderCTA.tsx`: Removed the founder block (heading "Built for managers who need cleaner lead flow", body copy, Amrit Chana byline, and 60-second video placeholder). Final CTA panel and footer unchanged.

---

## 2026-06-20 (session 4)

- `public/lottie/chat.json`: Added new Lottie file (animated chat bubbles). Recolored from original yellow/orange to brand purple (#7357F6, `[0.451,0.341,0.965,1]`) and brand pink (#F45BD4, `[0.957,0.357,0.831,1]`).
- `src/components/sarah/WhyIgnored.tsx`: Replaced `EliteManagersAnimation` (elite-managers.json) with `ChatAnimation` (chat.json). Updated container size to `260×260px` (300×300 on sm+) to suit the compact chat bubble layout.

---

## 2026-06-20 (session 3)

- `src/components/sarah/FAQ.tsx`: Fixed parse error — unescaped curly double-quotes inside a double-quoted string on line 8 caused Babel to fail. Replaced `"..."` with `\"...\"`.

---

## 2026-06-20 (session 2)

- `src/components/sarah/WhyIgnored.tsx`: Fixed "First to reply. First to close." headline — added `<br />` between the two sentences so the break always falls after the period on all screen sizes (was wrapping mid-phrase on mobile/tablet).
- `src/components/sarah/VideoDemo.tsx`: Changed headline from "This is what Sarah does while your agents sleep." to "Reply first. Book the viewing." Added desktop two-column layout (phone left, text right) with 3 benefit bullets. Mobile/tablet remain stacked with centered headline above phone.
- `src/routes/index.tsx`: Removed `<HowSarahHelps />` usage and its import — section "This is how they handle inquiries now" is fully removed from the page.
- `src/components/sarah/FAQ.tsx`: Redesigned with brand colors — added purple label ("Common questions") above title, applied `text-gradient` to "Questions" in heading, replaced chevron icons with Plus/Minus from lucide-react, open items now get a `border-l-[3px] border-primary` left accent bar + `text-primary` question color, added a soft `bg-primary-soft/40` blob behind the section.