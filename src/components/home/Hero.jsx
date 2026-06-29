"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { META, ROLES } from "@/data/meta";

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROLES[roleIdx];
    let timeout;
    if (!deleting) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 90);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 55);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated grid bg */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      {/* Glow orbs */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #00d4ff12 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-50px] left-[-50px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #7c3aed10 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16">
        {/* Available badge */}
        {META.available && (
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-xs text-[#94a3b8] tracking-widest uppercase">
              available for work
            </span>
          </div>
        )}

        {/* Name */}
        <h1 className="font-mono font-bold leading-none mb-2"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
          <span className="text-[#e2e8f0]">Atul Manoj</span>
          <br />
          <span className="text-[#00d4ff]">Shere</span>
        </h1>

        {/* Typewriter role */}
        <p className="font-mono text-lg text-[#64748b] mb-6 h-8">
          {displayed}
          <span className="inline-block w-[2px] h-[1.1em] bg-[#00d4ff] ml-[2px] align-middle animate-pulse" />
        </p>

        {/* Bio */}
        <p className="text-[#94a3b8] leading-relaxed max-w-xl mb-10 border-l-2 border-[#7c3aed]/30 pl-4">
          Full Stack Developer building scalable web apps and AI-powered platforms.
          Currently crafting <span className="text-[#e2e8f0]">Luminis</span> — a market
          research & BI platform at{" "}
          <span className="text-[#00d4ff]">Fortune Business Insights</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Link href="/projects"
            className="bg-[#00d4ff] text-[#0a0a0f] px-6 py-3 rounded font-medium text-sm hover:bg-[#00d4ff]/90 transition-colors">
            View my work
          </Link>
       <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-[#e2e8f0] border border-[#2d2d3d] px-6 py-3 rounded text-sm hover:border-[#7c3aed] transition-colors"
>
  <span className="text-[#7c3aed]">↓</span>
  View Resume
</a>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap items-center gap-3 mt-14">
          <span className="font-mono text-[10px] text-[#444466] uppercase tracking-widest mr-1">stack</span>
          {["React","Next.js","Node.js","MongoDB","PostgreSQL","AWS","TypeScript"].map(t => (
            <span key={t}
              className="bg-[#111118] border border-[#1e1e2e] text-[#64748b] font-mono text-xs px-3 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}