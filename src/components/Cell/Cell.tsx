import { CSSProperties, FC } from 'react';
import { ICellProps } from './Cell.interface';
import { TETROMINOS } from '@utils/tetrominos';

const Cell: FC<ICellProps> = ({ type }) => {
  const color = TETROMINOS['L'].color;

  const style: CSSProperties = {
    width: 'auto',
    background: `rgba(${color}, 0.8)`,
    border: type === 0 ? '0px solid' : '4px solid',
    borderBottomColor: `rgba(${color}, 0.1)`,
    borderRightColor: `rgba(${color}, 1)`,
    borderTopColor: `rgba(${color}, 1)`,
    borderLeftColor: `rgba(${color},  0.3)`,
  }

  return (
    <div style={style}>
    </div>
  );
};

export default Cell;