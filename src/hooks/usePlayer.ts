import { useCallback, useState } from "react";

import { randomTetromino, TETROMINOS } from "@utils/tetrominos";
import { STAGE_WIDTH } from "@utils/gameHelpers";

export interface IPlayer {
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
    tetromino: TETROMINOS[0].shape,
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
    setPlayer({
      pos: {x: STAGE_WIDTH / 2 - 2, y: 0},
      tetromino: randomTetromino().shape,
      collided: false,
    })
  }, [])

  return { player, updatePlayerPos, resetPlayer };
};