import { CSSProperties, FC } from "react";

import bgImage from '@assets/bg.png';
import { createStage } from "@utils/gameHelpers";
import moduleStyles from './Tetris.module.scss';

// Components
import { Stage } from "../Stage";
import { Display } from "../Display";
import { StartButton } from "../StartButton";
import { ITetrisProps } from "./Tetris.interface";


const Tetris: FC<ITetrisProps> = () => {
  const wrapperStyle: CSSProperties = {
    background: `url(${bgImage}) #000`,
  }

  return (
    <div className={moduleStyles.wrapper} style={wrapperStyle}>
      <div className={moduleStyles.tetris}>
        <Stage stage={createStage()} />
        <aside className={moduleStyles.aside}>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </div>
    </div>
  );
};

export default Tetris;