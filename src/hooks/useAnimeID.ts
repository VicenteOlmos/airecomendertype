import { getAnimeDetailID } from "@/services/AnimeListAPI";
import { AnimeDetail } from "@/types/AnimeDetail";
import { useEffect, useReducer, useState } from "react";

export default function useAnimeID({
  params,
}: {
  params: { anime_id: number };
}) {
  const [anime, setAnime] = useState<AnimeDetail>();
  useEffect(() => {
    async function fetchAnimeDetail() {
      const animeDetail = await getAnimeDetailID({ anime_id: params.anime_id });
      setAnime(animeDetail);
    }
    fetchAnimeDetail();
  }, [params.anime_id]);

  return { anime };
}
