# Digital Market Mart website

Next.js 16 (App Router) + Tailwind CSS 4, deployed on Vercel.

## Run locally

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Environment variables (set in Vercel)

| Variable | Needed for | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | Contact and free-audit forms | Without it the form shows a "temporarily unavailable" message with phone and email. |
| `GROQ_API_KEY` | Website chat assistant | Without it the assistant replies that it's offline. |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY` | Spam protection on forms | Optional but recommended. |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager (GA4, Google Ads, Meta Pixel) | e.g. `GTM-XXXXXXX`. Lead events are listed in `src/app/components/Analytics.tsx`. |
| `NEXT_PUBLIC_BOOKING_URL` | Booking link (Calendly or Cal.com) | Optional. |

## Where to edit content

| What | File |
| --- | --- |
| Company details, phones, address, socials | `src/lib/site.ts` |
| Client logos, reviews, case studies, team, live projects | `src/lib/proof.ts` (sections stay hidden while a list is empty) |
| Service pages copy and FAQs | `src/lib/service-pages.ts` |
| Starting prices and deliverables | `src/lib/services.ts` |
| Industry pages | `src/lib/industries.ts`, `src/lib/industry-details.ts` |
| Navigation and service groups | `src/lib/nav.ts` |
| Design tokens (colours, fonts, buttons) | `src/app/globals.css` |

Only add real clients, reviews and numbers you can back up (FTC rule on reviews and testimonials, 16 CFR Part 465).
