import { AnimeDetail } from "@/types/AnimeDetail";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";

interface Props {
  anime: AnimeDetail;
  position: number;
  changeSide: (event: React.MouseEvent<HTMLButtonElement>) => void;
  fullSize: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function AnimeCardImage({ anime, position, changeSide, fullSize }: Props) {
  return (
    <Card className="flex flex-col w-full h-full bg-slate-200">
      <CardHeader className="pt-2 px-4 flex-col ">
        <h4 className="font-bold text-large text-center">{anime.title}</h4>
      </CardHeader>
      <CardBody className="flex-grow relative w-full">
        <p className="text-tiny uppercase font-bold relative">
          N {position + 1}
        </p>
        <div className="w-full h-full relative">
          <Image
            alt={anime.title}
            src={anime.main_picture.large}
            quality={100}
            sizes="100%"
            fill={true}
            className="rounded-xl"
            priority
          />
        </div>
      </CardBody>
      <CardFooter className="grid grid-cols-2">
        <button
          className="relative inset-x-0 bottom-0 pb-2"
          onClick={(e) =>changeSide(e)}
        >
          Mostrar informacion
        </button>
          <button className="relative inset-x-5 bottom-0 pb-2" onClick={(e) =>fullSize(e)}>
            Mostrar Full
          </button>
        </CardFooter>
    </Card>
  );
}

export default AnimeCardImage;
