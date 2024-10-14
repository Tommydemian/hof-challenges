// ## Challenge 6

// Create a function called `reduce` that takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.

// ```javascript
// const nums = [4, 1, 3];
// const add = function (a, b) {
//   return a + b;
// };
// reduce(nums, add, 0); //-> 8
// ```

export function reduce(
  arr: Array<number>,
  callback: Function,
  initialValue: number
): number {
  if (arr.length === 0) {
    return initialValue;
  }

  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }
  return accumulator;
}
