// ## Challenge 7

// Construct a function `intersection` that takes in an array of arrays, compares the inner arrays, and returns a new array with elements found in all of them. BONUS: Use reduce!

function intersection<T>(arrays: Array<Array<T>>): Array<T> {
  const frequencyObject: { [key: string]: number } = {};
  return arrays.reduce((acc, curr, index) => {
    curr.forEach((el) => {
      const key = String(el);
      if (frequencyObject[key] !== undefined) {
        frequencyObject[key]++;
      } else {
        frequencyObject[key] = 1;
      }
    });

    // Meaning I'm working with the last iteration.
    if (index === arrays.length - 1) {
      for (const [key, value] of Object.entries(frequencyObject)) {
        if (value === 3) {
          acc.push(Number(key) as T);
        }
      }
    }

    return acc;
  }, []);
}

console.log(
  intersection([
    [5, 10, 15, 20],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 5, 20],
  ])
);
// should log: [5, 15]

// Second solution:
function intersectionSimpler<T>(arrays: Array<Array<T>>): Array<T> {
  return arrays.reduce((acc, curr, index) => {
    // first iteration acc = curr
    if (index === 0) return curr;
    return acc.filter((el) => curr.includes(el)); // Keep only elements that exist in both acc and curr
  }, [] as T[]);
}

console.log(
  intersectionSimpler([
    [5, 10, 15, 20],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 5, 20],
  ])
);
