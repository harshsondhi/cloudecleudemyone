# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
npm test         # run all tests (Vitest)
```

Run a single test file:
```bash
npx vitest run tests/components/Navbar.test.tsx
```

## Architecture

**Next.js 16 App Router** with two route groups, each with its own layout:

- `app/(public)/` — unauthenticated pages (splash, login, signup, preview). No navbar.
- `app/(dashboard)/` — authenticated area (`/heists`, `/heists/create`, `/heists/[id]`). Layout injects `<Navbar>`.

The root `app/layout.tsx` wraps both groups. Route group folders `(public)` and `(dashboard)` are purely organizational — they don't appear in URLs.

**Path alias:** `@/` maps to the project root (e.g. `@/components/Navbar`).

**Styling:** Tailwind CSS v4 with custom theme tokens defined in `app/globals.css` under `@theme`. Component-scoped styles use CSS Modules (e.g. `Navbar.module.css`).

**Testing:** Vitest with `jsdom` environment and `@testing-library/react`. Tests live in `tests/` mirroring the source structure. `vitest/globals` is enabled — no need to import `describe`/`it`/`expect`.
