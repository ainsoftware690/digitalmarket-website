"use client";
import React, { useState, useEffect } from 'react';

interface FloatingGear {
  id: number;
  size: number;
  x: number;
  y: number;
  rotation: number;
  speed: number;
}

const Financial: React.FC = () => {
  const [gears, setGears] = useState<FloatingGear[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Create floating gears
    const newGears: FloatingGear[] = [];
    for (let i = 0; i < 6; i++) {
      newGears.push({
        id: i,
        size: Math.random() * 30 + 20,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: 0,
        speed: Math.random() * 2 + 1
      });
    }
    setGears(newGears);

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
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden relative">
      {/* Animated gradient background - Changed from fixed to absolute */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 via-amber-600 to-yellow-500 opacity-80" />
      
      {/* Gradient overlay - Changed from fixed to absolute */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-yellow-500/10" />
      
      {/* Floating gears background - Changed from fixed to absolute */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {gears.map((gear) => (
          <div
            key={gear.id}
            className="absolute opacity-5 text-amber-400 animate-spin-slow"
            style={{
              left: `${gear.x}%`,
              top: `${gear.y}%`,
              fontSize: `${gear.size}px`,
              animationDuration: `${10 + gear.speed}s`,
              animationDirection: gear.id % 2 === 0 ? 'normal' : 'reverse'
            }}
          >
            ⚙️
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div 
            className="space-y-8 animate-fade-in-left"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 2}deg) rotateX(${-mousePosition.y * 2}deg)`
            }}
          >
            <div className="inline-block bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/30 px-8 py-3 rounded-full text-amber-300 font-bold text-lg backdrop-blur-md animate-glow-amber shadow-lg">
              Financial Literacy & Business Credit Education
            </div>
            
            <div className="space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed">
                Beyond tech solutions, <span className="text-amber-400 font-semibold">DIGITAL MARKET MART</span> is a trusted resource for financial empowerment. We educate individuals and business owners on personal and business credit building, leveraging aged corporations, and utilizing financial strategies to maximize funding and growth opportunities.
              </p>
              
              <p className="text-slate-300 text-lg leading-relaxed">
                Our consulting services ensure that clients not only understand credit systems but can also apply them effectively to scale their ventures.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/40 backdrop-blur-md border border-amber-400/20 rounded-xl p-4 hover:border-amber-400/40 transition-all duration-300 group">
                <div className="text-amber-400 font-semibold mb-2 group-hover:text-amber-300">💳 Credit Building</div>
                <div className="text-slate-300 text-sm">Personal & business credit optimization</div>
              </div>
              
              <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/40 backdrop-blur-md border border-amber-400/20 rounded-xl p-4 hover:border-amber-400/40 transition-all duration-300 group">
                <div className="text-amber-400 font-semibold mb-2 group-hover:text-amber-300">🏢 Corporate Strategies</div>
                <div className="text-slate-300 text-sm">Leveraging aged corporations effectively</div>
              </div>
              
              <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/40 backdrop-blur-md border border-amber-400/20 rounded-xl p-4 hover:border-amber-400/40 transition-all duration-300 group">
                <div className="text-amber-400 font-semibold mb-2 group-hover:text-amber-300">💰 Funding Solutions</div>
                <div className="text-slate-300 text-sm">Maximize growth opportunities</div>
              </div>
              
              <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/40 backdrop-blur-md border border-amber-400/20 rounded-xl p-4 hover:border-amber-400/40 transition-all duration-300 group">
                <div className="text-amber-400 font-semibold mb-2 group-hover:text-amber-300">📊 Financial Strategies</div>
                <div className="text-slate-300 text-sm">Comprehensive consulting services</div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div 
            className="relative animate-fade-in-right"
            style={{
              transform: `perspective(1000px) rotateY(${-mousePosition.x * 3}deg) rotateX(${mousePosition.y * 3}deg)`
            }}
          >
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-700/60 backdrop-blur-xl border border-amber-400/20 rounded-3xl p-8 group hover:scale-105 transition-all duration-500 shadow-2xl">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Team collaboration illustration */}
              <div className="relative z-10 h-96 flex items-center justify-center">
                <svg viewBox="0 0 600 400" className="w-full h-full">
                  {/* Hanging lights */}
                  <ellipse cx="200" cy="30" rx="25" ry="15" fill="#6366f1" opacity="0.8" className="animate-pulse" />
                  <ellipse cx="400" cy="30" rx="25" ry="15" fill="#6366f1" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <rect x="198" y="15" width="4" height="30" fill="#475569" />
                  <rect x="398" y="15" width="4" height="30" fill="#475569" />
                  
                  {/* Floating gears */}
                  <g className="animate-spin-slow" style={{ transformOrigin: '480px 80px', animationDuration: '15s' }}>
                    <circle cx="480" cy="80" r="20" fill="none" stroke="#06b6d4" strokeWidth="3" opacity="0.7" />
                    <circle cx="480" cy="80" r="4" fill="#06b6d4" />
                    <rect x="476" y="60" width="8" height="8" fill="#06b6d4" />
                    <rect x="476" y="92" width="8" height="8" fill="#06b6d4" />
                    <rect x="464" y="76" width="8" height="8" fill="#06b6d4" />
                    <rect x="488" y="76" width="8" height="8" fill="#06b6d4" />
                  </g>
                  
                  <g className="animate-spin-slow" style={{ transformOrigin: '520px 130px', animationDuration: '12s', animationDirection: 'reverse' }}>
                    <circle cx="520" cy="130" r="15" fill="none" stroke="#06b6d4" strokeWidth="3" opacity="0.5" />
                    <circle cx="520" cy="130" r="3" fill="#06b6d4" />
                    <rect x="517" y="115" width="6" height="6" fill="#06b6d4" />
                    <rect x="517" y="139" width="6" height="6" fill="#06b6d4" />
                    <rect x="508" y="127" width="6" height="6" fill="#06b6d4" />
                    <rect x="526" y="127" width="6" height="6" fill="#06b6d4" />
                  </g>
                  
                  <g className="animate-spin-slow" style={{ transformOrigin: '460px 180px', animationDuration: '18s' }}>
                    <circle cx="460" cy="180" r="12" fill="none" stroke="#06b6d4" strokeWidth="2" opacity="0.4" />
                    <circle cx="460" cy="180" r="2" fill="#06b6d4" />
                    <rect x="458" y="168" width="4" height="4" fill="#06b6d4" />
                    <rect x="458" y="188" width="4" height="4" fill="#06b6d4" />
                    <rect x="450" y="178" width="4" height="4" fill="#06b6d4" />
                    <rect x="466" y="178" width="4" height="4" fill="#06b6d4" />
                  </g>
                  
                  {/* Desk */}
                  <ellipse cx="300" cy="350" rx="180" ry="30" fill="#475569" opacity="0.8" />
                  <rect x="120" y="320" width="360" height="20" rx="10" fill="#64748b" />
                  
                  {/* Laptop */}
                  <rect x="250" y="290" width="100" height="60" rx="5" fill="#1e293b" />
                  <rect x="255" y="295" width="90" height="50" rx="3" fill="#0f172a" />
                  <rect x="260" y="300" width="80" height="30" rx="2" fill="#3b82f6" opacity="0.8" />
                  
                  {/* Chairs */}
                  <ellipse cx="150" cy="380" rx="25" ry="8" fill="#475569" opacity="0.6" />
                  <rect x="125" y="250" width="50" height="130" rx="25" fill="#6366f1" opacity="0.8" />
                  
                  <ellipse cx="450" cy="380" rx="25" ry="8" fill="#475569" opacity="0.6" />
                  <rect x="425" y="250" width="50" height="130" rx="25" fill="#8b5cf6" opacity="0.8" />
                  
                  <ellipse cx="300" cy="380" rx="25" ry="8" fill="#475569" opacity="0.6" />
                  <rect x="275" y="250" width="50" height="130" rx="25" fill="#06b6d4" opacity="0.8" />
                  
                  {/* People */}
                  {/* Person 1 - Purple shirt */}
                  <ellipse cx="150" cy="200" rx="20" ry="25" fill="#6366f1" />
                  <circle cx="150" cy="160" r="18" fill="#fbbf24" />
                  <rect x="140" y="170" width="20" height="15" rx="3" fill="#1f2937" />
                  <ellipse cx="150" cy="220" rx="12" ry="8" fill="#fbbf24" />
                  
                  {/* Person 2 - Yellow shirt (handshaking) */}
                  <ellipse cx="300" cy="200" rx="20" ry="25" fill="#fbbf24" />
                  <circle cx="300" cy="160" r="18" fill="#f59e0b" />
                  <rect x="290" y="170" width="20" height="15" rx="3" fill="#1f2937" />
                  
                  {/* Person 3 - Blue shirt */}
                  <ellipse cx="450" cy="200" rx="20" ry="25" fill="#06b6d4" />
                  <circle cx="450" cy="160" r="18" fill="#fbbf24" />
                  <rect x="440" y="170" width="20" height="15" rx="3" fill="#1f2937" />
                  
                  {/* Handshake */}
                  <ellipse cx="225" cy="190" rx="8" ry="6" fill="#fbbf24" className="animate-pulse" />
                  <ellipse cx="225" cy="190" rx="6" ry="4" fill="#f59e0b" className="animate-pulse" />
                  
                  {/* Connecting lines with animation */}
                  <path d="M 170 190 Q 200 180 225 190" stroke="#06b6d4" strokeWidth="3" fill="none" opacity="0.6" strokeDasharray="5,5" className="animate-pulse" />
                  <path d="M 280 190 Q 250 180 225 190" stroke="#06b6d4" strokeWidth="3" fill="none" opacity="0.6" strokeDasharray="5,5" className="animate-pulse" />
                  
                  {/* Success indicators */}
                  <circle cx="180" cy="120" r="6" fill="#10b981" className="animate-bounce" />
                  <text x="185" y="125" fill="#10b981" fontSize="8" fontWeight="bold">✓</text>
                  
                  <circle cx="420" cy="120" r="6" fill="#10b981" className="animate-bounce" style={{ animationDelay: '0.5s' }} />
                  <text x="425" y="125" fill="#10b981" fontSize="8" fontWeight="bold">✓</text>
                </svg>
              </div>

              {/* Card shine effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes glow-amber {
          0%, 100% {
            box-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(245, 158, 11, 0.6);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-glow-amber {
          animation: glow-amber 3s ease-in-out infinite;
        }

        .animate-fade-in-left {
          animation: fade-in-left 1s ease forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Financial;