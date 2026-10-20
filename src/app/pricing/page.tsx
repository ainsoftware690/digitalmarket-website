import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { pillars } from "@/lib/nav";
import { priceLabel, serviceBySlug } from "@/lib/services";
import { site } from "@/lib/site";
import { Breadcrumbs, Container, SectionHeading } from "../components/ui/SectionHeading";
import Faq from "../components/home/Faq";
import FinalCta from "../components/home/FinalCta";

export const metadata: Metadata = pageMetadata({
  title: "Pricing",
  description:
    "Website projects from $999, e-commerce stores from $2,499, and month-to-month SEO, ads and content. Every engagement is quoted in writing before work starts.",
  path: "/pricing",
});

const HOW_BILLING_WORKS = [
  {
    title: "Projects",
    body: `Websites, stores, apps and automation builds have a fixed price in a written scope. We take a ${site.policy.depositPercent}% deposit and bill the rest by milestone.`,
  },
  {
    title: "Monthly services",
    body: `SEO, ads management and content are billed monthly in advance and run month to month. Cancel with ${site.policy.retainerNoticeDays} days' written notice.`,
  },
  {
    title: "Ad spend",
    body: "Ad budgets are paid directly to Google or Meta from your own account. Our fee never hides inside your spend.",
  },
  {
    title: "Changes",
    body: "Anything outside the agreed scope is quoted separately and only starts after you approve it in writing.",
  },
];

const PRICING_FAQS = [
  {
    q: "Why do some services say 'custom quote'?",
    a: "Apps, automation and monthly marketing depend on things we can't know without looking: how competitive your market is, how many locations you have, which tools you already use. The free audit gives us enough to quote in writing.",
  },
  {
    q: "What's included in the monthly report?",
    a: "Leads, calls and bookings by channel, rankings for your main services, ad spend and cost per lead where relevant, what we did that month and what we'll do next.",
  },
  {
    q: "Are there setup fees?",
    a: "Any setup work, such as conversion tracking or a Google Business Profile overhaul, is listed and priced in your scope. There are no surprise fees on the invoice.",
  },
  {
    q: "Do you offer refunds?",
    a: "Our refund and cancellation policy explains exactly when deposits and monthly fees are refundable. It's linked at the bottom of every page.",
  },
];

export default function PricingPage() {
  return (
    <main>
      <section className="bg-white pb-16 pt-10 sm:pb-20 sm:pt-14">
        <Container>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Pricing" }]} />
          <h1 className="display mt-8 max-w-4xl text-[clamp(2.4rem,5.4vw,4.4rem)] text-ink">Clear prices, agreed before we start</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Starting prices for every service. Your exact price goes in a written scope you approve before any work or
            payment.
          </p>
        </Container>
      </section>

      <section aria-label="Prices by service" className="bg-paper py-16 sm:py-20">
        <Container className="space-y-12">
          {pillars.map((p) => (
            <div key={p.id}>
              <h2 className="display-md text-[clamp(1.8rem,3vw,2.4rem)] text-ink">{p.name}</h2>
              <table className="mt-5 w-full border-collapse overflow-hidden rounded-[var(--radius-panel)] bg-white text-left ring-1 ring-line">
                <caption className="sr-only">{p.name} services and starting prices</caption>
                <thead className="sr-only">
                  <tr>
                    <th scope="col">Service</th>
                    <th scope="col">Starting price</th>
                  </tr>
                </thead>
                <tbody>
                  {p.services.map((s) => {
                    const svc = serviceBySlug[s.slug];
                    return (
                      <tr key={s.slug} className="border-b border-line last:border-0">
                        <th scope="row" className="p-6 align-top font-normal">
                          <Link href={`/services/${s.slug}`} className="title text-lg text-ink hover:text-signal-press">
                            {s.label}
                          </Link>
                          <span className="mt-1 block text-[15px] text-muted">{svc.summary}</span>
                          <span className="mt-2 block text-[14px] text-subtle">Includes: {svc.deliverables.join(", ")}</span>
                        </th>
                        <td className="w-[34%] p-6 text-right align-top">
                          <span className="display block text-[1.5rem] text-ink">{priceLabel(svc)}</span>
                          <span className="mt-1 block text-[14px] text-muted">
                            {svc.billing === "monthly" ? "Month to month" : svc.billing === "one-time" ? "Fixed-price project" : "Quoted per project"}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ))}
        </Container>
      </section>

      <section aria-labelledby="billing-heading" className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading id="billing-heading" title="How billing works" />
          <dl className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {HOW_BILLING_WORKS.map((b) => (
              <div key={b.title} className="border-t-2 border-ink pt-5">
                <dt className="title text-xl text-ink">{b.title}</dt>
                <dd className="mt-2 text-[16px] leading-relaxed text-muted">{b.body}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-[15px] text-muted">
            Full details are in our{" "}
            <Link href="/terms" className="link">
              terms of service
            </Link>{" "}
            and{" "}
            <Link href="/refund-policy" className="link">
              refund and cancellation policy
            </Link>
            .
          </p>
        </Container>
      </section>

      <Faq items={PRICING_FAQS} title="Pricing questions" />
      <FinalCta title="Not sure what you need?" lead="The free audit tells you what's worth fixing first and what it would cost, before you commit to anything." />
    </main>
  );
}
