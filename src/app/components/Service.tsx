"use client";
import React, { useState, useEffect } from 'react';
import { Search, Code, Server, Building2, Users, Calculator } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
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
      title: "Digital Marketing & SEO",
      description: "Mastery — Elevating brand visibility through advanced search engine optimization (SEO), pay-per-click (PPC) advertising, and strategic content marketing.",
      icon: <Search className="w-8 h-8 text-white" />,
      gradient: "from-orange-500 to-orange-600",
      delay: 0.1
    },
    {
      id: 2,
      title: "Web & App Development",
      description: "Crafting high-performing websites and mobile applications designed for seamless user experiences.",
      icon: <Code className="w-8 h-8 text-white" />,
      gradient: "from-emerald-500 to-emerald-600",
      delay: 0.2
    },
    {
      id: 3,
      title: "Technical Infrastructure & IT Solutions",
      description: "Delivering secure and efficient technological frameworks for businesses in need of cutting-edge digital solutions.",
      icon: <Server className="w-8 h-8 text-white" />,
      gradient: "from-violet-500 to-violet-600",
      delay: 0.3
    },
    {
      id: 4,
      title: "Online Business & Brand Setup",
      description: "We involve creating an online presence, including website development, branding, and digital strategies to establish a strong brand.",
      icon: <Building2 className="w-8 h-8 text-white" />,
      gradient: "from-sky-500 to-sky-600",
      delay: 0.4
    },
    {
      id: 5,
      title: "Entrepreneurial Mentorship",
      description: "Providing hands-on coaching and business structuring insights, helping individuals monetize their knowledge and expertise.",
      icon: <Users className="w-8 h-8 text-white" />,
      gradient: "from-red-500 to-red-600",
      delay: 0.5
    },
    {
      id: 6,
      title: "Business & Financial Consulting",
      description: "Guiding clients in building personal and business credit, optimizing trade lines, and leveraging financial literacy to create sustainable wealth.",
      icon: <Calculator className="w-8 h-8 text-white" />,
      gradient: "from-cyan-500 to-cyan-600",
      delay: 0.6
    }
  ];

  useEffect(() => {
    // Create floating particles
    const newParticles: FloatingParticle[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: Math.random() * 10 + 15
      });
    }
    setParticles(newParticles);

    // Mouse move handler
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
      {/* Animated gradient background - Changed from fixed to absolute */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 via-blue-600 to-blue-500 opacity-80" />
      
      {/* Gradient overlay - Changed from fixed to absolute */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-cyan-500/20" />
      
      {/* Floating particles - Changed from fixed to absolute */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-0.5 h-0.5 bg-blue-400/60 rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center pt-16 pb-8 animate-fade-in-down">
          <div className="inline-block bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 px-6 py-2 rounded-full text-sm mb-8 backdrop-blur-md animate-glow">
            What we can do
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent mb-4 leading-tight">
            Services We Can Help You
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-gradient-to-br from-slate-800/80 to-slate-700/60 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-8 hover:border-blue-400/50 transition-all duration-500 cursor-pointer animate-fade-in-up hover:scale-105 hover:-translate-y-2"
              style={{
                animationDelay: `${service.delay}s`,
                transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`
              }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Service icon */}
              <div 
                className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 relative z-10`}
              >
                {service.icon}
              </div>

              {/* Service content */}
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                {service.title}
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm relative z-10">
                {service.description}
              </p>

              {/* Card shine effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 20s infinite linear;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-fade-in-down {
          animation: fade-in-down 1s ease forwards;
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 1s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Services;