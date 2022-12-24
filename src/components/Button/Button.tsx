import { FC } from 'react';
import { IButtonProps } from './Button.interface';
import moduleStyles from './Button.module.scss';

const StartButton: FC<IButtonProps> = ({ callback, title }) => {
  return (
    <div className={moduleStyles.startButton} onClick={callback}>
      {title}
    </div>
  );
};

export default StartButton;
