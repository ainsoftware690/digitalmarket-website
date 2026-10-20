import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { pillars } from "@/lib/nav";
import { priceLabel, serviceBySlug } from "@/lib/services";
import { Container } from "../components/ui/SectionHeading";
import PhotoHero from "../components/ui/PhotoHero";
import Image from "next/image";
import { photos, servicePhotos } from "@/lib/photos";
import { ProcessSection } from "../components/sections/ProcessSection";
import FinalCta from "../components/home/FinalCta";

export const metadata: Metadata = pageMetadata({
  title: "Services: Websites, SEO, Ads & Automation",
  description:
    "Website design, e-commerce, mobile apps, SEO, Google and Meta ads, content and AI automation from one accountable team. Starting prices published.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main>
      <PhotoHero
        photo={photos["about-3"]}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Services" }]}
        title="Everything a website needs to bring in business"
        intro="Pick one service or all of them. Either way you deal with one team, one written scope and one monthly report."
      />

      <section aria-label="Services by area" className="bg-white py-20 sm:py-28">
        <Container className="space-y-16">
          {pillars.map((p) => (
            <div key={p.id} data-reveal className="grid gap-8 border-t border-line pt-10 lg:grid-cols-[1fr_2.2fr]">
              <div>
                <div className="zoom-frame relative mb-6 aspect-[4/3] overflow-hidden rounded-[var(--radius-panel)]">
                  <Image src={photos[`pillar-${p.id}`].src} alt={photos[`pillar-${p.id}`].alt} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
                </div>
                <h2 className="display text-[clamp(2.4rem,4vw,3.4rem)] text-ink">{p.name}</h2>
                <p className="mt-3 max-w-xs text-[17px] leading-relaxed text-muted">{p.promise}</p>
              </div>
              <ul className="grid gap-5 md:grid-cols-2">
                {p.services.map((s) => {
                  const svc = serviceBySlug[s.slug];
                  return (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="group flex h-full flex-col rounded-[var(--radius-panel)] border border-line bg-white p-4 transition-[border-color,box-shadow] duration-500 hover:border-line-strong hover:shadow-[0_24px_50px_-30px_rgba(3,42,76,0.4)]">
                        <span className="zoom-frame relative mb-5 block aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] bg-ink">
                          <Image src={servicePhotos(s.slug)?.hero.src ?? photos["home-hero"].src} alt="" fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
                        </span>
                        <span className="title px-2 text-xl text-ink group-hover:text-signal-press">{s.label}</span>
                        <span className="mt-2 flex-1 px-2 text-[16px] leading-relaxed text-muted">{svc.summary}</span>
                        <span className="mt-5 px-2 pb-2 text-[15px] font-semibold text-ink">{priceLabel(svc)}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </Container>
      </section>

      <ProcessSection />
      <FinalCta />
    </main>
  );
}
