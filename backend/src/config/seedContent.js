import Service from '../models/Service.js';
import Project from '../models/Project.js';
import Article from '../models/Article.js';
import Job from '../models/Job.js';

const initialServices = [
  {
    slug: 'web-development',
    title: 'Web Development',
    tagline: 'High-Performance, Scalable Web Platforms Built for Global Scale',
    shortDescription: 'Enterprise-grade web applications, progressive web apps, and dynamic architectures built with Next.js, React, and Node.js.',
    interactiveType: 'browser-3d',
    iconName: 'Globe',
    problem: 'Legacy websites suffer from slow load times, poor mobile conversion rates, and brittle codebases that cannot scale.',
    solution: 'We engineer ultra-fast, server-rendered web applications with modern micro-architectures, headless CMS readiness, and reactive 3D interfaces.',
    features: [
      { title: 'Full-Stack Engineering', description: 'Decoupled frontends with robust RESTful APIs built on Node.js and MongoDB.' },
      { title: 'Core Web Vitals Optimized', description: 'Sub-second first contentful paint (FCP) and 90+ Lighthouse performance scores.' },
      { title: 'Interactive 3D & Motion', description: 'Immersive WebGL elements with Three.js and React Three Fiber without sacrificing speed.' },
      { title: 'Enterprise Security', description: 'End-to-end data encryption, CSRF protection, and compliant cloud architectures.' }
    ],
    industryUseCases: [
      { industry: 'Fintech', example: 'High-frequency trading dashboards and secure customer portals.' },
      { industry: 'E-Commerce', example: 'High-volume storefronts with personalized AI recommendations.' },
      { industry: 'Healthcare', example: 'HIPAA-compliant telemedicine platforms with real-time video sync.' }
    ],
    techStack: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Three.js'],
    process: [
      { step: '01', title: 'Technical Discovery', desc: 'Architecture blueprinting, schema design, and performance goals.' },
      { step: '02', title: 'UI/UX Prototyping', desc: 'High-fidelity wireframes and interactive micro-animation flows.' },
      { step: '03', title: 'Core Development', desc: 'Decoupled API endpoints, dynamic page routes, and database models.' },
      { step: '04', title: 'Performance Audit', desc: 'Lighthouse scoring, WebGL FPS verification, and automated testing.' },
      { step: '05', title: 'Deployment & CI/CD', desc: 'Zero-downtime containerized production releases.' }
    ]
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    tagline: 'Cross-Platform & Native Mobile Apps Engineered for Engagement',
    shortDescription: 'Feature-rich iOS and Android mobile solutions with fluid 60 FPS animations, offline data synchronization, and enterprise security.',
    interactiveType: 'smartphone-3d',
    iconName: 'Smartphone',
    problem: 'Companies lose over 60% of mobile users due to clunky cross-platform wrappers, high battery consumption, and stuttering frame rates.',
    solution: 'We build fluid React Native and Flutter mobile applications engineered to match native Swift and Kotlin performance.',
    features: [
      { title: 'Native Performance', description: '60 FPS animations with hardware-accelerated gesture navigation.' },
      { title: 'Offline-First Sync', description: 'Local database caching with automated background sync.' },
      { title: 'Biometric Security', description: 'FaceID, Fingerprint, and keychain token storage.' },
      { title: 'Push Notification Pipelines', description: 'Segmented automated notifications driving engagement.' }
    ],
    industryUseCases: [
      { industry: 'Logistics', example: 'Driver routing with live telemetry.' },
      { industry: 'Fitness & Health', example: 'Biometric tracking with Apple Health and Google Fit sync.' }
    ],
    techStack: ['React Native', 'Flutter', 'Node.js', 'Firebase', 'GraphQL', 'Tailwind'],
    process: [
      { step: '01', title: 'Mobile UX Architecture', desc: 'User flows, thumb-zone ergonomics, and navigation paradigms.' },
      { step: '02', title: 'Engine Setup', desc: 'Cross-platform configuration with native bridges.' },
      { step: '03', title: 'Feature Sprints', desc: 'Biometric authentication, payments, and push notifications.' }
    ]
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation & AI',
    tagline: 'Modernize Legacy Workflows with Intelligent Automation & Cloud Native Systems',
    shortDescription: 'Strategic technology overhaul replacing technical debt with scalable cloud infrastructure, automated workflows, and custom AI agents.',
    interactiveType: 'growth-chart-3d',
    iconName: 'TrendingUp',
    problem: 'Siloed data and manual spreadsheets create bottlenecks that prevent legacy businesses from scaling.',
    solution: 'We architect enterprise AI pipelines, automated ETL pipelines, and cloud migrations that deliver 10x operational velocity.',
    features: [
      { title: 'Autonomous AI Agents', description: 'LLM agents integrated into database and CRM workflows.' },
      { title: 'Cloud Infrastructure', description: 'Kubernetes, serverless microservices, and auto-scaling.' },
      { title: 'Legacy Migration', description: 'Zero-downtime refactoring of monolithic architectures.' }
    ],
    industryUseCases: [
      { industry: 'Manufacturing', example: 'Automated predictive maintenance.' },
      { industry: 'Professional Services', example: 'Document parsing and intelligent contracting.' }
    ],
    techStack: ['Python', 'OpenAI API', 'Node.js', 'Docker', 'AWS', 'MongoDB'],
    process: [
      { step: '01', title: 'Audit', desc: 'Legacy codebase assessment and bottleneck mapping.' },
      { step: '02', title: 'AI Roadmap', desc: 'Determining automation ROI targets.' },
      { step: '03', title: 'Migration', desc: 'Incremental microservice deployment.' }
    ]
  },
  {
    slug: 'ar-vr',
    title: 'AR / VR & Spatial Computing',
    tagline: 'Next-Generation Immersive Spatial Interfaces for Web and Headsets',
    shortDescription: 'Transform how users experience your products with WebXR, virtual interactive showrooms, and Augmented Reality product visualizers.',
    interactiveType: 'spatial-reticle-3d',
    iconName: 'Glasses',
    problem: 'Traditional flat images fail to convey scale, texture, and emotional resonance in digital sales.',
    solution: 'We build interactive WebXR and AR environments that run natively in mobile browsers with zero app installation.',
    features: [
      { title: 'App-Free WebAR', description: 'Instant camera-based AR placement via standard mobile browsers.' },
      { title: 'Virtual Showrooms', description: 'Spatial 3D architectural walk-throughs.' },
      { title: 'Headset Compatibility', description: 'Optimized for Apple Vision Pro and Meta Quest 3.' }
    ],
    industryUseCases: [
      { industry: 'Real Estate', example: 'Interactive virtual floor plan inspections.' },
      { industry: 'Luxury Goods', example: 'Virtual try-on for watches and jewelry.' }
    ],
    techStack: ['WebXR', 'Three.js', 'A-Frame', 'Blender', 'Draco Compression'],
    process: [
      { step: '01', title: 'Spatial Concept', desc: 'World scale and camera ergonomics.' },
      { step: '02', title: '3D Geometry', desc: 'Low-poly topology with high-res PBR baking.' }
    ]
  },
  {
    slug: '3d-modeling',
    title: '3D Modeling & Real-Time WebGL',
    tagline: 'Hyper-Realistic 3D Product Visualizers for Modern E-Commerce',
    shortDescription: 'Custom 3D CAD modeling, PBR texture baking, Draco compression, and real-time WebGL configurators that drive conversion.',
    interactiveType: 'mesh-cube-3d',
    iconName: 'Box',
    problem: 'Heavy 3D files cause slow page loads, poor mobile battery life, and high bounce rates.',
    solution: 'We optimize 3D meshes using Draco compression, sub-pixel LODs, and PBR textures to achieve sub-second load times at 60 FPS.',
    features: [
      { title: 'Draco Compression', description: 'Shrinking 40MB models down to under 1.5MB for fast loading.' },
      { title: 'PBR Shaders', description: 'Realistic physical materials including glass, gold, and leather.' },
      { title: 'Dynamic Customizers', description: 'Real-time color and material switches.' }
    ],
    industryUseCases: [
      { industry: 'Automotive', example: 'Real-time vehicle configuration.' },
      { industry: 'Cosmetics & Fragrance', example: '3D glass bottle visualizer.' }
    ],
    techStack: ['Blender', 'Substance Painter', 'Three.js', 'React Three Fiber', 'GLTF/GLB'],
    process: [
      { step: '01', title: 'Asset Modeling', desc: 'Precision modeling and UV mapping.' },
      { step: '02', title: 'Compression', desc: 'Optimizing draw calls for WebGL.' }
    ]
  },
  {
    slug: 'ui-ux-design',
    title: 'UI / UX Design & Brand Systems',
    tagline: 'Obsidian & Gold Aesthetics Powered by Cognitive Ergonomics',
    shortDescription: 'High-conversion digital experiences, design systems, interactive micro-interactions, and design-to-code pipelines.',
    interactiveType: 'floating-ui-3d',
    iconName: 'Layout',
    problem: 'Generic agency templates fail to differentiate luxury brands, leading to poor brand equity.',
    solution: 'We design bespoke design systems featuring dark glassmorphic surfaces, curated color harmonies, and fluid micro-animations.',
    features: [
      { title: 'Design Systems', description: 'Comprehensive component tokens in Figma and code.' },
      { title: 'Micro-Animations', description: 'Choreographed transitions with GSAP and Framer Motion.' },
      { title: 'Accessibility', description: 'WCAG 2.1 AA compliant color contrasts.' }
    ],
    industryUseCases: [
      { industry: 'SaaS Platforms', example: 'Complex enterprise workflow simplification.' },
      { industry: 'Corporate Portals', example: 'Executive branding.' }
    ],
    techStack: ['Figma', 'Framer Motion', 'Tailwind CSS', 'GSAP'],
    process: [
      { step: '01', title: 'User Research', desc: 'Competitor benchmarking and user journey mapping.' },
      { step: '02', title: 'Component System', desc: 'Typography scales, color tokens, and interactive states.' }
    ]
  }
];

const initialProjects = [
  {
    slug: 'wanaromah',
    title: 'Wanaromah Perfumers — Luxury 3D Fragrance Experience',
    client: 'Wanaromah Luxury Perfumery',
    industry: 'Luxury Fragrance & E-Commerce',
    featured: true,
    has3DExperience: true,
    interactive3DType: 'perfume-bottle-3d',
    shortDesc: 'A digital flagship experience featuring real-time WebGL 3D perfume bottle customizers and sensory fragrance storytelling.',
    challenge: 'Selling luxury artisanal fragrances online is difficult because buyers cannot sample scents physically.',
    solution: 'We designed an interactive 3D WebGL showcase where visitors can rotate, inspect, and customize the metallic gold bottle cap and glass refraction in real time.',
    technologies: ['Next.js', 'React Three Fiber', 'Three.js', 'Drei', 'Tailwind CSS', 'Framer Motion'],
    results: [
      { metric: '+240%', label: 'Average Time on Page' },
      { metric: '+85%', label: 'Add-to-Cart Conversion' },
      { metric: '42,000+', label: '3D Bottle Customizations' }
    ],
    testimonial: {
      quote: 'Riyadvi transformed our online boutique from a static catalog into an enchanting digital flagship.',
      author: 'Fatima Al-Mansoor',
      role: 'Creative Director, Wanaromah Perfumers'
    },
    relatedServices: ['3d-modeling', 'web-development', 'ui-ux-design']
  },
  {
    slug: 'pearl-housing',
    title: 'Pearl Housing — Real Estate 3D Architectural Showcase',
    client: 'Pearl Housing Developments',
    industry: 'Real Estate & Property Development',
    featured: true,
    has3DExperience: true,
    interactive3DType: 'architectural-cube-3d',
    shortDesc: 'Interactive spatial 3D building exploration and virtual unit selector driving high-intent luxury property inquiries.',
    challenge: 'Prospective buyers struggled to visualize off-plan architectural developments from flat 2D brochures.',
    solution: 'We engineered an interactive WebGL 3D architectural viewer allowing buyers to rotate the tower in 3D, inspect floor heights, daylight simulations, and view individual unit layouts.',
    technologies: ['Next.js', 'Three.js', 'React Three Fiber', 'GSAP', 'Node.js', 'Tailwind CSS'],
    results: [
      { metric: '$18.5M', label: 'Off-Plan Sales Generated' },
      { metric: '-40%', label: 'Sales Cycle Duration' },
      { metric: '92%', label: 'Positive Buyer Feedback' }
    ],
    testimonial: {
      quote: 'The interactive 3D architectural showcase completely changed how we pitch luxury developments.',
      author: 'Rajiv Mehta',
      role: 'Managing Director, Pearl Housing'
    },
    relatedServices: ['ar-vr', '3d-modeling', 'web-development']
  },
  {
    slug: 'laxmi-astro-ai',
    title: 'Laxmi Astro AI — Predictive Intelligence Platform',
    client: 'Laxmi Technologies',
    industry: 'AI & Consumer Intelligence',
    featured: true,
    has3DExperience: false,
    interactive3DType: 'none',
    shortDesc: 'AI-powered astrological insights and personalized predictive intelligence engine serving over 1.2M monthly active users.',
    challenge: 'Handling real-time AI planetary calculations and serving millions of concurrent daily chart generation requests without latency spikes.',
    solution: 'Built a reactive Next.js client paired with an event-driven Node.js microservice architecture, integrating proprietary LLM prompts and vector caching.',
    technologies: ['Next.js', 'Node.js', 'Python', 'FastAPI', 'Redis', 'MongoDB'],
    results: [
      { metric: '1.2M+', label: 'Monthly Active Users' },
      { metric: '42ms', label: 'Median Inference Latency' },
      { metric: '99.98%', label: 'System Uptime' }
    ],
    testimonial: {
      quote: 'The architecture Riyadvi built scales effortlessly during massive traffic spikes.',
      author: 'Ananya Deshmukh',
      role: 'Chief Technology Officer, Laxmi Technologies'
    },
    relatedServices: ['digital-transformation', 'web-development']
  }
];

const initialArticles = [
  {
    slug: 'the-future-of-3d-web-experiences-webgl-r3f',
    title: 'The Future of 3D Web Experiences: Why Spatial Web is Replacing Flat Design',
    category: '3D & Spatial Web',
    featured: true,
    publishedAt: 'October 8, 2026',
    readTime: '6 min read',
    author: {
      name: 'Dr. Vikramaditya Rao',
      role: 'Head of Spatial Computing at Riyadvi'
    },
    excerpt: 'Explore how WebGL, React Three Fiber, and Draco compression make real-time 3D web experiences load under 1 second without draining mobile battery.',
    tags: ['Three.js', 'React Three Fiber', 'WebXR', 'Performance'],
    content: `### The Shift from Flat Interfaces to Interactive Dimensions
Over the past decade, web design settled into predictable patterns: flat grids, static hero images, and standard card components.

### 1. Why Modern 3D Web is Not "Flash 2.0"
Modern WebGL executes natively on the device GPU via standard browser APIs, using Draco compression to shrink 40MB models under 1.5MB.

### 2. Micro-Interactions that Drive Real Business Revenue
Allowing users to rotate, examine, and customize products in real-time 3D reduces returns by up to 35% while lifting purchase intent by 64%.`
  },
  {
    slug: 'how-enterprise-ai-agents-are-transforming-custom-software',
    title: 'How Enterprise AI Agents Are Revolutionizing Custom Software Development',
    category: 'AI & Automation',
    featured: false,
    publishedAt: 'September 24, 2026',
    readTime: '5 min read',
    author: {
      name: 'Priya Sundaram',
      role: 'VP of AI Solutions at Riyadvi'
    },
    excerpt: 'Moving beyond generic chatbots: how autonomous AI agents integrated into database workflows deliver 10x business productivity.',
    tags: ['Artificial Intelligence', 'LLMs', 'Workflow Automation', 'Enterprise'],
    content: `### Beyond the Conversational Chatbot
The first wave of AI adoption was marked by simple chatbots that answered FAQs. Today, enterprises are deploying autonomous AI Agents capable of executing multi-step business logic across databases.

### Key Pillars of Modern AI Architecture:
1. Tool Calling & Function Orchestration: Allowing models to safely query databases.
2. Context-Aware Retrieval (RAG): Grounding decisions in proprietary company documentation.
3. Deterministic Guardrails: Ensuring outputs strictly follow business rules.`
  }
];

const initialJobs = [
  {
    slug: 'senior-full-stack-engineer',
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    designation: 'Senior Engineer',
    experience: 'Senior (5+ yrs)',
    location: 'Remote / Hybrid (Bengaluru, IN)',
    type: 'Full-time',
    salaryRange: '₹18,00,000 – ₹28,00,000 / yr',
    overview: 'Lead the architecture of modern enterprise web applications combining Next.js, Node.js, and interactive WebGL experiences.',
    responsibilities: [
      'Architect robust, decoupled microservices with Node.js, Express, and MongoDB.',
      'Build dynamic, server-rendered Next.js applications optimized for sub-second Core Web Vitals.',
      'Collaborate with 3D designers to integrate React Three Fiber canvases into client applications.'
    ],
    requirements: [
      '5+ years experience building production full-stack web platforms.',
      'Deep mastery of React, Next.js (App Router), TypeScript/JavaScript, and Node.js.',
      'Solid understanding of database modeling, caching (Redis), and REST APIs.'
    ],
    benefits: [
      'Competitive compensation + performance equity',
      'Flexible remote/hybrid work policy',
      'Premium health and wellness coverage'
    ]
  },
  {
    slug: '3d-web-specialist',
    title: '3D Web Specialist (Three.js & WebGL)',
    department: '3D & Spatial',
    designation: 'Lead Creative Developer',
    experience: 'Mid (3-5 yrs)',
    location: 'Remote / Hybrid (Bengaluru, IN)',
    type: 'Full-time',
    salaryRange: '₹15,00,000 – ₹24,00,000 / yr',
    overview: 'Build industry-leading interactive 3D WebGL experiences using Three.js, React Three Fiber, GLSL shaders, and Blender.',
    responsibilities: [
      'Develop custom WebGL shaders and interactive product configurators.',
      'Optimize 3D assets for 60 FPS mobile performance using Draco compression.',
      'Integrate 3D canvases seamlessly into Next.js React component hierarchies.'
    ],
    requirements: [
      'Proficiency in Three.js, React Three Fiber, and WebGL.',
      'Experience with GLTF/GLB asset optimization, PBR materials, and lighting.',
      'Strong eye for motion, typography, and luxury aesthetics.'
    ],
    benefits: [
      'Top-tier Apple hardware workstation',
      'Annual 3D software license & learning stipend',
      'Flexible working hours'
    ]
  }
];

export async function seedInitialContent() {
  try {
    const serviceCount = await Service.countDocuments();
    if (serviceCount === 0) {
      await Service.insertMany(initialServices);
      console.log('[Seed]: Successfully seeded initial services collection');
    }

    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      await Project.insertMany(initialProjects);
      console.log('[Seed]: Successfully seeded initial projects collection');
    }

    const articleCount = await Article.countDocuments();
    if (articleCount === 0) {
      await Article.insertMany(initialArticles);
      console.log('[Seed]: Successfully seeded initial articles collection');
    }

    const jobCount = await Job.countDocuments();
    if (jobCount === 0) {
      await Job.insertMany(initialJobs);
      console.log('[Seed]: Successfully seeded initial jobs collection');
    }
  } catch (err) {
    console.error('[Seed Error]: Error verifying seed content:', err.message);
  }
}
