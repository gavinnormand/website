export default async function handler(req, res) {
  try {
    const username = process.env.LASTFM_USERNAME;
    const apiKey = process.env.LASTFM_API_KEY;

    if (!username || !apiKey) {
      return res.status(500).json({ error: "Missing Last.fm credentials" });
    }

    const period = req.query.period;

    const url = `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&period=${period}&user=${username}&api_key=${apiKey}&format=json&limit=5`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch tracks");
    }

    const data = await response.json();
    const tracks = data.toptracks.track;

    const songs = await Promise.all(
      tracks.map(async (track) => {
        const infoUrl = track.mbid
          ? `https://ws.audioscrobbler.com/2.0/?method=track.getinfo&mbid=${track.mbid}&api_key=${apiKey}&format=json`
          : `https://ws.audioscrobbler.com/2.0/?method=track.getinfo&artist=${encodeURIComponent(track.artist.name)}&track=${encodeURIComponent(track.name)}&api_key=${apiKey}&format=json`;

        const infoResponse = await fetch(infoUrl);

        if (!infoResponse.ok) {
          throw new Error(`Failed to get info for ${track.name}`);
        }

        const infoData = await infoResponse.json();
        const info = infoData.track;

        return {
          title: info.name,
          artist: info.artist?.name || track.artist.name,
          album: info.album?.title || "",
          albumCoverURL:
            info.album?.image?.[3]?.["#text"] ||
            track.image?.[3]?.["#text"] ||
            "",
          linkURL: info.url || track.url,
        };
      }),
    );

    res.status(200).json(songs);
  } catch (error) {
    console.error("Error fetching recent tracks:", error);
    res.status(500).json({ error: "Failed to fetch recent songs" });
  }
}
