import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogHero } from "@/components/blocks/blogs/blog-hero";
import { BlogCard } from "@/components/blocks/blogs/blog-card";
import { FooterWithGrid } from "@/components/blocks/footers/footer-with-grid";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | Cognito Innovations - AI & Blockchain Insights",
  description: "Explore our latest insights on artificial intelligence, blockchain technology, enterprise solutions, and digital transformation. Stay updated with industry trends and best practices.",
  keywords: ["AI blog", "blockchain blog", "enterprise technology", "digital transformation", "artificial intelligence", "blockchain solutions"],
  openGraph: {
    title: "Blog | Cognito Innovations",
    description: "Latest insights on AI, blockchain, and enterprise technology solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Cognito Innovations",
    description: "Latest insights on AI, blockchain, and enterprise technology solutions",
  },
};

export default function BlogsPage() {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Cognito Innovations Blog",
    "description": "Latest insights on AI, blockchain, and enterprise technology solutions",
    "url": "https://cognitoinnovations.com/blogs",
    "blogPost": blogPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.image,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author,
        "jobTitle": post.authorRole,
      },
      "publisher": {
        "@type": "Organization",
        "name": "Cognito Innovations",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-slate-900">
        <BlogHero />

        {/* Blog Posts Grid */}
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-4">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white md:text-3xl font-[var(--font-inter)]">
              Latest Articles
            </h2>
            <div className="hidden md:flex gap-2">
              <button className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-400 hover:bg-emerald-500/20 transition-colors">
                All
              </button>
              <button className="rounded-full bg-slate-800/50 border border-slate-700/50 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors">
                AI
              </button>
              <button className="rounded-full bg-slate-800/50 border border-slate-700/50 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors">
                Blockchain
              </button>
              <button className="rounded-full bg-slate-800/50 border border-slate-700/50 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors">
                Enterprise
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm p-8 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1)_0%,transparent_50%)]" />
            <div className="relative z-10 text-center">
              <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl font-[var(--font-inter)]">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="mb-6 text-slate-300 font-[var(--font-inter)]">
                Subscribe to our newsletter and never miss an article about AI, blockchain, and enterprise technology.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 font-[var(--font-inter)]"
              >
                Subscribe Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
        <FooterWithGrid />
      </main>
    </>
  );
}

