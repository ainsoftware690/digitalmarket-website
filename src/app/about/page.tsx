import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { fullAddress, site } from "@/lib/site";
import { team } from "@/lib/proof";
import { Container, SectionHeading } from "../components/ui/SectionHeading";
import PhotoHero from "../components/ui/PhotoHero";
import { photos } from "@/lib/photos";
import { ProcessSection } from "../components/sections/ProcessSection";
import FinalCta from "../components/home/FinalCta";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Digital Market Mart LLC is a Maryland digital agency that builds websites and runs the SEO, ads and automation that fill them. How we work and what we stand for.",
  path: "/about",
});

const PRINCIPLES = [
  {
    title: "One team, start to finish",
    body: "The people who build your site are the people who market it. No hand-offs between agencies, no finger-pointing when leads drop.",
  },
  {
    title: "Measured in enquiries",
    body: "We judge our work by calls, forms and bookings, not likes or impressions. Tracking goes in before campaigns go live.",
  },
  {
    title: "Plain English, in writing",
    body: "Scopes, prices and reports are written so you can read them in five minutes. If something isn't working, we say so first.",
  },
  {
    title: "You stay in control",
    body: "Your domain, website, ad accounts and data are in your name. If you ever leave, everything goes with you.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PhotoHero
        photo={photos["about-1"]}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
        title="We build websites and keep them full of customers"
        intro={`${site.legalName} is a digital agency headquartered in Hagerstown, Maryland. We design and build websites, stores and apps, then run the SEO, paid ads, content and automation that turn them into a steady source of enquiries.`}
      />

      <section className="bg-white py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="relative h-[420px] sm:h-[520px]" data-reveal="scale">
            <div className="zoom-frame absolute left-0 top-0 h-[72%] w-[70%] overflow-hidden rounded-[var(--radius-panel)]">
              <Image src={photos["about-2"].src} alt={photos["about-2"].alt} fill sizes="(min-width: 1024px) 35vw, 70vw" className="object-cover" />
            </div>
            <div className="zoom-frame absolute bottom-0 right-0 h-[58%] w-[56%] overflow-hidden rounded-[var(--radius-panel)] border-[6px] border-white shadow-[0_30px_60px_-30px_rgba(3,42,76,0.5)]">
              <Image src={photos["about-3"].src} alt={photos["about-3"].alt} fill sizes="(min-width: 1024px) 28vw, 56vw" className="object-cover" />
            </div>
          </div>
          <div data-reveal>
            <h2 className="display-md text-[clamp(2rem,4vw,3rem)] text-ink">One team from first sketch to monthly report</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              We work with small and mid-sized businesses across the United States, and with companies expanding into the
              UAE, Saudi Arabia and Qatar. The people who design your site are the people who market it.
            </p>
            <dl className="mt-8 grid gap-5 rounded-[var(--radius-panel)] border border-line bg-paper p-7 text-[16px] sm:grid-cols-2">
              <div>
                <dt className="text-muted">Company</dt>
                <dd className="font-semibold text-ink">{site.legalName}</dd>
              </div>
              <div>
                <dt className="text-muted">Head office</dt>
                <dd className="font-semibold text-ink">{fullAddress}</dd>
              </div>
              <div>
                <dt className="text-muted">Markets</dt>
                <dd className="font-semibold text-ink">United States, UAE, Saudi Arabia, Qatar</dd>
              </div>
              <div>
                <dt className="text-muted">Talk to us</dt>
                <dd className="font-semibold text-ink">
                  <a href={`tel:${site.phones.sales.e164}`} className="hover:text-signal-press">
                    {site.phones.sales.display}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <section aria-labelledby="principles-heading" className="border-y border-line bg-paper py-20 sm:py-28">
        <Container>
          <SectionHeading id="principles-heading" title="How we work" />
          <dl className="mt-12 grid gap-10 md:grid-cols-2" data-reveal-stagger="110">
            {PRINCIPLES.map((p) => (
              <div key={p.title} data-reveal className="border-t-2 border-ink pt-5">
                <dt className="title text-2xl text-ink">{p.title}</dt>
                <dd className="mt-3 max-w-lg text-[17px] leading-relaxed text-muted">{p.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {team.length > 0 && (
        <section aria-labelledby="team-heading" className="bg-white py-20 sm:py-28">
          <Container>
            <SectionHeading id="team-heading" title="The people you'll work with" />
            <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((m) => (
                <li key={m.name}>
                  <Image src={m.photo} alt={m.name} width={480} height={480} className="aspect-square w-full rounded-[var(--radius-panel)] object-cover" />
                  <h3 className="title mt-5 text-xl text-ink">{m.name}</h3>
                  <p className="text-[15px] font-semibold text-signal-press">{m.role}</p>
                  <p className="mt-2 text-[16px] leading-relaxed text-muted">{m.bio}</p>
                  {m.linkedin && (
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="link mt-3 inline-block text-[15px]">
                      LinkedIn
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <ProcessSection tone="white" />

      <section className="border-t border-line bg-white py-16">
        <Container className="flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-2xl text-lg text-ink">
            Want to see what we&apos;ve built? Every site on our work page is live and linked.
          </p>
          <Link href="/work" className="btn btn-secondary">
            See our work
          </Link>
        </Container>
      </section>

      <FinalCta />
    </main>
  );
}
