"use client"

import { useEffect, useState } from "react"

/* ─────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: "001",
    number: "001",
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
  },
  {
    id: "002",
    number: "002",
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
  },
  {
    id: "003",
    number: "003",
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
  },
  {
    id: "004",
    number: "004",
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
  },
  {
    id: "005",
    number: "005",
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
  },
]

const SKILLS = [
  {
    label: "AI & Machine Learning",
    badges: ["Machine Learning", "Deep Learning", "Neural Networks", "CNN", "RNN", "LSTM", "BiLSTM", "GRU", "Vision Transformers (ViTs)", "Autoencoders"],
  },
  {
    label: "Computer Vision",
    badges: ["OpenCV", "TensorFlow", "PyTorch", "YOLOv8", "DeepSORT", "Image Processing", "Face Recognition"],
  },
  {
    label: "Geospatial & Climate Tech",
    badges: ["Leaflet", "PostGIS", "GIS Data Mapping", "Hazard Analytics", "Satellite Imagery", "Spatial Clustering"],
  },
  {
    label: "Programming Languages",
    badges: ["Python", "C++", "Java", "JavaScript", "R", "C#", "HTML / CSS", "Assembly Language"],
  },
  {
    label: "Backend & Web",
    badges: ["FastAPI", "Node.js", "PWA (Progressive Web Apps)"],
  },
  {
    label: "Tools & Environments",
    badges: ["Linux (Mint)", "Git / GitHub", "Docker", "Windows 11"],
  },
]

const BLOG_POSTS = [
  {
    id: 1,
    category: "Geospatial & Climate AI",
    title: "Leveraging Geospatial AI & PostGIS for Climate-Driven Disaster Mitigation",
    excerpt:
      "How spatial databases and machine learning can be combined to build predictive hazard maps that save lives — lessons from the NDMA ResilientPath AI project.",
    body: `<p>Modern disaster management demands more than reactive response — it demands foresight. During my internship at NDMA Pakistan, I faced the challenge of building a system that could aggregate real-time hazard data from multiple sources, perform spatial clustering, and surface actionable early-warning intelligence to decision-makers.</p>
      <p>PostGIS, an extension to PostgreSQL, proved to be the backbone of this architecture. Its native support for geometric and geographic data types allowed us to store and query spatial hazard data with sub-second latency. Combined with Leaflet for the visualization layer, we built interactive dashboards that rendered flood risk zones, landslide susceptibility maps, and earthquake exposure indices on top of live sensor data.</p>
      <p>The key breakthrough was treating the problem as a spatial graph: every reported hazard event is a node, and proximity relationships define the edges. Clustering algorithms like DBSCAN — adapted for geodetic distance — naturally grouped co-located events, surfacing emerging multi-hazard situations that traditional threshold-based alerting would miss entirely.</p>
      <p>The offline-first PWA architecture ensured field responders in low-connectivity areas could access critical maps and receive push updates when connectivity was restored. This combination of geospatial intelligence, ML clustering, and resilient offline capability is, I believe, the future of disaster preparedness for climate-vulnerable regions.</p>`,
  },
  {
    id: 2,
    category: "Computer Vision",
    title: "Optimizing Real-Time Multi-Object Tracking (YOLOv8 + DeepSORT) on CPU",
    excerpt:
      "A deep dive into the engineering trade-offs required to run accurate, high-FPS object tracking on commodity hardware — no GPU required.",
    body: `<p>The assumption that cutting-edge computer vision requires expensive GPU hardware is increasingly obsolete — if you're willing to optimize. Motion-Tracker was born from the need to deploy YOLOv8 + DeepSORT tracking in environments where GPU resources are unavailable or cost-prohibitive.</p>
      <p>The first optimization lever is model quantization. By converting YOLOv8's weights from FP32 to INT8 using ONNX Runtime, inference latency dropped by ~3× with minimal accuracy degradation on the target tracking benchmarks. The second lever is frame-skipping with state interpolation: rather than running detection on every frame, we run it every N frames and use Kalman filter predictions to maintain smooth bounding box trajectories in between.</p>
      <p>DeepSORT's re-identification network was the heaviest remaining bottleneck. Replacing the standard ResNet-50 appearance extractor with a lightweight MobileNetV3 — fine-tuned on the same dataset — halved the per-frame cost while preserving identity consistency across long occlusion windows.</p>
      <p>The result: stable 18–24 FPS multi-object tracking on a mid-tier laptop CPU, with identity retention across full-frame occlusions up to ~40 frames. This opens up real-world deployment for edge security systems, wildlife monitoring, and smart traffic analysis without cloud dependency.</p>`,
  },
  {
    id: 3,
    category: "Simulations",
    title: "Simulating Chaotic Physics Systems in C++",
    excerpt:
      "Why the multi-pendulum is the perfect gateway into deterministic chaos, and how to build a high-fidelity simulator that reveals the butterfly effect in action.",
    body: `<p>Few physical systems reveal the true nature of chaos as elegantly as the multi-pendulum. It is fully deterministic — governed by classical Newtonian mechanics — yet two trajectories starting a nanometer apart will diverge exponentially until they bear no resemblance to each other within seconds. This is the butterfly effect, made tangible.</p>
      <p>Building PendulumSim required solving the Euler-Lagrange equations of motion for a coupled pendulum system. The equations are non-linear second-order ODEs — not analytically solvable for n > 1 pendulums. The workhorse here is the 4th-order Runge-Kutta (RK4) integrator, which achieves significantly better energy conservation than simpler Euler methods over long simulation windows.</p>
      <p>One of the most striking outputs of the simulation is the Lyapunov exponent plot. By running twin trajectories with infinitesimally different initial conditions and tracking their divergence over time, the positive Lyapunov exponent becomes visually obvious — confirming the system's sensitivity to initial conditions in a way that no text description can match.</p>
      <p>The interactive visualization layer allows users to drag-and-drop initial positions and watch trajectories explode into entirely different phase-space paths. It is, frankly, the most effective demonstration I've built for communicating the concept of chaos to non-specialists.</p>`,
  },
]

/* ─────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────── */
export default function Home() {
  const [activeTab, setActiveTab] = useState("All")
  const [openPost, setOpenPost] = useState<null | (typeof BLOG_POSTS)[number]>(null)

  const tabs = ["All", "Geospatial & Climate AI", "Computer Vision", "Simulations"]

  const filteredPosts =
    activeTab === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === activeTab)

  useEffect(() => {
    // Mouse Blob Follower
    const blob = document.getElementById("cursor-blob")
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      if (blob) {
        blob.style.transform = `translate(${x - 200}px, ${y - 200}px)`
      }
    }
    document.addEventListener("mousemove", handleMouseMove)

    // Nav scroll effect — toggle .scrolled class
    const navEl = document.querySelector("nav")
    const handleNavScroll = () => {
      if (window.scrollY > 10) {
        navEl?.classList.add("scrolled")
      } else {
        navEl?.classList.remove("scrolled")
      }
    }
    window.addEventListener("scroll", handleNavScroll, { passive: true })

    // Parallax Effect
    const handleScroll = () => {
      const scroll = window.pageYOffset

      // Hero parallax
      const parallaxTexts = document.querySelectorAll(".parallax-text")
      parallaxTexts.forEach((text) => {
        const speed = text.getAttribute("data-speed")
        if (speed) {
          ;(text as HTMLElement).style.transform = `translateX(${scroll * Number.parseFloat(speed) * 0.1}px)`
        }
      })

      const heroImg = document.getElementById("hero-img")
      if (heroImg) {
        heroImg.style.transform = `translate(-50%, calc(-50% + ${scroll * 0.2}px)) scale(${1 + scroll * 0.0005})`
      }

      // Floating labels in project section
      const labels = document.querySelectorAll(".floating-label")
      labels.forEach((label, index) => {
        const direction = index % 2 === 0 ? 1 : -1
        ;(label as HTMLElement).style.transform = `translateY(${scroll * 0.1 * direction}px)`
      })
    }
    window.addEventListener("scroll", handleScroll)

    // Intersection Observer for reveal
    const observerOptions = { threshold: 0.1 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    }, observerOptions)

    document.querySelectorAll(".reveal-text").forEach((text) => {
      observer.observe(text)
    })

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault()
        const target = e.currentTarget as HTMLAnchorElement
        const href = target.getAttribute("href")
        if (href) {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
        }
      })
    })

    // Close modal on ESC
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenPost(null)
    }
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleNavScroll)
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("keydown", handleKeyDown)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div className="blob" id="cursor-blob" />

      {/* ── NAVIGATION ── */}
      <nav>
        <div className="logo">NOOR UL AMIN</div>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        {/* ── HERO SECTION ── */}
        <section id="hero">
          <img
            src="/profile.jpeg"
            alt="Noor Ul Amin Profile"
            className="hero-img"
            id="hero-img"
            style={{ filter: "grayscale(100%) brightness(0.9) contrast(1.1)", objectFit: "cover", objectPosition: "center top", borderRadius: "8px" }}
          />
          <div className="hero-title-container container">
            <span className="huge-type parallax-text" data-speed="-2">
              NOOR
            </span>
            <span
              className="huge-type outline-text parallax-text"
              data-speed="2"
              style={{ paddingLeft: "200px" }}
            >
              UL AMIN
            </span>
          </div>
          <div className="hero-subtext">
            <span className="hero-role">AI &amp; Robotics Undergraduate — Noor Ul Amin</span>
            <p className="hero-tagline" style={{ marginBottom: "16px", fontSize: "1.05rem" }}>
              "Standing still as the world evolves is our greatest risk—embracing artificial intelligence isn't optional, it is essential. AI won't replace human vision; rather, when we anchor intelligent systems in human purpose, we gain the foresight and speed needed to solve our hardest challenges and shape the world around us."
            </p>
          </div>
        </section>

        {/* ── ABOUT / INTRO ── */}
        <section id="about">
          <div className="container">
            <div style={{ maxWidth: "820px" }}>
              <h1
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontFamily: "var(--syne)",
                  marginBottom: "40px",
                  lineHeight: 1.05,
                  textTransform: "uppercase",
                }}
              >
                Building Intelligent Systems for a Resilient Planet.
              </h1>
              <p style={{ fontSize: "1.25rem", fontWeight: 300, color: "#aab", lineHeight: 1.8 }}>
                I&apos;m <strong style={{ color: "var(--fg)" }}>Noor Ul Amin</strong>, an AI &amp; Robotics undergraduate at{" "}
                <strong style={{ color: "var(--fg)" }}>SZABIST</strong>, originally from <strong style={{ color: "var(--fg)" }}>Gilgit, Pakistan</strong>. I build real-time computer vision
                systems, geospatial disaster intelligence platforms, and interactive physics simulations — driven by a
                core mission: applying machine learning to environmental science and climate resilience.
              </p>
            </div>

            {/* Vision Grid */}
            <div className="vision-grid">
              <div className="vision-card">
                <span className="vision-card-label">Core Vision</span>
                <p className="vision-card-text">
                  Applying AI and ML to <strong style={{ color: "var(--fg)" }}>Environmental Science, Climate Resilience,
                  and Disaster Mitigation</strong>. I believe the most urgent use of AI is protecting vulnerable
                  ecosystems and the communities that depend on them.
                </p>
              </div>
              <div className="vision-card">
                <span className="vision-card-label">Research Goals</span>
                <p className="vision-card-text">
                  Building AI-driven spatial models to analyze ecological degradation and water management. Combining
                  computer vision with satellite imagery to build{" "}
                  <strong style={{ color: "var(--fg)" }}>predictive environmental intelligence systems</strong>.
                </p>
              </div>
              <div className="vision-card">
                <span className="vision-card-label">Education</span>
                <p className="vision-card-text">
                  B.Sc. Artificial Intelligence &amp; Robotics —{" "}
                  <strong style={{ color: "var(--fg)" }}>SZABIST</strong>, Islamabad. Expected{" "}
                  <strong style={{ color: "var(--fg)" }}>June 2027</strong>.<br />
                  <br />
                  HSSC in Computer Science — The Academy of Excellence, Zulfiqarabad, Gilgit (2022).<br />
                  SSC in General Sciences — Elysian Higher Secondary School, Chinarbagh, Gilgit (2020).
                </p>
              </div>
              <div className="vision-card">
                <span className="vision-card-label">Location &amp; Contact</span>
                <p className="vision-card-text">
                  Based in <strong style={{ color: "var(--fg)" }}>Gilgit, Pakistan</strong>. Open to remote
                  collaboration, research partnerships, and global internship opportunities.<br />
                  <br />
                  <strong style={{ color: "var(--fg)" }}>Languages:</strong> English, Urdu, Punjabi · Basic Japanese &amp; Spanish.
                </p>
              </div>
              <div className="vision-card">
                <span className="vision-card-label">Community</span>
                <img
                  src="/GE.jpg"
                  alt="Global Encounters International Camp — Noor Ul Amin"
                  style={{
                    width: "100%",
                    aspectRatio: "4 / 3",
                    objectFit: "contain",
                    objectPosition: "center",
                    borderRadius: "4px",
                    marginBottom: "16px",
                    border: "1px solid rgba(0,229,255,0.15)",
                    background: "#0a0a0f",
                    display: "block",
                  }}
                />
                <p className="vision-card-text">
                  Selected as one of <strong style={{ color: "var(--fg)" }}>32 participants from 16 countries</strong> to
                  represent Pakistan at the <strong style={{ color: "var(--fg)" }}>Global Encounters International Camp</strong>{" "}
                  (Islamabad, Lahore &amp; Karachi, Dec 2022 – Jan 2023). Led cross-cultural sessions promoting unity
                  and diversity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className="scrolling-marquee">
          <div className="marquee-inner">
            <span className="huge-type outline-text">
              COMPUTER VISION — GEOSPATIAL AI — CLIMATE TECH — NDMA — YOLOV8 — DEEPSORT — POSTIS — FASTAPI — PYTORCH —&nbsp;
            </span>
            <span className="huge-type outline-text">
              COMPUTER VISION — GEOSPATIAL AI — CLIMATE TECH — NDMA — YOLOV8 — DEEPSORT — POSTIS — FASTAPI — PYTORCH —&nbsp;
            </span>
          </div>
        </div>

        {/* ── SKILLS SECTION ── */}
        <section id="skills" className="container skills-section">
          <div style={{ marginBottom: "60px" }}>
            <span
              style={{
                fontFamily: "var(--syne)",
                color: "var(--accent)",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Technical Stack
            </span>
            <h2
              style={{
                fontFamily: "var(--syne)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 800,
                lineHeight: 0.9,
                marginTop: "16px",
                textTransform: "uppercase",
              }}
            >
              CORE SKILLS
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "50px",
            }}
          >
            {SKILLS.map((group) => (
              <div key={group.label} className="skill-group">
                <span className="skill-group-label">{group.label}</span>
                <div className="skill-badges">
                  {group.badges.map((badge, index) => (
                    <span key={`${group.label}-${badge}-${index}`} className="skill-badge">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WORK / PROJECTS ── */}
        <section id="work" className="container">
          <div className="sticky-type">WORK</div>

          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="project-row"
              style={{ flexDirection: index % 2 === 1 ? "row-reverse" : "row" }}
            >
              <div className="project-info">
                <span style={{ fontFamily: "var(--syne)", color: "var(--accent)", fontSize: "0.8rem", letterSpacing: "0.2em" }}>
                  {project.number} / {project.category}
                </span>
                <h3 className="huge-type" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", margin: "20px 0" }}>
                  {project.name}
                </h3>
                <p style={{ color: "var(--gray-text)", fontFamily: "var(--syne)", fontSize: "0.85rem", marginBottom: "12px" }}>
                  {project.subtitle}
                </p>
                <p style={{ color: "#aab", lineHeight: 1.75, maxWidth: "480px" }}>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                <div className="divider" />
                <p style={{ color: "var(--gray-text)", fontSize: "0.8rem", fontFamily: "var(--syne)", letterSpacing: "0.1em" }}>
                  YEAR: {project.year}
                </p>

                <div className="project-links">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn primary"
                    id={`project-github-${project.id}`}
                  >
                    ⟶ GitHub Repo
                  </a>
                </div>
              </div>

              <div className="project-media">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
                <div className="floating-label huge-type outline-text" style={{ fontSize: "8rem" }}>
                  {project.floatingWord}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ── EXPERIENCE SECTION ── */}
        <section id="experience">
          <div className="container">
            <div style={{ marginBottom: "80px" }}>
              <span
                style={{
                  fontFamily: "var(--syne)",
                  color: "var(--accent)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                Professional Experience
              </span>
              <h2
                style={{
                  fontFamily: "var(--syne)",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: 800,
                  lineHeight: 0.9,
                  textTransform: "uppercase",
                }}
              >
                WHERE I&apos;VE WORKED
              </h2>
            </div>

            <div className="timeline">
              {/* Experience 1 — Crossroad Camp Mentor */}
              <div className="timeline-item">
                <span className="timeline-period">July 2025</span>
                <div className="timeline-role">AI &amp; Digital Literacy Mentor</div>
                <div className="timeline-org">
                  ITREB — Crossroad Camp, Hundur, Pakistan
                </div>
                <ul className="timeline-desc">
                  <li>
                    Facilitated interactive sessions on <strong style={{ color: "var(--fg)" }}>digital literacy</strong> for 13–15-year-old youth participants.
                  </li>
                  <li>
                    Introduced core concepts of <strong style={{ color: "var(--fg)" }}>Artificial Intelligence</strong>, sparking interest in emerging technologies among young learners.
                  </li>
                  <li>
                    Guided discussions on global citizenship to promote ethical awareness and pluralism.
                  </li>
                  <li>
                    Designed hands-on activities blending AI tools with real-world problem-solving skills.
                  </li>
                  <li>
                    Mentored small groups to build confidence in using digital resources responsibly.
                  </li>
                </ul>
              </div>

              {/* Experience 2 — DisasterLens AI / NDMA Project */}
              <div className="timeline-item">
                <span className="timeline-period">2025</span>
                <div className="timeline-role">DisasterLens AI — NDMA Pakistan Project</div>
                <div className="timeline-org">
                  National Disaster Management Authority (NDMA), Pakistan
                </div>
                <ul className="timeline-desc">
                  <li>
                    Engineered <strong style={{ color: "var(--fg)" }}>NDMA ResilientPath AI v2.0 / DisasterLens AI</strong> — a
                    real-time hazard aggregation and early warning geospatial platform.
                  </li>
                  <li>
                    Built offline-first Progressive Web Apps (PWAs) enabling field responders to access critical
                    maps in zero-connectivity environments.
                  </li>
                  <li>
                    Automated multi-hazard intelligence pipelines and integrated spatial clustering (DBSCAN) with
                    Leaflet &amp; PostGIS for live disaster mapping dashboards.
                  </li>
                </ul>
              </div>

              {/* Experience 3 — English Tutoring */}
              <div className="timeline-item">
                <span className="timeline-period">July 2024</span>
                <div className="timeline-role">English Language Tutor</div>
                <div className="timeline-org">
                  Native Language Camp — International Students
                </div>
                <ul className="timeline-desc">
                  <li>
                    Tutored international students in English, enhancing language fluency and overall academic confidence.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* ── BLOG / RESEARCH NOTES ── */}
        <section id="blog">
          <div className="container blog-section" style={{ padding: 0 }}>
            <div style={{ marginBottom: "24px" }}>
              <span
                style={{
                  fontFamily: "var(--syne)",
                  color: "var(--accent)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                Research &amp; Writing
              </span>
              <h2
                style={{
                  fontFamily: "var(--syne)",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: 800,
                  lineHeight: 0.9,
                  textTransform: "uppercase",
                }}
              >
                TECHNICAL BLOG
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="category-tabs" role="tablist" aria-label="Blog category filter">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  id={`blog-tab-${tab.replace(/\s+/g, "-").toLowerCase()}`}
                  role="tab"
                  aria-selected={activeTab === tab}
                  className={`category-tab ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Blog Cards Grid */}
            <div className="blog-grid">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  id={`blog-card-${post.id}`}
                  className="blog-card"
                  onClick={() => setOpenPost(post)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setOpenPost(post)}
                  aria-label={`Read: ${post.title}`}
                >
                  <span className="blog-card-category">{post.category}</span>
                  <div className="blog-card-title">{post.title}</div>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <span className="blog-card-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer id="contact">
          <div className="container">
            <div className="footer-cta">
              <a href="mailto:nurulamyn10@gmail.com" id="footer-email-cta">
                GET — IN TOUCH
              </a>
            </div>
            <div className="divider" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "20px",
                fontFamily: "var(--syne)",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                color: "#555",
              }}
            >
              {/* Social Links */}
              <div className="social-links">
                <a
                  id="footer-github"
                  href="https://github.com/nur-ul-amin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="GitHub Profile"
                >
                  GitHub
                </a>
                <a
                  id="footer-linkedin"
                  href="https://www.linkedin.com/in/noor-ul-amin-0b8560285/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="LinkedIn Profile"
                >
                  LinkedIn
                </a>
                <a
                  id="footer-instagram"
                  href="https://www.instagram.com/nur_ul_amyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  aria-label="Instagram Profile"
                >
                  Instagram
                </a>
                <a
                  id="footer-email"
                  href="mailto:nurulamyn10@gmail.com"
                  className="social-icon-link"
                  aria-label="Send Email"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* ── BLOG MODAL ── */}
      <div
        id="blog-modal-overlay"
        className={`blog-modal-overlay ${openPost ? "open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpenPost(null)
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="blog-modal-title"
      >
        {openPost && (
          <div className="blog-modal">
            <button
              id="blog-modal-close"
              className="blog-modal-close"
              onClick={() => setOpenPost(null)}
              aria-label="Close blog post"
            >
              [CLOSE ✕]
            </button>
            <span className="blog-modal-category">{openPost.category}</span>
            <h2 className="blog-modal-title" id="blog-modal-title">
              {openPost.title}
            </h2>
            <div
              className="blog-modal-body"
              dangerouslySetInnerHTML={{ __html: openPost.body }}
            />
          </div>
        )}
      </div>
    </>
  )
}
