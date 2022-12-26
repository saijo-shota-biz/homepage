export const createArray = (start: number, end: number) => {
  return [...range(start, end)];
};

function* range(start: number, end: number) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}
