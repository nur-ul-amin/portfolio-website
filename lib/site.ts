export const siteConfig = {
  name: "Noor Ul Amin",
  title: "Noor Ul Amin — AI & Robotics Developer",
  description:
    "AI & Robotics undergraduate at SZABIST specializing in Computer Vision, Geospatial AI, and Climate-Resilience systems. Building real-time intelligence for a sustainable future.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://nur-ul-amin.vercel.app"),
  links: {
    github: "https://github.com/nur-ul-amin",
    repo: "https://github.com/nur-ul-amin/portfolio-website",
  },
}
