/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Phone, ChevronDown, Zap, Globe, Cpu, BarChart2 } from 'lucide-react';
import { useRouter } from "next/navigation";



// ─── ADD YOUR IMAGES HERE ───────────────────────────────────────────────────
// Replace these placeholder paths with your actual image paths.
// e.g. '/images/dashboard.jpg' or a full URL
const SLIDES = [
  { src: '/images/img01.png', alt: 'Web & App Development' },
  { src: '/images/img03.jpg', alt: 'AI Powered Solutions' },
  { src: '/images/img02.png', alt: 'SaaS Platforms' },
  { src: '/images/img04.png', alt: 'Digital Growth' },
];


// ─────────────────────────────────────────────────────────────────────────────

const TAGS = ['Web Development', 'SaaS Platforms', 'AI Integrations', 'Automation', 'Digital Growth'];

const services = [
  { icon: Globe,    label: 'Web & Mobile Apps',  color: '#00e5ff' },
  { icon: Cpu,      label: 'AI Integrations',     color: '#a855f7' },
  { icon: Zap,      label: 'Automation',          color: '#f59e0b' },
  { icon: BarChart2,label: 'Digital Growth',      color: '#10b981' },
];

const Hero = () => {
  const [mousePosition, setMousePosition]   = useState({ x: 50, y: 50 });
  const [isMounted, setIsMounted]           = useState(false);
  const [activeSlide, setActiveSlide]       = useState(0);
  const [prevSlide, setPrevSlide]           = useState<number | null>(null);
  const containerRef                        = useRef<HTMLDivElement>(null);

  const router = useRouter();

  // Auto-advance slideshow every 4.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevSlide(prev => prev);           // keep reference for exit
      setActiveSlide(cur => {
        setPrevSlide(cur);
        return (cur + 1) % SLIDES.length;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width)  * 100,
        y: ((e.clientY - rect.top)  / rect.height) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      id="hero-root"
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ minHeight: '100vh', background: '#07090f' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes scanH {
          0%   { top:-2px; opacity:0; }
          5%   { opacity:1; }
          95%  { opacity:1; }
          100% { top:100%; opacity:0; }
        }
        @keyframes gridFade {
          0%,100% { opacity:.042; }
          50%     { opacity:.088; }
        }
        @keyframes blink {
          0%,82%,100% { opacity:1; }
          90%         { opacity:.1; }
        }
        @keyframes floatA {
          0%,100% { transform:translateY(0) rotate(-1deg); }
          50%     { transform:translateY(-8px) rotate(1deg); }
        }
        @keyframes floatB {
          0%,100% { transform:translateY(0) rotate(1deg); }
          50%     { transform:translateY(-7px) rotate(-1deg); }
        }
        @keyframes floatC {
          0%,100% { transform:translateY(0); }
          50%     { transform:translateY(-6px); }
        }
        @keyframes slideEnter {
          from { opacity:0; transform:scale(1.05); }
          to   { opacity:1; transform:scale(1); }
        }
        @keyframes slideExit {
          from { opacity:1; transform:scale(1); }
          to   { opacity:0; transform:scale(.96); }
        }
        @keyframes tagScroll {
          0%   { transform:translateX(0); }
          100% { transform:translateX(-50%); }
        }
        @keyframes borderGlow {
          0%,100% { box-shadow:0 0 0 1px rgba(0,229,255,.1), 0 28px 70px rgba(0,0,0,.55); }
          50%     { box-shadow:0 0 0 1px rgba(0,229,255,.28), 0 28px 80px rgba(0,229,255,.07); }
        }

        #hero-root .fu1{animation:fadeUp .65s cubic-bezier(.22,.68,0,1.2) .08s both;}
        #hero-root .fu2{animation:fadeUp .65s cubic-bezier(.22,.68,0,1.2) .20s both;}
        #hero-root .fu3{animation:fadeUp .65s cubic-bezier(.22,.68,0,1.2) .33s both;}
        #hero-root .fu4{animation:fadeUp .65s cubic-bezier(.22,.68,0,1.2) .46s both;}
        #hero-root .fu5{animation:fadeUp .65s cubic-bezier(.22,.68,0,1.2) .60s both;}
        #hero-root .fu6{animation:fadeUp .65s cubic-bezier(.22,.68,0,1.2) .74s both;}

        #hero-root .grid-bg{
          background-image:
            linear-gradient(rgba(0,229,255,.055) 1px,transparent 1px),
            linear-gradient(90deg,rgba(0,229,255,.055) 1px,transparent 1px);
          background-size:52px 52px;
          animation:gridFade 5s ease-in-out infinite;
        }

        #hero-root .scan{
          position:absolute;left:0;right:0;height:1px;
          background:linear-gradient(90deg,transparent,rgba(0,229,255,.2) 40%,rgba(124,58,237,.18) 60%,transparent);
          animation:scanH 9s linear infinite;
        }

        #hero-root .cta-main{
          background:linear-gradient(130deg,#00e5ff,#7c3aed);
          border:none; position:relative; overflow:hidden;
          transition:transform .22s ease,box-shadow .22s ease;
        }
        #hero-root .cta-main::before{
          content:'';position:absolute;inset:0;
          background:linear-gradient(130deg,rgba(255,255,255,.18),transparent 55%);
          opacity:0;transition:opacity .22s;
        }
        #hero-root .cta-main:hover{transform:translateY(-3px);box-shadow:0 14px 44px rgba(0,229,255,.3);}
        #hero-root .cta-main:hover::before{opacity:1;}

        #hero-root .cta-ghost{
          background:rgba(255,255,255,.04);
          border:1px solid rgba(255,255,255,.14);
          transition:all .22s ease;
        }
        #hero-root .cta-ghost:hover{
          border-color:rgba(0,229,255,.45);
          background:rgba(0,229,255,.07);
          transform:translateY(-3px);
        }

        #hero-root .svc-pill{transition:all .18s ease;}
        #hero-root .svc-pill:hover{background:rgba(255,255,255,.07)!important;transform:translateY(-2px);}

        #hero-root .slide-enter{animation:slideEnter .5s ease forwards;}
        #hero-root .slide-exit {animation:slideExit  .5s ease forwards;}

        #hero-root .img-frame{animation:borderGlow 4.5s ease-in-out infinite;}

        #hero-root .dot-btn{transition:all .3s ease;padding:0;border:none;cursor:pointer;}

        #hero-root .tag-track{display:flex;animation:tagScroll 20s linear infinite;width:max-content;}
        #hero-root .tag-track:hover{animation-play-state:paused;}

        #hero-root .badge-a{animation:floatA 4s   ease-in-out       infinite;}
        #hero-root .badge-b{animation:floatB 4.8s ease-in-out 1.2s  infinite;}
        #hero-root .badge-c{animation:floatC 5.2s ease-in-out .7s   infinite;}
      `}</style>

      {/* Grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="scan" />
      </div>

      {/* Mouse glow */}
      {isMounted && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(880px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,229,255,.065) 0%, transparent 65%)`,
            transition: 'background .5s ease',
          }}
        />
      )}

      {/* Ambient blobs */}
      <div className="absolute pointer-events-none" style={{ top:'-12%', left:'-6%', width:560, height:560, borderRadius:'50%', background:'radial-gradient(circle,rgba(124,58,237,.17) 0%,transparent 70%)', filter:'blur(48px)' }} />
      <div className="absolute pointer-events-none" style={{ bottom:'-4%', right:'-8%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(0,229,255,.1) 0%,transparent 70%)', filter:'blur(56px)' }} />
      <div className="absolute pointer-events-none" style={{ top:'45%', left:'42%', width:300, height:300, borderRadius:'50%', background:'radial-gradient(circle,rgba(16,185,129,.07) 0%,transparent 70%)', filter:'blur(52px)' }} />

      {/* ── Main layout ── */}
      <div
        className="relative z-10 flex flex-col lg:flex-row items-center"
        style={{ minHeight: '100vh', padding: '72px 5% 80px', gap: 'clamp(36px, 5vw, 72px)' }}
      >
        {/* ════ LEFT: Copy ════ */}
        <div style={{ flex:'1 1 0', maxWidth:600 }}>

          {/* Badge */}
          <div
            className="fu1 inline-flex items-center gap-2 mb-7 mt-15"
            style={{ padding:'5px 14px 5px 10px', borderRadius:99, border:'1px solid rgba(0,229,255,.22)', background:'rgba(0,229,255,.05)', backdropFilter:'blur(12px)' }}
          >
            <span style={{ width:7, height:7, borderRadius:'50%', background:'#00e5ff', display:'inline-block', flexShrink:0, animation:'blink 2.4s ease-in-out infinite' }} />
            <span style={{ color:'#00e5ff', fontSize:11, fontWeight:600, letterSpacing:'.09em', textTransform:'uppercase', fontFamily:'DM Sans,sans-serif' }}>
              IT Design &amp; Consulting · Global
            </span>
          </div>

          {/* Headline */}
          <h1
            className="fu2"
            style={{ fontFamily:"'Playfair Display',Georgia,serif", fontSize:'clamp(34px,4.2vw,62px)', fontWeight:900, lineHeight:1.07, color:'#fff', marginBottom:22, letterSpacing:'-.01em' }}
          >
            Build, Launch &amp;{' '}
            <span style={{ background:'linear-gradient(130deg,#00e5ff,#7c3aed)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Scale</span>{' '}
            Your Digital Products{' '}
            <span style={{ background:'linear-gradient(130deg,#a855f7,#00e5ff)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>with AI</span>
          </h1>

          {/* Subheadline */}
          <p className="fu3" style={{ fontSize:'clamp(15px,1.5vw,17.5px)', color:'rgba(255,255,255,.57)', lineHeight:1.76, marginBottom:32, fontFamily:'DM Sans,sans-serif', fontWeight:300, maxWidth:510 }}>
            We help startups and businesses design, develop, and grow{' '}
            <span style={{ color:'#00e5ff', fontWeight:500 }}>high-performance web apps</span>,{' '}
            <span style={{ color:'#a855f7', fontWeight:500 }}>mobile applications</span>, and{' '}
            <span style={{ color:'#10b981', fontWeight:500 }}>AI-driven solutions</span> — from idea to scalable product.
          </p>

          {/* CTAs */}

<div
  className="fu4"
  style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}
>

  {/* Button 1 → Navigate to Contact Page */}
  <button
    onClick={() => router.push('/contact')}
    className="cta-main"
    style={{
      padding: '13px 26px',
      borderRadius: 12,
      color: '#fff',
      fontWeight: 700,
      fontSize: 15,
      fontFamily: 'DM Sans,sans-serif',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer'
    }}
  >
    Start Your Project <ArrowRight size={16} />
  </button>

  {/* Button 2 → Call Button */}
  <a
    href="tel:>+1301478-6786"
    className="cta-ghost"
    style={{
      padding: '13px 26px',
      borderRadius: 12,
      color: '#fff',
      fontWeight: 600,
      fontSize: 15,
      fontFamily: 'DM Sans,sans-serif',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      textDecoration: 'none'
    }}
  >
    <Phone size={15} style={{ color: '#00e5ff' }} />
    +1 (301) 478-6786
  </a>

</div>

          {/* Trust line */}
          <p className="fu4" style={{ fontSize:12, color:'rgba(255,255,255,.28)', fontFamily:'DM Sans,sans-serif', marginBottom:36, letterSpacing:'.04em' }}>
            Focused on performance, scalability, and real business impact
          </p>

          {/* Service pills */}
          <div className="fu5" style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:9 }}>
            {services.map((s, i) => (
              <div key={i} className="svc-pill" style={{ padding:'10px 14px', borderRadius:11, background:'rgba(255,255,255,.03)', border:'1px solid rgba(255,255,255,.07)', display:'flex', alignItems:'center', gap:10 }}>
                <div style={{ width:32, height:32, borderRadius:8, background:`${s.color}14`, border:`1px solid ${s.color}2e`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <s.icon size={15} style={{ color:s.color }} />
                </div>
                <span style={{ color:'rgba(255,255,255,.72)', fontSize:13, fontWeight:500, fontFamily:'DM Sans,sans-serif' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ════ RIGHT: Slideshow ════ */}
        <div className="fu6" style={{ flex:'1 1 0', maxWidth:700, width:'100%', position:'relative' }}>

          {/* Image frame */}
          <div
            className="img-frame"
            style={{ position:'relative', borderRadius:24, overflow:'hidden', border:'1px solid rgba(255,255,255,.08)', background:'rgba(13,18,30,.8)', aspectRatio:'16/9' }}
          >
            {/* Corner accents */}
            <div style={{ position:'absolute', top:0, left:0, width:64, height:2, background:'linear-gradient(90deg,#00e5ff,transparent)', zIndex:10 }} />
            <div style={{ position:'absolute', top:0, left:0, width:2, height:64, background:'linear-gradient(180deg,#00e5ff,transparent)', zIndex:10 }} />
            <div style={{ position:'absolute', bottom:0, right:0, width:64, height:2, background:'linear-gradient(270deg,#7c3aed,transparent)', zIndex:10 }} />
            <div style={{ position:'absolute', bottom:0, right:0, width:2, height:64, background:'linear-gradient(0deg,#7c3aed,transparent)', zIndex:10 }} />

            {/* Slides */}
            {SLIDES.map((slide, i) => (
              <div
                key={i}
                className={i === activeSlide ? 'slide-enter' : i === prevSlide ? 'slide-exit' : ''}
                style={{
                  position:'absolute', inset:0,
                  opacity: i === activeSlide ? 1 : i === prevSlide ? 1 : 0,
                  zIndex:  i === activeSlide ? 2 : i === prevSlide ? 1 : 0,
                }}
              >
                {/* 
                  ─── YOUR IMAGE ─────────────────────────────────────────────
                  If using Next.js Image component, replace <img> with:
                    <Image src={slide.src} alt={slide.alt} fill style={{objectFit:'cover'}} />
                  ────────────────────────────────────────────────────────── 
                */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={slide.src} alt={slide.alt} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                {/* Bottom gradient overlay */}
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(7,9,15,.65) 0%,rgba(7,9,15,.08) 55%,transparent 100%)' }} />
              </div>
            ))}

            {/* Slide caption */}
            <div style={{ position:'absolute', bottom:16, left:16, zIndex:20 }}>
              <div style={{ padding:'4px 12px', borderRadius:99, background:'rgba(0,0,0,.5)', backdropFilter:'blur(10px)', border:'1px solid rgba(255,255,255,.12)' }}>
                <span style={{ color:'rgba(255,255,255,.8)', fontSize:11, fontFamily:'DM Sans,sans-serif', fontWeight:500 }}>
                  {SLIDES[activeSlide].alt}
                </span>
              </div>
            </div>

            {/* Dot nav */}
            <div style={{ position:'absolute', bottom:18, right:16, zIndex:20, display:'flex', gap:6, alignItems:'center' }}>
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  className="dot-btn"
                  onClick={() => { setPrevSlide(activeSlide); setActiveSlide(i); }}
                  style={{
                    width: i === activeSlide ? 20 : 6,
                    height:6, borderRadius:99,
                    background: i === activeSlide ? '#00e5ff' : 'rgba(255,255,255,.25)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Badge — top left */}
          <div className="badge-a" style={{ position:'absolute', top:-16, left:-20, zIndex:30, padding:'10px 14px', borderRadius:14, background:'rgba(8,12,22,.93)', border:'1px solid rgba(0,229,255,.22)', backdropFilter:'blur(16px)', boxShadow:'0 8px 28px rgba(0,229,255,.14)', display:'flex', alignItems:'center', gap:10 }}>
            <div style={{ width:36, height:36, borderRadius:10, background:'linear-gradient(135deg,rgba(0,229,255,.15),rgba(124,58,237,.15))', border:'1px solid rgba(0,229,255,.2)', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <Zap size={17} style={{ color:'#00e5ff' }} />
            </div>
            <div>
              <div style={{ color:'#fff', fontWeight:700, fontSize:13, fontFamily:'DM Sans,sans-serif' }}>AI-Powered</div>
              <div style={{ color:'rgba(255,255,255,.38)', fontSize:10, fontFamily:'DM Sans,sans-serif' }}>Automation Ready</div>
            </div>
          </div>

          {/* Badge — bottom right */}
          <div className="badge-b" style={{ position:'absolute', bottom:-16, right:-16, zIndex:30, padding:'10px 14px', borderRadius:14, background:'rgba(8,12,22,.93)', border:'1px solid rgba(16,185,129,.22)', backdropFilter:'blur(16px)', boxShadow:'0 8px 28px rgba(16,185,129,.12)', display:'flex', alignItems:'center', gap:10 }}>
            <div style={{ width:8, height:8, borderRadius:'50%', background:'#10b981', flexShrink:0, boxShadow:'0 0 8px #10b981' }} />
            <div style={{ color:'rgba(255,255,255,.65)', fontSize:12, fontFamily:'DM Sans,sans-serif' }}>
              <span style={{ color:'#10b981', fontWeight:700 }}>500+ Projects</span> Delivered
            </div>
          </div>

          {/* Badge — top right */}
          <div className="badge-c" style={{ position:'absolute', top:24, right:-18, zIndex:30, padding:'9px 14px', borderRadius:12, background:'rgba(8,12,22,.9)', border:'1px solid rgba(124,58,237,.25)', backdropFilter:'blur(14px)', boxShadow:'0 6px 22px rgba(124,58,237,.15)' }}>
            <div style={{ color:'#a855f7', fontWeight:800, fontSize:20, fontFamily:'DM Sans,sans-serif', lineHeight:1 }}>98%</div>
            <div style={{ color:'rgba(255,255,255,.38)', fontSize:9, fontFamily:'DM Sans,sans-serif', textTransform:'uppercase', letterSpacing:'.07em' }}>Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* ── Scrolling tag strip ── */}
      <div className="relative z-10" style={{ borderTop:'1px solid rgba(255,255,255,.055)', borderBottom:'1px solid rgba(255,255,255,.055)', padding:'13px 0', overflow:'hidden', background:'rgba(0,229,255,.02)' }}>
        <div className="tag-track">
          {[...TAGS, ...TAGS].map((tag, i) => (
            <span key={i} style={{ color:'rgba(255,255,255,.32)', fontSize:11, fontWeight:500, fontFamily:'DM Sans,sans-serif', letterSpacing:'.09em', textTransform:'uppercase', padding:'0 28px', whiteSpace:'nowrap', display:'inline-flex', alignItems:'center', gap:28 }}>
              {tag}
              <span style={{ width:4, height:4, borderRadius:'50%', background:'#00e5ff', opacity:.4, display:'inline-block' }} />
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position:'absolute', bottom:22, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:4, opacity:.28, zIndex:10, animation:'fadeUp 1s 1.4s both' }}>
        <span style={{ color:'#fff', fontSize:9, letterSpacing:'.12em', textTransform:'uppercase', fontFamily:'DM Sans,sans-serif' }}>Scroll</span>
        <ChevronDown size={13} color="#fff" />
      </div>
    </div>
  );
};

export default Hero;