"use client";

import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { INDUSTRIES, type Industry } from "@/lib/industries";
import { spotlightClass, trackSpotlight } from "../../components/ui/motion-primitives";

const half = Math.ceil(INDUSTRIES.length / 2);
const ROWS = [
  { items: INDUSTRIES.slice(0, half), direction: "left" as const, speed: 38 },
  { items: INDUSTRIES.slice(half), direction: "right" as const, speed: 32 },
];

export function IndustryMarquee() {
  const reduce = useReducedMotion();

  // Reduced motion: static, swipeable list (no duplicates, no animation).
  if (reduce) {
    return (
      <ul className="mt-14 flex snap-x gap-5 overflow-x-auto px-4 pb-4">
        {INDUSTRIES.map((ind) => (
          <li key={ind.slug} className="snap-start">
            <IndustryCard industry={ind} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="mt-14 space-y-5 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      {ROWS.map((row) => (
        <MarqueeRow key={row.direction} {...row} />
      ))}
    </div>
  );
}

interface RowProps {
  items: readonly Industry[];
  direction: "left" | "right";
  /** px per second */
  speed: number;
}

/**
 * Infinite marquee driven by a single MotionValue — zero React re-renders per
 * frame, eases to a stop on hover/focus, sleeps while off-screen.
 */
function MarqueeRow({ items, direction, speed }: RowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const x = useMotionValue(0);
  const loopWidth = useRef(0);
  const velocity = useRef(speed);
  const target = useRef(speed);
  const inView = useInView(containerRef, { margin: "100px" });

  // Measure one copy of the list (track holds two identical copies).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      loopWidth.current = track.scrollWidth / 2;
      if (direction === "right" && x.get() === 0) x.set(-loopWidth.current);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, [direction, x]);

  useAnimationFrame((_, delta) => {
    const w = loopWidth.current;
    if (!inView || !w) return;
    const dt = Math.min(delta, 64); // avoid jumps after tab switch
    velocity.current += (target.current - velocity.current) * Math.min(1, dt / 180);
    const step = (velocity.current * dt) / 1000;
    let next = x.get() + (direction === "left" ? -step : step);
    if (next <= -w) next += w;
    if (next >= 0) next -= w;
    x.set(next);
  });

  const slow = () => (target.current = 0);
  const resume = () => (target.current = speed);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden py-3"
      onMouseEnter={slow}
      onMouseLeave={resume}
      onFocusCapture={slow}
      onBlurCapture={resume}
    >
      <motion.ul ref={trackRef} style={{ x }} className="flex w-max will-change-transform">
        {[0, 1].map((copy) =>
          items.map((ind) => (
            <li key={`${copy}-${ind.slug}`} className="pr-5" aria-hidden={copy === 1 || undefined}>
              <IndustryCard industry={ind} hidden={copy === 1} />
            </li>
          )),
        )}
      </motion.ul>
    </div>
  );
}

function IndustryCard({ industry, hidden = false }: { industry: Industry; hidden?: boolean }) {
  const Icon = industry.icon;
  return (
    <Link
      href={`/industries/${industry.slug}`}
      tabIndex={hidden ? -1 : undefined}
      onPointerMove={trackSpotlight}
      className="group relative flex h-full w-[290px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:shadow-[0_18px_50px_-18px_rgba(0,229,255,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:w-[320px]"
    >
      <span aria-hidden className={spotlightClass} />
      <span
        className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${industry.accent} text-white shadow-lg transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110`}
      >
        <Icon className="h-5 w-5" strokeWidth={2} />
      </span>
      <h3 className="mt-5 text-lg font-bold text-white">{industry.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{industry.tagline}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300">
        Explore industry
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}