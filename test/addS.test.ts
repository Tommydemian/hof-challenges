// 2. addS.test.ts
import { addS } from "../user/addS";

describe("addS function", () => {
  it("should add 's' to the end of the input string", () => {
    expect(addS("cat")).toBe("cats");
    expect(addS("dog")).toBe("dogs");
    expect(addS("")).toBe("s");
  });
});
