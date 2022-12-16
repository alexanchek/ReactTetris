import { TETROMINOS } from "@utils/tetrominos";

export type IStage = {
  value: keyof typeof TETROMINOS;
  state: 'clear';
}