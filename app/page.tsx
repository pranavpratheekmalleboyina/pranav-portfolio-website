import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../lib/projects";

export default function Page() {
  return (
    <div className="space-y-16">
      <section className="space-y-6 text-center">
        <h1 className="h1">My Personal Portfolio</h1>
        <p className="max-w-2xl mx-auto p">
          Full Stack developer skilled in HTML,CSS,Javascript and Python,Java, Python who is passionate
          about building efficient applications that cater to the needs of the industry.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/projects" className="btn btn-primary">View Projects</Link>
          <a href="/resume.pdf" className="btn" download>Download Resume</a>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="h2">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((proj) => (
            <ProjectCard key={proj.slug} p={proj} />
          ))}
        </div>
      </section>
    </div>
  );
}
