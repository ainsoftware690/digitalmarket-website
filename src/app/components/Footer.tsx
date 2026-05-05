"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight, ChevronRight } from "lucide-react";

const services = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
  { label: "SEO Optimizer", href: "/services/seo-optimizer" },
  { label: "Growth & Digital Marketing", href: "/services/digital-marketing" },
  { label: "AI & Automation Systems", href: "/services/AI & Automation Systems" },
  { label: "E-commerce Development", href: "/services/E-commerce Development" },
  { label: "AI Content & Video Creation", href: "/services/AI Content & Video Creation" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Global Markets", href: "/vista" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    name: "LinkedIn",
    href: "www.linkedin.com/in/digital-market-mart-14b462408",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com/digitalmarketmart",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/digitalmarketmart",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/digitalmarketmart",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@digitalmarketmart",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const markets = ["🇺🇸 USA", "🇦🇪 UAE", "🇸🇦 Saudi Arabia", "🇶🇦 Qatar"];

export default function Footer() {
  return (
    <footer className="footer-root">
      {/* ── TOP CTA BANNER ── */}
      <div className="footer-cta">
        <div className="footer-cta-inner">
          <div className="footer-cta-text">
            <span className="footer-cta-eyebrow">Ready to scale?</span>
            <h2 className="footer-cta-heading">
              Let&apos;s build something <em>extraordinary</em> together.
            </h2>
          </div>
          <Link href="/contact" className="footer-cta-btn">
            Start a Project <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="footer-cta-glow" />
      </div>

      {/* ── MAIN GRID ── */}
      <div className="footer-body">
        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">
            <Image
              src="/images/logo.png"
              alt="Digital Market Mart"
              width={180}
              height={60}
              style={{ objectFit: "contain", marginBottom: 20 }}
            />
            <p className="footer-desc">
              We build scalable digital products, AI-powered systems, and
              performance-driven marketing strategies that help businesses grow.
            </p>

            {/* Markets */}
            <div className="footer-markets">
              {markets.map((m) => (
                <span key={m} className="footer-market-tag">{m}</span>
              ))}
            </div>

            {/* Socials */}
            <div className="footer-socials">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label={s.name}
                  title={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* CORE SERVICES */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-link-list">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="footer-link">
                    <ChevronRight size={13} className="footer-link-icon" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-link-list">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">
                    <ChevronRight size={13} className="footer-link-icon" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col">
            <h4 className="footer-col-title">Get In Touch</h4>
            <div className="footer-contact-list">
              <a href="mailto:helpdesk@digitalmarketmart.com" className="footer-contact-item">
                <span className="footer-contact-icon"><Mail size={15} /></span>
                <span>helpdesk@digitalmarketmart.com</span>
              </a>
              <a href="tel:+12402176149" className="footer-contact-item">
                <span className="footer-contact-icon"><Phone size={15} /></span>
                <span>+1 (301) 478-6786</span>
              </a>
              <div className="footer-contact-item">
                <span className="footer-contact-icon"><MapPin size={15} /></span>
                <span>Available for global & GCC projects</span>
              </div>
            </div>

            <div className="footer-badge">
              <span className="footer-badge-dot" />
              Available for new projects
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Digital Market Mart. All rights reserved.</span>
        <div className="footer-bottom-links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>

      <style>{`
        .footer-root {
          background: #050508;
          position: relative;
          overflow: hidden;
          font-family: 'Segoe UI', system-ui, sans-serif;
        }

        /* ── CTA Banner ── */
        .footer-cta {
          position: relative;
          background: linear-gradient(135deg, #0d0d1a 0%, #111128 50%, #0a0a14 100%);
          border-top: 1px solid rgba(255,107,0,0.25);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 52px 24px;
          overflow: hidden;
        }
        .footer-cta-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
          position: relative;
          z-index: 2;
        }
        .footer-cta-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #FF6B00;
          margin-bottom: 10px;
        }
        .footer-cta-heading {
          font-size: clamp(22px, 3vw, 34px);
          font-weight: 800;
          color: #fff;
          margin: 0;
          line-height: 1.2;
          letter-spacing: -0.5px;
        }
        .footer-cta-heading em {
          font-style: normal;
          background: linear-gradient(90deg, #FF6B00, #FF9A00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #FF6B00, #FF9A00);
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          padding: 14px 28px;
          border-radius: 8px;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 0 32px rgba(255,107,0,0.35);
        }
        .footer-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 48px rgba(255,107,0,0.55);
        }
        .footer-cta-glow {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 360px;
          height: 360px;
          background: radial-gradient(circle, rgba(255,107,0,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Main Body ── */
        .footer-body {
          max-width: 1200px;
          margin: 0 auto;
          padding: 64px 24px 48px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 0.8fr 1.1fr;
          gap: 48px;
        }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; }
        }

        /* Brand */
        .footer-brand {}
        .footer-desc {
          color: #8a8a9a;
          font-size: 14px;
          line-height: 1.75;
          margin: 0 0 20px;
        }
        .footer-markets {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
        .footer-market-tag {
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 20px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          color: #aaa;
          letter-spacing: 0.3px;
        }
        .footer-socials {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .footer-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          color: #888;
          text-decoration: none;
          transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;
        }
        .footer-social-btn:hover {
          background: rgba(255,107,0,0.15);
          border-color: rgba(255,107,0,0.4);
          color: #FF6B00;
          transform: translateY(-2px);
        }

        /* Columns */
        .footer-col {}
        .footer-col-title {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #FF6B00;
          margin: 0 0 20px;
        }
        .footer-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-link {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #7a7a8e;
          font-size: 14px;
          text-decoration: none;
          transition: color 0.2s, gap 0.2s;
        }
        .footer-link:hover {
          color: #fff;
          gap: 9px;
        }
        .footer-link-icon {
          color: #FF6B00;
          flex-shrink: 0;
          opacity: 0.7;
        }

        /* Contact */
        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 24px;
        }
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #7a7a8e;
          font-size: 13.5px;
          text-decoration: none;
          line-height: 1.5;
          transition: color 0.2s;
        }
        a.footer-contact-item:hover { color: #fff; }
        .footer-contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: rgba(255,107,0,0.12);
          color: #FF6B00;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          color: #4ade80;
          background: rgba(74,222,128,0.08);
          border: 1px solid rgba(74,222,128,0.2);
          padding: 6px 14px;
          border-radius: 20px;
        }
        .footer-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 8px #4ade80;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }

        /* Bottom Bar */
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          max-width: 1200px;
          margin: 0 auto;
          font-size: 12.5px;
          color: #4a4a5e;
        }
        .footer-bottom-links {
          display: flex;
          gap: 20px;
        }
        .footer-bottom-links a {
          color: #4a4a5e;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-bottom-links a:hover { color: #FF6B00; }
      `}</style>
    </footer>
  );
}