import { CSSProperties, FC } from "react";

import bgImage from '@assets/bg.png';
import { createStage } from "@utils/gameHelpers";

// Components
import { Stage } from "../Stage";
import { Display } from "../Display";
import { StartButton } from "../StartButton";
import { ITetrisProps } from "./Tetris.interface";

const Tetris: FC<ITetrisProps> = () => {
  const wrapperStyle: CSSProperties = {
    width: '100%',
    height: '100vh',
    background: `url(${bgImage}) #000`,
    backgroundSize: 'cover',
    overflow: 'hidden',
  }

  const asideStyle: CSSProperties = {
    width: '100%',
    maxWidth: '200px',
    display: 'block',
    padding: '0 20px',
  }

  const tetrisStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '40px',
    margin: '0 auto',
    maxWidth: '900px',
  }


  return (
    <div style={wrapperStyle}>
      <div style={tetrisStyle}>
      <Stage stage={createStage()} />
      <aside style={asideStyle}>
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