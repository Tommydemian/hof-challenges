// ## Challenge 4

// Create a function called `forEach` that takes an array and a callback, and runs the callback on each element of the array. `forEach` does not return anything.

// ```javascript
// let alphabet = "";
// const letters = ["a", "b", "c", "d"];
// forEach(letters, function (char) {
//   alphabet += char;
// });
// console.log(alphabet); //prints 'abcd'
// ```
export function forEach<T>(arr: Array<T>, callback: Function) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
