class Quicksort {
  constructor(array) {
    this.A = array;
  }

  _quicksort(A, p, r) {
    if (r <= p) return;

    const q = this._randomizedPartition(A, p, r);
    this._quicksort(A, p, q - 1);
    this._quicksort(A, q + 1, r);
  }

  _randomizedPartition(A, p, r) {
    const i = this._random(p, r);

    this._swap(A, r, i);

    return this._partition(A, p, r);
  }

  _partition(A, p, r) {
    const x = A[r];
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

  _random(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

  sort() {
    this._quicksort(this.A, 0, this.A.length - 1);
    return this.A;
  }
}

export default Quicksort;