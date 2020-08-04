/* NAME:
 * FizzBuzz
 *
 * DESCRIPTION:
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 *
 * TASK:
 * Find all multiples of 3 & 5 within a range of 1000. Return multiples of 3 as "Fizz", multiples of 5 as "Buzz" and multiples of both as "FizzBuzz".
 */

const isFizz = (value) => value % 3 === 0;
const isBuzz = (value) => value % 5 === 0;
const isFizzBuzz = (value) => isFizz(value) && isBuzz(value);

export const fizzBuzz = (value: number): string | number => {
  if (isFizzBuzz(value)) {
    return "FizzBuzz";
  }

  if (isFizz(value)) {
    return "Fizz";
  }

  if (isBuzz(value)) {
    return "Buzz";
  }

  return value;
};

export const fizzBuzzLogger = (range: number): string[] | number[] => {
  const values = [];
  for (let value = 0; value <= range; value++) {
    values.push(fizzBuzz(value));
  }
  return values;
};
