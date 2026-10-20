import type { ServiceSlug } from "./services";

/** The three ways we help, used in the nav, homepage and footer. */
export type Pillar = {
  id: "build" | "grow" | "automate";
  name: string;
  promise: string;
  services: { slug: ServiceSlug; label: string }[];
};

export const pillars: Pillar[] = [
  {
    id: "build",
    name: "Build",
    promise: "Websites and stores designed to turn visitors into enquiries and sales.",
    services: [
      { slug: "web-development", label: "Website design & development" },
      { slug: "e-commerce-development", label: "E-commerce stores" },
      { slug: "mobile-app-development", label: "Mobile apps" },
    ],
  },
  {
    id: "grow",
    name: "Grow",
    promise: "Search, ads and content that bring the right people to that site every month.",
    services: [
      { slug: "seo-optimizer", label: "SEO & local SEO" },
      { slug: "digital-marketing", label: "Google & Meta ads" },
      { slug: "ai-content-video-creation", label: "Content & short-form video" },
    ],
  },
  {
    id: "automate",
    name: "Automate",
    promise: "Chatbots, CRM flows and follow-ups so no lead waits for a reply.",
    services: [{ slug: "ai-automation-systems", label: "AI chatbots & workflow automation" }],
  },
];

export const mainNav = [
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
