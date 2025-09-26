"use client";
import React, { useState, useEffect } from 'react';
import { Target, Users, Award, TrendingUp, Globe, Code, Lightbulb, Shield } from 'lucide-react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Bridging the gap between innovation and strategy with tailored solutions"
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Empowering businesses to dominate the digital landscape through collaboration"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering scalable, result-driven solutions customized to meet your needs"
    },
    {
      icon: TrendingUp,
      title: "Growth-Oriented",
      description: "Helping businesses scale by leveraging technology and financial literacy"
    }
  ];

  const expertise = [
    { icon: Globe, title: "Web Development", color: "from-blue-500 to-cyan-400" },
    { icon: TrendingUp, title: "SEO & Digital Marketing", color: "from-cyan-500 to-blue-400" },
    { icon: Code, title: "IT Solutions", color: "from-blue-600 to-cyan-500" },
    { icon: Lightbulb, title: "Strategic Consulting", color: "from-cyan-600 to-blue-500" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-800"></div>
        <div 
          className="absolute inset-0 bg-gradient-to-tl from-blue-600/20 via-transparent to-cyan-500/20"
          style={{
            transform: `translateX(${scrollY * 0.3}px) rotate(${scrollY * 0.05}deg)`,
            animation: 'pulse 8s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
            animation: 'float 15s ease-in-out infinite'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/5 via-transparent to-blue-600/10 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                About
              </span>
              <span className="text-white"> Us</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          {/* Company Description */}
          <div className={`mb-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-blue-500/20 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  DIGITALMARKETMART
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-8"></div>
              </div>
              
              <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-5xl mx-auto">
                <p className="text-center">
                  <span className="text-blue-300 font-semibold">DIGITAL MARKET MART</span> is a cutting-edge business services and consulting firm specializing in 
                  <span className="text-cyan-300 font-medium"> digital, technical, professional, and scientific industries</span>. 
                  Our expertise spans across web development, SEO, digital marketing, IT solutions, and strategic consulting.
                </p>
                
                <p className="text-center">
                  We are committed to <span className="text-blue-300 font-semibold">helping businesses and entrepreneurs scale</span> by leveraging 
                  technology, digital assets, and financial literacy to achieve sustainable growth and market dominance.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className={`mb-24 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-blue-900/40 to-slate-800/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-cyan-500/20 shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Our Mission
              </h3>
              <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-400 mx-auto rounded-full mb-8"></div>
              <p className="text-xl md:text-2xl text-gray-300 text-center leading-relaxed max-w-4xl mx-auto">
                At DIGITAL MARKET MART, we <span className="text-cyan-300 font-semibold">bridge the gap between innovation and strategy</span>, 
                offering tailored solutions that empower businesses to dominate the digital landscape. Whether you're a startup looking for 
                brand establishment or an established entity seeking optimization and growth, we provide 
                <span className="text-blue-300 font-semibold"> scalable, result-driven solutions customized to meet your needs</span>.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className={`mb-24 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Our Core Values
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-slate-800/60 to-blue-900/40 backdrop-blur-md rounded-2xl p-8 border border-blue-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold mb-3 text-blue-200 group-hover:text-cyan-300 transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise Areas */}
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Our Expertise
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((item, index) => (
                <div 
                  key={index}
                  className="group relative bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>
                  <div className="relative z-10 text-center">
                    <div className={`bg-gradient-to-r ${item.color} p-4 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(0px) translateX(20px); }
          75% { transform: translateY(-10px) translateX(10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default About;