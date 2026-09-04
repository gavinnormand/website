import { useEffect, useRef, useState } from "react";
import type { MovieType } from "../../../types/MovieType";
import Rating from "./Rating";

function Movie({ movie }: { movie: MovieType }) {
  const [truncated, setTruncated] = useState<boolean>(true);
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      const el = descriptionRef.current;
      if (el) {
        setIsOverflowing(el.scrollWidth > el.clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [movie.description]);

  return (
    <div className="flex flex-row items-center justify-between gap-2">
      <div className="flex min-w-0 flex-1 flex-row items-center gap-6">
        <img src={movie.posterURL} className="w-14 rounded-md" />
        <div className="flex min-w-0 flex-col gap-1">
          <div className="flex flex-row gap-1">
            <a
              href={movie.link}
              target="_blank"
              className="text-accent w-fit underline hover:decoration-wavy"
            >
              {movie.title + " (" + movie.filmYear + ")"}
            </a>
            <p>&bull;</p>
            <Rating rating={movie.rating} />
          </div>
          <div>
            <p
              ref={descriptionRef}
              className={`${truncated ? "truncate" : ""}`}
            >
              {movie.description}
            </p>
            {isOverflowing && (
              <p
                className="cursor-pointer underline w-fit"
                onClick={() => setTruncated(!truncated)}
              >
                {truncated ? "see more" : "see less"}
              </p>
            )}
          </div>
        </div>
      </div>
      <p className="hidden font-mono md:block">
        {new Date(movie.watchedDate).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })}
      </p>
    </div>
  );
}

export default Movie;
