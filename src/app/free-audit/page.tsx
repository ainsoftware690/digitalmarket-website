import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import LeadForm from "../components/LeadForm";
import { Breadcrumbs, Container } from "../components/ui/SectionHeading";

export const metadata: Metadata = pageMetadata({
  title: "Free Website & Local SEO Audit",
  description:
    "Get a free 12-point review of your website and Google presence, recorded as a short video and sent within two business days. No call, no obligation.",
  path: "/free-audit",
});

const CHECKS = [
  "Page speed on mobile",
  "Mobile layout and readability",
  "Clear calls to action on key pages",
  "Contact form, call and booking paths",
  "Page titles and descriptions",
  "Indexing and sitemap in Google",
  "Google Business Profile completeness",
  "Local rankings for your main service",
  "Reviews and how you respond to them",
  "Name, address and phone consistency",
  "Analytics and conversion tracking",
  "How you compare with three local competitors",
];

export default function FreeAuditPage() {
  return (
    <main>
      <section className="bg-white pb-20 pt-10 sm:pb-28 sm:pt-14">
        <Container>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Free audit" }]} />
          <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h1 className="display text-[clamp(2.4rem,5vw,4rem)] text-ink">See what&apos;s costing you customers</h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
                We review your website and Google presence against 12 checks, then record a short video walking through
                what we found and the three changes we&apos;d make first. You get it by email within two business days.
              </p>
              <p className="mt-4 max-w-lg text-[17px] text-ink">
                It&apos;s free, there&apos;s no call to book, and it&apos;s yours to keep whether or not you hire us.
              </p>

              <h2 className="title mt-10 text-xl text-ink">The 12 checks</h2>
              <ol className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {CHECKS.map((c, i) => (
                  <li key={c} className="flex gap-3 text-[16px] text-ink">
                    <span className="w-6 shrink-0 font-display font-bold text-signal-press" style={{ fontStretch: "118%" }}>
                      {i + 1}
                    </span>
                    {c}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <LeadForm variant="audit" />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
