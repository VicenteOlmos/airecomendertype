import { type MainPicture } from "./Anime";

export interface AnimeDetail {
  id: number;
  title: string;
  main_picture: MainPicture;
  synopsis: string;
  rank: number;
  genres: Genre[];
  mean: numing;
  start_season: StartSeason;
  media_type: string;
  popularity: number;
  nsfw: string;
  ber;
  start_date: Date;
  end_date: Date;
  num_episodes: number;
  pictures: Picture[];
  recommendations: Recommendation[];
  status: str;
  alternative_titles: AlternativeTitles;
  average_episode_duration: number;
  num_list_users: number;
  num_scoring_users: number;
  related_anime: RelatedAnime[];
}

interface Genre {
  id: number;
  name: string;
}

interface Picture {
  medium: string;
  large: string;
}

interface Recommendation {
  node: Node;
  num_recommendations: number;
}
interface Node {
  id: number;
  title: string;
  main_picture: Picture;
}

interface StartSeason {
  year: number;
  season: string;
}

export interface AlternativeTitles {
  synonyms: string[];
  en: string;
  ja: string;
}

export interface RelatedAnime {
  node: Node;
  relation_type: string;
  relation_type_formatted: string;
}
