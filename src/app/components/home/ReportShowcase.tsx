import type { CSSProperties } from "react";
import { Check, FileText, MessageSquare, Phone, CalendarCheck } from "lucide-react";
import { Container, SectionHeading } from "../ui/SectionHeading";

/**
 * What the monthly report looks like. An animated illustration of the layout only: it carries
 * no figures, and says so, so it can't be read as a client's results.
 */
const d = (ms: number, extra: CSSProperties = {}): CSSProperties => ({ ["--d" as string]: ms, ...extra });

const WEEKS = [
  { calls: 38, forms: 30, book: 18 },
  { calls: 46, forms: 34, book: 22 },
  { calls: 52, forms: 41, book: 26 },
  { calls: 61, forms: 47, book: 31 },
  { calls: 66, forms: 55, book: 37 },
  { calls: 74, forms: 60, book: 42 },
];

const INCLUDED = [
  { title: "Leads by channel", body: "Calls, forms, bookings and chats, split by where they came from." },
  { title: "Rankings and traffic", body: "Where you show up on Google and Maps for the searches that matter." },
  { title: "Spend and cost per lead", body: "For ads, what you spent and what each enquiry cost." },
  { title: "What we did, what's next", body: "The work completed this month and the plan for the next one." },
];

export default function ReportShowcase() {
  return (
    <section aria-labelledby="report-heading" className="overflow-hidden border-y border-line bg-paper py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.25fr]">
        <div>
          <div data-reveal>
            <SectionHeading
              id="report-heading"
              title="One report a month, in plain English"
              lead="No logins to five dashboards. Every month you get one report that shows what came in, where it came from and what we're changing."
            />
          </div>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2" data-reveal-stagger="110">
            {INCLUDED.map((item) => (
              <div key={item.title} data-reveal className="border-t-2 border-ink pt-4">
                <dt className="title text-lg text-ink">{item.title}</dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-muted">{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure data-reveal="fade" className="sv relative">
          <div aria-hidden className="absolute -inset-6 -z-10 rounded-[40px] bg-[radial-gradient(60%_60%_at_70%_30%,#fff1eb,transparent_70%),radial-gradient(50%_50%_at_20%_80%,#e3ecf5,transparent_70%)]" />
          <div aria-hidden className="a a-up overflow-hidden rounded-[var(--radius-panel)] bg-white shadow-[0_50px_100px_-40px_rgba(3,42,76,0.45)] ring-1 ring-line" style={d(0)}>
            {/* Report header */}
            <div className="flex items-center justify-between border-b border-line bg-paper px-5 py-3.5">
              <span className="flex items-center gap-2.5">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-white">
                  <FileText className="h-3.5 w-3.5" />
                </span>
                <span className="text-[13px] font-semibold text-ink">Monthly growth report</span>
              </span>
              <span className="flex gap-1.5">
                {["Leads", "Search", "Ads"].map((t, i) => (
                  <span key={t} className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${i === 0 ? "bg-ink text-white" : "text-muted"}`}>
                    {t}
                  </span>
                ))}
              </span>
            </div>

            <div className="grid gap-4 p-5 sm:grid-cols-[1.5fr_1fr]">
              {/* Leads by week, stacked by type */}
              <div className="rounded-xl border border-line p-4">
                <span className="text-[12px] font-semibold text-ink">Leads by week</span>
                <div className="mt-4 flex h-36 items-end gap-2.5">
                  {WEEKS.map((w, i) => (
                    <div key={i} className="flex h-full flex-1 flex-col justify-end gap-0.5">
                      <span className="a a-grow-y block rounded-t-sm bg-go/80" style={d(500 + i * 110, { height: `${w.book}%` })} />
                      <span className="a a-grow-y block bg-[#5fa8ff]" style={d(620 + i * 110, { height: `${w.forms * 0.6}%` })} />
                      <span className="a a-grow-y block rounded-b-sm bg-ink" style={d(740 + i * 110, { height: `${w.calls * 0.5}%` })} />
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-muted">
                  <span className="flex items-center gap-1.5"><Phone className="h-3 w-3 text-ink" /> Calls</span>
                  <span className="flex items-center gap-1.5"><MessageSquare className="h-3 w-3 text-[#3b82c4]" /> Forms and chats</span>
                  <span className="flex items-center gap-1.5"><CalendarCheck className="h-3 w-3 text-go" /> Bookings</span>
                </div>
              </div>

              {/* Search visibility trend */}
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border border-line p-4">
                  <span className="text-[12px] font-semibold text-ink">Search visibility</span>
                  <svg viewBox="0 0 200 80" className="mt-3 h-20 w-full overflow-visible">
                    <defs>
                      <linearGradient id="rs-fill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor="#f6541e" stopOpacity="0.25" />
                        <stop offset="1" stopColor="#f6541e" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path className="a a-fade" style={d(1500)} d="M0 70 C 30 66, 45 58, 70 54 S 110 44, 130 34 S 170 18, 200 10 L 200 80 L 0 80 Z" fill="url(#rs-fill)" />
                    <path
                      className="a a-draw"
                      style={d(900)}
                      pathLength={1}
                      d="M0 70 C 30 66, 45 58, 70 54 S 110 44, 130 34 S 170 18, 200 10"
                      fill="none"
                      stroke="#d2420e"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle className="a a-pop" style={d(2600)} cx="200" cy="10" r="5" fill="#d2420e" stroke="#fff" strokeWidth="2" />
                  </svg>
                </div>
                <div className="rounded-xl border border-line p-4">
                  <span className="text-[12px] font-semibold text-ink">Leads by channel</span>
                  <div className="mt-3 space-y-2.5">
                    {[
                      { l: "Google Maps", w: "86%" },
                      { l: "Google Ads", w: "64%" },
                      { l: "Website", w: "52%" },
                    ].map((c, i) => (
                      <div key={c.l}>
                        <span className="text-[11px] text-muted">{c.l}</span>
                        <span className="mt-1 block h-2 overflow-hidden rounded-full bg-paper">
                          <span className="a a-grow-x block h-full rounded-full bg-ink" style={d(1200 + i * 160, { width: c.w })} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Work log */}
            <div className="grid gap-3 border-t border-line bg-paper/60 px-5 py-4 sm:grid-cols-2">
              {["Two new service pages published", "Google profile photos and posts updated", "Ad budget moved to best-performing campaign", "Next month: new landing page test"].map((t, i) => (
                <span key={t} className="a a-left flex items-center gap-2 text-[12px] text-ink" style={d(2000 + i * 180)}>
                  <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${i === 3 ? "bg-signal-wash text-signal-press" : "bg-go text-white"}`}>
                    <Check className="h-3 w-3" />
                  </span>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <figcaption className="mt-4 text-center text-[13px] text-subtle">Example layout. Your report shows your own numbers.</figcaption>
        </figure>
      </Container>
    </section>
  );
}
