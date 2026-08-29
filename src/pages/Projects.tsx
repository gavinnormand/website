import ProjectList from "../components/projects/ProjectCardList";
import SectionTitle from "../components/SectionTitle";
import type { ProjectType } from "../types/ProjectType";

const projects: ProjectType[] = [
  {
    title: "SVD Compress",
    description:
      "A tool that lets you upload any image and watch it reconstruct itself through the math of Singular Value Decomposition",
    imageURL: "/projects/svdcompress.png",
    githubURL: "https://github.com/gavinnormand/svdcompress/",
    liveURL: "https://svdcompress.vercel.app/",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Python",
      "FastAPI",
      "Docker",
      "AWS Lightsail",
    ],
  },
  {
    title: "Vennify",
    description:
      "A tool that lets you compare and modify Spotify playlists to discover similarities and differences and curate your playlists",
    imageURL: "/projects/vennify.png",
    githubURL: "https://github.com/gavinnormand/vennify/",
    liveURL: "https://vennify.vercel.app/",
    stack: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Next.js",
      "Vercel",
    ],
  },
  {
    title: "Good Dog Licensing",
    description:
      "Good Dog Licensing connects musicians with media makers who need music for their projects",
    imageURL: "/projects/gdl.png",
    githubURL: "https://github.com/sandboxnu/good-dog-licensing",
    liveURL: "https://good-dog-licensing.vercel.app/",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "tRPC",
      "Next.js",
      "NextAuth.js",
      "Vercel",
    ],
  },
  {
    title: "Group Leader",
    description:
      "A group scorekeeping iOS app where you define custom metrics and post updates to award each other points",
    imageURL: "/projects/groupleader.png",
    githubURL: "https://github.com/gavinnormand/group-leader/",
    liveURL:
      "https://appetize.io/app/b_myrsckuh63623eir6ddv5g6qda?device=iphone17pro&osVersion=26.0&appearance=dark&autoplay=true&toolbar=false",
    stack: ["Swift", "SwiftUI", "Supabase", "PostgreSQL"],
  },
  {
    title: "Clue Sidekick",
    description:
      "A Clue assistant that helps you track cards and clues to deduce the solution through logical elimination",
    imageURL: "/projects/cluesidekick.png",
    githubURL: "https://github.com/gavinnormand/clue-sidekick/",
    liveURL: "https://cluesidekick.vercel.app/",
    stack: [
      "Vue 3",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Spring Boot",
      "Docker",
      "AWS Lightsail",
      "Vite",
    ],
  },
  {
    title: "CMD Sleep Website",
    description:
      "A modern, responsive, and mobile friendly full-stack website built for CMD Sleep clinic as a freelance commission",
    imageURL: "/projects/cmdsleep.png",
    githubURL: "https://github.com/gavinnormand/cmdsleep",
    liveURL: "https://cmdsleep.com/",
    stack: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Express.js",
      "AWS Lightsail",
    ],
  },
  {
    title: "Personal Portfolio",
    description:
      "My original personal portfolio website that I created to showcase my projects, experiences, and skills as an engineer",
    imageURL: "/projects/website.png",
    githubURL: "https://github.com/gavinnormand/personal-website",
    liveURL: "https://gavinnormand.com/",
    stack: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Next.js",
      "Vercel",
    ],
  },
  {
    title: "Seam Carver",
    description:
      "Takes an image and then removes its least important seams until the user stops it or the image is fully carved",
    imageURL: "/projects/seamCarver.mp4",
    githubURL: "https://github.com/gavinnormand/seam-carver",
    liveURL: "https://www.youtube.com/watch?v=iTsX2446KKE",
    stack: [
      "Java",
      "Seam Carving Algorithm",
      "Image Processing",
      "Dynamic Programming",
    ],
  },
  {
    title: "Maze Solver",
    description:
      "A maze solver that randomly generates a maze and then solves it using either depth-first or breadth-first search",
    imageURL: "/projects/mazeGame.mp4",
    githubURL: "https://github.com/gavinnormand/maze-solver",
    liveURL: "https://www.youtube.com/watch?v=i757tDnsfn8",
    stack: [
      "Java",
      "Kruskal's Algorithm",
      "Depth-First Search",
      "Breadth-First Search",
      "Dynamic Programming",
    ],
  },
  {
    title: "Scholar Saver",
    description:
      "Full-stack personal finance web app to help students manage their finances. My first full-stack web dev experience.",
    imageURL: "/projects/scholarSaver.png",
    githubURL: "https://github.com/gavinnormand/finhacks-25",
    liveURL: "",
    stack: [
      "React",
      "JavaScript",
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "Supabase",
      "React Router",
    ],
  },
  {
    title: "PlaNUr",
    description:
      "Front-end web app to help Northeastern University students to build future schedules or change current schedules",
    imageURL: "/projects/planur.png",
    githubURL: "https://github.com/Oasis-NEU/f24-group20",
    liveURL: "",
    stack: ["React", "JavaScript", "HTML", "CSS", "Vite", "React Router"],
  },
];

function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <SectionTitle title="projects" />
      <div className="px-2">
        <ProjectList projects={projects} />
      </div>
    </div>
  );
}

export default Projects;
