"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ExplorerItem } from "@/lib/explorer";

/**
 * Desktop: hover or focus a service and its photo crossfades in the sticky panel.
 * Mobile: each service is its own photo card.
 */
export default function ServicesExplorer({ items: ITEMS }: { items: ExplorerItem[] }) {
  const [active, setActive] = useState(0);

  return (
    <section aria-labelledby="explorer-heading" className="grain relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div className="relative mx-auto max-w-[1200px] px-5 lg:px-8">
        <div data-reveal className="max-w-3xl">
          <h2 id="explorer-heading" className="display-md text-[clamp(2rem,4vw,3.1rem)]">
            Seven services, one team accountable for all of them
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Pick the one you need now. Add the rest when you&apos;re ready, without onboarding another agency.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <ol className="border-t border-white/15">
            {ITEMS.map((item, i) => (
              <li key={item.slug} className="border-b border-white/15">
                <Link
                  href={`/services/${item.slug}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 py-5 lg:py-6"
                >
                  <span className={`font-display text-sm font-bold transition-colors ${active === i ? "text-signal" : "text-white/40"}`} style={{ fontStretch: "118%" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-sm text-white/50">{item.pillar}</span>
                    <span
                      className={`title block text-[clamp(1.25rem,2vw,1.6rem)] transition-[color,transform] duration-500 ${
                        active === i ? "translate-x-1 text-white" : "text-white/75"
                      }`}
                    >
                      {item.label}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className={`grid h-10 w-10 place-items-center rounded-full border transition-all duration-500 ${
                      active === i ? "border-signal bg-signal text-white" : "border-white/25 text-white/60"
                    }`}
                  >
                    ›
                  </span>
                </Link>
                {/* Mobile photo */}
                <div className="relative mb-5 aspect-[2/1] overflow-hidden rounded-[var(--radius-card)] lg:hidden">
                  <Image src={item.src} alt={item.alt} fill sizes="100vw" className="object-cover" />
                </div>
              </li>
            ))}
          </ol>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-panel)] bg-ink-deep">
                {ITEMS.map((item, i) => (
                  <Image
                    key={item.slug}
                    src={item.src}
                    alt={i === active ? item.alt : ""}
                    fill
                    sizes="40vw"
                    className={`object-cover transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      i === active ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-sm text-white/60">{ITEMS[active].pillar}</p>
                  <p key={active} className="display-md fade-up mt-2 text-[1.9rem] text-white">
                    {ITEMS[active].intro}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
