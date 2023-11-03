import { getALAnimeUserList} from "@/services/AnimeListAPI";
import { NextRequest } from "next/server";
export async function GET(request : NextRequest, { params } : { params: { username: string } }) {
  const username = params.username;
  const animeList = await getALAnimeUserList({ username });
  return new Response(JSON.stringify(animeList), { status: 200 });
}

/*403
{
    "message": "Access to this list has been restricted by the owner.",
    "error": "not_permitted"
  }

*/

