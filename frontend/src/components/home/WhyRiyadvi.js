'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Activity,
} from 'lucide-react';

const milestones = [
  {
    year: '2021',
    title: 'Genesis & Foundation',
    badge: 'Origin',
    summary:
      'Riyadvi Software Technologies was founded with a singular purpose: to replace generic software outsourcing with high-craft digital partnership.',
    points: [
      'Inception of Bengaluru engineering studio',
      'First 5 enterprise web applications delivered with 100% SLA compliance',
      'Establishment of the custom software delivery methodology',
    ],
  },
  {
    year: '2022',
    title: 'IoT & HealthTech Expansion',
    badge: 'Scale',
    summary:
      'Expanded into smart hardware telemetry and mission-critical healthcare systems, solving complex real-time data challenges.',
    points: [
      'Delivered Puratap smart filtration IoT cloud telemetry portal',
      'Engineered Sivam Physio Care clinical appointment system',
      'Team scaled to 25+ full-stack engineers and UI architects',
    ],
  },
  {
    year: '2023',
    title: 'Spatial Web & 3D Breakthrough',
    badge: 'Innovation',
    summary:
      'Pioneered real-time browser WebGL 3D customizers, giving luxury brands unforgettable visual flagships.',
    points: [
      'Launched Wanaromah 3D real-time fragrance bottle customizer',
      'Architected Pearl Housing 3D virtual floorplan spatial tour',
      'Implemented Draco compression pipeline reducing 3D web load times by 80%',
    ],
  },
  {
    year: '2024',
    title: 'Enterprise AI & Predictive Systems',
    badge: 'Intelligence',
    summary:
      'Embedded autonomous AI workflows, vector search pipelines, and predictive algorithms into client applications.',
    points: [
      'Delivered Laxmi Astro AI platform handling 1.2M+ active monthly queries',
      'Integrated LLM agentic tool calling into internal ERP pipelines',
      'Achieved 99.4% client retention across all long-term enterprise retainers',
    ],
  },
  {
    year: '2025–2026',
    title: 'Global Digital Transformation Partner',
    badge: 'Modernity',
    summary:
      'Full corporate evolution into a global digital solutions partner combining modern Next.js 16 App Router, microservices, and WebGL.',
    points: [
      'Revamped corporate architecture with decoupled microservices',
      'Over 50+ enterprise platforms deployed globally',
      'Launch of the interactive Business Health Checkup diagnostic',
    ],
  },
];

const endToEndSteps = [
  { name: 'Strategy', desc: 'Market audit & tech stack' },
  { name: 'Design', desc: 'Spatial UI & micro-motion' },
  { name: 'Development', desc: 'Next.js & Node APIs' },
  { name: 'Marketing', desc: 'High-conversion funnels' },
  { name: 'Optimization', desc: 'Sub-second Web Vitals' },
  { name: 'Growth', desc: 'Scaling enterprise SLA' },
];

export default function WhyRiyadvi() {
  const [selectedIdx, setSelectedIdx] = useState(milestones.length - 1);
  const current = milestones[selectedIdx];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* 1. Milestone Timeline: Since 2021 (Section 15) */}
      <div>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Company Journey — Section 15</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Pioneering Digital Solutions <span className="text-gradient-gold">Since 2021</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Five years of continuous technical innovation, scaling from custom web platforms to
            immersive 3D spatial experiences and enterprise AI architectures.
          </p>
        </div>

        {/* Year Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {milestones.map((m, idx) => (
            <button
              key={m.year}
              onClick={() => setSelectedIdx(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                selectedIdx === idx
                  ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/25 scale-105'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{m.year}</span>
            </button>
          ))}
        </div>

        {/* Milestone Detail Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.year}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="glass-panel rounded-3xl p-8 sm:p-10 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest uppercase">
                    Milestone Year
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                    {current.year}: {current.title}
                  </h3>
                </div>
                <span className="self-start sm:self-center px-3 py-1 rounded-full text-xs font-semibold bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                  {current.badge}
                </span>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                {current.summary}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Key Achievements & Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {current.points.map((pt, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 2. End-to-End Solutions Journey (Section 15) */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-mono font-bold text-[#D4AF37] tracking-widest uppercase">
            Holistic Lifecycle
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            End-to-End Solutions Continuum
          </h3>
          <p className="text-xs sm:text-sm text-gray-400">
            We guide your business through every stage of digital transformation without fragmented handoffs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {endToEndSteps.map((step, idx) => (
            <div
              key={step.name}
              className="p-4 rounded-2xl bg-[#090C14] border border-white/10 text-center space-y-2 relative group hover:border-[#D4AF37]/50 transition-colors"
            >
              <span className="text-[10px] font-mono font-bold text-[#D4AF37]">
                Step 0{idx + 1}
              </span>
              <h4 className="text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                {step.name}
              </h4>
              <p className="text-[11px] text-gray-400 leading-tight">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Business Health Checkup Gateway (Section 15 & 16) */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/40 shadow-2xl relative overflow-hidden bg-gradient-to-r from-[#0C0F1A] via-[#090B12] to-[#141208]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold">
              <Activity className="w-3.5 h-3.5" />
              <span>Interactive Lead Diagnostic — Section 16</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Is Your Business Ready for Its{' '}
              <span className="text-gradient-gold">Next Digital Growth Stage?</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
              Take our interactive 6-step diagnostic to audit your website satisfaction, tech stack
              vulnerabilities, and marketing bottlenecks. Receive an instant Digital Maturity Score
              and tailored transformation roadmap.
            </p>
            <div className="pt-2">
              <Link
                href="/business-health-checkup"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D4AF37] hover:bg-[#F3E5AB] text-black font-bold text-sm shadow-xl shadow-[#D4AF37]/25 transition-all"
              >
                <span>Launch Free Business Health Checkup</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#07090F] p-6 rounded-2xl border border-white/10 space-y-4 text-center">
            <span className="text-xs font-mono text-gray-400 uppercase">Interactive Output</span>
            <div className="w-24 h-24 mx-auto rounded-full border-4 border-[#D4AF37] flex items-center justify-center bg-[#D4AF37]/10">
              <span className="text-3xl font-extrabold text-white">85<span className="text-xs text-[#D4AF37] font-normal">/100</span></span>
            </div>
            <p className="text-xs font-semibold text-gray-200">Digital Maturity Scorecard</p>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Instant personalized assessment saved securely to backend database.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
