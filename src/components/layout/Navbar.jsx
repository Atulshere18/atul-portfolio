"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { META } from "@/data/meta";

const links = [
  { label: "about", href: "/about" },
  { label: "projects", href: "/projects" },
  { label: "experience", href: "/experience" },
  { label: "blog", href: "/blog" },
  { label: "contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#1e1e2e]" : ""
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-mono text-lg font-bold text-[#00d4ff] tracking-wide">
          atul<span className="text-[#7c3aed]">.</span>dev
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href}
                className="font-mono text-sm text-[#94a3b8] hover:text-[#00d4ff] transition-colors tracking-wide">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href="/contact"
          className="hidden md:block font-mono text-xs text-[#00d4ff] border border-[#00d4ff] px-4 py-2 rounded hover:bg-[#00d4ff]/10 transition-colors">
          hire me
        </Link>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#94a3b8] hover:text-[#00d4ff]">
          <span className="font-mono text-xl">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111118] border-t border-[#1e1e2e] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm text-[#94a3b8] hover:text-[#00d4ff] transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)}
            className="font-mono text-xs text-[#00d4ff] border border-[#00d4ff] px-4 py-2 rounded text-center hover:bg-[#00d4ff]/10 transition-colors">
            hire me
          </Link>
        </div>
      )}
    </nav>
  );
}