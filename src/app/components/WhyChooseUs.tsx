"use client";
import React, { useEffect, useState } from 'react';
import { Rocket, Zap, TrendingUp, Star, ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Technical Excellence",
      description: "Cutting-edge solutions powered by the latest technologies"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Proven Results",
      description: "Measurable growth and ROI for startups to enterprises"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Deployment",
      description: "Lightning-fast development and launch cycles"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        {/* Primary gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 animate-pulse"></div>
        
        {/* Animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-600/10 animate-pulse" 
             style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        
        <div className="absolute inset-0 bg-gradient-to-l from-blue-400/5 via-slate-600/5 to-blue-500/5 animate-pulse" 
             style={{ animationDelay: '2s', animationDuration: '6s' }}></div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-bounce" 
             style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/15 to-slate-600/15 rounded-full blur-3xl animate-bounce" 
             style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-2xl animate-pulse" 
             style={{ animationDuration: '5s' }}></div>
      </div>

      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-gradient-to-r from-transparent via-blue-100/5 to-transparent animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Why Choose Us Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                      <div className="inline-flex items-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400"></div>
            <Rocket className="w-8 h-8 text-blue-400 animate-bounce" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8 tracking-tight">
            Why Choose Us?
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              We don&apos;t just provide services—we engineer success. By blending technical expertise with financial literacy, 
              we offer a one-stop ecosystem where entrepreneurs can develop, launch, and scale profitable digital enterprises. 
              Our high-yield business model allows us to work with clients ranging from startups to corporate enterprises, 
              ensuring measurable and sustainable results in a highly competitive market.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 cursor-pointer ${
                  activeCard === index 
                    ? 'bg-white/10 border-blue-400/50 shadow-2xl shadow-blue-400/25' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
                onMouseEnter={() => setActiveCard(index)}
              >
                <div className={`inline-flex p-4 rounded-full mb-6 transition-all duration-300 ${
                  activeCard === index 
                    ? 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white' 
                    : 'bg-white/10 text-blue-400 group-hover:bg-white/20'
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
                
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  activeCard === index ? 'opacity-100' : ''
                } bg-gradient-to-r from-blue-400/10 to-cyan-500/10 blur-xl -z-10`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Join the FrntIn Movement Section */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8 tracking-tight">
            Join the DIGITAL MARKET MART Movement
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10">
              At DIGITAL MARKET MART, we are redefining how businesses succeed in the digital age. 
              Whether you need a website that ranks at the top, an optimized online marketing strategy, 
              or guidance on financial leverage—we deliver solutions that work.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10"></div>
            </button>
            
            <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "50+", label: "Team Experts" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-30">
        <Star className="w-4 h-4 text-blue-400 animate-pulse" />
      </div>
      <div className="absolute top-40 right-20 opacity-30" style={{ animationDelay: '1s' }}>
        <Star className="w-6 h-6 text-cyan-400 animate-pulse" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-30" style={{ animationDelay: '2s' }}>
        <Star className="w-3 h-3 text-blue-400 animate-pulse" />
      </div>
    </div>
  );
};

export default WhyChooseUs;