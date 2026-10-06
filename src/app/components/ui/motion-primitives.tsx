"use client";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, type ComponentPropsWithoutRef, type PointerEvent } from "react";

/* ------------------------------------------------------------------ */
/* Reveal — fade/slide-up once when scrolled into view                 */
/* ------------------------------------------------------------------ */
interface RevealProps extends ComponentPropsWithoutRef<typeof motion.div> {
  delay?: number;
  y?: number;
}

export function Reveal({ delay = 0, y = 24, children, ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* CountUp — animates a number when visible (no re-renders per frame)  */
/* ------------------------------------------------------------------ */
export function CountUp({ to, suffix = "", duration = 1.6 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    if (reduce) {
      el.textContent = `${to}${suffix}`;
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => (el.textContent = `${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, reduce, to, suffix, duration]);

  // SSR renders the final value so crawlers and no-JS users see real numbers.
  return (
    <span ref={ref} className="tabular-nums">
      {to}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Spotlight — cursor-following glow via CSS vars (no React state)     */
/* ------------------------------------------------------------------ */
export function trackSpotlight(e: PointerEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--x", `${e.clientX - r.left}px`);
  el.style.setProperty("--y", `${e.clientY - r.top}px`);
}

export const spotlightClass =
  "pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(320px_circle_at_var(--x,50%)_var(--y,50%),rgba(0,229,255,0.14),transparent_45%)]";