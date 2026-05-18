/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Bot, Zap, Brain, Workflow, MessageSquare, BarChart3,
  ArrowRight, CheckCircle, ChevronRight, Sparkles,
  Shield, Clock, Globe, TrendingUp, Code2, Cpu,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const services = [
  {
    icon: Bot,
    title: "AI Chatbot Development",
    desc: "Intelligent, context-aware chatbots powered by GPT-4 & Gemini. Automate customer support, lead capture, and sales 24/7.",
    tags: ["GPT-4", "Gemini", "LangChain"],
    color: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/30",
    features: ["Multi-language support", "CRM integration", "Custom training data", "Analytics dashboard"],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Eliminate repetitive tasks with n8n, Zapier & Make. Connect 500+ apps and build automated pipelines that run 24/7.",
    tags: ["n8n", "Zapier", "Make"],
    color: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/30",
    features: ["No-code workflows", "API integrations", "Error handling", "Real-time monitoring"],
  },
  {
    icon: Brain,
    title: "AI Integration & APIs",
    desc: "Embed OpenAI, Claude, or custom LLMs directly into your existing products. From ideation to production in days.",
    tags: ["OpenAI", "Claude API", "REST APIs"],
    color: "from-emerald-500 to-teal-600",
    glow: "shadow-emerald-500/30",
    features: ["Custom prompts", "Fine-tuning", "Rate limiting", "Cost optimization"],
  },
  {
    icon: BarChart3,
    title: "AI Data Analytics",
    desc: "Turn raw data into actionable insights with AI-powered dashboards, predictive models, and automated reporting.",
    tags: ["Python", "TensorFlow", "Power BI"],
    color: "from-amber-500 to-orange-600",
    glow: "shadow-amber-500/30",
    features: ["Predictive analytics", "Auto-reports", "Anomaly detection", "Data pipelines"],
  },
  {
    icon: MessageSquare,
    title: "AI Content Systems",
    desc: "Automate content generation, SEO optimization, and social media scheduling with AI-driven content pipelines.",
    tags: ["GPT-4", "SEO AI", "Automation"],
    color: "from-pink-500 to-rose-600",
    glow: "shadow-pink-500/30",
    features: ["Blog automation", "SEO optimization", "Social scheduling", "Brand voice"],
  },
  {
    icon: Shield,
    title: "AI-Powered Security",
    desc: "Intelligent threat detection, automated incident response, and AI-driven vulnerability scanning for your systems.",
    tags: ["ML Models", "SIEM", "Zero-Trust"],
    color: "from-indigo-500 to-blue-600",
    glow: "shadow-indigo-500/30",
    features: ["Threat detection", "Auto-response", "Compliance", "24/7 monitoring"],
  },
];

const stats = [
  { value: "70%", label: "Tasks Automated", icon: Zap },
  { value: "10x", label: "Faster Workflows", icon: TrendingUp },
  { value: "24/7", label: "AI Always On", icon: Clock },
  { value: "500+", label: "Apps Connected", icon: Globe },
];

const techStack = [
  { name: "OpenAI GPT-4", category: "LLM" },
  { name: "Claude API", category: "LLM" },
  { name: "Google Gemini", category: "LLM" },
  { name: "n8n", category: "Automation" },
  { name: "LangChain", category: "Framework" },
  { name: "Zapier", category: "Automation" },
  { name: "Python", category: "Language" },
  { name: "TensorFlow", category: "ML" },
  { name: "Pinecone", category: "Vector DB" },
  { name: "Make.com", category: "Automation" },
  { name: "Hugging Face", category: "ML" },
  { name: "Supabase", category: "Database" },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "We analyze your business processes and identify automation opportunities." },
  { step: "02", title: "Solution Design", desc: "Custom AI architecture designed specifically for your workflow and goals." },
  { step: "03", title: "Build & Integrate", desc: "We build, test, and integrate AI systems into your existing tools." },
  { step: "04", title: "Launch & Scale", desc: "Deploy, monitor, and continuously optimize your AI systems for maximum ROI." },
];

const testimonials = [
  { name: "Ahmed Al-Rashid", role: "CEO, Gulf Tech", flag: "🇦🇪", text: "Our customer support workload dropped by 70% after their AI chatbot went live. ROI in 3 weeks.", avatar: "AR", gradient: "from-amber-500 to-orange-500" },
  { name: "Sarah Johnson", role: "Ops Director, TechStart", flag: "🇺🇸", text: "The n8n automation they built saves us 40 hours per week. Absolute game changer for our team.", avatar: "SJ", gradient: "from-violet-500 to-fuchsia-500" },
  { name: "Khalid Al-Saud", role: "Founder, Saudi Tech Group", flag: "🇸🇦", text: "AI analytics dashboard they built gives us real-time insights we never had before. Incredible work.", avatar: "KS", gradient: "from-emerald-500 to-teal-500" },
];

/* ─────────────────────────────────────────────
   ANIMATED NEURAL NETWORK SVG
───────────────────────────────────────────── */
const NeuralNet = () => {
  const nodes = [
    { cx: 80, cy: 120 }, { cx: 80, cy: 200 }, { cx: 80, cy: 280 },
    { cx: 200, cy: 80 }, { cx: 200, cy: 160 }, { cx: 200, cy: 240 }, { cx: 200, cy: 320 },
    { cx: 320, cy: 120 }, { cx: 320, cy: 200 }, { cx: 320, cy: 280 },
    { cx: 440, cy: 160 }, { cx: 440, cy: 240 },
    { cx: 540, cy: 200 },
  ];
  const connections = [
    [0,3],[0,4],[1,3],[1,4],[1,5],[2,4],[2,5],[2,6],
    [3,7],[3,8],[4,7],[4,8],[4,9],[5,8],[5,9],[6,9],
    [7,10],[7,11],[8,10],[8,11],[9,10],[9,11],
    [10,12],[11,12],
  ];
  return (
    <svg viewBox="0 0 620 400" className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#6366f1" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {connections.map(([a, b], i) => (
        <line key={i} x1={nodes[a].cx} y1={nodes[a].cy} x2={nodes[b].cx} y2={nodes[b].cy}
          stroke="url(#nodeGrad)" strokeWidth="1" strokeOpacity="0.4">
          <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur={`${2 + (i % 4)}s`} repeatCount="indefinite" />
        </line>
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="8" fill="url(#nodeGrad)" filter="url(#glow)">
          <animate attributeName="r" values="7;10;7" dur={`${1.5 + (i % 3)}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
};

/* ─────────────────────────────────────────────
   FLOATING PARTICLES
───────────────────────────────────────────── */
const Particles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: i % 3 === 0 ? "#a78bfa" : i % 3 === 1 ? "#22d3ee" : "#34d399",
          opacity: 0.4,
          animation: `float-particle ${8 + Math.random() * 12}s linear infinite`,
          animationDelay: `${Math.random() * 8}s`,
        }}
      />
    ))}
  </div>
);

/* ─────────────────────────────────────────────
   SERVICE CARD
───────────────────────────────────────────── */
const ServiceCard = ({ svc, index }: { svc: typeof services[0]; index: number }) => {
  const Icon = svc.icon;
  return (
    <div
      className="group relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-7 hover:border-slate-600 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Glow on hover */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${svc.color} blur-xl`} style={{ opacity: 0, zIndex: -1 }} />

      {/* Top accent */}
      <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${svc.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-5 shadow-lg ${svc.glow} group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-7 h-7 text-white" />
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
        {svc.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-5">{svc.desc}</p>

      {/* Features */}
      <ul className="space-y-2 mb-5">
        {svc.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {/* Tags */}
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
   MAIN PAGE
───────────────────────────────────────────── */
export default function AIAutomationPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [count, setCount] = useState({ tasks: 0, speed: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount({ tasks: 70, speed: 10 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
        {/* BG layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.1),transparent_60%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.06) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <Particles />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 mb-8 mt-8">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span className="text-violet-300 text-sm font-medium">AI & Automation Systems</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
                <span className="text-white">Automate.</span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Intelligently.
                </span>
                <br />
                <span className="text-white">Scale.</span>
              </h1>

              <p className="text-slate-400 text-xl leading-relaxed mb-8 max-w-lg">
                We build AI-powered automation systems that eliminate repetitive work,
                reduce costs, and 10x your team&apos;s productivity — from chatbots to full workflow automation.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/contact">
                  <button className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-violet-500/25 hover:scale-105 transition-all duration-300">
                    Start Automating
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
                  { val: "70%", label: "Cost Reduction", color: "text-violet-400" },
                  { val: "10x", label: "Productivity Boost", color: "text-cyan-400" },
                  { val: "< 7 Days", label: "Avg. Delivery", color: "text-emerald-400" },
                  { val: "24/7", label: "AI Never Sleeps", color: "text-amber-400" },
                ].map((s, i) => (
                  <div key={i} className="bg-slate-800/50 border border-slate-700/40 rounded-xl p-4">
                    <div className={`text-2xl font-black ${s.color}`}>{s.val}</div>
                    <div className="text-slate-400 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Neural Network Visual */}
            <div className="relative h-[480px] hidden lg:block">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/40 backdrop-blur-sm overflow-hidden">
                <NeuralNet />

                {/* Floating badges */}
                <div className="absolute top-8 right-8 bg-violet-500/20 border border-violet-500/40 rounded-2xl px-4 py-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-violet-400" />
                    <div>
                      <div className="text-white text-sm font-bold">AI Chatbot</div>
                      <div className="text-emerald-400 text-xs">● Active — 2,341 queries</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 bg-cyan-500/20 border border-cyan-500/40 rounded-2xl px-4 py-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-white text-sm font-bold">Workflow Automation</div>
                      <div className="text-cyan-300 text-xs">847 tasks automated today</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800/90 border border-emerald-500/40 rounded-2xl px-6 py-4 backdrop-blur-sm text-center">
                  <Brain className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                  <div className="text-white font-black text-xl">AI Core</div>
                  <div className="text-emerald-400 text-xs mt-1">Processing 4,200 req/min</div>
                </div>

                <div className="absolute top-12 left-12 bg-amber-500/20 border border-amber-500/40 rounded-xl px-3 py-2 backdrop-blur-sm">
                  <div className="text-amber-300 text-xs font-bold">n8n Automation</div>
                  <div className="text-slate-400 text-xs">32 workflows running</div>
                </div>

                <div className="absolute bottom-14 right-10 bg-pink-500/20 border border-pink-500/40 rounded-xl px-3 py-2 backdrop-blur-sm">
                  <div className="text-pink-300 text-xs font-bold">AI Analytics</div>
                  <div className="text-slate-400 text-xs">Real-time insights</div>
                </div>
              </div>
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
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700/50 flex items-center justify-center mx-auto mb-3 group-hover:border-violet-500/50 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                  <div className="text-slate-400 text-sm">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05),transparent_70%)]" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/60 rounded-full px-4 py-2 mb-6">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-300 text-sm">Our AI Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Everything{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                AI-Powered
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From intelligent chatbots to full workflow automation — we build AI systems that work for your business around the clock.
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
      <section className="py-24 bg-slate-900/40 border-y border-slate-800/60">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              How We{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Deliver
              </span>
            </h2>
            <p className="text-slate-400 text-lg">From discovery to deployment in as little as 7 days.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={i} className="relative group">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-slate-600 to-transparent z-0" />
                )}
                <div className="relative bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500 transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-6xl font-black text-slate-700/60 mb-4 leading-none">{p.step}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                  <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Powered By The{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Best Tools
              </span>
            </h2>
            <p className="text-slate-400 text-lg">We use cutting-edge AI tech to build future-proof systems.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="group flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 rounded-xl px-5 py-3 hover:border-violet-500/50 hover:bg-slate-700/60 transition-all duration-300 cursor-default"
              >
                <Code2 className="w-4 h-4 text-violet-400 group-hover:text-violet-300" />
                <span className="text-white font-medium text-sm">{tech.name}</span>
                <span className="text-xs text-slate-500 bg-slate-700/60 rounded-full px-2 py-0.5">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-slate-900/40 border-y border-slate-800/60">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Client{" "}
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                Results
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="relative bg-slate-800/60 border border-slate-700/50 rounded-2xl p-7 hover:border-slate-500 transition-all duration-300 group hover:-translate-y-1">
                <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${t.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
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
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-slate-950 to-cyan-900/20" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.06) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 text-sm font-medium">Available for new projects</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Ready to{" "}
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Automate
            </span>
            <br />
            Your Business?
          </h2>

          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">
            Book a free consultation. We'll analyze your workflows and show you exactly how AI can save you time and money.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-bold text-lg rounded-2xl shadow-xl shadow-violet-500/25 hover:scale-105 transition-all duration-300">
                <Bot className="w-6 h-6" />
                Get Free AI Consultation
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

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            {["🇺🇸 USA Clients", "🇦🇪 UAE Clients", "🇸🇦 Saudi Arabia", "🇬🇧 UK Clients", "🌍 Worldwide"].map((badge, i) => (
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
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
      `}</style>
    </main>
  );
}