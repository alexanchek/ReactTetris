import { useEffect, useState } from 'react';
import { createStage } from '@utils/gameHelpers';
import { IPlayer } from '@interfaces/Player.interface';
import { IStage } from '@interfaces/Stage.interface';

export const useStage = ({ player, resetPlayer }: { player: IPlayer; resetPlayer: () => void }) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);

    const sweepRows = (newStage: IStage[][]): IStage[][] => {
      const sweepedStage = newStage.reduce<IStage[][]>((ack, row) => {
        if (row.findIndex((cell) => cell.type === 0) === -1) {
          setRowsCleared((prev) => prev + 1);
          ack.unshift(new Array(newStage[0].length).fill({ type: 0, state: 'clear' }));
          return ack;
        }
        ack.push(row);
        return ack;
      }, []);

      return sweepedStage;
    };

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

      if (player.collided) {
        resetPlayer();
        console.log(sweepRows(newStage));
        return sweepRows(newStage);
      }

      return newStage;
    };

    setStage((prev) => updateStage(prev));
  }, [player, resetPlayer]);

  return { stage, setStage, rowsCleared };
};
