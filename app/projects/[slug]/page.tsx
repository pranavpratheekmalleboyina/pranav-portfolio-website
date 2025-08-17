// app/projects/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../../lib/projects";

// Next 15 types expect params as a Promise in RSC pages
type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);

  if (!p) {
    return (
      <div className="space-y-4">
        <h1 className="h1">Project not found</h1>
        <p className="p">The project you’re looking for doesn’t exist.</p>
        <Link href="/projects" className="btn">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="h1">{p.title}</h1>
        <p className="mt-2 p">{p.description}</p>

        {p.tags?.length ? (
          <div className="flex flex-wrap gap-2 mt-3">
            {p.tags.map((t) => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
        ) : null}
      </header>

      {/* Hero Image */}
      {p.image ? (
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
        </div>
      ) : null}

      {/* Case Study or About */}
      <section className="space-y-4">
        {"caseStudy" in p && (p as any).caseStudy ? (
          <>
            <h2 className="h2">Case Study</h2>
            {(p as any).caseStudy?.problem && (
              <p className="p"><strong>Problem:</strong> {(p as any).caseStudy.problem}</p>
            )}
            {(p as any).caseStudy?.approach && (
              <p className="p"><strong>Approach:</strong> {(p as any).caseStudy.approach}</p>
            )}
            {(p as any).caseStudy?.impact && (
              <p className="p"><strong>Impact:</strong> {(p as any).caseStudy.impact}</p>
            )}
          </>
        ) : (
          <>
            <h2 className="h2">About this project</h2>
            <p className="p">{p.description}</p>
          </>
        )}
      </section>

      {/* Actions */}
      <div className="flex gap-4 text-sm">
        {p.demoUrl && (
          <a className="btn btn-primary" href={p.demoUrl} target="_blank" rel="noopener noreferrer">
            View Live
          </a>
        )}
        {p.repoUrl && (
          <a className="btn" href={p.repoUrl} target="_blank" rel="noopener noreferrer">
            See Code
          </a>
        )}
      </div>
    </div>
  );
}
