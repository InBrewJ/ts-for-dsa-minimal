class Sorter {
  private isEmpty = (list: number[]) => list.length === 0;

  public msort = (less: Function) => (list: number[]) => {
    const merge = (xs: number[], ys: number[]): number[] => {
      if (this.isEmpty(xs) && !this.isEmpty(ys)) {
        console.log("first pattern");
        return ys;
      }
      if (!this.isEmpty(xs) && this.isEmpty(ys)) {
        console.log("second pattern");
        return xs;
      }
      // else
      console.log(less(xs[0], ys[0]));

      if (less(xs[0], ys[0])) {
        console.log("third pattern");
        const a = merge(xs.slice(1, xs.length), ys);
        a.unshift(xs[0]);
        return a;
      } else {
        console.log("fourth pattern");
        const b = merge(xs, ys.slice(1, ys.length));
        b.unshift(ys[0]);
        return b;
      }
    };

    const n: number = list.length / 2;
    console.log("n : ", n);
    console.log("list : ", list);
    if (n === 0) return list;
    else {
      const [ys, zs] = (() => {
        const firstHalf = list.slice(0, n);
        const secondHalf = list.slice(n, list.length);
        return [firstHalf, secondHalf];
      })();
      console.log(ys, zs);

      return merge(this.msort(less)(ys), this.msort(less)(zs));
    }
  };
}

export const mergeSorter = (list: number[]) => {
  const sorter = new Sorter();
  return sorter.msort((x, y) => x < y)(list);
};
