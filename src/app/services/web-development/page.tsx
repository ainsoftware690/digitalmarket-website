"use client";
import React, { useState, useEffect } from 'react';
import { Code, Zap, Shield, Rocket, Check, ArrowRight, Sparkles, Globe,  Cloud, } from 'lucide-react';

const WebDevelopmentPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('frontend');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: Code, title: "Custom Development", desc: "Tailored solutions built from scratch to match your vision" },
    { icon: Zap, title: "Lightning Fast", desc: "Optimized performance for blazing-fast load times" },
    { icon: Shield, title: "Secure & Reliable", desc: "Enterprise-grade security and 99.9% uptime" },
    { icon: Rocket, title: "Scalable Architecture", desc: "Built to grow with your business needs" },
    { icon: Globe, title: "Responsive Design", desc: "Perfect experience across all devices and screens" },
    { icon: Cloud, title: "Cloud Integration", desc: "Seamless cloud deployment and management" }
  ];

  const techStack = {
    frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    backend: ['Node.js', 'Python', 'PHP', 'Java', 'PostgreSQL', 'MongoDB'],
    cloud: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD']
  };

  const process = [
    { step: "01", title: "Discovery", desc: "We analyze your needs and define project scope" },
    { step: "02", title: "Design", desc: "Creating stunning UI/UX that converts" },
    { step: "03", title: "Development", desc: "Building with best practices and modern tech" },
    { step: "04", title: "Testing", desc: "Rigorous quality assurance and optimization" },
    { step: "05", title: "Launch", desc: "Deployment and post-launch support" }
  ];

  const pricing = [
    { name: "Starter", price: "999", features: ["5 Pages Website", "Responsive Design", "Basic SEO", "Contact Form", "3 Months Support"], popular: false },
    { name: "Professional", price: "2,499", features: ["15 Pages Website", "Custom Design", "Advanced SEO", "CMS Integration", "E-commerce Ready", "6 Months Support", "Performance Optimization"], popular: true },
    { name: "Enterprise", price: "Custom", features: ["Unlimited Pages", "Advanced Features", "API Integration", "Custom Development", "24/7 Priority Support", "Dedicated Team", "Lifetime Updates"], popular: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse" 
             style={{ transform: `translateY(${scrollY * 0.1}px)` }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-teal-500/10 to-transparent rounded-full blur-3xl animate-pulse" 
             style={{ transform: `translateY(${-scrollY * 0.1}px)` }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full border border-cyan-500/30 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">Web Development Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Build Stunning Websites
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Transform your digital presence with cutting-edge web solutions that drive results. 
              We create fast, secure, and scalable websites tailored to your business needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 rounded-xl font-bold shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl font-bold border border-cyan-500/30 hover:border-cyan-500/50 backdrop-blur-sm transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Choose <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Our Services?</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} 
                   className="group p-6 bg-gradient-to-br from-slate-800/50 to-blue-900/30 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105"
                   style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-100">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Our <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {['frontend', 'backend', 'cloud'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-cyan-500/30'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack[activeTab as keyof typeof techStack].map((tech, idx) => (
              <div key={idx} 
                   className="p-4 bg-gradient-to-br from-slate-800/80 to-blue-900/50 rounded-xl border border-cyan-500/30 text-center hover:border-cyan-500/60 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
                <p className="font-semibold text-slate-200">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Development Process</span>
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-6xl font-bold bg-gradient-to-br from-cyan-400/20 to-teal-400/20 bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-100">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Flexible <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Pricing Plans</span>
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our standard support and quality guarantee.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, idx) => (
              <div key={idx} 
                   className={`relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105 ${
                     plan.popular
                       ? 'bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border-2 border-cyan-400 shadow-xl shadow-cyan-500/20'
                       : 'bg-gradient-to-br from-slate-800/50 to-blue-900/30 border border-cyan-500/20'
                   }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-slate-100">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text">
                    ${plan.price}
                  </span>
                  {plan.price !== 'Custom' && <span className="text-slate-400 ml-2">one-time</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 shadow-lg hover:shadow-cyan-500/50'
                    : 'bg-slate-800/80 hover:bg-slate-700/80 border border-cyan-500/30'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-3xl border border-cyan-500/30 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-teal-500/5 animate-pulse"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Let&apos;s bring your vision to life with a stunning, high-performance website.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 rounded-xl font-bold shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
                Schedule a Consultation <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default WebDevelopmentPage;