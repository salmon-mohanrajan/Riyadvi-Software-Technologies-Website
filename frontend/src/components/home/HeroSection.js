'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroScene from '@/components/3d/HeroScene';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-6rem)] flex items-center overflow-hidden py-12 lg:py-0">
      {/* Ambient background glow circles */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Action Triggers (Section 11) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D4AF37]/30 text-xs text-gray-300">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Technology & Digital Solutions Partner — Since 2021</span>
            </div>

            {/* Primary Headline (Section 11) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Custom Software &{' '}
              <span className="text-gradient-gold block sm:inline">Digital Solutions</span>{' '}
              to Grow Your Business
            </h1>

            {/* Supporting Text (Section 11) */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Web & App Development, UI/UX Design, and Business Strategy – all tailored to your
              needs. We combine immersive 3D experiences with resilient full-stack architecture.
            </p>

            {/* CTAs (Section 11) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D4AF37] hover:bg-[#F3E5AB] text-black font-bold text-sm tracking-wide shadow-xl shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/40 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Our Solutions</span>
              </Link>
            </div>

            {/* Trust Metrics Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-2xl font-bold text-white text-gradient-gold">2021</p>
                <p className="text-xs text-gray-400 mt-0.5">Founded & Growing</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white text-gradient-gold">50+</p>
                <p className="text-xs text-gray-400 mt-0.5">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white text-gradient-gold">99.4%</p>
                <p className="text-xs text-gray-400 mt-0.5">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Canvas (Section 11) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 h-[440px] sm:h-[500px] lg:h-[580px] w-full relative flex items-center justify-center"
          >
            <div className="w-full h-full rounded-3xl overflow-hidden glass-panel border border-[#D4AF37]/20 relative">
              <HeroScene />
              {/* Interaction Hint */}
              <div className="absolute bottom-4 right-4 z-20 pointer-events-none text-[11px] text-gray-400/80 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
                <span>Move cursor to interact with 3D Core</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
