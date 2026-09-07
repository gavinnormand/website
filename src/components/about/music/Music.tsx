import { useEffect, useState, type SetStateAction } from "react";
import type { SongType } from "../../../types/SongType";
import Dropdown from "../Dropdown";
import { SpinnerCircularFixed } from "spinners-react";
import SongList from "./SongList";

const fetchSongs = async (method: string, range: string) => {
  try {
    const params = new URLSearchParams({ range });
    const res =
      method == "recent"
        ? await fetch(`/api/spotify/fetchRecentSongs`)
        : await fetch(`/api/spotify/fetchTopSongs?${params}`);
    if (!res.ok) throw new Error("Failed to fetch tracks");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching songs:", error);
    throw new Error("Failed to fetch songs", { cause: error });
  }
};

function Music() {
  const methodOptions = {
    recent: "recent",
    top: "top",
  };
  const rangeOptions = {
    short_term: "1 month",
    medium_term: "6 months",
    long_term: "1 year",
  };
  const [songs, setSongs] = useState<SongType[]>([]);
  const [loading, setLoading] = useState(true);
  const [method, setMethod] = useState<string>("recent");
  const [range, setRange] = useState<string>("short_term");

  useEffect(() => {
    fetchSongs(method, range)
      .then((data: SetStateAction<SongType[]>) => setSongs(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [method, range]);

  return (
    <div className="text-secondary-text flex flex-col gap-3 text-sm">
      <div className="flex flex-row justify-between font-mono">
        <p>{method == "recent" ? "recent" : "top"} songs</p>
        <div className="flex flex-row gap-2">
          {method != "recent" && (
            <Dropdown
              selectedOption={range}
              options={rangeOptions}
              onSelect={(string) => {
                setLoading(true);
                setRange(string);
              }}
            />
          )}
          <Dropdown
            selectedOption={method}
            options={methodOptions}
            onSelect={(string) => {
              setLoading(true);
              setMethod(string);
            }}
          />
        </div>
      </div>
      {loading ? (
        <SpinnerCircularFixed
          size={50}
          thickness={100}
          speed={100}
          color="#5fad78"
          secondaryColor="rgba(0, 0, 0, 0.44)"
          className="mx-auto py-8"
        />
      ) : (
        <SongList songs={songs} />
      )}
    </div>
  );
}

export default Music;
