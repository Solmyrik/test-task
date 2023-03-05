import styles from './Counter.module.scss';

export const countTimer = (number: number) => {
  let currentUnits: string = styles.zero;
  let currentDozers: string = styles.zero;
  let currentHunders: string = styles.zero;
  if (number < 10) {
    if (number === 0) currentUnits = styles.zero;
    if (number === 1) currentUnits = styles.one;
    if (number === 2) currentUnits = styles.two;
    if (number === 3) currentUnits = styles.three;
    if (number === 4) currentUnits = styles.four;
    if (number === 5) currentUnits = styles.five;
    if (number === 6) currentUnits = styles.six;
    if (number === 7) currentUnits = styles.seven;
    if (number === 8) currentUnits = styles.eight;
    if (number === 9) currentUnits = styles.nine;
  } else {
    let currentNumber: string[] = String(number).split('');
    if (number < 100) {
      if (Number(currentNumber[0]) === 0) currentDozers = styles.zero;
      if (Number(currentNumber[0]) === 1) currentDozers = styles.one;
      if (Number(currentNumber[0]) === 2) currentDozers = styles.two;
      if (Number(currentNumber[0]) === 3) currentDozers = styles.three;
      if (Number(currentNumber[0]) === 4) currentDozers = styles.four;
      if (Number(currentNumber[0]) === 5) currentDozers = styles.five;
      if (Number(currentNumber[0]) === 6) currentDozers = styles.six;
      if (Number(currentNumber[0]) === 7) currentDozers = styles.seven;
      if (Number(currentNumber[0]) === 8) currentDozers = styles.eight;
      if (Number(currentNumber[0]) === 9) currentDozers = styles.nine;

      if (Number(currentNumber[1]) === 0) currentUnits = styles.zero;
      if (Number(currentNumber[1]) === 1) currentUnits = styles.one;
      if (Number(currentNumber[1]) === 2) currentUnits = styles.two;
      if (Number(currentNumber[1]) === 3) currentUnits = styles.three;
      if (Number(currentNumber[1]) === 4) currentUnits = styles.four;
      if (Number(currentNumber[1]) === 5) currentUnits = styles.five;
      if (Number(currentNumber[1]) === 6) currentUnits = styles.six;
      if (Number(currentNumber[1]) === 7) currentUnits = styles.seven;
      if (Number(currentNumber[1]) === 8) currentUnits = styles.eight;
      if (Number(currentNumber[1]) === 9) currentUnits = styles.nine;
    }
    if (number >= 100) {
      if (Number(currentNumber[0]) === 1) currentHunders = styles.zero;
      if (Number(currentNumber[0]) === 1) currentHunders = styles.one;
      if (Number(currentNumber[0]) === 2) currentHunders = styles.two;
      if (Number(currentNumber[0]) === 3) currentHunders = styles.three;
      if (Number(currentNumber[0]) === 4) currentHunders = styles.four;
      if (Number(currentNumber[0]) === 5) currentHunders = styles.five;
      if (Number(currentNumber[0]) === 6) currentHunders = styles.six;
      if (Number(currentNumber[0]) === 7) currentHunders = styles.seven;
      if (Number(currentNumber[0]) === 8) currentHunders = styles.eight;
      if (Number(currentNumber[0]) === 9) currentHunders = styles.nine;

      if (Number(currentNumber[1]) === 0) currentDozers = styles.zero;
      if (Number(currentNumber[1]) === 1) currentDozers = styles.one;
      if (Number(currentNumber[1]) === 2) currentDozers = styles.two;
      if (Number(currentNumber[1]) === 3) currentDozers = styles.three;
      if (Number(currentNumber[1]) === 4) currentDozers = styles.four;
      if (Number(currentNumber[1]) === 5) currentDozers = styles.five;
      if (Number(currentNumber[1]) === 6) currentDozers = styles.six;
      if (Number(currentNumber[1]) === 7) currentDozers = styles.seven;
      if (Number(currentNumber[1]) === 8) currentDozers = styles.eight;
      if (Number(currentNumber[1]) === 9) currentDozers = styles.nine;

      if (Number(currentNumber[2]) === 0) currentUnits = styles.zero;
      if (Number(currentNumber[2]) === 1) currentUnits = styles.one;
      if (Number(currentNumber[2]) === 2) currentUnits = styles.two;
      if (Number(currentNumber[2]) === 3) currentUnits = styles.three;
      if (Number(currentNumber[2]) === 4) currentUnits = styles.four;
      if (Number(currentNumber[2]) === 5) currentUnits = styles.five;
      if (Number(currentNumber[2]) === 6) currentUnits = styles.six;
      if (Number(currentNumber[2]) === 7) currentUnits = styles.seven;
      if (Number(currentNumber[2]) === 8) currentUnits = styles.eight;
      if (Number(currentNumber[2]) === 9) currentUnits = styles.nine;
    }
  }
  return { currentUnits, currentDozers, currentHunders };
};
