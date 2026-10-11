import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { PROJECTS } from "@/lib/data"
import { siteConfig } from "@/lib/site"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return PROJECTS.map((proj) => ({
    slug: proj.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const proj = PROJECTS.find((p) => p.slug === slug)

  if (!proj) {
    return {
      title: "Project Not Found",
    }
  }

  const url = `${siteConfig.url}/projects/${proj.slug}`

  return {
    title: `${proj.name} — ${proj.subtitle} | Noor Ul Amin`,
    description: proj.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${proj.name} — ${proj.subtitle}`,
      description: proj.description,
      type: "article",
      url,
      images: [
        {
          url: proj.image,
          alt: proj.name,
        },
      ],
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const proj = PROJECTS.find((p) => p.slug === slug)

  if (!proj) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-[#07090e] text-[#f2f4f8] px-6 py-20 antialiased selection:bg-[#ff3b00] selection:text-white">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#7a889b] hover:text-[#ff3b00] transition-colors mb-12 font-mono"
        >
          &larr; Back to Portfolio
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-4 text-xs font-mono text-[#ff3b00] uppercase tracking-wider mb-4">
            <span>Project {proj.number}</span>
            <span className="text-[#3a4454]">&bull;</span>
            <span>{proj.category}</span>
            <span className="text-[#3a4454]">&bull;</span>
            <span className="text-[#7a889b]">{proj.year}</span>
          </div>

          <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-white mb-4">
            {proj.name}
          </h1>
          <h2 className="text-lg md:text-xl text-[#ff3b00] font-mono mb-6">
            {proj.subtitle}
          </h2>

          <p className="text-lg text-[#b4c0d0] leading-relaxed max-w-2xl mb-8">
            {proj.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {proj.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono rounded bg-[#131924] border border-[#222b3d] text-[#8e9caf]"
              >
                {tag}
              </span>
            ))}
          </div>

          {proj.repoUrl && (
            <a
              href={proj.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff3b00] hover:bg-[#ff5522] text-white font-mono text-xs uppercase tracking-wider rounded transition-colors"
            >
              View Repository &rarr;
            </a>
          )}
        </header>

        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-[#1b2230] mt-10">
          <Image
            src={proj.image}
            alt={proj.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </article>
  )
}
