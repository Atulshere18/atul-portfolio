import { META } from "@/data/meta";
import { skills } from "@/data/skills";
import Link from "next/link";

export const metadata = {
  title: "About | Atul Manoj Shere",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase mb-3">
            — about me
          </p>
          <h1 className="font-mono text-4xl font-bold text-[#e2e8f0] mb-8">
            Who I am
          </h1>

          {/* Avatar + Bio */}
          <div className="flex flex-col md:flex-row gap-10 items-start">

            {/* Avatar */}
            <div className="shrink-0">
              <div className="w-32 h-32 rounded-2xl bg-[#111118] border border-[#1e1e2e] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0"
                  style={{ background: "radial-gradient(circle at 30% 30%, #00d4ff15, transparent 60%), radial-gradient(circle at 70% 70%, #7c3aed15, transparent 60%)" }} />
                <span className="font-mono text-4xl font-bold text-[#00d4ff] relative z-10">AS</span>
              </div>
              <div className="mt-4 space-y-2">
                <a href={META.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs text-[#64748b] hover:text-[#00d4ff] transition-colors">
                  ↗ GitHub
                </a>
                <a href={META.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs text-[#64748b] hover:text-[#00d4ff] transition-colors">
                  ↗ LinkedIn
                </a>
                <a href={`mailto:${META.email}`}
                  className="flex items-center gap-2 font-mono text-xs text-[#64748b] hover:text-[#00d4ff] transition-colors">
                  ↗ Email me
                </a>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-[#94a3b8] leading-relaxed">
              <p>
                I'm <span className="text-[#e2e8f0] font-medium">Atul Manoj Shere</span>, a Full Stack Developer
                based in <span className="text-[#e2e8f0]">Pune, India</span>. I build scalable web applications,
                internal business platforms, and AI-powered solutions using modern JavaScript technologies.
              </p>
              <p>
                Currently at <span className="text-[#00d4ff]">Fortune Business Insights</span>, I contribute to
                <span className="text-[#e2e8f0]"> Luminis</span> — an enterprise market research and BI platform
                built with Next.js, Node.js, SQL, and MongoDB.
              </p>
              <p>
                I enjoy solving complex business problems, optimizing application performance, and building
                products that deliver real value. I'm also actively expanding into cloud infrastructure with
                <span className="text-[#7c3aed]"> AWS</span>.
              </p>
              <p>
                Outside of work, I write about what I learn — building in public, sharing lessons from
                real projects, and documenting the full-stack journey.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase mb-8">
            — skills & technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((group) => (
              <div key={group.category}
                className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-5">
                <h3 className="font-mono text-xs text-[#444466] uppercase tracking-widest mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill}
                      className="font-mono text-xs bg-[#0a0a0f] border border-[#2d2d3d] text-[#94a3b8] px-3 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 pt-10 border-t border-[#1e1e2e] flex flex-wrap gap-4">
          <Link href="/projects"
            className="font-mono text-sm bg-[#00d4ff] text-[#0a0a0f] px-6 py-3 rounded hover:bg-[#00d4ff]/90 transition-colors">
            View my projects
          </Link>
          <Link href="/contact"
            className="font-mono text-sm border border-[#1e1e2e] text-[#94a3b8] px-6 py-3 rounded hover:border-[#7c3aed] hover:text-[#e2e8f0] transition-colors">
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}