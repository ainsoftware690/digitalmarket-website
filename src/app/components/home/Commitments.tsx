import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "../ui/SectionHeading";

/**
 * Plain commitments taken from our Terms of Service and Refund Policy,
 * so every line here is something a client can hold us to.
 */
const COMMITMENTS = [
  {
    title: "Price in writing first",
    body: "Every engagement starts with a written scope and price. Extra work is quoted and approved before it starts.",
    href: "/terms",
  },
  {
    title: "No long contracts",
    body: `Marketing retainers run month to month. Cancel with ${site.policy.retainerNoticeDays} days' notice.`,
    href: "/refund-policy",
  },
  {
    title: "You own what we make",
    body: "Once paid, your website design, code written for you, copy and videos belong to you.",
    href: "/intellectual-property",
  },
  {
    title: "One report a month",
    body: "Leads, calls, rankings and spend in one plain report, with what we're doing next.",
    href: "/pricing",
  },
];

export default function Commitments() {
  return (
    <section aria-label="Our commitments" className="border-y border-line bg-paper">
      <Container>
        <ul className="grid divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x" data-reveal-stagger="110">
          {COMMITMENTS.map((c) => (
            <li key={c.title} data-reveal className="py-8 sm:px-6 sm:py-10 first:sm:pl-0 lg:first:pl-0">
              <h2 className="title text-lg text-ink">{c.title}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{c.body}</p>
              <Link href={c.href} className="mt-3 inline-block text-sm font-semibold text-ink underline decoration-line-strong underline-offset-4 hover:decoration-signal">
                Where this is written
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
