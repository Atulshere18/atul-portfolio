import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Atul Manoj Shere",
  description: "Full stack and AI projects built by Atul Manoj Shere.",
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase mb-3">
            — my work
          </p>
          <h1 className="font-mono text-4xl font-bold text-[#e2e8f0] mb-4">
            Projects
          </h1>
          <p className="text-[#64748b] max-w-xl leading-relaxed">
            A mix of production systems, full-stack builds, and experiments.
            Each one taught me something new.
          </p>
        </div>

        {/* Featured */}
        <div className="mb-6">
          <h2 className="font-mono text-xs text-[#444466] uppercase tracking-widest mb-6">
            Featured
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>

        {/* Others */}
        {others.length > 0 && (
          <div className="mt-12">
            <h2 className="font-mono text-xs text-[#444466] uppercase tracking-widest mb-6">
              Other projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {others.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}