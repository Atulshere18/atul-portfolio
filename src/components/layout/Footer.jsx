import Link from "next/link";
import { META } from "@/data/meta";

const links = [
  { label: "about", href: "/about" },
  { label: "projects", href: "/projects" },
  { label: "experience", href: "/experience" },
  { label: "blog", href: "/blog" },
  { label: "contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e2e] bg-[#0a0a0f] mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">

          {/* Brand */}
          <div>
            <p className="font-mono text-lg font-bold text-[#00d4ff] mb-2">
              atul<span className="text-[#7c3aed]">.</span>dev
            </p>
            <p className="text-xs text-[#444466] max-w-xs leading-relaxed">
              Full Stack Developer building scalable web apps and AI-powered platforms.
              Based in Pune, India.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-xs text-[#444466] uppercase tracking-widest mb-4">
              Pages
            </p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="font-mono text-xs text-[#64748b] hover:text-[#00d4ff] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-mono text-xs text-[#444466] uppercase tracking-widest mb-4">
              Connect
            </p>
            <ul className="space-y-2">
              {[
                { label: "GitHub", href: META.github },
                { label: "LinkedIn", href: META.linkedin },
                { label: "Email", href: `mailto:${META.email}` },
              ].map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-xs text-[#64748b] hover:text-[#00d4ff] transition-colors">
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#1e1e2e] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-[#2d2d3d]">
            © {new Date().getFullYear()} Atul Manoj Shere. All rights reserved.
          </p>
          <p className="font-mono text-xs text-[#2d2d3d]">
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}