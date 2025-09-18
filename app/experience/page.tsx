import Image from "next/image";
import { experience } from  "../../lib/experience";

export default function Experiencepage() {
  return (
    <section id="experience" className="container py-12">
      <h2 className="mb-8 h2">EXPERIENCE</h2>

      {/* Timeline wrapper */}
      <div className="relative">
        {/* vertical line */}
        <div className="absolute top-0 bottom-0 w-px left-4 bg-slate-700/40 md:left-6" />

        <ul className="space-y-8">
          {experience.map((job, i) => (
            <li key={i} className="relative pl-14 md:pl-16">
              {/* dot */}
              <span className="absolute left-2 top-2 inline-block h-3.5 w-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow md:left-4" />

              <article className="card">
                <header className="flex items-start gap-4">
                  {/* logo */}
                  {job.logo ? (
                    <div className="mt-1 shrink-0">
                      <Image
                        src={job.logo}
                        alt={`${job.company} logo`}
                        width={40}
                        height={40}
                        className="rounded"
                      />
                    </div>
                  ) : null}

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-100">
                      {job.role}
                      {job.type ? (
                        <span className="ml-2 text-sm font-normal text-slate-400">• {job.type}</span>
                      ) : null}
                    </h3>
                    <p className="text-slate-300">
                      <span className="font-medium">{job.company}</span>
                    </p>

                    <div className="mt-1 text-sm text-slate-400">
                      <span>{job.start} – {job.end}</span>
                      {job.location ? <span className="mx-2">•</span> : null}
                      {job.location}
                    </div>
                  </div>
                </header>

                {/* bullets */}
                <ul className="pl-5 mt-4 space-y-2 list-disc text-slate-300">
                  {job.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>

              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
