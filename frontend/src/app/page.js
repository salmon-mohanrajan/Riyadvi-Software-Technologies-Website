import HeroSection from '@/components/home/HeroSection';
import DigitalTransformation from '@/components/home/DigitalTransformation';
import ServicesSection from '@/components/home/ServicesSection';
import TechEcosystem from '@/components/home/TechEcosystem';
import WhyRiyadvi from '@/components/home/WhyRiyadvi';

export default function Home() {
  return (
    <div className="space-y-28 pb-16">
      {/* 1. 3D Interactive Hero Section (Section 11) */}
      <HeroSection />

      {/* 2. Interactive Digital Transformation Framework (Section 12) */}
      <DigitalTransformation />

      {/* 3. Interactive Services Showcase (Section 13) */}
      <ServicesSection />

      {/* 4. 3D Technology Constellation (Section 9 & 14) */}
      <TechEcosystem />

      {/* 5. Why Riyadvi Since 2021 & Health Checkup Gateway (Section 15 & 16) */}
      <WhyRiyadvi />
    </div>
  );
}
