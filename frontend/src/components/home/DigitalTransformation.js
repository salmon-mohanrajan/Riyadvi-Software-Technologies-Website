'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Target,
  Compass,
  Palette,
  Cpu,
  Rocket,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';

const transformationSteps = [
  {
    id: 'challenge',
    number: '01',
    title: 'Business Challenge',
    subtitle: 'Diagnostic & Opportunity Discovery',
    icon: Target,
    objective:
      'We deconstruct your operational bottlenecks, customer friction points, and legacy technical limitations to uncover highest-yield growth vectors.',
    deliverables: [
      'Comprehensive Technical & UX Audit',
      'Stakeholder Alignment & KPI Definition',
      'Competitor & Market Opportunity Analysis',
      'Feasibility & Scalability Blueprint',
    ],
    metric: '100% Problem Clarity',
  },
  {
    id: 'strategy',
    number: '02',
    title: 'Strategy',
    subtitle: 'Architecture & Solution Roadmap',
    icon: Compass,
    objective:
      'We formulate a bulletproof digital architecture and sprint roadmap, selecting the optimal tech stack, database schemas, and microservice topologies.',
    deliverables: [
      'Full-Stack Architecture Specification',
      'Database Schema & API Contract Design',
      'Security & Compliance Strategy',
      'Phased Agile Sprint Milestone Plan',
    ],
    metric: 'Zero Tech Debt Foundation',
  },
  {
    id: 'design',
    number: '03',
    title: 'Design',
    subtitle: 'Human-Centered Spatial & UI Systems',
    icon: Palette,
    objective:
      'We sculpt luxury design systems, intuitive user flows, and interactive 3D concepts that captivate visitors and transform brand perception.',
    deliverables: [
      'Atomic Design System & Component Library',
      'High-Fidelity Interactive Figma Prototypes',
      '3D Mesh Concepts & WebGL Previews',
      'Accessibility & Usability Validation',
    ],
    metric: '+85% Conversion Intent',
  },
  {
    id: 'technology',
    number: '04',
    title: 'Technology',
    subtitle: 'Full-Stack Engineering & 3D WebGL',
    icon: Cpu,
    objective:
      'Our engineers implement high-velocity frontends, resilient Express/MongoDB backend APIs, and real-time 3D shaders with sub-second performance.',
    deliverables: [
      'Server-Rendered Next.js App Router Architecture',
      'Decoupled Node.js / Express Microservices',
      'GPU-Optimized React Three Fiber 3D Scenes',
      'Rigorous Unit & Integration Test Suites',
    ],
    metric: '99.9% Uptime Architecture',
  },
  {
    id: 'launch',
    number: '05',
    title: 'Launch',
    subtitle: 'Automated CI/CD & Cloud Orchestration',
    icon: Rocket,
    objective:
      'Zero-downtime production deployment across global edge CDNs, automated security audits, and continuous performance monitoring.',
    deliverables: [
      'Automated CI/CD Deployment Pipelines',
      'Global Edge CDN Caching & Compression',
      'Lighthouse & Core Web Vitals Optimization',
      '24/7 Error Logging & Telemetry Instrumentation',
    ],
    metric: '<1.2s Global Load Time',
  },
  {
    id: 'growth',
    number: '06',
    title: 'Growth',
    subtitle: 'Continuous Evolution & Enterprise Scale',
    icon: TrendingUp,
    objective:
      'Post-launch scaling through algorithmic conversion optimization, iterative feature releases, and dedicated enterprise SLA support.',
    deliverables: [
      'A/B Funnel & Heatmap Optimization',
      'Quarterly Feature & Scalability Reviews',
      'Dedicated Engineering SLA Support',
      'AI Workflow & Automation Upgrades',
    ],
    metric: '+240% Long-Term ROI',
  },
];

export default function DigitalTransformation() {
  const [activeStep, setActiveStep] = useState(0);
  const current = transformationSteps[activeStep];
  const Icon = current.icon;

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Methodology — Section 12</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          The Riyadvi <span className="text-gradient-gold">Digital Transformation</span> Framework
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          From diagnosing business friction to engineering high-scale digital solutions, our
          battle-tested 6-stage framework guarantees measurable enterprise outcomes.
        </p>
      </div>

      {/* Interactive Horizontal Navigation Track */}
      <div className="relative mb-12">
        {/* Progress Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
        <div
          className="hidden md:block absolute top-1/2 left-0 h-0.5 bg-[#D4AF37] -translate-y-1/2 z-0 transition-all duration-500"
          style={{ width: `${(activeStep / (transformationSteps.length - 1)) * 100}%` }}
        />

        {/* Step Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 relative z-10">
          {transformationSteps.map((step, idx) => {
            const isSelected = activeStep === idx;
            const isPast = activeStep > idx;
            const StepIcon = step.icon;

            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`flex flex-col items-center p-3 rounded-2xl transition-all text-center group ${
                  isSelected
                    ? 'bg-[#121520] border-2 border-[#D4AF37] shadow-xl shadow-[#D4AF37]/15'
                    : 'bg-[#0A0C13]/70 border border-white/10 hover:border-[#D4AF37]/40'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-colors ${
                    isSelected
                      ? 'bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/30'
                      : isPast
                      ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30'
                      : 'bg-white/5 text-gray-400 group-hover:text-white'
                  }`}
                >
                  <StepIcon className="w-5 h-5" />
                </div>
                <span className="text-[11px] text-gray-500 font-mono font-medium">
                  {step.number}
                </span>
                <span
                  className={`text-xs font-bold mt-0.5 ${
                    isSelected ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'
                  }`}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Detail Display Card */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/25 shadow-2xl relative overflow-hidden"
          >
            <span className="absolute -bottom-8 -right-6 text-9xl font-extrabold text-white/[0.03] select-none pointer-events-none font-mono">
              {current.number}
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Stage Overview */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                      Stage {current.number} / 06
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {current.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {current.objective}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Core Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs sm:text-sm text-gray-300 bg-white/5 p-2.5 rounded-xl border border-white/5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Metric & Navigation Controls */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#07090E]/60 p-6 sm:p-8 rounded-2xl border border-white/5 space-y-6">
                <div>
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Guaranteed Outcome
                  </span>
                  <p className="text-3xl sm:text-4xl font-extrabold text-gradient-gold mt-1">
                    {current.metric}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Every phase in the Riyadvi Framework delivers verifiable business impact before advancing.
                  </p>
                </div>

                {/* Step Switchers */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10 gap-3">
                  <button
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    disabled={activeStep === 0}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-gray-200 flex items-center gap-1.5 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Previous Stage
                  </button>

                  <button
                    onClick={() =>
                      setActiveStep((prev) =>
                        Math.min(transformationSteps.length - 1, prev + 1)
                      )
                    }
                    disabled={activeStep === transformationSteps.length - 1}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#D4AF37] text-black hover:bg-[#F3E5AB] disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5 transition-colors shadow-lg shadow-[#D4AF37]/20"
                  >
                    Next Stage <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Lead Gen Callout */}
                <div className="text-center pt-2">
                  <Link
                    href="/business-health-checkup"
                    className="text-xs text-[#D4AF37] hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    Evaluate Your Project’s Current Stage →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
