import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  return (
    <div className="border-accent/15 border-b">
      <div className="text-secondary-text mx-auto flex max-w-3xl flex-row items-center justify-between gap-6 px-8">
        <Link
          to={"/"}
          className={`hover:text-accent transition-colors ${location.pathname == "/" ? "text-accent" : ""}`}
        >
          gavinnormand
        </Link>
        <div className="flex h-16 flex-row items-center gap-6">
          <Link
            to={"/experience"}
            className={`hover:text-accent transition-colors ${location.pathname == "/experience" ? "text-accent" : ""}`}
          >
            experience
          </Link>
          <Link
            to={"/projects"}
            className={`hover:text-accent transition-colors ${location.pathname == "/projects" ? "text-accent" : ""}`}
          >
            projects
          </Link>
          <a
            href={"/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
