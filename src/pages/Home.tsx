import { useState } from "react";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import SectionTitle from "../components/SectionTitle";
import PageLink from "../components/PageLink";
import Music from "../components/Home/Music";

function Home() {
  const [pictureIndex] = useState<number>(() => {
    return Math.floor(Math.random() * 5) + 1;
  });
  const [pictureHovered, setPictureHovered] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-8 pt-8">
      {/* Info lander */}
      <div className="mx-auto flex flex-row justify-center gap-6">
        {/* Info lander text */}
        <div className="flex max-w-md flex-col gap-4 text-center md:text-left">
          <div className="flex flex-col">
            <p className="text-accent font-accent text-5xl font-bold">
              Gavin Normand
            </p>
            <p className="text-primary-text text-lg">
              CS @ Northeastern University
            </p>
          </div>
          <p className="text-secondary-text">
            I'm a Computer Science student at{" "}
            <a
              className="text-accent underline hover:decoration-wavy"
              href="https://www.khoury.northeastern.edu/"
            >
              Northeastern University
            </a>
            . Previously, I've worked as a Software Engineer Intern at{" "}
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
            . Outside of work, I am the Technical Director at{" "}
            <a
              className="text-accent underline hover:decoration-wavy"
              href="http://sandboxnu.com/"
            >
              Sandbox
            </a>
            , a Resident Assistant on campus, a Teaching Assistant, and looking
            for new research opportunities. I'm particularly interested in
            robotics, intelligent systems, computer vision, artificial
            intelligence, and building software that can have an impact beyond
            the screen.
          </p>
          {/* Info lander socials */}
          <div className="text-secondary-text flex flex-row items-center justify-center gap-4 md:justify-start">
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
            <p>|</p>
            <PageLink page={"experience"} link={"/experience"} size={24} />
            <PageLink page={"projects"} link={"/projects"} size={24} />
          </div>
        </div>

        {/* Info lander image */}
        <div
          className="relative hidden aspect-8/10 h-96 w-64 md:block"
          onMouseOver={() => setPictureHovered(true)}
          onMouseOut={() => setPictureHovered(false)}
        >
          <img
            src={`/home/me_${pictureIndex}.jpg`}
            className={`absolute inset-0 h-96 rounded-xl object-cover transition-opacity duration-200 ${
              pictureHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src="/home/little_me.jpg"
            className={`absolute inset-0 h-96 rounded-xl object-cover transition-opacity duration-200 ${
              pictureHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* About me */}
      <div className="flex flex-col gap-4">
        <SectionTitle title={"about me"} />
        <p className="text-secondary-text">
          Hi! I'm Gavin Normand, a third-year honors Computer Science student at
          Northeastern University, pursuing a bachelor's degree with a
          concentration in Software and a minor in Mathematics. I'm interested
          in building things that sit at the intersection of software,
          intelligent systems, and the physical world. A lot of my time outside
          the classroom is spent building.
          <br />
          <br />
          I work on projects through Sandbox, a student-led software
          consultancy, as well as personal projects and freelance work. I also
          enjoy exploring research and technical problems simply because I find
          them interesting. My interests currently span robotics, artificial
          intelligence, machine learning, computer vision, and cloud computing,
          and I'm always looking for opportunities to learn something new or
          work on a problem I haven't encountered before.
          <br />
          <br />I grew up in Millstone, New Jersey, and now spend most of the
          year in Boston. Outside of tech, I'm usually doing something outdoors
          or spending time with people I care about. I enjoy pickup basketball,
          hiking, biking, running, skiing, tennis, photography, and cooking. I'm
          also always of spending time with friends, family, and my dog.
        </p>
      </div>

      {/* Music */}
      <div className="flex flex-col gap-4">
        <SectionTitle title={"music"} />
        <Music />
      </div>
    </div>
  );
}

export default Home;
