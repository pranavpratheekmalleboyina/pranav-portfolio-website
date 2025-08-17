import Link from "next/link";
import type { Project } from "../lib/projects";

type Props = { p: Project };

export default function ProjectCard({ p }: Props) {
  return (
    <article className="card">
      <div className="card-body">
        <h3 className="h3">
          <Link href={`/projects/${p.slug}`}>{p.title}</Link>
        </h3>
        <p className="p">{p.description}</p>
        <div className="flex gap-3 mt-3">
          {p.demo && <a className="btn btn-sm" href={p.demo}>Live</a>}
          {p.repo && <a className="btn btn-sm" href={p.repo}>Code</a>}
        </div>
      </div>
    </article>
  );
}
