import { useEffect, useState, type SetStateAction } from "react";
import { SpinnerCircularFixed } from "spinners-react";
import type { RatingType } from "../../../types/RatingType";
import Ratings from "./Ratings";
import GameList from "./GameList";
import type { GameType } from "../../../types/GameType";

const fetchGameModeStats = async () => {
  try {
    const res = await fetch(`/api/chess/fetchRatings`);
    if (!res.ok) throw new Error("Failed to fetch chess stats");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching chess stats:", error);
    throw new Error("Failed to fetch chess stats", { cause: error });
  }
};

const fetchGameFeed = async () => {
  try {
    const res = await fetch(`/api/chess/fetchGames`);
    if (!res.ok) throw new Error("Failed to fetch chess feed");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching chess feed:", error);
    throw new Error("Failed to fetch chess feed", { cause: error });
  }
};

function Chess() {
  const [gameModes, setGameModes] = useState<RatingType[]>([]);
  const [statsLoading, setStatsLoading] = useState(true);

  const [games, setGames] = useState<GameType[]>([]);
  const [gamesLoading, setGamesLoading] = useState(true);

  useEffect(() => {
    fetchGameModeStats()
      .then((data: SetStateAction<RatingType[]>) => setGameModes(data))
      .catch(console.error)
      .finally(() => setStatsLoading(false));
  }, []);

  useEffect(() => {
    fetchGameFeed()
      .then((data: SetStateAction<GameType[]>) => setGames(data))
      .catch(console.error)
      .finally(() => setGamesLoading(false));
  }, []);

  return (
    <div className="text-secondary-text flex flex-col gap-3 text-sm">
      <p className="font-mono">ratings</p>
      {statsLoading ? (
        <SpinnerCircularFixed
          size={50}
          thickness={100}
          speed={100}
          color="#5fad78"
          secondaryColor="rgba(0, 0, 0, 0.44)"
          className="mx-auto py-8"
        />
      ) : (
        <Ratings gameModes={gameModes} />
      )}
      <p className="font-mono">recent games</p>
      {gamesLoading ? (
        <SpinnerCircularFixed
          size={50}
          thickness={100}
          speed={100}
          color="#5fad78"
          secondaryColor="rgba(0, 0, 0, 0.44)"
          className="mx-auto py-8"
        />
      ) : (
        <GameList games={games} />
      )}
    </div>
  );
}

export default Chess;
