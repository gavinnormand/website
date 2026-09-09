import type { RatingType as RatingType } from "../../../types/RatingType";

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

function Rating({ rating }: { rating: RatingType }) {
  return (
    <div className="flex flex-row items-center gap-3 text-center md:flex-col">
      <img src={"/about/chess/" + rating.mode + ".svg"} className="h-10" />
      <div className="flex flex-col">
        <p>
          <span className="font-semibold">mode:</span> {rating.mode}
        </p>
        <p>
          <span className="font-semibold">rating:</span> {rating.rating}
        </p>
        <p>
          <span className="font-semibold">last played:</span>{" "}
          {epochToTimeSince(rating.lastPlayed)}
        </p>
      </div>
    </div>
  );
}

export default Rating;
