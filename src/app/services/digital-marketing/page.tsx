"use client";
import React, { useState } from 'react';
import { ArrowRight, Search, TrendingUp, Target, BarChart3, Megaphone, Mail, Share2, CheckCircle2, Zap, LineChart, Users, Globe } from 'lucide-react';
import Link from 'next/link';

export default function DigitalMarketingSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const mainServices = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Optimization",
      description: "Dominate search rankings with advanced SEO strategies and organic growth techniques.",
      features: ["Keyword Research", "Technical SEO", "Link Building"]
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Social Media Marketing",
      description: "Build brand awareness and engage audiences across all major social platforms.",
      features: ["Content Strategy", "Community Management", "Paid Ads"]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "PPC Advertising",
      description: "Maximize ROI with data-driven pay-per-click campaigns and smart targeting.",
      features: ["Google Ads", "Facebook Ads", "Campaign Optimization"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Marketing",
      description: "Convert leads with personalized email campaigns and automation workflows.",
      features: ["Campaign Design", "Automation", "List Segmentation"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics & Insights",
      description: "Make informed decisions with comprehensive data analysis and reporting.",
      features: ["Performance Tracking", "ROI Analysis", "Custom Reports"]
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Content Marketing",
      description: "Create compelling content that resonates and drives meaningful engagement.",
      features: ["Blog Writing", "Video Content", "Content Strategy"]
    }
  ];

  const benefits = [
    { icon: <TrendingUp className="w-5 h-5" />, text: "Increase Brand Visibility" },
    { icon: <Users className="w-5 h-5" />, text: "Generate Quality Leads" },
    { icon: <LineChart className="w-5 h-5" />, text: "Boost Conversion Rates" },
    { icon: <Globe className="w-5 h-5" />, text: "Expand Market Reach" }
  ];

  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "250%", label: "Avg ROI Growth" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 mt-16 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full border border-cyan-400/30 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-semibold">Digital Marketing Services</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Digital Marketing
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your online presence with data-driven strategies that deliver measurable results. 
            We help businesses grow through innovative digital marketing solutions.
          </p>

          {/* Benefits Grid */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-cyan-400">{benefit.icon}</div>
                <span className="text-sm text-gray-200">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mainServices.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-white">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm group-hover:gap-3 transition-all">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </div>

              {/* Hover Effect Gradient Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/50 to-purple-600/50 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl p-8 md:p-12 border border-cyan-400/20 backdrop-blur-xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Accelerate Your Growth?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Partner with us to create a winning digital marketing strategy tailored to your business goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact"
             className="group bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            <Link href="/"
             className="border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 text-white">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}