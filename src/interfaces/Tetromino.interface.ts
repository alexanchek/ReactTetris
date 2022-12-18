import { TETROMINOS } from '@utils/tetrominos';

export type ITetromino = keyof typeof TETROMINOS & { shape: IShapeTetromino };

export type IShapeTetromino = (string | number)[][] | number[][] | string[][];
