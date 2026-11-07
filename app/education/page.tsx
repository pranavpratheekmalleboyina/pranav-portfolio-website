import Image from "next/image";
import { education } from "../../lib/education";

export default function EducationPage() {
  return (
    <section id="education" className="container py-12">
      <h2 className="mb-8 h2">EDUCATION</h2>

      {/* Timeline wrapper */}
      <div className="relative">
        {/* vertical line */}
        <div className="absolute top-0 bottom-0 w-px left-4 bg-slate-700/40 md:left-6" />

        <ul className="space-y-8">
          {education.map((ed, i) => (
            <li key={i} className="relative pl-12 md:pl-16">
              {/* dot */}
              <span className="absolute left-2 top-2 h-3.5 w-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow md:left-4" />

              <article className="overflow-hidden card">
                {/* header */}
                <header className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-start">
                  {/* logo */}
                  {ed.logo ? (
                    <div className="shrink-0">
                      <Image
                        src={ed.logo}
                        alt={`${ed.school} logo`}
                        width={56}
                        height={56}
                        className="object-contain p-1 rounded h-14 w-14 md:h-16 md:w-16 bg-white/5"
                      />
                    </div>
                  ) : null}

                  {/* text block */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold break-words md:text-xl text-slate-100 hyphens-auto">
                      {ed.school}
                    </h3>
                    <p className="break-words text-slate-300 hyphens-auto">{ed.degree}</p>

                    <div className="items-center mt-1 text-sm gap-x-4 text-slate-400">
                      <span className="break-words gap-x-1 hyphens-auto">
                        {ed.start} – {ed.end}
                      </span>
                      {ed.location ? <span className="hidden mx-2 sm:inline">•</span> : null}
                      <span className="block break-words sm:inline hyphens-auto">{ed.location}</span>
                      {ed.gpa ? (
                        <>
                          <span className="hidden mx-2 sm:inline">•</span>
                          <span className="block break-words sm:inline hyphens-auto">GPA: {ed.gpa}</span>
                        </>
                      ) : null}
                    </div>
                  </div>
                </header>

                {/* Activities & societies */}
                {ed.activities?.length ? (
                  <div className="mt-4">
                    <p className="mb-1 text-sm font-medium text-left text-slate-400">
                      Activities & Societies
                    </p>
                    <ul className="pl-5 space-y-1 list-disc text-slate-300">
                      {ed.activities.map((a, idx) => (
                        <li
                          key={idx}
                          className="leading-relaxed text-left break-words hyphens-auto"
                        >
                          {a}
                        </li>
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
                    <ul className="grid grid-cols-1 pl-5 list-disc sm:grid-cols-2 gap-x-6 gap-y-1 text-slate-300">
                      {ed.coursework.map((c, idx) => (
                        <li
                          key={idx}
                          className="leading-relaxed text-left break-words hyphens-auto"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {/* Skills inline */}
                {ed.skills?.length ? (
                  <p className="mt-4 break-words text-slate-300 hyphens-auto">
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
