import { intersection } from "../user/interesection";

describe("intersection function", () => {
  it("should return common elements from multiple arrays", () => {
    expect(
      intersection([
        [1, 2, 3],
        [2, 3, 4],
        [3, 4, 5],
      ])
    ).toEqual([3]);
    expect(
      intersection([
        [1, 2],
        [2, 3],
        [3, 4],
      ])
    ).toEqual([]);
    expect(
      intersection([
        [1, 2, 3],
        [1, 2, 3],
      ])
    ).toEqual([1, 2, 3]);
  });

  it("should handle empty arrays", () => {
    expect(intersection([])).toEqual([]);
    expect(intersection([[], [1, 2], [2, 3]])).toEqual([]);
  });
});
