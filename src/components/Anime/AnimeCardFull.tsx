import { AnimeDetail } from "@/types/AnimeDetail";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";

interface Props {
  anime: AnimeDetail;
  isFullSize: boolean;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const cardVariants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 0.8 },
  exit: { opacity: 0, scale: 0.8 },
};

function AnimeCardFull({ anime, isFullSize, onClose }: Props) {
  return (
    <>
      <motion.div
        initial="closed"
        animate={isFullSize ? "open" : "closed"}
        exit="exit"
        variants={cardVariants}
        transition={{ duration: 0.2 }}
        className="absolute m-auto z-10 w-[60%] h-[70%] inset-x-0 flex flex-col"
      >
        <Card className="w-full h-[85%]">
          <section className="grid grid-cols-3 grid-rows-6">
            <CardHeader className="col-span-2 row-span-1 flex-col items-center">
              <h4 className="font-bold text-large text-center">
                {anime.title}
              </h4>
              <p className="text-tiny uppercase font-bold relative">
                N {anime.rank}
              </p>
            </CardHeader>

            <CardBody className="col-span-1 row-span-6 flex justify-center items-center relative">
              <img
              
                alt={anime.title}
                src={anime.main_picture.large}
                className="rounded-2xl object-fill w-full h-full"
              />
            </CardBody>

            <div className="col-span-2 row-span-4 pl-7">
              <p className="text-tiny uppercase text-center">
                {anime.synopsis}
              </p>
              <div className="grid grid-cols-2 pt-7">
                <div>
                  <h4 className="font-bold text-center">Genres</h4>
                  {anime.genres.map((genre) => (
                    <p className="text-center" key={genre.id}>
                      {genre.name}
                    </p>
                  ))}
                </div>
                <div>
                  <h4 className="font-bold text-center">Recommendations</h4>
                  {anime.recommendations.map((recommendation) => (
                    <p className="text-center" key={recommendation.node.id}>
                      {recommendation.node.title}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2"
          >
            X
          </button>
        </Card>
      </motion.div>
    </>
  );
}

export default AnimeCardFull;
