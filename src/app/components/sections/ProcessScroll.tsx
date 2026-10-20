"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { PROCESS_STEPS } from "./process-steps";

/**
 * Desktop: the heading stays pinned while the five steps scroll past; a progress
 * line fills and the current step lights up. Mobile: a plain vertical list.
 */
export default function ProcessScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const [current, setCurrent] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setCurrent(Math.min(PROCESS_STEPS.length - 1, Math.max(0, Math.floor(v * PROCESS_STEPS.length))));
  });

  return (
    <div ref={ref} className="relative mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
      <div className="hidden lg:block">
        <div className="sticky top-32">
          <p className="display text-[9rem] leading-none text-ink/10" aria-hidden>
            {String(current + 1).padStart(2, "0")}
          </p>
          <p className="title -mt-6 text-3xl text-ink">{PROCESS_STEPS[current].title}</p>
          <p className="mt-3 max-w-sm text-lg leading-relaxed text-muted">{PROCESS_STEPS[current].body}</p>
        </div>
      </div>

      <ol className="relative">
        {/* Track and fill */}
        <span aria-hidden className="absolute bottom-6 left-[19px] top-6 w-[2px] bg-line" />
        <motion.span
          aria-hidden
          className="absolute left-[19px] top-6 w-[2px] origin-top bg-signal"
          style={reduce ? { bottom: 24 } : { bottom: 24, scaleY: progress }}
        />
        {PROCESS_STEPS.map((step, i) => {
          const on = reduce || i <= current;
          return (
            <li key={step.title} className="relative grid grid-cols-[40px_1fr] gap-6 pb-14 last:pb-0">
              <span
                className={`relative z-10 grid h-10 w-10 place-items-center rounded-full border-2 font-display text-sm font-bold transition-colors duration-500 ${
                  on ? "border-signal bg-signal text-white" : "border-line bg-white text-subtle"
                }`}
                style={{ fontStretch: "118%" }}
              >
                {i + 1}
              </span>
              <div className={`rounded-[var(--radius-panel)] border bg-white p-6 transition-[border-color,box-shadow] duration-500 sm:p-7 ${on ? "border-line shadow-[0_20px_50px_-30px_rgba(3,42,76,0.35)]" : "border-line/60"}`}>
                <h3 className="title text-2xl text-ink">{step.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-muted">{step.body}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {step.items.map((item) => (
                    <li key={item} className="rounded-full bg-paper px-3 py-1 text-[14px] font-medium text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
