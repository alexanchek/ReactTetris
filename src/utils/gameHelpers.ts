import { IPlayer } from '@interfaces/Player.interface';
import { IStage } from '@interfaces/Stage.interface';
import { TETROMINOS } from './tetrominos';

export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
  const arr = Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill({ type: 0, state: 'clear' })
  ) as IStage[][];

  return arr;
};

interface ICheckCollisionProps {
  player: IPlayer;
  stage: IStage[][];
  coordinates: {
    x: number;
    y: number;
  };
}

export const checkCollision = ({
  player,
  stage,
  coordinates: { x: moveX, y: moveY },
}: ICheckCollisionProps) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      if (player.tetromino[y][x] !== 0) {
        if (
          !stage[(y + player.pos.y + moveY) as keyof typeof TETROMINOS & '0'] ||
          !stage[(y + player.pos.y + moveY) as keyof typeof TETROMINOS & '0'][
            x + player.pos.x + moveX
          ] ||
          stage[(y + player.pos.y + moveY) as keyof typeof TETROMINOS & '0'][
            x + player.pos.x + moveX
          ].state !== 'clear'
        ) {
          return true;
        }
      }
    }
  }
};
