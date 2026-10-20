import { ArrowUpRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProcessSection } from "../../components/sections/ProcessSection";
import { Container } from "../../components/ui/SectionHeading";
import PhotoHero from "../../components/ui/PhotoHero";
import { industryPhoto, photos } from "@/lib/photos";
import FinalCta from "../../components/home/FinalCta";
import { getIndustry, INDUSTRY_SLUGS } from "@/lib/industries";
import { INDUSTRY_DETAILS } from "@/lib/industry-details";
import { serviceBySlug } from "@/lib/services";
import { breadcrumbJsonLd, jsonLdString, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

// Pre-render all industry pages at build time; unknown slugs return a real 404.
export const dynamicParams = false;
export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  const detail = INDUSTRY_DETAILS[slug];
  if (!industry || !detail) return {};
  return pageMetadata({
    title: `${industry.name} Marketing & Websites`,
    description: `${detail.intro} ${industry.tagline}`.slice(0, 158),
    path: `/industries/${slug}`,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  const detail = INDUSTRY_DETAILS[slug];
  if (!industry || !detail) notFound();

  const Icon = industry.icon;
  const photo = industryPhoto(slug);
  const path = `/industries/${slug}`;
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Websites and digital marketing for ${industry.name}`,
    description: detail.intro,
    audience: { "@type": "BusinessAudience", name: industry.name },
    provider: { "@id": `${site.url}/#organization` },
    url: `${site.url}${path}`,
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(serviceLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Industries", path: "/industries" },
              { name: industry.name, path },
            ])
          ),
        }}
      />

      <PhotoHero
        photo={photo ?? photos["home-hero"]}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Industries", href: "/industries" }, { name: industry.name }]}
        eyebrow={
          <>
            <Icon className="h-5 w-5" aria-hidden /> {industry.name}
          </>
        }
        title={detail.headline}
        intro={detail.intro}
        actions={
          <>
            <Link href="/free-audit" className="btn btn-primary h-14 px-7">
              Get a free audit
            </Link>
            <Link href="/contact" className="btn btn-on-dark h-14 px-7">
              Ask for a proposal
            </Link>
          </>
        }
      />

      <section className="border-y border-line bg-paper py-20 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.5fr]">
          <div data-reveal>
            <h2 className="display-md text-[clamp(1.8rem,3vw,2.4rem)] text-ink">What usually holds {industry.name.toLowerCase()} back</h2>
            <ul className="mt-6 space-y-3">
              {detail.challenges.map((c) => (
                <li key={c} className="flex gap-3 text-[17px] text-ink">
                  <span aria-hidden className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-signal" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <h2 className="display-md text-[clamp(1.8rem,3vw,2.4rem)] text-ink">How we fix it</h2>
            <ul className="mt-6 grid gap-px overflow-hidden rounded-[var(--radius-panel)] border border-line bg-line">
              {detail.solutions.map(({ service, text }) => (
                <li key={service + text} className="flex gap-3 bg-white p-6">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-signal-press" aria-hidden />
                  <div>
                    <Link href={`/services/${service}`} className="title text-lg text-ink hover:text-signal-press">
                      {serviceBySlug[service].title}
                    </Link>
                    <p className="mt-1 text-[16px] leading-relaxed text-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
            {detail.proof && (
              <a
                href={detail.proof.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[16px] font-semibold text-ink underline decoration-signal decoration-2 underline-offset-4"
              >
                See it live: {detail.proof.label} <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            )}
          </div>
        </Container>
      </section>

      <ProcessSection tone="white" />
      <FinalCta />
    </main>
  );
}
