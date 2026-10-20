import { Container, SectionHeading } from "../ui/SectionHeading";
import { faqJsonLd, jsonLdString } from "@/lib/seo";

export type FaqItem = { q: string; a: string };

export const HOME_FAQS: FaqItem[] = [
  {
    q: "What's in the free audit?",
    a: "We review your website speed, mobile experience, contact paths, Google Business Profile, local rankings and tracking, then record a short video walking through the 12 checks and the three changes we'd make first. It's yours to keep whether or not you hire us.",
  },
  {
    q: "Do I have to sign a long contract?",
    a: "No. Website projects are fixed-scope with a 50% deposit and the balance billed by milestone. Marketing retainers run month to month and can be cancelled with 30 days' written notice.",
  },
  {
    q: "Who owns the website when it's done?",
    a: "You do. Once paid in full, you own the custom design, the code written for your project, the copy and the media we create. Third-party items such as fonts, plugins and stock media stay under their own licences.",
  },
  {
    q: "Do you guarantee rankings or leads?",
    a: "No honest agency can. Search engines and ad platforms change constantly. What we guarantee is the work in your written scope, a monthly report showing exactly what we did and what it produced, and straight answers when something isn't working.",
  },
  {
    q: "Can you work with my existing website?",
    a: "Usually, yes. If your current site is sound we'll improve it and run marketing on it. If it's slow, hard to update or losing enquiries, the audit will say so and we'll quote a rebuild.",
  },
  {
    q: "Where is your team based?",
    a: "Our head office is in Hagerstown, Maryland, and we work with clients across the United States and in the UAE, Saudi Arabia and Qatar. Most work happens over video calls, email and a shared project board.",
  },
];

export default function Faq({ items = HOME_FAQS, title = "Questions people ask before hiring us" }: { items?: FaqItem[]; title?: string }) {
  return (
    <section aria-labelledby="faq-heading" className="border-t border-line bg-white py-20 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(faqJsonLd(items)) }} />
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div data-reveal>
          <SectionHeading id="faq-heading" title={title} />
        </div>
        <div className="border-t border-line" data-reveal>
          {items.map((f) => (
            <details key={f.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[18px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden className="text-2xl font-normal text-signal-press transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="prose-measure pb-6 text-[16px] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
