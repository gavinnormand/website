import type { GameType } from "../../../types/GameType";
import Game from "./Game";

function GameList({ games }: { games: GameType[] }) {
  return (
    <div className="flex flex-col gap-3">
      {games.map((game, index) => (
        <div className="flex flex-col gap-3">
          <Game game={game} />
          {index != games.length - 1 && (
            <div className="bg-secondary-text/25 h-px" />
          )}
        </div>
      ))}
    </div>
  );
}

export default GameList;
