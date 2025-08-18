import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

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
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-slate-200#80 
                       dark:border-slate-700#60 bg-white/70
                      dark:bg-slate-900/40 backdrop-blur">
      <div className="container flex items-center justify-center h-full px-4 mx-auto"> 
        <nav className="hidden md:flex items-center gap-9 text-[0.95rem] tracking-wide">
          {nav.map((item) => (
            <Link key={item.href} 
                  href={item.href} 
                  className="relative py-1 transition text-gray-900 hover:text-brand
                         after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
                         after:bg-brand after:transition-all hover:after:w-full"
                  scroll       
                         >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
