import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="text-secondary-text mx-auto flex h-12 max-w-3xl flex-row items-center justify-between gap-6 px-8 text-sm">
      © {new Date().getFullYear()} Gavin Normand
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
      </div>
    </div>
  );
}

export default Footer;
