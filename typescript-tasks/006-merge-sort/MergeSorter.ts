class Sorter {
  private isEmpty = (list: number[]) => list.length === 0;

  private splitAt = (list: number[], pos: number) => {
    return [list.slice(0, pos), list.slice(pos, list.length)];
  };

  private tail = (l: number[]) => l.slice(1, l.length);

  private asInt = (n: number) => Math.floor(n);

  private prepend = (newElement: number, list: number[]) => {
    return [newElement, ...list];
  };

  public msort = (less: Function) => (list: number[]) => {
    const merge = (xs: number[], ys: number[]): number[] => {
      switch (true) {
        case this.isEmpty(xs) && !this.isEmpty(ys):
          return ys;
        case !this.isEmpty(xs) && this.isEmpty(ys):
          return xs;
        default:
          const firstXs = xs[0];
          const firstYs = ys[0];
          if (less(firstXs, firstYs)) {
            return this.prepend(firstXs, merge(this.tail(xs), ys));
          } else {
            return this.prepend(firstYs, merge(xs, this.tail(ys)));
          }
      }
    };

    const n: number = this.asInt(list.length / 2);
    if (n === 0) {
      return list;
    } else {
      const [ys, zs] = this.splitAt(list, n);
      return merge(this.msort(less)(ys), this.msort(less)(zs));
    }
  };
}

export const mergeSorterAsc = (list: number[]) => {
  const sorter = new Sorter();
  const ascSorter = sorter.msort((x, y) => x < y);
  return ascSorter(list);
};

export const mergeSorterDesc = (list: number[]) => {
  const sorter = new Sorter();
  const descSorter = sorter.msort((x, y) => x > y);
  return descSorter(list);
};
