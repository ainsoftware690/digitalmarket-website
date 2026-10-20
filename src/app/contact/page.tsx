import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { fullAddress, site, whatsappUrl } from "@/lib/site";
import LeadForm, { SERVICE_OPTION_BY_SLUG } from "../components/LeadForm";
import { Breadcrumbs, Container } from "../components/ui/SectionHeading";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description: `Talk to Digital Market Mart about a website, SEO, ads or automation project. Call ${site.phones.sales.display}, WhatsApp or send a message. We reply within one business day.`,
  path: "/contact",
});

type Props = { searchParams: Promise<{ service?: string }> };

const NEXT_STEPS = [
  "We read your message and look at your current site.",
  "We reply within one business day, by email or a call if you prefer.",
  "If it's a fit, you get a written scope and fixed price. Nothing starts until you approve it.",
];

export default async function ContactPage({ searchParams }: Props) {
  const { service } = await searchParams;
  const defaultService = service ? SERVICE_OPTION_BY_SLUG[service] ?? "" : "";
  const { sales, support } = site.phones;

  return (
    <main>
      <section className="bg-white pb-20 pt-10 sm:pb-28 sm:pt-14">
        <Container>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
          <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_1.35fr]">
            <div>
              <h1 className="display text-[clamp(2.4rem,5vw,4rem)] text-ink">Tell us what you&apos;re working on</h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                A real person reads every message. Prefer to talk? Call or WhatsApp us.
              </p>

              <dl className="mt-10 space-y-6 border-t border-line pt-8">
                <div>
                  <dt className="text-[15px] text-muted">New projects</dt>
                  <dd className="mt-1">
                    <a href={`tel:${sales.e164}`} className="title text-2xl text-ink hover:text-signal-press">
                      {sales.display}
                    </a>
                    <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="link ml-4 text-[15px]">
                      WhatsApp
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[15px] text-muted">Existing clients, support and billing</dt>
                  <dd className="mt-1">
                    <a href={`tel:${support.e164}`} className="title text-xl text-ink hover:text-signal-press">
                      {support.display}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[15px] text-muted">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${site.email.general}`} className="title text-xl text-ink hover:text-signal-press">
                      {site.email.general}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[15px] text-muted">Head office</dt>
                  <dd className="mt-1 text-[17px] text-ink">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {fullAddress}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[15px] text-muted">Hours</dt>
                  <dd className="mt-1 text-[17px] text-ink">
                    {site.hours.map((h) => (
                      <span key={h.days} className="block">
                        {h.days}: {h.time}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>

              <div className="mt-10 rounded-[var(--radius-card)] bg-paper p-6">
                <h2 className="title text-lg text-ink">What happens next</h2>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-[16px] text-muted marker:font-semibold marker:text-signal-press">
                  {NEXT_STEPS.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
                <p className="mt-4 text-[15px] text-muted">
                  Just want to know where you stand?{" "}
                  <Link href="/free-audit" className="link">
                    Get a free audit
                  </Link>{" "}
                  instead.
                </p>
              </div>
            </div>

            <div>
              <LeadForm variant="contact" defaultService={defaultService} />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
