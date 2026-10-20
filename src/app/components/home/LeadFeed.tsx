"use client";

import { useEffect, useState } from "react";
import { CalendarCheck, FileText, MessageSquare, PhoneIncoming, ShoppingBag, Star, type LucideIcon } from "lucide-react";

/**
 * An illustration of what our clients see: enquiries arriving from every channel we run.
 * It shows channel types only, never figures, so it can't be read as a performance claim.
 */
type Lead = { icon: LucideIcon; title: string; source: string };

const EVENTS: Lead[] = [
  { icon: FileText, title: "New quote request", source: "Website contact form" },
  { icon: PhoneIncoming, title: "Incoming call", source: "Google Business Profile" },
  { icon: CalendarCheck, title: "Consultation booked", source: "Google Ads landing page" },
  { icon: MessageSquare, title: "Chat lead qualified", source: "AI assistant, after hours" },
  { icon: ShoppingBag, title: "New online order", source: "E-commerce store" },
  { icon: Star, title: "New 5-star review", source: "Review request email" },
  { icon: PhoneIncoming, title: "Call from Maps listing", source: "Local SEO" },
  { icon: FileText, title: "Estimate requested", source: "Meta lead ad" },
];

const VISIBLE = 4;
const INTERVAL = 2600;
const AGES = ["Just now", "2 min ago", "9 min ago", "21 min ago"];

export default function LeadFeed() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setTick((t) => t + 1), INTERVAL);
    return () => window.clearInterval(id);
  }, []);

  const items = Array.from({ length: VISIBLE }, (_, i) => {
    const index = (((tick - i) % EVENTS.length) + EVENTS.length) % EVENTS.length;
    return { lead: EVENTS[index], key: tick - i };
  });

  return (
    <div aria-hidden className="relative w-full">
      <div className="rounded-[var(--radius-panel)] border border-white/15 bg-white/10 p-4 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-5">
        <div className="flex items-center justify-between px-1 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="relative grid h-2.5 w-2.5 place-items-center">
              <span className="pulse-ring absolute h-2.5 w-2.5 rounded-full bg-[#3ddc97]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3ddc97]" />
            </span>
            <span className="text-sm font-semibold text-white">New enquiries</span>
          </div>
          <span className="text-xs text-white/60">All channels, one inbox</span>
        </div>

        <ul className="space-y-2.5">
          {items.map(({ lead, key }, i) => (
            <li
              key={key}
              className={`flex items-center gap-3 rounded-[var(--radius-card)] bg-white px-4 py-3 shadow-[0_10px_24px_-14px_rgba(3,42,76,0.45)] transition-opacity duration-700 ${
                i === 0 ? "lead-in" : ""
              } ${i === VISIBLE - 1 ? "opacity-60" : ""}`}
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-go-wash text-go">
                <lead.icon className="h-[18px] w-[18px]" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[15px] font-semibold text-ink">{lead.title}</span>
                <span className="block truncate text-[13px] text-muted">{lead.source}</span>
              </span>
              <span className="shrink-0 text-xs text-subtle">{AGES[i]}</span>
            </li>
          ))}
        </ul>

        {/* Trend line: drawn once on load, no axis values. */}
        <div className="mt-4 rounded-[var(--radius-card)] bg-ink/60 px-4 pb-3 pt-3">
          <div className="flex items-center justify-between text-xs text-white/70">
            <span>Enquiries by week</span>
            <span className="text-white/50">Illustration</span>
          </div>
          <svg viewBox="0 0 300 70" className="mt-2 h-14 w-full" fill="none">
            <defs>
              <linearGradient id="trend-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#f6541e" stopOpacity="0.35" />
                <stop offset="1" stopColor="#f6541e" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 62 L27 58 L54 60 L82 50 L109 52 L136 41 L164 44 L191 33 L218 30 L245 21 L273 17 L300 8 L300 70 L0 70 Z" fill="url(#trend-fill)" className="fade-up" style={{ ["--d" as string]: 1200 }} />
            <path
              d="M0 62 L27 58 L54 60 L82 50 L109 52 L136 41 L164 44 L191 33 L218 30 L245 21 L273 17 L300 8"
              stroke="#f6541e"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              className="draw-path"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
