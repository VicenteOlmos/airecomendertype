import { useState, useCallback} from 'react';

function getCardAnimation(cardState: number) {
  switch (cardState) {
    case 0:
      return { variants: flipVariants, animate: "front" };
    case 1:
      return { variants: flipVariants, animate: "back" };
    case 2:
      return { variants: cardVariants, animate: "open", exit: "exit" };
    default:
      return {};
  }
}

const flipVariants = {
  front: {
    rotateY: 0,
  },
  back: {
    rotateY: 180,
  },
};

const cardVariants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 0.8 },
  exit: { opacity: 0, scale: 0.8 },
};

function useCardState() {
  // 0: front, 1: back, 2: full
  const [cardState, setCardState] = useState<number>(0);
  const animationProps = getCardAnimation(cardState);

  const handleClickReverse = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setCardState((prevState: number) => {
        if (prevState === 0) {
          return 1;
        } else {
          return 0;
        }
      });
    },
    []
  );

  const handleClickFull = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setCardState(2);
    },
    []
  );

  const handleCloseFull = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setCardState(0);
    },
    []
  );

  return {
    cardState,
    handleClickReverse,
    handleClickFull,
    handleCloseFull,
    animationProps
  };
}


export default useCardState;
