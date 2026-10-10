/**
 * Portfolio Dynamic Case Studies Data
 * Fulfills Assignment Sections 18 & 24.
 * Powers the /portfolio index and dynamic /portfolio/[slug] case study pages.
 */
export const portfolioData = [
  {
    slug: 'wanaromah',
    title: 'Wanaromah Perfumers — Luxury 3D Fragrance Experience',
    client: 'Wanaromah Luxury Perfumery',
    industry: 'Luxury Fragrance & E-Commerce',
    featured: true,
    has3DExperience: true,
    interactive3DType: 'perfume-bottle-3d', // Interactive 3D perfume bottle with glass refraction & gold cap
    shortDesc:
      'A digital flagship experience featuring real-time WebGL 3D perfume bottle customizers and sensory fragrance storytelling.',
    challenge:
      'Selling luxury artisanal fragrances online is difficult because buyers cannot sample scents physically. Wanaromah needed an evocative digital presence that conveyed luxury craftsmanship, fragrance notes, and bespoke bottle design.',
    solution:
      'We designed an interactive 3D WebGL showcase where visitors can rotate, inspect, and customize the metallic gold bottle cap and glass refraction in real time, accompanied by olfactory note visualizers.',
    technologies: ['Next.js', 'React Three Fiber', 'Three.js', 'Drei', 'Tailwind CSS', 'Framer Motion'],
    results: [
      { metric: '+240%', label: 'Average Time on Page' },
      { metric: '+85%', label: 'Add-to-Cart Conversion' },
      { metric: '42,000+', label: '3D Bottle Customizations' },
    ],
    testimonial: {
      quote:
        'Riyadvi transformed our online boutique from a static catalog into an enchanting digital flagship. The 3D bottle interaction elevated our brand perception globally.',
      author: 'Fatima Al-Mansoor',
      role: 'Creative Director, Wanaromah Perfumers',
    },
    relatedServices: ['3d-modeling', 'web-development', 'ui-ux-design'],
  },
  {
    slug: 'pearl-housing',
    title: 'Pearl Housing — Real Estate 3D Architectural Showcase',
    client: 'Pearl Housing Developments',
    industry: 'Real Estate & Property Development',
    featured: true,
    has3DExperience: true,
    interactive3DType: 'architectural-cube-3d', // 3D interactive isometric building model
    shortDesc:
      'Interactive spatial 3D building exploration and virtual unit selector driving high-intent luxury property inquiries.',
    challenge:
      'Prospective buyers struggled to visualize off-plan architectural developments from flat 2D brochures, resulting in long sales cycles.',
    solution:
      'We engineered an interactive WebGL 3D architectural viewer allowing buyers to rotate the tower in 3D, inspect floor heights, daylight simulations, and view individual unit layouts.',
    technologies: ['Next.js', 'Three.js', 'React Three Fiber', 'GSAP', 'Node.js', 'Tailwind CSS'],
    results: [
      { metric: '$18.5M', label: 'Off-Plan Sales Generated' },
      { metric: '-40%', label: 'Sales Cycle Duration' },
      { metric: '92%', label: 'Positive Buyer Feedback' },
    ],
    testimonial: {
      quote:
        'The interactive 3D architectural showcase completely changed how we pitch luxury developments. Buyers can visualize their future home before ground is broken.',
      author: 'Rajiv Mehta',
      role: 'Managing Director, Pearl Housing',
    },
    relatedServices: ['ar-vr', '3d-modeling', 'web-development'],
  },
  {
    slug: 'laxmi-astro-ai',
    title: 'Laxmi Astro AI — Predictive Intelligence Platform',
    client: 'Laxmi Technologies',
    industry: 'AI & Consumer Intelligence',
    featured: true,
    has3DExperience: false,
    shortDesc:
      'AI-powered astrological insights and personalized predictive intelligence engine serving over 1.2M monthly active users.',
    challenge:
      'Handling real-time AI planetary calculations and serving millions of concurrent daily chart generation requests without latency spikes.',
    solution:
      'Built a reactive Next.js client paired with an event-driven Node.js microservice architecture, integrating proprietary LLM prompts and vector caching.',
    technologies: ['Next.js', 'Python AI Microservice', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    results: [
      { metric: '1.2M+', label: 'Monthly Active Users' },
      { metric: '<180ms', label: 'Average Query Latency' },
      { metric: '4.9/5', label: 'App Store Rating' },
    ],
    testimonial: {
      quote:
        'Riyadvi’s technical expertise combined state-of-the-art AI workflows with an exceptionally sleek UI. Our users love the intuitive experience.',
      author: 'Aarav Sharma',
      role: 'Founder, Laxmi Astro AI',
    },
    relatedServices: ['web-development', 'app-development', 'ui-ux-design'],
  },
  {
    slug: 'puratap',
    title: 'Puratap — Smart Water Purification IoT Platform',
    client: 'Puratap Systems',
    industry: 'Smart IoT & CleanTech',
    featured: false,
    has3DExperience: false,
    shortDesc:
      'Connected telemetry dashboard and customer maintenance booking portal for advanced residential water filtration.',
    challenge:
      'Manual technician dispatch and lack of real-time filter telemetry led to delayed filter replacements and customer dissatisfaction.',
    solution:
      'Developed a unified IoT telemetry portal that connects purification hardware to cloud data pipelines with automatic maintenance triggers.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'MQTT', 'Tailwind CSS'],
    results: [
      { metric: '+64%', label: 'Timely Filter Renewals' },
      { metric: '-35%', label: 'Support Ticket Volume' },
      { metric: '99.98%', label: 'System Uptime' },
    ],
    testimonial: {
      quote:
        'Connecting our filtration units to a modern customer portal allowed us to deliver proactive service before filters even expire.',
      author: 'David Chen',
      role: 'Head of Operations, Puratap',
    },
    relatedServices: ['web-development', 'app-development'],
  },
  {
    slug: 'tony-and-guy',
    title: 'Tony & Guy — Premier Salon Stylist Booking Engine',
    client: 'Tony & Guy Regional Franchise',
    industry: 'Luxury Hair & Beauty',
    featured: false,
    has3DExperience: false,
    shortDesc:
      'High-velocity appointment booking system and stylist portfolio showcase boosting repeat booking retention.',
    challenge:
      'High phone-booking friction and no-show rates during peak salon hours.',
    solution:
      'Created an intuitive mobile-first web app with real-time stylist availability, SMS calendar sync, and contactless deposits.',
    technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'Stripe API', 'Twilio'],
    results: [
      { metric: '+120%', label: 'Digital Bookings Growth' },
      { metric: '-70%', label: 'Appointment No-Shows' },
      { metric: '18,000+', label: 'Monthly Appointments Booked' },
    ],
    testimonial: {
      quote:
        'Our salons operate smoother than ever. Clients love selecting their favorite stylist with two taps.',
      author: 'Sophie Laurent',
      role: 'Franchise Partner, Tony & Guy',
    },
    relatedServices: ['app-development', 'ui-ux-design'],
  },
  {
    slug: 'cube-dental',
    title: 'Cube Dental — Modern Clinic Patient Care Portal',
    client: 'Cube Dental Health Group',
    industry: 'Healthcare & Dentistry',
    featured: false,
    has3DExperience: false,
    shortDesc:
      'Patient intake automation, treatment visualization, and digital smile preview portal.',
    challenge:
      'Paper-heavy patient onboarding and anxiety around complex dental procedures.',
    solution:
      'Designed a reassuring, clean digital portal with interactive treatment step walkthroughs and automated intake forms.',
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    results: [
      { metric: '-15 min', label: 'Average Waiting Room Time' },
      { metric: '+48%', label: 'Preventative Care Bookings' },
      { metric: '100%', label: 'Digital Record Adoption' },
    ],
    testimonial: {
      quote:
        'Patients arrive relaxed and informed because they completed their digital intake on their phone prior to the visit.',
      author: 'Dr. Marcus Vance',
      role: 'Chief Dentist, Cube Dental',
    },
    relatedServices: ['web-development', 'ui-ux-design'],
  },
];
