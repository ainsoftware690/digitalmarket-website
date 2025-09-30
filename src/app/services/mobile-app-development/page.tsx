"use client";
import React, { useState } from 'react';
import { Smartphone, Zap, Shield, Users, Code, Rocket, ChevronRight, Star, Apple, MonitorSmartphone, Layers } from 'lucide-react';
import Link from 'next/link';

type TabType = 'ios' | 'android' | 'crossPlatform';

export default function MobileAppDevelopment() {
  const [activeTab, setActiveTab] = useState<TabType>('ios');

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Performance",
      description: "Optimized for speed with smooth animations and instant response times"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols to protect user data"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User-Centric Design",
      description: "Intuitive interfaces that users love, backed by UX research"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Architecture",
      description: "Scalable, maintainable code following industry best practices"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Cross-Platform Ready",
      description: "Build once, deploy everywhere - iOS, Android, and beyond"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Rapid Development",
      description: "Agile methodology for faster time-to-market and iterations"
    }
  ];

  const technologies: Record<TabType, string[]> = {
    ios: ['Swift', 'SwiftUI', 'Objective-C', 'Core Data', 'CloudKit', 'UIKit'],
    android: ['Kotlin', 'Jetpack Compose', 'Java', 'Room Database', 'Firebase', 'Material Design'],
    crossPlatform: ['React Native', 'Flutter', 'Xamarin', 'Ionic', 'Expo', 'Cordova']
  };

  const services = [
    {
      title: "iOS App Development",
      description: "Native iPhone and iPad applications built with Swift and SwiftUI",
      icon: <Apple className="w-8 h-8" />
    },
    {
      title: "Android App Development",
      description: "Powerful Android apps using Kotlin and latest Android SDK",
      icon: <MonitorSmartphone className="w-8 h-8" />
    },
    {
      title: "Cross-Platform Development",
      description: "Cost-effective solutions with React Native and Flutter",
      icon: <Layers className="w-8 h-8" />
    }
  ];

  const process = [
    { step: "01", title: "Discovery & Planning", description: "Understanding your vision and defining project scope" },
    { step: "02", title: "Design & Prototype", description: "Creating wireframes and interactive prototypes" },
    { step: "03", title: "Development", description: "Agile development with regular updates" },
    { step: "04", title: "Testing & QA", description: "Rigorous testing across devices and scenarios" },
    { step: "05", title: "Launch & Support", description: "App store deployment and ongoing maintenance" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Digital Mart transformed our app idea into reality. User engagement increased by 300% within the first month!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateHub",
      content: "Professional, timely, and innovative. The best mobile development team we've worked with. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, HealthPlus",
      content: "They truly understood our healthcare app needs. The attention to detail and security implementation is outstanding.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-cyan-500 bg-opacity-20 border border-cyan-500 border-opacity-30 px-4 py-2 mt-16 rounded-full text-cyan-300 text-sm">
                <Smartphone className="w-4 h-4" />
                Mobile App Development
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Build Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Mobile Apps</span> That Scale
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Transform your ideas into stunning mobile experiences. We create intuitive, high-performance apps for iOS, Android, and cross-platform that users love and businesses trust.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact"
                 className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 group">
                  Get Started Today
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href = "/"
                 className="border-2 border-gray-600 px-8 py-4 rounded-lg font-semibold hover:bg-white hover:bg-opacity-5 transition-all duration-300">
                  View Portfolio
                 </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">150+</div>
                  <div className="text-gray-400 text-sm">Apps Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">95%</div>
                  <div className="text-gray-400 text-sm">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">50+</div>
                  <div className="text-gray-400 text-sm">Happy Clients</div>
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
                          <Smartphone className="w-7 h-7" />
                        </div>
                        <div>
                          <div className="h-3 w-32 bg-gray-700 rounded mb-2"></div>
                          <div className="h-2 w-24 bg-gray-800 rounded"></div>
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                    </div>
                    
                    <div className="h-48 bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-500 rounded-2xl shadow-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-white opacity-10"></div>
                      <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full opacity-20"></div>
                      <div className="absolute bottom-4 right-4 w-24 h-24 bg-white rounded-full opacity-10"></div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl"></div>
                      <div className="h-20 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl shadow-lg"></div>
                      <div className="h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-slate-900 bg-opacity-50">
        <div className="max-w-7xl mx-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Mobile Development Services</h2>
            <p className="text-xl text-gray-400">Choose the perfect platform for your app</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Digital Mart</h2>
            <p className="text-xl text-gray-400">Excellence in every aspect of mobile development</p>
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

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-slate-900 bg-opacity-50">
        <div className="max-w-7xl mx-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technologies We Master</h2>
            <p className="text-xl text-gray-400">Cutting-edge tools and frameworks</p>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-gray-700 p-8 md:p-12">
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <button 
                onClick={() => setActiveTab('ios')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'ios' 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30' 
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
              >
                iOS Development
              </button>
              <button 
                onClick={() => setActiveTab('android')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'android' 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30' 
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
              >
                Android Development
              </button>
              <button 
                onClick={() => setActiveTab('crossPlatform')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'crossPlatform' 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30' 
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
              >
                Cross-Platform
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {technologies[activeTab].map((tech: string, idx: number) => (
                <div 
                  key={idx}
                  className="bg-slate-700 bg-opacity-50 p-5 rounded-xl text-center hover:bg-opacity-70 hover:scale-105 transition-all duration-300 border border-gray-600 hover:border-cyan-500"
                >
                  <span className="font-semibold text-gray-200">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-400">From concept to launch, we&apos;ve got you covered</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="text-5xl font-bold text-cyan-500 mb-4 opacity-50">{item.step}</div>
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

      {/* Testimonials */}
      <section className="py-20 px-4 bg-slate-900 bg-opacity-50">
        <div className="max-w-7xl mx-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-400">Trusted by businesses worldwide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">{testimonial.content}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Dream App?</h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Let&apos;s transform your vision into a powerful mobile application. Schedule a free consultation with our experts today!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href = "/contact"
                 className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Get Free Consultation
                
                </Link>
                <button className="border-2 border-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}