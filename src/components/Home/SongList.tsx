import type { SongType } from "../../types/SongType";
import Song from "./Song";

function SongList({ songs }: { songs: SongType[] }) {
  return (
    <div className="flex flex-col gap-6">
      {songs.map((song) => (
        <Song song={song} />
      ))}
    </div>
  );
}

export default SongList;
