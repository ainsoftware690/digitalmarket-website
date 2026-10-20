import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { site, whatsappUrl } from "@/lib/site";
import { Container, SectionHeading } from "../components/ui/SectionHeading";
import PhotoHero from "../components/ui/PhotoHero";
import { ProcessSection } from "../components/sections/ProcessSection";

export const metadata: Metadata = pageMetadata({
  title: "Digital Marketing & Web Development in the UAE, Saudi Arabia and Qatar",
  description:
    "Bilingual websites, performance marketing, social commerce and automation for businesses in the UAE, Saudi Arabia and Qatar. Monthly packages from AED 5,000.",
  path: "/vista",
});

const MARKETS = [
  {
    name: "United Arab Emirates",
    image: "/images/gcc4.jpg",
    body: "A crowded, performance-driven market. We focus on paid search, Meta and TikTok campaigns with tight tracking, and fast bilingual landing pages.",
  },
  {
    name: "Saudi Arabia",
    image: "/images/gcc3.jpg",
    body: "Fast-growing e-commerce and a young, mobile-first audience. We build Arabic-first stores and run social commerce and influencer campaigns.",
  },
  {
    name: "Qatar",
    image: "/images/gcc2.jpg",
    body: "A smaller market with high spending power and event-driven demand. We plan campaigns around the calendar and focus on premium positioning.",
  },
];

const SERVICES = [
  { title: "Performance marketing", body: "Google, Meta and TikTok campaigns with conversion tracking and weekly optimisation." },
  { title: "Bilingual websites and stores", body: "Arabic and English sites with right-to-left layouts, local payment options and fast mobile pages." },
  { title: "Content and video", body: "Short-form video and social content in Arabic and English, produced for each platform." },
  { title: "Social commerce", body: "Instagram and TikTok Shop setup, catalogues and creator partnerships." },
  { title: "AI chat and automation", body: "WhatsApp and website assistants that answer in Arabic and English and hand over to your team." },
  { title: "Market entry planning", body: "Positioning, localisation and a channel plan for brands entering the region from the US or elsewhere." },
];

const PLANS = [
  {
    name: "Startup",
    price: "AED 5,000",
    period: "per month",
    items: ["Strategy and audit", "1 campaign set up and managed", "Monthly report", "Email support"],
  },
  {
    name: "Growth",
    price: "AED 15,000",
    period: "per month",
    items: ["Full channel strategy", "Up to 3 active campaigns", "Weekly optimisation", "10 content pieces a month", "Dedicated account manager", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quoted in writing",
    items: ["Full-service marketing team", "Campaigns across all channels", "Custom development", "Team training", "Senior account lead"],
  },
];

export default function GccPage() {
  return (
    <main>
      <PhotoHero
        photo={{ src: "/images/gcc1.jpg", alt: "City skyline at night in the Gulf region", width: 1200, height: 800, source: "" }}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "GCC markets" }]}
        title="Grow in the Gulf with one accountable team"
        intro="We build bilingual websites and run the marketing behind them for businesses in the UAE, Saudi Arabia and Qatar, and for US brands expanding into the region."
        actions={
          <>
            <Link href="/free-audit" className="btn btn-primary h-14 px-7">
              Get a free audit
            </Link>
            <a href={whatsappUrl("Hi Digital Market Mart, I'd like to talk about marketing in the GCC.")} target="_blank" rel="noopener noreferrer" className="btn btn-on-dark h-14 px-7">
              WhatsApp us
            </a>
          </>
        }
      />

      <section aria-labelledby="markets-heading" className="border-y border-line bg-paper py-20 sm:py-24">
        <Container>
          <SectionHeading id="markets-heading" title="Three markets, three playbooks" />
          <ul className="mt-12 grid gap-8 md:grid-cols-3" data-reveal-stagger="120">
            {MARKETS.map((m) => (
              <li key={m.name} data-reveal className="group overflow-hidden rounded-[var(--radius-panel)] bg-white ring-1 ring-line">
                <div className="zoom-frame"><Image src={m.image} alt="" width={800} height={500} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[16/10] w-full object-cover" /></div>
                <div className="p-6">
                  <h3 className="title text-xl text-ink">{m.name}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-muted">{m.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="gcc-services-heading" className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading id="gcc-services-heading" title="What we do in the region" />
          <dl className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="border-t-2 border-ink pt-5">
                <dt className="title text-xl text-ink">{s.title}</dt>
                <dd className="mt-2 text-[16px] leading-relaxed text-muted">{s.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section aria-labelledby="gcc-pricing-heading" className="border-t border-line bg-paper py-20 sm:py-24">
        <Container>
          <SectionHeading
            id="gcc-pricing-heading"
            title="Monthly packages"
            lead="Prices in UAE dirhams, excluding ad spend and VAT. Your exact scope is agreed in writing before work starts."
          />
          <ul className="mt-12 grid gap-6 lg:grid-cols-3" data-reveal-stagger="120">
            {PLANS.map((plan, i) => (
              <li key={plan.name} data-reveal className={`flex flex-col rounded-[var(--radius-panel)] bg-white p-7 ring-1 ${i === 1 ? "ring-2 ring-ink" : "ring-line"}`}>
                <h3 className="title text-xl text-ink">{plan.name}</h3>
                <p className="mt-4">
                  <span className="display text-4xl text-ink">{plan.price}</span>
                  <span className="ml-2 text-[15px] text-muted">{plan.period}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[16px] text-ink">
                      <span aria-hidden className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact?service=digital-marketing" className={`btn mt-8 ${i === 1 ? "btn-primary" : "btn-secondary"}`}>
                  Talk to us about {plan.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[15px] text-muted">
            Prefer to talk first? Call or WhatsApp{" "}
            <a href={`tel:${site.phones.sales.e164}`} className="link">
              {site.phones.sales.display}
            </a>
            .
          </p>
        </Container>
      </section>

      <ProcessSection tone="white" />
    </main>
  );
}
