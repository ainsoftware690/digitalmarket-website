"use client";
import React, { useEffect, useRef, useState } from "react";
import { Rocket, Brain, TrendingUp, ArrowRight, CheckCircle2, Layers, Zap } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: Rocket,
    title: "Launch Faster",
    desc: "Ship products quickly with our proven development frameworks and streamlined processes.",
    color: "#00e5ff",
  },
  {
    icon: Brain,
    title: "Operate Smarter",
    desc: "AI integrations and automation that eliminate bottlenecks and multiply your team's output.",
    color: "#a855f7",
  },
  {
    icon: TrendingUp,
    title: "Scale Efficiently",
    desc: "Systems built for growth — architected to handle more volume without more overhead.",
    color: "#10b981",
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "8+", label: "Years of Expertise" },
  { value: "3x", label: "Avg. Growth Rate" },
];

const specializations = [
  "Web & Mobile App Development",
  "AI Integrations & Automation",
  "Custom Software Solutions",
  "Performance-Driven Digital Strategy",
  "SaaS Product Engineering",
  "Cloud Infrastructure & DevOps",
];

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`about-root${visible ? " is-visible" : ""}`} id="about">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600;700&display=swap');

        /* ─── RESET & BASE ─────────────────────────────────── */
        .about-root *, .about-root *::before, .about-root *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .about-root {
          background: #07090f;
          padding: 72px 0 64px;
          overflow: hidden;
          position: relative;
          font-family: 'Outfit', sans-serif;
        }

        /* ─── BACKGROUND ───────────────────────────────────── */
        .about-grid-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(0,229,255,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }
        .about-orb1 {
          position: absolute; top: 0; left: -10%; width: 480px; height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(124,58,237,.14) 0%, transparent 70%);
          filter: blur(60px); pointer-events: none;
          animation: orb1 9s ease-in-out infinite;
        }
        .about-orb2 {
          position: absolute; bottom: 0; right: -5%; width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,229,255,.10) 0%, transparent 70%);
          filter: blur(60px); pointer-events: none;
          animation: orb2 11s ease-in-out infinite;
        }

        /* ─── CONTAINER ────────────────────────────────────── */
        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        /* ─── ANIMATIONS ───────────────────────────────────── */
        @keyframes orb1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(20px,-18px)} }
        @keyframes orb2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-18px,20px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeLeft { from{opacity:0;transform:translateX(-28px)} to{opacity:1;transform:translateX(0)} }
        @keyframes fadeRight { from{opacity:0;transform:translateX(28px)} to{opacity:1;transform:translateX(0)} }
        @keyframes lineGrow { from{width:0} to{width:56px} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }

        .au-up   { opacity: 0; }
        .au-left { opacity: 0; }
        .au-right{ opacity: 0; }

        .is-visible .au-up   { animation: fadeUp   .65s cubic-bezier(.22,.68,0,1.2) both; }
        .is-visible .au-left { animation: fadeLeft .65s cubic-bezier(.22,.68,0,1.2) both; }
        .is-visible .au-right{ animation: fadeRight .65s cubic-bezier(.22,.68,0,1.2) both; }
        .is-visible .au-line { animation: lineGrow .55s ease .45s both; }

        /* ─── EYEBROW / HEADING ────────────────────────────── */
        .about-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 5px 16px; border-radius: 99px;
          border: 1px solid rgba(0,229,255,.2);
          background: rgba(0,229,255,.05);
          margin-bottom: 20px;
        }
        .about-eyebrow span {
          color: #00e5ff; font-size: 11px; font-weight: 600;
          letter-spacing: .09em; text-transform: uppercase;
        }
        .about-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(32px, 6vw, 64px);
          font-weight: 800; line-height: 1.05;
          color: #fff; letter-spacing: -.01em;
          margin-bottom: 0;
        }
        .about-heading-accent {
          background: linear-gradient(130deg,#00e5ff,#7c3aed);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .au-line {
          width: 56px; height: 3px; border-radius: 99px;
          background: linear-gradient(90deg,#00e5ff,#7c3aed);
          margin: 20px auto 0;
        }
        .about-heading-block {
          text-align: center;
          margin-bottom: clamp(40px, 6vw, 72px);
        }

        /* ─── INTRO + STATS GRID ───────────────────────────── */
        .about-intro-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          margin-bottom: clamp(36px, 5vw, 64px);
        }
        @media (min-width: 860px) {
          .about-intro-grid {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: start;
          }
        }

        .about-copy p { line-height: 1.75; font-weight: 400; }
        .about-copy p + p { margin-top: 14px; }
        .about-copy .p1 { font-size: clamp(15px, 1.5vw, 18px); color: rgba(255,255,255,.8); }
        .about-copy .p2 { font-size: clamp(14px, 1.3vw, 16px); color: rgba(255,255,255,.6); font-weight: 300; }
        .about-copy .accent-cyan { color: #00e5ff; font-weight: 500; }
        .about-copy .accent-purple { color: #a855f7; font-weight: 500; }

        /* ─── STATS ─────────────────────────────────────────── */
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .stat-card {
          padding: clamp(16px, 2.5vw, 24px) clamp(14px, 2vw, 20px);
          border-radius: 16px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.07);
          transition: border-color .22s, background .22s, transform .22s;
        }
        .stat-card:hover {
          border-color: rgba(0,229,255,.2);
          background: rgba(0,229,255,.04);
          transform: translateY(-3px);
        }
        .stat-value {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800; line-height: 1;
          margin-bottom: 8px;
          background: linear-gradient(130deg,#00e5ff,#7c3aed);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stat-label {
          color: rgba(255,255,255,.45); font-size: clamp(10px, 1vw, 12px);
          font-weight: 500; text-transform: uppercase; letter-spacing: .07em;
        }

        /* ─── SECTION DIVIDER ───────────────────────────────── */
        .section-divider {
          display: flex; align-items: center; gap: 14px;
          margin-bottom: 24px;
        }
        .section-divider-line {
          height: 1px; flex: 1;
          background: linear-gradient(90deg,transparent,rgba(255,255,255,.1));
        }
        .section-divider-line.rev {
          background: linear-gradient(270deg,transparent,rgba(255,255,255,.1));
        }
        .section-divider span {
          color: rgba(255,255,255,.32); font-size: 11px;
          font-weight: 600; letter-spacing: .1em;
          text-transform: uppercase; white-space: nowrap;
        }

        /* ─── SPECIALIZATIONS ───────────────────────────────── */
        .spec-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          margin-bottom: clamp(36px, 5vw, 64px);
        }
        @media (min-width: 540px) { .spec-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 860px) { .spec-grid { grid-template-columns: repeat(3,1fr); } }

        .spec-item {
          display: flex; align-items: center; gap: 12px;
          padding: 13px 16px; border-radius: 12px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.07);
          transition: background .2s, border-color .2s, transform .2s;
          cursor: default;
        }
        .spec-item:hover {
          background: rgba(255,255,255,.06);
          border-color: rgba(0,229,255,.22);
          transform: translateX(4px);
        }
        .spec-item span {
          color: rgba(255,255,255,.7); font-size: 14px; font-weight: 500;
        }

        /* ─── PILLARS ───────────────────────────────────────── */
        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-bottom: clamp(36px, 5vw, 64px);
        }
        @media (min-width: 600px) { .pillars-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 860px) { .pillars-grid { grid-template-columns: repeat(3,1fr); } }

        .pillar-card {
          padding: clamp(20px, 3vw, 28px) clamp(18px, 2.5vw, 24px);
          border-radius: 20px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.08);
          transition: transform .25s, border-color .25s, background .25s;
          cursor: default;
        }
        .pillar-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,255,255,.15);
          background: rgba(255,255,255,.06);
        }
        .pillar-icon {
          width: 50px; height: 50px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
          transition: transform .25s;
          animation: float 3.5s ease-in-out infinite;
        }
        .pillar-card:hover .pillar-icon { transform: scale(1.1); }
        .pillar-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(17px, 1.6vw, 20px);
          font-weight: 700; color: #fff; margin-bottom: 10px;
        }
        .pillar-desc {
          color: rgba(255,255,255,.5); font-size: 14px;
          line-height: 1.72; font-weight: 300;
        }
        .pillar-bar {
          margin-top: 20px; height: 2px; border-radius: 99px;
        }

        /* ─── CLOSING CARD ──────────────────────────────────── */
        .closing-card {
          position: relative; overflow: hidden;
          border-radius: 24px;
          padding: clamp(26px, 4vw, 44px) clamp(22px, 4vw, 44px);
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(13,18,30,.7);
          backdrop-filter: blur(16px);
        }
        .closing-card::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(130deg, rgba(0,229,255,.05) 0%, rgba(124,58,237,.05) 50%, rgba(16,185,129,.03) 100%);
          pointer-events: none;
        }
        .closing-corner { position: absolute; }
        .closing-inner {
          display: flex;
          flex-direction: column;
          gap: 24px;
          position: relative; z-index: 1;
        }
        @media (min-width: 680px) {
          .closing-inner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
          }
          .closing-inner > div:last-child {
            width: auto !important;
            flex-shrink: 0;
          }
        }
        .closing-label {
          display: flex; align-items: center; gap: 10px; margin-bottom: 14px;
        }
        .closing-label span {
          color: #00e5ff; font-size: 12px; font-weight: 600;
          letter-spacing: .09em; text-transform: uppercase;
        }
        .closing-text {
          font-family: 'Syne', sans-serif;
          font-size: clamp(17px, 2.2vw, 26px);
          font-weight: 700; line-height: 1.4; color: #fff;
        }
        .closing-text-accent {
          background: linear-gradient(130deg,#00e5ff,#7c3aed);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; border-radius: 12px; border: none;
          background: linear-gradient(130deg,#00e5ff,#7c3aed);
          color: #fff; font-family: 'Outfit', sans-serif;
          font-weight: 700; font-size: 15px;
          cursor: pointer; white-space: nowrap;
          box-shadow: 0 8px 28px rgba(0,229,255,.22);
          transition: transform .22s, box-shadow .22s;
          text-decoration: none;
          justify-content: center;
          width: 100%;
        }
        @media (min-width: 680px) {
          .cta-btn { width: auto; }
        }
        .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 36px rgba(0,229,255,.34); }

        /* ─── MOBILE TWEAKS ─────────────────────────────────── */
        @media (max-width: 420px) {
          .about-root { padding: 56px 0 48px; }
          .about-container { padding: 0 16px; }
          .stats-grid { gap: 10px; }
        }
      `}</style>

      <div className="about-grid-bg" />
      <div className="about-orb1" />
      <div className="about-orb2" />

      <div className="about-container">

        {/* ── Heading ── */}
        <div className="about-heading-block au-up" style={{ animationDelay: ".05s" }}>
          <div className="about-eyebrow">
            <Layers size={13} color="#00e5ff" />
            <span>About Us</span>
          </div>
          <h2 className="about-heading">
            DIGITAL{" "}
            <span className="about-heading-accent">MARKET MART</span>
          </h2>
          <div className="au-line" />
        </div>

        {/* ── Intro + Stats ── */}
        <div className="about-intro-grid">
          <div className="about-copy au-left" style={{ animationDelay: ".15s" }}>
            <p className="p1">
              <strong style={{ color: "#fff" }}>Digital Market Mart</strong> is a
              technology-driven company focused on building{" "}
              <span className="accent-cyan">scalable digital products</span> and
              growth systems for modern businesses.
            </p>
            <p className="p2">
              We specialize in web and mobile application development, AI
              integrations, custom software solutions, and performance-driven
              digital strategies. From startups to growing companies, we turn
              ideas into real, scalable products that generate results.
            </p>
            <p className="p2">
              Our approach is simple — we don&apos;t just deliver services, we{" "}
              <span className="accent-purple">build systems</span> that help
              businesses grow, automate, and scale.
            </p>
          </div>

          <div className="stats-grid au-right" style={{ animationDelay: ".2s" }}>
            {stats.map((s, i) => (
              <div key={i} className="stat-card" style={{ animationDelay: `${.28 + i * .08}s` }}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Specializations ── */}
        <div className="au-up" style={{ animationDelay: ".25s", marginBottom: "clamp(36px, 5vw, 64px)" }}>
          <div className="section-divider">
            <div className="section-divider-line" />
            <span>What We Do</span>
            <div className="section-divider-line rev" />
          </div>
          <div className="spec-grid">
            {specializations.map((item, i) => (
              <div key={i} className="spec-item au-up" style={{ animationDelay: `${.3 + i * .07}s` }}>
                <CheckCircle2 size={15} color="#00e5ff" style={{ flexShrink: 0 }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Pillars ── */}
        <div className="au-up" style={{ animationDelay: ".3s", marginBottom: "clamp(36px, 5vw, 64px)" }}>
          <div className="section-divider">
            <div className="section-divider-line" />
            <span>How We Help</span>
            <div className="section-divider-line rev" />
          </div>
          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <div key={i} className="pillar-card au-up" style={{ animationDelay: `${.35 + i * .1}s` }}>
                <div
                  className="pillar-icon"
                  style={{
                    background: `${p.color}14`,
                    border: `1px solid ${p.color}28`,
                    animationDelay: `${i * .5}s`,
                  }}
                >
                  <p.icon size={22} color={p.color} />
                </div>
                <div className="pillar-title">{p.title}</div>
                <p className="pillar-desc">{p.desc}</p>
                <div className="pillar-bar" style={{ background: `linear-gradient(90deg,${p.color}70,transparent)` }} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Closing card ── */}
        <div className="closing-card au-up" style={{ animationDelay: ".45s" }}>
          {/* corner accents */}
          <div className="closing-corner" style={{ top:0, left:0, width:80, height:2, background:"linear-gradient(90deg,#00e5ff,transparent)", borderRadius:99 }} />
          <div className="closing-corner" style={{ top:0, left:0, width:2, height:80, background:"linear-gradient(180deg,#00e5ff,transparent)", borderRadius:99 }} />
          <div className="closing-corner" style={{ bottom:0, right:0, width:80, height:2, background:"linear-gradient(270deg,#7c3aed,transparent)", borderRadius:99 }} />
          <div className="closing-corner" style={{ bottom:0, right:0, width:2, height:80, background:"linear-gradient(0deg,#7c3aed,transparent)", borderRadius:99 }} />

          <div className="closing-inner">
            <div style={{ flex: "1 1 300px" }}>
              <div className="closing-label">
                <Zap size={17} color="#00e5ff" />
                <span>Our Focus</span>
              </div>
              <p className="closing-text">
                We focus on{" "}
                <span className="closing-text-accent">real impact</span> —
                building products, automating processes, and helping businesses
                grow in a competitive digital world.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <Link href="/contact" className="cta-btn cta-btn-responsive">
                Start Your Project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}