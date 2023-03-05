export const findСoordinates = (id: number, length: number) => {
  let x = 0;
  let y = 0;

  for (let i = 0; i < id; i += length) {
    y = id - length * x;
    x++;
  }

  return { x, y };
};
