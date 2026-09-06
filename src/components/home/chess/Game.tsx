import type { GameType } from "../../../types/GameType";
import { FaLongArrowAltRight } from "react-icons/fa";

function epochToTimeSince(epoch: number) {
  const date = new Date(epoch * 1000);
  const now = Date.now();

  const secondsAgo = Math.floor((now - date.getTime()) / 1000);

  if (secondsAgo < 60) {
    return `${secondsAgo}s ago`;
  } else if (secondsAgo < 3600) {
    return `${Math.floor(secondsAgo / 60)}m ago`;
  } else if (secondsAgo < 86400) {
    return `${Math.floor(secondsAgo / 3600)}h ago`;
  } else {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }
}

function Game({ game }: { game: GameType }) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-4">
        <img src={"/home/" + game.mode + ".svg"} className="h-8" />
        <div className="flex flex-col">
          <p>
            <span className="font-semibold">result: </span>
            <span
              className={`${game.result == "win" ? "text-accent" : "text-red"}`}
            >
              {game.result}
            </span>
          </p>
          <p>
            <span className="font-semibold">rating change: </span>
            {game.ratingBefore}{" "}
            <FaLongArrowAltRight
              className={`${game.result == "win" ? "text-accent" : "text-red"} inline`}
            />{" "}
            {game.ratingAfter} {"("}
            <span
              className={`${game.result == "win" ? "text-accent" : "text-red"}`}
            >
              {game.result == "win" ? "+" : ""}
              {game.ratingAfter - game.ratingBefore}
            </span>
            {")"}
          </p>
        </div>
      </div>
      <p className="hidden font-mono md:block">
        {epochToTimeSince(game.datePlayed)}
      </p>
    </div>
  );
}

export default Game;
