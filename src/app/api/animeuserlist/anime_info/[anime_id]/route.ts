import { NextRequest } from "next/server";
import { getAnimeInfo } from "@/services/AnimeListAPI";
export async function GET(
  request: NextRequest,
  { params }: { params: { anime_id: number } }
) {
  const anime_id = params.anime_id;
  const animeInfo = await getAnimeInfo({ id:anime_id });
  return new Response(JSON.stringify(animeInfo), { status: 200 });
}
