import { SectionHeading } from "../../components/ui/SectionHeading";
import { ProcessTimeline } from "./ProcessTimeline";

/** Server component: static shell + heading are SSR'd; only the timeline hydrates. */
export function ProcessSection() {
  return (
    <section
      aria-labelledby="process-heading"
      className="relative isolate overflow-hidden bg-[#050816] py-24 sm:py-32"
    >
      <Backdrop />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="process-heading"
          eyebrow="Our Process"
          title="From Concept to"
          highlight="Conquest."
          description="We don't just build — we partner with you on a five-step journey to digital excellence."
        />
        <ProcessTimeline />
      </div>
    </section>
  );
}

/** Grid + glow background shared by both sections. Pure CSS, zero JS. */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[320px] w-[520px] rounded-full bg-violet-600/10 blur-[120px]" />
    </div>
  );
}