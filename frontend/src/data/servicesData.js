/**
 * Services Dynamic Data
 * Fulfills Assignment Sections 10, 13, 19, and 24.
 * Powers both the homepage services showcase and the dynamic /services/[slug] routes.
 */
export const servicesData = [
  {
    slug: 'web-development',
    title: 'Web Development',
    tagline: 'High-Performance, Scalable Web Platforms Built for Global Scale',
    shortDescription:
      'Enterprise-grade web applications, progressive web apps, and dynamic architectures built with Next.js, React, and Node.js.',
    interactiveType: 'browser-3d', // Interactive 3D Browser canvas
    iconName: 'Globe',
    problem:
      'Legacy websites suffer from slow load times, poor mobile conversion rates, and brittle codebases that cannot scale as business grows.',
    solution:
      'We engineer ultra-fast, server-rendered web applications with modern micro-architectures, headless CMS readiness, and reactive 3D interfaces.',
    features: [
      {
        title: 'Full-Stack Engineering',
        description: 'Decoupled frontends with robust RESTful and GraphQL APIs built on Node.js and MongoDB.',
      },
      {
        title: 'Core Web Vitals Optimized',
        description: 'Sub-second first contentful paint (FCP) and 90+ Lighthouse performance scores.',
      },
      {
        title: 'Interactive 3D & Motion',
        description: 'Immersive WebGL elements with Three.js and React Three Fiber without sacrificing speed.',
      },
      {
        title: 'Enterprise Security',
        description: 'End-to-end data encryption, CSRF protection, and compliant cloud architectures.',
      },
    ],
    industryUseCases: [
      { industry: 'Fintech', example: 'High-frequency trading dashboards and secure banking customer portals.' },
      { industry: 'E-Commerce', example: 'High-volume headless storefronts with personalized AI recommendations.' },
      { industry: 'Healthcare', example: 'HIPAA-compliant telemedicine platforms with real-time video sync.' },
    ],
    techStack: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Three.js'],
    process: [
      { step: '01', title: 'Technical Discovery', desc: 'Architecture blueprinting, schema design, and performance goals.' },
      { step: '02', title: 'UI/UX Prototyping', desc: 'High-fidelity wireframes and interactive micro-animation flows.' },
      { step: '03', title: 'Agile Development', desc: 'Sprint-based full-stack coding with continuous CI/CD integration.' },
      { step: '04', title: 'Testing & QA', desc: 'Automated end-to-end tests, security scans, and cross-device audits.' },
      { step: '05', title: 'Deployment & SLA', desc: 'Zero-downtime deployment, CDN edge caching, and 24/7 monitoring.' },
    ],
    relatedCaseStudies: ['puratap', 'wanaromah', 'cube-dental'],
  },
  {
    slug: 'app-development',
    title: 'App Development',
    tagline: 'Native & Cross-Platform Mobile Applications Crafted for Intuitive Touch',
    shortDescription:
      'High-velocity iOS and Android applications combining fluid 60fps animations with deep device hardware integration.',
    interactiveType: 'smartphone-3d', // 3D Smartphone device preview
    iconName: 'Smartphone',
    problem:
      'High user drop-off caused by sluggish mobile UX, inconsistent behavior across Android/iOS, and complex offline synchronization.',
    solution:
      'We build sleek React Native and Flutter mobile applications backed by reliable cloud synchronization and native performance.',
    features: [
      {
        title: 'Cross-Platform Velocity',
        description: 'Single high-performance codebase targeting both iOS and Android stores simultaneously.',
      },
      {
        title: 'Offline-First Data Sync',
        description: 'Robust local caching and background synchronization when users reconnect.',
      },
      {
        title: 'Biometric & Push Engine',
        description: 'Seamless integration with Face ID, Fingerprint auth, and smart targeted push messaging.',
      },
      {
        title: 'Native Device APIs',
        description: 'Harness camera, accelerometer, Bluetooth LE, and GPS hardware with zero latency.',
      },
    ],
    industryUseCases: [
      { industry: 'Wellness & Fitness', example: 'Live biometric tracking and appointment scheduling apps.' },
      { industry: 'On-Demand Logistics', example: 'Real-time vehicle tracking and route optimization dispatch.' },
      { industry: 'Retail & Loyalty', example: 'In-store digital wallets and omnichannel loyalty cards.' },
    ],
    techStack: ['React Native', 'Flutter', 'TypeScript', 'Node.js', 'Firebase', 'AWS'],
    process: [
      { step: '01', title: 'User Journey Mapping', desc: 'Defining mobile interaction patterns and offline requirements.' },
      { step: '02', title: 'Mobile UI Systems', desc: 'Touch-optimized component design system with dark mode support.' },
      { step: '03', title: 'Native Bridge Build', desc: 'Core logic implementation and native SDK integrations.' },
      { step: '04', title: 'Beta Testing', desc: 'TestFlight and Google Play internal beta track distribution.' },
      { step: '05', title: 'App Store Launch', desc: 'Complete store compliance, metadata optimization, and publishing.' },
    ],
    relatedCaseStudies: ['tony-and-guy', 'sivam-physio', 'visdoc'],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Data-Engineered Growth, Targeted Acquisition & High-Conversion Funnels',
    shortDescription:
      'Performance marketing, algorithmic SEO, and data-driven conversion rate optimization that turns visitors into recurring revenue.',
    interactiveType: 'growth-chart-3d', // Animated data/growth visualization
    iconName: 'TrendingUp',
    problem:
      'Companies spend heavily on digital ads without tracking ROI, suffering from high acquisition costs and low landing-page conversions.',
    solution:
      'We unite creative messaging with algorithmic multi-channel funnels, attribution tracking, and systematic A/B optimization.',
    features: [
      {
        title: 'Algorithmic SEO',
        description: 'Technical on-page, semantic schema, and high-authority link acquisition.',
      },
      {
        title: 'Precision Paid Ads',
        description: 'High-ROI campaigns across Google Search, YouTube, Meta, and LinkedIn.',
      },
      {
        title: 'Conversion Rate Optimization (CRO)',
        description: 'Heatmap analysis, behavioral surveys, and continuous split testing.',
      },
      {
        title: 'Marketing Automation',
        description: 'Automated nurture sequences, drip campaigns, and CRM pipeline triggers.',
      },
    ],
    industryUseCases: [
      { industry: 'B2B SaaS', example: 'Targeted account-based marketing (ABM) driving qualified demo bookings.' },
      { industry: 'Real Estate', example: 'High-intent geo-targeted buyer lead funnels with instant CRM sync.' },
      { industry: 'Luxury Goods', example: 'High-engagement social story campaigns and retargeting workflows.' },
    ],
    techStack: ['Google Ads', 'Meta Business', 'HubSpot', 'Google Analytics 4', 'Mixpanel', 'SEMrush'],
    process: [
      { step: '01', title: 'Audience & Competitor Audit', desc: 'Deep-dive into keywords, customer segments, and competitor gaps.' },
      { step: '02', title: 'Funnel Architecture', desc: 'Crafting dedicated landing pages, ad creatives, and lead magnets.' },
      { step: '03', title: 'Campaign Launch', desc: 'Targeted launch across optimal channels with budget distribution.' },
      { step: '04', title: 'Data Analysis & Split Tests', desc: 'Daily attribution reviews and creative iteration testing.' },
      { step: '05', title: 'Scaling & Reporting', desc: 'Doubling down on winning channels with transparent ROI reports.' },
    ],
    relatedCaseStudies: ['pearl-housing', 'studio11', 'puratap'],
  },
  {
    slug: 'ar-vr',
    title: 'AR / VR Solutions',
    tagline: 'Immersive Spatial Computing & Extended Reality for Enterprise',
    shortDescription:
      'Next-generation WebXR and spatial 3D simulations enabling customers to interact with products in augmented or virtual spaces.',
    interactiveType: 'immersive-env-3d', // 3D Immersive environment
    iconName: 'Glasses',
    problem:
      'Customers hesitate on high-ticket purchases online because they cannot experience physical scale, texture, or real-world presence.',
    solution:
      'We bring products to life through web-based augmented reality (WebXR) and interactive 3D simulations accessible directly from any browser.',
    features: [
      {
        title: 'App-Free WebAR',
        description: 'Place 3D products directly in the user’s room using mobile browser cameras without app installs.',
      },
      {
        title: 'Virtual Showrooms & Tours',
        description: '360-degree interactive spatial walkthroughs for architectural and retail spaces.',
      },
      {
        title: 'Industrial Training Sims',
        description: 'Gamified VR training modules reducing physical equipment risks and onboarding hours.',
      },
      {
        title: 'Cross-Device WebXR',
        description: 'Seamless compatibility across Apple Vision Pro, Meta Quest, iOS, and Android.',
      },
    ],
    industryUseCases: [
      { industry: 'Real Estate & Architecture', example: 'Interactive virtual floorplan walkthroughs before construction.' },
      { industry: 'Manufacturing', example: 'Digital twin equipment simulations and guided assembly instructions.' },
      { industry: 'E-Commerce', example: '"View in Your Room" AR furniture and decor spatial previews.' },
    ],
    techStack: ['WebXR', 'Three.js', 'Unity', 'Blender', 'GLTF/GLB', 'React Three Fiber'],
    process: [
      { step: '01', title: 'Spatial Concepting', desc: 'Defining user immersion level, device targets, and 3D fidelity.' },
      { step: '02', title: '3D Asset Optimization', desc: 'Mesh retopology, baking PBR materials, and texture compression.' },
      { step: '03', title: 'Interaction Logic', desc: 'Physics simulation, raycasting, and intuitive spatial gestures.' },
      { step: '04', title: 'Device Performance Test', desc: 'Optimizing draw calls for smooth 60–90 fps frame rates.' },
      { step: '05', title: 'WebXR Deployment', desc: 'Direct browser integration with fallbacks for legacy hardware.' },
    ],
    relatedCaseStudies: ['pearl-housing', 'wanaromah', 'cube-dental'],
  },
  {
    slug: '3d-modeling',
    title: '3D Modeling & Visualization',
    tagline: 'Hyper-Realistic 3D Assets, Photorealistic Renders & WebGL Meshes',
    shortDescription:
      'Bespoke 3D modeling, texturing, rigging, and low-poly web optimization that make digital experiences visually unforgettable.',
    interactiveType: 'rotatable-mesh-3d', // Interactive rotatable 3D object
    iconName: 'Box',
    problem:
      'Standard 2D product photos fail to communicate craftsmanship, intricate engineering, and premium brand value.',
    solution:
      'We sculpt studio-grade 3D digital twins and web-optimized low-poly models with physically based rendering (PBR) materials.',
    features: [
      {
        title: 'Photorealistic PBR Materials',
        description: 'Physically accurate metalness, roughness, transmission, and environmental reflection maps.',
      },
      {
        title: 'Ultra-Low Poly Web Optimization',
        description: 'Drastic polygon reduction and Draco compression for rapid under-1-second web load times.',
      },
      {
        title: 'Rigging & Micro-Animations',
        description: 'Articulated mechanical parts, exploded views, and smooth procedural kinematics.',
      },
      {
        title: 'Multi-Format Export',
        description: 'Production-ready delivery in GLTF, GLB, USDZ, FBX, and OBJ formats.',
      },
    ],
    industryUseCases: [
      { industry: 'Consumer Electronics', example: 'Exploded interactive product views showcasing internal chipsets.' },
      { industry: 'Luxury Cosmetics', example: 'Photorealistic bottle refractions and metallic cap reflections.' },
      { industry: 'Biotechnology', example: 'Anatomical simulations and precision laboratory equipment models.' },
    ],
    techStack: ['Blender', 'Substance Painter', 'Three.js', 'Draco Compression', 'GLTF Pipeline'],
    process: [
      { step: '01', title: 'CAD / Reference Ingestion', desc: 'Ingesting technical drawings, dimensions, and reference photography.' },
      { step: '02', title: 'High-Poly Sculpting', desc: 'Crafting precision geometry with micro-bevels and intricate details.' },
      { step: '03', title: 'Retopology & UV Unwrapping', desc: 'Optimizing topology for lightweight real-time WebGL rendering.' },
      { step: '04', title: 'Texturing & PBR Baking', desc: 'Baking normal, ambient occlusion, and roughness maps.' },
      { step: '05', title: 'WebGL Optimization', desc: 'Draco compression reducing 50MB assets down to under 2MB.' },
    ],
    relatedCaseStudies: ['wanaromah', 'nugenica-biotech', 'puratap'],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    tagline: 'Human-Centered Digital Interfaces with Purposeful Micro-Interactions',
    shortDescription:
      'Intuitive design systems, seamless customer journeys, and premium interactive prototypes engineered to captivate and convert.',
    interactiveType: 'floating-ui-3d', // Floating interface elements
    iconName: 'Layout',
    problem:
      'Cluttered user interfaces confuse visitors, elevate customer churn, and fail to reflect the premium caliber of the brand.',
    solution:
      'We craft minimalist, accessible, and emotionally engaging digital products backed by extensive user research and design systems.',
    features: [
      {
        title: 'Comprehensive Design Systems',
        description: 'Scalable typography scales, atomic color tokens, and reusable component libraries.',
      },
      {
        title: 'Interactive Prototyping',
        description: 'High-fidelity Figma prototypes with realistic animation curves and micro-gestures.',
      },
      {
        title: 'User Journey Optimization',
        description: 'Frictionless checkout and sign-up flows designed to maximize retention.',
      },
      {
        title: 'WCAG Accessibility Standards',
        description: 'Strict contrast ratios, keyboard navigation, and screen-reader readiness.',
      },
    ],
    industryUseCases: [
      { industry: 'Enterprise SaaS', example: 'Complex multi-tenant analytics dashboards simplified for fast decision-making.' },
      { industry: 'Healthcare', example: 'Compassionate, zero-friction patient intake and telemedicine appointment portals.' },
      { industry: 'E-Commerce', example: 'Luxury checkout experience with express pay and one-click purchasing.' },
    ],
    techStack: ['Figma', 'Framer', 'Design Systems', 'Adobe Creative Cloud', 'Lottie'],
    process: [
      { step: '01', title: 'User Research & Personas', desc: 'Customer interviews, stakeholder goals, and journey empathy maps.' },
      { step: '02', title: 'Wireframing & Information Architecture', desc: 'Low-fidelity page flows establishing intuitive structural clarity.' },
      { step: '03', title: 'Visual UI Direction', desc: 'Color theory, typography pairing, and luxury design tokens.' },
      { step: '04', title: 'Interactive Prototyping', desc: 'Micro-animation behaviors and motion curve specifications.' },
      { step: '05', title: 'Design System Handoff', desc: 'Pixel-perfect developer documentation and token handoff in Figma.' },
    ],
    relatedCaseStudies: ['laxmi-astro-ai', 'studio11', 'visdoc'],
  },
];
