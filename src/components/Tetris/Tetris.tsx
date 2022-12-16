import { CSSProperties, FC, useState, KeyboardEvent } from "react";

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
import { createStage } from "@utils/gameHelpers";


const Tetris: FC<ITetrisProps> = () => {

  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const { player, updatePlayerPos, resetPlayer } = usePlayer();
  const { stage, setStage } = useStage();

  console.log('re-render')

  const movePlayer = (dir: -1 | 1) => {
    updatePlayerPos({ x: dir, y: 0 });
  };

  const startGame = () => {
    // Reset evetything
    setStage(createStage());
    resetPlayer();
  };

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false });
  };

  const dropPlayer = () => {
    drop();
  };

  const move = ({ key }: KeyboardEvent) => {
    if (!gameOver) {
      if (key === 'ArrowLeft') {
        movePlayer(-1)
      }

      if (key === 'ArrowRight') {
        movePlayer(1);
      }

      if (key === 'ArrowDown') {
        dropPlayer();
      }

    }
  };

  const wrapperStyle: CSSProperties = {
    background: `url(${bgImage}) #000`,
  };

  return (
    <div
      className={moduleStyles.wrapper}
      style={wrapperStyle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => move(e)}

    >
      <div className={moduleStyles.tetris}>
        <Stage stage={stage} />
        <aside className={moduleStyles.aside}>
          {gameOver
            ? (
              <Display
                gameOver={gameOver}
                text="Game Over"
              />
            ) : (
              <div>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
              </div>
            )}
          <StartButton onClick={startGame} />
        </aside>
      </div>
    </div>
  );
};

export default Tetris;