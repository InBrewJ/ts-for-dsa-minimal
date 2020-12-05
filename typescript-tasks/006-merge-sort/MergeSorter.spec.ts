import { mergeSorter } from "./MergeSorter";

describe("MergeSorter", () => {
  it.only("Should return the empty array for an empty array", () => {
    const list = [];
    const sort = [];
    expect(mergeSorter(list)).toEqual(sort);
  });

  it.only("Should sort return the list for length === 1", () => {
    const list = [28];
    const sort = [28];
    expect(mergeSorter(list)).toEqual(sort);
  });

  it("Should sort an unsorted list", () => {
    const list = [0, 3, 2, 1, 1500, -5];
    const sort = [-5, 0, 1, 2, 3, 1500];
    expect(mergeSorter(list)).toEqual(sort);
  });
});
