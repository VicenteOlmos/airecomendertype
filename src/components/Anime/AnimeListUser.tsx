import React, { useEffect, useState } from "react";
import AnimeList from "./AnimeList";
import { getAnimeUserList } from "@/services/AnimeListAPI";

function useAnimeUserList({ username }: { username: string }) {
  const [animes, setAnimes] = useState(null);

  useEffect(() => {
    getAnimeUserList({ username }).then((data) => {
      setAnimes(data);
    });
  }, [username]);
  return { animes };
}

function AnimeListUser({ username }: { username: string }) {
  const { animes } = useAnimeUserList({ username });

  if (animes === null) {
    return <div>Loading...</div>;
  }

  return (
    <AnimeList
      animes={animes}
      ulclassName="grid grid-cols-3"
      liclassName="w-[85%] h-[33vw] pb-8 "
    />
  );
}

export default AnimeListUser;
