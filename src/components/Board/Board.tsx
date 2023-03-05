import { FC } from 'react';
import Cell from '../Cell/Cell';
import styles from './Board.module.scss';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

const Board: FC = () => {
  const table = useSelector((state: RootState) => state.board.items);
  const isStart = useSelector((state: RootState) => state.board.isStart);

  return (
    <div>
      {isStart === true ? (
        <div className={styles.board}>
          {table.length > 1 ? table.map((e, i) => <Cell key={i} value={e} index={i} />) : ''}
        </div>
      ) : (
        <div className={styles.board}>
          {Array(16 * 16)
            .fill(10)
            .map((e, i) => (
              <Cell key={i} value={e} index={i} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Board;
