import { getAnimeDetailID } from "@/services/AnimeListAPI";
import { AnimeDetail } from "@/types/AnimeDetail";
import Image from "next/image";
import { useEffect, useReducer, useState } from "react";

export enum InfoState {
  GENERAL = "GENERAL",
  PICTURES = "PICTURES",
  RELATED = "RELATED",
}
interface actionProps {
  type: InfoState;
}
export interface InfoStateProps {
  state: string;
}

const infoStateReducer = (state: InfoStateProps, action: actionProps) => {
  if (action.type === "GENERAL") {
    return { state: "GENERAL" };
  } else if (action.type === "PICTURES") {
    return { state: "PICTURES" };
  } else if (action.type === "RELATED") {
    return { state: "RELATED" };
  }

  return state;
};

export default function useAnimeID({params}: {params: {anime_id: number}}){
  const [anime, setAnime] = useState<AnimeDetail>();
  useEffect(() => {
    async function fetchAnimeDetail() {
      const animeDetail = await getAnimeDetailID({ anime_id: params.anime_id });
      setAnime(animeDetail);
    }
    fetchAnimeDetail();
  }, [params.anime_id]);

  const [infoState, infoStateDispatch] = useReducer(infoStateReducer, {
    state: InfoState.GENERAL,
  });

  const handleClickGeneral = () => {
    infoStateDispatch({ type: InfoState.GENERAL });
  };

  const handleClickPictures = () => {
    infoStateDispatch({ type: InfoState.PICTURES });
  };
  const handleClickRelated = () => {
    infoStateDispatch({ type: InfoState.RELATED });
  };


  return {anime,infoState,handleClickGeneral,handleClickPictures,handleClickRelated}
}