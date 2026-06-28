import { posts } from "@/data/blog";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-28 pb-20">
      <div className="max-w-2xl mx-auto px-6">

        {/* Back */}
        <Link href="/blog"
          className="font-mono text-xs text-[#64748b] hover:text-[#00d4ff] transition-colors mb-10 inline-block">
          ← back to blog
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {post.tags.map((tag) => (
            <span key={tag}
              className="font-mono text-xs text-[#7c3aed] border border-[#7c3aed]/20 bg-[#7c3aed]/5 px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="font-mono text-3xl font-bold text-[#e2e8f0] mb-3 leading-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex gap-3 font-mono text-xs text-[#444466] mb-10">
          <span>{new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        {/* Placeholder content */}
        <div className="border-l-2 border-[#7c3aed]/30 pl-5 mb-10">
          <p className="text-[#94a3b8] leading-relaxed">{post.excerpt}</p>
        </div>

        <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6 text-center">
          <p className="font-mono text-sm text-[#444466] mb-2">Full post coming soon</p>
          <p className="text-xs text-[#2d2d3d]">
            This post is being written. Check back or follow on LinkedIn for updates.
          </p>
        </div>

      </div>
    </div>
  );
}