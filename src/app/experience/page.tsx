import { experience, education } from "@/data/experience";

export const metadata = {
  title: "Experience | Atul Manoj Shere",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase mb-3">
            — work history
          </p>
          <h1 className="font-mono text-4xl font-bold text-[#e2e8f0]">
            Experience
          </h1>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-[#1e1e2e]" />

          <div className="space-y-12">
            {experience.map((job) => (
              <div key={job.id} className="relative pl-8">
                {/* Dot */}
                <div className={`absolute left-[-4px] top-1.5 w-2 h-2 rounded-full border-2 ${
                  job.current
                    ? "bg-[#00d4ff] border-[#00d4ff]"
                    : "bg-[#0a0a0f] border-[#444466]"
                }`} />

                {/* Card */}
                <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6">
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h2 className="font-mono text-lg font-bold text-[#e2e8f0]">
                        {job.role}
                      </h2>
                      <p className="font-mono text-sm text-[#00d4ff]">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <span className={`font-mono text-xs px-2 py-1 rounded border ${
                        job.current
                          ? "text-green-400 border-green-400/30 bg-green-400/10"
                          : "text-[#64748b] border-[#2d2d3d] bg-[#0a0a0f]"
                      }`}>
                        {job.type}
                      </span>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-3 mb-4 mt-2">
                    <span className="font-mono text-xs text-[#444466]">{job.duration}</span>
                    <span className="font-mono text-xs text-[#444466]">·</span>
                    <span className="font-mono text-xs text-[#444466]">{job.period}</span>
                    <span className="font-mono text-xs text-[#444466]">·</span>
                    <span className="font-mono text-xs text-[#444466]">{job.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                    {job.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {job.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3 text-sm text-[#94a3b8]">
                        <span className="text-[#7c3aed] font-mono mt-0.5 shrink-0">→</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1e1e2e]">
                    {job.tech.map((t) => (
                      <span key={t}
                        className="font-mono text-xs bg-[#0a0a0f] border border-[#2d2d3d] text-[#64748b] px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h2 className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase mb-8">
            — education
          </h2>
          {education.map((edu, i) => (
            <div key={i} className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6">
              <h3 className="font-mono text-base font-bold text-[#e2e8f0] mb-1">
                {edu.degree}
              </h3>
              <p className="font-mono text-sm text-[#00d4ff] mb-2">{edu.institution}</p>
              <div className="flex gap-3 font-mono text-xs text-[#444466]">
                <span>{edu.duration}</span>
                <span>·</span>
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}