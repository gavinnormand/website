import type { SongType } from "../../types/SongType";

function dateTimeToTimeSince(dateTime: string) {
  const date = new Date(dateTime).getTime();
  const now = Date.now();

  const secondsAgo = Math.floor((now - date) / 1000);

  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const count = Math.floor(secondsAgo / secondsInUnit);
    if (count >= 1) {
      return `${count} ${unit}${count > 1 ? "s" : ""} ago`;
    }
  }

  return `${secondsAgo} seconds ago`;
}

function Song({ song }: { song: SongType }) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-6">
        <img src={song.albumCoverURL} className="h-14 w-14 rounded-md" />
        <div className="flex flex-col">
          <a
            href={song.linkURL}
            target="_blank"
            className="text-accent w-fit underline hover:decoration-wavy"
          >
            {song.title}
          </a>
          <p>
            {song.artist} &bull; {song.album}
          </p>
        </div>
      </div>
      {song.played_at && (
        <p className="hidden font-mono md:block">
          {dateTimeToTimeSince(song.played_at)}
        </p>
      )}
    </div>
  );
}

export default Song;
