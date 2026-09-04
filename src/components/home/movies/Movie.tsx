import type { MovieType } from "../../../types/MovieType";
import Rating from "./Rating";

function Movie({ movie }: { movie: MovieType }) {
  return (
    <div className="flex flex-row items-center justify-between gap-6">
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
          <p className="truncate">{movie.description}</p>
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
