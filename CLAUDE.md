@AGENTS.md

# Project: personal-website

Personal site and blog for Enis Gültekin (frontend developer, Istanbul). Static
blog with MDX posts, a readings log, an about page, RSS feed, per-post view
counter, and PWA/offline support. Deployed at https://enisgultekin.me.

## Tech stack

- **Next.js 16.2** (App Router) — see `AGENTS.md`: this is a modified Next.js,
  read `node_modules/next/dist/docs/` before writing Next-specific code.
- **React 19.2**
- **JavaScript, not TypeScript.** Source is `.js`/`.jsx`. Path aliases come from
  `jsconfig.json`, not `tsconfig`. `content-collections.ts` is the only TS file
  (it's a build-time config consumed by the bundler).
- **Tailwind CSS v4** via `@tailwindcss/postcss` (no `tailwind.config`; theme is
  declared inline in `src/app/globals.css` with `@theme` / `@plugin` /
  `@custom-variant`). `@tailwindcss/typography` for prose.
- **Content Collections** (`@content-collections/*`) — compiles MDX from
  `src/posts/` at build time, exposed as `allPosts` from the virtual
  `content-collections` import. Wraps the Next config via `withContentCollections`.
- **MDX** rendered with `remark-gfm` + `rehype-pretty-code` (Shiki) for syntax
  highlighting.
- **Upstash Redis** (`@upstash/redis`) — serverless KV for blog view counts.
- **next-themes** — light/dark theme via the `data-theme` attribute.
- **SWR** + **framer-motion** — client-side view fetch and count-up animation.
- **lucide-react** icons, **classnames** for conditional classes, **feed** for RSS.
- **EB Garamond** (body) and **JetBrains Mono** (code) via `next/font/google`.
- Lockfile is `bun.lock` — **bun** is the package manager.

## Commands

```bash
bun dev          # next dev (localhost:3000)
bun run build    # next build (also generates content-collections output)
bun start        # next start (serve production build)
bun run lint     # eslint (flat config, next/core-web-vitals)
```

Formatting is Prettier (`.prettierrc`): single quotes, semicolons, no trailing
commas, `arrowParens: avoid`, width 80.

## Architecture & conventions

- **Path aliases:** `@/*` → `./src/*`, and `content-collections` →
  `./.content-collections/generated` (defined in `jsconfig.json`).
- **Route groups:** `src/app/(main)/` holds pages that share the `Header` +
  `footer` chrome (home, about-me, blog list, readings). The blog post route
  `src/app/blog/[slug]/` lives outside `(main)` (its own layout), and `offline/`
  is the PWA fallback.
- **Route handlers:** `src/app/api/views/[slug]/route.js` (Redis `INCR`),
  `src/app/rss.xml/route.js` (RSS2). `sitemap.js`, `robots.js`, `manifest.js`
  are Next.js metadata file conventions.
- **Components:** in `src/components/`, named `Name.component.jsx`, default-
  exported and re-exported through the barrel `src/components/index.js`. Import
  as `import { Header } from '@/components'`. Client components start with
  `'use client'` (`Header`, `ViewTracker`, `ServiceWorkerRegistration`).
- **Site config:** `src/config/index.js` is the single source for title,
  description, `url`, `author`, and the `alternates(path)` metadata helper. Use
  it for SEO/metadata instead of hardcoding.
- **Posts:** MDX in `src/posts/*.mdx`. Frontmatter schema (enforced by Zod in
  `content-collections.ts`): `title`, `date`, `description`. `readingTime` is
  computed in `src/utils/reading.js`; the slug is the filename (`post._meta.path`).
  Posts can be written in Turkish.
- **MDX rendering:** `src/components/Mdx.component.jsx` maps every HTML element
  to a Tailwind-styled component. Add new element styles there.
- **Theming:** dark mode is `data-theme="dark"`; the Tailwind `dark:` variant is
  redefined via `@custom-variant` in `globals.css`. Theme toggle uses the View
  Transitions API (`document.startViewTransition`). `useIsMounted` guards
  against hydration mismatch before reading the resolved theme.
- **PWA:** `public/sw.js` is a hand-written service worker (network-first for
  navigations with `/offline` fallback, cache-first for static assets),
  registered in production only by `ServiceWorkerRegistration`. Bump the `CACHE`
  constant when changing strategy. `next.config.mjs` sets no-cache headers on
  `/sw.js`.

## Environment

`.env.local` (not committed) provides Upstash credentials, required for the view
counter:

```
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```
