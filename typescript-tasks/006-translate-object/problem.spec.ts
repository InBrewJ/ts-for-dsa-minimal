import { translateObj } from "./problem";

describe("translate a typedf object, keys and values alike", () => {
  it("translates the keys of a simple object", () => {
    const input = {
      un: "1",
      deux: "2",
      trois: "3",
    };
    const expected = {
      one: "1",
      two: "2",
      three: "3",
    };

    const conf = new Map<string, string>([
      ["un", "one"],
      ["deux", "two"],
      ["trois", "three"],
    ]);

    expect(translateObj(input, conf)).toStrictEqual(expected);
  });
});
