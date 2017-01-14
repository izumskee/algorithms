class Quicksort {
  constructor(array) {
    this.A = array;
  }

  _quicksort(A, p, r) {
    if (r <= p) return;

    let q = this._partition(A, p, r);
    this._quicksort(A, p, q - 1);
    this._quicksort(A, q + 1, r);
  }

  _partition(A, p, r) {
    let x = A[r];
    let i = p - 1;

    for (let j = p; j <= r - 1; j++) {
      if (A[j] <= x) {
        i++;
        this._swap(A, i, j);
      }
    }

    this._swap(A, i + 1, r);

    return i + 1;
  }

  _swap(array, indexA, indexB) {
    const temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
  }

  sort() {
    this._quicksort(this.A, 0, this.A.length - 1);
    return this.A;
  }

}

export default Quicksort;