import { IoLogoGithub } from "react-icons/io";
import type { ProjectType } from "../../types/ProjectType";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ project }: { project: ProjectType }) {
  const hasLiveUrl = project.liveURL && project.liveURL.length > 0;
  const isImage = !project.imageURL.endsWith(".mp4");
  return (
    <div className="bg-secondary-text/5 text-secondary-text flex w-full flex-col overflow-hidden rounded-xl md:flex-row">
      <div className="aspect-video w-full shrink-0 overflow-hidden md:w-72">
        <img
          className={`${isImage ? "block" : "hidden"} h-full w-full object-cover`}
          src={project.imageURL}
        />
        <video
          className={`${isImage ? "hidden" : "block"} h-full w-full object-cover`}
          src={project.imageURL}
          loop
          muted
          autoPlay
          playsInline
          controls={false}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-2 p-4 text-center md:text-left">
        <div className="flex flex-col">
          <p className="text-primary-text text-lg font-semibold">
            {project.title}
          </p>

          <p className="text-sm">{project.description}</p>
        </div>

        <div className="flex flex-row flex-wrap gap-1">
          {project.stack.map((tech) => (
            <p
              key={tech}
              className="bg-secondary-text/10 rounded px-1 py-0.5 font-mono text-xs whitespace-nowrap"
            >
              {tech}
            </p>
          ))}
        </div>

        <div className="mt-2 flex flex-row justify-between text-sm font-medium">
          <a
            href={project.githubURL}
            target="_blank"
            className="hover:text-github border-secondary-text hover:border-github flex flex-row items-center gap-1 rounded-md border px-1 font-mono text-sm transition-colors"
          >
            <IoLogoGithub size={16} />
            <p>github</p>
          </a>
          {hasLiveUrl && (
            <a
              href={project.liveURL}
              target="_blank"
              className="hover:text-accent border-secondary-text hover:border-accent flex flex-row items-center gap-1 rounded-md border px-1 font-mono text-sm transition-colors"
            >
              <FiExternalLink size={16} />
              <p>visit</p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
