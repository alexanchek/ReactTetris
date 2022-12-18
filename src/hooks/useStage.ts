import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { createStage } from '@utils/gameHelpers';
import { IPlayer } from '@interfaces/Player.interface';
import { IStage } from '@interfaces/Stage.interface';

export const useStage = ({
  player,
  setPlayer,
}: {
  player: IPlayer;
  setPlayer: Dispatch<SetStateAction<IPlayer>>;
}) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    const updateStage = (prevStage: IStage[][]) => {
      const newStage: IStage[][] = prevStage.map((row) => {
        return row.map((cell) => {
          return cell.state === 'clear' ? { state: 'clear', type: 0 } : cell;
        });
      });

      player.tetromino.forEach((row, y) => {
        row.forEach((type, x) => {
          if (type !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = {
              type,
              state: player.collided ? 'merged' : 'clear',
            };
          }
        });
      });

      return newStage;
    };

    setStage((prev) => updateStage(prev));
  }, [player]);

  return { stage, setStage };
};
