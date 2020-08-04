export function isPalindrome(x: number): boolean {
  // Get an array of chars
  const numberAsString: string = x.toString();
  const charArray: string[] = numberAsString.split("");
  let reversedArr = [];
  // Create an array of reversed chars
  while (charArray.length > 0) {
    reversedArr.push(charArray.pop());
  }
  // Make the reversed array a string
  const reversedString = reversedArr.join("");
  // Then just use exact string comparison
  return reversedString === numberAsString;
}

// This is a polyfill from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
const sign = function (x: any) {
  return <any>(x > 0) - <any>(x < 0) || +x;
};

// Taken from
// https://codereview.stackexchange.com/questions/220274/reverse-integer
// Not entirely sure I understand this - study!
function reverseDigits(int) {
  var res: any = 0,
    val = Math.abs(int);
  while (val > 0) {
    res = res * 10 + (val % 10);
    val = (val / 10) | 0;
  }
  res *= sign(int);
  return (res | 0) === res ? res : 0;
}

export function isPalindromeWithoutString(x: number): boolean {
  // negative numbers will never be palindromic?
  if (x < 0) {
    return false;
  }

  return x === reverseDigits(x);
}
