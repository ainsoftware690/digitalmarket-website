"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, Sparkles, Zap, Code, Cloud, Shield, Brain, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const services = [
    { icon: Code, name: "Web Development", color: "from-blue-400 to-cyan-400" },
    { icon: Cloud, name: "Cloud Solutions", color: "from-purple-400 to-pink-400" },
    { icon: Shield, name: "Cybersecurity", color: "from-green-400 to-emerald-400" },
    { icon: Brain, name: "AI & ML", color: "from-orange-400 to-red-400" },
  ];

  const particles = [
    { left: '5%', top: '15%', delay: '0s' },
    { left: '25%', top: '70%', delay: '0.5s' },
    { left: '75%', top: '10%', delay: '1s' },
    { left: '90%', top: '35%', delay: '1.5s' },
    { left: '12%', top: '85%', delay: '2s' },
    { left: '65%', top: '80%', delay: '2.5s' },
    { left: '35%', top: '20%', delay: '3s' },
    { left: '95%', top: '70%', delay: '3.5s' },
    { left: '20%', top: '50%', delay: '4s' },
    { left: '80%', top: '90%', delay: '4.5s' },
    { left: '45%', top: '5%', delay: '5s' },
    { left: '8%', top: '60%', delay: '5.5s' },
  ];

  return (
    <div className="relative h-[90vh] min-h-[1000px] overflow-hidden bg-slate-900">
      {/* Static Background - No animations */}
      <div className="absolute inset-0">
        {/* Base gradient - completely static */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900"></div>
        
        {/* Mouse-following gradient - only render after mount */}
        {isMounted && (
          <div 
            className="absolute inset-0 opacity-30 transition-opacity duration-1000"
            style={{
              background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(120, 119, 198, 0.3), transparent 50%)`
            }}
          ></div>
        )}
        
        {/* Static floating orbs - removed animate-pulse */}
        <div className="absolute top-16 left-16 w-80 h-80 bg-gradient-to-r from-slate-700/40 via-blue-800/40 to-slate-800/40 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-24 w-72 h-72 bg-gradient-to-r from-slate-700/40 via-blue-800/40 to-slate-800/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-400/15 to-teal-600/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-gradient-to-r from-slate-700/40 via-blue-800/40 to-slate-800/40 rounded-full blur-3xl"></div>
        
        {/* Subtle mesh gradient overlay - static */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent transform skew-y-12"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-cyan-500/10 to-transparent transform -skew-y-12"></div>
        </div>
      </div>

      {/* Floating particles - Only render on client */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle, index) => (
            <div
              key={index}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex h-full">
        {/* Left Content */}
        <div className="flex-1 flex items-center justify-center px-6 lg:px-16">
          <div className={`max-w-4xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-300/20 mb-8 group hover:scale-105 transition-all duration-300">
              <Sparkles className="w-5 h-5 text-yellow-400 mr-3 animate-pulse" />
              <span className="text-white/90 font-semibold tracking-wide">IT Design & Consulting</span>
              <ChevronRight className="w-4 h-4 text-purple-300 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6">
              <span className="block bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Our Intelligent
              </span>
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent mt-2">
                Technology
              </span>
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent mt-2">
                Solutions and Services
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl">
              Combining <span className="text-cyan-300 font-semibold">innovation</span> with{' '}
              <span className="text-purple-300 font-semibold">expertise</span> to deliver tailored digital solutions
              that transform operations and unlock opportunities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#service">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center text-lg">
                    Our Services
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </a>
              
              <button className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl font-semibold text-white border border-white/20 hover:border-white/40 transform hover:scale-105 transition-all duration-300">
                <span className="flex items-center text-lg">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </span>
              </button>
            </div>

            {/* Services Preview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group p-4 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} p-3 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-white/90 font-semibold text-sm">{service.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Visual Element */}
        <div className="hidden lg:flex flex-1 items-center justify-center relative">
          <div className="relative w-96 h-96">
            {/* Central orb */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 blur-xl animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-pink-500/40 to-blue-500/40 blur-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute inset-8 rounded-full bg-gradient-to-r from-yellow-400/50 to-purple-500/50 blur-md animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Rotating rings */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-spin" style={{ animationDuration: '30s' }}></div>
            <div className="absolute inset-8 rounded-full border border-pink-400/40 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
            
            {/* Tech icons floating around */}
            {isMounted && [Zap, Code, Cloud, Shield, Brain].map((Icon, index) => {
              const angle = (index * 72) * (Math.PI / 180);
              const radius = 180;
              const centerX = 50;
              const centerY = 50;
              
              const x = centerX + (Math.cos(angle) * (radius / 4));
              const y = centerY + (Math.sin(angle) * (radius / 4));
              
              return (
                <div
                  key={index}
                  className="absolute w-16 h-16 rounded-xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center animate-pulse hover:scale-110 transition-all duration-300"
                  style={{
                    top: `${y}%`,
                    left: `${x}%`,
                    animationDelay: `${index * 0.5}s`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Icon className="w-8 h-8 text-white/80" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Hero;