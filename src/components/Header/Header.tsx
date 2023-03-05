import { FC, useEffect, useState } from 'react';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';
import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../redux/store';
import { onAddTime } from '../../redux/slices/timerSlice';

const Header: FC = () => {
  const dispatch = useDispatch();
  const isStart = useSelector((state: RootState) => state.board.isStart);
  const flags = useSelector((state: RootState) => state.timer.flags);
  const time = useSelector((state: RootState) => state.timer.time);

  useEffect(() => {
    if (time < 999 && isStart) {
      const timer = setInterval(() => {
        dispatch(onAddTime(time + 1));
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [time, isStart]);

  return (
    <header className={styles.header}>
      <Counter time={flags} />
      <Button />
      <Counter time={time} />
    </header>
  );
};

export default Header;
