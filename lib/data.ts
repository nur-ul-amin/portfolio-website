export interface Project {
  id: string
  number: string
  category: string
  name: string
  subtitle: string
  description: string
  year: string
  tags: string[]
  repoUrl: string
  floatingWord: string
  image: string
  slug: string
  updatedAt: string
}

export interface BlogPost {
  id: number
  slug: string
  category: string
  title: string
  excerpt: string
  body: string
  publishedAt: string
  updatedAt: string
}

export const PROJECTS: Project[] = [
  {
    id: "001",
    number: "001",
    slug: "disasterlens-ai",
    category: "GEOSPATIAL AI / DISASTER TECH",
    name: "DISASTERLENS AI",
    subtitle: "NDMA ResilientPath AI v2.0",
    description:
      "Real-time disaster hazard aggregation and early warning geospatial platform built in 2025. Features automated spatial clustering, multi-hazard intelligence pipelines, and full offline PWA capability for field responders with zero connectivity.",
    year: "2025",
    tags: ["Python", "FastAPI", "PostGIS", "Leaflet", "Geospatial ML", "JavaScript", "PWA"],
    repoUrl: "https://github.com/nur-ul-amin/DisasterLens-AI",
    floatingWord: "HAZARD",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    updatedAt: "2026-10-11T20:00:00.000Z",
  },
  {
    id: "002",
    number: "002",
    slug: "motion-tracker",
    category: "COMPUTER VISION / TRACKING",
    name: "MOTION-TRACKER",
    subtitle: "Real-Time CPU-Optimized MOT",
    description:
      "High-performance multiple object tracking system combining YOLOv8 and DeepSORT, engineered for CPU-only environments. Delivers smooth, accurate tracking on lightweight hardware without requiring high-end GPU acceleration.",
    year: "2025",
    tags: ["Python", "YOLOv8", "DeepSORT", "OpenCV", "PyTorch"],
    repoUrl: "https://github.com/nur-ul-amin/Motion-Tracker",
    floatingWord: "TRACK",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1000",
    updatedAt: "2026-10-10T18:00:00.000Z",
  },
  {
    id: "003",
    number: "003",
    slug: "pendulum-sim",
    category: "PHYSICS SIMULATION",
    name: "PENDULUM SIM",
    subtitle: "Multi-Pendulum Chaos Simulator",
    description:
      "Interactive physics-based simulation modeling chaotic dynamical systems and multi-pendulum motion vectors. Demonstrates the butterfly effect through deterministic chaos using RK4 numerical integration.",
    year: "2025",
    tags: ["C++", "Python", "Numerical Analysis", "Physics Engines"],
    repoUrl: "https://github.com/nur-ul-amin/PendulumSim",
    floatingWord: "CHAOS",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000",
    updatedAt: "2026-10-09T12:00:00.000Z",
  },
  {
    id: "004",
    number: "004",
    slug: "assistive-cv",
    category: "ASSISTIVE AI / DEEP LEARNING",
    name: "ASSISTIVE CV",
    subtitle: "Assistive Application for Visually Impaired",
    description:
      "CNN-based real-time face recognition and YOLO object detection system designed for visually impaired individuals. Combines robust image pre-processing pipelines with live camera feeds for ambient spatial awareness and independent navigation.",
    year: "2024",
    tags: ["Python", "OpenCV", "CNN", "YOLO", "TensorFlow", "Image Processing"],
    repoUrl: "https://github.com/nur-ul-amin",
    floatingWord: "VISION",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=1000",
    updatedAt: "2026-10-05T10:00:00.000Z",
  },
  {
    id: "005",
    number: "005",
    slug: "bounce-2026",
    category: "GAME DEVELOPMENT / C#",
    name: "BOUNCE 2026",
    subtitle: "Interactive 2D Arcade Physics Game",
    description:
      "Custom interactive 2D arcade physics game with precise collision detection and smooth gameplay mechanics, deployed to the Microsoft Store platform for public distribution.",
    year: "2026",
    tags: ["C#", "Game Engine", "Microsoft Store", "Physics"],
    repoUrl: "https://github.com/nur-ul-amin",
    floatingWord: "ARCADE",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
    updatedAt: "2026-10-01T08:00:00.000Z",
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "geospatial-ai-postgis-disaster-mitigation",
    category: "Geospatial & Climate AI",
    title: "Leveraging Geospatial AI & PostGIS for Climate-Driven Disaster Mitigation",
    excerpt:
      "How spatial databases and machine learning can be combined to build predictive hazard maps that save lives — lessons from the NDMA ResilientPath AI project.",
    publishedAt: "2026-10-11T18:30:00.000Z",
    updatedAt: "2026-10-11T20:42:20.000Z",
    body: `<p>Modern disaster management demands more than reactive response — it demands foresight. During my internship at NDMA Pakistan, I faced the challenge of building a system that could aggregate real-time hazard data from multiple sources, perform spatial clustering, and surface actionable early-warning intelligence to decision-makers.</p>
      <p>PostGIS, an extension to PostgreSQL, proved to be the backbone of this architecture. Its native support for geometric and geographic data types allowed us to store and query spatial hazard data with sub-second latency. Combined with Leaflet for the visualization layer, we built interactive dashboards that rendered flood risk zones, landslide susceptibility maps, and earthquake exposure indices on top of live sensor data.</p>
      <p>The key breakthrough was treating the problem as a spatial graph: every reported hazard event is a node, and proximity relationships define the edges. Clustering algorithms like DBSCAN — adapted for geodetic distance — naturally grouped co-located events, surfacing emerging multi-hazard situations that traditional threshold-based alerting would miss entirely.</p>
      <p>The offline-first PWA architecture ensured field responders in low-connectivity areas could access critical maps and receive push updates when connectivity was restored. This combination of geospatial intelligence, ML clustering, and resilient offline capability is, I believe, the future of disaster preparedness for climate-vulnerable regions.</p>`,
  },
  {
    id: 2,
    slug: "real-time-mot-yolov8-deepsort-cpu",
    category: "Computer Vision",
    title: "Optimizing Real-Time Multi-Object Tracking (YOLOv8 + DeepSORT) on CPU",
    excerpt:
      "A deep dive into the engineering trade-offs required to run accurate, high-FPS object tracking on commodity hardware — no GPU required.",
    publishedAt: "2026-10-08T14:15:00.000Z",
    updatedAt: "2026-10-10T16:20:00.000Z",
    body: `<p>The assumption that cutting-edge computer vision requires expensive GPU hardware is increasingly obsolete — if you're willing to optimize. Motion-Tracker was born from the need to deploy YOLOv8 + DeepSORT tracking in environments where GPU resources are unavailable or cost-prohibitive.</p>
      <p>The first optimization lever is model quantization. By converting YOLOv8's weights from FP32 to INT8 using ONNX Runtime, inference latency dropped by ~3× with minimal accuracy degradation on the target tracking benchmarks. The second lever is frame-skipping with state interpolation: rather than running detection on every frame, we run it every N frames and use Kalman filter predictions to maintain smooth bounding box trajectories in between.</p>
      <p>DeepSORT's re-identification network was the heaviest remaining bottleneck. Replacing the standard ResNet-50 appearance extractor with a lightweight MobileNetV3 — fine-tuned on the same dataset — halved the per-frame cost while preserving identity consistency across long occlusion windows.</p>
      <p>The result: stable 18–24 FPS multi-object tracking on a mid-tier laptop CPU, with identity retention across full-frame occlusions up to ~40 frames. This opens up real-world deployment for edge security systems, wildlife monitoring, and smart traffic analysis without cloud dependency.</p>`,
  },
  {
    id: 3,
    slug: "simulating-chaotic-physics-systems-cpp",
    category: "Simulations",
    title: "Simulating Chaotic Physics Systems in C++",
    excerpt:
      "Why the multi-pendulum is the perfect gateway into deterministic chaos, and how to build a high-fidelity simulator that reveals the butterfly effect in action.",
    publishedAt: "2026-10-02T11:00:00.000Z",
    updatedAt: "2026-10-06T23:31:47.000Z",
    body: `<p>Few physical systems reveal the true nature of chaos as elegantly as the multi-pendulum. It is fully deterministic — governed by classical Newtonian mechanics — yet two trajectories starting a nanometer apart will diverge exponentially until they bear no resemblance to each other within seconds. This is the butterfly effect, made tangible.</p>
      <p>Building PendulumSim required solving the Euler-Lagrange equations of motion for a coupled pendulum system. The equations are non-linear second-order ODEs — not analytically solvable for n > 1 pendulums. The workhorse here is the 4th-order Runge-Kutta (RK4) integrator, which achieves significantly better energy conservation than simpler Euler methods over long simulation windows.</p>
      <p>One of the most striking outputs of the simulation is the Lyapunov exponent plot. By running twin trajectories with infinitesimally different initial conditions and tracking their divergence over time, the positive Lyapunov exponent becomes visually obvious — confirming the system's sensitivity to initial conditions in a way that no text description can match.</p>
      <p>The interactive visualization layer allows users to drag-and-drop initial positions and watch trajectories explode into entirely different phase-space paths. It is, frankly, the most effective demonstration I've built for communicating the concept of chaos to non-specialists.</p>`,
  },
]
