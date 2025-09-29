// "use client";
// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

// interface Testimonial {
//   id: number;
//   name: string;
//   role: string;
//   company: string;
//   content: string;
//   rating: number;
//   avatar: string;
//   gradient: string;
// }

// interface FloatingShape {
//   id: number;
//   x: number;
//   y: number;
//   size: number;
//   rotation: number;
//   speed: number;
// }

// const Testimonial: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [shapes, setShapes] = useState<FloatingShape[]>([]);

//   const testimonials: Testimonial[] = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       role: "CEO & Founder",
//       company: "TechStart Solutions",
//       content: "DIGITAL MARKET MART transformed our digital presence completely. Their SEO strategies increased our organic traffic by 300% in just 6 months. The team's expertise in both technical solutions and business growth is unmatched.",
//       rating: 5,
//       avatar: "SJ",
//       gradient: "from-purple-500 to-pink-500"
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       role: "Business Owner",
//       company: "Chen Enterprises",
//       content: "The financial literacy consulting changed everything for my business. They helped me build corporate credit that secured $250K in funding. Their mentorship program is worth every penny - it's an investment that pays for itself.",
//       rating: 5,
//       avatar: "MC",
//       gradient: "from-blue-500 to-cyan-500"
//     },
//     {
//       id: 3,
//       name: "Emily Rodriguez",
//       role: "Marketing Director",
//       company: "Growth Dynamics",
//       content: "Working with DIGITAL MARKET MART was a game-changer. Their web development team created a stunning, high-performing website that converted 40% better than our old site. The ongoing support and technical infrastructure they provide is exceptional.",
//       rating: 5,
//       avatar: "ER",
//       gradient: "from-emerald-500 to-teal-500"
//     },
//     {
//       id: 4,
//       name: "David Williams",
//       role: "Entrepreneur",
//       company: "Williams Ventures",
//       content: "Their entrepreneurial mentorship program gave me the roadmap I needed to scale my business. From business credit strategies to leveraging aged corporations, they taught me insider knowledge that I couldn't find anywhere else.",
//       rating: 5,
//       avatar: "DW",
//       gradient: "from-orange-500 to-red-500"
//     },
//     {
//       id: 5,
//       name: "Lisa Thompson",
//       role: "Startup Founder",
//       company: "InnovateCo",
//       content: "The technical infrastructure solutions they provided scaled with our rapid growth seamlessly. Their proactive approach to IT solutions prevented costly downtime and their team feels like an extension of our company.",
//       rating: 5,
//       avatar: "LT",
//       gradient: "from-indigo-500 to-purple-500"
//     },
//     {
//       id: 6,
//       name: "James Anderson",
//       role: "Business Consultant",
//       company: "Anderson Advisory",
//       content: "DIGITAL MARKET MART comprehensive approach to business and financial consulting is remarkable. They don't just provide services - they become your strategic partner. The results speak for themselves: 200% revenue growth in our first year working together.",
//       rating: 5,
//       avatar: "JA",
//       gradient: "from-pink-500 to-rose-500"
//     }
//   ];

//   useEffect(() => {
//     // Create floating shapes
//     const newShapes: FloatingShape[] = [];
//     for (let i = 0; i < 8; i++) {
//       newShapes.push({
//         id: i,
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         size: Math.random() * 60 + 20,
//         rotation: Math.random() * 360,
//         speed: Math.random() * 20 + 10
//       });
//     }
//     setShapes(newShapes);

//     // Auto-slide testimonials
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 6000);

//     // Mouse move handler
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 2 - 1,
//         y: (e.clientY / window.innerHeight) * 2 - 1
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       clearInterval(interval);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//   };

//   const goToTestimonial = (index: number) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="min-h-screen bg-slate-900 text-white overflow-hidden relative" id="testimonial">
//       {/* Animated gradient background */}
//       <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 via-blue-800 to-cyan-600 opacity-90 animate-gradient-xy bg-[length:400%_400%]" />
      
//       {/* Gradient overlay */}
//       <div className="fixed inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10" />
      
//       {/* Floating shapes */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden">
//         {shapes.map((shape, index) => (
//           <div
//             key={shape.id}
//             className={`absolute opacity-10 ${
//               index % 3 === 0 ? 'text-purple-400' : index % 3 === 1 ? 'text-blue-400' : 'text-cyan-400'
//             }`}
//             style={{
//               left: `${shape.x}%`,
//               top: `${shape.y}%`,
//               fontSize: `${shape.size}px`,
//               transform: `rotate(${shape.rotation}deg)`,
//               animation: `float-shape ${shape.speed}s ease-in-out infinite alternate`
//             }}
//           >
//             {index % 4 === 0 ? '★' : index % 4 === 1 ? '♦' : index % 4 === 2 ? '●' : '▲'}
//           </div>
//         ))}
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         {/* Header */}
//         <div className="text-center mb-16 animate-fade-in-down">
//           <div className="inline-block bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 px-8 py-3 rounded-full text-purple-300 font-bold text-lg backdrop-blur-md animate-glow-purple shadow-lg mb-8">
//             Client Testimonials
//           </div>
//           <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight">
//             What Our Clients Say
//           </h2>
//           <p className="text-slate-300 text-xl max-w-3xl mx-auto">
//             Discover how we&apos;ve transformed businesses and empowered entrepreneurs to achieve their goals
//           </p>
//         </div>

//         {/* Main testimonial display */}
//         <div className="max-w-6xl mx-auto mb-16">
//           <div 
//             className="relative bg-gradient-to-br from-slate-800/80 to-slate-700/60 backdrop-blur-xl border border-purple-400/20 rounded-3xl p-8 md:p-12 group hover:scale-105 transition-all duration-500 shadow-2xl animate-fade-in-up"
//             style={{
//               transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`
//             }}
//           >
//             {/* Background glow */}
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
//             {/* Quote icon */}
//             <div className="absolute top-8 left-8 text-purple-400/30 group-hover:text-purple-400/50 transition-colors duration-300">
//               <Quote size={48} />
//             </div>

//             {/* Stars rating */}
//             <div className="flex justify-center mb-8 relative z-10">
//               {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className="w-6 h-6 text-yellow-400 fill-current animate-pulse"
//                   style={{ animationDelay: `${i * 0.1}s` }}
//                 />
//               ))}
//             </div>

//             {/* Testimonial content */}
//             <blockquote className="text-center relative z-10">
//               <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-8 font-light">
//                 {testimonials[currentIndex].content}
//               </p>
              
//               {/* Author info */}
//               <div className="flex items-center justify-center space-x-4">
//                 <div 
//                   className={`w-16 h-16 bg-gradient-to-r ${testimonials[currentIndex].gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
//                 >
//                   {testimonials[currentIndex].avatar}
//                 </div>
//                 <div className="text-left">
//                   <h4 className="text-xl font-bold text-white">
//                     {testimonials[currentIndex].name}
//                   </h4>
//                   <p className="text-purple-300">
//                     {testimonials[currentIndex].role}
//                   </p>
//                   <p className="text-slate-400 text-sm">
//                     {testimonials[currentIndex].company}
//                   </p>
//                 </div>
//               </div>
//             </blockquote>

//             {/* Navigation arrows */}
//             <button
//               onClick={prevTestimonial}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/30 rounded-full p-3 text-white hover:from-purple-500/40 hover:to-purple-600/40 transition-all duration-300 backdrop-blur-md group-hover:scale-110"
//             >
//               <ChevronLeft size={24} />
//             </button>
            
//             <button
//               onClick={nextTestimonial}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border border-cyan-400/30 rounded-full p-3 text-white hover:from-cyan-500/40 hover:to-cyan-600/40 transition-all duration-300 backdrop-blur-md group-hover:scale-110"
//             >
//               <ChevronRight size={24} />
//             </button>

//             {/* Card shine effect */}
//             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
//           </div>
//         </div>

//         {/* Testimonial dots */}
//         <div className="flex justify-center space-x-3 mb-12">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToTestimonial(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentIndex
//                   ? 'bg-gradient-to-r from-purple-400 to-cyan-400 scale-125'
//                   : 'bg-slate-600 hover:bg-slate-500'
//               }`}
//             />
//           ))}
//         </div>

//         {/* Statistics */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//           <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
//             <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
//               500+
//             </div>
//             <div className="text-slate-400">Happy Clients</div>
//           </div>
          
//           <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
//             <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
//               99%
//             </div>
//             <div className="text-slate-400">Success Rate</div>
//           </div>
          
//           <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
//             <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
//               $50M+
//             </div>
//             <div className="text-slate-400">Funding Secured</div>
//           </div>
          
//           <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
//             <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
//               5★
//             </div>
//             <div className="text-slate-400">Average Rating</div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes gradient-xy {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }

//         @keyframes glow-purple {
//           0%, 100% {
//             box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
//           }
//           50% {
//             box-shadow: 0 0 40px rgba(147, 51, 234, 0.6);
//           }
//         }

//         @keyframes fade-in-down {
//           from {
//             opacity: 0;
//             transform: translateY(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes float-shape {
//           0% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           100% {
//             transform: translateY(-20px) rotate(10deg);
//           }
//         }

//         .animate-gradient-xy {
//           animation: gradient-xy 20s ease infinite;
//         }

//         .animate-glow-purple {
//           animation: glow-purple 3s ease-in-out infinite;
//         }

//         .animate-fade-in-down {
//           animation: fade-in-down 1s ease forwards;
//         }

//         .animate-fade-in-up {
//           opacity: 0;
//           animation: fade-in-up 1s ease forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Testimonial;