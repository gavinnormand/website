import getAccessToken from "./getAccessToken.js";

export default async function handler(req, res) {
  try {
    const accessToken = await getAccessToken();

    const url = new URL("https://api.spotify.com/v1/me/player/recently-played");

    url.searchParams.set("limit", "5");

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const error = await response.text();

      console.error("Spotify API error:", response.status, error);

      throw new Error("Failed to fetch Spotify tracks");
    }

    const data = await response.json();

    const songs = data.items.map((item) => {
      const track = item.track;

      return {
        title: track.name,
        artist: track.artists.map((artist) => artist.name).join(", "),
        album: track.album.name,
        albumCoverURL: track.album.images[0]?.url || "",
        linkURL: track.external_urls.spotify,
      };
    });

    res.status(200).json(songs);
  } catch (error) {
    console.error("Error fetching recent songs:", error);
    res.status(500).json({ error: "Failed to fetch recent songs" });
  }
}
