import Image from "next/image";
import { experience } from "../../lib/experience";

export default function ExperiencePage() {
  return (
    <section id="experience" className="container py-12">
      <h2 className="mb-8 h2">EXPERIENCE</h2>

      {/* timeline wrapper */}
      <div className="relative">
        {/* vertical line */}
        <div className="absolute top-0 bottom-0 w-px left-4 bg-slate-700/40 md:left-6" />

        <ul className="space-y-8">
          {experience.map((job, i) => (
            <li key={i} className="relative pl-12 md:pl-16">
              {/* timeline dot */}
              <span className="absolute left-2 top-2 h-3.5 w-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow md:left-4" />

              <article className="overflow-hidden card">
                {/* header */}
                <header className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-start">
                  {/* logo */}
                  {job.logo ? (
                    <div className="mt-0 shrink-0">
                      <Image
                        src={job.logo}
                        alt={`${job.company} logo`}
                        width={56}
                        height={56}
                        className="object-contain p-1 rounded h-14 w-14 md:h-16 md:w-16 bg-white/5"
                      />
                    </div>
                  ) : null}

                  {/* text block */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold break-words md:text-xl text-slate-100 hyphens-auto">
                      {job.role}
                      {job.type ? (
                        <span className="ml-2 text-sm font-normal text-slate-400">
                          • {job.type}
                        </span>
                      ) : null}
                    </h3>

                    <p className="break-words text-slate-300 hyphens-auto">
                      <span className="font-medium">{job.company}</span>
                    </p>

                    <div className="items-center mt-1 text-sm gap-x-2 text-slate-400">
                      <span className="break-words hyphens-auto">
                        {job.start} – {job.end}
                      </span>
                      {job.location ? <span className="hidden mx-2 sm:inline">•</span> : null}
                      <span className="block break-words sm:inline hyphens-auto">{job.location}</span>
                    </div>
                  </div>
                  
                </header>

                {/* bullets */}
                {job.bullets?.length ? (
                  <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-1.5 text-sm md:text-base text-slate-300 break-words hyphens-auto">
                    {job.bullets.map((b: string, idx: number) => (
                      <li
                        key={idx}
                        className="leading-relaxed text-left hyphens-auto"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
