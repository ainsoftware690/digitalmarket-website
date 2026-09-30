import Link from "next/link";

const items = [
  {
    title: "Business Credit Education",
    body: "Learn how business credit works and how to build a strong, compliant business profile.",
  },
  {
    title: "Entity & Compliance Setup",
    body: "Checklists to make sure your entity, EIN, address, phone and banking are set up consistently.",
  },
  {
    title: "Funding Readiness Coaching",
    body: "Prepare a lender-ready document package before you apply to the lenders of your choice.",
  },
] as const;

export function FinancialEducationSection() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Business Education</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Financial literacy for growing businesses
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
          Beyond technology, we coach business owners on building business credit and preparing for funding — the right
          way. Education only: we are not a lender or broker and never guarantee approvals.
        </p>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((i) => (
            <li key={i.title} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <h3 className="font-semibold text-slate-900 dark:text-white">{i.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{i.body}</p>
            </li>
          ))}
        </ul>

        <Link
          href="/services/business-credit-education"
          className="mt-8 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          See what’s included &amp; pricing →
        </Link>
      </div>
    </section>
  );
}
export default FinancialEducationSection;