import Link from "next/link";

const statusStyles = {
  production: { label: "Production", color: "text-green-400 border-green-400/30 bg-green-400/10" },
  completed:  { label: "Completed",  color: "text-blue-400 border-blue-400/30 bg-blue-400/10" },
  internship: { label: "Internship", color: "text-purple-400 border-purple-400/30 bg-purple-400/10" },
};

export default function ProjectCard({ project }) {
  const status = statusStyles[project.status] || statusStyles.completed;

  return (
    <Link href={`/projects/${project.slug}`}
      className="group block bg-[#111118] border border-[#1e1e2e] rounded-xl p-6 hover:border-[#00d4ff]/40 transition-all duration-300 hover:shadow-[0_0_30px_#00d4ff08]">

      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <span className={`font-mono text-xs px-2 py-1 rounded border ${status.color}`}>
          {status.label}
        </span>
        <span className="font-mono text-xs text-[#444466]">{project.category}</span>
      </div>

      {/* Title */}
      <h3 className="font-mono text-lg font-bold text-[#e2e8f0] mb-2 group-hover:text-[#00d4ff] transition-colors">
        {project.title}
      </h3>

      {/* Tagline */}
      <p className="text-sm text-[#64748b] mb-4 leading-relaxed">
        {project.tagline}
      </p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span key={t}
            className="font-mono text-xs bg-[#0a0a0f] border border-[#2d2d3d] text-[#94a3b8] px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-[#1e1e2e]">
        <div className="flex gap-3">
          {project.github && (
            <span className="font-mono text-xs text-[#64748b] hover:text-[#00d4ff] transition-colors">
              GitHub ↗
            </span>
          )}
          {project.live && (
            <span className="font-mono text-xs text-[#64748b] hover:text-[#00d4ff] transition-colors">
              Live ↗
            </span>
          )}
        </div>
        <span className="font-mono text-xs text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity">
          View details →
        </span>
      </div>
    </Link>
  );
}