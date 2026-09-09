import type { GameType } from "../../../types/GameType";
import { FaLongArrowAltUp } from "react-icons/fa";

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
        <img src={"/about/chess/" + game.mode + ".svg"} className="h-8" />
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-1">
            <p>{game.mode} mode</p>
            <p>&bull;</p>
            <p
              className={`${game.result == "win" ? "text-accent" : "text-red"}`}
            >
              {game.result}
            </p>
            &bull;
            <div className="flex flex-row items-center">
              <p>{game.rating}</p>
              <FaLongArrowAltUp
                className={`${game.result == "win" ? "text-accent" : "text-red rotate-180"} inline`}
              />
            </div>
          </div>
          <div className="flex flex-row items-center gap-1">
            <a
              href={game.gameLink}
              target="_blank"
              className="text-accent w-fit underline hover:decoration-wavy"
            >
              {game.numMoves} moves
            </a>
            <p>&bull;</p>
            <a
              href={game.openingLink}
              target="_blank"
              className="text-accent w-fit underline hover:decoration-wavy"
            >
              {game.opening}
            </a>
          </div>
        </div>
      </div>
      <p className="hidden font-mono md:block">
        {epochToTimeSince(game.datePlayed)}
      </p>
    </div>
  );
}

export default Game;
