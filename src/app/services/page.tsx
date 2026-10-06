import { ArrowUpRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Backdrop } from "../components/sections/ProcessSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { categoryBlurbs, categoryLabels, categoryOrder, priceLabel, services } from "@/lib/services";

/**
 * /services index — fixes the footer "Services" link that currently returns 404.
 * Shows, for every service: description, deliverables, billing model and starting price.
 */
export const metadata: Metadata = {
  title: "Services | Digital Market Mart",
  description:
    "Web and app development, e-commerce, AI automation, SEO, digital marketing, AI content and Business Credit Education from Digital Market Mart LLC.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#050816] py-24 sm:py-32">
      <Backdrop />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to"
          highlight="grow online."
          description="One accountable team for building, marketing and scaling your business. Every engagement starts with a written scope and price."
        />

        <div className="mt-16 space-y-14">
          {categoryOrder.map((cat) => {
            const items = services.filter((s) => s.category === cat);
            if (!items.length) return null;
            return (
              <section key={cat} aria-labelledby={`cat-${cat}`}>
                <div className="flex flex-col gap-1 border-b border-white/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
                  <h2 id={`cat-${cat}`} className="text-2xl font-bold text-white">
                    {categoryLabels[cat]}
                  </h2>
                  <p className="text-sm text-slate-400">{categoryBlurbs[cat]}</p>
                </div>
                <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {items.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.06]"
                      >
                        <h3 className="font-semibold text-white">{s.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.summary}</p>
                        <ul className="mt-4 flex-1 space-y-1.5">
                          {s.deliverables.map((d) => (
                            <li key={d} className="flex gap-2 text-xs text-slate-300">
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" /> {d}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                          <span className="text-sm font-semibold text-white">{priceLabel(s)}</span>
                          <ArrowUpRight className="h-4 w-4 text-cyan-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <p className="mt-16 text-center text-sm text-slate-500">
          Questions about billing or an existing order? Call Client Support &amp; Billing at{" "}
          <a href="tel:+12402176149" className="text-slate-300 underline-offset-4 hover:underline">
            +1 (240) 217-6149
          </a>{" "}
          · Read our <Link href="/terms" className="text-slate-300 hover:underline">Terms</Link>,{" "}
          <Link href="/refund-policy" className="text-slate-300 hover:underline">Refund Policy</Link> and{" "}
          <Link href="/privacy" className="text-slate-300 hover:underline">Privacy Policy</Link>.
        </p>
      </div>
    </main>
  );
}