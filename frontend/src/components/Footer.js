import Link from 'next/link';
import { servicesData } from '@/data/servicesData';
import { ArrowUpRight, Mail, Phone, MapPin, ShieldCheck, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#030406] border-t border-white/10 text-gray-400 pt-16 pb-12 mt-20 relative overflow-hidden">
      {/* Background ambient gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex flex-col group">
              <span className="text-2xl font-extrabold tracking-wider text-gradient-gold">
                RIYADVI
              </span>
              <span className="text-[9px] tracking-[0.25em] text-gray-400 font-medium uppercase -mt-1">
                Software Technologies
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              A Technology & Digital Solutions Partner — not simply a software development vendor.
              Pioneering high-performance web systems, interactive 3D WebGL experiences, and enterprise AI transformation since 2021.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-medium pt-2">
              <Sparkles className="w-4 h-4" />
              <span>Innovating with AI, 3D & Cloud Architecture</span>
            </div>
          </div>

          {/* Column 1: Services */}
          <div>
            <h4 className="text-xs font-bold text-gray-200 uppercase tracking-widest mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-[#D4AF37] transition-colors flex items-center justify-between group"
                  >
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Case Studies */}
          <div>
            <h4 className="text-xs font-bold text-gray-200 uppercase tracking-widest mb-4">
              Featured Case Studies
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/portfolio/wanaromah" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1">
                  <span>Wanaromah 3D</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">3D</span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio/pearl-housing" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1">
                  <span>Pearl Housing</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20">3D</span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio/laxmi-astro-ai" className="hover:text-[#D4AF37] transition-colors">
                  Laxmi Astro AI
                </Link>
              </li>
              <li>
                <Link href="/portfolio/puratap" className="hover:text-[#D4AF37] transition-colors">
                  Puratap IoT
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-[#D4AF37] hover:underline font-medium text-xs pt-2 inline-block">
                  View All Projects →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Tools */}
          <div>
            <h4 className="text-xs font-bold text-gray-200 uppercase tracking-widest mb-4">
              Tools & Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/business-health-checkup" className="hover:text-[#D4AF37] transition-colors">
                  Business Health Checkup
                </Link>
              </li>
              <li>
                <Link href="/software-project-planning-guide" className="hover:text-[#D4AF37] transition-colors">
                  Project Planning Guide
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4AF37] transition-colors">
                  About Riyadvi
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#D4AF37] transition-colors">
                  Careers & Hiring
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">
                  Tech Insights & Blog
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-gray-400 hover:text-white transition-colors text-xs flex items-center gap-1 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Admin Portal</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2021–2026 Riyadvi Software Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-gray-400 cursor-pointer">Security Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
