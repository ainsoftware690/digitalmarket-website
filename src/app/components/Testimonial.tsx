/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef, useEffect } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  gradient: string;
  country: string;
  flag: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO & Founder",
    company: "TechStart Solutions",
    content:
      "DIGITAL MARKET MART transformed our digital presence completely. Their SEO strategies increased our organic traffic by 300% in just 6 months. Truly unmatched expertise.",
    rating: 5,
    avatar: "SJ",
    gradient: "from-violet-500 to-fuchsia-500",
    country: "USA",
    flag: "🇺🇸",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    company: "Chen Enterprises",
    content:
      "The financial literacy consulting changed everything for my business. They helped me build corporate credit that secured $250K in funding. Worth every penny.",
    rating: 5,
    avatar: "MC",
    gradient: "from-blue-500 to-cyan-500",
    country: "Canada",
    flag: "🇨🇦",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Growth Dynamics",
    content:
      "Their web development team created a stunning, high-performing website that converted 40% better than our old site. The ongoing support is exceptional.",
    rating: 5,
    avatar: "ER",
    gradient: "from-emerald-500 to-teal-500",
    country: "UK",
    flag: "🇬🇧",
  },
  {
    id: 4,
    name: "Ahmed Al-Rashid",
    role: "Entrepreneur",
    company: "Gulf Ventures LLC",
    content:
      "Outstanding service from a world-class team. They understood the Gulf market perfectly and delivered a bilingual platform that exceeded all expectations.",
    rating: 5,
    avatar: "AR",
    gradient: "from-amber-500 to-orange-500",
    country: "UAE",
    flag: "🇦🇪",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Startup Founder",
    company: "InnovateCo",
    content:
      "The technical infrastructure solutions they provided scaled with our rapid growth seamlessly. Their team feels like a true extension of our company.",
    rating: 5,
    avatar: "LT",
    gradient: "from-indigo-500 to-purple-500",
    country: "Australia",
    flag: "🇦🇺",
  },
  {
    id: 6,
    name: "Khalid Al-Saud",
    role: "Business Consultant",
    company: "Saudi Tech Group",
    content:
      "Digital Market Mart built our entire e-commerce ecosystem. 200% revenue growth in our first year working together. Highly recommend them.",
    rating: 5,
    avatar: "KS",
    gradient: "from-green-500 to-emerald-600",
    country: "Saudi Arabia",
    flag: "🇸🇦",
  },
  {
    id: 7,
    name: "James Anderson",
    role: "CTO",
    company: "Anderson Advisory",
    content:
      "Their AI chatbot integration automated 70% of our customer support. The ROI was visible within the first month. Incredible technical team.",
    rating: 5,
    avatar: "JA",
    gradient: "from-pink-500 to-rose-500",
    country: "USA",
    flag: "🇺🇸",
  },
  {
    id: 8,
    name: "Fatima Al-Mansouri",
    role: "E-commerce Director",
    company: "Gulf Shop Online",
    content:
      "They redesigned our entire platform with Arabic support and it was flawless. Sales increased by 180% after launch. Professional team, great communication.",
    rating: 5,
    avatar: "FM",
    gradient: "from-teal-500 to-cyan-600",
    country: "Qatar",
    flag: "🇶🇦",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-amber-400 fill-amber-400" : "text-slate-600"
        }`}
      />
    ))}
  </div>
);

const TestimonialCard = ({ t }: { t: Testimonial }) => (
  <div
    className="relative flex-shrink-0 w-[340px] mx-3 bg-slate-800/70 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/70 transition-all duration-300 group"
  >
    <div
      className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${t.gradient} opacity-70 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}
    />
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0`}
        >
          {t.avatar}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-white font-semibold text-sm">{t.name}</h4>
            <span className="text-base leading-none">{t.flag}</span>
          </div>
          <p className="text-slate-400 text-xs mt-0.5">{t.role}</p>
          <p className="text-slate-500 text-xs">{t.company}</p>
        </div>
      </div>
      <div className={`text-4xl font-serif bg-gradient-to-br ${t.gradient} bg-clip-text text-transparent opacity-50 leading-none mt-1`}>
        "
      </div>
    </div>
    <StarRating rating={t.rating} />
    <p className="text-slate-300 text-sm leading-relaxed mt-3 line-clamp-4">
      {t.content}
    </p>
    <div className="mt-4 inline-flex items-center gap-1.5 bg-slate-700/60 rounded-full px-3 py-1">
      <span className="text-xs text-slate-400">{t.flag} {t.country}</span>
    </div>
  </div>
);

const MarqueeRow = ({
  items,
  reverse,
  speed,
}: {
  items: Testimonial[];
  reverse?: boolean;
  speed: number;
}) => {
  const track = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex"
        style={{
          width: "max-content",
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")
        }
      >
        {track.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
};

const Testimonial: React.FC = () => {
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4, 8);

  return (
    <section className="relative bg-slate-900 py-24 overflow-hidden" id="testimonial">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(120,119,198,0.12),transparent)]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(100 116 139 / 0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Side fades */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/60 rounded-full px-5 py-2 mb-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-slate-300 text-sm font-medium">500+ Happy Clients Worldwide</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Trusted by startups and enterprises across USA, UAE, Saudi Arabia, Gulf, UK & Australia
          </p>
        </div>

        {/* Two Scrolling Rows */}
        <div className="flex flex-col gap-6">
          <MarqueeRow items={row1} reverse={false} speed={30} />
          <MarqueeRow items={row2} reverse={true} speed={35} />
        </div>

        {/* Stats */}
        <div className="mt-20 max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-700/30 rounded-2xl overflow-hidden border border-slate-700/50">
            {[
              { value: "500+", label: "Happy Clients", color: "from-violet-400 to-purple-400" },
              { value: "99%", label: "Success Rate", color: "from-cyan-400 to-blue-400" },
              { value: "$50M+", label: "Funding Secured", color: "from-blue-400 to-indigo-400" },
              { value: "5.0★", label: "Average Rating", color: "from-amber-400 to-orange-400" },
            ].map((stat, i) => (
              <div key={i} className="bg-slate-800/60 p-8 text-center hover:bg-slate-800/90 transition-colors duration-300">
                <div className={`text-3xl md:text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global keyframes */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-reverse {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Testimonial;