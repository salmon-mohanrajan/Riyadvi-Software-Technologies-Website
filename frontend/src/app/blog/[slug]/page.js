import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogData } from '@/data/blogData';
import { API_BASE_URL } from '@/config/api';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  User, 
  ChevronRight, 
  Sparkles, 
  Bookmark, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Article Not Found | Riyadvi' };
  }

  return {
    title: `${post.title} | Riyadvi Tech Perspectives`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

async function ArticleContent({ params }) {
  const { slug } = await params;
  let post = null;
  try {
    const res = await fetch(`${API_BASE_URL}/api/content/articles`, { cache: 'no-store' });
    const json = await res.json();
    if (json.success && json.data) {
      post = json.data.find((p) => p.slug === slug);
    }
  } catch (err) {}

  if (!post) {
    post = blogData.find((p) => p.slug === slug);
  }

  if (!post) {
    notFound();
  }

  // Find 2 related articles
  const relatedPosts = blogData
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <article className="min-h-screen bg-black text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-[500px] h-[350px] bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 mb-8">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <span className="text-[#D4AF37] font-semibold truncate max-w-xs">{post.category}</span>
        </div>

        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-[#D4AF37] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to all articles
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-xs text-neutral-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
              {post.publishedAt}
            </span>
            <span className="text-xs text-neutral-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed border-l-2 border-[#D4AF37] pl-4 py-1 mb-8">
            {post.excerpt}
          </p>

          {/* Author Byline Card */}
          <div className="flex items-center justify-between py-4 border-y border-neutral-800">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-amber-700 flex items-center justify-center font-bold text-black text-base shadow-md">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{post.author.name}</p>
                <p className="text-xs text-neutral-400">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-400 hidden sm:inline">Verified Riyadvi Publication</span>
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
            </div>
          </div>
        </header>

        {/* Main Article Body */}
        <div className="glass-panel p-8 md:p-12 rounded-2xl border border-neutral-800/80 mb-12">
          <div className="prose prose-invert prose-gold max-w-none space-y-6 text-neutral-300 text-base md:text-lg leading-relaxed">
            {post.content.trim().split('\n\n').map((paragraph, index) => {
              // Heading 3
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 flex items-center gap-2 border-b border-neutral-800 pb-2">
                    <span className="text-[#D4AF37]">■</span>
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              // Bullet lists
              if (paragraph.startsWith('* ') || paragraph.startsWith('1. ')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={index} className="space-y-2 my-4 pl-2">
                    {items.map((item, itemIdx) => {
                      const cleanItem = item.replace(/^\*\s+|^[0-9]+\.\s+/, '');
                      return (
                        <li key={itemIdx} className="flex items-start gap-3 text-sm md:text-base text-neutral-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0" />
                          <span>{cleanItem}</span>
                        </li>
                      );
                    })}
                  </ul>
                );
              }
              // Standard Paragraph
              return (
                <p key={index} className="text-neutral-300 text-sm md:text-base leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-neutral-400 mr-2">Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Consultation Callout */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-[#D4AF37]/30 text-center mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-[90px] rounded-full pointer-events-none" />
          <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Planning to implement these technologies in your product?
          </h3>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto mb-6">
            Schedule a high-level technical architecture session with our engineering directors. We evaluate your current stack and provide an actionable blueprint.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-[#D4AF37] text-black text-xs font-bold hover:bg-[#E5C158] transition-colors"
            >
              Book Architecture Session
            </Link>
            <Link
              href="/business-health-checkup"
              className="px-6 py-2.5 rounded-full bg-neutral-900 border border-neutral-700 text-white text-xs font-semibold hover:border-[#D4AF37] transition-colors"
            >
              Free 6-Point Tech Diagnostic
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              Recommended Deep Dives
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="p-6 rounded-xl glass-panel border border-neutral-800 hover:border-[#D4AF37]/40 transition-all duration-300 group block"
                >
                  <span className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wider block mb-2">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2 line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-2 mb-4">
                    {rel.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span>{rel.readTime}</span>
                    <span className="text-[#D4AF37] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
}

export default function DynamicBlogPostPage(props) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center text-white">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
            <span className="text-neutral-400 text-sm font-mono">Loading technical article...</span>
          </div>
        </div>
      }
    >
      <ArticleContent {...props} />
    </Suspense>
  );
}
