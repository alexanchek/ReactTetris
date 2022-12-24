import { CSSProperties, FC } from 'react';
import { Cell } from '../Cell';
import { IStageProps } from './Stage.interface';
import moduleStyles from './Stage.module.scss';

const Stage: FC<IStageProps> = ({ stage, pause }) => {
  const width = stage[0].length;
  const height = stage.length;

  const stageStyle: CSSProperties = {
    gridTemplateRows: `repeat(${height}, calc(25vw/${width}))`,
    gridTemplateColumns: `repeat(${width}, 1fr)`,
  };

  return (
    <div style={stageStyle} className={moduleStyles.stage}>
      {stage.map((row) => {
        return row.map((cell, x) => {
          return <Cell key={x} type={cell.type} />;
        });
      })}
      {pause && (
        <>
          <div className={moduleStyles.pauseBlock}>PAUSE</div>
          <div className={moduleStyles.overlay}></div>
        </>
      )}
    </div>
  );
};

export default Stage;
