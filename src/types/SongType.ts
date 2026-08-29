export interface SongType {
  type: "recent" | "top";
  title: string;
  artist: string;
  album: string;
  albumCoverURL: string;
  linkURL: string;
  played_at: string | undefined;
  popularity: string | undefined;
}
