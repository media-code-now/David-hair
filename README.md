This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Lead Form Emails (Resend)

The booking form (`/book`) and the ads/PPC landing page forms submit to `src/app/api/lead/route.ts`, which emails the lead to your inbox via [Resend](https://resend.com).

1. Create a free account at [resend.com](https://resend.com) and generate an API key.
2. Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY`.
3. By default, leads are sent to `office@hairtoppersisrael.com` (`LEAD_TO_EMAIL`) from `onboarding@resend.dev` (`RESEND_FROM_EMAIL`) — no domain setup required to get started.
4. For better deliverability/branding, [verify `hairtoppersisrael.com`](https://resend.com/docs/add-a-domain) in Resend and update `RESEND_FROM_EMAIL` to something like `"David Hair Solutions <leads@hairtoppersisrael.com>"`.

If `RESEND_API_KEY` is missing, form submissions will fail gracefully (the visitor sees a WhatsApp/phone fallback) and the lead payload is logged to the server console.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
