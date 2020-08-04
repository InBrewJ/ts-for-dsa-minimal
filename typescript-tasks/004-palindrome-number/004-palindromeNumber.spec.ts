import { isPalindrome, isPalindromeWithoutString } from "./palindromeNumber";

describe("`Palindrome Number` from leetcode", () => {
  it("Should return true for `121`", () => {
    expect(isPalindrome(121)).toBe(true);
  });

  it("Should return false for `10`", () => {
    expect(isPalindrome(10)).toBe(false);
  });

  it("Should return false for `-121`", () => {
    expect(isPalindrome(-121)).toBe(false);
  });
});

describe("`Palindrome Number` from leetcode (without converting to string)", () => {
  it("Should return true for `121`", () => {
    expect(isPalindromeWithoutString(121)).toBe(true);
  });

  it("Should return false for `10`", () => {
    expect(isPalindromeWithoutString(10)).toBe(false);
  });

  it("Should return false for `-121`", () => {
    expect(isPalindromeWithoutString(-121)).toBe(false);
  });
});
