"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Reveals every [data-reveal] element as it scrolls into view by setting data-in.
 * One observer for the whole site; re-scans after each navigation and when new
 * nodes appear. Children of [data-reveal-stagger] get increasing delays.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reveal = (el: Element) => el.setAttribute("data-in", "");

    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll("[data-reveal]").forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    const scan = () => {
      document.querySelectorAll("[data-reveal-stagger]").forEach((group) => {
        const step = Number(group.getAttribute("data-reveal-stagger")) || 90;
        Array.from(group.querySelectorAll(":scope > [data-reveal]")).forEach((child, i) => {
          (child as HTMLElement).style.setProperty("--reveal-delay", String(i * step));
        });
      });
      document.querySelectorAll("[data-reveal]:not([data-in])").forEach((el) => io.observe(el));
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    // Safety net: never leave content hidden if something goes wrong.
    const failsafe = window.setTimeout(() => {
      document.querySelectorAll("[data-reveal]:not([data-in])").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) reveal(el);
      });
    }, 2500);

    root.classList.add("js");
    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}
