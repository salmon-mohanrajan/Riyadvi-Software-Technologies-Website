/**
 * Blog Dynamic Data
 * Fulfills Assignment Section 21 & 24.
 * Powers the /blog directory and dynamic /blog/[slug] article pages.
 */
export const blogCategories = [
  'All',
  '3D & Spatial Web',
  'AI & Automation',
  'Engineering Architecture',
  'Digital Strategy',
];

export const blogData = [
  {
    slug: 'the-future-of-3d-web-experiences-webgl-r3f',
    title: 'The Future of 3D Web Experiences: Why Spatial Web is Replacing Flat Design',
    category: '3D & Spatial Web',
    featured: true,
    publishedAt: 'October 8, 2026',
    readTime: '6 min read',
    author: {
      name: 'Dr. Vikramaditya Rao',
      role: 'Head of Spatial Computing at Riyadvi',
    },
    excerpt:
      'Explore how WebGL, React Three Fiber, and Draco compression make real-time 3D web experiences load under 1 second without draining mobile battery.',
    tags: ['Three.js', 'React Three Fiber', 'WebXR', 'Performance'],
    content: `
### The Shift from Flat Interfaces to Interactive Dimensions

Over the past decade, web design settled into predictable patterns: flat grids, static hero images, and standard card components. While clean and responsive, flat design struggles to convey tactile craftsmanship, scale, and emotional resonance.

Today, advances in browser WebGL APIs, GPU efficiency, and lightweight libraries like React Three Fiber have removed the barrier between the web and spatial computing.

### 1. Why Modern 3D Web is Not "Flash 2.0"
In the early 2000s, 3D experiences on the web relied on heavy proprietary plugins that crashed browsers. In contrast, modern WebGL:
* Executes natively on the device GPU via standard browser APIs.
* Uses **Draco compression**, shrinking 40MB 3D geometry down to under 1.5MB.
* Seamlessly renders within React component trees through fiber reconciliation.

### 2. Micro-Interactions that Drive Real Business Revenue
3D on the web is not a novelty; it is a conversion catalyst. Case studies across e-commerce show that allowing users to rotate, examine, and customize products in real-time 3D reduces returns by up to **35%** while lifting purchase intent by **64%**.

### 3. Mobile Optimization: The 60 FPS Rule
For a 3D corporate experience to succeed, it must respect mobile constraints:
* **Lowering pixel ratios**: Limiting \`dpr\` to 1.5 on high-density mobile screens prevents GPU throttling.
* **Instanced rendering**: Drawing thousands of particle nodes in a single draw call.
* **Progressive enhancement**: Providing graceful fallback rendering on low-power devices.
    `,
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
      role: 'VP of AI Solutions at Riyadvi',
    },
    excerpt:
      'Moving beyond generic chatbots: how autonomous AI agents integrated into database workflows deliver 10x business productivity.',
    tags: ['Artificial Intelligence', 'LLMs', 'Workflow Automation', 'Enterprise'],
    content: `
### Beyond the Conversational Chatbot
The first wave of AI adoption was marked by simple chatbots that answered FAQs. Today, enterprises are deploying autonomous **AI Agents** capable of executing multi-step business logic across disparate ERPs, CRMs, and internal databases.

### Key Pillars of Modern AI Architecture:
1. **Tool Calling & Function Orchestration**: Allowing models to safely query databases and trigger REST APIs.
2. **Context-Aware Retrieval (RAG)**: Grounding decisions in proprietary company documentation.
3. **Deterministic Guardrails**: Ensuring outputs strictly follow business rules and compliance policies.
    `,
  },
  {
    slug: 'architecting-high-performance-nextjs-microfrontends',
    title: 'Architecting High-Performance Full-Stack Applications with Next.js App Router',
    category: 'Engineering Architecture',
    featured: false,
    publishedAt: 'September 12, 2026',
    readTime: '7 min read',
    author: {
      name: 'Aditya Nair',
      role: 'Lead Full-Stack Architect at Riyadvi',
    },
    excerpt:
      'A deep dive into React Server Components, streaming SSR, edge caching, and decoupled API microservices.',
    tags: ['Next.js', 'React Server Components', 'Node.js', 'Performance'],
    content: `
### The Convergence of Server and Client
Next.js App Router fundamentally changed how React applications are structured by making Server Components the default primitive.

By keeping heavy data querying, markdown parsers, and sensitive API keys strictly on the server, client bundles are reduced to minimal interactive islands.

### Production Best Practices:
* **Streaming with Suspense**: Instant First Contentful Paint while heavy dynamic components stream in.
* **Selective Hydration**: Only hydrating 3D canvas and interactive forms on the client.
* **Decoupled Backend Services**: Connecting Next.js to robust Express/MongoDB microservices for secure transaction handling.
    `,
  },
];
