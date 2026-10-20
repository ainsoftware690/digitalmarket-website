import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, clientLogos, liveProjects, MIN_REVIEWS_FOR_RATING, reviews } from "@/lib/proof";
import { Container, SectionHeading } from "../ui/SectionHeading";
import { BrowserFrame, PhoneFrame } from "./DeviceFrames";

/** Logo strip. Renders nothing until real client logos are added to src/lib/proof.ts. */
export function ClientLogos() {
  if (clientLogos.length === 0) return null;
  return (
    <section aria-label="Clients" className="bg-white py-10">
      <Container>
        <p className="text-[15px] text-muted">Businesses that work with us</p>
        <div className="marquee mt-5">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center gap-16 pr-16">
                {clientLogos.map((logo) => (
                  <li key={logo.name}>
                    <Image src={logo.src} alt={copy === 0 ? logo.name : ""} width={logo.width} height={logo.height} className="h-9 w-auto opacity-70 grayscale" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Real client sites in device frames. Case studies take over this slot once they exist. */
export function WorkPreview({ showAllLink = true }: { showAllLink?: boolean }) {
  const featured = caseStudies.slice(0, 3);

  return (
    <section aria-labelledby="work-heading" className="relative overflow-hidden bg-paper py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
          <SectionHeading
            id="work-heading"
            title={featured.length ? "Recent results" : "Live sites we've built"}
            lead={
              featured.length
                ? "What we did, and what changed for the business."
                : "Real projects, live right now. Open them on your phone and check how they load."
            }
          />
          {showAllLink && (
            <Link href="/work" className="btn btn-secondary">
              All work
            </Link>
          )}
        </div>

        <ul className="mt-16 space-y-24 lg:space-y-32">
          {liveProjects.map((p, i) => (
            <li key={p.href} className={`grid items-center gap-10 lg:grid-cols-[1.45fr_1fr] lg:gap-16 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative" data-reveal="scale">
                {p.desktop && <BrowserFrame src={p.desktop} alt={`${p.name} homepage on desktop`} url={p.href.replace("https://", "")} />}
                {p.mobile && (
                  <div className={`absolute -bottom-10 w-[24%] min-w-[96px] ${i % 2 ? "-left-4 lg:-left-8" : "-right-4 lg:-right-8"}`}>
                    <PhoneFrame src={p.mobile} alt={`${p.name} homepage on mobile`} />
                  </div>
                )}
              </div>
              <div data-reveal>
                <p className="text-[15px] font-semibold text-signal-press">{p.industry}</p>
                <h3 className="display-md mt-2 text-[clamp(1.9rem,3vw,2.6rem)] text-ink">{p.name}</h3>
                <p className="mt-4 text-lg leading-relaxed text-muted">{p.description}</p>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="link mt-6 inline-flex items-center gap-1.5 text-[17px]">
                  Visit the live site <ArrowUpRight className="h-4 w-4" aria-hidden />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Reviews. Renders nothing until real reviews are added to src/lib/proof.ts. */
export function Reviews() {
  if (reviews.length === 0) return null;
  const shown = reviews.slice(0, 3);
  return (
    <section aria-labelledby="reviews-heading" className="bg-white py-20 sm:py-28">
      <Container>
        <div data-reveal>
          <SectionHeading
            id="reviews-heading"
            title="What clients say"
            lead={reviews.length >= MIN_REVIEWS_FOR_RATING ? `${reviews.length} published reviews from clients.` : undefined}
          />
        </div>
        <ul className="mt-12 grid gap-6 lg:grid-cols-3" data-reveal-stagger="120">
          {shown.map((r) => (
            <li key={r.name} data-reveal className="flex flex-col rounded-[var(--radius-panel)] border border-line bg-paper p-7">
              <blockquote className="flex-1 text-[17px] leading-relaxed text-ink">“{r.quote}”</blockquote>
              <div className="mt-6 flex items-center gap-3">
                {r.photo && <Image src={r.photo} alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />}
                <div>
                  <p className="font-semibold text-ink">{r.name}</p>
                  <p className="text-sm text-muted">
                    {r.role}, {r.company}
                  </p>
                </div>
              </div>
              {r.source && (
                <a href={r.source.href} target="_blank" rel="noopener noreferrer" className="mt-4 text-sm font-semibold text-ink underline underline-offset-4">
                  Read on {r.source.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
