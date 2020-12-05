import { mergeSorterAsc, mergeSorterDesc } from "./MergeSorter";

describe("mergeSorterAsc", () => {
  it("Should return the empty array for an empty array", () => {
    const list = [];
    const sort = [];
    expect(mergeSorterAsc(list)).toEqual(sort);
  });

  it("Should sort return the list for length === 1", () => {
    const list = [28];
    const sort = [28];
    expect(mergeSorterAsc(list)).toEqual(sort);
  });

  it("Should sort an unsorted list with two elements", () => {
    const list = [2, 1];
    const sort = [1, 2];
    expect(mergeSorterAsc(list)).toEqual(sort);
  });

  it("Should sort an unsorted list with three elements", () => {
    const list = [45, 2, 16];
    const sort = [2, 16, 45];
    expect(mergeSorterAsc(list)).toEqual(sort);
  });

  it("Should sort an unsorted list with six elements", () => {
    const list = [10000, 6, 1, 150, 0, 8];
    const sort = [0, 1, 6, 8, 150, 10000];
    expect(mergeSorterAsc(list)).toEqual(sort);
  });
});

describe("mergeSorterDesc", () => {
  it("Should sort an unsorted list with six elements", () => {
    const list = [10000, 6, 1, 150, 0, 8];
    const sort = [10000, 150, 8, 6, 1, 0];
    expect(mergeSorterDesc(list)).toEqual(sort);
  });
});
