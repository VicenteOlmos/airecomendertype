import AnimeList from "./AnimeList";
import { getAnimeList } from "@/services/AnimeListAPI";

async function AnimeListRanking() {
  const animes = await getAnimeList();
  return (
    <AnimeList
      animes={animes}
      ulclassName="grid grid-cols-3"
      liclassName="w-[85%] h-[33vw] pb-8"
    />
  );
}
export default AnimeListRanking;
