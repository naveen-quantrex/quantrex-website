# Marketing website

Next.js (App Router), TypeScript and Tailwind CSS v4. Deployed on Vercel.

## Develop

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY to test the contact form
npm run dev
```

Checks: `npm run lint`, `npx tsc --noEmit`, `npm run build`.

## Changing the brand name

Everything brand-related lives in **`src/config/site.ts`**: name, legal entity (null until one exists, nothing legal is rendered while it is empty), tagline, URL, contact email, social links and logo. Page copy (services, process, projects, about) lives in **`src/config/content.ts`**. The logo mark is **`src/components/logo.tsx`**. The favicon, Apple icon, OG image and web manifest are generated from the same config.

## Environment variables

See `.env.example`. `RESEND_API_KEY` is required for the contact form; the rest have fallbacks.

## Contact form

`POST /api/contact` validates with zod (`src/lib/contact-schema.ts`), escapes all input in the email HTML, has a honeypot field and a small in-memory rate limit (5 per 10 minutes per IP, per server instance; add Vercel Firewall rate limiting for a hard limit).
