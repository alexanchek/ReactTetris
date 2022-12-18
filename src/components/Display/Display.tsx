import { CSSProperties, FC } from 'react';
import { IDisplayProps } from './Display.interface';
import moduleStyles from './Display.module.scss';

const Display: FC<IDisplayProps> = ({ gameOver, text }) => {
  const style: CSSProperties = {
    color: `${gameOver ? 'red' : '#999'}`,
  };

  return (
    <div style={style} className={moduleStyles.display}>
      {text}
    </div>
  );
};

export default Display;
