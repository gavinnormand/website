import { Link } from "react-router-dom";

function PageLink({
  page,
  link,
  size,
  type,
}: {
  page: string;
  link: string;
  size: number;
  type: "page" | "external";
}) {
  return type == "page" ? (
    <Link
      to={link}
      style={{ height: `${size}px` }}
      className="border-secondary-text/50 hover:border-primary-text flex items-center rounded-md border px-2.5 transition-colors"
    >
      <p className="text-secondary-text hover:text-primary-text text-sm font-semibold transition-colors">
        {page}
      </p>
    </Link>
  ) : (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ height: `${size}px` }}
      className="border-secondary-text/50 hover:border-primary-text flex items-center rounded-md border px-2.5 transition-colors"
    >
      <p className="text-secondary-text hover:text-primary-text text-sm font-semibold transition-colors">
        {page}
      </p>
    </a>
  );
}

export default PageLink;
