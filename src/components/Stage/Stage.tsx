import { CSSProperties, FC } from 'react';
import { Cell } from '../Cell';
import { IStageProps } from './Stage.interface';

const Stage: FC<IStageProps> = ({ stage }) => {
  const width = stage[0].length;
  const height = stage.length;
  

  const tetrisStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '40px',
    margin: '0 auto',
    maxWidth: '900px',
  }

  const stageStyle: CSSProperties = {
    display: 'grid',
    gridTemplateRows: `repeat(${height}, calc(25vw/${width}))`,
    gridTemplateColumns: `repeat(${width}, 1fr)`,
    gap: '1px',
    border: '2px solid #333',
    width: '100%',
    maxWidth: '25vw',
    background: '#111',
  }

  return (
      <div style={stageStyle}>
        {stage.map(row => {
          return (
            row.map((cell, x) => {
              return (
                <Cell key={x} type={'L'} />
              )
            })
          )
        })}
      </div>
  );
};

export default Stage;