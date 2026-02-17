# Tar-Tech Surface Website

Premium, mobile-first marketing site for **Tar-Tech Surface** built with **Next.js**.

> Yes — this is a standard Next.js app. TypeScript and Tailwind are optional tools on top of Next.js for type safety and styling speed.

## Is this "just Next.js"?
Yes.

This project runs with the normal Next.js commands:

```bash
npm install
npm run dev
npm run build
npm run start
```

The extra file types are normal in modern Next.js projects:
- `.tsx` → Next.js React pages/components (TypeScript)
- `.ts` → typed data/config files
- `.css` → styling (Tailwind layers)
- `.json` → package and lint config

If you prefer plain JavaScript later, this can be converted from TypeScript to `.jsx/.js`.

## Pages
- `/` Home
- `/services` Services
- `/projects` Projects
- `/about` About
- `/contact` Contact

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel (step-by-step)
1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **Add New Project**.
4. Import your GitHub repo.
5. Framework preset should auto-detect as **Next.js**.
6. Build command: `next build` (default).
7. Output setting: leave default (Next.js handles it).
8. Click **Deploy**.

After deploy, every push to your default branch will auto-redeploy.

## If you mean multiple human languages on the website (English, etc.)
Currently content is single-language in `src/data/content.ts`.

Simple upgrade path:
1. Duplicate content into per-language files, e.g.:
   - `src/data/content.en.ts`
   - `src/data/content.zu.ts`
2. Add a language segment route (`/en`, `/zu`) using App Router dynamic segment.
3. Switch content source by route param.

If you want, I can implement full multilingual routing in the next update.

## Content editing
- Main editable content: `src/data/content.ts`
- Logo: `public/logo.svg` (replace with your final brand asset)
- Project placeholders: `public/projects/` (replace with real site photos)
- Hero texture: `public/textures/asphalt.svg`

## Contact / lead conversion features
- Sticky WhatsApp button on all pages
- Contact page quote form fields:
  - Name
  - Company
  - Phone
  - Email
  - Service needed
  - Location
  - Notes
