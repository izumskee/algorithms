class Mergesort {
  constructor(array) {
    this.A = array;
  }

  _merge(a, aux, lo, mid, hi) {
    for (let k = lo; k <= hi; k++) {
      aux[k] = a[k];
    }

    let i = lo;
    let j = mid + 1;

    for (let k = lo; k <= hi; k++) {
      if      (i > mid)         { a[k] = aux[j++] }
      else if (j > hi)          { a[k] = aux[i++] }
      else if (aux[j] < aux[i]) { a[k] = aux[j++] }
      else                      { a[k] = aux[i++] }
    }
  }

  _sorting(a, aux, lo, hi) {
    if (hi <= lo) return;
    const mid = lo + (hi - lo) / 2;
    this._sorting(a, aux, lo, mid);
    this._sorting(a, aux, mid + 1, hi);
    this._merge(a, aux, lo, mid, hi);
  }

  sort() {
    const aux = [...this.A];

    this._sorting(this.A, aux, 0, this.A.length - 1);

    return this.A;
  }
}

export default Mergesort;