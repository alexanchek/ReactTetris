import { CSSProperties, FC, memo } from 'react';
import { ICellProps } from './Cell.interface';
import { TETROMINOS } from '@utils/tetrominos';

const Cell: FC<ICellProps> = ({ type }) => {
  const color = TETROMINOS[type as keyof typeof TETROMINOS].color;

  const cellStyle: CSSProperties = {
    width: 'auto',
    background: `rgba(${color}, 0.8)`,
    border: type === 0 ? '0px solid' : '4px solid',
    borderBottomColor: `rgba(${color}, 0.1)`,
    borderRightColor: `rgba(${color}, 1)`,
    borderTopColor: `rgba(${color}, 1)`,
    borderLeftColor: `rgba(${color},  0.3)`,
  };

  return <div style={cellStyle} />;
};

export default memo(Cell);
