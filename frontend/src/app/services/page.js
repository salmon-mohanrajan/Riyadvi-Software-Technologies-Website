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
  CheckCircle2,
} from 'lucide-react';

const iconMap = {
  Globe,
  Smartphone,
  TrendingUp,
  Glasses,
  Box,
  Layout,
};

export const metadata = {
  title: 'Enterprise Services & 3D Web Solutions | Riyadvi Software Technologies',
  description:
    'Explore our 6 core capabilities: Web Development, App Development, Digital Marketing, AR/VR Solutions, 3D Modeling, and UI/UX Design.',
};

async function getServices() {
  try {
    const res = await fetch('http://127.0.0.1:5000/api/content/services', { cache: 'no-store' });
    const json = await res.json();
    if (json.success && json.data?.length > 0) return json.data;
  } catch (err) {}
  return servicesData;
}

export default async function ServicesIndexPage() {
  const services = await getServices();
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Services Directory</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Comprehensive <span className="text-gradient-gold">Digital Capabilities</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Explore our core technology pillars. Each discipline is engineered to merge high-velocity
          performance with interactive 3D WebGL immersion and measurable business growth.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = iconMap[service.iconName] || Globe;

          return (
            <div
              key={service.slug}
              className="glass-panel glass-panel-hover rounded-3xl p-8 flex flex-col justify-between border border-white/10 group relative"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-500">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-xs font-semibold text-[#D4AF37] mt-1">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  {service.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{f.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-6 border-t border-white/10 mt-6">
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center justify-between text-xs font-bold text-[#D4AF37] group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore Full Service Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Consultation Banner */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/30 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Not sure which technology solution matches your growth stage?
        </h3>
        <p className="text-sm text-gray-400 max-w-xl mx-auto">
          Take our interactive 6-step diagnostic or speak directly with our solutions architects.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/business-health-checkup"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition-colors"
          >
            Launch Business Health Checkup
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#F3E5AB] text-black font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-[#D4AF37]/20"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
