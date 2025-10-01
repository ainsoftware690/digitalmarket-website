"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Bell, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        // Only close desktop dropdown
        if (activeDropdown === "services") {
          setActiveDropdown(null);
        }
      }
    };

    if (activeDropdown === "services") {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const services = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
    { name: "SEO Optimizer", href: "/services/seo-optimizer" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
  ];

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
            {/* Logo */}
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="relative flex items-center">
                <Link href="/" className="flex items-center h-12 sm:h-16">
                  <Image
                    src="/images/logo.png"
                    alt="digital Logo"
                    width={150}
                    height={70}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </Link>
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
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => toggleDropdown("services")}
                    className="flex items-center text-slate-100 hover:text-cyan-400 font-medium transition-colors duration-300 group"
                  >
                    Services
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === "services" ? "rotate-180" : ""
                      }`}
                    />
                    <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-full transition-all duration-300"></div>
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === "services" && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-gradient-to-br from-slate-800/95 to-blue-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/20 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="p-2">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            onClick={closeDropdown}
                            className="block px-4 py-3 rounded-xl text-slate-200 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-200 font-medium"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
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
                className="p-2 sm:p-3 bg-gradient-to-r from-slate-700/50 to-blue-800/50 hover:from-cyan-600/20 hover:to-teal-600/20 rounded-xl backdrop-blur-sm border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-500 overflow-hidden ${
              isMenuOpen ? "max-h-[800px] opacity-100 pb-6" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-slate-800/95 to-blue-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-4 mt-4">
              <div className="flex flex-col space-y-2">
                <Link
                  href="/"
                  onClick={closeAll}
                  className="text-slate-200 hover:text-cyan-400 font-medium py-3 px-4 rounded-xl hover:bg-slate-700/30 transition-all duration-200"
                >
                  Home
                </Link>

                {/* Mobile Services Dropdown */}
                <div className="w-full">
                  <button
                    onClick={() => toggleDropdown("services-mobile")}
                    className="w-full flex items-center justify-between text-slate-200 hover:text-cyan-400 font-medium py-3 px-4 rounded-xl hover:bg-slate-700/30 transition-all duration-200"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${
                        activeDropdown === "services-mobile" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  
                  {/* Mobile Services Submenu */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      activeDropdown === "services-mobile"
                        ? "max-h-96 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-2 space-y-1 bg-slate-700/20 rounded-xl p-2">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          onClick={closeAll}
                          className="block text-slate-300 hover:text-cyan-400 py-2.5 px-4 rounded-lg hover:bg-slate-700/50 transition-all duration-200 text-sm"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href="#testimonial"
                  onClick={closeAll}
                  className="text-slate-200 hover:text-cyan-400 font-medium py-3 px-4 rounded-xl hover:bg-slate-700/30 transition-all duration-200"
                >
                  Blogs
                </Link>
                
                <Link
                  href="/contact"
                  onClick={closeAll}
                  className="text-slate-200 hover:text-cyan-400 font-medium py-3 px-4 rounded-xl hover:bg-slate-700/30 transition-all duration-200"
                >
                  Contact
                </Link>
                
                <Link href="/" onClick={closeAll}>
                  <div className="pt-4 border-t border-slate-600/30 mt-2">
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