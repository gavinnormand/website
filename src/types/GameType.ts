export interface GameType {
  mode: string;
  rating: number;
  opening: string;
  openingLink: string;
  gameLink: string;
  numMoves: number;
  datePlayed: number;
  result: "win" | "loss" | "stalemate";
}
