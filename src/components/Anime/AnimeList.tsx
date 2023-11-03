import { useState } from "react";
import AnimeCard from "./AnimeCard";
import { type AnimeDetail } from "@/types/AnimeDetail";
import Link from "next/link";

interface Props {
  animes: AnimeDetail[];
  ulclassName: string;
  liclassName: string;
}

export default function AnimeList({ animes, ulclassName, liclassName }: Props) {
  return (
    <ul className={ulclassName}>
      {animes.map((anime, index) => (
        <li key={anime.id} className={liclassName}>
          <AnimeCard anime={anime} position={index} />
          <Link href={`/anime/${anime.id}`}>View Details</Link>
        </li>
      ))}
    </ul>
  );
}
