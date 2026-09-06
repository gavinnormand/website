export interface GameType {
  mode: string;
  ratingBefore: number;
  ratingAfter: number;
  datePlayed: number;
  result: "win" | "loss" | "stalemate";
}
