// Challenge 8
function union<T extends number>(arrays: Array<Array<T>>): Array<T> {
  return arrays.reduce((acc: Array<T>, curr: Array<T>) => {
    curr.forEach((el) => {
      if (!acc.includes(el)) {
        acc.push(el);
      }
    });
    return acc;
  });
}
