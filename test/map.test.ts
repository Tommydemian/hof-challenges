import { map } from "../user/map";

describe("map function", () => {
  it("should apply the callback to each element and return a new array", () => {
    const multiplyByTwo = (num: number) => num * 2;
    expect(map([1, 2, 3, 4, 5], multiplyByTwo)).toEqual([2, 4, 6, 8, 10]);
  });

  it("should handle empty arrays", () => {
    const multiplyByTwo = (num: number) => num * 2;
    expect(map([], multiplyByTwo)).toEqual([]);
  });

  it("should work with different callback functions", () => {
    const addOne = (num: number) => num + 1;
    expect(map([1, 2, 3], addOne)).toEqual([2, 3, 4]);

    const square = (num: number) => num * num;
    expect(map([1, 2, 3], square)).toEqual([1, 4, 9]);
  });
});
