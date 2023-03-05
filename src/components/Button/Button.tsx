import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { restartGame, win } from '../../redux/slices/boardSlice';
import { gameOverButton } from '../../redux/slices/buttonSlice';
import { restartTimer } from '../../redux/slices/timerSlice';
import type { RootState } from '../../redux/store';
import styles from './Button.module.scss';

const Button: FC = () => {
  const dispatch = useDispatch();
  const [buttonStyle, setButtonStyle] = useState<string>('');
  const isAfraid = useSelector((state: RootState) => state.button.isAfraid);
  const isGameOverButton = useSelector((state: RootState) => state.button.isGameOverButton);
  const quantity = useSelector((state: RootState) => state.board.quantity);
  const indexesZero = useSelector((state: RootState) => state.board.indexesZero);

  const restart = (): void => {
    dispatch(restartTimer());
    dispatch(restartGame());
    dispatch(gameOverButton(false));
  };

  useEffect(() => {
    if (quantity >= 20) {
      let currentIndexes = new Set(indexesZero);
      if (quantity + currentIndexes.size >= 216) {
        setButtonStyle(styles.win);
        dispatch(win());
      }
    }
  }, [quantity]);

  useEffect(() => {
    if (isAfraid) {
      setButtonStyle(styles.danger);
    } else {
      setButtonStyle('');
    }
    if (isGameOverButton === true) {
      setButtonStyle(styles.gameover);
    } else {
      setButtonStyle('');
    }
  }, [isAfraid, isGameOverButton]);

  return <button onClick={restart} className={[styles.button, buttonStyle].join(' ')}></button>;
};

export default Button;
