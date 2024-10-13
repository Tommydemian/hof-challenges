import { addTwo } from "../user/addTwo";

describe("addTwo function", () => {
  it("should add 2 to the input number", () => {
    expect(addTwo(1)).toBe(3);
    expect(addTwo(5)).toBe(7);
    expect(addTwo(-1)).toBe(1);
  });
});
