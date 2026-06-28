import { posts } from "@/data/blog";
import BlogCard from "@/components/blog/BlogCard";

export const metadata = {
  title: "Blog | Atul Manoj Shere",
  description: "Thoughts on full-stack development, AI, and the developer journey.",
};

export default function BlogPage() {
  const published = posts.filter((p) => p.published);

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase mb-3">
            — writing
          </p>
          <h1 className="font-mono text-4xl font-bold text-[#e2e8f0] mb-4">
            Blog
          </h1>
          <p className="text-[#64748b] max-w-xl leading-relaxed">
            Lessons from real projects, tutorials, career reflections, and opinions
            on the tools I use every day.
          </p>
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {published.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}