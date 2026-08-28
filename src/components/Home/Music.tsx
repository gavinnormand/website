import { useEffect, useState, type SetStateAction } from "react";
import type { SongType } from "../../types/SongType";
import Dropdown from "./Dropdown";
import SongList from "./SongList";

const fetchSongs = async (method: string, period: string) => {
  try {
    const params = new URLSearchParams({ period });
    const res =
      method == "recent"
        ? await fetch(`/api/fetchRecentSongs`)
        : await fetch(`/api/fetchTopSongs?${params}`);
    if (!res.ok) throw new Error("Failed to fetch tracks");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching recent songs:", error);
    throw new Error("Failed to fetch recent songs", { cause: error });
  }
};

function Music() {
  const methodOptions = {
    recent: "recent",
    top: "top",
  };
  const periodOptions = {
    "7day": "1 week",
    "1month": "1 month",
    "3month": "3 month",
    "6month": "6 month",
    "12month": "1 year",
    overall: "all-time",
  };
  const [songs, setSongs] = useState<SongType[]>([]);
  const [loading, setLoading] = useState(true);
  const [method, setMethod] = useState<string>("recent");
  const [period, setPeriod] = useState<string>("7day");

  useEffect(() => {
    fetchSongs(method, period)
      .then((data: SetStateAction<SongType[]>) => setSongs(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [method, period]);

  return (
    <div className="text-secondary-text flex flex-col gap-2 text-sm">
      <div className="flex flex-row justify-between">
        <p>{method == "recent" ? "recent" : "top"} songs</p>
        <div className="flex flex-row gap-2">
          {method != "recent" && (
            <Dropdown
              selectedOption={period}
              options={periodOptions}
              onSelect={setPeriod}
            />
          )}
          <Dropdown
            selectedOption={method}
            options={methodOptions}
            onSelect={setMethod}
          />
        </div>
      </div>
      <SongList songs={songs} />
      <p>{loading}</p>
    </div>
  );
}

export default Music;
