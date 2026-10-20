import Image from "next/image";
import Link from "next/link";
import { INDUSTRIES } from "@/lib/industries";
import { industryPhoto } from "@/lib/photos";
import { Container, SectionHeading } from "../ui/SectionHeading";

const FEATURED = [
  "professional-services",
  "healthcare",
  "med-spa-salons",
  "construction",
  "real-estate",
  "restaurants",
  "hospitality",
  "startups-saas",
  "retail-ecommerce",
];

/** Photo tiles. On the homepage the first tile is larger to break the grid rhythm (1 large + 8 small fills 3 rows). */
export default function IndustriesGrid({ all = false }: { all?: boolean }) {
  const list = all ? INDUSTRIES : FEATURED.map((slug) => INDUSTRIES.find((i) => i.slug === slug)!).filter(Boolean);

  return (
    <section
      aria-labelledby={all ? undefined : "industries-heading"}
      aria-label={all ? "All industries" : undefined}
      className={`bg-paper ${all ? "pb-20 pt-12 sm:pb-28" : "py-20 sm:py-28"}`}
    >
      <Container>
        {!all && (
          <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
            <SectionHeading
              id="industries-heading"
              title="Built around how your industry sells"
              lead="A clinic needs online booking. A contractor needs quote requests and Google Maps. A law firm needs authority. We start from what works in your field."
            />
            <Link href="/industries" className="btn btn-secondary">
              All {INDUSTRIES.length} industries
            </Link>
          </div>
        )}

        <ul className={`${all ? "" : "mt-12 "}grid auto-rows-[260px] gap-4 sm:grid-cols-2 lg:grid-cols-4`} data-reveal-stagger="70">
          {list.map((industry, i) => {
            const photo = industryPhoto(industry.slug);
            const Icon = industry.icon;
            const big = !all && i === 0;
            return (
              <li key={industry.slug} data-reveal className={big ? "sm:col-span-2 lg:row-span-2" : ""}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group zoom-frame relative flex h-full flex-col justify-end overflow-hidden rounded-[var(--radius-panel)] bg-ink p-6 text-white"
                >
                  {photo && (
                    <Image
                      src={photo.src}
                      alt=""
                      fill
                      sizes={big ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
                      className="object-cover"
                    />
                  )}
                  <span className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/55 to-ink-deep/5 transition-opacity duration-500 group-hover:opacity-90" />
                  <span className="relative">
                    <Icon className="h-6 w-6 text-signal" aria-hidden />
                    <span className={`title mt-3 block text-white ${big ? "text-3xl" : "text-xl"}`}>{industry.name}</span>
                    <span
                      className={`mt-1.5 block text-[15px] leading-relaxed text-white/80 transition-[max-height,opacity] duration-500 ${
                        big ? "" : "max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-focus-visible:max-h-24 group-focus-visible:opacity-100"
                      }`}
                    >
                      {industry.tagline}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
