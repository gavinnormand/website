import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import PageLink from "../components/PageLink";

function Home() {
  return (
    <div className="flex h-[calc(100svh-177px)] flex-col items-center justify-center">
      {/* Info lander */}
      <div className="mx-auto flex flex-col items-center justify-center gap-8 md:flex-row">
        {/* Info lander text */}
        <div className="flex max-w-md flex-col gap-4 text-center md:text-left">
          <div className="flex flex-col">
            <p className="text-accent font-accent text-6xl font-bold">
              Gavin Normand
            </p>
            <p className="text-primary-text text-xl">
              Honors CS @ Northeastern University
            </p>
          </div>
          <p className="text-secondary-text text-lg">
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
            . <br />I spend my time building projects, researching robotics and
            AI, and looking for interesting problems to explore.
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
              <PageLink page={"about"} link={"/about"} size={24} />
              <PageLink page={"experience"} link={"/experience"} size={24} />
              <PageLink page={"projects"} link={"/projects"} size={24} />
            </div>
          </div>
        </div>

        {/* Info lander image on desktop */}

        <img
          src={`/home/me_8.jpg`}
          className="hidden aspect-3/5 h-96 rounded-xl object-cover md:block"
        />
      </div>
    </div>
  );
}

export default Home;
