import type { SongType } from "../../types/SongType";

function dateTimeToTimeSince(dateTime: string) {
  const date = new Date(dateTime);
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
