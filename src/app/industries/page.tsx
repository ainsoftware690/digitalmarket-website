import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Backdrop } from "../components/sections/ProcessSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { INDUSTRIES } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries We Serve | Digital Market Mart",
  description:
    "Industry-specific websites, marketing and software for real estate, healthcare, e-commerce, hospitality, travel, SaaS and more.",
  alternates: { canonical: "/industries" },
};

/** Static grid of every industry — crawlable, and the fallback for the homepage marquee. */
export default function IndustriesPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#050816] py-24 sm:py-32">
      <Backdrop />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Industries we"
          highlight="serve."
          description="How Digital Market Mart delivers websites, marketing and software in your sector."
        />
        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map(({ slug, name, tagline, icon: Icon, accent }) => (
            <li key={slug}>
              <Link
                href={`/industries/${slug}`}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.06]"
              >
                <span className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${accent} text-white`}>
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-4 font-semibold text-white">{name}</h2>
                <p className="mt-2 flex-1 text-sm text-slate-400">{tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cyan-300">
                  View industry page <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}