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

  // const countTimer = (number: number) => {
  //   if (number < 10) {
  //     if (number === 0) setUnits(styles.zero);
  //     if (number === 1) setUnits(styles.one);
  //     if (number === 2) setUnits(styles.two);
  //     if (number === 3) setUnits(styles.three);
  //     if (number === 4) setUnits(styles.four);
  //     if (number === 5) setUnits(styles.five);
  //     if (number === 6) setUnits(styles.six);
  //     if (number === 7) setUnits(styles.seven);
  //     if (number === 8) setUnits(styles.eight);
  //     if (number === 9) setUnits(styles.nine);
  //     setDozens(styles.zero);
  //   } else {
  //     let currentNumber: string[] = String(number).split('');
  //     if (number < 100) {
  //       if (Number(currentNumber[0]) === 0) setDozens(styles.zero);
  //       if (Number(currentNumber[0]) === 1) setDozens(styles.one);
  //       if (Number(currentNumber[0]) === 2) setDozens(styles.two);
  //       if (Number(currentNumber[0]) === 3) setDozens(styles.three);
  //       if (Number(currentNumber[0]) === 4) setDozens(styles.four);
  //       if (Number(currentNumber[0]) === 5) setDozens(styles.five);
  //       if (Number(currentNumber[0]) === 6) setDozens(styles.six);
  //       if (Number(currentNumber[0]) === 7) setDozens(styles.seven);
  //       if (Number(currentNumber[0]) === 8) setDozens(styles.eight);
  //       if (Number(currentNumber[0]) === 9) setDozens(styles.nine);

  //       if (Number(currentNumber[1]) === 0) setUnits(styles.zero);
  //       if (Number(currentNumber[1]) === 1) setUnits(styles.one);
  //       if (Number(currentNumber[1]) === 2) setUnits(styles.two);
  //       if (Number(currentNumber[1]) === 3) setUnits(styles.three);
  //       if (Number(currentNumber[1]) === 4) setUnits(styles.four);
  //       if (Number(currentNumber[1]) === 5) setUnits(styles.five);
  //       if (Number(currentNumber[1]) === 6) setUnits(styles.six);
  //       if (Number(currentNumber[1]) === 7) setUnits(styles.seven);
  //       if (Number(currentNumber[1]) === 8) setUnits(styles.eight);
  //       if (Number(currentNumber[1]) === 9) setUnits(styles.nine);
  //     }
  //     if (number >= 100) {
  //       if (Number(currentNumber[0]) === 1) setHundreds(styles.zero);
  //       if (Number(currentNumber[0]) === 1) setHundreds(styles.one);
  //       if (Number(currentNumber[0]) === 2) setHundreds(styles.two);
  //       if (Number(currentNumber[0]) === 3) setHundreds(styles.three);
  //       if (Number(currentNumber[0]) === 4) setHundreds(styles.four);
  //       if (Number(currentNumber[0]) === 5) setHundreds(styles.five);
  //       if (Number(currentNumber[0]) === 6) setHundreds(styles.six);
  //       if (Number(currentNumber[0]) === 7) setHundreds(styles.seven);
  //       if (Number(currentNumber[0]) === 8) setHundreds(styles.eight);
  //       if (Number(currentNumber[0]) === 9) setHundreds(styles.nine);

  //       if (Number(currentNumber[1]) === 0) setDozens(styles.zero);
  //       if (Number(currentNumber[1]) === 1) setDozens(styles.one);
  //       if (Number(currentNumber[1]) === 2) setDozens(styles.two);
  //       if (Number(currentNumber[1]) === 3) setDozens(styles.three);
  //       if (Number(currentNumber[1]) === 4) setDozens(styles.four);
  //       if (Number(currentNumber[1]) === 5) setDozens(styles.five);
  //       if (Number(currentNumber[1]) === 6) setDozens(styles.six);
  //       if (Number(currentNumber[1]) === 7) setDozens(styles.seven);
  //       if (Number(currentNumber[1]) === 8) setDozens(styles.eight);
  //       if (Number(currentNumber[1]) === 9) setDozens(styles.nine);

  //       if (Number(currentNumber[2]) === 0) setUnits(styles.zero);
  //       if (Number(currentNumber[2]) === 1) setUnits(styles.one);
  //       if (Number(currentNumber[2]) === 2) setUnits(styles.two);
  //       if (Number(currentNumber[2]) === 3) setUnits(styles.three);
  //       if (Number(currentNumber[2]) === 4) setUnits(styles.four);
  //       if (Number(currentNumber[2]) === 5) setUnits(styles.five);
  //       if (Number(currentNumber[2]) === 6) setUnits(styles.six);
  //       if (Number(currentNumber[2]) === 7) setUnits(styles.seven);
  //       if (Number(currentNumber[2]) === 8) setUnits(styles.eight);
  //       if (Number(currentNumber[2]) === 9) setUnits(styles.nine);
  //     }
  //   }
  // };

  return (
    <div className={styles.counter}>
      <div className={[styles.counter__num, hundreds].join(' ')}></div>
      <div className={[styles.counter__num, dozens].join(' ')}></div>
      <div className={[styles.counter__num, units].join(' ')}></div>
    </div>
  );
};

export default Counter;
