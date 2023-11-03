"use client";
import AnimeIDState from "@/components/Anime/AnimeIDState";
import useAnimeID from "@/hooks/useAnimeID";
import  JPFlag  from "@/static/JP-Flag.svg";
import { Card, CardBody, Chip, divider } from "@nextui-org/react";
import Image from "next/image";
export default function Anime_ID({ params }: { params: { anime_id: number } }) {
  const {
    anime,
    infoState,
    handleClickGeneral,
    handleClickPictures,
    handleClickRelated,
  } = useAnimeID({ params });

  return (
    <>
      {anime && (
        <div className="container mx-auto">
          <section className="h-20 w-full flex flex-row justify-between">
            <div className="justify-start">
              <h1>{anime.title}</h1>
              <div>
                <p>status:{anime.status}</p>
                <p>
                  start:{anime.start_season.season} {anime.start_season.year}
                </p>
              </div>
            </div>
            <div className="justify-end">
              <h1> 🇯🇵 {anime.alternative_titles.ja}</h1>
            </div>
          </section>
          <div className="flex flex-row">
            <section className="grid w-1/3 relative justify-start">
              <img alt={anime.title} src={anime.main_picture.large} />
            </section>
            <section className="w-2/3">
              <div className="flex flex-row justify-between pb-10 text-center">
                <div className="flex-col">
                  <Chip
                    radius="md"
                    variant="shadow"
                    color="danger"
                    className="h-full min-w-[120px]"
                  >
                    <p>Score</p>
                    <h1>{anime.mean}</h1>
                    <p>
                      {anime.num_scoring_users.toLocaleString("es-CL")} users
                    </p>
                  </Chip>
                </div>
                <div className="flex-col">
                  <Chip
                    radius="md"
                    variant="shadow"
                    color="primary"
                    className="h-full min-w-[120px]"
                  >
                    <p>Rank</p>
                    <h1>{anime.rank}</h1>
                  </Chip>
                </div>
                <div className="flex-col">
                  <Chip
                    radius="md"
                    variant="shadow"
                    color="success"
                    className="h-full min-w-[120px]"
                  >
                    <p>Popularity</p>
                    <h1>{anime.popularity}</h1>
                  </Chip>
                </div>
                <div className="flex-col">
                  <Chip
                    radius="md"
                    variant="shadow"
                    color="secondary"
                    className="h-full min-w-[120px]"
                  >
                    <p>Members</p>
                    <h1>{anime.num_list_users.toLocaleString("es-CL")}</h1>
                  </Chip>
                </div>
              </div>
              <p>{anime.synopsis}</p>
              <h4 className="font-bold text-center">Genres</h4>
              <div className="flex flex-row gap-3 justify-around">
                {anime.genres.map((genre) => (
                  <Chip
                    key={genre.id}
                    radius="md"
                    variant="shadow"
                    color="warning"
                    className="h-full text-center text-lg"
                  >
                    <p>{genre.name}</p>
                  </Chip>
                ))}
              </div>
            </section>
          </div>
          <section className="h-20 w-full flex flex-row gap-4">
            <button onClick={handleClickGeneral}>General</button>
            <button onClick={handleClickPictures}>Pictures</button>
            <button onClick={handleClickRelated}>Related Anime</button>
          </section>
          <AnimeIDState status={infoState.state} anime={anime} />
        </div>
      )}
    </>
  );
}
