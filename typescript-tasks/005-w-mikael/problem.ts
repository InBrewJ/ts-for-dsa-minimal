// export const adder = (a: number, b: number): number => {
//     return a + b;
// }

// take(["apple", "pear", "lemon", "orange"], 2)
// # ["apple", "pear"]

export const take = (values, numToTake: number) => {
  let returnArray = [];

  for (let i = 0; i < numToTake; ++i) {
    const index = i % values.length;
    returnArray.push(values[index]);
  }

  return returnArray;
};
