"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { photos, type Photo } from "@/lib/photos";
import { Container } from "../ui/SectionHeading";
import LeadFeed from "./LeadFeed";

/**
 * Homepage hero: a cinematic slideshow, one slide per service, under a navy wash.
 *
 * Want a video instead? Put an MP4 in /public/videos/ and set SHOWREEL below,
 * e.g. "/videos/showreel.mp4". It plays muted and looped behind the headline,
 * and the slides switch off. Keep it under ~4 MB, 1280px wide, 15–25 s.
 */
const SHOWREEL: string | null = null;
const SHOWREEL_POSTER = "/images/photos/home-hero.webp";

const SLIDE_MS = 6000;

type Slide = { photo: Photo; label: string; line: string; href: string };

const SLIDES: Slide[] = [
  { photo: photos["home-hero"], label: "One team", line: "Strategy, build and marketing under one roof", href: "/about" },
  { photo: photos["web-development-hero"], label: "Websites", line: "Fast sites built to turn visits into enquiries", href: "/services/web-development" },
  { photo: photos["seo-optimizer-hero"], label: "Local SEO", line: "Found on Google Search and Maps", href: "/services/seo-optimizer" },
  { photo: photos["digital-marketing-hero"], label: "Paid ads", line: "Google and Meta ads measured in leads", href: "/services/digital-marketing" },
  { photo: photos["ai-content-video-creation-hero"], label: "Video", line: "Short-form content that keeps you seen", href: "/services/ai-content-video-creation" },
  { photo: photos["ai-automation-systems-hero"], label: "Automation", line: "AI chat and follow-ups that never sleep", href: "/services/ai-automation-systems" },
];

const CHANNELS = [
  "Website design",
  "Local SEO",
  "Google Ads",
  "Meta ads",
  "E-commerce",
  "Short-form video",
  "AI chat assistants",
  "Automation",
  "Mobile apps",
  "Monthly reporting",
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [cycle, setCycle] = useState(0); // restarts the progress bar when a slide is picked
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Pause while the tab is hidden so slides don't race ahead.
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const playing = !SHOWREEL && !paused && !reduced;

  useEffect(() => {
    if (!playing) return;
    timer.current = window.setTimeout(() => setActive((a) => (a + 1) % SLIDES.length), SLIDE_MS);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [active, playing, cycle]);

  const go = useCallback((i: number) => {
    setActive(i);
    setCycle((c) => c + 1);
  }, []);

  const slide = SLIDES[active];

  return (
    <section
      aria-label="Introduction"
      className="grain relative -mt-[72px] overflow-hidden bg-ink-deep pt-[72px] text-white"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go((active + 1) % SLIDES.length);
        if (e.key === "ArrowLeft") go((active - 1 + SLIDES.length) % SLIDES.length);
      }}
    >
      <style>{`
        @keyframes hero-zoom { from { transform: scale(1.14) translate3d(var(--hx,0),0,0); } to { transform: scale(1.02) translate3d(0,0,0); } }
        @keyframes hero-bar { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes hero-caption { from { opacity: 0; transform: translateY(14px); filter: blur(6px); } to { opacity: 1; transform: none; filter: none; } }
        .hero-slide { opacity: 0; transition: opacity 1.4s cubic-bezier(.16,1,.3,1); }
        .hero-slide[data-on="true"] { opacity: 1; }
        .hero-slide[data-on="true"] img { animation: hero-zoom ${SLIDE_MS + 1800}ms cubic-bezier(.2,.6,.2,1) both; }
        .hero-bar { transform-origin: left; animation: hero-bar ${SLIDE_MS}ms linear both; }
        .hero-bar[data-paused="true"] { animation-play-state: paused; }
        .hero-caption { animation: hero-caption .9s cubic-bezier(.16,1,.3,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .hero-slide { transition: none; }
          .hero-slide img, .hero-bar, .hero-caption { animation: none !important; }
        }
      `}</style>

      {/* Background: showreel video, or the slideshow */}
      <div className="absolute inset-0" aria-hidden>
        {SHOWREEL ? (
          <video
            className="h-full w-full object-cover"
            src={SHOWREEL}
            poster={SHOWREEL_POSTER}
            autoPlay={!reduced}
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          SLIDES.map((s, i) => (
            <div key={s.photo.src} className="hero-slide absolute inset-0" data-on={i === active}>
              <Image
                src={s.photo.src}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                quality={70}
                className="object-cover object-[65%_center]"
                style={{ ["--hx" as string]: i % 2 ? "-2%" : "2%" }}
              />
            </div>
          ))
        )}
        {/* Navy wash: dense behind the text, lighter on the right so the photo reads */}
        <div className="absolute inset-0 bg-[linear-gradient(100deg,#021a30_0%,rgba(2,26,48,0.93)_34%,rgba(3,42,76,0.62)_66%,rgba(3,42,76,0.35)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink-deep via-ink-deep/60 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink-deep/70 to-transparent" />
      </div>

      <Container className="relative grid min-h-[min(92vh,880px)] content-center items-start gap-x-14 gap-y-10 pb-12 pt-14 sm:pt-16 lg:grid-cols-[1.3fr_1fr]">
        <div className="lg:col-span-2">
          <p
            className="fade-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-sm text-white/85 backdrop-blur"
            style={{ ["--d" as string]: 0 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Digital agency in Hagerstown, Maryland
          </p>

          <h1 className="display mt-7 text-[clamp(2.6rem,5.4vw,4.8rem)]">
            <span className="line-mask" style={{ ["--line" as string]: 0 }}>
              <span className="lg:whitespace-nowrap!">Websites that sell.</span>
            </span>
            <span className="line-mask" style={{ ["--line" as string]: 1 }}>
              <span className="lg:whitespace-nowrap!">Marketing that fills them.</span>
            </span>
          </h1>
        </div>

        <div>
          <p
            className="fade-up max-w-[36rem] text-[clamp(1.05rem,1.5vw,1.22rem)] leading-relaxed text-white/80"
            style={{ ["--d" as string]: 450 }}
          >
            We design your website, then bring in customers with SEO, Google Ads and automation. One team to call, one
            report each month.
          </p>

          <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ ["--d" as string]: 600 }}>
            <Link href="/free-audit" className="btn btn-primary h-14 px-7 text-[1.05rem]">
              Get a free audit
            </Link>
            <Link href="/work" className="btn btn-on-dark h-14 px-7 text-[1.05rem]">
              See our work
            </Link>
          </div>

          {/* Slide caption + controls */}
          {!SHOWREEL && (
            <div className="fade-up mt-10 max-w-[40rem]" style={{ ["--d" as string]: 800 }}>
              <Link
                key={active}
                href={slide.href}
                className="hero-caption group inline-flex items-center gap-3 text-white"
                aria-live="polite"
              >
                <span className="display text-[13px] tracking-normal text-signal" style={{ fontStretch: "118%" }}>
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="text-[17px] font-semibold">{slide.label}</span>
                <span className="hidden text-[16px] text-white/70 sm:inline">{slide.line}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-white/60 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </Link>

              <div className="mt-4 flex items-center gap-3">
                <div role="tablist" aria-label="Hero slides" className="grid flex-1 grid-cols-6 gap-2">
                  {SLIDES.map((s, i) => (
                    <button
                      key={s.label}
                      type="button"
                      role="tab"
                      aria-selected={i === active}
                      aria-label={`Show slide ${i + 1}: ${s.label}`}
                      onClick={() => go(i)}
                      className="group/bar relative h-6"
                    >
                      <span className="absolute inset-x-0 top-1/2 block h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-white/20 transition group-hover/bar:bg-white/35">
                        {i < active && <span className="absolute inset-0 bg-white/70" />}
                        {i === active && (
                          <span
                            key={`${active}-${cycle}`}
                            className="hero-bar absolute inset-0 bg-signal"
                            data-paused={!playing}
                            style={reduced ? { transform: "scaleX(1)" } : undefined}
                          />
                        )}
                      </span>
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setPaused((p) => !p)}
                  aria-label={paused ? "Play slideshow" : "Pause slideshow"}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 text-white/80 transition hover:border-white hover:text-white"
                >
                  {paused || reduced ? <Play className="h-3.5 w-3.5 fill-current" /> : <Pause className="h-3.5 w-3.5 fill-current" />}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="fade-up mx-auto w-full max-w-[440px] lg:mr-0" style={{ ["--d" as string]: 500 }}>
          <LeadFeed />
        </div>
      </Container>

      {/* What we run, scrolling */}
      <div className="relative border-t border-white/10 bg-ink-deep/70 py-5 backdrop-blur">
        <div className="marquee" style={{ ["--marquee-speed" as string]: "48s" }}>
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
                {CHANNELS.map((c) => (
                  <li key={c} className="flex items-center gap-8 px-8 text-[15px] font-medium text-white/70">
                    <span className="whitespace-nowrap">{c}</span>
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-signal" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}