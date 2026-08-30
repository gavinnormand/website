import { useState } from "react";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import SectionTitle from "../components/SectionTitle";
import PageLink from "../components/PageLink";
import Music from "../components/home/Music";
import Skills from "../components/home/Skills";

function Home() {
  const [pictureIndex] = useState<number>(() => {
    return Math.floor(Math.random() * 5) + 1;
  });
  const [pictureHovered, setPictureHovered] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-8 pt-8">
      {/* Info lander */}
      <div className="mx-auto flex flex-row items-center justify-center gap-8">
        {/* Info lander text */}
        <div className="flex max-w-md flex-col gap-4 text-center md:text-left">
          <div className="flex flex-col">
            <p className="text-accent font-accent text-5xl font-bold">
              Gavin Normand
            </p>
            <p className="text-primary-text text-lg">
              Honors CS @ Northeastern University
            </p>
          </div>
          <p className="text-secondary-text">
            I'm a Computer Science student at{" "}
            <a
              className="text-accent underline hover:decoration-wavy"
              href="https://www.khoury.northeastern.edu/"
            >
              Northeastern University
            </a>{" "}
            interested in building software that interacts with the real world.
            Previously, I've worked as a Software Engineer Intern at{" "}
            <a
              className="text-accent underline hover:decoration-wavy"
              href="http://acorns.com/"
            >
              Acorns
            </a>{" "}
            and{" "}
            <a
              className="text-accent underline hover:decoration-wavy"
              href="http://smartleaf.com/"
            >
              Smartleaf
            </a>
            . I spend my time working on projects, researching robotics and AI,
            and looking for interesting problems to explore.
          </p>
          {/* Info lander socials */}
          <div className="text-secondary-text flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start">
            <div className="flex flex-row gap-4">
              <a
                target="_blank"
                href="mailto:normandgavin@gmail.com"
                className="hover:text-primary-text transition-colors"
              >
                <MdOutlineEmail size={28} />
              </a>
              <a
                target="_blank"
                href="https://github.com/gavinnormand"
                className="hover:text-primary-text transition-colors"
              >
                <IoLogoGithub size={28} />
              </a>
              <a
                target="_blank"
                href="https://linkedin.com/in/gavin-normand"
                className="hover:text-primary-text transition-colors"
              >
                <IoLogoLinkedin size={28} />
              </a>
              <a
                target="_blank"
                href="https://instagram.com/gavin_normand"
                className="hover:text-primary-text transition-colors"
              >
                <IoLogoInstagram size={28} />
              </a>
            </div>
            <p className="hidden md:block">|</p>
            <div className="flex flex-row gap-4">
              <PageLink page={"experience"} link={"/experience"} size={24} />
              <PageLink page={"projects"} link={"/projects"} size={24} />
            </div>
          </div>
        </div>

        {/* Info lander image */}
        <div
          className="relative hidden aspect-8/10 h-80 md:block"
          onMouseOver={() => setPictureHovered(true)}
          onMouseOut={() => setPictureHovered(false)}
        >
          <img
            src={`/home/me_${pictureIndex}.jpg`}
            className={`absolute inset-0 h-80 rounded-xl object-cover transition-opacity duration-200 ${
              pictureHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src="/home/little_me.jpg"
            className={`absolute inset-0 h-80 rounded-xl object-cover transition-opacity duration-200 ${
              pictureHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* About me */}
      <div className="flex flex-col gap-4">
        <SectionTitle title={"about me"} />
        <p className="text-secondary-text px-2">
          I'm Gavin Normand, a third-year honors Computer Science student at
          Northeastern University, pursuing a bachelor's degree with a
          concentration in Software and a minor in Mathematics.
          <br />
          <br />
          I spend a lot of my time building software. I work on projects through
          Sandbox, a student-led software consultancy, as well as personal
          projects and freelance work. I'm especially interested in robotics,
          artificial intelligence, machine learning, computer vision, and
          intelligent systems.
          <br />
          <br />I grew up in Millstone, New Jersey, and now spend most of the
          year in Boston. Outside of tech, I'm usually outdoors or spending time
          with friends, family, and my dog. I enjoy pickup basketball, hiking,
          biking, running, skiing, tennis, music, and watching the NBA and NFL.
        </p>
      </div>

      {/* Skills */}
      <div className="flex flex-col gap-4">
        <SectionTitle title={"skills"} />
        <div className="px-2">
          <Skills />
        </div>
      </div>

      {/* Music */}
      <div className="flex flex-col gap-4">
        <SectionTitle title={"music"} />
        <div className="px-2">
          <Music />
        </div>
      </div>
    </div>
  );
}

export default Home;
