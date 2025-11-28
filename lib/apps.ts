// App Suite configuration

export interface App {
  id: string;
  name: string;
  tagline: string;
  description: string;
  slug: string;
  image?: string;
  link?: string;
}

export const APPS: App[] = [
  {
    id: "comfort-finder",
    name: "Comfort Finder",
    tagline: "Real Estate That Fits Your Life",
    description: "A real estate deal-finding app that filters for lifestyle fit and return, not just price per square foot.",
    slug: "comfort-finder",
    image: "/images/apps/comfort-finder.png",
  },
  {
    id: "post-planner",
    name: "Post Planner",
    tagline: "Consistent Content Without Burnout",
    description: "An AI content planner that helps creators publish consistently without burnout.",
    slug: "post-planner",
    image: "/images/apps/post-planner.png",
  },
  {
    id: "sous",
    name: "Sous",
    tagline: "Cook Meals That Comfort & Fuel",
    description: "An AI cooking assistant built on a 500+ recipe library that helps you cook meals that comfort and fuel.",
    slug: "sous",
    image: "/images/apps/sous.png",
  },
  {
    id: "stylr",
    name: "Stylr",
    tagline: "Simplify Your Style",
    description: "An AI style guide and outfit builder to simplify dressing for work and life.",
    slug: "stylr",
    image: "/images/apps/stylr.png",
  },
];

