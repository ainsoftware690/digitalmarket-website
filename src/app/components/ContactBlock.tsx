import { fullAddress, site, type Phone } from "../../lib/site";

const phones: Phone[] = [site.phones.sales, site.phones.support];

/** Labelled contact details — answers "which number is used for what?". */
export function ContactBlock({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${className}`}>
      {phones.map((p) => (
        <div key={p.e164} className="rounded-xl border border-slate-200 p-5 dark:border-slate-800">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">{p.label}</p>
          <a href={`tel:${p.e164}`} className="mt-1 block text-lg font-semibold text-slate-900 hover:underline dark:text-white">
            {p.display}
          </a>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{p.purpose}</p>
          {p.whatsapp && (
            <a
              href={`https://wa.me/${p.e164.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-emerald-600 hover:underline"
            >
              Chat on WhatsApp →
            </a>
          )}
        </div>
      ))}

      <div className="rounded-xl border border-slate-200 p-5 dark:border-slate-800">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">Email</p>
        <a href={`mailto:${site.email.general}`} className="mt-1 block font-semibold text-slate-900 hover:underline dark:text-white">
          {site.email.general}
        </a>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">We reply within 1 business day.</p>
      </div>

      <div className="rounded-xl border border-slate-200 p-5 dark:border-slate-800">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">Business address</p>
        <address className="mt-1 not-italic font-semibold text-slate-900 dark:text-white">
          {site.legalName}
          <br />
          {fullAddress}
        </address>
        <ul className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          {site.hours.map((h) => (
            <li key={h.days}>
              {h.days}: {h.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}