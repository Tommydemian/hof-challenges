import { objOfMatches } from "../user/objOfMatches";

describe("objOfMatches function", () => {
  it("should return an object with matching elements", () => {
    const result = objOfMatches(
      ["hi", "howdy", "bye", "later", "hello"],
      ["HI", "Howdy", "BYE", "LATER", "hello"],
      (str: string) => str.toUpperCase()
    );
    expect(result).toEqual({ hi: "HI", bye: "BYE", later: "LATER" });
  });

  it("should return an empty object when there are no matches", () => {
    const result = objOfMatches(
      ["hi", "howdy", "bye"],
      ["hello", "goodbye"],
      (str: string) => str.toUpperCase()
    );
    expect(result).toEqual({});
  });

  it("should work with different callback functions", () => {
    const result = objOfMatches(
      ["a", "b", "c"],
      ["1", "2", "3"],
      (str: string) => str.charCodeAt(0).toString()
    );
    expect(result).toEqual({ a: "97", b: "98", c: "99" });
  });

  it("should handle empty arrays", () => {
    const result = objOfMatches([], [], (str: string) => str.toUpperCase());
    expect(result).toEqual({});
  });
});
