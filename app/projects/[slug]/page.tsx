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
        <Link href="/projects" className="btn">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="h1">{p.title}</h1>
        <p className="mt-2 p">{p.description}</p>

        {p.tech?.length ? (
          <div className="flex flex-wrap gap-2 mt-3">
            {p.tech.map((t) => (
              <span key={t} className="badge">
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      {/* Hero Image */}
      {p.image ? (
        <figure className="relative max-w-3xl mx-auto overflow-hidden aspect-video rounded-xl bg-slate-800/40 ring-1 ring-slate-700/50">
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-contain" // was object-cover
            sizes="(min-width:1024px) 768px, 92vw"
            priority
            quality={90}
          />
        </figure>
      ) : null}

      {/* Case Study or About */}
      <section className="space-y-4">
        {"caseStudy" in p && (p as any).caseStudy ? (
          <>
            <h2 className="h2">Case Study</h2>
            {(p as any).caseStudy?.problem && (
              <p className="p">
                <strong>Problem:</strong> {(p as any).caseStudy.problem}
              </p>
            )}
            {(p as any).caseStudy?.approach && (
              <p className="p">
                <strong>Approach:</strong> {(p as any).caseStudy.approach}
              </p>
            )}
            {(p as any).caseStudy?.impact && (
              <p className="p">
                <strong>Impact:</strong> {(p as any).caseStudy.impact}
              </p>
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
        {p.repo && (
          <a
            className="btn"
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        )}
      </div>
    </div>
  );
}
