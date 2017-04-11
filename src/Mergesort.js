class Mergesort {
  constructor(array) {
    this.A = array;
    this.CUTOFF = 7;
  }

  _getLength() {
    return this.A.length;
  }

  _insertionSort(A, p, r) {
    for (let i = p; i <= r; i++) {
      for (let j = i; j > p && A[j] < A[j - 1]; j--) {
        this._swap(A, j, j - 1);
      }
    }
  }

  _swap(A, i, j) {
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
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
    if (hi <= lo + this.CUTOFF - 1) {
      this._insertionSort(a, lo, hi); // Use insertion sort for small subarrays
      return;
    }

    const mid = Math.floor(lo + (hi - lo) / 2);

    this._sorting(a, aux, lo, mid);
    this._sorting(a, aux, mid + 1, hi);

    if (a[mid+1] >= a[mid]) return; // Stop if already sorted

    this._merge(a, aux, lo, mid, hi);
  }

  sort() {
    this._sorting(this.A, [...this.A], 0, this._getLength() - 1);
    return this.A;
  }
}

export default Mergesort;