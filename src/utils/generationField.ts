const Mine = -1;

export const generationField = (size: number, startValue: number): number[] => {
  const field = new Array(size * size).fill(0);
  const startValues = [
    startValue,
    startValue + 1,
    startValue - 1,
    startValue + 16,
    startValue - 16,
    startValue + 15,
    startValue - 15,
    startValue + 17,
    startValue - 17,
  ];
  console.log(startValues);

  for (let i = 0; i < 40; ) {
    const x = ~~(Math.random() * size);
    const y = ~~(Math.random() * size);

    if (startValues.includes(y * size + x)) {
      continue;
    }

    const inc = (x: number, y: number) => {
      if (x >= 0 && x < size && y >= 0 && y < size) {
        if (field[y * size + x] === Mine) return;
        field[y * size + x] += 1;
      }
    };

    if (field[y * size + x] === Mine) continue;

    field[y * size + x] = Mine;
    i++;

    inc(x + 1, y);
    inc(x - 1, y);
    inc(x, y - 1);
    inc(x, y + 1);
    inc(x - 1, y + 1);
    inc(x + 1, y - 1);
    inc(x - 1, y - 1);
    inc(x + 1, y + 1);
  }

  return field;
};
