import type { CSSProperties, ReactNode } from "react";
import {
  Bell,
  CalendarCheck,
  Check,
  CreditCard,
  Database,
  Heart,
  Mail,
  MapPin,
  MessageSquare,
  MousePointer2,
  Phone,
  Play,
  ShoppingBag,
  Star,
  Zap,
} from "lucide-react";
import type { ServicePageContent } from "@/lib/service-pages";

/**
 * Animated, service-specific illustrations. They show how the work behaves, never figures,
 * so they can't be read as a performance claim. Pure CSS: see the "Service graphics" block in globals.css.
 * Every element's resting style is its final frame, which is what reduced-motion users see.
 */

type Slug = ServicePageContent["slug"];

/** Animation delay in ms, read by `.sv .a` as --d. */
const d = (ms: number, extra: CSSProperties = {}): CSSProperties => ({ ["--d" as string]: ms, ...extra });

function Frame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <figure
      data-reveal="fade"
      className="sv grain relative isolate overflow-hidden rounded-[var(--radius-panel)] bg-ink-deep p-5 shadow-[0_40px_80px_-40px_rgba(2,26,48,0.8)] ring-1 ring-white/10 sm:p-8"
    >
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-signal/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#2b6cb0]/25 blur-3xl" />
      <div aria-hidden className="relative">{children}</div>
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}

function Bar({ w, className = "" }: { w: string; className?: string }) {
  return <span className={`block h-2 rounded-full bg-white/15 ${className}`} style={{ width: w }} />;
}

/* ── Web development: a page assembles itself, then an enquiry arrives ───────────── */
function WebVisual() {
  return (
    <Frame label="Illustration: a website being assembled, then an enquiry arriving from its contact form">
      <div className="a a-up overflow-hidden rounded-xl bg-white shadow-2xl" style={d(0)}>
        <div className="flex items-center gap-1.5 border-b border-line bg-paper px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <span className="ml-2 h-4 flex-1 rounded bg-white px-2 text-[10px] leading-4 text-subtle">yourbusiness.com</span>
        </div>
        <div className="a a-fade flex items-center justify-between px-4 py-2.5" style={d(350)}>
          <span className="h-3 w-16 rounded bg-ink" />
          <span className="flex gap-2">
            <span className="h-2 w-8 rounded-full bg-line" />
            <span className="h-2 w-8 rounded-full bg-line" />
            <span className="h-2 w-8 rounded-full bg-line" />
          </span>
        </div>
        <div className="a a-up relative mx-3 rounded-lg bg-ink px-4 pb-5 pt-4" style={d(600)}>
          <span className="a a-grow-x block h-3.5 w-[72%] rounded bg-white" style={d(900)} />
          <span className="a a-grow-x mt-2 block h-3.5 w-[50%] rounded bg-white" style={d(1050)} />
          <span className="a a-grow-x mt-3 block h-2 w-[62%] rounded-full bg-white/40" style={d(1200)} />
          <span className="relative mt-4 inline-flex">
            <span className="a a-pop inline-block h-7 w-28 rounded-md bg-signal" style={d(1400)} />
            <MousePointer2
              className="a a-left loop-bob absolute -bottom-4 left-20 h-5 w-5 fill-white text-ink"
              style={d(2000)}
            />
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 p-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="a a-up rounded-md border border-line p-2" style={d(1600 + i * 140)}>
              <span className="block h-1.5 w-6 rounded-full bg-signal/80" />
              <span className="mt-2 block h-1.5 w-full rounded-full bg-line" />
              <span className="mt-1 block h-1.5 w-3/4 rounded-full bg-line" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-[1fr_auto] items-center gap-3">
        <div className="a a-up flex items-center gap-3 rounded-xl bg-white px-3.5 py-3 shadow-xl" style={d(2500)}>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-go-wash text-go">
            <Mail className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block text-[13px] font-semibold text-ink">New enquiry</span>
            <span className="block truncate text-[12px] text-muted">From your contact form</span>
          </span>
        </div>
        <div className="a a-pop flex items-center gap-2 rounded-xl bg-white/10 px-3 py-3 text-[12px] font-semibold text-white ring-1 ring-white/15" style={d(2800)}>
          <Zap className="h-4 w-4 text-signal" /> Speed checked
        </div>
      </div>
    </Frame>
  );
}

/* ── E-commerce: product, add to cart, payment, order confirmed ─────────────────────── */
function StoreVisual() {
  return (
    <Frame label="Illustration: a product added to the cart, paid for and confirmed">
      <div className="grid grid-cols-[1.1fr_1fr] gap-4">
        <div className="a a-up overflow-hidden rounded-xl bg-white shadow-2xl" style={d(0)}>
          <div className="aspect-[4/3] bg-[linear-gradient(135deg,#ffe3d6,#f6541e33)] p-4">
            <div className="a a-pop mx-auto mt-2 grid h-20 w-20 place-items-center rounded-2xl bg-white shadow-lg" style={d(300)}>
              <ShoppingBag className="h-9 w-9 text-signal-press" />
            </div>
          </div>
          <div className="p-4">
            <span className="block h-2.5 w-3/4 rounded-full bg-ink" />
            <span className="mt-2 flex gap-0.5 text-[#f5a524]">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="a a-pop h-3 w-3 fill-current" style={d(600 + i * 80)} />
              ))}
            </span>
            <span className="relative mt-3 block">
              <span className="a a-pop flex h-8 items-center justify-center rounded-md bg-ink text-[11px] font-semibold text-white" style={d(900)}>
                Add to cart
              </span>
              <MousePointer2 className="a a-left absolute -bottom-3 right-6 h-5 w-5 fill-white text-ink" style={d(1300)} />
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="a a-up relative flex items-center gap-3 rounded-xl bg-white px-3.5 py-3 shadow-xl" style={d(1600)}>
            <span className="relative grid h-9 w-9 place-items-center rounded-full bg-paper text-ink">
              <ShoppingBag className="h-4 w-4" />
              <span className="a a-pop absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-signal text-[9px] font-bold text-white" style={d(1800)}>
                1
              </span>
            </span>
            <span className="text-[12px] font-semibold text-ink">Added to cart</span>
          </div>
          <div className="a a-up rounded-xl bg-white p-3.5 shadow-xl" style={d(2100)}>
            <span className="flex items-center gap-2 text-[12px] font-semibold text-ink">
              <CreditCard className="h-4 w-4 text-signal-press" /> Secure checkout
            </span>
            <span className="mt-3 block h-6 rounded-md border border-line" />
            <span className="mt-2 grid grid-cols-2 gap-2">
              <span className="h-6 rounded-md border border-line" />
              <span className="h-6 rounded-md border border-line" />
            </span>
            <span className="a a-grow-x mt-3 block h-7 rounded-md bg-signal-press" style={d(2400)} />
          </div>
          <div className="a a-pop flex items-center gap-3 rounded-xl bg-go px-3.5 py-3 text-white shadow-xl" style={d(3000)}>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20">
              <Check className="h-4 w-4" />
            </span>
            <span className="text-[12px] font-semibold">Order confirmed</span>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ── Mobile apps: a phone with screens and a push notification ──────────────────────── */
function AppVisual() {
  return (
    <Frame label="Illustration: a mobile app with a booking screen and a push notification">
      <div className="relative mx-auto flex max-w-[420px] items-end justify-center gap-4 pt-6">
        <div className="a a-up hidden w-[34%] rounded-[26px] bg-white/10 p-2 ring-1 ring-white/15 sm:block" style={d(300)}>
          <div className="rounded-[20px] bg-white/90 p-3">
            <Bar w="60%" className="!bg-ink/80" />
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="mt-3 flex items-center gap-2">
                <span className="h-6 w-6 rounded-md bg-signal/25" />
                <span className="flex-1">
                  <Bar w="80%" className="!bg-line" />
                  <Bar w="50%" className="mt-1 !bg-line" />
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="a a-up loop-bob relative w-[52%] min-w-[200px] rounded-[34px] bg-[#0d1b2a] p-2.5 shadow-2xl ring-1 ring-white/20" style={d(0)}>
          <div className="mx-auto mb-2 h-1.5 w-14 rounded-full bg-white/20" />
          <div className="overflow-hidden rounded-[26px] bg-white">
            <div className="bg-ink px-4 pb-6 pt-4">
              <span className="block h-2 w-10 rounded-full bg-white/40" />
              <span className="a a-type mt-3 block text-[15px] font-bold text-white" style={d(700)}>
                Book a table
              </span>
              <span className="mt-1 block text-[11px] text-white/60">Tonight, 2 guests</span>
            </div>
            <div className="-mt-3 grid grid-cols-3 gap-2 px-3">
              {["6:30", "7:00", "7:30"].map((t, i) => (
                <span
                  key={t}
                  className={`a a-pop grid h-9 place-items-center rounded-lg text-[11px] font-semibold shadow ${
                    i === 1 ? "bg-signal text-white" : "bg-white text-ink ring-1 ring-line"
                  }`}
                  style={d(1100 + i * 120)}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="space-y-2 p-3 pt-4">
              <Bar w="70%" className="!bg-line" />
              <Bar w="90%" className="!bg-line" />
              <span className="a a-grow-x mt-3 block h-9 rounded-xl bg-ink" style={d(1600)} />
            </div>
          </div>
        </div>

        <div className="a a-up absolute -top-1 left-1/2 w-[86%] max-w-[330px] -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0" style={d(2200)}>
          <div className="flex items-center gap-3 rounded-2xl bg-white/95 px-3.5 py-3 shadow-2xl backdrop-blur">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-signal text-white">
              <Bell className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-[12px] font-semibold text-ink">Booking confirmed</span>
              <span className="block truncate text-[11px] text-muted">See you tonight at 7:00</span>
            </span>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ── SEO: a local search where the client's listing climbs into first place ─────────── */
function SeoVisual() {
  const rows = [
    { name: "Your business", you: true, from: "200%" },
    { name: "Competitor A", you: false, from: "-100%" },
    { name: "Competitor B", you: false, from: "-100%" },
  ];
  return (
    <Frame label="Illustration: a local search where your business moves into the top listing">
      <div className="a a-up overflow-hidden rounded-xl bg-white shadow-2xl" style={d(0)}>
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-paper">
            <MapPin className="h-3.5 w-3.5 text-signal-press" />
          </span>
          <span className="a a-type text-[13px] font-medium text-ink" style={d(400)}>
            plumber near me
          </span>
          <span className="loop-blink ml-0.5 h-4 w-px bg-ink" />
        </div>

        {/* Map with pins */}
        <div className="relative h-32 overflow-hidden bg-[#e8eef4]">
          <svg viewBox="0 0 400 130" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            <path d="M0 90 C 80 70, 140 110, 220 80 S 340 40, 400 60" stroke="#fff" strokeWidth="10" fill="none" />
            <path d="M120 0 L 150 130" stroke="#fff" strokeWidth="7" />
            <path d="M290 0 L 260 130" stroke="#fff" strokeWidth="7" />
            <rect x="20" y="10" width="70" height="40" rx="6" fill="#d9e6d3" />
            <rect x="310" y="78" width="70" height="40" rx="6" fill="#d9e6d3" />
          </svg>
          {[
            { left: "22%", top: "48%", you: false, dly: 900 },
            { left: "70%", top: "30%", you: false, dly: 1000 },
            { left: "48%", top: "42%", you: true, dly: 1100 },
          ].map((p, i) => (
            <span key={i} className="absolute" style={{ left: p.left, top: p.top }}>
              {p.you && <span className="loop-ping absolute -left-2 -top-2 h-9 w-9 rounded-full bg-signal/50" />}
              <MapPin
                className={`a a-pop relative h-6 w-6 ${p.you ? "fill-signal text-white" : "fill-ink/60 text-white"}`}
                style={d(p.dly)}
              />
            </span>
          ))}
        </div>

        <ol className="divide-y divide-line">
          {rows.map((r, i) => (
            <li
              key={r.name}
              className={`a a-shift flex items-center gap-3 px-4 py-3 ${r.you ? "relative z-10 bg-signal-wash" : "bg-white"}`}
              style={d(1600, { ["--from" as string]: r.from })}
            >
              <span className={`grid h-6 w-6 place-items-center rounded-full text-[11px] font-bold ${r.you ? "bg-signal-press text-white" : "bg-paper text-muted"}`}>
                {i + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className={`block text-[13px] font-semibold ${r.you ? "text-ink" : "text-muted"}`}>{r.name}</span>
                <span className="flex gap-0.5 text-[#f5a524]">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className={`h-2.5 w-2.5 ${r.you || s < 4 ? "fill-current" : ""}`} />
                  ))}
                </span>
              </span>
              {r.you && (
                <span className="a a-pop flex items-center gap-1.5 rounded-full bg-ink px-2.5 py-1 text-[11px] font-semibold text-white" style={d(2700)}>
                  <Phone className="h-3 w-3" /> Call
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </Frame>
  );
}

/* ── Paid ads: an ad, then the funnel from impression to lead ───────────────────────── */
function AdsVisual() {
  const stages = [
    { label: "People who saw the ad", w: "100%" },
    { label: "Clicked through", w: "64%" },
    { label: "Visited the landing page", w: "46%" },
    { label: "Became a lead", w: "28%" },
  ];
  return (
    <Frame label="Illustration: an ad leading people from impression to click to lead">
      <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
        <div className="a a-up rounded-xl bg-white p-3 shadow-2xl" style={d(0)}>
          <span className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-full bg-ink" />
            <span>
              <span className="block h-2 w-20 rounded-full bg-ink/80" />
              <span className="mt-1 block text-[10px] text-subtle">Sponsored</span>
            </span>
          </span>
          <div className="mt-3 aspect-[4/3] overflow-hidden rounded-lg bg-[linear-gradient(140deg,#032a4c,#1d4266_55%,#f6541e)] p-3">
            <span className="a a-up block text-[15px] font-bold leading-tight text-white" style={d(400)}>
              Same-day repairs.
              <br />
              Book online.
            </span>
          </div>
          <span className="relative mt-3 flex items-center justify-between rounded-md bg-paper px-2.5 py-2">
            <span className="h-2 w-20 rounded-full bg-ink/30" />
            <span className="a a-pop rounded bg-signal-press px-2 py-1 text-[10px] font-semibold text-white" style={d(800)}>
              Book now
            </span>
            <MousePointer2 className="a a-left absolute -bottom-3 right-3 h-5 w-5 fill-white text-ink" style={d(1200)} />
          </span>
        </div>

        <div className="space-y-3">
          {stages.map((s, i) => (
            <div key={s.label} className="a a-up" style={d(1300 + i * 220)}>
              <span className="flex items-center justify-between text-[12px] text-white/75">
                <span>{s.label}</span>
                {i === stages.length - 1 && <CalendarCheck className="h-4 w-4 text-signal" />}
              </span>
              <span className="mt-1.5 block h-3 overflow-hidden rounded-full bg-white/10">
                <span
                  className={`a a-grow-x block h-full rounded-full ${i === stages.length - 1 ? "bg-signal" : "bg-white/70"}`}
                  style={d(1500 + i * 220, { width: s.w })}
                />
              </span>
            </div>
          ))}
          <p className="a a-fade pt-1 text-[11px] text-white/50" style={d(2600)}>
            Tracked from first view to booked call, every month.
          </p>
        </div>
      </div>
    </Frame>
  );
}

/* ── Content & video: a vertical video plays while the edit timeline runs ────────────── */
function ContentVisual() {
  return (
    <Frame label="Illustration: a short-form video being edited and played with captions">
      <div className="grid grid-cols-[auto_1fr] gap-5">
        <div className="a a-up relative w-[150px] rounded-[26px] bg-[#0d1b2a] p-2 shadow-2xl ring-1 ring-white/20 sm:w-[170px]" style={d(0)}>
          <div className="relative aspect-[9/16] overflow-hidden rounded-[20px] bg-[linear-gradient(170deg,#1d4266,#032a4c_45%,#f6541e)]">
            <span className="a a-pop absolute left-1/2 top-[38%] grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full bg-white/25 backdrop-blur" style={d(500)}>
              <Play className="h-5 w-5 fill-white text-white" />
            </span>
            <span className="absolute inset-x-3 bottom-12 space-y-1.5">
              <span className="a a-type block w-fit rounded bg-black/55 px-1.5 py-0.5 text-[11px] font-bold text-white" style={d(900)}>
                3 signs your roof
              </span>
              <span className="a a-type block w-fit rounded bg-black/55 px-1.5 py-0.5 text-[11px] font-bold text-white" style={d(1500)}>
                needs a check
              </span>
            </span>
            <span className="absolute inset-x-3 bottom-4 h-1 overflow-hidden rounded-full bg-white/25">
              <span className="a a-grow-x block h-full w-full rounded-full bg-white" style={d(700, { animationDuration: "5s", animationTimingFunction: "linear" })} />
            </span>
            {[0, 1, 2].map((i) => (
              <Heart
                key={i}
                className="loop-float absolute bottom-10 right-3 h-4 w-4 fill-signal text-signal"
                style={d(1200 + i * 900)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <span className="a a-fade text-[12px] font-semibold text-white/75" style={d(300)}>
            Edit timeline
          </span>
          <div className="relative mt-3 space-y-2 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
            {[
              { color: "bg-signal", parts: ["30%", "22%", "36%"] },
              { color: "bg-[#5fa8ff]", parts: ["44%", "40%"] },
              { color: "bg-white/50", parts: ["88%"] },
              { color: "bg-[#3ddc97]", parts: ["18%", "18%", "18%", "18%"] },
            ].map((track, t) => (
              <div key={t} className="flex gap-1">
                {track.parts.map((w, p) => (
                  <span
                    key={p}
                    className={`a a-grow-x h-5 rounded ${track.color} ${t === 2 ? "opacity-60" : "opacity-90"}`}
                    style={d(500 + t * 180 + p * 90, { width: w })}
                  />
                ))}
              </div>
            ))}
            <span className="loop-scan absolute bottom-1 top-1 w-0.5 bg-white shadow-[0_0_8px_white]" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Captions", "Hook", "Music cleared", "Vertical cut"].map((tag, i) => (
              <span key={tag} className="a a-pop rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white ring-1 ring-white/15" style={d(1600 + i * 120)}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ── Automation: an after-hours chat that books the job and updates the CRM ─────────── */
function AutomationVisual() {
  return (
    <Frame label="Illustration: an AI assistant answering a customer, booking an appointment and updating the CRM">
      <div className="grid gap-4 sm:grid-cols-[1.2fr_1fr]">
        <div className="a a-up rounded-xl bg-white p-3.5 shadow-2xl" style={d(0)}>
          <span className="flex items-center gap-2 border-b border-line pb-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-white">
              <MessageSquare className="h-3.5 w-3.5" />
            </span>
            <span className="text-[12px] font-semibold text-ink">Website chat</span>
            <span className="ml-auto text-[10px] text-subtle">11:42 pm</span>
          </span>
          <div className="space-y-2 pt-3 text-[12px]">
            <p className="a a-up ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-ink px-3 py-2 text-white" style={d(500)}>
              Do you do AC repairs on Saturday?
            </p>
            <p className="a a-up w-fit max-w-[85%] rounded-2xl rounded-bl-md bg-paper px-3 py-2 text-ink" style={d(1200)}>
              Yes, 8am to 2pm. Want me to book a visit?
            </p>
            <p className="a a-up ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-ink px-3 py-2 text-white" style={d(1900)}>
              Yes please, 10am
            </p>
            <p className="a a-up loop-dots flex w-fit gap-1 rounded-2xl rounded-bl-md bg-paper px-3 py-2.5" style={d(2400)}>
              <span className="h-1.5 w-1.5 rounded-full bg-muted" />
              <span className="h-1.5 w-1.5 rounded-full bg-muted" />
              <span className="h-1.5 w-1.5 rounded-full bg-muted" />
            </p>
          </div>
        </div>

        <ol className="relative flex flex-col justify-center gap-3">
          <span aria-hidden className="a a-grow-y absolute bottom-6 left-[18px] top-6 w-0.5 bg-white/20" style={d(2600)} />
          {[
            { icon: CalendarCheck, label: "Appointment booked", sub: "Saturday, 10:00 am" },
            { icon: Database, label: "Lead added to CRM", sub: "Assigned to your team" },
            { icon: Mail, label: "Confirmation sent", sub: "Email and SMS reminder" },
          ].map((s, i) => (
            <li key={s.label} className="a a-left relative flex items-center gap-3 rounded-xl bg-white/10 px-3 py-2.5 ring-1 ring-white/15 backdrop-blur" style={d(2800 + i * 350)}>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-go text-white">
                <s.icon className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-[12px] font-semibold text-white">{s.label}</span>
                <span className="block text-[11px] text-white/60">{s.sub}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Frame>
  );
}

const VISUALS: Record<Slug, () => React.JSX.Element> = {
  "web-development": WebVisual,
  "e-commerce-development": StoreVisual,
  "mobile-app-development": AppVisual,
  "seo-optimizer": SeoVisual,
  "digital-marketing": AdsVisual,
  "ai-content-video-creation": ContentVisual,
  "ai-automation-systems": AutomationVisual,
};

export default function ServiceVisual({ slug }: { slug: Slug }) {
  const Visual = VISUALS[slug];
  return Visual ? <Visual /> : null;
}
