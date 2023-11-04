import { AnimeDetail } from "@/types/AnimeDetail";
import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

interface Props {
  anime: AnimeDetail;
}

export default function AnimeIDState({ anime }: Props): React.ReactNode {
  const styles ={
    backgroundColor:'#7FACC7',  
    color:'black'
  }
  return (
    <>
      <Accordion selectionMode="multiple" variant="splitted" className={`pt-5`} >
        <AccordionItem key="1"title="General" style={styles}>
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
        </AccordionItem>
        <AccordionItem key="2" title="Pictures" style={styles}>
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
        </AccordionItem>
        <AccordionItem key="3" title="Related Anime" style={styles}>
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
        </AccordionItem>
      </Accordion>
    </>
  );
}
