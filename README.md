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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Connecting Your Vercel-Hosted Apps

To link your other Vercel-hosted apps (Comfort Finder, Post Planner, Sous, Stylr) to this site:

1. **Go to your Vercel project settings**
   - Navigate to your Project Comfort website project on Vercel
   - Go to **Settings** → **Environment Variables**

2. **Add environment variables for each app:**
   ```
   NEXT_PUBLIC_APP_COMFORT_FINDER_URL=https://comfort-finder-analyzer.vercel.app/
   NEXT_PUBLIC_APP_POST_PLANNER_URL=https://pjcpostplanner.vercel.app/
   NEXT_PUBLIC_APP_SOUS_URL=https://ai-cooking-agent.vercel.app/
   NEXT_PUBLIC_APP_STYLR_URL=https://stylr-one.vercel.app/
   ```

3. **Redeploy** - After adding the variables, Vercel will automatically trigger a new deployment

4. **Result** - Once deployed, app cards will:
   - Link directly to your hosted apps (opens in new tab)
   - Show "Launch app →" instead of "Learn more →"
   - Display an external link icon
   - App detail pages will show a "Launch" button

**Note:** If an environment variable is not set, the app will continue to show the "Coming Soon" page with an internal link.
