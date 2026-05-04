"use client";
import React, { useState, useEffect } from 'react';
import { Search, Code, Server, Database, ShoppingCart, Video } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  gradient: string;
  delay: number;
}

interface FloatingParticle {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

const Services: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<FloatingParticle[]>([]);

  const services: Service[] = [
    {
      id: 1,
      title: "Growth & Digital Marketing",
      description: "Drive qualified traffic and convert it into real customers using SEO, paid ads, and data-driven funnels.",
      icon: <Search className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      gradient: "from-orange-500 to-orange-600",
      delay: 0.1
    },
    {
      id: 2,
      title: "Web & App Development",
      description: "Build scalable web platforms, SaaS products, and mobile apps designed for performance and growth.",
      icon: <Code className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
      gradient: "from-emerald-500 to-emerald-600",
      delay: 0.2
    },
    {
      id: 3,
      title: "AI & Automation Systems",
      description: "Automate workflows and integrate AI agents, chatbots, and smart business systems.",
      icon: <Server className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
      gradient: "from-violet-500 to-violet-600",
      delay: 0.3
    },
    {
      id: 4,
      title: "Software & Backend Solutions",
      description: "Develop secure backend systems, APIs, and cloud infrastructure for scalable operations.",
      icon: <Database className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200",
      gradient: "from-sky-500 to-sky-600",
      delay: 0.4
    },
    {
      id: 5,
      title: "E-commerce Development",
      description: "Launch high-converting online stores with payment integration and optimized user experience.",
      icon: <ShoppingCart className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200",
      gradient: "from-red-500 to-red-600",
      delay: 0.5
    },
    {
      id: 6,
      title: "AI Content & Video Creation",
      description: "Create engaging videos and content using AI tools and modern production workflows.",
      icon: <Video className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200",
      gradient: "from-cyan-500 to-cyan-600",
      delay: 0.6
    }
  ];

  useEffect(() => {
    const newParticles: FloatingParticle[] = [];
    for (let i = 0; i < 40; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: Math.random() * 10 + 15
      });
    }
    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden relative" id="service">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 via-blue-600 to-blue-500 opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-cyan-500/20" />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute w-0.5 h-0.5 bg-blue-400/60 rounded-full animate-float"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center pt-16 pb-10">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            We design, build, and scale digital products using development, AI, and growth systems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-slate-800/70 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-500 hover:scale-105"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`
              }}
            >

              {/* Image */}
              <div className="w-full h-40 mb-5 rounded-xl overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Icon */}
              <div className={`absolute top-5 right-5 w-10 h-10 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center shadow-lg`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed">
                {service.description}
              </p>

            </div>
          ))}
        </div>

      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px); opacity: 0; }
        }
        .animate-float {
          animation: float 20s linear infinite;
        }
      `}</style>

    </div>
  );
};

export default Services;