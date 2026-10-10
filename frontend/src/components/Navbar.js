'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { servicesData } from '@/data/servicesData';
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Activity,
  BookOpen,
  Globe,
  Smartphone,
  TrendingUp,
  Glasses,
  Box,
  Layout,
} from 'lucide-react';

const iconMap = {
  Globe,
  Smartphone,
  TrendingUp,
  Glasses,
  Box,
  Layout,
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const isActive = (path) => pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050608]/85 backdrop-blur-md border-b border-[#D4AF37]/20 py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex flex-col group">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-wider text-gradient-gold group-hover:opacity-90 transition-opacity">
                RIYADVI
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            </div>
            <span className="text-[9px] tracking-[0.25em] text-gray-400 font-medium uppercase -mt-1 group-hover:text-gray-300 transition-colors">
              Software Technologies
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors py-2 ${
                  pathname.startsWith('/services') ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-white'
                }`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180 text-[#D4AF37]' : ''
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full -left-20 w-[540px] pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="glass-panel rounded-2xl p-4 shadow-2xl border border-[#D4AF37]/30 bg-[#0A0C14]/95 backdrop-blur-xl">
                    <div className="grid grid-cols-2 gap-2">
                      {servicesData.map((service) => {
                        const Icon = iconMap[service.iconName] || Globe;
                        return (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                          >
                            <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover/item:bg-[#D4AF37] group-hover/item:text-black transition-colors shrink-0">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-gray-200 group-hover/item:text-[#D4AF37] transition-colors">
                                {service.title}
                              </p>
                              <p className="text-[11px] text-gray-400 line-clamp-1 mt-0.5">
                                {service.tagline}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs px-2 text-gray-400">
                      <span>Need a custom enterprise solution?</span>
                      <Link
                        href="/services"
                        className="text-[#D4AF37] hover:underline flex items-center gap-1 font-medium"
                      >
                        All Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className={`text-sm font-medium transition-colors ${
                isActive('/portfolio') ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-white'
              }`}
            >
              Portfolio
            </Link>

            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-white'
              }`}
            >
              About
            </Link>

            <Link
              href="/blog"
              className={`text-sm font-medium transition-colors ${
                isActive('/blog') ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-white'
              }`}
            >
              Blog
            </Link>

            <Link
              href="/careers"
              className={`text-sm font-medium transition-colors ${
                isActive('/careers') ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-white'
              }`}
            >
              Careers
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs & Lead Tools */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/business-health-checkup"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <Activity className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Health Checkup</span>
            </Link>

            <Link
              href="/contact"
              className="relative group overflow-hidden px-5 py-2 rounded-full text-xs font-semibold text-black bg-[#D4AF37] hover:bg-[#F3E5AB] transition-colors shadow-lg shadow-[#D4AF37]/20 flex items-center gap-1.5"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-gray-300 hover:text-white bg-white/5 border border-white/10"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#050608]/98 backdrop-blur-2xl border-t border-white/10 p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-lg font-semibold text-gray-100 hover:text-[#D4AF37] py-2 border-b border-white/5"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-lg font-semibold text-gray-100 hover:text-[#D4AF37] py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>Services (All 6)</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </Link>
            <div className="grid grid-cols-2 gap-2 pl-2">
              {servicesData.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="text-xs text-gray-400 hover:text-[#D4AF37] py-1"
                >
                  • {s.title}
                </Link>
              ))}
            </div>
            <Link
              href="/portfolio"
              className="text-lg font-semibold text-gray-100 hover:text-[#D4AF37] py-2 border-b border-white/5"
            >
              Portfolio & 3D Case Studies
            </Link>
            <Link
              href="/about"
              className="text-lg font-semibold text-gray-100 hover:text-[#D4AF37] py-2 border-b border-white/5"
            >
              About Riyadvi
            </Link>
            <Link
              href="/blog"
              className="text-lg font-semibold text-gray-100 hover:text-[#D4AF37] py-2 border-b border-white/5"
            >
              Insights & Blog
            </Link>
            <Link
              href="/careers"
              className="text-lg font-semibold text-gray-100 hover:text-[#D4AF37] py-2 border-b border-white/5"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="text-lg font-semibold text-gray-100 hover:text-[#D4AF37] py-2 border-b border-white/5"
            >
              Contact Us
            </Link>

            <div className="pt-4 flex flex-col gap-2.5">
              <Link
                href="/business-health-checkup"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-[#D4AF37]/30 text-sm font-medium text-gray-200"
              >
                <Activity className="w-4 h-4 text-[#D4AF37]" />
                Business Health Checkup
              </Link>
              <Link
                href="/software-project-planning-guide"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-gray-200"
              >
                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                Download Project Planning Guide
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#D4AF37] text-black font-semibold text-sm shadow-lg shadow-[#D4AF37]/20 mt-2"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
