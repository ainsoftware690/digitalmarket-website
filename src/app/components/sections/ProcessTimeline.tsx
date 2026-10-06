"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { BarChart3, Handshake, Palette, Rocket, Search, type LucideIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { spotlightClass, trackSpotlight } from "../../components/ui/motion-primitives";

interface Step {
  title: string;
  description: string;
  deliverables: string[];
  icon: LucideIcon;
}

const STEPS: readonly Step[] = [
  { title: "Discovery", icon: Search,
    description: "We audit your business, competitors and current funnel to uncover the fastest wins.",
    deliverables: ["Kick-off call", "Site & SEO audit", "Competitor scan"] },
  { title: "Strategy", icon: BarChart3,
    description: "A clear roadmap — scope, timeline, KPIs and budget — agreed in writing before work starts.",
    deliverables: ["Written SOW", "KPI targets", "Milestone plan"] },
  { title: "Design", icon: Palette,
    description: "High-fidelity designs and copy that bring your brand story to life, approved by you.",
    deliverables: ["Clickable prototype", "Copy & visuals", "Revision rounds"] },
  { title: "Launch", icon: Rocket,
    description: "Built, tested and shipped — speed, SEO and tracking verified before go-live.",
    deliverables: ["QA & speed tests", "Analytics setup", "Go-live support"] },
  { title: "Partnership", icon: Handshake,
    description: "We don't disappear. Reporting, optimisation and support as you grow.",
    deliverables: ["Monthly reports", "Optimisation", "Priority support"] },
];

const INTERVAL_MS = 4000;
const LG_QUERY = "(min-width: 1024px)";

export function ProcessTimeline() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const inView = useInView(rootRef, { amount: 0.35 });
  const reduce = useReducedMotion();
  const autoplay = inView && !paused && !reduce;

  // Auto-advance (desktop only — on touch devices the user drives the slider).
  useEffect(() => {
    if (!autoplay || !window.matchMedia(LG_QUERY).matches) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % STEPS.length), INTERVAL_MS);
    return () => window.clearTimeout(id);
  }, [autoplay, active]);

  // Mobile: keep the active dot in sync with horizontal swipe (rAF-throttled).
  const ticking = useRef(false);
  const onScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      ticking.current = false;
      const list = listRef.current;
      if (!list || window.matchMedia(LG_QUERY).matches) return;
      const cards = Array.from(list.children) as HTMLElement[];
      const center = list.scrollLeft + list.clientWidth / 2;
      let nearest = 0;
      cards.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - center);
        const best = Math.abs(cards[nearest].offsetLeft + cards[nearest].offsetWidth / 2 - center);
        if (d < best) nearest = i;
      });
      setActive(nearest);
    });
  }, []);

  const goTo = (i: number) => {
    setActive(i);
    const list = listRef.current;
    const card = list?.children[i] as HTMLElement | undefined;
    if (list && card && !window.matchMedia(LG_QUERY).matches) {
      list.scrollTo({ left: card.offsetLeft - (list.clientWidth - card.offsetWidth) / 2, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={rootRef}
      className="relative mt-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Timeline rail (desktop) — fills as steps advance */}
      <div aria-hidden className="absolute left-0 right-0 top-12 hidden h-px bg-white/10 lg:block">
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 shadow-[0_0_12px_rgba(0,229,255,0.7)]"
          initial={false}
          animate={{ scaleX: (active + 1) / STEPS.length }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        />
      </div>

      <ol
        ref={listRef}
        onScroll={onScroll}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 pt-3 [scrollbar-width:none] lg:pt-0 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {STEPS.map((step, i) => {
          const isActive = i === active;
          const isDone = i < active;
          const Icon = step.icon;
          return (
            <motion.li
              key={step.title}
              initial={reduce ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="w-[82%] shrink-0 snap-center sm:w-[46%] lg:w-auto"
            >
              <article
                role="button"
                tabIndex={0}
                onClick={() => goTo(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    goTo(i);
                  }
                }}
                onPointerMove={trackSpotlight}
                aria-current={isActive ? "step" : undefined}
                className={`group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border p-6 text-left backdrop-blur-sm transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isActive
                    ? "-translate-y-2 border-cyan-400/50 bg-white/[0.06] shadow-[0_20px_60px_-15px_rgba(0,229,255,0.35)]"
                    : "border-white/10 bg-white/[0.025] hover:-translate-y-1 hover:border-white/20"
                }`}
              >
                <span aria-hidden className={spotlightClass} />

                {/* Giant outlined step number */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute right-4 top-2 select-none text-6xl font-black leading-none text-transparent transition-all duration-500 [-webkit-text-stroke:1px_rgba(255,255,255,0.12)] ${
                    isActive ? "[-webkit-text-stroke:1px_rgba(0,229,255,0.55)]" : ""
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon node — sits on the rail on desktop */}
                <span
                  className={`relative z-10 grid h-12 w-12 place-items-center rounded-xl border transition-all duration-500 ${
                    isActive
                      ? "border-transparent bg-gradient-to-br from-cyan-400 to-violet-600 text-white shadow-[0_0_24px_rgba(0,229,255,0.55)]"
                      : isDone
                        ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                        : "border-white/10 bg-white/5 text-slate-300"
                  }`}
                >
                  {isActive && !reduce && (
                    <span aria-hidden className="absolute inset-0 animate-ping rounded-xl bg-cyan-400/30" />
                  )}
                  <Icon className="relative h-5 w-5" strokeWidth={2} />
                </span>

                <span className="sr-only">Step {i + 1}: </span>
                <h3 className="mt-6 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>

                {/* Deliverables — space reserved, so no layout shift */}
                <ul
                  className={`mt-5 flex flex-wrap gap-1.5 transition-all duration-500 ${
                    isActive ? "translate-y-0 opacity-100" : "lg:translate-y-2 lg:opacity-0"
                  }`}
                >
                  {step.deliverables.map((d) => (
                    <li key={d} className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-1 text-[11px] font-medium text-cyan-200">
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Autoplay progress */}
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 bg-white/5">
                  {isActive && (
                    <motion.span
                      key={`${active}-${autoplay}`}
                      className="block h-full bg-gradient-to-r from-cyan-400 to-violet-500"
                      initial={{ width: autoplay ? "0%" : "100%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: autoplay ? INTERVAL_MS / 1000 : 0, ease: "linear" }}
                    />
                  )}
                </span>
              </article>
            </motion.li>
          );
        })}
      </ol>

      {/* Dots (mobile/tablet) */}
      <div className="mt-4 flex justify-center gap-2 lg:hidden">
        {STEPS.map((s, i) => (
          <button
            key={s.title}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to step ${i + 1}: ${s.title}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-cyan-400" : "w-1.5 bg-white/25"}`}
          />
        ))}
      </div>
    </div>
  );
}