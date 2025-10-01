"use client";
import React, { useState } from "react";
import {
  Search,
  TrendingUp,
  Target,
  BarChart3,
  Globe,
  Zap,
  Award,
  Users,
  Star,
  CheckCircle,
  ArrowUp,
} from "lucide-react";
import Link from "next/link"
import { ChevronRight } from "lucide-react";


export default function SEOOptimizer() {
  const [activeTab, setActiveTab] = useState<"onpage" | "offpage" | "technical">("onpage");

  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Keyword Research & Analysis",
      description:
        "In-depth keyword research to target the right audience and maximize visibility",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Traffic Growth",
      description:
        "Proven strategies to increase organic traffic and improve search rankings",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Competitor Analysis",
      description:
        "Detailed analysis of competitors to identify opportunities and gaps",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Tracking",
      description:
        "Real-time monitoring and detailed reports on your SEO progress",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Local & Global SEO",
      description: "Optimize for local searches and expand your global reach",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Technical SEO",
      description:
        "Speed optimization, mobile-friendliness, and technical improvements",
    },
  ];

  const services = {
    onpage: [
      "Meta Tags Optimization",
      "Content Optimization",
      "Header Tags Structure",
      "Image Alt Text",
      "Internal Linking",
      "URL Structure",
    ],
    offpage: [
      "Quality Backlink Building",
      "Guest Post Outreach",
      "Social Media Signals",
      "Brand Mentions",
      "Directory Submissions",
      "Influencer Partnerships",
    ],
    technical: [
      "Site Speed Optimization",
      "Mobile Responsiveness",
      "Schema Markup",
      "XML Sitemap",
      "Robots.txt Configuration",
      "Core Web Vitals",
    ],
  };

  const packages = [
    {
      name: "Starter",
      price: "$499",
      period: "one-time",
      description: "Perfect for small businesses just starting with SEO",
      features: [
        "Up to 20 Keywords",
        "Monthly SEO Audit",
        "On-Page Optimization",
        "Basic Link Building",
        "Monthly Reports",
        "Email Support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$999",
      period: "one-time",
      description: "Ideal for growing businesses seeking better rankings",
      features: [
        "Up to 50 Keywords",
        "Bi-Weekly SEO Audit",
        "Advanced On-Page SEO",
        "Premium Link Building",
        "Content Strategy",
        "Competitor Analysis",
        "Weekly Reports",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "one-time",
      description: "For large businesses dominating their market",
      features: [
        "Unlimited Keywords",
        "Weekly SEO Audit",
        "Complete SEO Management",
        "Advanced Link Strategy",
        "Content Creation",
        "Detailed Analytics",
        "Daily Monitoring",
        "Dedicated Account Manager",
        "24/7 Support",
      ],
      popular: false,
    },
  ];

  const results = [
    {
      metric: "250%",
      label: "Average Traffic Increase",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      metric: "Top 3",
      label: "Ranking Positions Achieved",
      icon: <Award className="w-8 h-8" />,
    },
    {
      metric: "85%",
      label: "Client Retention Rate",
      icon: <Users className="w-8 h-8" />,
    },
    {
      metric: "500+",
      label: "Keywords Ranked",
      icon: <Search className="w-8 h-8" />,
    },
  ];

  const testimonials = [
    {
      name: "David Thompson",
      role: "Marketing Director, TechFlow",
      content:
        "Digital Marts SEO expertise helped us achieve first-page rankings for 40+ keywords in just 6 months. Our organic traffic tripled!",
      rating: 5,
    },
    {
      name: "Lisa Martinez",
      role: "Owner, Boutique Fashion",
      content:
        "The ROI from their SEO services is incredible. We are now getting more qualified leads than ever before. Highly recommend!",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "CEO, Legal Advisors LLC",
      content:
        "Professional, transparent, and results-driven. They transformed our online visibility and brought us consistent new clients.",
      rating: 5,
    },
  ];

  const process = [
    {
      step: "01",
      title: "SEO Audit & Analysis",
      description:
        "Comprehensive audit of your website current SEO health and opportunities",
    },
    {
      step: "02",
      title: "Strategy Development",
      description:
        "Custom SEO strategy tailored to your business goals and target audience",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute on-page, off-page, and technical SEO improvements",
    },
    {
      step: "04",
      title: "Content Optimization",
      description:
        "Create and optimize high-quality content that ranks and converts",
    },
    {
      step: "05",
      title: "Monitor & Refine",
      description:
        "Continuous monitoring, reporting, and optimization for best results",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 mt-16 bg-cyan-500 bg-opacity-20 border border-cyan-500 border-opacity-30 px-4 py-2 rounded-full text-cyan-300 text-sm">
                <Search className="w-4 h-4" />
                SEO Optimization Services
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Dominate Search{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Rankings
                </span>{" "}
                & Drive Growth
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Boost your online visibility with data-driven SEO strategies.
                Get more organic traffic, higher rankings, and qualified leads
                that convert into customers.
              </p>

              <div className="flex flex-wrap gap-4 pt-4"> 
                 <Link href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 group"
                >
                  Get Free SEO Audit
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                <Link
                  href="/"
                  className="border-2 border-gray-600 px-8 py-4 rounded-lg font-semibold hover:bg-white hover:bg-opacity-5 transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">200+</div>
                  <div className="text-gray-400 text-sm">
                    Websites Optimized
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">98%</div>
                  <div className="text-gray-400 text-sm">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">Top 10</div>
                  <div className="text-gray-400 text-sm">Rankings Achieved</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-gray-700 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                          <Search className="w-7 h-7" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">
                            Search Rankings
                          </div>
                          <div className="text-2xl font-bold text-cyan-400">
                            Improving
                          </div>
                        </div>
                      </div>
                      <ArrowUp className="w-8 h-8 text-green-400" />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between bg-slate-700 bg-opacity-50 p-4 rounded-xl">
                        <span className="text-gray-300">Organic Traffic</span>
                        <div className="flex items-center gap-2">
                          <div className="text-green-400 font-bold">+185%</div>
                          <TrendingUp className="w-4 h-4 text-green-400" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between bg-slate-700 bg-opacity-50 p-4 rounded-xl">
                        <span className="text-gray-300">Keywords Ranking</span>
                        <div className="text-cyan-400 font-bold">47 Top 10</div>
                      </div>

                      <div className="flex items-center justify-between bg-slate-700 bg-opacity-50 p-4 rounded-xl">
                        <span className="text-gray-300">Domain Authority</span>
                        <div className="text-cyan-400 font-bold">62/100</div>
                      </div>
                    </div>

                    <div className="h-32 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-xl relative overflow-hidden">
                      <div className="absolute inset-0 flex items-end justify-around p-4">
                        <div className="w-12 bg-white bg-opacity-30 rounded-t h-16"></div>
                        <div className="w-12 bg-white bg-opacity-40 rounded-t h-20"></div>
                        <div className="w-12 bg-white bg-opacity-60 rounded-t h-24"></div>
                        <div className="w-12 bg-white bg-opacity-80 rounded-t h-28"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-slate-900 bg-opacity-50">
        <div className="max-w-7xl mx-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proven Results That Speak
            </h2>
            <p className="text-xl text-gray-400">
              Our track record of SEO success
            </p>
          </div>
          ``
          <div className="grid md:grid-cols-4 gap-8">
            {results.map((result, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {result.icon}
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {result.metric}
                </div>
                <div className="text-gray-400">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive SEO Solutions
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to succeed online
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 px-4 bg-slate-900 bg-opacity-50">
        <div className="max-w-7xl mx-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our SEO Services
            </h2>
            <p className="text-xl text-gray-400">
              Complete optimization across all aspects
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-gray-700 p-8 md:p-12">
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <button
                onClick={() => setActiveTab("onpage")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "onpage"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30"
                    : "bg-slate-700 hover:bg-slate-600"
                }`}
              >
                On-Page SEO
              </button>
              <button
                onClick={() => setActiveTab("offpage")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "offpage"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30"
                    : "bg-slate-700 hover:bg-slate-600"
                }`}
              >
                Off-Page SEO
              </button>
              <button
                onClick={() => setActiveTab("technical")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "technical"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30"
                    : "bg-slate-700 hover:bg-slate-600"
                }`}
              >
                Technical SEO
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services[activeTab].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-slate-700 bg-opacity-50 p-5 rounded-xl hover:bg-opacity-70 hover:scale-105 transition-all duration-300 border border-gray-600 hover:border-cyan-500 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="font-semibold text-gray-200">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our SEO Process
            </h2>
            <p className="text-xl text-gray-400">
              A systematic approach to ranking success
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="text-5xl font-bold text-cyan-500 mb-4 opacity-50">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-slate-900 bg-opacity-50">
        <div className="max-w-7xl mx-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-400">
              Choose the perfect package for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border transition-all duration-300 ${
                  pkg.popular
                    ? "border-cyan-500 shadow-xl shadow-cyan-500/20 scale-105"
                    : "border-gray-700 hover:border-cyan-500"
                }`}
              >
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-cyan-400">
                    {pkg.price}
                  </span>
                  <span className="text-gray-400">{pkg.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50"
                      : "bg-slate-700 hover:bg-slate-600"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-400">
              See what our clients say about their results
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full"></div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-8">
          <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-700 p-12 md:p-16 rounded-3xl shadow-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Rank Higher?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Get a free SEO audit and discover how we can help you dominate
                search results. Lets grow your organic traffic together!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/"
                  className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Claim Free SEO Audit
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}