import { XMLParser } from "fast-xml-parser";

export default async function handler(req, res) {
  try {
    const response = await fetch(process.env.LETTERBOXD_RSS_FEED_URL);

    if (!response.ok) {
      throw new Error(`Letterboxd returned ${response.status}`);
    }

    const xml = await response.text();

    const parser = new XMLParser({
      ignoreAttributes: false,
    });

    const data = parser.parse(xml);

    const movies = data.rss.channel.item.slice(0, 5).map((movie) => ({
      title: movie["letterboxd:filmTitle"],
      link: movie.link,
      watchedDate: movie["letterboxd:watchedDate"],
      rewatch: movie["letterboxd:rewatch"],
      filmYear: movie["letterboxd:filmYear"],
      rating: movie["letterboxd:memberRating"],
      liked: movie["letterboxd:memberLike"],
      description: movie.description.replace(/<[^>]+>/g, "").trim(),
      posterURL: movie.description.match(/src="([^"]+)"/)[1],
    }));

    return res.status(200).json(movies);
  } catch (error) {
    console.error("Letterboxd error:", error);

    return res.status(500).json({
      error: error.message,
    });
  }
}
