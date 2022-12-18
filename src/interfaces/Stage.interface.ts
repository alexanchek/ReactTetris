import { ITetromino } from './Tetromino.interface';

export type IStage = {
  type: ITetromino | string | number;
  state: 'clear' | 'merged';
};
