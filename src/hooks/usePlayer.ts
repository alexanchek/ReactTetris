import { useCallback, useState } from "react";

import { randomTetromino } from "@utils/tetrominos";

interface IPlayer {
  pos: {
    x: number;
    y: number;
  };
  tetromino: (string | number)[][];
  collided: boolean;
}

export const usePlayer = () => {
  const [player, setPlayer] = useState<IPlayer>({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false,
  });

  const updatePlayerPos = ({
    x, y, collided
  }: { x: number, y: number, collided: boolean }) => {
    setPlayer({
      ...player,
      pos: {x: player.pos.x += x, y: player.pos.y += y},
      collided,
    })
  };

  const resetPlayer = useCallback(() => {
    
  }, [])

  return { player, updatePlayerPos, resetPlayer };
};