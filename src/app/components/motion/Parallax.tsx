"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Moves its child vertically as the section scrolls past, by `distance` pixels in total.
 * Wrap an <Image fill> inside a relatively positioned, overflow-hidden frame.
 */
export default function Parallax({ children, distance = 80, className = "" }: { children: ReactNode; distance?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-distance / 2, distance / 2]);

  return (
    <div ref={ref} className={`absolute inset-0 ${className}`}>
      <motion.div style={reduce ? undefined : { y }} className="absolute -inset-y-[60px] inset-x-0">
        {children}
      </motion.div>
    </div>
  );
}
