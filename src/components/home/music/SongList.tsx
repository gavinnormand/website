import type { SongType } from "../../../types/SongType";
import Song from "./Song";

function SongList({ songs }: { songs: SongType[] }) {
  return (
    <div className="flex flex-col gap-3">
      {songs.map((song, index, array) => (
        <div className="flex flex-col gap-3">
          <Song song={song} />
          {index != array.length - 1 && (
            <div className="bg-secondary-text/25 h-px" />
          )}
        </div>
      ))}
    </div>
  );
}

export default SongList;
