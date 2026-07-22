"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
    {
      name: "Mobile App Development",
      href: "/services/mobile-app-development",
    },
    { name: "SEO Optimizer", href: "/services/seo-optimizer" },
    { name: "Growth & Digital Marketing", href: "/services/digital-marketing" },
    {
      name: "AI & Automation Systems",
      href: "/services/ai-automation-systems",
    },
    {
      name: "E-commerce Development",
      href: "/services/e-commerce-development",
    },
    {
      name: "AI Content & Video Creation",
      href: "/services/ai-content-video-creation",
    },
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
                <Link href="#about" className="relative group">
                  <span className="text-slate-100 hover:text-cyan-400 font-medium transition-colors duration-300">
                    About Us
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
                <Link href="/vista" className="relative group">
                  <span className="text-slate-100 hover:text-cyan-400 font-medium transition-colors duration-300">
                    GCC Markets
                  </span>
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
                <a
                  href="https://wa.me/13014786786?text=Hi%20Digital%20Market%20Mart%2C%20I%20am%20interested%20in%20your%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full shadow-lg hover:shadow-green-500/50 hover:scale-110 transition-all duration-300"
                  aria-label="Chat on WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-7 h-7"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.132 1.528 5.874L0 24l6.322-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.002-1.368l-.358-.214-3.724.882.936-3.617-.235-.372A9.818 9.818 0 0112 2.182c5.424 0 9.818 4.394 9.818 9.818 0 5.423-4.394 9.818-9.818 9.818z" />
                  </svg>
                </a>
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
              isMenuOpen
                ? "max-h-[800px] opacity-100 pb-6"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-slate-800/95 to-blue-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-4 mt-4">
              <div className="flex flex-col space-y-2">
                {/* Home */}
                <Link
                  href="/"
                  onClick={closeAll}
                  className="text-slate-200 hover:text-cyan-400 font-medium py-3 px-4 rounded-xl hover:bg-slate-700/30 transition-all duration-200"
                >
                  Home
                </Link>

                {/* About */}
                <Link
                  href="#about"
                  onClick={closeAll}
                  className="text-slate-200 hover:text-cyan-400 font-medium py-3 px-4 rounded-xl hover:bg-slate-700/30 transition-all duration-200"
                >
                  About Us
                </Link>

                {/* Services Dropdown */}
                <div className="w-full">
                  <button
                    onClick={() => toggleDropdown("services-mobile")}
                    className="w-full flex items-center justify-between text-slate-200 hover:text-cyan-400 font-medium py-3 px-4 rounded-xl hover:bg-slate-700/30 transition-all duration-200"
                  >
                    <span>Services</span>

                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === "services-mobile" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

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

                {/* GCC Markets */}
                <Link
                  href="/vista"
                  onClick={closeAll}
                  className="text-slate-200 hover:text-cyan-400 font-medium py-3 px-4 rounded-xl hover:bg-slate-700/30 transition-all duration-200"
                >
                  GCC Markets
                </Link>

                {/* Contact */}
                <Link
                  href="/contact"
                  onClick={closeAll}
                  className="text-slate-200 hover:text-cyan-400 font-medium py-3 px-4 rounded-xl hover:bg-slate-700/30 transition-all duration-200"
                >
                  Contact
                </Link>

                {/* Get Started Button */}
                <div className="pt-4 border-t border-slate-600/30 mt-2">
                  <Link href="/contact" onClick={closeAll}>
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
