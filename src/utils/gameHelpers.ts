import { IStage } from "interfaces/Stage.interface";

export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
  const arr = Array.from(Array(STAGE_HEIGHT), () => 
    new Array(STAGE_WIDTH).fill({ type: 0, state: 'clear' })
  ) as IStage[][];

  return arr;
}