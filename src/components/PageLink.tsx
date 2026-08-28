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
      className={`border-secondary-text hover:border-primary-text h-[${size}px] flex items-center rounded-md border`}
      to={link}
    >
      <p className="text-secondary-text hover:text-primary-text px-2 text-sm font-semibold">
        {page}
      </p>
    </Link>
  );
}

export default PageLink;
