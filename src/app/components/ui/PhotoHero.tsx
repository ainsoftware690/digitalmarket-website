import Image from "next/image";
import type { ReactNode } from "react";
import type { Photo } from "@/lib/photos";
import { Breadcrumbs, Container } from "./SectionHeading";

type Props = {
  photo: Photo;
  breadcrumbs: { name: string; href?: string }[];
  eyebrow?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
};

/**
 * Full-bleed photo hero for inner pages. Sits under the transparent header
 * (negative top margin), with a navy wash so white type always passes contrast.
 */
export default function PhotoHero({ photo, breadcrumbs, eyebrow, title, intro, actions, aside }: Props) {
  return (
    <section className="grain relative -mt-[72px] overflow-hidden bg-ink pt-[72px] text-white">
      <div className="absolute inset-0">
        <Image src={photo.src} alt="" fill priority sizes="100vw" className="ken-burns object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,#021a30_0%,rgba(2,26,48,0.93)_42%,rgba(3,42,76,0.62)_100%)]" />
      </div>
      <Container className="relative pb-20 pt-12 sm:pb-28 sm:pt-16">
        <div className="fade-up">
          <Breadcrumbs items={breadcrumbs} light />
        </div>
        <div className={`mt-10 grid gap-12 ${aside ? "lg:grid-cols-[1.5fr_1fr] lg:items-end" : ""}`}>
          <div className="max-w-4xl">
            {eyebrow && (
              <p className="fade-up flex items-center gap-2 text-lg font-semibold text-signal" style={{ ["--d" as string]: 100 }}>
                {eyebrow}
              </p>
            )}
            <h1 className="display mt-3 text-[clamp(2.4rem,5.4vw,4.6rem)]">
              <span className="line-mask">
                <span>{title}</span>
              </span>
            </h1>
            {intro && (
              <p className="fade-up mt-6 max-w-2xl text-lg leading-relaxed text-white/80" style={{ ["--d" as string]: 350 }}>
                {intro}
              </p>
            )}
            {actions && (
              <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ ["--d" as string]: 500 }}>
                {actions}
              </div>
            )}
          </div>
          {aside && (
            <div className="fade-up" style={{ ["--d" as string]: 600 }}>
              {aside}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
