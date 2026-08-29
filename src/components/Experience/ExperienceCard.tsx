import type { ExperienceType } from "../../types/ExperienceType";

function ExperienceCard({ experience }: { experience: ExperienceType }) {
  return (
    <div className="flex w-full flex-col items-center gap-6 md:flex-row">
      <a href={experience.logo.link} target="_blank" className="shrink-0">
        <img
          src={experience.logo.src}
          className="h-16 w-16 rounded-md transition duration-200 hover:shadow-[0_0_10px_#FFFFFF]"
        />
      </a>
      <div className="text-secondary-text flex w-full flex-col">
        <div className="text-primary-text flex flex-col items-center justify-between md:flex-row">
          <p className="font-medium">{experience.title}</p>
          <p className="font-mono text-sm">
            {experience.startDate} -{" "}
            {experience.endDate ? experience.endDate : "Present"}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <p className="italic">{experience.company}</p>
          <p className="font-mono text-sm">{experience.location}</p>
        </div>
        <p>{experience.description}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;
