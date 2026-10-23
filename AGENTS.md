<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

## Commands

- `npm run dev` — Next.js dev server on http://localhost:3000.
- `npm run lint` / `npm run typecheck` — fast checks; run both after edits.
- `npm run format` — Prettier, but only `**/*.{ts,tsx}`. It does not format `.mjs`, `.css`, or `.json`.
- `npm run build` — production build; has an external prerequisite (below).
- No tests exist and there is no `test` script. Do not invent one.

## Build gotcha

`app/users/page.tsx` is an async server component that fetches `http://localhost:5000/user` at render time. `npm run build` prerenders `/users` and fails with `ECONNREFUSED` when that backend is not running. Start the API on port 5000 before building, or verify UI changes with `npm run dev`. The URL is hardcoded; no env/config layer exists for it.

## Stack notes

- Next.js 16.4 App Router + React 19.3. Read the version-matched docs in `node_modules/next/dist/docs/` before using framework APIs — they differ from older Next.js.
- Tailwind CSS v4: no `tailwind.config.*`. Theme tokens are CSS variables in `app/globals.css` (`@theme` block); PostCSS uses `@tailwindcss/postcss`.
- shadcn/ui uses style `base-nova` in `components.json`, and primitives come from `@base-ui/react`, not Radix. Add components with `npx shadcn@latest add <name>` into `components/ui/`.
- Class merging uses the `cn` package (drop-in clsx + tailwind-merge replacement). Existing UI files import `{ cn } from "cn"`; `lib/utils.ts` only re-exports it. Keep that import style instead of adding `clsx`/`tailwind-merge`. `cn` declares Node >= 22 in its engines field, although the root `package.json` does not.
- `@/*` maps to the repo root, so imports are `@/components/...`, `@/lib/utils`, etc. The types directory is capitalized: `@/Types/UserTypes`.
- Prettier: no semicolons, double quotes, 2 spaces, 80 columns, LF. Tailwind classes are auto-sorted via `prettier-plugin-tailwindcss` (functions `cn`, `cva`). Match this in new files.

## App map / current state

- `app/layout.tsx` wraps the app in `ThemeProvider` (`components/theme-provider.tsx`). Press `d` to toggle dark mode; the hotkey is custom and ignores typing targets.
- `app/page.tsx` — landing page. `app/users/page.tsx` — user list from the local API. `app/users/new/page.tsx` — client signup form.
- Signup POSTs to `/api/signup` and redirects to `/login`, but neither route exists in this repo yet, so the form 404s. `UserData` also has no password field. Treat auth/backend wiring as incomplete; do not assume an endpoint exists.
- `CLAUDE.md` only references this file. Leave the Next.js managed block at the top intact — `next dev` regenerates it.
