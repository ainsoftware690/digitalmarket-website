import type { ReactNode } from "react";
import Link from "next/link";
import { formatDate, legalLinks, site } from "@/lib/site";

export type LegalSection = { id: string; heading: string; body: ReactNode };

type Props = {
  title: string;
  intro: ReactNode;
  sections: LegalSection[];
  /** Current route, used to highlight the related-policies nav */
  path: string;
};

/**
 * Shared server-rendered layout for all policy pages.
 * Zero client JS, print-friendly, sticky table of contents on desktop.
 */
export function LegalPage({ title, intro, sections, path }: Props) {
  return (
    <main className="bg-white text-ink">
      <header className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span className="mx-2" aria-hidden>/</span>
            <span className="text-slate-700">{title}</span>
          </nav>
          <h1 className="display-md mt-4 text-[clamp(2rem,4vw,3rem)] text-ink">{title}</h1>
          <p className="mt-3 text-sm text-slate-500">
            Effective {formatDate(site.policy.effectiveDate)} · {site.legalName}
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[240px_1fr] lg:px-8">
        <aside className="print:hidden lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-semibold text-slate-500">On this page</p>
          <ol className="mt-3 space-y-2 text-sm">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-slate-600 hover:text-signal-press">
                  {i + 1}. {s.heading}
                </a>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-xs font-semibold text-slate-500">Related policies</p>
          <ul className="mt-3 space-y-2 text-sm">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={l.href === path ? "page" : undefined}
                  className="text-slate-600 hover:text-signal-press aria-[current=page]:font-semibold aria-[current=page]:text-signal-press"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <article className="max-w-3xl leading-7">
          <div className="text-base text-slate-700 [&_a]:text-signal-press [&_a]:underline [&_p+p]:mt-4">{intro}</div>

          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24 border-t border-line pt-8 mt-8">
              <h2 className="text-xl font-semibold text-ink">
                {i + 1}. {s.heading}
              </h2>
              <div className="mt-3 space-y-4 [&_a]:text-signal-press [&_a]:underline [&_li]:ml-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2">
                {s.body}
              </div>
            </section>
          ))}

          <p className="mt-12 rounded-lg bg-paper p-4 text-sm text-slate-600">
            Questions about this policy? Email{" "}
            <a className="text-signal-press underline" href={`mailto:${site.email.general}`}>{site.email.general}</a> or call{" "}
            <a className="text-signal-press underline" href={`tel:${site.phones.support.e164}`}>{site.phones.support.display}</a>.
          </p>
        </article>
      </div>
    </main>
  );
}