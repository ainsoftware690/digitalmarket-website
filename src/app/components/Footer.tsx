"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Rocket, Brain, TrendingUp, ArrowRight, CheckCircle2, Layers, Zap } from 'lucide-react';
import Link from "next/link";

const pillars = [
  {
    icon: Rocket,
    title: 'Launch Faster',
    desc: 'Ship products quickly with our proven development frameworks and streamlined processes.',
    color: '#00e5ff',
    delay: '0.1s',
  },
  {
    icon: Brain,
    title: 'Operate Smarter',
    desc: "AI integrations and automation that eliminate bottlenecks and multiply your team's output.",
    color: '#a855f7',
    delay: '0.22s',
  },
  {
    icon: TrendingUp,
    title: 'Scale Efficiently',
    desc: 'Systems built for growth — architected to handle more volume without more overhead.',
    color: '#10b981',
    delay: '0.34s',
  },
];

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '8+',   label: 'Years of Expertise' },
  { value: '3x',   label: 'Avg. Growth Rate' },
];

const specializations = [
  'Web & Mobile App Development',
  'AI Integrations & Automation',
  'Custom Software Solutions',
  'Performance-Driven Digital Strategy',
  'SaaS Product Engineering',
  'Cloud Infrastructure & DevOps',
];

const AboutUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setMounted(true);
    setWidth(window.innerWidth);
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Before mount, default to mobile-first (single column, no assumptions)
  const isMobile  = !mounted || width < 640;
  const isTablet  = mounted && width >= 640 && width < 900;
  const isDesktop = mounted && width >= 900;

  const px = isMobile ? '20px' : isTablet ? '32px' : '5%';

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#07090f',
        padding: isMobile ? '60px 0 48px' : '100px 0 80px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

        @keyframes fadeUpIn {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes gridPulse {
          0%,100% { opacity: 0.04; }
          50%     { opacity: 0.08; }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 56px; }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes orb1 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%     { transform: translate(20px,-15px) scale(1.06); }
        }
        @keyframes orb2 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%     { transform: translate(-15px,20px) scale(1.04); }
        }
        @keyframes floatIcon {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-5px); }
        }

        .about-grid-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(0,229,255,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,.05) 1px, transparent 1px);
          background-size: 52px 52px;
          animation: gridPulse 5s ease-in-out infinite;
        }

        .about-visible .au-fade-up    { animation: fadeUpIn   .7s cubic-bezier(.22,.68,0,1.2) both; }
        .about-visible .au-fade-left  { animation: fadeInLeft  .7s cubic-bezier(.22,.68,0,1.2) both; }
        .about-visible .au-fade-right { animation: fadeInRight .7s cubic-bezier(.22,.68,0,1.2) both; }
        .about-visible .au-line { animation: lineGrow .6s ease .5s both; }
        .about-visible .au-stat { animation: countUp .6s cubic-bezier(.22,.68,0,1.2) both; }

        .pillar-card { transition: all .25s ease; cursor: default; }
        .pillar-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,255,255,.15) !important;
          background: rgba(255,255,255,.06) !important;
        }
        .pillar-card:hover .pillar-icon-wrap { transform: scale(1.1); }
        .pillar-icon-wrap { transition: transform .25s ease; }

        .spec-item { transition: all .2s ease; }
        .spec-item:hover {
          background: rgba(255,255,255,.06) !important;
          border-color: rgba(0,229,255,.25) !important;
          transform: translateX(4px);
        }
        .spec-item:hover .spec-dot { transform: scale(1.4); }
        .spec-dot { transition: transform .2s ease; }

        .closing-card { position: relative; overflow: hidden; }
        .closing-card::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(130deg, rgba(0,229,255,.06) 0%, rgba(124,58,237,.06) 50%, rgba(16,185,129,.04) 100%);
          pointer-events: none;
        }

        .stat-card { transition: all .22s ease; }
        .stat-card:hover {
          border-color: rgba(0,229,255,.2) !important;
          background: rgba(0,229,255,.04) !important;
          transform: translateY(-3px);
        }

        .cta-btn {
          display: flex; align-items: center; gap: 8px;
          border-radius: 12px;
          background: linear-gradient(130deg,#00e5ff,#7c3aed);
          border: none; color: #fff;
          font-weight: 700; font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: all .22s ease;
          box-shadow: 0 8px 28px rgba(0,229,255,.2);
          justify-content: center;
          padding: 13px 24px;
        }
        .cta-btn:hover { transform: translateY(-3px); }
      `}</style>

      <div className="about-grid-bg" id="about" />

      {/* Ambient blobs */}
      <div style={{ position:'absolute', top:'5%', left:'-8%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle, rgba(124,58,237,.13) 0%, transparent 70%)', filter:'blur(55px)', animation:'orb1 8s ease-in-out infinite', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'10%', right:'-5%', width:420, height:420, borderRadius:'50%', background:'radial-gradient(circle, rgba(0,229,255,.09) 0%, transparent 70%)', filter:'blur(60px)', animation:'orb2 10s ease-in-out infinite', pointerEvents:'none' }} />

      <div
        className={`relative z-10 ${visible ? 'about-visible' : ''}`}
        style={{ maxWidth: 1200, margin: '0 auto', padding: `0 ${px}` }}
      >

        {/* ── Heading ── */}
        <div className="au-fade-up" style={{ textAlign:'center', marginBottom: isMobile ? 40 : 72, animationDelay:'.05s' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'5px 16px', borderRadius:99, border:'1px solid rgba(0,229,255,.2)', background:'rgba(0,229,255,.05)', marginBottom:20 }}>
            <Layers size={13} style={{ color:'#00e5ff' }} />
            <span style={{ color:'#00e5ff', fontSize:11, fontWeight:600, letterSpacing:'.09em', textTransform:'uppercase', fontFamily:'DM Sans,sans-serif' }}>About Us</span>
          </div>
          <h2 style={{
            fontFamily:"'Playfair Display',Georgia,serif",
            fontSize: isMobile ? '34px' : isTablet ? '48px' : '64px',
            fontWeight:900, lineHeight:1.06, color:'#fff', marginBottom:0, letterSpacing:'-.01em',
          }}>
            DIGITAL{' '}
            <span style={{ background:'linear-gradient(130deg,#00e5ff,#7c3aed)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
              MARKET MART
            </span>
          </h2>
          <div className="au-line" style={{ width:56, height:3, borderRadius:99, background:'linear-gradient(90deg,#00e5ff,#7c3aed)', margin:'20px auto 0' }} />
        </div>

        {/* ── Intro text (always first) ── */}
        <div
          className={isDesktop ? 'au-fade-left' : 'au-fade-up'}
          style={{ animationDelay:'.15s', marginBottom: isMobile ? 28 : 0 }}
        >
          {/* On desktop: rendered inside the grid below. On mobile/tablet: rendered here standalone */}
          {!isDesktop && (
            <>
              <p style={{ fontSize: isMobile ? '15px' : '17px', color:'rgba(255,255,255,.8)', lineHeight:1.7, marginBottom:18, fontFamily:'DM Sans,sans-serif', fontWeight:400 }}>
                <span style={{ color:'#fff', fontWeight:700 }}>Digital Market Mart</span>{' '}
                is a technology-driven company focused on building{' '}
                <span style={{ color:'#00e5ff', fontWeight:500 }}>scalable digital products</span>{' '}
                and growth systems for modern businesses.
              </p>
              <p style={{ fontSize: isMobile ? '14px' : '15px', color:'rgba(255,255,255,.65)', lineHeight:1.75, marginBottom:20, fontFamily:'DM Sans,sans-serif', fontWeight:300 }}>
                We specialize in web and mobile application development, AI integrations,
                custom software solutions, and performance-driven digital strategies.
                From startups to growing companies, we turn ideas into real,
                scalable products that generate results.
              </p>
              <p style={{ fontSize: isMobile ? '14px' : '15px', color:'rgba(255,255,255,.6)', lineHeight:1.75, fontFamily:'DM Sans,sans-serif', fontWeight:300 }}>
                Our approach is simple — we don&apos;t just deliver services, we{' '}
                <span style={{ color:'#a855f7', fontWeight:500 }}>build systems</span>{' '}
                that help businesses grow, automate, and scale.
              </p>
            </>
          )}
        </div>

        {/* ── Stats (below copy on mobile/tablet; side-by-side on desktop) ── */}
        {!isDesktop && (
          <div className="au-fade-up" style={{ marginBottom: isMobile ? 40 : 48, animationDelay:'.2s' }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: isMobile ? 10 : 14 }}>
              {stats.map((s, i) => (
                <div key={i} className="stat-card au-stat" style={{ padding: isMobile ? '18px 14px' : '22px 18px', borderRadius:16, background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.07)', animationDelay:`${.3 + i * .1}s` }}>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize: isMobile ? '28px' : '34px', fontWeight:900, lineHeight:1, marginBottom:8, background:'linear-gradient(130deg,#00e5ff,#7c3aed)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                    {s.value}
                  </div>
                  <div style={{ color:'rgba(255,255,255,.45)', fontSize: isMobile ? '10px' : '11px', fontWeight:500, fontFamily:'DM Sans,sans-serif', textTransform:'uppercase', letterSpacing:'.07em' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Desktop: 2-col grid with copy + stats side by side ── */}
        {isDesktop && (
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, marginBottom:64, alignItems:'start' }}>
            <div className="au-fade-left" style={{ animationDelay:'.15s' }}>
              <p style={{ fontSize:'18px', color:'rgba(255,255,255,.8)', lineHeight:1.7, marginBottom:18, fontFamily:'DM Sans,sans-serif', fontWeight:400 }}>
                <span style={{ color:'#fff', fontWeight:700 }}>Digital Market Mart</span>{' '}
                is a technology-driven company focused on building{' '}
                <span style={{ color:'#00e5ff', fontWeight:500 }}>scalable digital products</span>{' '}
                and growth systems for modern businesses.
              </p>
              <p style={{ fontSize:'16px', color:'rgba(255,255,255,.65)', lineHeight:1.75, marginBottom:20, fontFamily:'DM Sans,sans-serif', fontWeight:300 }}>
                We specialize in web and mobile application development, AI integrations,
                custom software solutions, and performance-driven digital strategies.
                From startups to growing companies, we turn ideas into real,
                scalable products that generate results.
              </p>
              <p style={{ fontSize:'16px', color:'rgba(255,255,255,.6)', lineHeight:1.75, fontFamily:'DM Sans,sans-serif', fontWeight:300 }}>
                Our approach is simple — we don&apos;t just deliver services, we{' '}
                <span style={{ color:'#a855f7', fontWeight:500 }}>build systems</span>{' '}
                that help businesses grow, automate, and scale.
              </p>
            </div>
            <div className="au-fade-right" style={{ animationDelay:'.2s' }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
                {stats.map((s, i) => (
                  <div key={i} className="stat-card au-stat" style={{ padding:'24px 20px', borderRadius:16, background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.07)', animationDelay:`${.3 + i * .1}s` }}>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'40px', fontWeight:900, lineHeight:1, marginBottom:8, background:'linear-gradient(130deg,#00e5ff,#7c3aed)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                      {s.value}
                    </div>
                    <div style={{ color:'rgba(255,255,255,.45)', fontSize:'12px', fontWeight:500, fontFamily:'DM Sans,sans-serif', textTransform:'uppercase', letterSpacing:'.07em' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Specializations ── */}
        <div className="au-fade-up" style={{ marginBottom: isMobile ? 40 : 64, animationDelay:'.25s' }}>
          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:24 }}>
            <div style={{ height:1, flex:1, background:'linear-gradient(90deg,transparent,rgba(255,255,255,.1))' }} />
            <span style={{ color:'rgba(255,255,255,.35)', fontSize:11, fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', fontFamily:'DM Sans,sans-serif', whiteSpace:'nowrap' }}>What We Do</span>
            <div style={{ height:1, flex:1, background:'linear-gradient(270deg,transparent,rgba(255,255,255,.1))' }} />
          </div>
          <div style={{
            display:'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3,1fr)',
            gap:10,
          }}>
            {specializations.map((item, i) => (
              <div key={i} className="spec-item au-fade-up" style={{ display:'flex', alignItems:'center', gap:12, padding:'13px 16px', borderRadius:12, background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.07)', animationDelay:`${.3 + i * .07}s` }}>
                <CheckCircle2 size={15} className="spec-dot" style={{ color:'#00e5ff', flexShrink:0 }} />
                <span style={{ color:'rgba(255,255,255,.7)', fontSize:14, fontWeight:500, fontFamily:'DM Sans,sans-serif' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Pillars ── */}
        <div className="au-fade-up" style={{ marginBottom: isMobile ? 40 : 64, animationDelay:'.3s' }}>
          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:28 }}>
            <div style={{ height:1, flex:1, background:'linear-gradient(90deg,transparent,rgba(255,255,255,.1))' }} />
            <span style={{ color:'rgba(255,255,255,.35)', fontSize:11, fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', fontFamily:'DM Sans,sans-serif', whiteSpace:'nowrap' }}>How We Help</span>
            <div style={{ height:1, flex:1, background:'linear-gradient(270deg,transparent,rgba(255,255,255,.1))' }} />
          </div>
          <div style={{
            display:'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(3,1fr)',
            gap: isMobile ? 12 : 18,
          }}>
            {pillars.map((p, i) => (
              <div key={i} className="pillar-card au-fade-up" style={{ padding: isMobile ? '22px 18px' : '28px 24px', borderRadius:20, background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.08)', animationDelay: p.delay }}>
                <div className="pillar-icon-wrap" style={{ width:52, height:52, borderRadius:14, background:`${p.color}12`, border:`1px solid ${p.color}28`, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:18, animation:`floatIcon ${3.5 + i * .5}s ease-in-out infinite` }}>
                  <p.icon size={22} style={{ color:p.color }} />
                </div>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize: isMobile ? '18px' : '20px', fontWeight:700, color:'#fff', marginBottom:10 }}>
                  {p.title}
                </h3>
                <p style={{ color:'rgba(255,255,255,.5)', fontSize:'14px', lineHeight:1.72, fontFamily:'DM Sans,sans-serif', fontWeight:300 }}>
                  {p.desc}
                </p>
                <div style={{ marginTop:20, height:2, borderRadius:99, background:`linear-gradient(90deg,${p.color}60,transparent)` }} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Closing card ── */}
        <div className="au-fade-up closing-card" style={{ borderRadius:24, padding: isMobile ? '28px 22px' : '40px 44px', border:'1px solid rgba(255,255,255,.08)', background:'rgba(13,18,30,.7)', backdropFilter:'blur(16px)', animationDelay:'.45s' }}>
          <div style={{ position:'absolute', top:0, left:0, width:80, height:2, background:'linear-gradient(90deg,#00e5ff,transparent)', borderRadius:99 }} />
          <div style={{ position:'absolute', top:0, left:0, width:2, height:80, background:'linear-gradient(180deg,#00e5ff,transparent)', borderRadius:99 }} />
          <div style={{ position:'absolute', bottom:0, right:0, width:80, height:2, background:'linear-gradient(270deg,#7c3aed,transparent)', borderRadius:99 }} />
          <div style={{ position:'absolute', bottom:0, right:0, width:2, height:80, background:'linear-gradient(0deg,#7c3aed,transparent)', borderRadius:99 }} />

          <div style={{ display:'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', justifyContent:'space-between', gap: isMobile ? 24 : 32 }}>
            <div style={{ flex:'1 1 300px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
                <Zap size={18} style={{ color:'#00e5ff' }} />
                <span style={{ color:'#00e5ff', fontSize:12, fontWeight:600, letterSpacing:'.09em', textTransform:'uppercase', fontFamily:'DM Sans,sans-serif' }}>Our Focus</span>
              </div>
              <p style={{ fontFamily:"'Playfair Display',serif", fontSize: isMobile ? '18px' : '26px', fontWeight:700, lineHeight:1.4, color:'#fff', margin:0 }}>
                We focus on{' '}
                <span style={{ background:'linear-gradient(130deg,#00e5ff,#7c3aed)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>real impact</span>
                {' '}— building products, automating processes, and helping businesses grow in a competitive digital world.
              </p>
            </div>
            <div style={{ flexShrink:0, width: isMobile ? '100%' : 'auto' }}>
              <Link href="/contact" passHref>
                <button className="cta-btn" style={{ width: isMobile ? '100%' : 'auto' }}>
                  Start Your Project <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;