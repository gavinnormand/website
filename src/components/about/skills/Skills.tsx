import Skill from "./Skill";

const languages = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "Kotlin",
  "Ruby",
  "HTML",
  "CSS",
  "C",
  "C++",
  "SQL",
  "Racket",
];

const frameworksAndLibraries = [
  // Frontend
  "React",
  "Vue",
  "Next.js",
  "Tailwind CSS",

  // Backend / Full-stack
  "Rails",
  "Node.js",
  "Spring Boot",
  "Express.js",
  "Bun",
  "Flask",
  "tRPC",
  "Prisma",

  // Testing
  "JUnit",

  // Data Science
  "NumPy",
  "Pandas",
];

const toolsAndPlatforms = [
  // Dev Tools
  "Git",
  "Docker",
  "ESLint",
  "Prettier",
  "Figma",
  "n8n",

  // Deployment & Hosting
  "Vercel",
  "AWS LightSail",
  "GitHub Pages",

  // Databases / Backend-as-a-Service
  "PostgreSQL",
  "Supabase",

  // IDEs
  "VS Code",
  "IntelliJ",
  "Eclipse",
  "Android Studio",

  // AI
  "Claude Code",
];

function Skills() {
  return (
    <div className="text-secondary-text flex flex-col gap-4 font-mono text-sm">
      <div className="flex flex-col gap-2">
        <p>languages</p>
        <div className="flex flex-row flex-wrap gap-1">
          {languages.map((language) => (
            <Skill skill={language} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>frameworks & libraries</p>
        <div className="flex flex-row flex-wrap gap-1">
          {frameworksAndLibraries.map((language) => (
            <Skill skill={language} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>tools & platforms</p>
        <div className="flex flex-row flex-wrap gap-1">
          {toolsAndPlatforms.map((language) => (
            <Skill skill={language} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
