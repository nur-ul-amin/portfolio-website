import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BLOG_POSTS } from "@/lib/data"
import { siteConfig } from "@/lib/site"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  const url = `${siteConfig.url}/blog/${post.slug}`

  return {
    title: `${post.title} — Noor Ul Amin`,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ["Noor Ul Amin"],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <article className="min-h-screen bg-[#07090e] text-[#f2f4f8] px-6 py-20 antialiased selection:bg-[#ff3b00] selection:text-white">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#7a889b] hover:text-[#ff3b00] transition-colors mb-12 font-mono"
        >
          &larr; Back to Portfolio
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-4 text-xs font-mono text-[#ff3b00] uppercase tracking-wider mb-4">
            <span>{post.category}</span>
            <span className="text-[#3a4454]">&bull;</span>
            <time dateTime={post.publishedAt} className="text-[#7a889b]">
              {formattedDate}
            </time>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-[#9da9bb] leading-relaxed border-l-2 border-[#ff3b00]/40 pl-4 italic">
            {post.excerpt}
          </p>
        </header>

        <hr className="border-[#1b2230] my-10" />

        <div
          className="prose prose-invert prose-lg max-w-none text-[#b4c0d0] leading-relaxed [&>p]:mb-6 [&>p]:leading-8"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        <div className="mt-16 pt-8 border-t border-[#1b2230] flex justify-between items-center text-sm font-mono text-[#7a889b]">
          <span>Author: Noor Ul Amin</span>
          <Link href="/#blog" className="text-[#ff3b00] hover:underline">
            Explore more insights &rarr;
          </Link>
        </div>
      </div>
    </article>
  )
}
