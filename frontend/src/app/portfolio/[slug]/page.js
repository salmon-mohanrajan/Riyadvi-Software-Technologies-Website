import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { portfolioData } from '@/data/portfolioData';
import PerfumeBottle3D from '@/components/3d/PerfumeBottle3D';
import PearlHousing3D from '@/components/3d/PearlHousing3D';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Building,
  Layers,
  Award,
  ChevronRight,
  Quote,
} from 'lucide-react';

export async function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Case Study | Riyadvi Software Technologies`,
    description: project.shortDesc,
  };
}

async function CaseStudyContent({ params }) {
  const { slug } = await params;
  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* ---------------------------------------------------- */}
      {/* 1. Breadcrumbs & Header                              */}
      {/* ---------------------------------------------------- */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/portfolio" className="hover:text-white transition-colors">
            Portfolio
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#D4AF37] font-bold">{project.client}</span>
        </div>

        {/* Case Study Hero */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-mono">
                Client: {project.client}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold">
                {project.industry}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              {project.shortDesc}
            </p>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. Interactive 3D Showcase (Wanaromah & Pearl Housing)*/}
      {/* ---------------------------------------------------- */}
      {project.has3DExperience && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                Real-Time Spatial WebGL Experience
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {project.interactive3DType === 'architectural-cube-3d'
                  ? 'Interactive 3D Architectural Model'
                  : 'Interactive 3D WebGL Bottle Presentation'}
              </h2>
            </div>
            <span className="text-xs font-mono text-[#D4AF37] hidden sm:inline">
              React Three Fiber + Drei
            </span>
          </div>

          {project.interactive3DType === 'perfume-bottle-3d' && <PerfumeBottle3D />}
          {project.interactive3DType === 'architectural-cube-3d' && <PearlHousing3D />}
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 3. Challenge vs. Solution Breakdown                  */}
      {/* ---------------------------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Challenge */}
        <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-4 bg-[#0A0C14]">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
            <AlertCircle className="w-4 h-4" />
            <span>The Challenge</span>
          </div>
          <h3 className="text-xl font-bold text-white">The Business Problem</h3>
          <p className="text-sm text-gray-300 leading-relaxed">{project.challenge}</p>
        </div>

        {/* Solution */}
        <div className="glass-panel rounded-3xl p-8 border border-[#D4AF37]/30 space-y-4 bg-[#0C0F1A]">
          <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-xs uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            <span>The Solution</span>
          </div>
          <h3 className="text-xl font-bold text-white">Riyadvi’s Engineering Strategy</h3>
          <p className="text-sm text-gray-300 leading-relaxed">{project.solution}</p>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 4. Results & Metrics                                 */}
      {/* ---------------------------------------------------- */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 text-center space-y-8">
        <div>
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
            Measured Outcomes
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Quantifiable Business Results
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {project.results.map((res, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2 hover:border-[#D4AF37]/30 transition-colors"
            >
              <p className="text-4xl sm:text-5xl font-black text-gradient-gold">{res.metric}</p>
              <p className="text-xs font-medium text-gray-300">{res.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 5. Client Testimonial & Tech Stack                   */}
      {/* ---------------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Testimonial */}
        {project.testimonial && (
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border border-[#D4AF37]/20 flex flex-col justify-between space-y-6">
            <Quote className="w-10 h-10 text-[#D4AF37]/40" />
            <p className="text-lg sm:text-xl text-gray-200 italic font-medium leading-relaxed">
              "{project.testimonial.quote}"
            </p>
            <div className="border-t border-white/10 pt-4">
              <p className="text-sm font-bold text-white">{project.testimonial.author}</p>
              <p className="text-xs text-[#D4AF37] mt-0.5">{project.testimonial.role}</p>
            </div>
          </div>
        )}

        {/* Technologies Used & Related Services */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-8 border border-white/10 space-y-6 flex flex-col justify-between">
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              Technologies Deployed
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Related Capabilities
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.relatedServices.map((slug) => (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="text-xs font-bold text-[#D4AF37] hover:underline"
                >
                  • {slug.replace('-', ' ')}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 6. Bottom Navigation CTA                             */}
      {/* ---------------------------------------------------- */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> All Case Studies
        </Link>

        <Link
          href="/contact"
          className="px-8 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#F3E5AB] text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#D4AF37]/20 transition-all flex items-center gap-2"
        >
          <span>Discuss a Similar Project</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default function DynamicCaseStudyPage(props) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen py-24 text-center text-[#D4AF37] font-mono text-sm">
          Loading Case Study...
        </div>
      }
    >
      <CaseStudyContent {...props} />
    </Suspense>
  );
}
