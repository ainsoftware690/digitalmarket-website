import { ArrowRight, ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Backdrop, ProcessSection } from "../../components/sections/ProcessSection";
import { getIndustry, INDUSTRY_SLUGS } from "@/lib/industries";
import { INDUSTRY_DETAILS } from "@/lib/industry-details";
import { serviceBySlug } from "../../../lib/services";

type Props = { params: Promise<{ slug: string }> };

const SITE = "https://www.digitalmarketmart.com";

// Pre-render all 16 pages at build time; unknown slugs return a real 404.
export const dynamicParams = false;
export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: `${industry.name} Websites & Digital Marketing | Digital Market Mart`,
    description: industry.tagline,
    alternates: { canonical: `/industries/${slug}` },
    openGraph: { title: `${industry.name} | Digital Market Mart`, description: industry.tagline },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  const detail = INDUSTRY_DETAILS[slug];
  if (!industry || !detail) notFound();

  const Icon = industry.icon;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Digital services for ${industry.name}`,
    description: detail.intro,
    audience: { "@type": "BusinessAudience", name: industry.name },
    provider: { "@type": "Organization", name: "Digital Market Mart LLC", url: SITE },
    url: `${SITE}/industries/${slug}`,
  };

  return (
    <main className="bg-[#050816]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden pb-16 pt-28 sm:pt-36">
        <Backdrop />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-300">Home</Link> /{" "}
            <Link href="/industries" className="hover:text-slate-300">Industries</Link> /{" "}
            <span className="text-slate-300">{industry.name}</span>
          </nav>
          <div className="mt-8">
            <span className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${industry.accent} text-white shadow-lg`}>
              <Icon className="h-6 w-6" />
            </span>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">{industry.name}</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">{detail.headline}</h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-400">{detail.intro}</p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 px-6 py-3 font-semibold text-white transition hover:brightness-110"
            >
              Get a scoped proposal <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges + solutions */}
      <section className="mx-auto grid max-w-5xl gap-6 px-4 pb-8 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 lg:col-span-2">
          <h2 className="text-lg font-bold text-white">What holds {industry.name.toLowerCase()} businesses back</h2>
          <ul className="mt-5 space-y-3">
            {detail.challenges.map((c) => (
              <li key={c} className="flex gap-3 text-sm text-slate-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" /> {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-7 lg:col-span-3">
          <h2 className="text-lg font-bold text-white">How we solve it</h2>
          <ul className="mt-5 space-y-4">
            {detail.solutions.map(({ service, text }) => (
              <li key={service + text} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                <div>
                  <Link href={`/services/${service}`} className="inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-cyan-300">
                    {serviceBySlug[service].title} <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <p className="text-sm text-slate-400">{text}</p>
                </div>
              </li>
            ))}
          </ul>
          {detail.proof && (
            <a
              href={detail.proof.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-slate-300 hover:border-white/25"
            >
              <ExternalLink className="h-3.5 w-3.5" /> See it live: {detail.proof.label}
            </a>
          )}
        </div>
      </section>

      <ProcessSection />
    </main>
  );
}