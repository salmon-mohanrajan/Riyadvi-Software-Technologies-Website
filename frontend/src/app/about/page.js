import Link from 'next/link';
import { 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Users, 
  Globe2, 
  Award, 
  ArrowRight, 
  Compass, 
  Layers, 
  TrendingUp,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export const metadata = {
  title: 'About Us | Riyadvi Software Technologies - Engineering Excellence Since 2021',
  description:
    'Discover Riyadvi Software Technologies: our founding story in 2021, mission, vision, engineering principles, and our journey pioneering 3D spatial web & AI systems.',
};

const stats = [
  { label: 'Founded In', value: '2021', sub: 'Inception in India' },
  { label: 'Deployments', value: '50+', sub: 'Enterprise Platforms' },
  { label: 'Client Retention', value: '99.8%', sub: 'Global Satisfaction' },
  { label: 'Performance', value: '< 1.0s', sub: 'Average Global FCP' },
];

const engineeringValues = [
  {
    icon: Cpu,
    title: 'Relentless Craftsmanship',
    description:
      'We reject generic templates and cookie-cutter architectures. Every line of code, every 3D polygon, and every API endpoint is crafted for maximum efficiency and maintainability.',
  },
  {
    icon: Zap,
    title: '60 FPS Performance Standard',
    description:
      'Speed is a feature. We engineer every digital experience to maintain silky 60 FPS render loops on WebGL while compressing asset payloads to sub-second delivery budgets.',
  },
  {
    icon: Layers,
    title: 'Modular & Decoupled Architecture',
    description:
      'By decoupling Next.js App Router frontends from Node.js/Express microservices and distributed databases, we build scalable platforms that grow seamlessly with enterprise demands.',
  },
  {
    icon: ShieldCheck,
    title: 'Radical Transparency & Security',
    description:
      'No vanity metrics or black-box workflows. Our clients enjoy direct engineering communication, weekly sprints, automated CI/CD pipelines, and enterprise-grade data protection.',
  },
];

const timeline = [
  {
    year: '2021',
    title: 'Foundation & Core Vision',
    description:
      'Riyadvi Software Technologies was established in India by forward-thinking engineers determined to bridge the gap between high-performance software engineering and bespoke design.',
  },
  {
    year: '2022',
    title: 'Enterprise SaaS & Mobile Expansion',
    description:
      'Expanded into full-stack mobile applications, cloud infrastructures, and high-throughput databases, serving emerging tech leaders across India and Southeast Asia.',
  },
  {
    year: '2023',
    title: 'Spatial Web & WebGL Innovation',
    description:
      'Pioneered interactive 3D WebGL experiences and React Three Fiber pipelines, transforming traditional e-commerce into immersive interactive showrooms.',
  },
  {
    year: '2024',
    title: 'Autonomous AI & Workflow Automation',
    description:
      'Integrated enterprise Large Language Model (LLM) agents, function orchestration, and automated lead intelligence pipelines directly into custom software.',
  },
  {
    year: '2025',
    title: 'Global Delivery Across 4 Continents',
    description:
      'Surpassed 50+ enterprise product launches, partnering with enterprises across North America, the UK, the Middle East, and Australia.',
  },
  {
    year: '2026',
    title: 'Brand Revamp & Spatial Frontiers',
    description:
      'Unveiled our luxury Gold & Obsidian brand identity and state-of-the-art interactive digital flagship, setting a new benchmark for global software engineering firms.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-[#D4AF37]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[600px] right-10 w-[450px] h-[350px] bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Breadcrumb Header */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 mb-6">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <span className="text-[#D4AF37] font-semibold">About Riyadvi</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-5">
            <Compass className="w-3.5 h-3.5" />
            Engineering Excellence Since 2021
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            We Engineer the <span className="text-gradient-gold">Digital Frontiers</span> for Tomorrow's Leaders.
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl font-light leading-relaxed">
            Riyadvi Software Technologies was founded on a singular conviction: digital software should not just function — it should captivate, scale effortlessly, and deliver undeniable business leverage.
          </p>
        </div>

        {/* Global Impact Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-2xl glass-panel border border-neutral-800 hover:border-[#D4AF37]/50 transition-all text-center group"
            >
              <div className="text-3xl md:text-5xl font-extrabold text-[#D4AF37] mb-2 tracking-tight group-hover:scale-105 transition-transform">
                {s.value}
              </div>
              <div className="text-sm font-semibold text-white mb-1">{s.label}</div>
              <div className="text-xs text-neutral-400">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
          {/* Mission */}
          <div className="p-8 md:p-10 rounded-2xl glass-panel border border-[#D4AF37]/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-[#D4AF37]/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              To empower forward-thinking enterprises across the globe by engineering transformative digital platforms, combining real-time 3D spatial web technologies, resilient cloud microservices, and practical AI automation that convert complex challenges into scalable competitive advantages.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 md:p-10 rounded-2xl glass-panel border border-neutral-800 hover:border-[#D4AF37]/40 transition-all relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-[#D4AF37] mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              To redefine how humans interact with software on the web — shifting the paradigm from static 2D flat pages to intuitive spatial, interactive, and intelligent environments that elevate brands to their highest potential.
            </p>
          </div>
        </div>

        {/* Engineering Philosophy & Core Values */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-2">
              Our Core Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The Engineering Philosophy of <span className="text-gradient-gold">Riyadvi</span>
            </h2>
            <p className="text-neutral-400 text-sm md:text-base mt-3">
              How we build is as important as what we build. These pillars guide every architectural decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engineeringValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl glass-panel border border-neutral-850 hover:border-[#D4AF37]/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-black border border-neutral-800 group-hover:border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-5 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Company Journey / Milestones (2021 - 2026) */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-2">
              Historical Growth
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Journey: <span className="text-gradient-gold">2021 to 2026</span>
            </h2>
            <p className="text-neutral-400 text-sm md:text-base mt-3">
              Five years of relentless engineering evolution, client trust, and boundary-pushing software development.
            </p>
          </div>

          <div className="relative border-l border-neutral-800 ml-4 md:ml-32 space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-12 group">
                {/* Year Marker Badge */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-black border-2 border-[#D4AF37] flex items-center justify-center text-[10px] font-bold text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                  {item.year.slice(2)}
                </div>

                <div className="glass-panel p-6 md:p-8 rounded-xl border border-neutral-850 hover:border-[#D4AF37]/40 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-[#D4AF37] tracking-wider uppercase font-mono">
                      Phase {index + 1} • {item.year}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Delivery Presence */}
        <div className="p-8 md:p-12 rounded-3xl glass-panel border border-[#D4AF37]/30 text-center relative overflow-hidden mb-20">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-96 h-96 bg-[#D4AF37]/10 blur-[130px] rounded-full pointer-events-none" />
          
          <Globe2 className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Engineered in India, Trusted Worldwide
          </h2>
          <p className="text-neutral-300 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Headquartered in India with distributed project delivery pods across the globe. We collaborate across time zones with enterprise clients in the United States, United Kingdom, UAE, and Australia.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-neutral-400 mb-8">
            <span className="flex items-center gap-1.5 text-white">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> North America
            </span>
            <span className="flex items-center gap-1.5 text-white">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> United Kingdom &amp; Europe
            </span>
            <span className="flex items-center gap-1.5 text-white">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Middle East &amp; UAE
            </span>
            <span className="flex items-center gap-1.5 text-white">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> Asia Pacific
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-[#D4AF37] text-black text-xs md:text-sm font-bold hover:bg-[#E5C158] transition-colors inline-flex items-center gap-2 shadow-lg shadow-[#D4AF37]/20"
            >
              Start a Project Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/business-health-checkup"
              className="px-8 py-3 rounded-full bg-neutral-900 border border-neutral-700 text-white text-xs md:text-sm font-semibold hover:border-[#D4AF37] transition-colors"
            >
              Take Free Business Health Checkup
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
