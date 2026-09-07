export default async function handler(req, res) {
  try {
    const games = [];
    var month = new Date().getMonth();
    var year = new Date().getFullYear();

    while (games.length < 6) {
      const response = await fetch(
        process.env.CHESS_FEED_URL +
          "/" +
          year +
          "/" +
          (month + 1).toString().padStart(2, "0"),
      );

      if (!response.ok) {
        throw new Error(`Chess.com returned ${response.status}`);
      }

      const data = await response.json();

      if (!data.games) {
        throw new Error(`Chess.com returned no games!`);
      }

      if (games.length + data.games.length >= 6) {
        games.push(...data.games.slice(-1 * (6 - games.length)).reverse());
      } else {
        games.push(...data.games.reverse());
      }

      if (month == 0) {
        month = 11;
        year -= 1;
      } else {
        month -= 1;
      }
    }

    const displayed_games = games.slice(0, 5).map((game, index) => {
      const side =
        game.white.username == process.env.CHESS_USERNAME ? "white" : "black";
      const last_side =
        games[index + 1].white.username == process.env.CHESS_USERNAME
          ? "white"
          : "black";
      return {
        mode: game.time_class,
        rating: game[side].rating,
        opening: game.eco
          .split("/")
          .pop()
          .replace(/-\d+(\..*)?$/, "")
          .replace(/-/g, " "),
        openingLink: game.eco,
        gameLink: game.url,
        numMoves: parseInt(
          [
            ...game.pgn.replace(/\{[^}]*\}/g, "").matchAll(/ (\d+)\. /g),
          ].pop()[1],
          10,
        ),
        datePlayed: game.end_time,
        result:
          game[side].result == "win"
            ? "win"
            : game[side].result == "stalemate"
              ? "stalemate"
              : "loss",
      };
    });

    return res.status(200).json(displayed_games);
  } catch (error) {
    console.error("Chess.com error:", error);

    return res.status(500).json({
      error: error.message,
    });
  }
}
