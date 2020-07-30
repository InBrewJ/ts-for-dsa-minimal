/* NAME:
 * FizzBuzz - Switch Statement
 *
 * DESCRIPTION:
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 *
 * TASK:
 * Using a switch statement, find all multiples of 3 & 5 within a range of 1000. Return multiples of 3 as "Fizz", multiples of 5 as "Buzz" and multiples of both as "FizzBuzz".
 */

enum Result {
  FIZZ,
  BUZZ,
  FIZZBUZZ,
  NOTHING,
}

export const fizzBuzzSwitchStatement = (value: number): string | number => {
  // What to switch on?
  const isFizz: boolean = value % 3 === 0;
  const isBuzz: boolean = value % 5 === 0;
  const isFizzBuzz: boolean = isFizz && isBuzz;

  const result: Result = isFizzBuzz
    ? Result.FIZZBUZZ
    : isFizz
    ? Result.FIZZ
    : isBuzz
    ? Result.BUZZ
    : Result.NOTHING;

  switch (result) {
    case Result.FIZZBUZZ:
      return "FizzBuzz";
    case Result.FIZZ:
      return "Fizz";
    case Result.BUZZ:
      return "Buzz";
    case Result.NOTHING:
      return value;
  }
};

export const fizzBuzzSwitchStatementLogger = (
  range: number
): string[] | number[] => {
  const values = [];
  for (let value = 0; value <= range; value++) {
    values.push(fizzBuzzSwitchStatement(value));
  }
  return values;
};
