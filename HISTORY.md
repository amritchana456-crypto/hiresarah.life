# HISTORY.md

A running log of work done in this repository. Updated each session so context survives chat clears.

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