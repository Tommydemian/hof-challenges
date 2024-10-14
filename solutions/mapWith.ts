// ## Challenge 5

// In challenge 3, you've created a function called `map`. In this challenge, you're going to rebuild the `map` function by creating a function called `mapWith`. This time you're going to use `forEach` inside of `mapWith` instead of using a `for` loop.

export function mapWith<T>(arr: Array<T>, callback: Function): Array<T> {
  const newArray: Array<T> = [];
  arr.forEach((el) => {
    newArray.push(callback(el));
  });
  return newArray;
}
