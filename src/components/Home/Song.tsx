import type { SongType } from "../../types/SongType";

function Song({ song }: { song: SongType }) {
  return (
    <div className="flex flex-row items-center gap-6">
      <img src={song.albumCoverURL} className="h-14 w-14 rounded-md" />
      <div className="flex flex-col">
        <a
          href={song.linkURL}
          target="_blank"
          className="text-accent w-fit hover:decoration-wavy underline"
        >
          {song.title}
        </a>
        <p>
          {song.artist} &bull; {song.album}
        </p>
      </div>
    </div>
  );
}

export default Song;
