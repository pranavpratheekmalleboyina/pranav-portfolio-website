import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../lib/projects";

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="h1">Projects</h1>
      <p className="p">A selection of work that highlights engineering depth and product impact.</p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </div>
  );
}
