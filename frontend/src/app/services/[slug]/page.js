import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { servicesData } from '@/data/servicesData';
import { portfolioData } from '@/data/portfolioData';
import {
  Globe,
  Smartphone,
  TrendingUp,
  Glasses,
  Box,
  Layout,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Layers,
  Briefcase,
  ChevronRight,
} from 'lucide-react';

const iconMap = {
  Globe,
  Smartphone,
  TrendingUp,
  Glasses,
  Box,
  Layout,
};

// SSG: Pre-renders all 6 service pages at build time
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// Dynamic SEO metadata per service
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | Riyadvi Software Technologies`,
    description: service.shortDescription,
  };
}

async function ServiceContent({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.iconName] || Globe;

  // Find related portfolio case studies matching this service
  const relatedProjects = portfolioData.filter((p) =>
    p.relatedServices.includes(service.slug)
  );

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* ---------------------------------------------------- */}
      {/* 1. Breadcrumbs & Service Hero (Section 19)           */}
      {/* ---------------------------------------------------- */}
      <div className="space-y-6 pt-4">
        {/* Breadcrumb Trail */}
        <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#D4AF37] font-bold">{service.title}</span>
        </div>

        {/* Hero Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold">
                <Icon className="w-3.5 h-3.5" />
                <span>Enterprise Service Pillar</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-lg sm:text-xl font-medium text-gradient-gold">
                {service.tagline}
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
                {service.shortDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#F3E5AB] text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#D4AF37]/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Get a Custom Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/business-health-checkup"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Audit Readiness</span>
                </Link>
              </div>
            </div>

            {/* Visual Icon Badge */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-br from-[#D4AF37]/20 to-black border-2 border-[#D4AF37]/40 flex items-center justify-center shadow-2xl shadow-[#D4AF37]/15">
                <Icon className="w-16 h-16 sm:w-20 sm:h-20 text-[#D4AF37]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. Problem vs. Solution Split Panel (Section 19)     */}
      {/* ---------------------------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* The Problem */}
        <div className="glass-panel rounded-3xl p-8 border border-red-500/20 bg-red-950/10 space-y-4">
          <div className="flex items-center gap-2 text-red-400 font-bold text-sm tracking-wider uppercase">
            <AlertCircle className="w-4 h-4" />
            <span>The Industry Challenge</span>
          </div>
          <h3 className="text-xl font-bold text-white">Why Conventional Approaches Fail</h3>
          <p className="text-sm text-gray-300 leading-relaxed">{service.problem}</p>
        </div>

        {/* The Riyadvi Solution */}
        <div className="glass-panel rounded-3xl p-8 border border-[#D4AF37]/30 bg-[#0C0F1A] space-y-4">
          <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-sm tracking-wider uppercase">
            <CheckCircle2 className="w-4 h-4" />
            <span>The Riyadvi Engineering Advantage</span>
          </div>
          <h3 className="text-xl font-bold text-white">Our Strategic Solution</h3>
          <p className="text-sm text-gray-300 leading-relaxed">{service.solution}</p>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. Key Architectural Features (Section 19)           */}
      {/* ---------------------------------------------------- */}
      <div className="space-y-8">
        <div>
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Engineered Deliverables & Core Features
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.features.map((feat, i) => (
            <div
              key={i}
              className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3 hover:border-[#D4AF37]/40 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] text-xs font-bold font-mono">
                0{i + 1}
              </div>
              <h4 className="text-base font-bold text-white">{feat.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 4. Industry Use Cases & Tech Stack (Section 19)      */}
      {/* ---------------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Industry Use Cases */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-8 border border-white/10 space-y-5">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-[#D4AF37]" />
            <span>Industry Applications</span>
          </h3>
          <div className="space-y-3">
            {service.industryUseCases.map((useCase, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1"
              >
                <span className="text-xs font-bold text-[#D4AF37]">
                  {useCase.industry}
                </span>
                <p className="text-xs text-gray-300 leading-relaxed">{useCase.example}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-8 border border-white/10 space-y-5 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-[#D4AF37]" />
              <span>Technology Stack</span>
            </h3>
            <p className="text-xs text-gray-400 mb-4">
              Built on battle-tested frameworks and modern libraries:
            </p>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-white/5 text-gray-200 border border-white/10 text-xs font-mono font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-xs text-gray-300 mt-6">
            <span className="font-bold text-[#D4AF37] block mb-1">Architecture Guarantee</span>
            Sub-second Core Web Vitals, fully responsive design, and enterprise-grade security.
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 5. 5-Step Delivery Process (Section 19)              */}
      {/* ---------------------------------------------------- */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 space-y-8">
        <div>
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
            Execution
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Our 5-Stage Delivery Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {service.process.map((step) => (
            <div
              key={step.step}
              className="p-5 rounded-2xl bg-[#07090F] border border-white/10 space-y-2 hover:border-[#D4AF37]/40 transition-colors"
            >
              <span className="text-xl font-extrabold text-[#D4AF37] font-mono">
                {step.step}
              </span>
              <h4 className="text-sm font-bold text-white">{step.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 6. Related Portfolio Case Studies (Section 19)       */}
      {/* ---------------------------------------------------- */}
      {relatedProjects.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
                Proof of Work
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-1">
                Related Case Studies
              </h3>
            </div>
            <Link
              href="/portfolio"
              className="text-xs font-bold text-[#D4AF37] hover:underline flex items-center gap-1"
            >
              All Projects <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProjects.map((proj) => (
              <Link
                key={proj.slug}
                href={`/portfolio/${proj.slug}`}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 block group"
              >
                <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                  <span>{proj.industry}</span>
                  {proj.has3DExperience && (
                    <span className="px-2 py-0.5 rounded bg-[#D4AF37]/15 text-[#D4AF37] text-[10px] font-bold border border-[#D4AF37]/30">
                      3D Experience
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  {proj.title}
                </h4>
                <p className="text-xs text-gray-400 mt-2 line-clamp-2">{proj.shortDesc}</p>
                <span className="inline-flex items-center gap-1 text-xs text-[#D4AF37] font-bold mt-4">
                  View Case Study <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 7. Bottom Quote CTA Banner (Section 19)              */}
      {/* ---------------------------------------------------- */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/40 text-center space-y-6 bg-gradient-to-b from-[#0F121C] to-[#07090F]">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
          Ready to Engineer Your <span className="text-gradient-gold">{service.title}</span> Solution?
        </h3>
        <p className="text-sm text-gray-300 max-w-xl mx-auto">
          Speak with our technical leads for a customized architecture roadmap, timeline, and quote.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#D4AF37] hover:bg-[#F3E5AB] text-black font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-[#D4AF37]/25 transition-all"
          >
            <span>Request a Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function DynamicServicePage(props) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen py-24 text-center text-[#D4AF37] font-mono text-sm">
          Loading Service Architecture...
        </div>
      }
    >
      <ServiceContent {...props} />
    </Suspense>
  );
}
