import { reduce } from "../user/reduce";

describe("reduce function", () => {
  it("should reduce an array to a single value using the provided callback", () => {
    const nums = [4, 1, 3];
    const add = (a: number, b: number) => a + b;
    expect(reduce(nums, add, 0)).toBe(8);
  });

  it("should work with different callbacks and initial values", () => {
    const nums = [2, 3, 4];
    const multiply = (a: number, b: number) => a * b;
    expect(reduce(nums, multiply, 1)).toBe(24);

    const subtract = (a: number, b: number) => a - b;
    expect(reduce(nums, subtract, 10)).toBe(1); // 10 - 2 - 3 - 4 = 1
  });

  it("should return the initial value for an empty array", () => {
    const add = (a: number, b: number) => a + b;
    expect(reduce([], add, 5)).toBe(5);
  });

  it("should work with a single element array", () => {
    const nums = [7];
    const add = (a: number, b: number) => a + b;
    expect(reduce(nums, add, 3)).toBe(10);
  });
});
