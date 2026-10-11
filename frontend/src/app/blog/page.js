import BlogListing from '@/components/blog/BlogListing';

export const metadata = {
  title: 'Engineering Insights & Tech Thought Leadership | Riyadvi Software Technologies',
  description:
    'Explore in-depth architectural analyses, real-time 3D web benchmarks, AI integration strategies, and digital transformation playbooks written by Riyadvi engineers.',
  openGraph: {
    title: 'Engineering Insights & Tech Perspectives | Riyadvi',
    description:
      'Deep architectural breakdowns on React Three Fiber, AI agent orchestration, and distributed cloud systems.',
  },
};

export default function BlogPage() {
  return <BlogListing />;
}
