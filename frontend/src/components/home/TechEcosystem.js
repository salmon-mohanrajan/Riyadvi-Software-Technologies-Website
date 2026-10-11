'use client';

import { useState } from 'react';
import TechConstellation from '@/components/3d/TechConstellation';
import { Sparkles, Layers, Server, Database, Wand2 } from 'lucide-react';

const categories = ['All', 'Frontend & 3D', 'Backend & Cloud', 'Database & AI'];

const stackHighlights = [
  {
    icon: Layers,
    title: 'Modern Frontend & 3D',
    stack: 'Next.js 16, React 19, Three.js, R3F, Tailwind CSS',
    desc: 'Server-side rendered performance with declarative WebGL 3D immersion and sub-second Core Web Vitals.',
  },
  {
    icon: Server,
    title: 'Microservice Backend',
    stack: 'Node.js, Express.js, RESTful Architecture',
    desc: 'Decoupled, high-concurrency API services engineered with strict request validation and resilient error handling.',
  },
  {
    icon: Database,
    title: 'Dynamic Data Tier',
    stack: 'MongoDB, Mongoose ODM, Cloud Atlas',
    desc: 'Flexible NoSQL document schemas capable of scaling seamlessly from lead diagnostics to enterprise records.',
  },
  {
    icon: Wand2,
    title: 'Motion & Storytelling',
    stack: 'GSAP, ScrollTrigger, Lenis, Framer Motion',
    desc: 'Inertial smooth scrolling and timeline-driven storytelling that elevate user engagement and brand perception.',
  },
];

export default function TechEcosystem() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Technology Ecosystem — Section 14</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          3D Technology <span className="text-gradient-gold">Constellation</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          Explore our interconnected full-stack ecosystem. Click and drag the 3D sphere to inspect
          technologies in orbital space.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/25'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Constellation Canvas */}
      <div className="glass-panel rounded-3xl p-4 sm:p-6 border border-[#D4AF37]/20 shadow-2xl overflow-hidden mb-12 relative">
        <TechConstellation activeCategory={activeCategory} />
      </div>

      {/* Tech Architecture Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stackHighlights.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3 hover:border-[#D4AF37]/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs text-[#D4AF37] font-mono">{item.stack}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
