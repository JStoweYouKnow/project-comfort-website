// App Suite configuration
// External links can be set via environment variables:
// NEXT_PUBLIC_APP_COMFORT_FINDER_URL
// NEXT_PUBLIC_APP_POST_PLANNER_URL
// NEXT_PUBLIC_APP_SOUS_URL
// NEXT_PUBLIC_APP_STYLR_URL

export interface App {
  id: string;
  name: string;
  tagline: string;
  description: string;
  slug: string;
  image?: string;
  externalUrl?: string; // Vercel-hosted app URL
  isExternal?: boolean; // Whether the app is hosted externally
}

function getAppUrl(appId: string): string | undefined {
  const envKey = `NEXT_PUBLIC_APP_${appId.toUpperCase().replace(/-/g, '_')}_URL`;
  return process.env[envKey];
}

export const APPS: App[] = [
  {
    id: "comfort-finder",
    name: "Comfort Finder",
    tagline: "Real Estate That Fits Your Life",
    description: "A real estate deal-finding app that filters for lifestyle fit and return, not just price per square foot.",
    slug: "comfort-finder",
    image: "/images/apps/comfort-finder.png",
    externalUrl: getAppUrl("comfort-finder"),
    isExternal: !!getAppUrl("comfort-finder"),
  },
  {
    id: "post-planner",
    name: "Post Planner",
    tagline: "Consistent Content Without Burnout",
    description: "An AI content planner that helps creators publish consistently without burnout.",
    slug: "post-planner",
    image: "/images/apps/post-planner.png",
    externalUrl: getAppUrl("post-planner"),
    isExternal: !!getAppUrl("post-planner"),
  },
  {
    id: "sous",
    name: "Sous",
    tagline: "Cook Meals That Comfort & Fuel",
    description: "An AI cooking assistant built on a 500+ recipe library that helps you cook meals that comfort and fuel.",
    slug: "sous",
    image: "/images/apps/sous.png",
    externalUrl: getAppUrl("sous"),
    isExternal: !!getAppUrl("sous"),
  },
  {
    id: "stylr",
    name: "Stylr",
    tagline: "Simplify Your Style",
    description: "An AI style guide and outfit builder to simplify dressing for work and life.",
    slug: "stylr",
    image: "/images/apps/stylr.png",
    externalUrl: getAppUrl("stylr"),
    isExternal: !!getAppUrl("stylr"),
  },
];

