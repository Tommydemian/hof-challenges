import { mapWith } from "../user/mapWith";

describe("mapWith function", () => {
  it("should apply the callback to each element and return a new array", () => {
    const double = (n: number) => n * 2;
    expect(mapWith([1, 2, 3], double)).toEqual([2, 4, 6]);
  });

  it("should work with different types", () => {
    const toUpper = (s: string) => s.toUpperCase();
    expect(mapWith(["a", "b", "c"], toUpper)).toEqual(["A", "B", "C"]);
  });

  it("should handle empty arrays", () => {
    const double = (n: number) => n * 2;
    expect(mapWith([], double)).toEqual([]);
  });

  it("should preserve the original array", () => {
    const original = [1, 2, 3];
    const double = (n: number) => n * 2;
    const result = mapWith(original, double);
    expect(result).toEqual([2, 4, 6]);
    expect(original).toEqual([1, 2, 3]);
  });
});
