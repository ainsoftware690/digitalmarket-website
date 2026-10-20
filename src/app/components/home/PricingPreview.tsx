import Link from "next/link";
import { formatUsd, serviceBySlug } from "@/lib/services";
import { Container, SectionHeading } from "../ui/SectionHeading";

export default function PricingPreview() {
  const web = serviceBySlug["web-development"];
  const store = serviceBySlug["e-commerce-development"];

  const rows = [
    { name: "Business website", price: web.priceFrom ? `From ${formatUsd(web.priceFrom)}` : "Quoted", note: "One-time project, 50% deposit" },
    { name: "E-commerce store", price: store.priceFrom ? `From ${formatUsd(store.priceFrom)}` : "Quoted", note: "One-time project, 50% deposit" },
    { name: "SEO, ads and content", price: "Monthly", note: "Quoted after your free audit, month to month" },
  ];

  return (
    <section aria-labelledby="pricing-heading" className="bg-white py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div data-reveal>
          <SectionHeading
            id="pricing-heading"
            title="Starting prices, published"
            lead="You shouldn't have to book a call to find out if we're in your budget. Every project still gets a written quote before it starts."
          />
          <Link href="/pricing" className="btn btn-secondary mt-8">
            See full pricing
          </Link>
        </div>
        <table data-reveal className="w-full border-collapse overflow-hidden rounded-[var(--radius-panel)] bg-white text-left ring-1 ring-line">
          <caption className="sr-only">Starting prices</caption>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} className="border-b border-line last:border-0">
                <th scope="row" className="p-6 align-top">
                  <span className="title block text-lg text-ink">{r.name}</span>
                  <span className="mt-1 block text-[15px] font-normal text-muted">{r.note}</span>
                </th>
                <td className="p-6 text-right align-top">
                  <span className="display text-[1.7rem] whitespace-nowrap text-ink">{r.price}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </section>
  );
}
