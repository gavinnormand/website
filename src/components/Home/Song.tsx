import type { SongType } from "../../types/SongType";

function Song({ song }: { song: SongType }) {
  return (
    <div className="flex flex-row gap-6">
      <img src={song.albumCoverURL} className="w-10 h-10" />
      <div className="flex flex-col">
        <p>{song.title}</p>
        <p>
          {song.artist} &bull; {song.album}
        </p>
      </div>
    </div>
  );
}

export default Song;
