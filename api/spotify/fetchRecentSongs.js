export default async function handler(req, res) {
  try {
    const username = process.env.LASTFM_USERNAME;
    const apiKey = process.env.LASTFM_API_KEY;

    if (!username || !apiKey) {
      return res.status(500).json({ error: "Missing Last.fm credentials" });
    }

    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=5`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch tracks");
    }

    const data = await response.json();

    const songs = data.recenttracks.track.map((track) => ({
      title: track.name,
      artist: track.artist["#text"],
      album: track.album["#text"],
      albumCoverURL: track.image?.[3]?.["#text"] || "",
      linkURL: track.url,
    }));

    res.status(200).json(songs);
  } catch (error) {
    console.error("Error fetching recent tracks:", error);
    res.status(500).json({ error: "Failed to fetch recent songs" });
  }
}
