"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, MessageCircle, CheckCircle } from 'lucide-react';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
  gradient: string;
}

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["helpdesk@digitalmarketmart.com"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 Tech Street", "Digital City, DC 12345"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon-Fri: 9AM - 6PM", "Weekend: By Appointment"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    "Digital Marketing & SEO",
    "Web & App Development", 
    "Technical Infrastructure & IT",
    "Online Business & Brand Setup",
    "Entrepreneurial Mentorship",
    "Business & Financial Consulting"
  ];

  useEffect(() => {
    // Create floating elements
    const elements: FloatingElement[] = [];
    for (let i = 0; i < 15; i++) {
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 15
      });
    }
    setFloatingElements(elements);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 via-blue-800 to-teal-600 opacity-90 animate-gradient-xy bg-[length:400%_400%]" />
      
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-teal-500/10" />
      
      {/* Floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full animate-float-gentle opacity-30"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-35">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="inline-block bg-gradient-to-r from-indigo-500/20 to-teal-500/20 border border-indigo-400/30 px-8 py-3 rounded-full text-indigo-300 font-bold text-lg backdrop-blur-md animate-glow-indigo shadow-lg mb-8">
            Get In Touch
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-white via-indigo-200 to-teal-400 bg-clip-text text-transparent mb-4 leading-tight">
            Let&apos;s Work Together
          </h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our team of experts and let&apos;s discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div 
            className="animate-fade-in-left"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 2}deg) rotateX(${-mousePosition.y * 2}deg)`
            }}
          >
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 backdrop-blur-xl border border-indigo-400/20 rounded-3xl p-8 group hover:border-indigo-400/40 transition-all duration-500 shadow-2xl">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-teal-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <MessageCircle className="w-8 h-8 text-indigo-400 mr-3" />
                  Send us a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12 animate-fade-in-up">
                    <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4 animate-bounce" />
                    <h3 className="text-2xl font-bold text-emerald-400 mb-2">Message Sent!</h3>
                    <p className="text-slate-300">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300 backdrop-blur-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300 backdrop-blur-sm"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300 backdrop-blur-sm"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2">
                          Service Interested In
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300 backdrop-blur-sm"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300 backdrop-blur-sm resize-none"
                        placeholder="Tell us about your project and how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Card shine effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </div>
          </div>

          {/* Contact Information */}
          <div 
            className="space-y-8 animate-fade-in-right"
            style={{
              transform: `perspective(1000px) rotateY(${-mousePosition.x * 2}deg) rotateX(${mousePosition.y * 2}deg)`
            }}
          >
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Globe className="w-8 h-8 text-teal-400 mr-3" />
                Contact Information
              </h2>
              <p className="text-slate-300 text-lg">
                Have questions? We&apos;re here to help. Reach out to us through any of these channels and our team will get back to you promptly.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 backdrop-blur-xl border border-slate-600/30 rounded-2xl p-6 group hover:border-indigo-400/40 hover:scale-105 transition-all duration-300 shadow-lg animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-slate-300 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-indigo-500/20 to-teal-500/20 border border-indigo-400/30 rounded-2xl p-8 backdrop-blur-md mt-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-slate-300 mb-6">
                Schedule a free consultation to discuss your project and discover how we can help transform your business.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  Book Consultation
                </button>
                <button className="border border-teal-400/50 text-teal-400 hover:bg-teal-400/10 font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes glow-indigo {
          0%, 100% {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(99, 102, 241, 0.6);
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

        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animate-gradient-xy {
          animation: gradient-xy 25s ease infinite;
        }

        .animate-glow-indigo {
          animation: glow-indigo 3s ease-in-out infinite;
        }

        .animate-fade-in-down {
          animation: fade-in-down 1s ease forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 1s ease forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease forwards;
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 1s ease forwards;
        }

        .animate-float-gentle {
          animation: float-gentle 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;