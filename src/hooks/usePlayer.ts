// React
import { useCallback, useState } from 'react';

// Utils
import { randomTetromino, TETROMINOS } from '@utils/tetrominos';
import { checkCollision, STAGE_WIDTH } from '@utils/gameHelpers';

// Interfaces
import { IPlayer } from '@interfaces/Player.interface';
import { IStage } from '@interfaces/Stage.interface';
import { IShapeTetromino } from '@interfaces/Tetromino.interface';

export const usePlayer = () => {
  const [player, setPlayer] = useState<IPlayer>({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  const rotate = ({ matrix, dir }: { matrix: IShapeTetromino; dir: -1 | 1 }) => {
    const rotatedTetro = matrix.map((_, index) => matrix.map((col) => col[index as number]));

    if (dir > 0) {
      return rotatedTetro.map((row) => row.reverse());
    }

    return rotatedTetro.reverse();
  };

  const playerRotate = ({ stage, dir }: { stage: IStage[][]; dir: -1 | 1 }) => {
    const clonedPlayer: IPlayer = JSON.parse(JSON.stringify(player));

    clonedPlayer.tetromino = rotate({ matrix: clonedPlayer.tetromino, dir });

    const pos = clonedPlayer.pos.x;
    let offset = 1;

    while (checkCollision({ player: clonedPlayer, stage, coordinates: { x: 0, y: 0 } })) {
      clonedPlayer.pos.x += offset;

      offset = -(offset + (offset > 0 ? 1 : -1));

      if (offset > clonedPlayer.tetromino[0].length) {
        rotate({ dir: -dir as -1 | 1, matrix: clonedPlayer.tetromino });
        clonedPlayer.pos.x = pos;
        return;
      }
    }

    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({ x, y, collided }: { x: number; y: number; collided: boolean }) => {
    console.log(collided);
    setPlayer({
      ...player,
      pos: { x: (player.pos.x += x), y: (player.pos.y += y) },
      collided,
    });
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return {
    updatePlayerPos,
    resetPlayer,
    playerRotate,
    player,
  };
};
