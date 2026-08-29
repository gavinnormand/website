import ExperienceList from "../components/experience/ExperienceCardList";
import SectionTitle from "../components/SectionTitle";
import type { ExperienceType } from "../types/ExperienceType";

const experiences: ExperienceType[] = [
  {
    title: "Software Engineering Intern",
    company: "Acorns",
    startDate: "Jun. 2026",
    endDate: "Aug. 2026",
    location: "Remote",
    description: "Android Engineer on the Grown Engineering Team",
    logo: {
      src: "/experience/acorns.jpg",
      link: "https://acorns.com/",
    },
  },
  {
    title: "Software Engineering Co-op",
    company: "Smartleaf",
    startDate: "Jan. 2026",
    endDate: "Jun. 2026",
    location: "Boston, MA",
    description: "Full-stack Ruby on Rails engineer on the Platform Team",
    logo: {
      src: "/experience/smartleaf.jpg",
      link: "https://smartleaf.com/",
    },
  },
  {
    title: "Teaching Assistant",
    company: "Northeastern University",
    startDate: "Aug. 2025",
    endDate: undefined,
    location: "Boston, MA",
    description:
      "Fall '25: Object Oriented Design | Fall'26: Professional Development for Co-op",
    logo: {
      src: "/experience/khoury.png",
      link: "https://www.khoury.northeastern.edu/",
    },
  },
  {
    title: "Resident Assistant",
    company: "Northeastern University",
    startDate: "Aug. 2025",
    endDate: undefined,
    location: "Boston, MA",
    description: "Building community and supporting 30+ residents",
    logo: {
      src: "/experience/northeastern.png",
      link: "https://www.housing.northeastern.edu/",
    },
  },
  {
    title: "IT Consultant",
    company: "CMD Sleep Disorder Center",
    startDate: "Jan. 2024",
    endDate: undefined,
    location: "East Windsor, NJ",
    description: "Managing IT infrastructure and resolving technical issues",
    logo: {
      src: "/experience/cmdsleep.png",
      link: "https://cmdsleep.com/",
    },
  },
];

const leadership: ExperienceType[] = [
  {
    title: "Technical Director",
    company: "Sandbox",
    startDate: "Jan. 2025",
    endDate: undefined,
    location: "Boston, MA",
    description:
      "Leading technical development across 8 concurrent software projects",
    logo: {
      src: "/experience/sandbox.png",
      link: "https://sandboxnu.com/",
    },
  },
  {
    title: "CS Curriculum Lead",
    company: "First Byte",
    startDate: "Aug. 2024",
    endDate: "Apr. 2026",
    location: "Boston, MA",
    description:
      "Led CS education initiatives for underserved high school students",
    logo: {
      src: "/experience/firstbyte.jpg",
      link: "https://www.teachfirstbyte.com/",
    },
  },
  {
    title: "Software Lead",
    company: "FRC Team 1807",
    startDate: "Sep. 2022",
    endDate: "Jul. 2024",
    location: "Allentown, NJ",
    description:
      "Driver and software captain for an internationally competitive robot",
    logo: {
      src: "/experience/1807.jpg",
      link: "https://frc1807.org/",
    },
  },
  {
    title: "Youth Course Director",
    company: "National Youth Leadership Training",
    startDate: "Jul. 2021",
    endDate: "Jul. 2024",
    location: "Manalapan, NJ",
    description:
      "Led 20+ staff to develop 60+ youth into community leaders every year",
    logo: {
      src: "/experience/nylt.jpeg",
      link: "https://www.monmouthcouncilscouting.org/nylt",
    },
  },
];

function Experience() {
  return (
    <div className="flex flex-col gap-4">
      <SectionTitle title="experience" />
      <div className="px-2">
        <ExperienceList experiences={experiences} />
      </div>
      <SectionTitle title="leadership" />
      <div className="px-2">
        <ExperienceList experiences={leadership} />
      </div>
    </div>
  );
}

export default Experience;
