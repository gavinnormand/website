import type { RatingType as RatingType } from "../../../types/RatingType";
import Rating from "./Rating";

function Ratings({ gameModes: ratings }: { gameModes: RatingType[] }) {
  return (
    <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
      {ratings.map((gameMode, index) => (
        <>
          <Rating rating={gameMode} />
          {index != ratings.length - 1 && (
            <>
              <div className="bg-secondary-text/25 hidden w-px self-stretch md:block" />
              <div className="bg-secondary-text/25 h-px md:hidden w-full" />
            </>
          )}
        </>
      ))}
    </div>
  );
}

export default Ratings;
