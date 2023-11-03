import { type MainPicture } from "./Anime";

export interface AnimeRanking {
  data?: DataAnimeRanking[] | null;
  paging: Paging;
}
export interface DataAnimeRanking {
  node: Node;
  ranking: Ranking;
}
export interface Node {
  id: number;
  title: string;
  main_picture: MainPicture;
}

export interface Ranking {
  rank: number;
}
export interface Paging {
  next: string;
}



