/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  ShoppingCart, Store, CreditCard, Package, Star,
  ArrowRight, CheckCircle, ChevronRight, Sparkles,
  Shield, Clock, Globe, TrendingUp, Code2, Truck,
  BarChart3, Search, Smartphone, Zap, Users, Lock,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const services = [
  {
    icon: Store,
    title: "Custom E-commerce Store",
    desc: "Fully custom-built online stores using Next.js & React. Lightning fast, SEO optimized, and built to convert visitors into buyers.",
    tags: ["Next.js", "React", "MongoDB"],
    color: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/30",
    features: ["Custom UI/UX Design", "Product Management", "Advanced Filtering", "Wishlist & Compare"],
  },
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    desc: "Seamlessly integrate Stripe, PayPal, Razorpay, and 50+ payment methods. Multi-currency support for global sales.",
    tags: ["Stripe", "PayPal", "Razorpay"],
    color: "from-emerald-500 to-teal-600",
    glow: "shadow-emerald-500/30",
    features: ["Multi-currency", "Subscription billing", "Refund management", "PCI compliance"],
  },
  {
    icon: Package,
    title: "Inventory & Order Management",
    desc: "Smart inventory tracking, automated stock alerts, and order management dashboard to run your store effortlessly.",
    tags: ["Real-time", "Automation", "Dashboard"],
    color: "from-blue-500 to-cyan-600",
    glow: "shadow-blue-500/30",
    features: ["Live stock tracking", "Auto reorder alerts", "Bulk product import", "Order analytics"],
  },
  {
    icon: Smartphone,
    title: "Mobile Commerce (PWA)",
    desc: "Progressive Web Apps that give customers an app-like shopping experience on any device, without app store hassle.",
    tags: ["PWA", "Mobile First", "Offline Ready"],
    color: "from-pink-500 to-rose-600",
    glow: "shadow-pink-500/30",
    features: ["App-like experience", "Offline browsing", "Push notifications", "Fast checkout"],
  },
  {
    icon: Search,
    title: "E-commerce SEO & Marketing",
    desc: "Data-driven SEO strategies, product schema markup, and marketing automation to drive organic traffic and sales.",
    tags: ["SEO", "Schema", "Analytics"],
    color: "from-amber-500 to-orange-600",
    glow: "shadow-amber-500/30",
    features: ["Product schema", "Sitemap automation", "Meta optimization", "Google Shopping"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Conversion CRO",
    desc: "Deep analytics dashboards, A/B testing, heatmaps, and conversion rate optimization to maximize your revenue.",
    tags: ["Google Analytics", "CRO", "A/B Testing"],
    color: "from-indigo-500 to-violet-600",
    glow: "shadow-indigo-500/30",
    features: ["Sales dashboard", "Cart abandonment", "Heatmap analysis", "Revenue reports"],
  },
];

const stats = [
  { value: "180%", label: "Avg. Sales Increase", icon: TrendingUp },
  { value: "50+", label: "Payment Gateways", icon: CreditCard },
  { value: "< 2s", label: "Page Load Speed", icon: Zap },
  { value: "99.9%", label: "Uptime Guarantee", icon: Shield },
];

const techStack = [
  { name: "Next.js", category: "Framework" },
  { name: "React.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "Stripe", category: "Payments" },
  { name: "PayPal", category: "Payments" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "TypeScript", category: "Language" },
  { name: "AWS S3", category: "Storage" },
  { name: "Redis", category: "Caching" },
  { name: "Vercel", category: "Deployment" },
  { name: "Razorpay", category: "Payments" },
  { name: "Cloudinary", category: "Media" },
];

const process = [
  { step: "01", title: "Discovery & Planning", desc: "We analyze your products, target market, and competition to plan the perfect store architecture.", icon: Search },
  { step: "02", title: "Design & Prototype", desc: "Beautiful, conversion-focused UI/UX design crafted specifically for your brand and customers.", icon: Sparkles },
  { step: "03", title: "Development & Integration", desc: "Full-stack development with payment gateways, inventory systems, and third-party integrations.", icon: Code2 },
  { step: "04", title: "Launch & Scale", desc: "Deploy, optimize performance, set up analytics, and support you as your store grows.", icon: TrendingUp },
];

const testimonials = [
  {
    name: "Fatima Al-Mansouri",
    role: "E-commerce Director, Gulf Shop",
    flag: "🇶🇦",
    text: "They rebuilt our entire platform with Arabic support. Sales increased 180% in just 3 months after launch. Absolutely phenomenal team.",
    avatar: "FM",
    gradient: "from-teal-500 to-cyan-600",
    result: "+180% Sales",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, StyleCraft",
    flag: "🇬🇧",
    text: "Our new store converts 40% better than before. The checkout flow they designed is flawless. Revenue doubled in 60 days.",
    avatar: "ER",
    gradient: "from-emerald-500 to-teal-500",
    result: "+40% Conversion",
  },
  {
    name: "Michael Chen",
    role: "CEO, TechGadgets USA",
    flag: "🇺🇸",
    text: "The inventory system and dashboard they built saves us 20 hours a week. Best investment we made for our business.",
    avatar: "MC",
    gradient: "from-blue-500 to-cyan-500",
    result: "20hrs/week saved",
  },
];

const platforms = [
  { name: "Custom Next.js", desc: "100% custom built", best: true },
  { name: "WordPress/WooCommerce", desc: "Easy management" },
  { name: "Shopify Custom", desc: "Theme development" },
  { name: "Headless CMS", desc: "Contentful / Sanity" },
];

/* ─────────────────────────────────────────────
   ANIMATED SHOPPING VISUAL
───────────────────────────────────────────── */
const ShoppingVisual = () => (
  <div className="relative h-[500px] w-full">
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/40 backdrop-blur-sm overflow-hidden">

      {/* Floating product cards */}
      <div className="absolute top-8 left-6 bg-slate-700/80 border border-slate-600/50 rounded-2xl p-4 w-44 backdrop-blur-sm"
        style={{ animation: "float-up 4s ease-in-out infinite" }}>
        <div className="w-full h-24 bg-gradient-to-br from-violet-500/30 to-purple-600/30 rounded-xl mb-3 flex items-center justify-center">
          <ShoppingCart className="w-10 h-10 text-violet-400" />
        </div>
        <div className="text-white text-xs font-bold mb-1">Premium Sneakers</div>
        <div className="text-emerald-400 text-xs font-black">$129.00</div>
        <div className="flex gap-0.5 mt-1">
          {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-xs">★</span>)}
        </div>
      </div>

      <div className="absolute top-8 right-6 bg-slate-700/80 border border-slate-600/50 rounded-2xl p-4 w-44 backdrop-blur-sm"
        style={{ animation: "float-up 4s ease-in-out infinite", animationDelay: "1s" }}>
        <div className="w-full h-24 bg-gradient-to-br from-emerald-500/30 to-teal-600/30 rounded-xl mb-3 flex items-center justify-center">
          <Package className="w-10 h-10 text-emerald-400" />
        </div>
        <div className="text-white text-xs font-bold mb-1">Wireless Earbuds</div>
        <div className="text-emerald-400 text-xs font-black">$89.00</div>
        <div className="flex gap-0.5 mt-1">
          {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-xs">★</span>)}
        </div>
      </div>

      {/* Center — checkout card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800/95 border border-violet-500/40 rounded-2xl p-5 w-64 backdrop-blur-sm shadow-2xl shadow-violet-500/20">
        <div className="flex items-center gap-2 mb-4">
          <ShoppingCart className="w-5 h-5 text-violet-400" />
          <span className="text-white font-bold text-sm">Secure Checkout</span>
          <Lock className="w-4 h-4 text-emerald-400 ml-auto" />
        </div>
        <div className="space-y-2 mb-4">
          {["Premium Sneakers — $129", "Wireless Earbuds — $89"].map((item, i) => (
            <div key={i} className="flex items-center justify-between text-xs text-slate-400 bg-slate-700/50 rounded-lg px-3 py-2">
              <span>{item.split(" — ")[0]}</span>
              <span className="text-white font-bold">{item.split(" — ")[1]}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mb-4 border-t border-slate-700/60 pt-3">
          <span className="text-slate-400 text-xs">Total</span>
          <span className="text-emerald-400 font-black text-lg">$218.00</span>
        </div>
        <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-bold py-2.5 rounded-xl">
          Pay Now →
        </button>
        <div className="flex justify-center gap-3 mt-3">
          {["VISA", "MC", "PP"].map((p, i) => (
            <span key={i} className="text-slate-500 text-xs bg-slate-700/50 px-2 py-1 rounded">{p}</span>
          ))}
        </div>
      </div>

      {/* Bottom badges */}
      <div className="absolute bottom-8 left-6 bg-emerald-500/20 border border-emerald-500/40 rounded-xl px-3 py-2 backdrop-blur-sm">
        <div className="text-emerald-300 text-xs font-bold">📦 Order Placed!</div>
        <div className="text-slate-400 text-xs">Tracking ID: #DMM-2024</div>
      </div>

      <div className="absolute bottom-8 right-6 bg-blue-500/20 border border-blue-500/40 rounded-xl px-3 py-2 backdrop-blur-sm">
        <div className="text-blue-300 text-xs font-bold">📊 Today's Sales</div>
        <div className="text-white text-xs font-black">$12,480 💰</div>
      </div>

      <div className="absolute top-1/2 left-4 -translate-y-1/2 bg-amber-500/20 border border-amber-500/40 rounded-xl px-3 py-2 backdrop-blur-sm">
        <div className="text-amber-300 text-xs font-bold">🔥 Trending</div>
        <div className="text-slate-400 text-xs">247 views</div>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   SERVICE CARD
───────────────────────────────────────────── */
const ServiceCard = ({ svc, index }: { svc: typeof services[0]; index: number }) => {
  const Icon = svc.icon;
  return (
    <div className="group relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-7 hover:border-slate-600 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
      <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${svc.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-5 shadow-lg ${svc.glow} group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-7 h-7 text-white" />
      </div>

      <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-5">{svc.desc}</p>

      <ul className="space-y-2 mb-5">
        {svc.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {svc.tags.map((tag, i) => (
          <span key={i} className="text-xs px-3 py-1 rounded-full bg-slate-700/80 text-slate-300 border border-slate-600/50">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   PARTICLES
───────────────────────────────────────────── */
const Particles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(15)].map((_, i) => (
      <div key={i} className="absolute rounded-full"
        style={{
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: i % 3 === 0 ? "#a78bfa" : i % 3 === 1 ? "#34d399" : "#f59e0b",
          opacity: 0.3,
          animation: `float-particle ${8 + Math.random() * 12}s linear infinite`,
          animationDelay: `${Math.random() * 8}s`,
        }}
      />
    ))}
  </div>
);

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function EcommercePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.1),transparent_60%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.06) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <Particles />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-8 mt-8">
                <ShoppingCart className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 text-sm font-medium">E-commerce Development</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
                <span className="text-white">Build.</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Sell. Grow.
                </span>
                <br />
                <span className="text-white">Globally.</span>
              </h1>

              <p className="text-slate-400 text-xl leading-relaxed mb-8 max-w-lg">
                We build high-converting e-commerce stores that turn visitors into loyal customers. 
                Custom-built for USA, UAE, Gulf, UK & worldwide markets.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/contact">
                  <button className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all duration-300">
                    Start Your Store
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="flex items-center gap-2 px-8 py-4 bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold rounded-xl border border-slate-700/60 hover:border-slate-500 transition-all duration-300">
                    Free Consultation
                  </button>
                </Link>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "180%", label: "Avg Sales Increase", color: "text-emerald-400" },
                  { val: "40%", label: "Better Conversion", color: "text-violet-400" },
                  { val: "< 2s", label: "Page Load Speed", color: "text-cyan-400" },
                  { val: "50+", label: "Payment Methods", color: "text-amber-400" },
                ].map((s, i) => (
                  <div key={i} className="bg-slate-800/50 border border-slate-700/40 rounded-xl p-4">
                    <div className={`text-2xl font-black ${s.color}`}>{s.val}</div>
                    <div className="text-slate-400 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="hidden lg:block">
              <ShoppingVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-slate-800/60 bg-slate-900/50 py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="text-center group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700/50 flex items-center justify-center mx-auto mb-3 group-hover:border-emerald-500/50 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                  <div className="text-slate-400 text-sm">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              We Build On Every{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Platform
              </span>
            </h2>
            <p className="text-slate-400">Custom solutions for every business type and scale.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {platforms.map((p, i) => (
              <div key={i} className={`relative bg-slate-800/60 border rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 ${p.best ? "border-emerald-500/50 shadow-lg shadow-emerald-500/10" : "border-slate-700/50 hover:border-slate-500"}`}>
                {p.best && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Recommended
                  </div>
                )}
                <ShoppingCart className={`w-8 h-8 mx-auto mb-3 ${p.best ? "text-emerald-400" : "text-slate-400"}`} />
                <div className="text-white font-bold text-sm mb-1">{p.name}</div>
                <div className="text-slate-400 text-xs">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24 bg-slate-900/40 border-y border-slate-800/60">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/60 rounded-full px-4 py-2 mb-6">
              <Store className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-300 text-sm">Our E-commerce Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Everything Your{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">
                Store Needs
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From product listings to global checkout — we build stores that sell 24/7 for you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <ServiceCard key={i} svc={svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              From Idea to{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Live Store
              </span>
            </h2>
            <p className="text-slate-400 text-lg">We get your store live fast — without compromising quality.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="relative group">
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-slate-600 to-transparent z-0" />
                  )}
                  <div className="relative bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="text-6xl font-black text-slate-700/60 mb-4 leading-none">{p.step}</div>
                    <Icon className="w-8 h-8 text-emerald-400 mb-3" />
                    <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                    <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-20 bg-slate-900/40 border-y border-slate-800/60">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Built With{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Best Tech
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <div key={i} className="group flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 rounded-xl px-5 py-3 hover:border-emerald-500/50 hover:bg-slate-700/60 transition-all duration-300">
                <Code2 className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300" />
                <span className="text-white font-medium text-sm">{tech.name}</span>
                <span className="text-xs text-slate-500 bg-slate-700/60 rounded-full px-2 py-0.5">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Stores That{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Sell
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Real results from real clients worldwide.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="relative bg-slate-800/60 border border-slate-700/50 rounded-2xl p-7 hover:border-slate-500 transition-all duration-300 group hover:-translate-y-1">
                <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${t.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                {/* Result badge */}
                <div className="absolute top-5 right-5 bg-emerald-500/20 border border-emerald-500/40 rounded-full px-3 py-1">
                  <span className="text-emerald-300 text-xs font-bold">{t.result}</span>
                </div>
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-black text-lg shadow-lg`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-white font-bold">{t.name}</h4>
                      <span>{t.flag}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-amber-400 text-sm">★</span>)}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-950 to-violet-900/20" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.06) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 text-sm font-medium">Available for new projects</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Ready to Launch{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Your Store?
            </span>
          </h2>

          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">
            Book a free consultation. We&apos;ll plan your perfect e-commerce store and show you how to 10x your online sales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-lg rounded-2xl shadow-xl shadow-emerald-500/25 hover:scale-105 transition-all duration-300">
                <ShoppingCart className="w-6 h-6" />
                Start Your E-commerce Store
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/services">
              <button className="flex items-center justify-center gap-2 px-10 py-5 bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold text-lg rounded-2xl border border-slate-700/60 hover:border-slate-500 transition-all duration-300">
                View All Services
                <ChevronRight className="w-5 h-5" />
              </button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-16">
            {["🇺🇸 USA", "🇦🇪 UAE", "🇸🇦 Saudi Arabia", "🇶🇦 Qatar", "🇬🇧 UK", "🌍 Worldwide"].map((badge, i) => (
              <div key={i} className="text-slate-400 text-sm flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float-particle {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
        @keyframes float-up {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </main>
  );
}