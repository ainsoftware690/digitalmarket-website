"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Bell, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gradient-to-r from-blue-900 via-blue-900/95 to-indigo-900/95 backdrop-blur-xl shadow-2xl border-b border-cyan-500/20"
            : "bg-gradient-to-r from-blue-900 via-blue-900/80 to-indigo-900/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:py-6">
            {/* ✅ Logo - Bigger & clearly visible */}
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="relative flex items-center">
                <Link href="/" className="flex items-center h-16">
                  <Image
                    src="/images/logo.png"
                  alt="digital Logo"
                    width={150}    
                    height={70}    
                    className=" object-contain transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </Link>
                {/* <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-full transition-all duration-300"></div> */}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-8">
                <Link href="/" className="relative group">
                  <span className="text-slate-100 hover:text-cyan-400 font-medium transition-colors duration-300">
                    Home
                  </span>
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-full transition-all duration-300"></div>
                </Link>

                {/* Services Dropdown */}
                <div className="relative group">
                  <button
                    onClick={() => toggleDropdown("services")}
                    className="flex items-center text-slate-100 hover:text-cyan-400 font-medium transition-colors duration-300"
                  >
                    Services
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-full transition-all duration-300"></div>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 bg-gradient-to-br from-slate-800/95 to-blue-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/20 overflow-hidden transition-all duration-300 ${
                      activeDropdown === "services"
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-2"
                    }`}
                  >
                    <div className="p-2">
                      {[
                        "Web Development",
                        "Mobile Apps",
                        "Cloud Solutions",
                        "AI & ML",
                        "Cybersecurity",
                        "SEO & Digital Marketing",
                        "IT Solutions",
                        "Strategic Consulting", 

                      ].map((service, index) => (
                        <Link
                          key={index}
                          href={`#${service.toLowerCase().replace(" ", "-")}`}
                          className="block px-4 py-3 rounded-xl text-slate-200 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-200 font-medium"
                        >
                          {service}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link href="#testimonial" className="relative group">
                  <span className="text-slate-100 hover:text-cyan-400 font-medium transition-colors duration-300">
                    Blogs
                  </span>
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-full transition-all duration-300"></div>
                </Link>

                <Link href="/contact" className="relative group">
                  <span className="text-slate-100 hover:text-cyan-400 font-medium transition-colors duration-300">
                    Contact
                  </span>
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-full transition-all duration-300"></div>
                </Link>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4 ml-8">
                <button className="relative p-3 bg-gradient-to-r from-slate-700/50 to-blue-800/50 hover:from-cyan-600/20 hover:to-teal-600/20 rounded-xl backdrop-blur-sm border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300 group">
                  <Bell className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-400 to-pink-500 rounded-full animate-pulse"></div>
                </button>

                <button className="p-3 bg-gradient-to-r from-cyan-600/20 to-teal-600/20 hover:from-cyan-500/30 hover:to-teal-500/30 rounded-xl backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 group">
                  <User className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                </button>
                 <Link href="/">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300">
                  Get Started
                </button>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 bg-gradient-to-r from-slate-700/50 to-blue-800/50 hover:from-cyan-600/20 hover:to-teal-600/20 rounded-xl backdrop-blur-sm border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-slate-300" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-500 overflow-hidden ${
              isMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-slate-800/95 to-blue-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-4 mt-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-slate-200 hover:text-cyan-400 font-medium py-2 px-4 rounded-xl hover:bg-slate-700/30 transition-all duration-200"
                >
                  Home
                </Link>
                <Link
                  href="/service"
                  className="text-slate-200 hover:text-cyan-400 font-medium py-2 px-4 rounded-xl hover:bg-slate-700/30 transition-all duration-200"
                >
                  Services
                </Link>
                <Link
                  href="#testimonial"
                  className="text-slate-200 hover:text-cyan-400 font-medium py-2 px-4 rounded-xl hover:bg-slate-700/30 transition-all duration-200"
                >
                  Blogs
                </Link>
                <Link
                  href="/contact"
                  className="text-slate-200 hover:text-cyan-400 font-medium py-2 px-4 rounded-xl hover:bg-slate-700/30 transition-all duration-200"
                >
                  Contact
                </Link>
                 <Link href="/">
                <div className="pt-4 border-t border-slate-600/30">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                    Get Started
                  </button>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
