import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
] as const;

export default function Header() {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold">Pranav Pratheek Malleboyina</Link>
        <nav className="flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}
          {/* ⬇️ These are my social links */}
          <a
            href="https://github.com/pranav"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline hover:underline"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pranav"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline hover:underline"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
