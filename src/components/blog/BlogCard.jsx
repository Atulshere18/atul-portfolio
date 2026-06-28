import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}
      className="group block bg-[#111118] border border-[#1e1e2e] rounded-xl p-6 hover:border-[#7c3aed]/40 transition-all duration-300">

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span key={tag}
            className="font-mono text-xs text-[#7c3aed] border border-[#7c3aed]/20 bg-[#7c3aed]/5 px-2 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="font-mono text-base font-bold text-[#e2e8f0] mb-3 leading-snug group-hover:text-[#00d4ff] transition-colors">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-sm text-[#64748b] leading-relaxed mb-5">
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-[#1e1e2e]">
        <div className="flex gap-3 font-mono text-xs text-[#444466]">
          <span>{new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <span className="font-mono text-xs text-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity">
          Read →
        </span>
      </div>
    </Link>
  );
}