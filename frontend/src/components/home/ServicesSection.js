'use client';

import { useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/servicesData';
import {
  Globe,
  Smartphone,
  TrendingUp,
  Glasses,
  Box,
  Layout,
  ArrowRight,
  Sparkles,
  Code2,
  Eye,
} from 'lucide-react';

// ----------------------------------------------------
// 1. Web Development: Interactive Browser Widget
// ----------------------------------------------------
function BrowserWidget() {
  const [mode, setMode] = useState('preview');

  return (
    <div className="w-full h-40 bg-[#07090E] rounded-xl border border-white/10 p-3 flex flex-col justify-between overflow-hidden relative">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="px-3 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] text-gray-400 font-mono">
          riyadvi.dev/web
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => setMode('preview')}
            className={`p-1 rounded text-[10px] ${mode === 'preview' ? 'text-[#D4AF37] bg-white/5' : 'text-gray-500'}`}
          >
            <Eye className="w-3 h-3" />
          </button>
          <button
            onClick={() => setMode('code')}
            className={`p-1 rounded text-[10px] ${mode === 'code' ? 'text-[#D4AF37] bg-white/5' : 'text-gray-500'}`}
          >
            <Code2 className="w-3 h-3" />
          </button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-2 text-center">
        {mode === 'preview' ? (
          <div className="space-y-1.5 w-full">
            <div className="h-2 w-3/4 bg-[#D4AF37]/30 rounded mx-auto animate-pulse" />
            <div className="h-1.5 w-1/2 bg-white/10 rounded mx-auto" />
            <div className="flex justify-center gap-1 pt-1">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] font-mono">
                Next.js 16 SSR
              </span>
            </div>
          </div>
        ) : (
          <div className="text-left w-full font-mono text-[10px] text-gray-400 leading-tight">
            <p className="text-purple-400">export default <span className="text-blue-400">App</span>() {'{'}</p>
            <p className="pl-3 text-emerald-400">&lt;<span className="text-amber-300">WebGLCanvas</span> /&gt;</p>
            <p className="text-purple-400">{'}'}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 2. App Development: Interactive Smartphone Widget
// ----------------------------------------------------
function SmartphoneWidget() {
  const [activeTab, setActiveTab] = useState(0);
  const screens = ['Live Feed', 'Telemetry', 'User Core'];

  return (
    <div className="w-full h-40 bg-[#07090E] rounded-xl border border-white/10 p-2 flex items-center justify-center relative overflow-hidden">
      <div className="w-44 h-full bg-[#0D1018] rounded-2xl border-2 border-white/20 p-2 flex flex-col justify-between shadow-lg">
        <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto" />
        <div className="text-center py-2">
          <p className="text-[9px] text-[#D4AF37] font-semibold tracking-wider uppercase">iOS & Android</p>
          <p className="text-xs font-bold text-white mt-0.5">{screens[activeTab]}</p>
          <div className="h-1 w-16 bg-[#D4AF37]/30 rounded-full mx-auto mt-2" />
        </div>
        <div className="flex justify-around border-t border-white/10 pt-1">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold ${
                activeTab === i ? 'bg-[#D4AF37] text-black' : 'bg-white/10 text-gray-400'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 3. Digital Marketing: Animated Growth Chart Widget
// ----------------------------------------------------
function GrowthChartWidget() {
  return (
    <div className="w-full h-40 bg-[#07090E] rounded-xl border border-white/10 p-4 flex flex-col justify-between relative overflow-hidden">
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-gray-400 uppercase font-mono tracking-wider">Conversion Velocity</span>
        <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
          +285% ROI
        </span>
      </div>
      <div className="relative h-16 w-full flex items-end">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 35 Q 25 30, 45 18 T 85 8 L 100 2 L 100 40 L 0 40 Z"
            fill="url(#chartGradient)"
          />
          <path
            d="M 0 35 Q 25 30, 45 18 T 85 8 L 100 2"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="100" cy="2" r="3" fill="#FFF1BD" className="animate-ping" />
          <circle cx="100" cy="2" r="3" fill="#D4AF37" />
        </svg>
      </div>
      <div className="flex justify-between text-[9px] text-gray-500 font-mono">
        <span>Q1 Baseline</span>
        <span>Target Scale</span>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 4. AR / VR: Spatial 3D Environment Widget
// ----------------------------------------------------
function SpatialWidget() {
  return (
    <div className="w-full h-40 bg-[#07090E] rounded-xl border border-white/10 p-3 flex flex-col justify-between relative overflow-hidden">
      <div className="flex justify-between text-[10px] text-gray-400 font-mono">
        <span>WebXR Spatial</span>
        <span className="text-[#D4AF37]">60 FPS</span>
      </div>
      <div className="flex-1 flex items-center justify-center relative">
        <div className="w-20 h-20 rounded-full border border-dashed border-[#D4AF37]/50 flex items-center justify-center animate-spin [animation-duration:12s]">
          <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
          </div>
        </div>
        <div className="absolute text-[9px] font-mono text-[#D4AF37] tracking-widest uppercase">
          Tracking
        </div>
      </div>
      <div className="text-[10px] text-center text-gray-400">
        Apple Vision Pro & Meta Quest Ready
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 5. 3D Modeling: Rotatable Isometric Mesh Widget
// ----------------------------------------------------
function MeshWidget() {
  return (
    <div className="w-full h-40 bg-[#07090E] rounded-xl border border-white/10 p-3 flex flex-col justify-between relative overflow-hidden group/mesh">
      <div className="flex justify-between text-[10px] text-gray-400 font-mono">
        <span>Draco PBR Mesh</span>
        <span className="text-[#D4AF37]">Low Poly</span>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-14 h-14 transform-gpu rotate-45 group-hover/mesh:rotate-180 transition-transform duration-1000 ease-out border-2 border-[#D4AF37] rounded-lg shadow-xl shadow-[#D4AF37]/20 flex items-center justify-center">
          <div className="w-8 h-8 border border-dashed border-[#FFF1BD] rounded transform -rotate-45" />
        </div>
      </div>
      <div className="text-[10px] text-center text-gray-400 font-mono">
        Sub-1s WebGL Load Time
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 6. UI/UX Design: Floating Layered UI Widget
// ----------------------------------------------------
function FloatingUIWidget() {
  return (
    <div className="w-full h-40 bg-[#07090E] rounded-xl border border-white/10 p-3 flex flex-col justify-between relative overflow-hidden">
      <div className="flex justify-between text-[10px] text-gray-400 font-mono">
        <span>Design System</span>
        <span className="text-[#D4AF37]">WCAG AAA</span>
      </div>
      <div className="relative flex-1 flex items-center justify-center">
        <div className="absolute w-36 h-12 bg-white/5 border border-white/10 rounded-xl transform -translate-y-2 -translate-x-3 rotate-[-3deg] backdrop-blur-sm" />
        <div className="absolute w-36 h-12 bg-[#121520] border border-[#D4AF37]/40 rounded-xl shadow-xl flex items-center justify-between px-3 z-10 transform hover:scale-105 transition-transform">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[10px] text-[#D4AF37]">
              ✓
            </div>
            <span className="text-[10px] font-bold text-white">Conversion Flow</span>
          </div>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#D4AF37] text-black font-bold">98%</span>
        </div>
      </div>
      <div className="text-[10px] text-center text-gray-400">
        Micro-Interactions & Fluid Motion
      </div>
    </div>
  );
}

const widgetMap = {
  'web-development': BrowserWidget,
  'app-development': SmartphoneWidget,
  'digital-marketing': GrowthChartWidget,
  'ar-vr': SpatialWidget,
  '3d-modeling': MeshWidget,
  'ui-ux-design': FloatingUIWidget,
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Capabilities — Section 13</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Enterprise <span className="text-gradient-gold">Services</span> & 3D Solutions
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          Not ordinary static agency cards. Each domain combines bespoke engineering, interactive
          3D treatments, and measurable digital growth.
        </p>
      </div>

      {/* 6 Interactive Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => {
          const Widget = widgetMap[service.slug] || BrowserWidget;

          return (
            <div
              key={service.slug}
              className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between border border-white/10 group relative"
            >
              <div className="mb-5">
                <Widget />
              </div>

              <div className="space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#D4AF37]/90 mt-1">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-3 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3">
                  {service.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/5 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Explore Service Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
