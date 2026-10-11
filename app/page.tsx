"use client"

import { useEffect, useState } from "react"
import { PROJECTS, BLOG_POSTS } from "@/lib/data"

/* ─────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────── */
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
