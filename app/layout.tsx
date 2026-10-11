import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { siteConfig } from "@/lib/site"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-syne" }) // keeping variable names same to minimize css changes
const manrope = Manrope({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  title: "Noor Ul Amin — AI & Robotics Developer",
  description:
    "AI & Robotics undergraduate at SZABIST specializing in Computer Vision, Geospatial AI, and Climate-Resilience systems. Building real-time intelligence for a sustainable future.",
  generator: "v0.app",
  keywords: [
    "AI",
    "Robotics",
    "Computer Vision",
    "Geospatial AI",
    "Machine Learning",
    "NDMA",
    "DisasterLens",
    "YOLOv8",
    "Python",
    "SZABIST",
    "Pakistan",
    "Climate AI",
  ],
  authors: [{ name: "Noor Ul Amin", url: "https://github.com/nur-ul-amin" }],
  openGraph: {
    title: "Noor Ul Amin — AI & Robotics Developer",
    description:
      "Engineering real-time computer vision systems, geospatial AI platforms, and physics simulations — dedicated to AI for Environmental Science and Climate Resilience.",
    url: "https://github.com/nur-ul-amin",
    siteName: "Noor Ul Amin Portfolio",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${manrope.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
