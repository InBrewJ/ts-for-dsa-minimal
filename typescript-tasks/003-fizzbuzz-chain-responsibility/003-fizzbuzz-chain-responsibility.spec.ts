import { fizzBuzz, fizzBuzzLogger } from "./003-fizzbuzz-chain-responsibility";

describe("fizzBuzzChainResponsibility", () => {
  it("Should return FizzBuzz if value is multiple of 3 & 5", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
    expect(fizzBuzz(30)).toEqual("FizzBuzz");
  });

  it("Should return Fizz if value is multiple of 3", () => {
    const result = fizzBuzz(3);
    expect(result).toEqual("Fizz");
  });

  it("Should return Buzz if value is multiple of 5", () => {
    const result = fizzBuzz(5);
    expect(result).toEqual("Buzz");
  });

  it("Should return value if value is not a multiple of 3 or 5", () => {
    const result = fizzBuzz(1);
    expect(result).toEqual(1);
  });

  it.each`
    result               | expected
    ${fizzBuzzLogger(5)} | ${"Fizz"}
    ${fizzBuzzLogger(5)} | ${"Buzz"}
    ${fizzBuzzLogger(5)} | ${1}
  `("Should return an array containing $expected", ({ result, expected }) => {
    expect(result).toContain(expected);
  });
});
