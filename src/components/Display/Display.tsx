import { FC } from 'react';
import { IDisplayProps } from './Display.interface';

const Display: FC<IDisplayProps> = ({ gameOver, text }) => {
  return (
    <div>
      {text}
    </div>
  );
};

export default Display;