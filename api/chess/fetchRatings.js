export default async function handler(req, res) {
  try {
    const response = await fetch(process.env.CHESS_STATS_URL);

    if (!response.ok) {
      throw new Error(`Chess.com returned ${response.status}`);
    }

    const data = await response.json();

    const stats = [
      {
        mode: "bullet",
        rating: data.chess_bullet.last.rating,
        lastPlayed: data.chess_bullet.last.date,
      },
      {
        mode: "blitz",
        rating: data.chess_blitz.last.rating,
        lastPlayed: data.chess_blitz.last.date,
      },
      {
        mode: "rapid",
        rating: data.chess_rapid.last.rating,
        lastPlayed: data.chess_rapid.last.date,
      },
    ];

    return res.status(200).json(stats);
  } catch (error) {
    console.error("Chess.com error:", error);

    return res.status(500).json({
      error: error.message,
    });
  }
}
