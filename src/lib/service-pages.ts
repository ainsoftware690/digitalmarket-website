import type { ServiceSlug } from "./services";

export type ServicePageContent = {
  slug: Exclude<ServiceSlug, "business-credit-education">;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  /** Who this is for, in their words. */
  goodFit: string[];
  /** Three outcomes the client cares about. */
  outcomes: { title: string; body: string }[];
  /** What's included, grouped. */
  included: { group: string; items: string[] }[];
  /** Tools we use. Plain names, no logos. */
  stack: string[];
  faqs: { q: string; a: string }[];
  relatedIndustries: string[];
};

export const SERVICE_PAGES: ServicePageContent[] = [
  {
    slug: "web-development",
    metaTitle: "Website Design & Development for Small Businesses",
    metaDescription:
      "Custom websites built on Next.js that load fast, rank on Google and turn visitors into calls and enquiries. Written quote, you own the site. From $999.",
    headline: "A website that brings in enquiries, not just compliments",
    intro:
      "We design and build fast, mobile-first websites on Next.js, written around the questions your customers ask before they call. Every site launches with SEO basics, call and form tracking, and a page speed we check before go-live.",
    goodFit: [
      "Your site looks dated or breaks on phones",
      "People visit but don't call or fill in the form",
      "You can't update the site without paying someone",
      "You're launching a new business or location",
    ],
    outcomes: [
      { title: "More enquiries from the same traffic", body: "Clear calls to action, click-to-call, short forms and booking where it fits, on every page that matters." },
      { title: "Found on Google from day one", body: "Clean structure, page titles, schema, a sitemap and Google Search Console set up at launch." },
      { title: "Fast on every phone", body: "Optimised images, modern code and hosting on Vercel's global network. We test real load times before launch." },
    ],
    included: [
      { group: "Design", items: ["Sitemap and page plan", "Custom design in your brand", "Clickable prototype for approval", "Copywriting help for key pages"] },
      { group: "Build", items: ["Responsive Next.js build", "Contact forms with spam protection", "Click-to-call, WhatsApp and booking links", "Accessibility checks against WCAG 2.1 AA"] },
      { group: "Launch", items: ["On-page SEO and schema", "Google Analytics 4 and conversion tracking", "Search Console and sitemap submission", "3–6 months of post-launch support"] },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Google Analytics 4", "Google Tag Manager"],
    faqs: [
      { q: "How long does a website take?", a: "A typical 5–10 page business site takes 3–6 weeks from kick-off to launch. The written scope sets the exact timeline and milestones." },
      { q: "Can I edit the site myself?", a: "Yes. If you want to update text, photos or blog posts yourself, we include a simple editor and show you how to use it." },
      { q: "What does it cost?", a: "Business websites start at $999. Larger sites, booking systems or custom features are quoted in writing after a short call or the free audit." },
    ],
    relatedIndustries: ["professional-services", "healthcare", "construction", "real-estate"],
  },
  {
    slug: "e-commerce-development",
    metaTitle: "E-commerce Website Development",
    metaDescription:
      "Online stores with fast product pages, secure checkout and order management. Stripe and PayPal, product SEO and analytics included. From $2,499.",
    headline: "An online store built to sell, not just to list products",
    intro:
      "We build e-commerce stores with fast product pages, a checkout that doesn't lose people, and the reporting you need to see what sells. Payments, shipping, tax and inventory are set up and tested before you open.",
    goodFit: [
      "You sell in person and want to sell online",
      "Your current store is slow or checkout drops people",
      "You're paying high marketplace fees and want your own store",
      "You need multi-currency or GCC payment options",
    ],
    outcomes: [
      { title: "A checkout people finish", body: "Guest checkout, saved carts, clear shipping costs and the payment methods your customers already use." },
      { title: "Products that show up in search", body: "Product schema, clean URLs and category pages written for how people search." },
      { title: "Less admin", body: "Inventory, orders and customer emails in one dashboard, with low-stock alerts." },
    ],
    included: [
      { group: "Store setup", items: ["Store design and product page templates", "Product catalogue import", "Shipping, tax and discount rules", "Order and customer email templates"] },
      { group: "Payments", items: ["Stripe and PayPal integration", "Multi-currency where needed", "Test orders before launch", "Fraud and spam protection"] },
      { group: "Growth", items: ["Product and category SEO", "GA4 e-commerce tracking", "Abandoned-cart emails", "Training for your team"] },
    ],
    stack: ["Next.js", "React", "Stripe", "PayPal", "Vercel", "Google Merchant Center", "GA4"],
    faqs: [
      { q: "Which platform will my store run on?", a: "We recommend the platform in your written scope and explain why. Most stores we build are custom Next.js stores with Stripe or PayPal; if a hosted platform suits you better, we'll say so." },
      { q: "Can you move my products from my old store?", a: "Yes. We migrate products, customers and order history where the old platform allows it, and set up redirects so you keep your search rankings." },
      { q: "What does it cost?", a: "E-commerce stores start at $2,499. The final price depends on catalogue size, integrations and custom features, and is fixed in writing before work starts." },
    ],
    relatedIndustries: ["retail-ecommerce", "restaurants", "med-spa-salons", "manufacturing"],
  },
  {
    slug: "mobile-app-development",
    metaTitle: "Mobile App Development for iOS and Android",
    metaDescription:
      "iOS and Android apps from prototype to App Store launch. Cross-platform builds, API integrations and store submission. Scoped and quoted in writing.",
    headline: "From app idea to the App Store, without the guesswork",
    intro:
      "We design and build iOS and Android apps, usually from one cross-platform codebase so you're not paying twice. You see a clickable prototype before we write production code, and we handle store submission.",
    goodFit: [
      "You have an app idea and need a first version",
      "Your customers keep asking for an app",
      "You need a booking, ordering or loyalty app",
      "Your existing app needs a rebuild",
    ],
    outcomes: [
      { title: "Test the idea before you build it all", body: "A clickable prototype you can put in front of customers in the first weeks." },
      { title: "One codebase, two stores", body: "Cross-platform builds for iOS and Android keep cost and maintenance down." },
      { title: "Launched, not stuck in review", body: "We prepare store listings, screenshots and privacy details, and handle submission." },
    ],
    included: [
      { group: "Design", items: ["User flows and wireframes", "UI design for iOS and Android", "Clickable prototype"] },
      { group: "Build", items: ["Cross-platform app build", "API and backend integration", "Push notifications", "Analytics and crash reporting"] },
      { group: "Launch", items: ["App Store and Google Play submission", "Store listing copy and screenshots", "Post-launch fixes and updates"] },
    ],
    stack: ["React Native", "Expo", "Flutter", "Swift", "Kotlin", "Firebase", "Supabase"],
    faqs: [
      { q: "How much does an app cost?", a: "Apps vary too much for a fixed starting price. After a short call we send a written scope with a fixed price per milestone." },
      { q: "Do I need a separate iOS and Android app?", a: "Usually not. A cross-platform build covers both. We'll tell you if your app needs native code for a specific feature." },
      { q: "Who owns the code?", a: "You do, once paid in full. The code written for your app, the designs and the store accounts are yours." },
    ],
    relatedIndustries: ["startups-saas", "restaurants", "hospitality", "logistics"],
  },
  {
    slug: "seo-optimizer",
    metaTitle: "SEO & Local SEO Services",
    metaDescription:
      "Technical, on-page and local SEO that gets your business found on Google Search and Maps. Google Business Profile, content and monthly reporting. Month to month.",
    headline: "Show up when local customers search for what you do",
    intro:
      "We fix what's holding your site back in Google, then build the pages, reviews and local signals that move you up in Search and Maps. Every month you get a plain report: rankings, traffic, calls and what we're doing next.",
    goodFit: [
      "Competitors show up above you on Google Maps",
      "Your site gets little traffic from search",
      "You rely on referrals or paid ads for every lead",
      "You've had SEO before and couldn't tell what was done",
    ],
    outcomes: [
      { title: "Visible on Google Maps", body: "Google Business Profile optimised, service areas set, photos and posts kept active, and a simple system for asking for reviews." },
      { title: "Pages that rank for real searches", body: "Service and location pages written for what customers type, not for keyword stuffing." },
      { title: "A site Google can read", body: "Speed, indexing, schema and broken links fixed, then checked monthly." },
    ],
    included: [
      { group: "Technical", items: ["Full technical audit", "Speed and Core Web Vitals fixes", "Schema markup", "Indexing and sitemap checks"] },
      { group: "Local", items: ["Google Business Profile optimisation", "Citations and NAP consistency", "Review request system", "Location and service-area pages"] },
      { group: "Content and reporting", items: ["Keyword and competitor research", "New and improved pages each month", "Monthly report on rankings, traffic and calls", "Monthly review call"] },
    ],
    stack: ["Google Search Console", "Google Business Profile", "GA4", "Google Tag Manager", "PageSpeed Insights"],
    faqs: [
      { q: "How long until SEO works?", a: "Technical fixes and Google Business Profile changes can show results in weeks. Ranking new pages for competitive searches usually takes three to six months." },
      { q: "Do you guarantee first-page rankings?", a: "No. Nobody controls Google. We commit to the work in your scope and show you exactly what was done and what it produced each month." },
      { q: "What does SEO cost?", a: "SEO is a monthly retainer quoted after your free audit, based on how competitive your market is and how many locations you serve. It runs month to month." },
    ],
    relatedIndustries: ["professional-services", "healthcare", "construction", "med-spa-salons"],
  },
  {
    slug: "digital-marketing",
    metaTitle: "Google Ads & Meta Ads Management",
    metaDescription:
      "Google Ads and Meta ads managed for leads, not clicks. Conversion tracking, landing pages, weekly optimisation and a monthly report on cost per lead.",
    headline: "Paid ads measured in leads and cost per lead",
    intro:
      "We run Google Ads and Meta ads with one goal: enquiries you can afford. Tracking goes in before the first dollar is spent, so every report shows calls, forms and bookings, not just clicks.",
    goodFit: [
      "You've spent on ads and can't tell what worked",
      "You need leads faster than SEO can deliver",
      "You're launching a new service or location",
      "Your ad account is run by someone who never reports",
    ],
    outcomes: [
      { title: "Tracking you can trust", body: "Calls, forms and bookings recorded as conversions in GA4 and the ad platforms before campaigns launch." },
      { title: "Spend that goes to buyers", body: "Tight targeting, negative keywords and landing pages built for each campaign." },
      { title: "Cost per lead, every month", body: "One report showing spend, leads, cost per lead and what we're changing." },
    ],
    included: [
      { group: "Setup", items: ["Account audit or new account setup", "Conversion tracking for calls, forms and bookings", "Audience and keyword research", "Landing page recommendations or builds"] },
      { group: "Campaigns", items: ["Google Search and Performance Max", "Meta (Facebook and Instagram) lead and traffic campaigns", "Retargeting", "Ad copy and creative"] },
      { group: "Management", items: ["Weekly optimisation", "Search term and placement cleanup", "A/B tests on ads and pages", "Monthly report and review call"] },
    ],
    stack: ["Google Ads", "Meta Ads Manager", "GA4", "Google Tag Manager", "Looker Studio"],
    faqs: [
      { q: "How much should I spend on ads?", a: "It depends on your market and what a customer is worth to you. In the audit we estimate a starting budget from real search volumes and typical costs in your area." },
      { q: "Is ad spend included in your fee?", a: "No. Ad spend is paid directly to Google or Meta from your own account, so you always see exactly what was spent." },
      { q: "Do I own the ad accounts?", a: "Yes. Accounts are created in your name or you grant us access to yours. If you leave, the accounts and their history stay with you." },
    ],
    relatedIndustries: ["construction", "real-estate", "med-spa-salons", "education"],
  },
  {
    slug: "ai-content-video-creation",
    metaTitle: "Content & Short-Form Video Production",
    metaDescription:
      "Short-form video, social content and website copy produced with AI tools and reviewed by people. Content calendar, editing and commercial-use licensing.",
    headline: "Short videos and content that keep you in front of customers",
    intro:
      "Our team shoots, edits and writes the content your channels need: Reels, Shorts, TikToks, service explainers and website copy. AI tools speed up production; a human editor reviews every piece before it goes out.",
    goodFit: [
      "You know you should post but never have time",
      "Your videos get views but no enquiries",
      "You need explainer videos for your services or products",
      "Your website copy doesn't sound like you",
    ],
    outcomes: [
      { title: "A steady posting schedule", body: "A monthly calendar planned around your services, seasons and offers." },
      { title: "Videos that point to a next step", body: "Every piece ends with a clear action: call, book, visit the site." },
      { title: "Content you're licensed to use", body: "Music, footage and AI output cleared for commercial use, in writing." },
    ],
    included: [
      { group: "Planning", items: ["Content strategy and monthly calendar", "Hooks and scripts", "Brand voice guide"] },
      { group: "Production", items: ["Short-form video editing (Reels, Shorts, TikTok)", "Explainer and testimonial videos", "Social graphics and carousels", "Website and blog copy"] },
      { group: "Publishing", items: ["Captions and subtitles", "Scheduling", "Monthly performance review"] },
    ],
    stack: ["Premiere Pro", "After Effects", "CapCut", "Descript", "ElevenLabs", "Runway", "Canva"],
    faqs: [
      { q: "Do I have to be on camera?", a: "No. We can work from product footage, screen recordings, stock and animation. Founder-led videos usually perform better, so we'll make that easy if you're open to it." },
      { q: "Is AI content any good?", a: "Only with an editor. We use AI to speed up scripting, subtitles and rough cuts. A person reviews every piece for accuracy, brand voice and quality." },
      { q: "What does it cost?", a: "Content runs as a monthly package based on the number of videos and posts. We quote it after a short call about your channels and goals." },
    ],
    relatedIndustries: ["med-spa-salons", "restaurants", "real-estate", "education"],
  },
  {
    slug: "ai-automation-systems",
    metaTitle: "AI Chatbots & Business Workflow Automation",
    metaDescription:
      "AI chatbots that answer and qualify leads 24/7, plus CRM and workflow automation that removes repetitive admin. Built on your existing tools.",
    headline: "No lead waits for a reply, even at 11 pm",
    intro:
      "We build AI assistants that answer customer questions, qualify enquiries and book appointments, then connect your forms, CRM, email and calendar so follow-up happens on its own. We work with the tools you already use.",
    goodFit: [
      "Leads come in after hours and go cold by morning",
      "Your team copies data between tools by hand",
      "Follow-up emails and reminders depend on someone remembering",
      "You answer the same customer questions every day",
    ],
    outcomes: [
      { title: "Answers in seconds", body: "A website and WhatsApp assistant trained on your services, prices and policies, with a clear hand-off to a person." },
      { title: "Follow-up on autopilot", body: "New leads added to your CRM, assigned, emailed and reminded without anyone lifting a finger." },
      { title: "Hours back each week", body: "Repetitive admin like data entry, reports and invoice reminders, automated and monitored." },
    ],
    included: [
      { group: "Discovery", items: ["Workflow review of your current process", "Automation map with time saved per task", "Fixed-price build proposal"] },
      { group: "Build", items: ["AI chatbot for website and WhatsApp", "CRM and form integrations", "Email and SMS follow-up sequences", "Appointment booking and reminders"] },
      { group: "Run", items: ["Testing with real scenarios", "Team training", "Monitoring and monthly tuning"] },
    ],
    stack: ["Claude", "OpenAI", "Google Gemini", "n8n", "Zapier", "Make", "Supabase"],
    faqs: [
      { q: "Will the chatbot make things up?", a: "We limit it to your approved information, test it against real questions before launch, and set it to hand over to a person when it isn't sure." },
      { q: "Do I need to change my software?", a: "Usually not. We connect the tools you already use. If something can't be connected, we'll say so in the proposal." },
      { q: "What does automation cost?", a: "Each build is quoted at a fixed price after a workflow review. Ongoing monitoring and tuning is an optional monthly fee." },
    ],
    relatedIndustries: ["healthcare", "professional-services", "hospitality", "logistics"],
  },
];

export const servicePageBySlug = Object.fromEntries(SERVICE_PAGES.map((s) => [s.slug, s])) as Record<
  ServicePageContent["slug"],
  ServicePageContent
>;
