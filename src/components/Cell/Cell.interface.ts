import { TETROMINOS } from "@utils/tetrominos";

export interface ICellProps {
  type: keyof typeof TETROMINOS;
}