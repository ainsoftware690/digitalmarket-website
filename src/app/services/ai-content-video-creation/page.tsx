/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Video, Wand2, FileText, Image, Mic, Film,
  ArrowRight, CheckCircle, ChevronRight, Sparkles,
  Clock, Globe, TrendingUp, Code2, Zap,
  Play, PenTool, BarChart3, Share2, Star, Layers,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const services = [
  {
    icon: Video,
    title: "AI Video Production",
    desc: "Create stunning marketing videos, product demos, and social content using AI tools like Runway, Sora, and HeyGen — in hours, not weeks.",
    tags: ["Runway ML", "HeyGen", "Sora"],
    color: "from-rose-500 to-pink-600",
    glow: "shadow-rose-500/30",
    features: ["AI avatar videos", "Product showcase reels", "Brand story videos", "Multi-language voiceover"],
  },
  {
    icon: FileText,
    title: "AI Content Writing",
    desc: "SEO-optimized blogs, landing page copy, email sequences, and social posts crafted by AI + human expertise for maximum impact.",
    tags: ["GPT-4", "Claude", "SEO AI"],
    color: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/30",
    features: ["Blog automation", "Landing page copy", "Email sequences", "Product descriptions"],
  },
  {
    icon: Image,
    title: "AI Image & Graphics",
    desc: "Stunning product images, social media graphics, ad creatives, and brand visuals generated with Midjourney, DALL-E, and Stable Diffusion.",
    tags: ["Midjourney", "DALL-E 3", "Stable Diffusion"],
    color: "from-amber-500 to-orange-600",
    glow: "shadow-amber-500/30",
    features: ["Ad creative generation", "Product photography", "Brand identity visuals", "Social media kits"],
  },
  {
    icon: Mic,
    title: "AI Voiceover & Podcasts",
    desc: "Professional AI voiceovers in 50+ languages, podcast production, and audio content generation for global reach.",
    tags: ["ElevenLabs", "Whisper AI", "Descript"],
    color: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/30",
    features: ["50+ languages", "Natural-sounding voice", "Podcast editing", "Audio transcription"],
  },
  {
    icon: Share2,
    title: "Social Media Content",
    desc: "Full-funnel social media content strategy with AI-generated posts, reels, carousels, and scheduling for maximum engagement.",
    tags: ["Buffer", "Later", "Canva AI"],
    color: "from-emerald-500 to-teal-600",
    glow: "shadow-emerald-500/30",
    features: ["30-day content calendar", "Reel scripts", "Carousel designs", "Auto-scheduling"],
  },
  {
    icon: BarChart3,
    title: "Content Performance AI",
    desc: "AI-powered content analytics, A/B testing, and optimization to maximize engagement, reach, and conversions across all platforms.",
    tags: ["Analytics AI", "A/B Testing", "Insights"],
    color: "from-indigo-500 to-violet-600",
    glow: "shadow-indigo-500/30",
    features: ["Engagement analytics", "Content scoring", "Trend analysis", "ROI tracking"],
  },
];

const stats = [
  { value: "10x", label: "Faster Content", icon: Zap },
  { value: "50+", label: "Languages", icon: Globe },
  { value: "300%", label: "More Engagement", icon: TrendingUp },
  { value: "24/7", label: "Content Pipeline", icon: Clock },
];

const techStack = [
  { name: "GPT-4", category: "LLM" },
  { name: "Claude AI", category: "LLM" },
  { name: "Midjourney", category: "Image AI" },
  { name: "DALL-E 3", category: "Image AI" },
  { name: "Runway ML", category: "Video AI" },
  { name: "HeyGen", category: "Avatar AI" },
  { name: "ElevenLabs", category: "Voice AI" },
  { name: "Stable Diffusion", category: "Image AI" },
  { name: "Descript", category: "Audio AI" },
  { name: "Canva AI", category: "Design" },
  { name: "n8n", category: "Automation" },
  { name: "Whisper AI", category: "Transcription" },
];

const process = [
  { step: "01", title: "Brand Discovery", desc: "We learn your brand voice, target audience, and content goals to create a personalized AI content strategy.", icon: Sparkles },
  { step: "02", title: "Content Strategy", desc: "Build a 30-day content calendar with platform-specific formats — videos, blogs, reels, and more.", icon: PenTool },
  { step: "03", title: "AI Production", desc: "Our team uses cutting-edge AI tools to produce high-quality content at scale, reviewed by human experts.", icon: Wand2 },
  { step: "04", title: "Publish & Optimize", desc: "Schedule, publish, and continuously optimize content based on real performance data.", icon: TrendingUp },
];

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    role: "Marketing Director, Gulf Brand",
    flag: "🇦🇪",
    text: "They produced 30 days of social content in just 2 days using AI. Our Instagram grew 400% in followers. Mind-blowing results.",
    avatar: "AR",
    gradient: "from-amber-500 to-orange-500",
    result: "+400% Followers",
  },
  {
    name: "Lisa Thompson",
    role: "CEO, InnovateCo UK",
    flag: "🇬🇧",
    text: "AI video ads they created got 3x better click-through than our old videos. Content production costs dropped by 80%.",
    avatar: "LT",
    gradient: "from-violet-500 to-purple-500",
    result: "80% Cost Reduction",
  },
  {
    name: "James Anderson",
    role: "Founder, MediaScale USA",
    flag: "🇺🇸",
    text: "Our blog traffic increased 300% in 4 months with their AI content system. Every article ranks on Google page 1.",
    avatar: "JA",
    gradient: "from-rose-500 to-pink-500",
    result: "+300% Blog Traffic",
  },
];

const contentTypes = [
  { label: "YouTube Videos", icon: "🎬", color: "from-red-500 to-rose-600" },
  { label: "Instagram Reels", icon: "📱", color: "from-pink-500 to-purple-600" },
  { label: "Blog Articles", icon: "✍️", color: "from-violet-500 to-indigo-600" },
  { label: "TikTok Content", icon: "🎵", color: "from-cyan-500 to-blue-600" },
  { label: "LinkedIn Posts", icon: "💼", color: "from-blue-500 to-indigo-600" },
  { label: "Email Campaigns", icon: "📧", color: "from-emerald-500 to-teal-600" },
  { label: "Ad Creatives", icon: "🎯", color: "from-amber-500 to-orange-600" },
  { label: "Podcast Episodes", icon: "🎙️", color: "from-green-500 to-emerald-600" },
];

/* ─────────────────────────────────────────────
   VIDEO CREATION VISUAL
───────────────────────────────────────────── */
const VideoVisual = () => (
  <div className="relative h-[520px] w-full">
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/40 backdrop-blur-sm overflow-hidden">

      {/* Main video preview */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-56 h-36 bg-gradient-to-br from-rose-500/30 to-pink-600/30 rounded-2xl border border-rose-500/30 flex items-center justify-center"
        style={{ animation: "float-up 4s ease-in-out infinite" }}>
        <div className="text-center">
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2 backdrop-blur-sm cursor-pointer hover:bg-white/30 transition-colors">
            <Play className="w-7 h-7 text-white ml-1" />
          </div>
          <div className="text-white text-xs font-bold">AI Brand Video</div>
          <div className="text-rose-300 text-xs">4K • 60fps • Auto-subtitles</div>
        </div>
        {/* Video timeline */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="h-1 bg-slate-700/60 rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* Left panel — content types */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 space-y-2">
        {[
          { label: "Blog Post", icon: "✍️", status: "Published", color: "text-emerald-400" },
          { label: "Reel Script", icon: "🎬", status: "Generating...", color: "text-amber-400" },
          { label: "Ad Creative", icon: "🎯", status: "Ready", color: "text-emerald-400" },
        ].map((item, i) => (
          <div key={i} className="bg-slate-700/80 border border-slate-600/50 rounded-xl px-3 py-2 w-40 backdrop-blur-sm"
            style={{ animation: `float-up ${3 + i}s ease-in-out infinite`, animationDelay: `${i * 0.5}s` }}>
            <div className="flex items-center gap-2">
              <span className="text-base">{item.icon}</span>
              <div>
                <div className="text-white text-xs font-bold">{item.label}</div>
                <div className={`text-xs ${item.color}`}>{item.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right panel — AI tools */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-2">
        {[
          { label: "GPT-4", sub: "Writing copy...", color: "violet" },
          { label: "Midjourney", sub: "Generating...", color: "amber" },
          { label: "ElevenLabs", sub: "Voice ready", color: "cyan" },
        ].map((tool, i) => (
          <div key={i} className={`bg-${tool.color}-500/20 border border-${tool.color}-500/40 rounded-xl px-3 py-2 w-36 backdrop-blur-sm`}
            style={{ animation: `float-up ${3.5 + i}s ease-in-out infinite`, animationDelay: `${i * 0.7}s` }}>
            <div className={`text-${tool.color}-300 text-xs font-bold`}>{tool.label}</div>
            <div className="text-slate-400 text-xs">{tool.sub}</div>
            <div className="h-1 bg-slate-700/60 rounded-full mt-1 overflow-hidden">
              <div className={`h-full bg-${tool.color}-500 rounded-full animate-pulse`} style={{ width: `${60 + i * 15}%` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom stats */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-xl px-4 py-2 backdrop-blur-sm text-center">
          <div className="text-emerald-300 text-xs font-bold">🚀 Published Today</div>
          <div className="text-white text-sm font-black">24 Pieces</div>
        </div>
        <div className="bg-violet-500/20 border border-violet-500/40 rounded-xl px-4 py-2 backdrop-blur-sm text-center">
          <div className="text-violet-300 text-xs font-bold">📈 Engagement</div>
          <div className="text-white text-sm font-black">+340%</div>
        </div>
        <div className="bg-rose-500/20 border border-rose-500/40 rounded-xl px-4 py-2 backdrop-blur-sm text-center">
          <div className="text-rose-300 text-xs font-bold">🎯 Reach</div>
          <div className="text-white text-sm font-black">1.2M</div>
        </div>
      </div>

      {/* Center bottom — AI processing */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-slate-800/90 border border-slate-600/50 rounded-2xl px-5 py-3 backdrop-blur-sm text-center w-56">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Wand2 className="w-4 h-4 text-rose-400" />
          <span className="text-white text-xs font-bold">AI Content Engine</span>
        </div>
        <div className="text-slate-400 text-xs">Processing 4 tasks simultaneously</div>
        <div className="flex gap-1 mt-2 justify-center">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1.5 h-4 bg-rose-500/60 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
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
            <CheckCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {svc.tags.map((tag, i) => (
          <span key={i} className="text-xs px-3 py-1 rounded-full bg-slate-700/80 text-slate-300 border border-slate-600/50">{tag}</span>
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
    {[...Array(18)].map((_, i) => (
      <div key={i} className="absolute rounded-full"
        style={{
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: i % 4 === 0 ? "#fb7185" : i % 4 === 1 ? "#a78bfa" : i % 4 === 2 ? "#34d399" : "#fbbf24",
          opacity: 0.35,
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
export default function AIContentPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(244,63,94,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.1),transparent_60%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.06) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <Particles />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div> 
              <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 rounded-full px-4 py-2 mb-8 mt-8">
                <Film className="w-4 h-4 text-rose-400" />
                <span className="text-rose-300 text-sm font-medium">AI Content & Video Creation</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
                <span className="text-white">Create.</span>
                <br />
                <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
                  10x Faster.
                </span>
                <br />
                <span className="text-white">Go Viral.</span>
              </h1>

              <p className="text-slate-400 text-xl leading-relaxed mb-8 max-w-lg">
                We build AI-powered content systems that produce videos, blogs, social posts,
                and ad creatives at scale — for USA, UAE, Gulf, UK & global markets.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/contact">
                  <button className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold rounded-xl shadow-lg shadow-rose-500/25 hover:scale-105 transition-all duration-300">
                    Start Creating
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="flex items-center gap-2 px-8 py-4 bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold rounded-xl border border-slate-700/60 hover:border-slate-500 transition-all duration-300">
                    Free Strategy Call
                  </button>
                </Link>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "10x", label: "Faster Production", color: "text-rose-400" },
                  { val: "300%", label: "More Engagement", color: "text-violet-400" },
                  { val: "80%", label: "Cost Reduction", color: "text-emerald-400" },
                  { val: "50+", label: "Languages Supported", color: "text-amber-400" },
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
              <VideoVisual />
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
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700/50 flex items-center justify-center mx-auto mb-3 group-hover:border-rose-500/50 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-rose-400" />
                  </div>
                  <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                  <div className="text-slate-400 text-sm">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTENT TYPES ── */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Content We{" "}
              <span className="bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent">
                Create
              </span>
            </h2>
            <p className="text-slate-400">Every format. Every platform. Every market.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {contentTypes.map((ct, i) => (
              <div key={i} className="group bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 text-center hover:border-slate-500 transition-all duration-300 hover:-translate-y-1 cursor-default">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${ct.color} flex items-center justify-center mx-auto mb-3 text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {ct.icon}
                </div>
                <div className="text-white font-semibold text-sm">{ct.label}</div>
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
              <Wand2 className="w-4 h-4 text-rose-400" />
              <span className="text-slate-300 text-sm">Our Content Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              AI-Powered{" "}
              <span className="bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent">
                Content Suite
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From viral videos to SEO blogs — our AI content systems produce everything your brand needs to dominate online.
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
              From Brief to{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Published
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Our AI content pipeline delivers in days — not months.</p>
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
                    <Icon className="w-8 h-8 text-rose-400 mb-3" />
                    <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                    <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
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
              Powered By{" "}
              <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                Best AI Tools
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <div key={i} className="group flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 rounded-xl px-5 py-3 hover:border-rose-500/50 hover:bg-slate-700/60 transition-all duration-300">
                <Wand2 className="w-4 h-4 text-rose-400 group-hover:text-rose-300" />
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
              Content That{" "}
              <span className="bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent">
                Converts
              </span>
            </h2>
            <p className="text-slate-400 text-lg">Real results from clients worldwide.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="relative bg-slate-800/60 border border-slate-700/50 rounded-2xl p-7 hover:border-slate-500 transition-all duration-300 group hover:-translate-y-1">
                <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${t.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="absolute top-5 right-5 bg-rose-500/20 border border-rose-500/40 rounded-full px-3 py-1">
                  <span className="text-rose-300 text-xs font-bold">{t.result}</span>
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
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-slate-950 to-violet-900/20" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.06) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            <span className="text-rose-300 text-sm font-medium">Available for new projects</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Ready to Go{" "}
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
              Viral?
            </span>
          </h2>

          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">
            Book a free strategy call. We&apos;l build an AI content system that produces viral-worthy content for your brand every single day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-lg rounded-2xl shadow-xl shadow-rose-500/25 hover:scale-105 transition-all duration-300">
                <Film className="w-6 h-6" />
                Start Creating Content
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
                <CheckCircle className="w-4 h-4 text-rose-400" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float-particle {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 0.35; }
          90% { opacity: 0.35; }
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