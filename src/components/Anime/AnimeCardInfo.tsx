import { AnimeDetail } from "@/types/AnimeDetail";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { type } from "os";

interface Props {
  anime: AnimeDetail;
  changeSide: (event: React.MouseEvent<HTMLButtonElement>) => void;
  fullSize: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function AnimeCardInfo({ anime, changeSide, fullSize }: Props) {
  return (
    <Card className="flex flex-col w-full h-full rotate-y-180">
      <CardHeader className="pt-2 px-4 flex-col">
        <h4 className="font-bold text-large text-center">{anime.title}</h4>
      </CardHeader>
      <CardBody className="flex-grow relative w-full">
        <p className="text-tiny uppercase">{anime.synopsis}</p>
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

export default AnimeCardInfo;
