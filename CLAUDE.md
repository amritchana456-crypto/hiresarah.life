# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # start dev server
bun build        # production build (targets Cloudflare Workers via nitro)
bun build:dev    # dev build
bun preview      # preview production build locally
bun lint         # eslint
bun format       # prettier
```

No test suite is configured.

## Change Log

After every edit, fix, or change — no matter how small — append a summary to `HISTORY.md` under today's date (`## YYYY-MM-DD`). Include: what file(s) were changed, what was done, and why (if known). Keep entries concise (bullet points). This must be done before the conversation ends.

## Architecture

**TanStack Start** (React 19, TypeScript) with SSR, deployed to **Cloudflare Workers** via Nitro.

### Routing

File-based routing under `src/routes/`. The generated `src/routeTree.gen.ts` is auto-generated — never edit it manually. See `src/routes/README.md` for the full file-to-URL mapping conventions. Key: dynamic segments use bare `$` (e.g. `users/$id.tsx`), not curly braces. `__root.tsx` is the only app shell; do not add Next.js/Remix-style layouts.

### UI

- **shadcn/ui** components live in `src/components/ui/` (New York style, slate base, Tailwind CSS variables).
- Page-specific components for the Sarah landing page are in `src/components/sarah/`.
- `@/` is aliased to `src/`.

### Data / Server Functions

Server logic uses `createServerFn` from `@tanstack/react-start` (see `src/lib/api/example.functions.ts` for the pattern). Use this instead of Supabase Edge Functions for server-side work.

- **Server-only config** goes in `*.server.ts` files (Vite tree-shakes these from the client bundle). Always read `process.env` inside a function body, not at module scope — Cloudflare Workers bind env at request time.
- **Public config** (safe for browser) uses `import.meta.env.VITE_*` with the `VITE_` prefix in `.env`.

### Lead Form / n8n

The Sarah lead form posts to an n8n webhook configured with `VITE_N8N_LEAD_WEBHOOK_URL`. The webhook should append submissions to Google Sheets with these columns: Timestamp, Name, Email, Agency name, Role, Main inquiry channel, Main problem, Source.

Archived booking links only; do not use these as runtime app config:

- Google Calendar embed URL: `https://calendar.google.com/calendar/appointments/schedules/AcZssZ0eytghlqFpXoisaKqwVKKiIZsffYEp78j0Up0ktrhSObyd5HDbQwH9lr3XQ3T8xHnnvqD92GeI?gv=true`
- Google booking page URL: `https://calendar.app.google/xTETLFK7rM1Dymuw5`
- Old guide fields: Role; Agency name; Main inquiry channel; Biggest inquiry problem.

### State / Data Fetching

TanStack Query (`@tanstack/react-query`) is set up globally via `QueryClientProvider` in `__root.tsx`. The `QueryClient` instance is passed through router context.

### Styling

Tailwind CSS v4 via `@tailwindcss/vite`. Global styles in `src/styles.css`. The `@lovable.dev/vite-tanstack-config` wraps Vite and already includes TailwindCSS, React, TanStack Start, tsconfig paths, and Nitro plugins — do **not** add these manually in `vite.config.ts` or they'll conflict.

### Error Handling

`src/server.ts` wraps the SSR entry to catch h3-swallowed 500s (Cloudflare Workers). `src/lib/error-capture.ts` and `src/lib/lovable-error-reporting.ts` handle client-side error reporting. The root route registers both `errorComponent` and `notFoundComponent`.
