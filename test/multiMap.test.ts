import { multiMap } from "../user/multiMap";

describe("multiMap function", () => {
  it("should apply multiple callbacks to each array element", () => {
    const uppercaseCB = (str: string) => str.toUpperCase();
    const lengthCB = (str: string) => str.length;
    const result = multiMap(
      ["catdog", "fish", "bird"],
      [uppercaseCB, lengthCB]
    );

    expect(result).toEqual({
      catdog: ["CATDOG", 6],
      fish: ["FISH", 4],
      bird: ["BIRD", 4],
    });
  });

  it("should work with numbers and various callbacks", () => {
    const double = (num: number) => num * 2;
    const square = (num: number) => num * num;
    const toString = (num: number) => num.toString();

    const result = multiMap([1, 2, 3], [double, square, toString]);

    expect(result).toEqual({
      1: [2, 1, "1"],
      2: [4, 4, "2"],
      3: [6, 9, "3"],
    });
  });

  it("should handle empty arrays", () => {
    const double = (num: number) => num * 2;
    const result = multiMap([], [double]);
    expect(result).toEqual({});
  });

  it("should handle empty callbacks array", () => {
    const result = multiMap(["a", "b", "c"], []);
    expect(result).toEqual({
      a: [],
      b: [],
      c: [],
    });
  });
});
