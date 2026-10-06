import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { CountUp } from "../../components/ui/motion-primitives";
import { INDUSTRIES } from "@/lib/industries";
// import { SERVICES } from "@/lib/services";
import { Backdrop } from "./ProcessSection";
import { IndustryMarquee } from "./IndustryMarquee";
import { services } from "../../../lib/services";


/**
 * Only numbers we can defend to a client (or an underwriter) go here.
 * Add "projects delivered" once you have the real, documented count.
 */
const STATS = [
  { value: INDUSTRIES.length, suffix: "", label: "Industries served" },
 { value: services.length, suffix: "", label: "Core services" },
  { value: 3, suffix: "", label: "Markets: US · UK · GCC" },
  { value: 24, suffix: "h", label: "Response time" },
];

export function IndustriesSection() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="relative isolate overflow-hidden bg-[#050816] py-24 sm:py-32"
    >
      <Backdrop />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="industries-heading"
          eyebrow="Expertise"
          title="Industries We"
          highlight="Transform."
          description="Websites, marketing and software shaped around how your sector actually sells — not a one-size-fits-all template."
        />

        <dl className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-[#070b1d] px-4 py-6 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-extrabold text-white sm:text-4xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </dd>
              <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Full-bleed marquee */}
      <IndustryMarquee />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-transparent to-violet-600/10 p-8 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-white">Don&apos;t see your industry?</h3>
            <p className="mt-1 text-sm text-slate-400">
              Tell us about your business — we&apos;ll share relevant work and a scoped proposal within 24 hours.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap justify-center gap-3">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              All industries
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(0,229,255,0.6)] transition hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" />
              Discuss your industry
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}