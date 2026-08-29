import type { ExperienceType } from "../../types/ExperienceType";
import ExperienceCard from "./ExperienceCard";

function ExperienceList({ experiences }: { experiences: ExperienceType[] }) {
  return (
    <div className="flex flex-col gap-3">
      {experiences.map((experience, index, array) => (
        <div className="flex flex-col gap-4">
          <ExperienceCard experience={experience} />
          {index != array.length - 1 && (
            <div className="bg-secondary-text/25 h-px" />
          )}
        </div>
      ))}
    </div>
  );
}

export default ExperienceList;
