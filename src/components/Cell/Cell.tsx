import { FC, useState, useCallback, useEffect } from 'react';
import styles from './Cell.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { clear, gameOver, onAddCell, onStartGame } from '../../redux/slices/boardSlice';
import { onChangeFlags, restartFlag } from '../../redux/slices/timerSlice';
import { gameOverButton, onChangeButton } from '../../redux/slices/buttonSlice';

interface CellProps {
  value: number;
  index: number;
}

const defineCell = (value: number): string | undefined => {
  if (value === -1) return styles.bomb;
  if (value === 0) return styles.zero;
  if (value === 1) return styles.one;
  if (value === 2) return styles.two;
  if (value === 3) return styles.three;
  if (value === 4) return styles.four;
};

const Cell: FC<CellProps> = ({ value, index }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState<boolean>(false);
  const [appearance, setAppearance] = useState<string | undefined>(defineCell(value));
  const isStart = useSelector((state: RootState) => state.board.isStart);
  const isActiveZero = useSelector((state: RootState) => state.board.indexesZero);
  const table = useSelector((state: RootState) => state.board.items);
  const startValue = useSelector((state: RootState) => state.board.startValue);
  const isGameOver = useSelector((state: RootState) => state.board.isGameOver);

  const onClick = (): void => {
    if (isGameOver === true) return;
    if (appearance === styles.flag) return;
    setActive(true);
    dispatch(onAddCell());
    if (value === 0) {
      dispatch(clear(index));
    }
    if (isStart === false) {
      dispatch(onStartGame(index));
      dispatch(restartFlag());
    }
    if (value === -1) {
      dispatch(gameOver());
      setAppearance(styles.bomb_red);
      dispatch(gameOverButton(true));
    }
  };

  useEffect(() => {
    if (index === startValue && startValue >= 0) {
      setActive(true);
      dispatch(clear(index));
    }
  }, [startValue]);

  useEffect(() => {
    setAppearance(defineCell(value));
    setActive(false);
  }, [table]);

  useEffect(() => {
    if (isActiveZero.includes(index)) {
      setActive(true);
      if (appearance === styles.flag) {
        setAppearance(styles.bomb_not);
      }
    }
  }, [isActiveZero]);

  const handlerFlag = useCallback(
    (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      if (appearance !== styles.flag && active === false && isGameOver === false) {
        console.log(isGameOver, 'gameover');
        if (isGameOver) return;
        setAppearance(styles.flag);
        setActive(true);
        dispatch(onChangeFlags(true));
      }
      if (appearance === styles.flag) {
        setAppearance(styles.question);
        dispatch(onChangeFlags(false));
      }
      if (appearance === styles.question) {
        setAppearance(defineCell(value));
        setActive(false);
      }
    },
    [active, appearance, isGameOver],
  );

  const onMouseDown = (): void => {
    if (isGameOver === true) return;
    dispatch(onChangeButton());
  };

  return (
    <button
      onMouseDown={onMouseDown}
      onMouseUp={onMouseDown}
      onContextMenu={handlerFlag}
      onClick={onClick}
      className={[styles.cell, 'cell-afraid', active && appearance].join(' ')}></button>
  );
};

export default Cell;
