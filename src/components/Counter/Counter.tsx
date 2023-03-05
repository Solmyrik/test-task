import { FC, useEffect, useState } from 'react';
import styles from './Counter.module.scss';
import { countTimer } from './counterTimer';

interface CounterProps {
  time: number;
}

const Counter: FC<CounterProps> = ({ time }) => {
  const [units, setUnits] = useState<string>(styles.zero);
  const [dozens, setDozens] = useState<string>(styles.zero);
  const [hundreds, setHundreds] = useState<string>(styles.zero);

  useEffect(() => {
    const { currentUnits, currentDozers, currentHunders } = countTimer(time);
    setUnits(currentUnits);
    setDozens(currentDozers);
    setHundreds(currentHunders);
  }, [time]);

  return (
    <div className={styles.counter}>
      <div className={[styles.counter__num, hundreds].join(' ')}></div>
      <div className={[styles.counter__num, dozens].join(' ')}></div>
      <div className={[styles.counter__num, units].join(' ')}></div>
    </div>
  );
};

export default Counter;
