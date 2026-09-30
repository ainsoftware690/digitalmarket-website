"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Globe,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Loader2,
  TrendingUp,
  Code2,
  Server,
  Store,
  Lightbulb,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface FormState {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
}

interface FloatingDot {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

// ─── reCAPTCHA global type ──────────────────────────────────────────────────
declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

// ─── Constants ────────────────────────────────────────────────────────────────
const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

const SERVICES = [
  {
    value: "Web Development",
    label: "Web Development",
    icon: Code2,
    desc: "Modern, fast & scalable websites",
  },
  {
    value: "Mobile App Development",
    label: "Mobile App Development",
    icon: Server,
    desc: "iOS & Android apps",
  },
  {
    value: "SEO Optimizer",
    label: "SEO Optimizer",
    icon: TrendingUp,
    desc: "Rankings, traffic & visibility",
  },
  {
    value: "Growth & Digital Marketing",
    label: "Growth & Digital Marketing",
    icon: BarChart3,
    desc: "Ads, social media & conversions",
  },
  {
    value: "AI & Automation Systems",
    label: "AI & Automation Systems",
    icon: Lightbulb,
    desc: "Smart workflows & AI integration",
  },
  {
    value: "E-commerce Development",
    label: "E-commerce Development",
    icon: Store,
    desc: "Online stores & payment systems",
  },
  {
    value: "AI Content & Video Creation",
    label: "AI Content & Video Creation",
    icon: Globe,
    desc: "AI-powered content & videos",
  },
] as const;
const CONTACT_INFO = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["helpdesk@digitalmarketmart.com"],
    gradient: "from-blue-500 to-cyan-500",
    href: "mailto:helpdesk@digitalmarketmart.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (301) 478-6786"],
    gradient: "from-emerald-500 to-teal-500",
    href: "tel:+13014786786",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["30 Summer St", "Hagerstown, MD 21740"],
    gradient: "from-purple-500 to-pink-500",
    href: "https://maps.google.com/?q=30+Summer+St+Hagerstown+MD+21740",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon–Fri: 9AM – 6PM", "Weekend: By Appointment"],
    gradient: "from-orange-500 to-red-500",
    href: null,
  },
] as const;

// ─── Sub-components ───────────────────────────────────────────────────────────
function FloatingBackground({ dots }: { dots: FloatingDot[] }) {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-teal-950 -z-20" />
      <div
        className="fixed inset-0 -z-10 opacity-50"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(99,102,241,0.15) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(20,184,166,0.15) 0%, transparent 50%),
                            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.08) 0%, transparent 70%)`,
        }}
      />
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full bg-gradient-to-r from-indigo-400 to-teal-400 opacity-20"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: dot.size,
              height: dot.size,
              animation: `floatDot ${dot.duration}s ${dot.delay}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
    </>
  );
}

function ContactInfoCard({
  info,
  index,
}: {
  info: (typeof CONTACT_INFO)[number];
  index: number;
}) {
  const Icon = info.icon;
  const content = (
    <div
      className="group relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/40 rounded-2xl p-6 
                 hover:border-indigo-400/40 hover:-translate-y-1 transition-all duration-300 shadow-lg overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
      />
      <div
        className={`w-11 h-11 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center text-white mb-4 
                    group-hover:scale-110 transition-transform duration-300 shadow-lg`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-sm font-semibold text-white mb-2">{info.title}</h3>
      {info.details.map((d, i) => (
        <p key={i} className="text-slate-400 text-sm leading-relaxed">
          {d}
        </p>
      ))}
    </div>
  );

  return info.href ? (
    <a href={info.href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

function ServiceSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-slate-300 text-sm font-medium">
        Service Interested In
      </label>
      <div className="grid grid-cols-1 gap-2">
        <select
          name="service"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-slate-800/60 border border-slate-600/50 rounded-xl px-4 py-3 text-white 
                     focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 focus:outline-none
                     transition-all duration-200 backdrop-blur-sm text-sm"
        >
          <option value="">Select a service…</option>
          {SERVICES.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>

        {/* Visual pills showing selected service info */}
        {value && (() => {
          const selected = SERVICES.find((s) => s.value === value);
          if (!selected) return null;
          const Icon = selected.icon;
          return (
            <div className="flex items-center gap-3 bg-indigo-500/10 border border-indigo-400/20 rounded-xl px-4 py-3">
              <Icon className="w-4 h-4 text-indigo-400 shrink-0" />
              <span className="text-indigo-300 text-xs">{selected.desc}</span>
            </div>
          );
        })()}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const ContactPage: React.FC = () => {
  const [dots, setDots] = useState<FloatingDot[]>([]);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: "",
  });
  // Honeypot — hidden field, sirf bots fill karte hain
  const [honeypot, setHoneypot] = useState("");

  // Generate floating dots only on client to avoid hydration mismatch
  useEffect(() => {
    setDots(
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 15,
      }))
    );
  }, []);

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot trap — agar bhara hai toh bot hai, silently "success" dikhao
    if (honeypot) {
      setFormState({
        status: "success",
        message: "Your message has been sent! We'll reply within 24 hours.",
      });
      setFormData(INITIAL_FORM);
      return;
    }

    // Client-side guard
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormState({ status: "error", message: "Please fill in all required fields." });
      return;
    }

    setFormState({ status: "submitting", message: "" });

    try {
      // reCAPTCHA token generate
      let token = "";
      if (RECAPTCHA_SITE_KEY && window.grecaptcha) {
        token = await new Promise<string>((resolve, reject) => {
          window.grecaptcha!.ready(() => {
            window.grecaptcha!
              .execute(RECAPTCHA_SITE_KEY, { action: "contact_form" })
              .then(resolve)
              .catch(reject);
          });
        });
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFormState({
          status: "success",
          message: "Your message has been sent! We'll reply within 24 hours.",
        });
        setFormData(INITIAL_FORM);
        setTimeout(() => setFormState({ status: "idle", message: "" }), 6000);
      } else {
        setFormState({
          status: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setFormState({
        status: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  const isSubmitting = formState.status === "submitting";

  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      <FloatingBackground dots={dots} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        {/* ── Header ── */}
        <div className="text-center mb-20 animate-fadeInDown">
          <span className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-400/30 px-6 py-2 rounded-full text-indigo-300 text-sm font-semibold backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Get In Touch
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-white via-indigo-200 to-teal-400 bg-clip-text text-transparent mb-6 leading-[1.1] tracking-tight">
            Let&apos;s Work
            <br />
            Together
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business? Reach out to our team of experts and
            let&apos;s build something remarkable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* ── Contact Form (3/5 width) ── */}
          <div className="lg:col-span-3 animate-fadeInLeft">
            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/40 rounded-3xl p-8 shadow-2xl overflow-hidden group">
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              {/* Shine sweep */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Send a Message</h2>
                    <p className="text-slate-400 text-sm">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* ── Success State ── */}
                {formState.status === "success" ? (
                  <div className="text-center py-16 animate-fadeInUp">
                    <div className="w-20 h-20 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-400 mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-slate-300 max-w-sm mx-auto leading-relaxed">
                      {formState.message}
                    </p>
                    <button
                      onClick={() => setFormState({ status: "idle", message: "" })}
                      className="mt-8 text-indigo-400 hover:text-indigo-300 text-sm underline underline-offset-4 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    {/* Honeypot — humans ko invisible, bots isko bhar dete hain */}
                    <input
                      type="text"
                      name="website"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: "-9999px",
                        width: "1px",
                        height: "1px",
                        opacity: 0,
                        pointerEvents: "none",
                      }}
                    />

                    {/* Error banner */}
                    {formState.status === "error" && (
                      <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm animate-fadeInUp">
                        <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                        <span>{formState.message}</span>
                      </div>
                    )}

                    {/* Row 1: Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="block text-slate-300 text-sm font-medium">
                          Full Name <span className="text-indigo-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                          placeholder="John Doe"
                          className="w-full bg-slate-800/60 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 
                                     focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 focus:outline-none
                                     transition-all duration-200 text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-slate-300 text-sm font-medium">
                          Email Address <span className="text-indigo-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                          placeholder="john@example.com"
                          className="w-full bg-slate-800/60 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 
                                     focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 focus:outline-none
                                     transition-all duration-200 text-sm"
                        />
                      </div>
                    </div>

                    {/* Row 2: Company + Service */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="block text-slate-300 text-sm font-medium">
                          Company{" "}
                          <span className="text-slate-500 font-normal">(optional)</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          autoComplete="organization"
                          placeholder="Your Company"
                          className="w-full bg-slate-800/60 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 
                                     focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 focus:outline-none
                                     transition-all duration-200 text-sm"
                        />
                      </div>
                      <ServiceSelector
                        value={formData.service}
                        onChange={(val) =>
                          setFormData((prev) => ({ ...prev, service: val }))
                        }
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="block text-slate-300 text-sm font-medium">
                        Message <span className="text-indigo-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project, goals, and how we can help…"
                        className="w-full bg-slate-800/60 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 
                                   focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 focus:outline-none
                                   transition-all duration-200 resize-none text-sm leading-relaxed"
                      />
                      <p className="text-slate-500 text-xs text-right">
                        {formData.message.length} characters
                      </p>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600 
                                 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 
                                 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed 
                                 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/25 active:scale-[0.98]
                                 text-sm shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending your message…</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <p className="text-center text-slate-500 text-xs">
                      By submitting, you agree to receive a confirmation email.
                      We never share your data.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* ── Right Column (2/5 width) ── */}
          <div className="lg:col-span-2 space-y-6 animate-fadeInRight">
            {/* Contact info header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Contact Info</h2>
                  <p className="text-slate-400 text-sm">Multiple ways to reach us</p>
                </div>
              </div>
            </div>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {CONTACT_INFO.map((info, i) => (
                <ContactInfoCard key={info.title} info={info} index={i} />
              ))}
            </div>

            {/* Services quick-view */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/40 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                Our Services
              </h3>
              <div className="space-y-2">
                {SERVICES.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.value}
                      className="flex items-center gap-3 py-2 border-b border-slate-700/30 last:border-0"
                    >
                      <Icon className="w-4 h-4 text-indigo-400 shrink-0" />
                      <div>
                        <p className="text-slate-300 text-xs font-medium">{s.label}</p>
                        <p className="text-slate-500 text-xs">{s.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-indigo-500/15 to-teal-500/15 border border-indigo-400/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Free Consultation
              </h3>
              <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                Not sure where to start? Schedule a free 30-minute call with our
                team.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="text-center bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 
                             text-white text-sm font-semibold py-3 px-5 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Book Free Consultation
                </Link>
                <Link
                  href="/"
                  className="text-center border border-teal-400/30 text-teal-400 hover:bg-teal-400/10 
                             text-sm font-semibold py-3 px-5 rounded-xl transition-all duration-300"
                >
                  View Our Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        @keyframes floatDot {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%       { transform: translateY(-24px) rotate(180deg); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInDown  { animation: fadeInDown  0.8s ease both; }
        .animate-fadeInLeft  { animation: fadeInLeft  0.8s 0.1s ease both; }
        .animate-fadeInRight { animation: fadeInRight 0.8s 0.2s ease both; }
        .animate-fadeInUp    { animation: fadeInUp    0.5s ease both; }
      `}</style> */}
    </div>
  );
};

export default ContactPage; 