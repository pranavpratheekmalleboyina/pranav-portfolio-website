import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../lib/projects";

export default function Page() {
  return (
    <div className="space-y-16">
      <section className="space-y-6 text-center">
        <h1 className="h1">Full-Stack Engineer building fast, reliable products</h1>
        <p className="max-w-2xl mx-auto p">
          I turn ideas into secure, performant apps using React, Node, and Python.
          Here are a few projects I’m proud of.
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
