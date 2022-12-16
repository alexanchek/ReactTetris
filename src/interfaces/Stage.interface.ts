import { TETROMINOS } from "@utils/tetrominos";

export type IStage = {
  type: keyof typeof TETROMINOS | string | number;
  state: 'clear' | 'merged';
}