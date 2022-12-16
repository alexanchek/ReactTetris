import { CSSProperties, FC, useState } from "react";

import bgImage from '@assets/bg.png';
import moduleStyles from './Tetris.module.scss';

// Custom hooks
import { usePlayer } from "@hooks/usePlayer";
import { useStage } from "@hooks/useStage";

// Components
import { Stage } from "../Stage";
import { Display } from "../Display";
import { StartButton } from "../StartButton";
import { ITetrisProps } from "./Tetris.interface";


const Tetris: FC<ITetrisProps> = () => {

  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const { player } = usePlayer();
  const { stage, setStage } = useStage();

  console.log('re-render')


  const wrapperStyle: CSSProperties = {
    background: `url(${bgImage}) #000`,
  }

  return (
    <div className={moduleStyles.wrapper} style={wrapperStyle}>
      <div className={moduleStyles.tetris}>
        <Stage stage={stage} />
        <aside className={moduleStyles.aside}>
          {gameOver
            ? (
              <Display gameOver={gameOver} text="Game Over" ></Display>
            ) : (
              <div>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
              </div>
            )}
          <StartButton />
        </aside>
      </div>
    </div>
  );
};

export default Tetris;