/* NAME:
 * FizzBuzz - Chain Responsibility
 *
 * DESCRIPTION:
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 *
 * TASK:
 * Using the chain responsibility pattern, find all multiples of 3 & 5 within a range of 1000. Return multiples of 3 as "Fizz", multiples of 5 as "Buzz" and multiples of both as "FizzBuzz".
 */

interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: number): string;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    // Returning a handler from here will let us link handlers in a
    // convenient way like this:
    // monkey.setNext(squirrel).setNext(dog);
    return handler;
  }

  public handle(request: number): string {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}

enum Result {
  FIZZ = "Fizz",
  BUZZ = "Buzz",
  FIZZBUZZ = "FizzBuzz",
}

// utils

const isFizz = (value) => value % 3 === 0;
const isBuzz = (value) => value % 5 === 0;
const isFizzBuzz = (value) => isFizz(value) && isBuzz(value);

class FizzBuzzHandler extends AbstractHandler {
  public handle(request: number): string {
    if (isFizzBuzz(request)) {
      return Result.FIZZBUZZ;
    }
    return super.handle(request);
  }
}

class FizzHandler extends AbstractHandler {
  public handle(request: number): string {
    if (isFizz(request)) {
      return Result.FIZZ;
    }
    return super.handle(request);
  }
}

class BuzzHandler extends AbstractHandler {
  public handle(request: number): string {
    if (isBuzz(request)) {
      return Result.BUZZ;
    }
    return super.handle(request);
  }
}

export const FizzBuzz = () => {
  const fizzBuzz = new FizzBuzzHandler();
  const fizz = new FizzHandler();
  const buzz = new BuzzHandler();
  fizzBuzz.setNext(fizz).setNext(buzz);
  return fizzBuzz;
};

export const fizzBuzz = (value: number) => {
  return FizzBuzz().handle(value) || value;
};

export const fizzBuzzLogger = (range: number): string[] | number[] => {
  const values = [];
  for (let value = 0; value <= range; ++value) {
    values.push(fizzBuzz(value));
  }
  return values;
};
