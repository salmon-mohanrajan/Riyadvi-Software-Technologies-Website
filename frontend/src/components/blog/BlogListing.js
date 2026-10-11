'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Tag, 
  Sparkles, 
  User, 
  BookOpen, 
  ChevronRight 
} from 'lucide-react';
import { blogCategories, blogData } from '@/data/blogData';

export default function BlogListing() {
  const [articles, setArticles] = useState(blogData);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/content/articles')
      .then((res) => res.json())
      .then((json) => {
        if (json.success && json.data?.length > 0) {
          setArticles(json.data);
        }
      })
      .catch(() => {});
  }, []);

  // Filter articles based on category and search query
  const filteredArticles = articles.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.tags || []).some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const featuredPost = articles.find((p) => p.featured) || articles[0];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#D4AF37]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-96 right-10 w-[400px] h-[300px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Breadcrumb Header */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 mb-6">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <span className="text-[#D4AF37] font-semibold">Engineering Insights</span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Riyadvi Knowledge Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Engineering Insights &amp; <span className="text-gradient-gold">Tech Perspectives</span>
          </h1>
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
            In-depth architectural breakdowns, real-time 3D web benchmarks, AI integration strategies, and digital transformation blueprints authored by our engineering leadership.
          </p>
        </div>

        {/* Featured Article Spotlight (shown if no search active) */}
        {!searchQuery && selectedCategory === 'All' && featuredPost && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 p-8 md:p-10 rounded-2xl glass-panel border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 blur-[90px] rounded-full pointer-events-none group-hover:bg-[#D4AF37]/20 transition-all duration-500" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider">
                    Featured Deep Dive
                  </span>
                  <span className="text-xs text-neutral-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {featuredPost.publishedAt}
                  </span>
                  <span className="text-xs text-neutral-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-tight mb-4">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-neutral-300 text-base leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {featuredPost.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-amber-600 flex items-center justify-center font-bold text-black text-sm">
                      {featuredPost.author.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{featuredPost.author.name}</p>
                      <p className="text-xs text-neutral-400">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <Link 
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] group-hover:translate-x-1 transition-transform"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Decorative Tech Graphic Panel */}
              <div className="lg:col-span-4 bg-black/60 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span>Performance Target</span>
                    <span className="text-[#D4AF37] font-mono font-bold">60 FPS WebGL</span>
                  </div>
                  <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-[#D4AF37] w-[96%]" />
                  </div>
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span>Bundle Compression</span>
                    <span className="text-[#D4AF37] font-mono font-bold">Draco &lt;1.5MB</span>
                  </div>
                  <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-[#D4AF37] w-[92%]" />
                  </div>
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span>First Contentful Paint</span>
                    <span className="text-[#D4AF37] font-mono font-bold">0.8s Global CDN</span>
                  </div>
                  <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-[#D4AF37] w-[98%]" />
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-800/80 text-center">
                  <p className="text-xs text-neutral-400">Includes live benchmarks &amp; architectural code samples</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter Bar: Categories + Search Input */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-800">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20 font-bold'
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics, tags, tech..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-neutral-950 rounded-2xl border border-neutral-900">
            <BookOpen className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">No articles match your search</h3>
            <p className="text-sm text-neutral-400 max-w-sm mx-auto mb-6">
              Try searching with different keywords or switch back to the 'All' category tab.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-5 py-2 rounded-full bg-[#D4AF37] text-black text-xs font-bold hover:bg-[#E5C158] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, idx) => (
                <motion.article
                  key={article.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: idx * 0.05 }}
                  className="rounded-xl glass-panel border border-neutral-800/80 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group overflow-hidden p-6"
                >
                  <div>
                    {/* Category & Meta */}
                    <div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
                      <span className="px-2.5 py-1 rounded bg-[#D4AF37]/10 text-[#D4AF37] font-semibold border border-[#D4AF37]/20">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-neutral-400">
                        <Clock className="w-3 h-3 text-[#D4AF37]" />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <Link href={`/blog/${article.slug}`}>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug mb-3">
                        {article.title}
                      </h3>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-400 font-mono"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Author & Read Link */}
                    <div className="pt-4 border-t border-neutral-850 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-bold text-[#D4AF37]">
                          {article.author.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white leading-tight">{article.author.name}</p>
                          <p className="text-[10px] text-neutral-500 leading-tight">{article.publishedAt}</p>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${article.slug}`}
                        className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/40 transition-colors"
                      >
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Newsletter / Tech Dispatch Banner */}
        <div className="mt-20 p-8 md:p-10 rounded-2xl glass-panel border border-neutral-800 relative overflow-hidden text-center max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5 pointer-events-none" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Stay Ahead of the <span className="text-gradient-gold">Technological Curve</span>
          </h3>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto mb-6">
            Get exclusive technical deep-dives on React Three Fiber, AI agent orchestration, and distributed cloud architectures delivered once a month. No marketing fluff.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your work email"
              className="w-full px-4 py-2.5 rounded-full bg-neutral-900 border border-neutral-700 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
            />
            <button className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#D4AF37] text-black text-xs font-bold hover:bg-[#E5C158] whitespace-nowrap transition-colors">
              Subscribe Free
            </button>
          </div>
          <p className="text-[11px] text-neutral-400 mt-3">We respect your privacy. Unsubscribe anytime with 1 click.</p>
        </div>

      </div>
    </div>
  );
}
