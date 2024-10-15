export function objOfMatches<T>(
  array1: Array<string>,
  array2: Array<string>,
  callback: Function
): T {
  const obj: { [key: string]: string } = {};

  return obj as T;
}
