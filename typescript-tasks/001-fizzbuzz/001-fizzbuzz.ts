/* NAME:
 * FizzBuzz
 *
 * DESCRIPTION:
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 *
 * TASK:
 * Find all multiples of 3 & 5 within a range of 1000. Return multiples of 3 as "Fizz", multiples of 5 as "Buzz" and multiples of both as "FizzBuzz".
 */

export const fizzBuzz = (value: number): string | number => {
  const isMultipleOf3 = value % 3 === 0;
  const isMultipleOf5 = value % 5 === 0;
  const isBoth = isMultipleOf3 && isMultipleOf5;

  if (isBoth) {
    return "FizzBuzz";
  }

  if (isMultipleOf3) {
    return "Fizz";
  }

  if (isMultipleOf5) {
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
