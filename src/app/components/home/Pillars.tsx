import Image from "next/image";
import Link from "next/link";
import { pillars } from "@/lib/nav";
import { photos } from "@/lib/photos";
import Parallax from "../motion/Parallax";
import { Container, SectionHeading } from "../ui/SectionHeading";

const PILLAR_PHOTO = {
  build: photos["pillar-build"],
  grow: photos["pillar-grow"],
  automate: photos["pillar-automate"],
} as const;

export default function Pillars() {
  return (
    <section aria-labelledby="pillars-heading" className="bg-white py-20 sm:py-28">
      <Container>
        <div data-reveal>
          <SectionHeading
            id="pillars-heading"
            title="Build it, fill it, keep it running"
            lead="Most businesses hire a web designer, then a marketing agency, then wonder why the two never talk. We do all three, so your site is built for the campaigns that will bring people to it."
          />
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3" data-reveal-stagger="140">
          {pillars.map((p, i) => {
            const photo = PILLAR_PHOTO[p.id];
            return (
              <article key={p.id} data-reveal className="group flex flex-col">
                <div className="zoom-frame relative aspect-[4/3] overflow-hidden rounded-[var(--radius-panel)] bg-ink">
                  <Parallax distance={50}>
                    <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                  </Parallax>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display absolute bottom-5 left-6 text-[clamp(2.4rem,4vw,3.4rem)] text-white">{p.name}</h3>
                </div>
                <p className="mt-6 text-lg leading-relaxed text-muted">{p.promise}</p>
                <ul className="mt-5 border-t border-line">
                  {p.services.map((s) => (
                    <li key={s.slug} className="border-b border-line">
                      <Link
                        href={`/services/${s.slug}`}
                        className="group/link flex items-center justify-between gap-4 py-4 text-[17px] font-semibold text-ink hover:text-signal-press"
                      >
                        {s.label}
                        <span aria-hidden className="text-signal transition-transform duration-300 group-hover/link:translate-x-1">
                          ›
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
