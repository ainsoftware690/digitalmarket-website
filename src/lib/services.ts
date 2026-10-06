/**
 * Service catalogue. Every service an underwriter can see must have:
 * a description, what is delivered, how it is billed, and a starting price.
 */

export type BillingModel = "one-time" | "monthly" | "custom";

/** Every slug must have a matching route at /app/services/[slug]. */
export type ServiceSlug =
  | "web-development"
  | "mobile-app-development"
  | "e-commerce-development"
  | "ai-automation-systems"
  | "seo-optimizer"
  | "digital-marketing"
  | "ai-content-video-creation"
  | "business-credit-education";

export type ServiceCategory = "technology" | "marketing" | "education";

export type Service = {
  slug: ServiceSlug;
  title: string;
  summary: string;
  deliverables: string[];
  billing: BillingModel;
  /** Starting price in USD. `null` = quoted per project. */
  priceFrom: number | null;
  category: ServiceCategory;
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    summary: "Fast, secure, responsive websites built with Next.js and React.",
    deliverables: ["Custom design", "Responsive build", "On-page SEO", "Contact forms", "3–6 months support"],
    billing: "one-time",
    priceFrom: 999,
    category: "technology",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    summary: "iOS and Android apps from prototype to store launch.",
    deliverables: ["UX/UI design", "Cross-platform build", "API integration", "Store submission"],
    billing: "custom",
    priceFrom: null,
    category: "technology",
  },
  {
    slug: "e-commerce-development",
    title: "E-commerce Development",
    summary: "Online stores with secure checkout, catalogue and order management.",
    deliverables: ["Store setup", "Payment gateway integration", "Product catalogue", "Training"],
    billing: "one-time",
    priceFrom: 2499,
    category: "technology",
  },
  {
    slug: "ai-automation-systems",
    title: "AI & Automation Systems",
    summary: "Chatbots, CRM workflows and process automation.",
    deliverables: ["Workflow audit", "Chatbot / automation build", "Integrations", "Monitoring"],
    billing: "custom",
    priceFrom: null,
    category: "technology",
  },
  {
    slug: "seo-optimizer",
    title: "SEO Optimization",
    summary: "Technical, on-page and local SEO with monthly reporting.",
    deliverables: ["Technical audit", "Keyword strategy", "On-page optimisation", "Monthly report"],
    billing: "monthly",
    priceFrom: null, // TODO(confirm)
    category: "marketing",
  },
  {
    slug: "digital-marketing",
    title: "Growth & Digital Marketing",
    summary: "Paid ads, social media and campaign management across the USA and GCC.",
    deliverables: ["Strategy", "Campaign setup", "Weekly optimisation", "Content", "Reporting"],
    billing: "monthly",
    priceFrom: null, // TODO(confirm)
    category: "marketing",
  },
  {
    slug: "ai-content-video-creation",
    title: "AI Content & Video Creation",
    summary: "Human-reviewed AI-assisted copy, graphics and short-form video.",
    deliverables: ["Content calendar", "Copy & graphics", "Short-form video", "Commercial-use licensing"],
    billing: "monthly",
    priceFrom: null, // TODO(confirm)
    category: "marketing",
  },
  {
    slug: "business-credit-education",
    title: "Business Credit Education & Funding Readiness",
    summary:
      "An education & coaching program (8 weeks to 6 months) to set up your company correctly, build a business credit profile and prepare a lender-ready application.",
    deliverables: [
      "Readiness assessment call",
      "Business Credit Readiness Report (PDF)",
      "Compliance checklist & templates",
      "4–12 × 1:1 coaching sessions",
      "Lender-ready document review",
    ],
    billing: "one-time",
    priceFrom: 1497,
    category: "education",
  },
];

export const categoryLabels: Record<ServiceCategory, string> = {
  technology: "Technology",
  marketing: "Marketing & Growth",
  education: "Business Education",
};

/** One-line intro shown under each category heading on /services. */
export const categoryBlurbs: Record<ServiceCategory, string> = {
  technology: "Fast, secure products engineered on Next.js, React and cloud-native stacks.",
  marketing: "Demand generation that turns your website into a predictable pipeline.",
  education: "Coaching and written guides on structuring your business and preparing for lenders.",
};

/** Display order for category groups. */
export const categoryOrder: readonly ServiceCategory[] = ["technology", "marketing", "education"];

/** O(1) lookup by slug — used by industry pages and nav. */
export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s])) as Record<
  ServiceSlug,
  Service
>;

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function priceLabel(s: Pick<Service, "priceFrom" | "billing">): string {
  if (s.priceFrom === null) return "Custom quote";
  const suffix = s.billing === "monthly" ? "/month" : " one-time";
  return `From ${usd.format(s.priceFrom)}${suffix}`;
}

export function formatUsd(n: number) {
  return usd.format(n);
}

/** Business-credit program detail — the "what exactly is delivered" answer. */
export const businessCredit = {
  plans: [
    {
      name: "Foundations",
      price: 1497,
      installments: null,
      duration: "8 weeks",
      highlight: false,
      items: [
        "60-minute onboarding assessment (video call)",
        "Business Credit Readiness Report (PDF) with step-by-step action plan",
        "Entity Compliance Checklist & business-profile templates",
        "Business Credit Playbook (digital guide)",
        "4 × 45-minute 1:1 coaching sessions",
        "Lender-Ready Document Checklist + 1 package review",
        "Email support during the program",
      ],
    },
    {
      name: "Growth",
      price: 2997,
      installments: "or 3 monthly payments of $1,049",
      duration: "12 weeks",
      highlight: true,
      items: [
        "Everything in Foundations",
        "8 × 45-minute 1:1 coaching sessions (total)",
        "12-month financial projections template + review",
        "One-page business plan review",
        "2 lender-ready package reviews",
        "Priority email & WhatsApp support",
      ],
    },
    {
      name: "Elite",
      price: 4997,
      installments: "or 6 monthly payments of $899",
      duration: "6 months",
      highlight: false,
      items: [
        "Everything in Growth",
        "12 × 1:1 coaching sessions (bi-weekly)",
        "Monthly business credit file progress review",
        "Done-with-you lender document preparation",
        "Quarterly growth strategy session",
        "Direct phone support (business hours)",
      ],
    },
  ],
  steps: [
    { title: "Assess", body: "We review your entity, EIN, address, phone, domain, NAICS code, banking and business credit file status." },
    { title: "Report", body: "You receive a written Readiness Report with a prioritised action plan." },
    { title: "Coach", body: "Scheduled 1:1 sessions walk you through each step — you stay in control of every application." },
    { title: "Prepare", body: "We review your lender-ready document package before you apply to lenders of your choice." },
  ],
  notIncluded: [
    "We are not a lender, loan broker or investment adviser.",
    "We do not provide consumer or personal credit repair and do not dispute items on any credit report.",
    "We do not sell, buy or broker aged or “shelf” corporations.",
    "We never guarantee credit approvals, credit limits, funding amounts or timelines.",
    "We never hold or handle client funds or apply for credit on a client’s behalf.",
  ],
} as const;