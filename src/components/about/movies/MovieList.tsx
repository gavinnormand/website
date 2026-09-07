import type { MovieType } from "../../../types/MovieType";
import Movie from "./Movie";

function MovieList({ movies }: { movies: MovieType[] }) {
  return (
    <div className="flex flex-col gap-3">
      {movies.map((movie, index, array) => (
        <div className="flex flex-col gap-3">
          <Movie movie={movie} />
          {index != array.length - 1 && (
            <div className="bg-secondary-text/25 h-px" />
          )}
        </div>
      ))}
    </div>
  );
}

export default MovieList;
