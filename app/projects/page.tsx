import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../lib/projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h2 className="mb-8 h2">MY PROJECTS</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </div>
  );
}
