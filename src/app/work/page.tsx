import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { caseStudies } from "@/lib/proof";
import { Container, SectionHeading } from "../components/ui/SectionHeading";
import PhotoHero from "../components/ui/PhotoHero";
import { WorkPreview } from "../components/home/Proof";
import { photos } from "@/lib/photos";
import FinalCta from "../components/home/FinalCta";

export const metadata: Metadata = pageMetadata({
  title: "Our Work",
  description:
    "Live websites and platforms built by Digital Market Mart, from travel booking to car rental and IT services. Open them and see the standard we build to.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main>
      <PhotoHero
        photo={photos["web-development-2"]}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Work" }]}
        title="Work you can click on"
        intro="Every project here is live. Open it on your phone, check how fast it loads, try the booking flow. Ask us for examples closer to your industry and we'll send them."
      />

      {caseStudies.length > 0 && (
        <section aria-labelledby="case-studies-heading" className="border-t border-line bg-paper py-20 sm:py-24">
          <Container>
            <SectionHeading id="case-studies-heading" title="Case studies" />
            <div className="mt-12 space-y-10">
              {caseStudies.map((cs) => (
                <article key={cs.slug} id={cs.slug} className="grid gap-8 rounded-[var(--radius-panel)] bg-white p-7 ring-1 ring-line lg:grid-cols-[1.2fr_1fr] lg:p-10">
                  <div>
                    <p className="text-[15px] text-muted">{cs.industry}</p>
                    <h3 className="display-md mt-1 text-3xl text-ink">{cs.client}</h3>
                    <p className="mt-4 text-[17px] leading-relaxed text-muted">{cs.challenge}</p>
                    <ul className="mt-5 space-y-2">
                      {cs.work.map((w) => (
                        <li key={w} className="flex gap-2.5 text-[16px] text-ink">
                          <span aria-hidden className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                          {w}
                        </li>
                      ))}
                    </ul>
                    <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
                      {cs.results.map((r) => (
                        <div key={r.label} className="flex flex-col-reverse">
                          <dt className="mt-1 text-[14px] text-muted">{r.label}</dt>
                          <dd className="display text-3xl text-signal-press">{r.value}</dd>
                        </div>
                      ))}
                    </dl>
                    {cs.review && (
                      <blockquote className="mt-8 border-l-2 border-signal pl-5 text-[17px] text-ink">
                        “{cs.review.quote}”
                        <footer className="mt-2 text-[15px] text-muted">
                          {cs.review.name}, {cs.review.role}
                        </footer>
                      </blockquote>
                    )}
                  </div>
                  {cs.image && (
                    <Image src={cs.image} alt={`${cs.client} website`} width={1280} height={800} className="w-full rounded-[var(--radius-card)] ring-1 ring-line" />
                  )}
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      <WorkPreview showAllLink={false} />

      <FinalCta title="Want a site like these for your business?" />
    </main>
  );
}
