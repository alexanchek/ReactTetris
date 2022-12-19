import { IShapeTetromino } from '@interfaces/Tetromino.interface';

export interface IPlayer {
  pos: {
    x: number;
    y: number;
  };
  tetromino: IShapeTetromino;
  collided?: boolean;
}
