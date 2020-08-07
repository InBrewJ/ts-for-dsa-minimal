import { take } from "./problem";

// take(["apple", "pear", "lemon", "orange"], 2)
// # ["apple", "pear"]

describe("Take", () => {
  it("Should return apple + pear", () => {
    const input = ["apple", "pear", "lemon", "orange"];
    const numToTake = 2;
    const result = ["apple", "pear"];
    expect(take(input, numToTake)).toEqual(result);
  });

  it("Should return apple + pear + lemon", () => {
    const input = ["apple", "pear", "lemon", "orange"];
    const numToTake = 3;
    const result = ["apple", "pear", "lemon"];
    expect(take(input, numToTake)).toEqual(result);
  });

  // edge case 2 - negative input

  it("negative numToTake", () => {
    const input = ["apple", "pear", "lemon", "orange"];
    const numToTake = -90;
    const result = [];
    expect(take(input, numToTake)).toEqual(result);
  });

  it("numToTake > input.length - wrap around! fruits", () => {
    const input = ["apple", "pear", "lemon", "orange"];
    const numToTake = 5;
    const result = ["apple", "pear", "lemon", "orange", "apple"];
    expect(take(input, numToTake)).toEqual(result);
  });

  it("numToTake > input.length - wrap around! cats + dogs", () => {
    const input = ["cat", "dog"];
    const numToTake = 6;
    const result = ["cat", "dog", "cat", "dog", "cat", "dog"];
    expect(take(input, numToTake)).toEqual(result);
  });

  it("numToTake > input.length - wrap around! cats", () => {
    const input = ["cat"];
    const numToTake = 6;
    const result = ["cat", "cat", "cat", "cat", "cat", "cat"];
    expect(take(input, numToTake)).toEqual(result);
  });
});
