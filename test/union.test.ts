import { union } from "../user/union";

describe("union function", () => {
  it("should return the union of multiple arrays of numbers", () => {
    const result = union([
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
    ]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should remove duplicates across all arrays", () => {
    const result = union([
      [1, 1, 2],
      [2, 3],
      [1, 2, 3, 4],
    ]);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it("should handle arrays with no common elements", () => {
    const result = union([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should return an empty array if all input arrays are empty", () => {
    const result = union([[], [], []]);
    expect(result).toEqual([]);
  });

  it("should handle a single array input", () => {
    const result = union([[1, 2, 3]]);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should work with negative numbers", () => {
    const result = union([
      [-1, -2],
      [-2, -3],
      [-3, -4],
    ]);
    expect(result).toEqual([-1, -2, -3, -4]);
  });
});
