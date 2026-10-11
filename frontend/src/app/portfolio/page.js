import Link from 'next/link';
import { portfolioData } from '@/data/portfolioData';
import { API_BASE_URL } from '@/config/api';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Box,
  Layers,
  ExternalLink,
} from 'lucide-react';

export const metadata = {
  title: 'Portfolio & 3D Case Studies | Riyadvi Software Technologies',
  description:
    'Explore our enterprise case studies: Wanaromah 3D, Laxmi Astro AI, Pearl Housing, Puratap IoT, and Tony & Guy.',
};

async function getProjects() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/content/projects`, { cache: 'no-store' });
    const json = await res.json();
    if (json.success && json.data?.length > 0) return json.data;
  } catch (err) {}
  return portfolioData;
}

export default async function PortfolioIndexPage() {
  const projects = await getProjects();
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Enterprise Case Studies & 3D Showcases</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Proven Solutions, <span className="text-gradient-gold">Measurable Scale</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          From WebGL 3D flagship boutiques to high-concurrency predictive AI platforms. Explore how
          we transform business ambition into engineered market leadership.
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between border border-white/10 group relative"
          >
            <div className="space-y-4">
              {/* Card Meta Badges */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                  {project.industry}
                </span>
                {project.has3DExperience && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold">
                    <Box className="w-3 h-3" />
                    <span>3D Interactive</span>
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <div>
                <h2 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {project.title}
                </h2>
                <p className="text-xs text-gray-400 mt-2 line-clamp-3 leading-relaxed">
                  {project.shortDesc}
                </p>
              </div>

              {/* Results Metric Pills */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5 text-center">
                {project.results.map((res, i) => (
                  <div key={i} className="p-2 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-xs font-extrabold text-gradient-gold">{res.metric}</p>
                    <p className="text-[9px] text-gray-400 line-clamp-1 mt-0.5">{res.label}</p>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-[#050608] text-gray-300 border border-white/10 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Link to Case Study */}
            <div className="pt-6 border-t border-white/10 mt-6">
              <Link
                href={`/portfolio/${project.slug}`}
                className="flex items-center justify-between text-xs font-bold text-[#D4AF37] group-hover:translate-x-1 transition-transform"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
