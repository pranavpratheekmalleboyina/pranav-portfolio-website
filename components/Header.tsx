import Link from "next/link";

const nav = [
  { href: "/#home", label: "HOME" },
  { href: "/#about", label: "ABOUT" },
  { href: "/#experience", label: "EXPERIENCE" },
  { href: "/#education", label: "EDUCATION" },
  { href: "/#projects", label: "PROJECTS" },
  { href: "/#skills", label: "SKILLS" },
  { href: "/#contact", label: "CONTACT" }
] as const;

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 navbar">
      <div className="container flex items-center justify-center h-full px-4 mx-auto">
        <nav className="flex items-center text-sm tracking-wide gap-9">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll
              className="relative py-1 transition text-slate-300 hover:text-transparent
                         hover:bg-clip-text hover:bg-gradient-to-r 
                         hover:from-cyan-400 hover:via-indigo-400 hover:to-violet-400
                         after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
                         after:bg-gradient-to-r after:from-cyan-400 after:via-indigo-400 after:to-violet-400
                         after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
