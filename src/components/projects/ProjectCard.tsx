import { IoLogoGithub } from "react-icons/io";
import type { ProjectType } from "../../types/ProjectType";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ project }: { project: ProjectType }) {
  const hasLiveUrl = project.liveURL && project.liveURL.length > 0;
  const isImage = !project.imageURL.endsWith(".mp4");
  return (
    <div className="bg-secondary-text/5 border-secondary-text/10 hover:border-secondary-text/20 text-secondary-text group flex w-full flex-col overflow-hidden rounded-xl border transition-colors md:flex-row">
      {/* Project media */}
      <div className="aspect-video w-full shrink-0 overflow-hidden p-4 pr-0 md:w-72">
        <img
          className={`${isImage ? "block" : "hidden"} h-full w-full rounded-md object-cover`}
          src={project.imageURL}
        />
        <video
          className={`${isImage ? "hidden" : "block"} h-full w-full rounded-md object-cover`}
          src={project.imageURL}
          loop
          muted
          autoPlay
          playsInline
          controls={false}
        />
      </div>

      {/* Project info */}
      <div className="flex flex-1 flex-col justify-between gap-3 p-4 text-center md:text-left">
        {/* Project title and description */}
        <div className="flex flex-col">
          <p className="text-primary-text text-lg font-semibold">
            {project.title}
          </p>
          <p className="text-sm">{project.description}</p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-row flex-wrap justify-center gap-1.5 md:justify-start">
          {project.stack.map((tech) => (
            <p
              key={tech}
              className="bg-secondary-text/10 text-secondary-text/90 rounded-md px-1.5 py-0.5 font-mono text-xs whitespace-nowrap"
            >
              {tech}
            </p>
          ))}
        </div>

        {/* Project links */}
        <div className="mt-1 flex flex-row justify-center gap-2 text-sm font-medium md:justify-between">
          <a
            href={project.githubURL}
            target="_blank"
            className="hover:text-github border-secondary-text/30 hover:border-github flex flex-row items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-xs transition-colors"
          >
            <IoLogoGithub size={16} />
            <p>github</p>
          </a>
          {hasLiveUrl && (
            <a
              href={project.liveURL}
              target="_blank"
              className="hover:text-accent border-secondary-text/30 hover:border-accent flex flex-row items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-xs transition-colors"
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
