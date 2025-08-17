import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../lib/projects";

export default function Page() {
  return (
    <div className="space-y-6">
      <p className="p">A list of all my the projects that I have done so far. </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </div>
  );
}
