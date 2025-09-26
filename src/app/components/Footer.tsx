"use client";
import { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const services = [
    'Interface Design',
    'SEO Optimizer', 
    'Digital Marketing',
    'Market Monitor',
    'Graphic Design'
  ];

  const importantLinks = [
    'Contact',
    'Privacy Policy',
    'Refund Policy',
    'Terms and Conditions'
  ];

  const recentPosts = [
    {
      title: 'How Wireless Technology more Changing Business',
      date: 'December 8, 2024'
    },
    {
      title: '5 Ways Technology Today at Improved Business',
      date: 'December 6, 2024'
    }
  ];

  const socialIcons = [
    { icon: Facebook, color: 'hover:text-blue-400' },
    { icon: Twitter, color: 'hover:text-sky-400' },
    { icon: Instagram, color: 'hover:text-pink-400' },
    { icon: Youtube, color: 'hover:text-red-400' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      {isClient && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-60 right-20 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
        </div>
      )}

      {/* Grid Pattern Overlay */}
      {isClient && (
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 tracking-tight">
            Latest App Updates
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            With a focus on quality, scalability, and creativity, we help your app make a lasting
            impression and achieve measurable success in the ever-changing digital landscape.
          </p>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 group">
              <div className="flex-shrink-0 group cursor-pointer mb-3">
              <div className="relative flex items-center">
                <Link href="/" className="flex items-center h-16 ">
                  <Image
                    src="/images/logo.png"
                  alt="FrntIn Logo"
                    width={150}    
                    height={70}    
                    className=" object-contain transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </Link>
              </div>
            </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 group/item hover:bg-white/5 rounded-xl p-3 -m-3 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover/item:text-white transition-colors">
                    8206 Louisiana Blvd, NE, STE A1177,<br />
                    Albuquerque, NM, 87113
                  </p>
                </div>
                
                <div className="flex items-center space-x-4 group/item cursor-pointer hover:bg-white/5 rounded-xl p-3 -m-3 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  
                  <p className="text-gray-300 hover:text-white transition-colors group-hover/item:text-white">+1 (505) 528-0372</p>
                </div>
                
                <div className="flex items-center space-x-4 group/item cursor-pointer hover:bg-white/5 rounded-xl p-3 -m-3 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300 hover:text-white transition-colors text-sm break-all group-hover/item:text-white">
                    helpdesk@digitalmarketmart.com
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-3 mt-8">
                {socialIcons.map((social, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center cursor-pointer border border-white/30 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-white hover:text-cyan-300 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 h-full group">
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8 flex items-center group-hover:scale-105 transition-transform duration-300">
                Our Services
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full ml-4"></div>
              </h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="group/service">
                    <div className="flex items-center space-x-4 cursor-pointer hover:bg-white/5 rounded-xl p-3 -m-3 transition-all duration-300">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-lg flex items-center justify-center border border-cyan-400/30 group-hover/service:scale-110 group-hover/service:border-cyan-400/50 transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-cyan-400 group-hover/service:translate-x-0.5 transition-transform" />
                      </div>
                      <span className="text-gray-300 group-hover/service:text-white font-medium transition-colors">{service}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Important Links */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-purple-400/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 h-full group">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 flex items-center group-hover:scale-105 transition-transform duration-300">
                Important Links
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full ml-4"></div>
              </h3>
              <ul className="space-y-4">
                {importantLinks.map((link, index) => (
                  <li key={index} className="group/link">
                    <div className="flex items-center space-x-4 cursor-pointer hover:bg-white/5 rounded-xl p-3 -m-3 transition-all duration-300">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-lg flex items-center justify-center border border-purple-400/30 group-hover/link:scale-110 group-hover/link:border-purple-400/50 transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-purple-400 group-hover/link:translate-x-0.5 transition-transform" />
                      </div>
                      <span className="text-gray-300 group-hover/link:text-white font-medium transition-colors">{link}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-emerald-400/30 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 h-full group">
              <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-8 flex items-center group-hover:scale-105 transition-transform duration-300">
                Recent Posts
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full ml-4"></div>
              </h3>
              <div className="space-y-6">
                {recentPosts.map((post, index) => (
                  <div key={index} className="group/post cursor-pointer">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/20 hover:border-emerald-400/40 hover:bg-white/15 hover:shadow-lg hover:shadow-emerald-500/20 transform hover:scale-105 transition-all duration-300">
                      <h4 className="text-white font-semibold text-sm leading-relaxed group-hover/post:text-emerald-300 transition-colors mb-3">
                        {post.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-400 text-xs font-medium">{post.date}</p>
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full flex items-center justify-center border border-emerald-400/30 group-hover/post:scale-110 group-hover/post:border-emerald-400/50 transition-all duration-300">
                          <ExternalLink className="w-3 h-3 text-emerald-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm font-medium">
              © 2025 DigitalMarketMart. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              {/* <span className="text-gray-300 text-sm font-medium">Built with ❤️ using Next.js & Tailwind CSS</span> */}
              {isClient && (
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/20 to-purple-900/30 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;