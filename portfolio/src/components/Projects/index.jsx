import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../projectData";
export default function Projects() {
  return (
    <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
