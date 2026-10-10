/**
 * Careers Dynamic Data
 * Fulfills Assignment Section 22 & 24.
 * Powers the /careers directory and dynamic /careers/[job-slug] application pages.
 */
export const careerDepartments = ['All', 'Engineering', '3D & Spatial', 'Design', 'Strategy'];
export const careerExperienceLevels = ['All', 'Junior (1-3 yrs)', 'Mid (3-5 yrs)', 'Senior (5+ yrs)', 'Lead'];

export const careersData = [
  {
    id: 'job-1',
    slug: 'senior-full-stack-engineer',
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    designation: 'Senior Engineer',
    experience: 'Senior (5+ yrs)',
    location: 'Remote / Hybrid (Bengaluru, IN)',
    type: 'Full-time',
    salaryRange: '₹18,00,000 – ₹28,00,000 / yr',
    overview:
      'We are looking for an exceptional Senior Full-Stack Engineer to lead the architecture of modern enterprise web applications combining Next.js, Node.js, and interactive WebGL experiences.',
    responsibilities: [
      'Architect robust, decoupled microservices with Node.js, Express, and MongoDB.',
      'Build dynamic, server-rendered Next.js applications optimized for sub-second Core Web Vitals.',
      'Collaborate with 3D designers to integrate React Three Fiber canvases into client applications.',
      'Mentor junior engineers and conduct rigorous code and security reviews.',
    ],
    requirements: [
      '5+ years experience building production full-stack web platforms.',
      'Deep mastery of React, Next.js (App Router), TypeScript/JavaScript, and Node.js.',
      'Solid understanding of database modeling, caching (Redis), and REST/GraphQL APIs.',
      'Familiarity or willingness to learn WebGL / Three.js.',
    ],
    benefits: [
      'Competitive compensation + performance equity',
      'Flexible remote/hybrid work policy',
      'Premium health and wellness coverage for you and family',
      'Annual tech gear & learning stipend',
    ],
  },
  {
    id: 'job-2',
    slug: '3d-web-specialist',
    title: '3D Web Specialist (Three.js & WebGL)',
    department: '3D & Spatial',
    designation: 'Specialist',
    experience: 'Mid (3-5 yrs)',
    location: 'Remote',
    type: 'Full-time',
    salaryRange: '₹14,00,000 – ₹22,00,000 / yr',
    overview:
      'Join our Spatial Computing lab to craft mind-blowing 3D digital ecosystems, procedural particle networks, and interactive product customizers.',
    responsibilities: [
      'Develop real-time 3D web experiences using Three.js, React Three Fiber, and GLSL shaders.',
      'Optimize 3D meshes, draw calls, and Draco-compressed assets for smooth 60fps mobile execution.',
      'Work alongside UI designers to combine 3D canvases with 2D DOM overlays seamlessly.',
    ],
    requirements: [
      'Proven portfolio of interactive 3D WebGL / R3F projects.',
      'Proficiency in Three.js, React Three Fiber, Drei, and shader programming (GLSL).',
      'Experience optimizing 3D assets exported from Blender.',
    ],
    benefits: [
      'Cutting-edge GPU workstation provided',
      'Remote-first autonomous culture',
      'Generous paid time off',
    ],
  },
  {
    id: 'job-3',
    slug: 'lead-ui-ux-designer',
    title: 'Lead UI/UX & Design Systems Designer',
    department: 'Design',
    designation: 'Lead Designer',
    experience: 'Senior (5+ yrs)',
    location: 'Hybrid (Bengaluru, IN)',
    type: 'Full-time',
    salaryRange: '₹16,00,000 – ₹25,00,000 / yr',
    overview:
      'Lead the visual language of Riyadvi’s digital products, crafting luxury dark-mode aesthetics, design systems, and micro-interactions.',
    responsibilities: [
      'Own end-to-end user research, wireframing, and high-fidelity prototyping in Figma.',
      'Maintain and expand comprehensive multi-brand design systems.',
      'Collaborate closely with frontend engineers to guarantee pixel-perfect animation implementation.',
    ],
    requirements: [
      '5+ years UI/UX design experience for SaaS or premium digital brands.',
      'Mastery of Figma, component libraries, and motion prototyping.',
      'A deep aesthetic eye for typography, glassmorphism, and dark palettes.',
    ],
    benefits: [
      'Health insurance and mental wellness benefits',
      'Creative conference allowances',
      'Stock options',
    ],
  },
];
