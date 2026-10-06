import {
  Building2,
  Car,
  Factory,
  GraduationCap,
  HardHat,
  Hotel,
  Landmark,
  Plane,
  Rocket,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Truck,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

/**
 * Lightweight card data — safe to import into client components.
 * Long-form page copy lives in industry-details.ts (server-only) so it never
 * ships in the homepage JS bundle.
 */
export interface Industry {
  slug: string;
  name: string;
  tagline: string;
  icon: LucideIcon;
  /** Tailwind gradient stops for the icon tile, e.g. "from-cyan-400 to-blue-600" */
  accent: string;
}

export const INDUSTRIES: readonly Industry[] = [
  { slug: "real-estate", name: "Real Estate", icon: Building2, accent: "from-cyan-400 to-blue-600",
    tagline: "Listing showcases, agent branding and high-intent buyer and seller leads." },
  { slug: "retail-ecommerce", name: "Retail & E-commerce", icon: ShoppingBag, accent: "from-fuchsia-500 to-purple-600",
    tagline: "Conversion-focused stores with secure checkout and retention flows." },
  { slug: "healthcare", name: "Healthcare & Clinics", icon: Stethoscope, accent: "from-emerald-400 to-teal-600",
    tagline: "Patient acquisition, online booking and reputation management." },
  { slug: "med-spa-salons", name: "Med Spas & Salons", icon: Sparkles, accent: "from-pink-400 to-rose-600",
    tagline: "Booking-first websites, local SEO and short-form video that fills calendars." },
  { slug: "education", name: "Education & Coaching", icon: GraduationCap, accent: "from-amber-400 to-orange-600",
    tagline: "Enrollment funnels, course platforms and student engagement." },
  { slug: "professional-services", name: "Legal & Accounting", icon: Scale, accent: "from-slate-300 to-slate-600",
    tagline: "Authority websites and compliant lead generation for firms." },
  { slug: "financial-services", name: "Financial Services", icon: Landmark, accent: "from-sky-400 to-indigo-600",
    tagline: "Trust-first websites and secure client portals for advisors and fintechs." },
  { slug: "manufacturing", name: "Manufacturing", icon: Factory, accent: "from-orange-400 to-red-600",
    tagline: "B2B catalog sites, RFQ funnels and ERP-ready integrations." },
  { slug: "hospitality", name: "Hospitality", icon: Hotel, accent: "from-violet-400 to-purple-700",
    tagline: "Direct-booking websites that cut OTA commissions." },
  { slug: "restaurants", name: "Restaurants & Food", icon: UtensilsCrossed, accent: "from-yellow-400 to-amber-600",
    tagline: "Menus, online ordering, local SEO and scroll-stopping social content." },
  { slug: "travel-tourism", name: "Travel & Tourism", icon: Plane, accent: "from-cyan-300 to-sky-600",
    tagline: "Booking platforms, destination SEO and multi-currency checkout." },
  { slug: "construction", name: "Construction & Home Services", icon: HardHat, accent: "from-amber-300 to-yellow-600",
    tagline: "Project galleries, quote-request funnels and Google Maps visibility." },
  { slug: "logistics", name: "Logistics & Transport", icon: Truck, accent: "from-teal-300 to-emerald-600",
    tagline: "Fleet and dispatch dashboards, tracking portals and B2B SEO." },
  { slug: "automotive", name: "Automotive & Rentals", icon: Car, accent: "from-red-400 to-rose-700",
    tagline: "Inventory showcases, rental booking engines and local campaigns." },
  { slug: "it-cybersecurity", name: "IT & Cybersecurity", icon: ShieldCheck, accent: "from-blue-400 to-cyan-600",
    tagline: "Corporate sites and technical content that win MSP and security contracts." },
  { slug: "startups-saas", name: "Startups & SaaS", icon: Rocket, accent: "from-indigo-400 to-fuchsia-600",
    tagline: "MVPs, product sites and demand generation from day one." },
] as const;

export const INDUSTRY_SLUGS = INDUSTRIES.map((i) => i.slug);
export const getIndustry = (slug: string) => INDUSTRIES.find((i) => i.slug === slug);