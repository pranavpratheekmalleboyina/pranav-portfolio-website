"use client";
import Link from "next/link";
// ⬇️ adjust the path if your hook lives somewhere else
import { useActiveSection } from "../hooks/useActiveSection";

const nav = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#education", label: "EDUCATION" },
  { href: "#skills", label: "SKILLS" },
  { href: "#contact", label: "CONTACT" }
] as const;

export default function Header() {
  const active = useActiveSection(nav.map((n) => n.href.slice(1)));

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 navbar">
      <div className="container flex items-center justify-center h-full px-4 mx-auto">
        <nav className="hidden md:flex items-center gap-9 text-[0.95rem] tracking-wide">
          {nav.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <Link
                key={item.href}
                href={item.href}
                scroll
                aria-current={isActive ? "page" : undefined}
                className={[
                  "relative py-1 transition",
                  // base text (brighter for dark navbar)
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400"
                    : "text-slate-100 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:via-indigo-400 hover:to-violet-400",
                  // underline line (full when active, animates on hover otherwise)
                  "after:absolute after:-bottom-1 after:left-0 after:h-[2px]",
                  "after:bg-gradient-to-r after:from-cyan-400 after:via-indigo-400 after:to-violet-400",
                  "after:transition-all",
                  isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
