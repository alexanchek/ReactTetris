import { CSSProperties, useState, KeyboardEvent } from 'react';

import bgImage from '@assets/bg.png';
import moduleStyles from './Tetris.module.scss';

// Custom hooks
import { usePlayer } from '@hooks/usePlayer';
import { useStage } from '@hooks/useStage';
import { useInterval } from '@hooks/useInterval';

// Components
import { Stage } from '../Stage';
import { Display } from '../Display';
import { StartButton } from '../StartButton';
import { checkCollision, createStage } from '@utils/gameHelpers';

const Tetris = () => {
  const [dropTime, setDropTime] = useState<null | number>(null);
  const [gameOver, setGameOver] = useState(false);

  const { player, updatePlayerPos, resetPlayer, rotate, playerRotate } = usePlayer();
  const { stage, setStage } = useStage({ player, resetPlayer });

  console.log('re-render');

  const movePlayer = (dir: -1 | 1) => {
    if (!checkCollision({ player, stage, coordinates: { x: dir, y: 0 } })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    // Reset evetything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
  };

  const drop = () => {
    if (!checkCollision({ player, stage, coordinates: { x: 0, y: 1 } })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game over
      if (player.pos.y < 1) {
        console.log('GAME OVER');
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ key }: KeyboardEvent) => {
    if (!gameOver) {
      if (key === 'ArrowDown') {
        setDropTime(1000);
      }
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const move = ({ key }: KeyboardEvent) => {
    if (!gameOver) {
      if (key === 'ArrowLeft') {
        movePlayer(-1);
      }

      if (key === 'ArrowRight') {
        movePlayer(1);
      }

      if (key === 'ArrowDown') {
        dropPlayer();
      }

      if (key === 'ArrowUp') {
        playerRotate({ stage, dir: 1 });
      }
    }
  };

  const wrapperStyle: CSSProperties = {
    background: `url(${bgImage}) #000`,
  };

  useInterval({
    callback: () => drop(),
    delay: dropTime,
  });

  return (
    <div
      className={moduleStyles.wrapper}
      style={wrapperStyle}
      role='button'
      tabIndex={0}
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
    >
      <div className={moduleStyles.tetris}>
        <Stage stage={stage} />
        <aside className={moduleStyles.aside}>
          {gameOver ? (
            <Display gameOver={gameOver} text='Game Over' />
          ) : (
            <div>
              <Display text='Score' />
              <Display text='Rows' />
              <Display text='Level' />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </div>
    </div>
  );
};

export default Tetris;
