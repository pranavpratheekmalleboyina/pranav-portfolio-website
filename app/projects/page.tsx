import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../lib/projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1>MY PROJECTS</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </div>
  );
}
