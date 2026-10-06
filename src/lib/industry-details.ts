import type { ServiceSlug } from "./services";

/**
 * Long-form copy for /industries/[slug]. Import ONLY from server components
 * (pages, generateMetadata) so it is never shipped to the browser.
 */
export interface IndustryDetail {
  headline: string;
  intro: string;
  challenges: [string, string, string];
  solutions: { service: ServiceSlug; text: string }[];
  /** Live work we can point to. Only add projects the client has approved for public use. */
  proof?: { label: string; href: string };
}

export const INDUSTRY_DETAILS: Record<string, IndustryDetail> = {
  "real-estate": {
    headline: "Turn listings into booked viewings",
    intro: "Buyers start online and decide fast. We build property sites and campaigns that capture intent while it is hot and route it straight to your agents.",
    challenges: ["Leads go cold before an agent responds", "Portals own your traffic and your data", "Listings look identical to competitors'"],
    solutions: [
      { service: "web-development", text: "IDX-ready listing sites with fast search, maps and saved-property alerts." },
      { service: "ai-automation-systems", text: "Instant lead routing and AI follow-up over SMS, email and WhatsApp." },
      { service: "ai-content-video-creation", text: "Property walkthrough reels and agent-brand video." },
    ],
  },
  "retail-ecommerce": {
    headline: "Stores engineered to convert",
    intro: "Every extra second and every extra checkout step costs sales. We build stores that load fast, look premium and recover abandoned carts automatically.",
    challenges: ["High cart abandonment", "Rising ad costs eating margin", "Disconnected inventory and fulfilment"],
    solutions: [
      { service: "e-commerce-development", text: "Shopify, WooCommerce or headless Next.js stores with secure payment gateways." },
      { service: "digital-marketing", text: "Meta and Google Shopping campaigns tracked to revenue." },
      { service: "ai-automation-systems", text: "Abandoned-cart, review and re-order automations." },
    ],
  },
  healthcare: {
    headline: "More booked patients, less front-desk load",
    intro: "Patients compare clinics on Google before they call. We help you win that comparison and let them book without picking up the phone.",
    challenges: ["Invisible in local search and Maps", "Phone-only booking loses after-hours patients", "Reviews do not reflect the care you deliver"],
    solutions: [
      { service: "seo-optimizer", text: "Local SEO and Google Business Profile optimisation per location." },
      { service: "web-development", text: "Accessible, mobile-first sites with online booking integrations." },
      { service: "ai-automation-systems", text: "Appointment reminders and review-request flows." },
    ],
  },
  "med-spa-salons": {
    headline: "Fill the chair, every day",
    intro: "Your services are visual and your clients live on Instagram. We pair booking-first websites with short-form content that drives appointments, not just likes.",
    challenges: ["Empty mid-week slots", "Inconsistent social content", "No-shows and last-minute cancellations"],
    solutions: [
      { service: "ai-content-video-creation", text: "Before/after reels and treatment explainers produced monthly." },
      { service: "seo-optimizer", text: "\"Near me\" local SEO for every treatment you offer." },
      { service: "ai-automation-systems", text: "Deposit-backed booking, reminders and rebooking nudges." },
    ],
  },
  education: {
    headline: "Enrollment that does not wait for open day",
    intro: "From tutoring centres to online academies, we build the funnels and platforms that move a curious visitor to an enrolled student.",
    challenges: ["Seasonal, unpredictable enrollment", "Complex programme information", "Low course completion"],
    solutions: [
      { service: "web-development", text: "Programme finders, application forms and LMS integrations." },
      { service: "digital-marketing", text: "Always-on enrollment campaigns with clear cost-per-applicant." },
      { service: "ai-automation-systems", text: "Nurture sequences and AI study assistants." },
    ],
  },
  "professional-services": {
    headline: "Authority that earns the first call",
    intro: "Clients choose firms they trust. We build credible, fast websites and content that demonstrate expertise while respecting professional advertising rules.",
    challenges: ["Dated websites that undersell expertise", "Referral-only pipelines", "Slow, manual intake"],
    solutions: [
      { service: "web-development", text: "Clean Next.js sites with practice-area pages and secure intake forms." },
      { service: "seo-optimizer", text: "Practice-area and local SEO content strategies." },
      { service: "ai-automation-systems", text: "Automated intake, scheduling and document requests." },
    ],
  },
  "financial-services": {
    headline: "Digital trust for money businesses",
    intro: "Financial brands are judged on security and clarity. We design compliant-ready websites and portals that make complex products easy to understand.",
    challenges: ["Visitors do not trust unfamiliar brands", "Complex products, unclear messaging", "Strict marketing and disclosure rules"],
    solutions: [
      { service: "web-development", text: "Secure client portals, calculators and disclosure-ready page templates." },
      { service: "digital-marketing", text: "Demand generation reviewed against your compliance checklist." },
      { service: "ai-content-video-creation", text: "Plain-language explainer videos." },
    ],
  },
  manufacturing: {
    headline: "Win B2B buyers before the RFQ",
    intro: "Industrial buyers research specs online long before they contact sales. We make your catalogue searchable, your capabilities clear and your RFQs easy.",
    challenges: ["Catalogues trapped in PDFs", "Few qualified inbound enquiries", "Systems that do not talk to each other"],
    solutions: [
      { service: "web-development", text: "Searchable product catalogues with spec sheets and RFQ forms." },
      { service: "seo-optimizer", text: "Industrial and part-number SEO." },
      { service: "ai-automation-systems", text: "CRM and ERP integrations that remove double entry." },
    ],
  },
  hospitality: {
    headline: "More direct bookings, fewer commissions",
    intro: "Every booking you win directly is margin you keep. We build fast booking experiences and campaigns that compete with the big OTAs.",
    challenges: ["High OTA commission costs", "Slow, dated booking flows", "Seasonal occupancy swings"],
    solutions: [
      { service: "web-development", text: "Direct-booking websites with rate and availability integrations." },
      { service: "digital-marketing", text: "Metasearch and remarketing campaigns." },
      { service: "ai-content-video-creation", text: "Property films and social reels." },
    ],
  },
  restaurants: {
    headline: "From scroll to table",
    intro: "Diners decide where to eat in seconds. We make sure they find you, crave your food and order or book in a tap.",
    challenges: ["Third-party delivery fees", "Outdated menus across platforms", "Low visibility in local search"],
    solutions: [
      { service: "web-development", text: "Fast menu sites with commission-free online ordering." },
      { service: "seo-optimizer", text: "Google Maps and local SEO." },
      { service: "ai-content-video-creation", text: "Food reels and launch campaigns." },
    ],
  },
  "travel-tourism": {
    headline: "Booking platforms built for global travellers",
    intro: "We have built full travel booking platforms in production, so we know the details: search performance, multi-currency checkout and supplier integrations.",
    challenges: ["Complex search and availability logic", "Cross-border payments", "Competing with large OTAs on SEO"],
    solutions: [
      { service: "web-development", text: "Booking engines with search, filters and supplier APIs." },
      { service: "e-commerce-development", text: "Multi-currency payments and secure checkout." },
      { service: "seo-optimizer", text: "Destination and route SEO at scale." },
    ],
    proof: { label: "ReservationKart — live travel booking platform", href: "https://reservationkart.com" },
  },
  construction: {
    headline: "Show the work, win the bid",
    intro: "Homeowners and developers hire contractors they can see and trust. We showcase your projects and turn searches into quote requests.",
    challenges: ["Word-of-mouth only pipeline", "Poor Google Maps ranking", "Unqualified quote requests"],
    solutions: [
      { service: "web-development", text: "Project galleries and qualifying quote forms." },
      { service: "seo-optimizer", text: "Service-area pages and Google Business Profile management." },
      { service: "digital-marketing", text: "Local Services and search ads." },
    ],
  },
  logistics: {
    headline: "Operations visibility, online",
    intro: "Shippers expect real-time answers. We build the portals and dashboards that give them visibility and give your team time back.",
    challenges: ["Status updates by phone and email", "Manual dispatch and paperwork", "Little inbound B2B demand"],
    solutions: [
      { service: "web-development", text: "Tracking portals and operations dashboards." },
      { service: "ai-automation-systems", text: "Automated status notifications and document workflows." },
      { service: "seo-optimizer", text: "Lane- and service-specific B2B SEO." },
    ],
  },
  automotive: {
    headline: "Inventory that sells itself",
    intro: "Car buyers and renters shop on mobile. We build fast inventory and rental booking experiences that turn browsing into reservations.",
    challenges: ["Slow, clunky inventory pages", "Leads lost between website and showroom", "Heavy reliance on marketplaces"],
    solutions: [
      { service: "web-development", text: "Inventory showcases and rental booking engines." },
      { service: "digital-marketing", text: "Local inventory and remarketing campaigns." },
      { service: "ai-automation-systems", text: "Instant lead response and test-drive scheduling." },
    ],
    proof: { label: "ReservationCarRent — live car rental platform", href: "https://reservationcarrent.com" },
  },
  "it-cybersecurity": {
    headline: "Technical credibility at first glance",
    intro: "IT buyers are sceptical by default. We build sharp, fast corporate sites and technical content that prove capability and earn contracts.",
    challenges: ["Generic sites that look like every other MSP", "Long, complex sales cycles", "Hard-to-explain services"],
    solutions: [
      { service: "web-development", text: "Performance-tuned Next.js corporate websites." },
      { service: "seo-optimizer", text: "Service and location pages for managed IT and security." },
      { service: "ai-content-video-creation", text: "Case studies and explainer content." },
    ],
    proof: { label: "Pinnacle Network & Security — corporate site", href: "https://pinnaclenetsec.com" },
  },
  "startups-saas": {
    headline: "From idea to traction, fast",
    intro: "Startups need to ship and learn quickly. We build lean MVPs and product sites on a modern stack, then help you find your first customers.",
    challenges: ["Limited runway, tight timelines", "Product-market fit still unproven", "No in-house growth team"],
    solutions: [
      { service: "web-development", text: "Next.js MVPs with auth, payments and dashboards." },
      { service: "ai-automation-systems", text: "AI features and integrations built in from day one." },
      { service: "digital-marketing", text: "Launch campaigns and conversion-focused landing pages." },
    ],
  },
};