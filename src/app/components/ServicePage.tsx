import Link from "next/link";
import { Check } from "lucide-react";
import type { Metadata } from "next";
import { getIndustry } from "@/lib/industries";
import { pageMetadata, breadcrumbJsonLd, jsonLdString } from "@/lib/seo";
import { serviceBySlug, priceLabel } from "@/lib/services";
import { servicePageBySlug, type ServicePageContent } from "@/lib/service-pages";
import { site } from "@/lib/site";
import { Container, SectionHeading } from "./ui/SectionHeading";
import PhotoHero from "./ui/PhotoHero";
import PhotoGallery from "./ui/PhotoGallery";
import { industryPhoto, servicePhotos } from "@/lib/photos";
import Image from "next/image";
import { ProcessSection } from "./sections/ProcessSection";
import Faq from "./home/Faq";
import FinalCta from "./home/FinalCta";
import ServiceVisual from "./graphics/ServiceVisual";

export function serviceMetadata(slug: ServicePageContent["slug"]): Metadata {
  const page = servicePageBySlug[slug];
  return pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: `/services/${slug}` });
}

export default function ServicePage({ slug }: { slug: ServicePageContent["slug"] }) {
  const page = servicePageBySlug[slug];
  const service = serviceBySlug[slug];
  const path = `/services/${slug}`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: page.metaDescription,
    url: `${site.url}${path}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: ["United States", "United Arab Emirates", "Saudi Arabia", "Qatar"],
    ...(service.priceFrom
      ? { offers: { "@type": "Offer", priceCurrency: "USD", price: service.priceFrom, description: priceLabel(service) } }
      : {}),
  };

  const media = servicePhotos(slug)!;
  const industries = page.relatedIndustries.map(getIndustry).filter((i): i is NonNullable<typeof i> => Boolean(i));

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(serviceLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.title, path },
            ])
          ),
        }}
      />

      <PhotoHero
        photo={media.hero}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: service.title }]}
        eyebrow={service.title}
        title={page.headline}
        intro={page.intro}
        actions={
          <>
            <Link href="/free-audit" className="btn btn-primary h-14 px-7">
              Get a free audit
            </Link>
            <Link href={`/contact?service=${slug}`} className="btn btn-on-dark h-14 px-7">
              Ask for a quote
            </Link>
          </>
        }
        aside={
          <aside className="rounded-[var(--radius-panel)] border border-white/15 bg-white/10 p-7 backdrop-blur-xl">
            <p className="text-sm text-white/70">Pricing</p>
            <p className="display mt-1 text-3xl text-white">{priceLabel(service)}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-white/75">
              {service.billing === "monthly"
                ? "Month to month. Quoted after your free audit, in writing, before any work starts."
                : "Fixed price in a written scope. 50% deposit, balance billed by milestone."}
            </p>
            <Link href="/pricing" className="mt-4 inline-block text-[15px] font-semibold text-white underline decoration-signal decoration-2 underline-offset-4">
              How our pricing works
            </Link>
          </aside>
        }
      />

      {/* In practice: four photos of this kind of work */}
      <section aria-labelledby="practice-heading" className="bg-white py-20 sm:py-24">
        <Container>
          <div data-reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading id="practice-heading" title="What the work looks like" lead={`From the first sketch to launch day and the months after, this is the kind of work behind every ${service.title.toLowerCase()} project.`} />
          </div>
          <div className="mt-12">
            <PhotoGallery photos={media.gallery} />
          </div>
        </Container>
      </section>

      {/* How it works for the client: animated graphic beside the three outcomes */}
      <section aria-labelledby="changes-heading" className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <ServiceVisual slug={slug} />
          <div>
            <div data-reveal>
              <SectionHeading id="changes-heading" inverse title="What changes for your business" />
            </div>
            <ol className="mt-10 space-y-8" data-reveal-stagger="140">
              {page.outcomes.map((o, i) => (
                <li key={o.title} data-reveal className="grid grid-cols-[auto_1fr] gap-5">
                  <span className="display grid h-11 w-11 place-items-center rounded-full bg-signal-press text-lg text-white">{i + 1}</span>
                  <div>
                    <h3 className="title text-xl text-white">{o.title}</h3>
                    <p className="mt-2 text-[16px] leading-relaxed text-white/75">{o.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Good fit */}
      <section aria-labelledby="fit-heading" className="border-b border-line bg-paper py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          <div data-reveal>
            <SectionHeading id="fit-heading" title="This is for you if" lead="If two or more of these sound familiar, the free audit will show you where to start." />
          </div>
          <ul className="grid gap-4 sm:grid-cols-2" data-reveal-stagger="100">
            {page.goodFit.map((item) => (
              <li key={item} data-reveal className="flex gap-3 rounded-[var(--radius-card)] border border-line bg-white p-5 text-[17px] text-ink">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-signal-wash">
                  <Check className="h-4 w-4 text-signal-press" aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Included */}
      <section aria-labelledby="included-heading" className="bg-white py-20 sm:py-28">
        <Container>
          <div data-reveal>
            <SectionHeading id="included-heading" title="What's included" lead="The exact deliverables go in your written scope. This is what a typical engagement covers." />
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3" data-reveal-stagger="120">
            {page.included.map((group) => (
              <div key={group.group} data-reveal className="border-t-2 border-ink pt-5">
                <h3 className="title text-xl text-ink">{group.group}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[16px] text-ink">
                      <span aria-hidden className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-12 text-[15px] text-muted">
            <span className="font-semibold text-ink">Tools we use: </span>
            {page.stack.join(", ")}.
          </p>
        </Container>
      </section>

      <ProcessSection />

      {industries.length > 0 && (
        <section aria-labelledby="industries-heading" className="bg-white py-20 sm:py-24">
          <Container>
            <h2 id="industries-heading" data-reveal className="display-md text-[clamp(1.8rem,3vw,2.4rem)] text-ink">
              Often used by
            </h2>
            <ul className="mt-8 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger="90">
              {industries.map((ind) => {
                const Icon = ind.icon;
                const photo = industryPhoto(ind.slug);
                return (
                  <li key={ind.slug} data-reveal>
                    <Link href={`/industries/${ind.slug}`} className="group zoom-frame relative flex h-full flex-col justify-end overflow-hidden rounded-[var(--radius-panel)] bg-ink p-6 text-white">
                      {photo && <Image src={photo.src} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />}
                      <span className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/50 to-transparent" />
                      <span className="relative">
                        <Icon className="h-6 w-6 text-signal" aria-hidden />
                        <span className="title mt-3 block text-lg">{ind.name}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>
      )}

      <Faq items={page.faqs} title={`${service.title}: common questions`} />
      <FinalCta />
    </main>
  );
}
