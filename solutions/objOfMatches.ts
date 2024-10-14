// Challenge 9 - Imperative
function objOfMatches<T>(
  array1: Array<string>,
  array2: Array<string>,
  callback: Function
): T {
  const obj: { [key: string]: string } = {};
  for (let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) === array2[i]) {
      obj[array1[i]] = array2[i];
    }
  }
  return obj as T;
}

// Challenge 9 - Declarative
function objOfMatchesDeclarative<T>(
  array1: Array<string>,
  array2: Array<string>,
  callback: (str: string) => string
): T {
  const obj: { [key: string]: string } = {};
  array1.forEach((el, index) => {
    if (callback(el) === array2[index]) {
      obj[el] = array2[index];
    }
  });
  return obj as T;
}

// Challenge 9 - Declarative with Reduce
function objOfMatchesDeclarativeReduce(
  array1: Array<string>,
  array2: Array<string>,
  callback: (str: string) => string
): { [key: string]: string } {
  return array1.reduce((acc, curr, index) => {
    if (callback(curr) === array2[index]) {
      acc[curr] = array2[index];
    }
    return acc;
  }, {} as { [key: string]: string });
}

//   console.log(
//     objOfMatches(
//       ["hi", "howdy", "bye", "later", "hello"],
//       ["HI", "Howdy", "BYE", "LATER", "hello"],
//       function (str: string) {
//         return str.toUpperCase();
//       }
//     )
//   );
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }
