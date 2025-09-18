import Image from "next/image";
import { education } from "../../lib/education"; // <-- same shape as we defined earlier

export default function Educationpage() {
  return (
    <section id="education" className="container py-12">
      <h2 className="mb-8 h2">EDUCATION</h2>

      {/* Timeline wrapper */}
      <div className="relative">
        {/* vertical line */}
        <div className="absolute top-0 bottom-0 w-px left-4 bg-slate-700/40 md:left-6" />

        <ul className="space-y-8">
          {education.map((ed, i) => (
            <li key={i} className="relative pl-14 md:pl-16">
              {/* dot */}
              <span className="absolute left-2 top-2 inline-block h-3.5 w-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow md:left-4" />

              <article className="card">
                <header className="flex items-start gap-4">
                  {/* logo */}
                  {ed.logo ? (
                    <div className="mt-1 shrink-0">
                      <Image
                        src={ed.logo}
                        alt={`${ed.school} logo`}
                        width={80}
                        height={80}
                        className="rounded"
                      />
                    </div>
                  ) : null}

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-slate-100">
                      {ed.school}
                    </h3>
                    <p className="text-slate-300">{ed.degree}</p>

                    <div className="mt-1 text-sm text-slate-400">
                      <span>{ed.start} – {ed.end}</span>
                      {ed.location ? <span className="mx-2">•</span> : null}
                      {ed.location}
                      {ed.gpa ? (
                        <>
                          <span className="mx-2">•</span>
                          <span>GPA: {ed.gpa}</span>
                        </>
                      ) : null}
                    </div>
                  </div>
                </header>

                {/* Activities & societies */}
                {ed.activities?.length ? (
                  <div className="mt-4">
                    <p className="mb-1 text-sm font-medium text-slate-400">
                      Activities & societies
                    </p>
                    <ul className="pl-5 space-y-1 list-disc text-slate-300">
                      {ed.activities.map((a, idx) => (
                        <li key={idx}>{a}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {/* Relevant coursework */}
                {ed.coursework?.length ? (
                  <div className="mt-4">
                    <p className="mb-1 text-sm font-medium text-slate-400">
                      Relevant Coursework
                    </p>
                    <ul className="grid grid-cols-1 pl-5 list-disc md:grid-cols-2 gap-y-1 text-slate-300">
                      {ed.coursework.map((c, idx) => (
                        <li key={idx}>{c}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {/* Skills inline (optional) */}
                {ed.skills?.length ? (
                  <p className="mt-4 text-slate-300">
                    <span className="font-medium">Skills:</span>{" "}
                    {ed.skills.map((s, idx) => (
                      <span key={s}>
                        {s}
                        {idx < (ed.skills?.length ?? 0) - 1 ? (
                          <span className="mx-1.5 text-slate-400">·</span>
                        ) : null}
                      </span>
                    ))}
                  </p>
                ) : null}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
