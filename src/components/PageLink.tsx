import { Link } from "react-router-dom";

function PageLink({
  page,
  link,
  size,
}: {
  page: string;
  link: string;
  size: number;
}) {
  return (
    <Link
      to={link}
      style={{ height: `${size}px` }}
      className="border-secondary-text/50 hover:border-primary-text flex items-center rounded-md border px-2.5 transition-colors"
    >
      <p className="text-secondary-text hover:text-primary-text text-sm font-semibold transition-colors">
        {page}
      </p>
    </Link>
  );
}

export default PageLink;
