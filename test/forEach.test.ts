import { forEach } from "../user/forEach";

describe("forEach function", () => {
  it("should apply the callback to each element of the array", () => {
    const result: number[] = [];
    forEach([1, 2, 3], (n: number) => result.push(n * 2));
    expect(result).toEqual([2, 4, 6]);
  });

  it("should work with arrays of different types", () => {
    const numberResult: number[] = [];
    forEach([1, 2, 3], (n: number) => numberResult.push(n));
    expect(numberResult).toEqual([1, 2, 3]);

    const stringResult: string[] = [];
    forEach(["a", "b", "c"], (s: string) => stringResult.push(s.toUpperCase()));
    expect(stringResult).toEqual(["A", "B", "C"]);
  });

  it("should do nothing for an empty array", () => {
    const result: any[] = [];
    forEach([], (item: any) => result.push(item));
    expect(result).toEqual([]);
  });

  it("should provide correct index to the callback", () => {
    const result: string[] = [];
    forEach(["a", "b", "c"], (item: string, index: number) => {
      result.push(`${item}-${index}`);
    });
    expect(result).toEqual(["a-0", "b-1", "c-2"]);
  });
});
