import { type AnimeDetail } from "../types/AnimeDetail";
import { DataAnimeRanking } from "@/types/AnimeRanking";

export async function getAnimeList() {
  const response = await fetch(
    "https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=12",
    {
      method: "GET",
      headers: {
        "X-MAL-CLIENT-ID": "8cf4855e5605f543eceb775efd52d8a3",
      },
    }
  );
  const animes = await response.json();

  return await Promise.all(
    animes.data.map(async (anime: DataAnimeRanking) => {
      const animeInfo = await getAnimeInfo({ id: anime.node.id });
      return animeInfo;
    })
  );
}
export async function getAnimeInfo({ id }: { id: number }) {
  return fetch(
    `https://api.myanimelist.net/v2/anime/${id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`,
    {
      method: "GET",
      headers: {
        "X-MAL-CLIENT-ID": "8cf4855e5605f543eceb775efd52d8a3",
        Origin: "*/*",
      },
    }
  )
    .then((response) => response.json() as Promise<AnimeDetail>)
    .then((animeDetail) => {
      return animeDetail;
    });
}

export async function getAnimeUserList({ username }: { username: string }) {
  const url = `/api/animeuserlist/${username}`;
  const response = await fetch(url, {
    method: "GET",
  });
  return await response.json();
}

export async function getALAnimeUserList({ username }: { username: string }) {
  const url = `https://api.myanimelist.net/v2/users/${username}/animelist?sort=list_score`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-MAL-CLIENT-ID": "8cf4855e5605f543eceb775efd52d8a3",
      Origin: "*/*",
    },
  });
  const animes = await response.json();

  const animeData = await Promise.all(
    animes.data.map(async (anime: DataAnimeRanking) => {
      const animeInfo = await getAnimeInfo({ id: anime.node.id });
      return animeInfo;
    })
  );

  return animeData;
}

export async function getAnimeDetailID({ anime_id }: { anime_id: number }) {
  const url = `/api/animeuserlist/anime_info/${anime_id}`;
  const response = await fetch(url, {
    method: "GET",
  });
  
  return await response.json();
}
