import { FC } from "react";
import { IStartButtonProps } from "./StartButton.interface";
import moduleStyles from './StartButton.module.scss';

const StartButton: FC<IStartButtonProps> = ({ callback }) => {
  return (
    <div
      className={moduleStyles.startButton}
      onClick={callback}
    >
      Start game
    </div>
  );
};

export default StartButton;