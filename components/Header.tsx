import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/experience", label: "EXPERIENCE" },
  { href: "/education", label: "EDUCATION" },
  { href: "/skills", label: "SKILLS" },
  { href: "/contact", label: "CONTACT" }
] as const;

export default function Header() {
  return (
    <header>
        <Link href="/" className="font-semibold">Pranav Pratheek Malleboyina</Link>
      <div className="container flex items-center justify-center h-16">
        <nav className="flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}
          {/* ⬇️ These are my social links */}
          {/* <a
            href="https://github.com/pranav"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline hover:underline"
            aria-label="GitHub"
          >
            GitHub
          </a> */}
          {/* <a
            href="https://www.linkedin.com/in/pranav"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline hover:underline"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a> */}
        </nav>
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
}
