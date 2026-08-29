import type { ProjectType } from "../../types/ProjectType";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }: { projects: ProjectType[] }) {
  return (
    <div className="mx-auto flex w-full flex-col items-center gap-6">
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
