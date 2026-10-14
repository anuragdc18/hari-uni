# HARI University — website

Next.js 16 (App Router, TypeScript strict, Tailwind CSS v4, Framer Motion, GSAP ScrollTrigger) rebuild of hariuniversity.com. All HARI content, photographs, logo, hero video, PDF and routes are migrated from the original site export; only design, layout, interactions, performance and technology changed.

## Structure

- `src/content/*` — every piece of institutional content as typed TypeScript data (programmes, schools, faculty, leadership, research, 21 publications, campus, bus timetables, events incl. Orientation Day and HARI Udaan, news, FAQs, contact).
- `src/assets/images` + `src/assets/registry.ts` — the 100 HARI-owned photographs, statically imported for next/image optimisation (AVIF/WebP, responsive sizes, blur placeholders).
- `public/videos` — HARI hero video (optimised 720p/480p) and poster; `public/docs` — Orientation 2026 invitation PDF; `public/images/press` — press logos.
- `src/app` — routes. Dynamic routes (`programs/[slug]`, `events/[slug]`, `blog/[slug]`) are statically generated from content.
- `src/app/api/forms/[form]` — contact / apply / udaan form handler (zod validation, honeypot, rate limit, SMTP email via nodemailer).
- `src/components` — layout (accessible mega menu, mobile nav, footer), motion primitives (reveals, counters, parallax, mask reveals, pinned horizontal story, timeline), sections, forms, UI.

Legacy redirects (`/bus-timetable`, `/hari-udaan-2026`, `/vice-chancellor`, `/orientation-program`, `/heartfulness/about-*`) live in `next.config.ts`.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in SMTP values
npm run dev
```

`npm run build && npm start` runs the production server. `npm run lint` and `npm run typecheck` must pass.

## Deploying on Hostinger (Node.js web app, auto-deploy from GitHub)

1. In hPanel → **Websites → Add website → Web app (Node.js)** and connect this GitHub repository, branch `main`, with automatic deployment enabled.
2. Framework preset: **Next.js** (build command `npm run build`, start command `npm start`, Node.js 20 or newer, root directory `/`).
3. **Environment variables** (hPanel → the app → Environment variables). Never commit these:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://www.hariuniversity.com` — canonical URLs, sitemap, Open Graph |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | e.g. `smtp.hostinger.com`, `465`, `true` |
| `SMTP_USER` / `SMTP_PASS` | Hostinger mailbox used to send (e.g. `admissions@haridu.in`) |
| `MAIL_TO` | Comma-separated recipients of form submissions |
| `MAIL_FROM` | From header, e.g. `"HARI University Website <admissions@haridu.in>"` |

4. Point the domain at the app and deploy. Every push to `main` redeploys automatically.

No database is required. If a MySQL log of submissions is wanted later, add it inside `src/lib/mailer.ts` using `DATABASE_URL` from the same environment-variable panel.
