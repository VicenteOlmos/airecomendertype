"use client";
import { motion, AnimatePresence } from "framer-motion";
import AnimeCardImage from "./AnimeCardImage";
import AnimeCardInfo from "./AnimeCardInfo";
import AnimeCardFull from "./AnimeCardFull";
import { AnimeDetail } from "@/types/AnimeDetail";
import useCardState from "@/hooks/useCardState";

interface Props {
  anime: AnimeDetail;
  position: number;
}

export default function AnimeCard({ anime, position }: Props) {
  const {
    cardState,
    handleClickReverse,
    handleClickFull,
    handleCloseFull,
    animationProps,
  } = useCardState();

  return (
    <AnimatePresence mode="wait">
      {cardState === 2 ? (
        
          <AnimeCardFull
            anime={anime}
            isFullSize={cardState === 2}
            onClose={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleCloseFull(e)
            }
            {...animationProps}
          />
        
      ) : (
        <motion.div
          className="w-full h-full"
          initial="front"
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          {...animationProps}
        >
          {cardState === 0 ? (
            <AnimeCardImage
              anime={anime}
              position={position}
              changeSide={handleClickReverse}
              fullSize={handleClickFull}
            />
          ) : (
            <AnimeCardInfo
              anime={anime}
              changeSide={handleClickReverse}
              fullSize={handleClickFull}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
