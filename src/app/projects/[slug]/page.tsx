import { projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">

        {/* Back */}
        <Link href="/projects"
          className="font-mono text-xs text-[#64748b] hover:text-[#00d4ff] transition-colors mb-10 inline-block">
          ← back to projects
        </Link>

        {/* Title */}
        <h1 className="font-mono text-3xl font-bold text-[#e2e8f0] mb-2">
          {project.title}
        </h1>
        <p className="text-[#64748b] mb-8">{project.tagline}</p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((t) => (
            <span key={t}
              className="font-mono text-xs bg-[#111118] border border-[#1e1e2e] text-[#94a3b8] px-3 py-1 rounded">
              {t}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="border-l-2 border-[#7c3aed]/40 pl-5 mb-10">
          <p className="text-[#94a3b8] leading-relaxed">{project.longDescription}</p>
        </div>

        {/* Highlights */}
        <h2 className="font-mono text-sm text-[#00d4ff] uppercase tracking-widest mb-4">
          Key highlights
        </h2>
        <ul className="space-y-3 mb-10">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-3 text-sm text-[#94a3b8]">
              <span className="text-[#00d4ff] font-mono mt-0.5">→</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex gap-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="font-mono text-sm border border-[#1e1e2e] text-[#94a3b8] px-5 py-2 rounded hover:border-[#00d4ff] hover:text-[#00d4ff] transition-colors">
              GitHub ↗
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="font-mono text-sm bg-[#00d4ff] text-[#0a0a0f] px-5 py-2 rounded hover:bg-[#00d4ff]/90 transition-colors">
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}