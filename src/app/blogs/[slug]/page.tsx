import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { notFound } from "next/navigation";
import { FooterWithGrid } from "@/components/blocks/footers/footer-with-grid";
import { BlogImageWithFallback } from "@/components/blocks/blogs/blog-image-with-fallback";
import { blogPosts, type BlogPost } from "@/lib/blog-data";

// Full content for each blog post by slug
const fullContentMap: Record<string, string> = {
  "future-of-enterprise-ai": `
    <p>Artificial intelligence is no longer a futuristic concept—it's a present-day reality transforming how enterprises operate. From predictive analytics to natural language processing, AI technologies are enabling businesses to automate complex processes, gain deeper insights from data, and deliver personalized customer experiences at scale.</p>
    
    <h2>The Evolution of Enterprise AI</h2>
    <p>Over the past decade, artificial intelligence has evolved from experimental technology to a core component of enterprise strategy. Today's AI solutions are more accessible, scalable, and powerful than ever before, enabling organizations of all sizes to leverage machine learning, natural language processing, and computer vision capabilities.</p>
    
    <h2>Key Applications in Enterprise Settings</h2>
    <p>Enterprise AI applications span across multiple business functions:</p>
    <ul>
      <li><strong>Customer Service:</strong> AI-powered chatbots and virtual assistants provide 24/7 customer support, handling routine inquiries and escalating complex issues to human agents.</li>
      <li><strong>Operations:</strong> Predictive maintenance systems use AI to forecast equipment failures, reducing downtime and maintenance costs.</li>
      <li><strong>Finance:</strong> Fraud detection algorithms analyze transaction patterns in real-time, identifying suspicious activities before they cause damage.</li>
      <li><strong>Human Resources:</strong> AI tools assist in talent acquisition, employee engagement analysis, and workforce planning.</li>
    </ul>
    
    <h2>Challenges and Considerations</h2>
    <p>While the benefits of enterprise AI are significant, organizations must navigate several challenges:</p>
    <ul>
      <li>Data quality and availability</li>
      <li>Integration with existing systems</li>
      <li>Change management and employee training</li>
      <li>Ethical considerations and bias mitigation</li>
      <li>ROI measurement and justification</li>
    </ul>
    
    <h2>Looking Ahead</h2>
    <p>As AI technology continues to advance, we can expect to see even more sophisticated applications in enterprise settings. The integration of AI with other emerging technologies like blockchain and IoT will create new possibilities for innovation and efficiency.</p>
  `,
  "blockchain-enterprise-applications": `
    <p>While blockchain technology gained initial fame through cryptocurrencies, its potential extends far beyond digital assets. Enterprise blockchain solutions are creating unprecedented levels of transparency, security, and efficiency in supply chain management, financial services, healthcare, and more.</p>
    
    <h2>Understanding Enterprise Blockchain</h2>
    <p>Enterprise blockchain differs from public cryptocurrencies in several key ways. These private or permissioned blockchains are designed specifically for business use cases, offering controlled access, higher transaction throughput, and compliance with regulatory requirements.</p>
    
    <h2>Real-World Applications</h2>
    <p>Organizations across industries are discovering innovative uses for blockchain technology:</p>
    <ul>
      <li><strong>Supply Chain:</strong> Tracking products from origin to consumer, ensuring authenticity and reducing fraud.</li>
      <li><strong>Healthcare:</strong> Securely sharing patient records while maintaining privacy and compliance.</li>
      <li><strong>Finance:</strong> Streamlining cross-border payments and reducing settlement times.</li>
      <li><strong>Real Estate:</strong> Simplifying property transactions and title management.</li>
    </ul>
    
    <h2>Benefits for Enterprises</h2>
    <p>The adoption of blockchain technology offers numerous advantages:</p>
    <ul>
      <li>Enhanced security through cryptographic verification</li>
      <li>Improved transparency and auditability</li>
      <li>Reduced intermediaries and associated costs</li>
      <li>Faster transaction processing</li>
      <li>Increased trust between parties</li>
    </ul>
    
    <h2>Implementation Considerations</h2>
    <p>Successfully implementing blockchain solutions requires careful planning around technology selection, network design, governance models, and integration with existing systems.</p>
  `,
  "digital-transformation-guide": `
    <p>Digital transformation is not just about adopting new technologies—it's about fundamentally reimagining how businesses operate, deliver value, and engage with customers. For Fortune 500 companies, this journey requires strategic vision, cultural change, and the right technology partnerships.</p>
    
    <h2>The Strategic Imperative</h2>
    <p>In today's rapidly evolving business landscape, digital transformation is no longer optional. Companies that fail to adapt risk being left behind by more agile competitors who leverage technology to innovate faster and serve customers better.</p>
    
    <h2>Key Pillars of Transformation</h2>
    <p>Successful digital transformation rests on several foundational elements:</p>
    <ul>
      <li><strong>Leadership Commitment:</strong> Executive sponsorship and clear vision</li>
      <li><strong>Cultural Change:</strong> Fostering innovation and agility</li>
      <li><strong>Technology Infrastructure:</strong> Modern, scalable platforms</li>
      <li><strong>Data Strategy:</strong> Leveraging data as a strategic asset</li>
      <li><strong>Customer Focus:</strong> Putting customer experience at the center</li>
    </ul>
    
    <h2>Common Challenges</h2>
    <p>Large enterprises face unique challenges in their transformation journeys, including legacy systems, organizational silos, and resistance to change. Overcoming these requires a systematic approach and strong change management.</p>
    
    <h2>Best Practices</h2>
    <p>Leading organizations follow proven strategies: starting with quick wins, building internal capabilities, fostering partnerships, and maintaining a long-term perspective while delivering incremental value.</p>
  `,
  "machine-learning-production": `
    <p>Moving machine learning models from development to production presents unique challenges. This article explores best practices for model deployment, monitoring, versioning, and maintaining performance at scale in enterprise environments.</p>
    
    <h2>The Production Gap</h2>
    <p>Many organizations struggle to move ML models from proof-of-concept to production. The gap between development and production environments requires careful planning and robust infrastructure.</p>
    
    <h2>Essential Practices</h2>
    <ul>
      <li><strong>Model Versioning:</strong> Track and manage different model versions</li>
      <li><strong>Monitoring:</strong> Continuously monitor model performance and data drift</li>
      <li><strong>Scalability:</strong> Design systems that can handle varying loads</li>
      <li><strong>Governance:</strong> Ensure compliance and ethical use of AI</li>
    </ul>
    
    <h2>Common Pitfalls</h2>
    <p>Organizations often underestimate the complexity of production ML systems, leading to issues with reliability, performance, and maintenance.</p>
  `,
  "smart-contracts-revolution": `
    <p>Smart contracts represent a paradigm shift in how business agreements are executed. These self-executing contracts with terms directly written into code are revolutionizing industries by automating processes, reducing costs, and increasing trust through transparency.</p>
    
    <h2>What Are Smart Contracts?</h2>
    <p>Smart contracts are programmable agreements that automatically execute when predefined conditions are met. Built on blockchain technology, they eliminate the need for intermediaries while ensuring security and immutability.</p>
    
    <h2>Industry Applications</h2>
    <p>From finance to real estate, smart contracts are finding applications across industries, automating complex processes and reducing transaction costs.</p>
  `,
  "ai-powered-analytics": `
    <p>In today's data-driven world, enterprises generate massive amounts of information daily. AI-powered analytics platforms are transforming this data into actionable insights, enabling businesses to make faster, more informed decisions and identify opportunities that were previously invisible.</p>
    
    <h2>The Power of AI Analytics</h2>
    <p>Traditional analytics tools require significant manual effort to extract insights. AI-powered solutions automate this process, using machine learning to identify patterns, predict trends, and generate recommendations.</p>
    
    <h2>Key Capabilities</h2>
    <p>Modern AI analytics platforms offer advanced features including predictive modeling, natural language querying, automated reporting, and real-time insights.</p>
  `,
};

// Merge blog posts with full content
const blogPostsWithContent = blogPosts.map((post) => ({
  ...post,
  fullContent: fullContentMap[post.slug] || post.content,
}));

async function getPost(slug: string) {
  return blogPostsWithContent.find((post) => post.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | Cognito Innovations",
    };
  }

  return {
    title: `${post.title} | Cognito Innovations Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "Cognito Innovations",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-slate-900">
        {/* Hero Image */}
        <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
          <BlogImageWithFallback
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />
          
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-4xl px-4 pb-12 md:px-8">
              <Link
                href="/blogs"
                className="mb-6 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blogs
              </Link>
              
              <div className="mb-4">
                <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-xs font-medium text-emerald-400 backdrop-blur-sm">
                  {post.category}
                </span>
              </div>
              
              <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl font-[var(--font-inter)]">
                {post.title}
              </h1>
              
              <p className="mb-6 text-lg text-slate-300 md:text-xl font-[var(--font-inter)]">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-semibold">
                    {post.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-medium text-white">{post.author}</p>
                    <p className="text-xs">{post.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} read</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="mx-auto w-full max-w-4xl px-4 py-12 md:px-8">
          <div
            className="blog-content text-slate-300 leading-relaxed space-y-6
              [&_h2]:text-white [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-4
              [&_h3]:text-white [&_h3]:font-bold [&_h3]:text-xl [&_h3]:mt-6 [&_h3]:mb-3
              [&_p]:text-slate-300 [&_p]:leading-relaxed [&_p]:mb-4
              [&_ul]:text-slate-300 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2 [&_ul]:mb-4 [&_ul]:ml-4
              [&_li]:text-slate-300 [&_li]:mb-2
              [&_strong]:text-white [&_strong]:font-semibold
              [&_a]:text-emerald-400 [&_a]:no-underline [&_a:hover]:text-emerald-300 [&_a:hover]:underline"
            dangerouslySetInnerHTML={{ __html: post.fullContent }}
          />

          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-2 border-t border-slate-800 pt-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-slate-800/50 border border-slate-700/50 px-3 py-1 text-sm text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Share Section */}
          <div className="mt-8 flex items-center gap-4 border-t border-slate-800 pt-8">
            <span className="text-sm font-medium text-slate-400">Share:</span>
            <button className="flex items-center gap-2 rounded-md bg-slate-800/50 border border-slate-700/50 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 transition-colors">
              <Share2 className="h-4 w-4" />
              Share Article
            </button>
          </div>
        </article>

        {/* Related Posts */}
        <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8">
          <h2 className="mb-8 text-2xl font-bold text-white font-[var(--font-inter)]">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {blogPosts
              .filter((p) => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blogs/${relatedPost.slug}`}
                  className="group overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-all"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <BlogImageWithFallback
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors font-[var(--font-inter)]">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-slate-400 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
        <FooterWithGrid />
      </main>
    </>
  );
}

