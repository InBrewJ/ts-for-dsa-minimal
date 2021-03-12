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

  it("translates the keys of a nested object", () => {
    const input = {
      un: "1",
      deux: {
        un: "1",
        deux: "2",
        trois: "3",
      },
      trois: "3",
    };
    const expected = {
      one: "1",
      two: {
        one: "1",
        two: "2",
        three: "3",
      },
      three: "3",
    };

    const conf = new Map<string, string>([
      ["un", "one"],
      ["deux", "two"],
      ["trois", "three"],
    ]);

    expect(translateObj(input, conf)).toStrictEqual(expected);
  });

  it("translates the keys of a deeply nested object", () => {
    const input = {
      un: "1",
      deux: {
        un: "1",
        deux: "2",
        trois: {
          deux: {
            un: "1",
            deux: "2",
            trois: {
              un: "1",
            },
          },
        },
      },
      trois: {
        un: {
          deux: "2",
          trois: {
            un: "1",
          },
        },
        deux: "2",
        trois: {
          un: "1",
        },
      },
    };

    const expected = {
      one: "1",
      two: {
        one: "1",
        two: "2",
        three: {
          two: {
            one: "1",
            two: "2",
            three: {
              one: "1",
            },
          },
        },
      },
      three: {
        one: {
          two: "2",
          three: {
            one: "1",
          },
        },
        two: "2",
        three: {
          one: "1",
        },
      },
    };

    const conf = new Map<string, string>([
      ["un", "one"],
      ["deux", "two"],
      ["trois", "three"],
    ]);

    expect(translateObj(input, conf)).toStrictEqual(expected);
  });

  it("should not translates the keys that aren't in the map", () => {
    const input = {
      un: "1",
      deux: "2",
      trois: "3",
      "not:in:map": "nope",
    };
    const expected = {
      one: "1",
      two: "2",
      three: "3",
      "not:in:map": "nope",
    };

    const conf = new Map<string, string>([
      ["un", "one"],
      ["deux", "two"],
      ["trois", "three"],
    ]);

    expect(translateObj(input, conf)).toStrictEqual(expected);
  });
});
