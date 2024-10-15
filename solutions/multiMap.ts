function multiMap<T>(
  arr: Array<T>,
  callbacksArr: Array<Function>
): Record<string, Array<any>> {
  return arr.reduce((acc: Record<string, Array<any>>, val: T) => {
    acc[String(val)] = callbacksArr.map((cb) => cb(val));
    return acc;
  }, {});
}
