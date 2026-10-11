# Riyadvi Software Technologies — Corporate Flagship Revamp
> **Full-Stack Developer Interview Assignment Submission**  
> **Brand Identity:** Gold (`#D4AF37`) & Obsidian Black (`#000000`) • **Philosophy:** Spatial 3D Web, AI Transformation & Enterprise Engineering  
> **Stack:** Next.js 16 (Turbopack, App Router, React 19) • Three.js / React Three Fiber • Node.js / Express • MongoDB & Mongoose • Tailwind CSS v4 • GSAP & Lenis

---

## 📑 Table of Contents (Section 33 Compliance)
1. [Project Overview](#1-project-overview)
2. [Features](#2-features)
3. [Tech Stack](#3-tech-stack)
4. [Installation Instructions](#4-installation-instructions)
5. [Environment Variables](#5-environment-variables)
6. [Database Setup](#6-database-setup)
7. [API Endpoints](#7-api-endpoints)
8. [Deployment Instructions](#8-deployment-instructions)
9. [AI Tools Used (Assignment Section 7 Audit)](#9-ai-tools-used-assignment-section-7-audit)
10. [3D Libraries Used](#10-3d-libraries-used)
11. [Animation Libraries Used](#11-animation-libraries-used)
12. [Third-Party Assets](#12-third-party-assets)
13. [Performance Optimization](#13-performance-optimization)
14. [Known Limitations](#14-known-limitations)
15. [Future Improvements](#15-future-improvements)
16. [Bonus: 10–15 Minute Interview Presentation Script](#16-bonus-1015-minute-interview-presentation-script)

---

## 1. Project Overview

This repository contains the complete revamp of the corporate digital flagship for **Riyadvi Software Technologies**. Founded in **2021** in India, Riyadvi is positioned as an elite **Technology & Digital Solutions Partner** rather than an ordinary software outsourcing vendor.

Rather than a static, single-page marketing website, this platform is engineered as a decoupled, multi-page corporate web application. It showcases high-performance engineering, immersive 3D spatial computing, interactive business lead generation funnels, and a mission-control admin dashboard.

### Core Architectural Pillars
* **Luxury Brand Aesthetics:** Curated Obsidian Black (`#000000`, `#050608`), Warm Metallic Gold (`#D4AF37`, `#F3E5AB`), and precision glassmorphism (`backdrop-blur-xl`, border glow filters).
* **Decoupled Architecture:** Clean separation of a Next.js 16 App Router frontend from an independent Node.js / Express REST API microservice and a MongoDB database.
* **Spatial Computing & 3D WebGL:** Interactive hardware-accelerated 3D experiences maintaining a silky 60 FPS render loop.
* **Lead Conversion Engine:** Diagnostic wizards, gated resource funnels, and consultation workflows with real-time database persistence.

---

## 2. Features

### A. Immersive 3D Spatial Experiences
* **Interactive 3D Hero Scene:** Metallic gold core sphere with dynamic orbiting nodes that calculate mouse velocity and cursor coordinates in real time.
* **Interactive 3D Tech Constellation:** A 360-degree Fibonacci-distributed interactive globe featuring 20+ tech stacks across Full-Stack, Cloud & DevOps, AI & Automation, and Spatial 3D categories.
* **Wanaromah 3D Luxury Perfume Customizer (`/portfolio/wanaromah`):** Real-time WebGL transmission glass shader (`MeshPhysicalMaterial`), metallic gold cap, and 3 fragrance note color switchers (Rose Gold Oud, Emerald Citrus, Sapphire Night).
* **Pearl Housing 3D Architectural Spatial Explorer (`/portfolio/pearl-housing`):** Real-time isometric WebGL luxury residential tower with multi-tier floor inspection, beacon elevation highlights, and daylight atmosphere simulation (Sunset Golden Hour, Architectural Twilight, High Noon Daylight).

### B. Dynamic Corporate Multi-Page Structure
* **Flagship Homepage (`/`):** 3D Hero, interactive 6-stage Digital Transformation continuum, 6 interactive service micro-widgets, 3D Tech Constellation, and 2021–2026 milestone timeline.
* **Services Directory (`/services`) & Dynamic SSG Pages (`/services/[slug]`):** All 6 core services (Web Architecture, Mobile Apps, AI Automation, Spatial Web, 3D eCommerce, Cloud Infrastructure) with problem/solution breakdowns, use cases, and delivery processes.
* **Portfolio Hub (`/portfolio`) & 10 Dynamic Case Studies (`/portfolio/[slug]`):** In-depth case studies (Wanaromah, Pearl Housing, Laxmi Astro AI, Puratap, Tony & Guy, Cube Dental, etc.) with metrics, client testimonials, and tech badges.
* **Corporate About Us Page (`/about`):** Founded in 2021 in India, corporate mission & vision, 4 engineering philosophy values, historical milestones (2021–2026), and global delivery presence across 4 continents.
* **Tech Insights & Blog System (`/blog` & `/blog/[slug]`):** Category tabs (*3D & Spatial Web, AI & Automation, Engineering Architecture, Digital Strategy*), live client search filter, featured article spotlight, and dynamic markdown article reader.
* **Careers System (`/careers` & `/careers/[job-slug]`):** Open engineering roles, company perks, and job application submission forms connected live to MongoDB.
* **Contact & Consultation Scheduling (`/contact`):** Inbound project scope inquiries, WhatsApp direct hotline, and integrated Calendly booking modal.

### C. Lead Generation & Business Funnels
* **6-Point Business Health Checkup (`/business-health-checkup`):** An interactive diagnostic wizard that evaluates legacy architecture, mobile responsiveness, cloud elasticity, and AI readiness to compute a real-time health score (0–100) and store leads in MongoDB.
* **Software Project Planning Guide (`/software-project-planning-guide`):** Lead magnet registration funnel providing instant access to Riyadvi’s enterprise scoping framework.

### D. Mission-Control Admin Dashboard (`/admin`)
* **Real-Time KPI Cards:** Aggregated counts of total inquiries, consultations, diagnostic leads, average software health score, and job applications.
* **Interactive Inquiries Table:** View client requirements and update status in real time (*New* → *Contacted* → *In Progress* → *Archived*) via `PATCH` API requests.
* **Diagnostic Leads & Applications Records:** Instant visibility into incoming prospective client data.

---

## 3. Tech Stack

```
                     ┌───────────────────────────────────────────┐
                     │          Client Browser (User)           │
                     └─────────────────────┬─────────────────────┘
                                           │
                        HTTP / WebGL (60 FPS) / Lenis Smooth Scroll
                                           │
         ┌─────────────────────────────────┴─────────────────────────────────┐
         │                                                                   │
         ▼                                                                   ▼
┌─────────────────────────────────┐                         ┌─────────────────────────────────┐
│     Next.js 16 (Frontend)       │                         │      Express.js (Backend)       │
│  - Turbopack App Router         │                         │  - Modular REST Routing         │
│  - React 19 Server Components   │      JSON REST APIs     │  - Mongoose ODM Validation      │
│  - React Three Fiber & Drei     │ ◄─────────────────────► │  - CORS Security Policy         │
│  - Framer Motion & Lucide Icons │   (http://127.0.0.1:5000)│  - Aggregated Metrics API       │
│  - Tailwind CSS v4 Engine       │                         │  - Status Patch Handlers        │
└─────────────────────────────────┘                         └────────────────┬────────────────┘
                                                                             │
                                                                       Mongoose Driver
                                                                             │
                                                                             ▼
                                                            ┌─────────────────────────────────┐
                                                            │         MongoDB Database        │
                                                            │  - Inquiries & Consultations    │
                                                            │  - Business Health Checkups     │
                                                            │  - Lead Magnet Downloads        │
                                                            │  - Career Applications          │
                                                            └─────────────────────────────────┘
```

| Layer | Technologies | Rationale |
|---|---|---|
| **Frontend Framework** | **Next.js 16.4.0 (Turbopack, App Router, React 19)** | Sub-second cold compilation, React Server Components for minimal client bundles, and dynamic `<Suspense>` streaming. |
| **Styling & Design System** | **Tailwind CSS v4, Vanilla CSS Design Tokens** | High-speed utility styling, `@theme` variables, and custom glassmorphism. |
| **3D & Spatial Web** | **Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)** | Declarative WebGL rendering, custom transmission shaders, and orbital controls. |
| **Motion & Scroll** | **Framer Motion, GSAP, Lenis (`lenis`)** | Hardware-accelerated UI transitions and smooth inertia scrolling synchronized with 3D canvas render loops. |
| **Backend Framework** | **Node.js, Express.js (ES Modules `"type": "module"`)** | Lightweight, decoupled microservice architecture with non-blocking I/O. |
| **Database & ODM** | **MongoDB, Mongoose 8** | Flexible document storage with schema validation, indexing, and aggregation pipelines. |
| **Typography & Icons** | **Google Fonts (Inter & Poppins), Lucide React** | Clean enterprise typography and lightweight vector icons. |

---

## 4. Installation Instructions

### Prerequisites
* **Node.js**: v18.18.0 or higher (v20+ recommended)
* **npm**: v9.0.0 or higher
* **MongoDB**: A running local MongoDB daemon (`mongodb://127.0.0.1:27017`) or a free MongoDB Atlas connection string.

---

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/revamp-riyadvi-software-technologies.git
cd "Revamp Riyadvi Software Technologies Website"
```

---

### Step 2: Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create your `.env` file from the provided template:
   ```bash
   # On Windows PowerShell / Command Prompt:
   copy .env.example .env
   # On macOS / Linux:
   cp .env.example .env
   ```
4. Start the backend development server:
   ```bash
   npm run dev
   ```
   * The backend will start on **`http://127.0.0.1:5000`**.
   * Health endpoint: `http://127.0.0.1:5000/api/health`.

---

### Step 3: Frontend Setup
1. Open a second terminal window and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Next.js development server with Turbopack:
   ```bash
   npm run dev
   ```
   * The frontend platform will be live at **`http://localhost:3000`**.

---

## 5. Environment Variables

### Backend (`backend/.env`)

| Variable | Default Value | Description |
|---|---|---|
| `PORT` | `5000` | Port for the Express REST API server |
| `MONGODB_URI` | `mongodb://127.0.0.1:27017/riyadvi_db` | Connection URI for local MongoDB or MongoDB Atlas cluster |
| `CLIENT_URL` | `http://localhost:3000` | Allowed CORS origin for the Next.js frontend client |

### Frontend (`frontend/.env.local` - Optional)

| Variable | Default Value | Description |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | `http://127.0.0.1:5000/api` | Base REST API endpoint URL for backend requests |

---

## 6. Database Setup

The database layer utilizes **MongoDB** managed through **Mongoose 8** schemas with strict validation, default timestamps, and indexing.

### Mongoose Models Overview (`backend/src/models/`):
1. **`Inquiry.js`**: Stores contact form and general project inquiries (`name`, `email`, `phone`, `company`, `requirement`, `message`, `status: ['New', 'Contacted', 'In Progress', 'Archived']`).
2. **`Consultation.js`**: Stores consultation bookings (`servicesInterested`, `estimatedBudget`, `preferredDate`, `preferredTimeSlot`, `status`).
3. **`HealthCheckup.js`**: Stores 6-pillar business diagnostic logs (`answers: { q1, q2, q3, q4, q5, q6 }`, computed `calculatedScore: Number`, `company`, `email`, `contactPerson`).
4. **`LeadMagnet.js`**: Tracks Project Planning Guide downloads (`name`, `email`, `company`, `role`, `estimatedProjectScope`).
5. **`CareerApplication.js`**: Stores job applicants (`fullName`, `email`, `phone`, `position`, `jobSlug`, `portfolioUrl`, `resumeUrl`, `message`, `status`).
6. **`Service.js`**: Manages core capabilities (`slug`, `title`, `tagline`, `shortDescription`, `problem`, `solution`, `features`, `techStack`, `process`).
7. **`Project.js`**: Manages portfolio case studies & 3D models (`slug`, `title`, `client`, `industry`, `has3DExperience`, `interactive3DType`, `shortDesc`, `challenge`, `solution`, `technologies`, `results`).
8. **`Article.js`**: Manages technical blog articles (`slug`, `title`, `category`, `publishedAt`, `readTime`, `author`, `excerpt`, `tags`, `content`).
9. **`Job.js`**: Manages career opportunities (`slug`, `title`, `department`, `designation`, `experience`, `location`, `type`, `salaryRange`, `overview`).

### Connecting to MongoDB:
* **Local Instance:** Ensure MongoDB is running locally (`mongod`). The app automatically connects to `mongodb://127.0.0.1:27017/riyadvi_db`.
* **MongoDB Atlas (Cloud):** Replace `MONGODB_URI` in `backend/.env` with your connection string:
  ```env
  MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/riyadvi_db?retryWrites=true&w=majority
  ```

---

## 7. API Endpoints

Base URL: **`http://127.0.0.1:5000/api`**

### Public Ingestion Endpoints

| Method | Endpoint | Description | Request Body Payload | Status Code |
|---|---|---|---|---|
| `GET` | `/health` | Server health check | None | `200 OK` |
| `POST` | `/contact` | Submit general contact inquiry | `{ name, email, phone, company, requirement, message }` | `201 Created` |
| `POST` | `/consultation` | Book an architecture consultation | `{ name, email, phone, company, servicesInterested, estimatedBudget, preferredDate, preferredTimeSlot }` | `201 Created` |
| `POST` | `/health-checkup` | Submit 6-point business diagnostic | `{ answers: { q1, q2, q3, q4, q5, q6 }, calculatedScore, email, company, contactPerson }` | `201 Created` |
| `POST` | `/lead-magnet` | Register guide download | `{ name, email, company, role, estimatedProjectScope }` | `201 Created` |
| `POST` | `/applications` | Submit career job application | `{ fullName, email, phone, position, jobSlug, portfolioUrl, resumeUrl, message }` | `201 Created` |

### Management & Admin Endpoints

| Method | Endpoint | Description | Query / Params | Status Code |
|---|---|---|---|---|
| `GET` | `/admin/metrics` | Aggregated KPI card counts | None | `200 OK` |
| `GET` | `/admin/inquiries` | Retrieve all client inquiries | None | `200 OK` |
| `PATCH` | `/admin/inquiries/:id/status` | Update inquiry status | `:id` param, body: `{ status }` | `200 OK` |
| `GET` | `/admin/health-checkups` | Retrieve diagnostic leads & scores | None | `200 OK` |
| `GET` | `/admin/lead-magnets` | Retrieve guide registrants | None | `200 OK` |
| `GET` | `/admin/applications` | Retrieve job applicants | None | `200 OK` |

### Content Management System (CRUD) Endpoints

| Method | Endpoint | Description | Payload / Params | Status Code |
|---|---|---|---|---|
| `GET` | `/content/services` | Retrieve all services | None | `200 OK` |
| `POST` | `/content/services` | Create new service | Service schema body | `201 Created` |
| `PUT` | `/content/services/:id` | Update service by ID | `:id` param, updated fields | `200 OK` |
| `DELETE` | `/content/services/:id` | Delete service | `:id` param | `200 OK` |
| `GET` | `/content/projects` | Retrieve all portfolio projects | None | `200 OK` |
| `POST` | `/content/projects` | Create new project | Project schema body | `201 Created` |
| `PUT` | `/content/projects/:id` | Update project by ID | `:id` param, updated fields | `200 OK` |
| `DELETE` | `/content/projects/:id` | Delete project | `:id` param | `200 OK` |
| `GET` | `/content/articles` | Retrieve all blog articles | None | `200 OK` |
| `POST` | `/content/articles` | Create new article | Article schema body | `201 Created` |
| `PUT` | `/content/articles/:id` | Update article by ID | `:id` param, updated fields | `200 OK` |
| `DELETE` | `/content/articles/:id` | Delete article | `:id` param | `200 OK` |
| `GET` | `/content/jobs` | Retrieve all job postings | None | `200 OK` |
| `POST` | `/content/jobs` | Create new job posting | Job schema body | `201 Created` |
| `PUT` | `/content/jobs/:id` | Update job by ID | `:id` param, updated fields | `200 OK` |
| `DELETE` | `/content/jobs/:id` | Delete job posting | `:id` param | `200 OK` |

---

## 8. Deployment Instructions

### A. Frontend Deployment (Vercel)
1. Push the repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"New Project"**.
3. Set the **Root Directory** to `frontend`.
4. Framework Preset: **Next.js**.
5. Add Environment Variable:
   * `NEXT_PUBLIC_API_URL`: `https://your-backend-api.onrender.com/api`
6. Click **Deploy**. Vercel will build with Turbopack and deploy to global edge CDNs.

### B. Backend Deployment (Render / Railway / AWS ECS)
1. Sign in to [Render](https://render.com) and create a **"New Web Service"**.
2. Select your repository and set the **Root Directory** to `backend`.
3. Build Command: `npm install`
4. Start Command: `node src/server.js`
5. Add Environment Variables:
   * `PORT`: `5000`
   * `MONGODB_URI`: `mongodb+srv://...` (your MongoDB Atlas connection string)
   * `CLIENT_URL`: `https://your-frontend.vercel.app`
6. Deploy the service. Copy the live service URL into your frontend's `NEXT_PUBLIC_API_URL`.

---

## 9. AI Tools Used (Assignment Section 7 Audit)

Per **Section 7** of the assignment rubric, modern engineering emphasizes leveraging AI accelerators effectively while applying rigorous architectural discernment and manual validation.

### Tool Selection & Purpose Matrix

| AI Tool / Model | Primary Usage Area | Prompting Strategy & Context | Manual Developer Modifications |
|---|---|---|---|
| **Google Gemini 2.5 / Antigravity Assistant** | Full-Stack Architecture, 3D WebGL Integration, Mongoose Schemas & Next.js 16 App Router implementation | Provided explicit assignment guidelines, brand identity specifications (`#D4AF37` / `#000000`), and technical rubric requirements. | • Replaced static 3D placeholders with interactive WebGL shaders.<br>• Resolved Next.js 16 Turbopack dynamic route prerender streaming issues by introducing `<Suspense>` boundaries.<br>• Enforced `127.0.0.1` binding over `localhost` to eliminate Windows IPv6 socket drops. |
| **Claude 3.7 Sonnet** | Mathematical calculation of 3D Fibonacci sphere distribution & Lenis inertial scroll hook reconciliation | "Formulate an efficient algorithm to distribute N interactive nodes evenly across a 3D spherical mesh without clustering at the poles." | • Customized node drag and rotation inertia.<br>• Added hover hit-testing using Three.js Raycaster.<br>• Limited device pixel ratio to `1.5` on mobile devices to preserve 60 FPS battery efficiency. |
| **ChatGPT (GPT-4o)** | Business diagnostic calculation algorithm & Enterprise copy generation for 6 service categories | "Create a realistic 6-pillar software health rubric that calculates scoring out of 100 based on legacy debt, cloud elasticity, and AI readiness." | • Built automated score weighting logic in React state.<br>• Connected diagnostic outputs directly to MongoDB ingestion endpoint.<br>• Styled diagnostic scorecard with dynamic color gradients based on threshold score. |

### Architectural Discernment & Debugging Case Study: Turbopack `<Suspense>` Prerendering
* **The Issue:** Under Next.js 16 with Turbopack, accessing dynamic parameters (`const { slug } = await params`) during static generation triggered prerender warnings:
  ```
  Route segment config "dynamic" is not compatible with nextConfig.cacheComponents.
  Route "/portfolio/[slug]": Next.js encountered URL data during prerendering or a navigation.
  ```
* **AI Initial Suggestion:** Adding `export const dynamic = 'force-static'`.
* **Developer Intervention:** Recognizing that `force-static` conflicted with Turbopack's component caching engine, we decoupled the page into a server wrapper that returns a `<Suspense fallback={<LoadingSpinner />}>` wrapping an async child component. This preserved instant streaming navigation, eliminated build warnings, and satisfied Next.js 16 best practices.

---

## 10. 3D Libraries Used

| Library | Version | Purpose & Implementation Details |
|---|---|---|
| **`three`** | `^0.180.0` | Core WebGL graphics engine. Manages WebGLRenderer, Scene, PerspectiveCamera, PointLights, AmbientLights, and buffer geometries. |
| **`@react-three/fiber`** | `^9.0.0` | Declarative React reconciler for Three.js. Enables reactive state bindings, lifecycle management, and clean canvas mounting inside React component trees. |
| **`@react-three/drei`** | `^10.0.0` | Essential 3D helper library: `OrbitControls` for camera manipulation, `Float` for floating animations, `Sphere` for procedural geometry, `MeshPhysicalMaterial` for real-time glass transmission, and `Html` for 3D UI overlays. |

---

## 11. Animation Libraries Used

| Library | Purpose & Implementation Details |
|---|---|
| **`framer-motion`** | Page-level entrance animations, layout transitions (`<AnimatePresence>`), interactive micro-states, floating badges, and reactive category tab switches. |
| **`gsap`** | High-performance animation timelines, mathematical easing curves, and coordinate transformations. |
| **`lenis`** | Inertia smooth scrolling provider. Normalizes mousewheel and touch scroll physics across browsers, preventing jitter and frame drops during 3D WebGL render cycles. |

---

## 12. Third-Party Assets

* **Icons:** `lucide-react` (Vector SVG icons: Activity, Compass, Cpu, Sparkles, ShieldCheck, Box, etc.).
* **Typography:** Google Fonts:
  * **Inter:** High-legibility technical body text and UI labels.
  * **Poppins:** Geometric sans-serif for headlines and brand presence.
* **Palette Tokens:** Curated Obsidian Black (`#000000`, `#050608`), Warm Metallic Gold (`#D4AF37`, `#F3E5AB`), and Neutral Slate borders (`#1F2430`).
* **Mock Data Collections:** 10 enterprise case studies (Wanaromah, Pearl Housing, Laxmi Astro AI, Puratap, Tony & Guy, Cube Dental, etc.), 6 core service architectures, and 4 tech blog articles.

---

## 13. Performance Optimization

1. **Clamped Device Pixel Ratio (`dpr={[1, 1.5]}`):**
   * High-DPI screens (e.g. 4K, Apple Retina) often default to `dpr=3`, which forces the GPU to render 9x pixels. Clamping to `1.5` preserves crisp visuals while eliminating thermal throttling and battery drain.
2. **Selective Hydration & Server Components:**
   * Static layouts, markdown parsing, and metadata generation remain strictly on the server as React Server Components, keeping the JavaScript bundle minimal.
3. **Hardware Acceleration Flags:**
   * 3D WebGL canvas utilizes `gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}` to leverage dedicated GPUs.
4. **Suspense Streaming:**
   * Dynamic routes (`/services/[slug]`, `/portfolio/[slug]`, `/blog/[slug]`) stream instant First Contentful Paint (FCP < 1.0s) while async server components resolve.
5. **Zero Layout Shift (CLS < 0.05):**
   * 3D canvases and interactive widgets utilize fixed aspect-ratio container wrappers to prevent page jumping during WebGL compilation.

---

## 14. Known Limitations

1. **Hardware Acceleration Requirement:**
   * Clients with hardware acceleration disabled in browser settings will see graceful CSS fallbacks instead of full WebGL shaders.
2. **Transactional Email Dispatch:**
   * Inbound form submissions are persisted directly to MongoDB. Production transactional email dispatch (SMTP) currently logs to console and can be connected to SendGrid, AWS SES, or Nodemailer with API credentials.
3. **Direct File Upload for Resumes:**
   * The Careers application portal currently accepts verified portfolio/resume links (Google Drive, LinkedIn, Cloudinary). Multipart direct S3 bucket upload can be activated with AWS S3 credentials.

---

## 15. Future Improvements

1. **WebGPU Renderer Migration:**
   * Transitioning the Three.js render pipeline from WebGL 2.0 to WebGPU once broader browser support is achieved for even lower CPU overhead.
2. **Redis In-Memory Caching:**
   * Introducing a Redis cache layer for `/api/admin/metrics` to support millions of concurrent hits with sub-10ms response times.
3. **Role-Based Access Control (RBAC):**
   * Integrating NextAuth / Clerk or JWT authentication into the `/admin` dashboard for multi-tier administrative permissions.
4. **Automated Testing Suite:**
   * Adding comprehensive End-to-End (E2E) testing with Playwright and component unit tests with Vitest.

---

## 16. Bonus: 10–15 Minute Interview Presentation Script

Use this script during your interview demonstration to showcase technical mastery:

### 1. Introduction & Executive Vision (Minutes 0–2)
* *"Instead of building a simple single-page marketing website, I developed a decoupled enterprise web platform representing Riyadvi Software Technologies as a digital solutions partner founded in 2021."*
* Point out the **Gold & Obsidian Black design system**, Lenis smooth scrolling, and the 6-service dynamic navigation in the glassmorphic header.

### 2. 3D WebGL Spatial Experiences (Minutes 2–5)
* **Homepage 3D Hero:** Demonstrate the metallic core orb and orbiting satellite nodes that react to mouse movements.
* **3D Tech Constellation:** Scroll down to the Tech Ecosystem section. Rotate the 3D Fibonacci sphere and click category filters (Full-Stack, Cloud, AI, Spatial 3D).
* **Wanaromah 3D Case Study (`/portfolio/wanaromah`):** Showcase the interactive 3D luxury perfume bottle. Explain the `MeshPhysicalMaterial` transmission shader, gold metallic cap, and the 3 live fragrance note color switchers.
* **Pearl Housing 3D Case Study (`/portfolio/pearl-housing`):** Demonstrate the interactive 3D architectural tower. Switch floor tiers (Penthouse, Sky Suites, Podium) and toggle daylight simulations in real time.

### 3. Decoupled Backend & Lead Funnels (Minutes 5–8)
* **6-Point Business Health Checkup (`/business-health-checkup`):** Walk through the diagnostic wizard. Show the real-time scoring calculation (e.g., Score 77/100) and submit the form.
* **Open Terminal / MongoDB:** Show the record saving in real time via `POST /api/health-checkup`.
* Mention other funnels: **Software Planning Guide** lead magnet (`/software-project-planning-guide`) and **Careers Application** (`/careers/[job-slug]`).

### 4. Mission-Control Admin Dashboard (`/admin`) (Minutes 8–11)
* Navigate to `http://localhost:3000/admin`.
* Show live KPI metric cards (Total Inquiries, Diagnostic Leads, Guide Downloads, Average Health Score).
* Demonstrate the **interactive status updater** (`PATCH /api/admin/inquiries/:id/status`) transitioning an inquiry from *"New"* to *"Contacted"*.

### 5. Architectural Depth & AI Tooling (Minutes 11–13)
* Explain how you handled **Next.js 16 Turbopack streaming** using `<Suspense>` boundaries.
* Discuss the **AI Tools Documentation** in Section 9: how you leveraged AI for rapid prototyping while manually architecting state management, WebGL optimizations, and database resilience.

---

## 📄 License & Attribution

Developed for the **Riyadvi Software Technologies** Full-Stack Developer Assessment.  
Copyright © 2021–2026 Riyadvi Software Technologies. All rights reserved.
