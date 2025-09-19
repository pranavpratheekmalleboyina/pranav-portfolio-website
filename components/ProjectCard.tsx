import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ p }: { p: any }) {
  return (
    <article className="space-y-3 card">
      {/* Title + Logo */}
      <header className="flex items-center gap-3">
        {p.image && (
          <div className="relative w-8 h-8 overflow-hidden rounded-md shrink-0 ring-1 ring-slate-700/50">
            <Image
              src={p.image}
              alt={`${p.title} logo`}
              fill
              className="object-contain"
              sizes="32px"
            />
          </div>
        )}
        <h3 className="text-lg font-semibold text-slate-100">{p.title}</h3>
      </header>

      {/* Description */}
      <p className="text-sm text-slate-300">{p.description}</p>

      {/* Tech stack badges */}
      {p.tech && (
        <div className="flex flex-wrap gap-2">
          {p.tech.map((t: string) => (
            <span
              key={t}
              className="px-3 py-1 text-sm transition border rounded-full bg-slate-800 text-slate-200 border-slate-600 hover:border-cyan-400 hover:text-cyan-300"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="flex gap-4 text-sm">
        {p.repo && (
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-1 link-fancy"
          >
            Github
          </a>
        )} 
          <a
            href={`/projects/${p.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-sm px-4 py-1.5"
          >
            Case Study
          </a>
      </div>
    </article>
  );
}
