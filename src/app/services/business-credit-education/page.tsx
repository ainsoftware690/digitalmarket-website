import type { Metadata } from "next";
import Link from "next/link";
import { businessCredit, formatUsd } from "../../../lib/services";
import { site } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Business Credit Education & Funding Readiness",
  description:
    "Education and coaching programs (8 weeks to 6 months) to set up your business correctly, build a business credit profile and prepare a lender-ready application.",
  alternates: { canonical: "/services/business-credit-education" },
};

const faqs = [
  {
    q: "Do you guarantee funding or credit approval?",
    a: "No. This is an education and coaching program. Lenders make their own decisions and no one can honestly guarantee approval.",
  },
  {
    q: "Do you fix personal credit or dispute my credit report?",
    a: "No. We do not provide consumer credit repair. The program focuses only on your business entity and its business credit profile.",
  },
  {
    q: "Do you sell aged or shelf corporations?",
    a: "No. We do not sell, buy or broker companies. We help you build your own business the right way.",
  },
  {
    q: "Do you connect me with lenders or take commissions?",
    a: "No. We are not a lender or loan broker and we do not receive commissions from lenders. You choose and apply to lenders yourself.",
  },
  {
    q: "Can I pay in installments?",
    a: "Yes. Growth and Elite can be paid in fixed monthly installments. The payment plan ends automatically after the last installment — there is no ongoing subscription.",
  },
  {
    q: "How is the program delivered?",
    a: "100% online: video calls, email support and downloadable PDFs. Sessions are booked through our scheduling link.",
  },
  {
    q: "What if it isn’t right for me?",
    a: `You have a ${site.policy.educationGuaranteeDays}-day money-back guarantee if you have used no more than one coaching session.`,
  },
];

export default function BusinessCreditPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Credit Education & Funding Readiness",
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: ["US", "AE", "SA", "QA"],
    offers: businessCredit.plans.map((p) => ({
      "@type": "Offer",
      name: p.name,
      price: p.price,
      priceCurrency: "USD",
    })),
  };

  return (
    <main className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Business Education</p>
          <h1 className="mt-12 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Business Credit Education &amp; Funding Readiness
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Coaching programs from 8 weeks to 6 months that show small-business owners how to set up their company
            correctly, build a business credit profile and prepare a lender-ready application — so you can apply with
            confidence.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How it works</h2>
        <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {businessCredit.steps.map((s, i) => (
            <li key={s.title} className="rounded-xl border border-slate-200 p-5 dark:border-slate-800">
              <span className="text-sm font-semibold text-blue-600">Step {i + 1}</span>
              <h3 className="mt-1 font-semibold text-slate-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* PLANS */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">What you receive</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {businessCredit.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                plan.highlight ? "border-blue-600 shadow-lg" : "border-slate-200 dark:border-slate-800"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-blue-600 px-3 py-0.5 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{plan.name}</h3>
              <p className="mt-2">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">{formatUsd(plan.price)}</span>
                <span className="text-sm text-slate-500"> one-time · {plan.duration}</span>
              </p>
              {plan.installments && <p className="mt-1 text-sm text-slate-500">{plan.installments}</p>}
              <ul className="mt-5 space-y-2 text-sm">
                {plan.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span aria-hidden className="text-blue-600">✓</span>
                    {it}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <Link
                  href="/contact"
                  className={`inline-flex w-full justify-center rounded-lg px-4 py-2.5 text-sm font-semibold ${
                    plan.highlight
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-900"
                  }`}
                >
                  Book an intro call
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Prices in USD. {site.policy.educationGuaranteeDays}-day money-back guarantee — see our{" "}
          <Link href="/refund-policy#education" className="underline">Refund Policy</Link> and{" "}
          <Link href="/terms#no-guarantee" className="underline">Terms</Link>.
        </p>
      </section>

      {/* DISCLAIMER */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6 dark:border-amber-700 dark:bg-amber-950/40">
          <h2 className="text-lg font-semibold text-amber-900 dark:text-amber-200">Important — what this program is not</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-amber-900 dark:text-amber-100">
            {businessCredit.notIncluded.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-amber-900 dark:text-amber-100">
            Content is for educational purposes only and is not legal, tax or financial advice.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">FAQ</h2>
        <div className="mt-6 divide-y divide-slate-200 dark:divide-slate-800">
          {faqs.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-900 dark:text-white">
                {f.q}
                <span aria-hidden className="ml-4 text-slate-400 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}