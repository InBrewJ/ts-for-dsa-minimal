import { multiplier } from "./problem";

describe("Multiplier", () => {
  it("Should multiply", () => {
    expect(multiplier(3, 3)).toEqual(9);
  });
});
