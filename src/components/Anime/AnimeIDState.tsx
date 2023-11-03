import { InfoState } from "@/hooks/useAnimeID";
import { AnimeDetail } from "@/types/AnimeDetail";

interface Props {
    status:string
    anime:AnimeDetail
}

export default function AnimeIDState({status,anime}:Props){
    if (status === "GENERAL") {
        return (
          <div className="flex flex-row gap-4">
            <div className="justify-start flex-col">
              <p>Type:</p>
              <p>Episodes:</p>
              <p>NSFW:</p>
            </div>
            <div className="justify-end flex-col">
              <p>{anime.media_type.toLocaleUpperCase()}</p>
              <p>
                {anime.num_episodes} episodes of{" "}
                {Math.floor(anime.average_episode_duration / 60)} min
              </p>
              <p>{anime.nsfw}</p>
            </div>
          </div>
        );
      } else if (status === "PICTURES") {
        return (
          <div className="flex flex-row justify-center flex-wrap gap-4">
            {anime.pictures.map((picture) => (
              <img
                key={picture.large}
                className="w-[300px] h-[500px] object-contain "
                alt={anime.title}
                src={picture.large}
              />
            ))}
          </div>
        );
      } else if (status === "RELATED") {
        return (
          <div className="flex flex-row justify-center flex-wrap gap-4">
            {anime.related_anime.map((related) => (
              <img
                className="w-[300px] h-[500px] object-contain"
                key={related.node.main_picture.large}
                src={related.node.main_picture.large}
                alt={related.node.main_picture.medium}
              />
            ))}
          </div>
        );
      }
}