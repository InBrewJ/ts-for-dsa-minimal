class Sorter {
  private isEmpty = (list: number[]) => list.length === 0;

  private splitAt = (list: number[], pos: number) => {
    return [list.slice(0, pos), list.slice(pos, list.length)];
  };

  public msort = (less: Function) => (list: number[]) => {
    const merge = (xs: number[], ys: number[]): number[] => {
      if (this.isEmpty(xs) && !this.isEmpty(ys)) {
        return ys;
      }
      if (!this.isEmpty(xs) && this.isEmpty(ys)) {
        return xs;
      }

      if (less(xs[0], ys[0])) {
        const a = merge(xs.slice(1, xs.length), ys);
        a.unshift(xs[0]);
        return a;
      } else {
        const b = merge(xs, ys.slice(1, ys.length));
        b.unshift(ys[0]);
        return b;
      }
    };

    const n: number = Math.floor(list.length / 2);
    if (n === 0) {
      return list;
    } else {
      const [ys, zs] = this.splitAt(list, n);
      return merge(this.msort(less)(ys), this.msort(less)(zs));
    }
  };
}

export const mergeSorter = (list: number[]) => {
  const sorter = new Sorter();
  return sorter.msort((x, y) => x < y)(list);
};

export const mergeSorterDesc = (list: number[]) => {
  const sorter = new Sorter();
  return sorter.msort((x, y) => x > y)(list);
};
