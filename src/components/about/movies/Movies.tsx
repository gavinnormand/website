import { useEffect, useState, type SetStateAction } from "react";
import type { MovieType } from "../../../types/MovieType";
import { SpinnerCircularFixed } from "spinners-react";
import MovieList from "./MovieList";

const fetchMovies = async () => {
  try {
    const res = await fetch(`/api/letterboxd/fetchFeed`);
    if (!res.ok) throw new Error("Failed to fetch movies");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw new Error("Failed to fetch movies", { cause: error });
  }
};

function Movies() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies()
      .then((data: SetStateAction<MovieType[]>) => setMovies(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="text-secondary-text flex flex-col gap-3 text-sm">
      <p className="font-mono">recent movies</p>
      {loading ? (
        <SpinnerCircularFixed
          size={50}
          thickness={100}
          speed={100}
          color="#5fad78"
          secondaryColor="rgba(0, 0, 0, 0.44)"
          className="mx-auto py-8"
        />
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
}

export default Movies;
