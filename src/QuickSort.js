import shuffleArray from './shuffleArray';

class Quicksort {
  constructor(array) {
    this.A = array;

    // Improvements. Cutoff to insertion sort. As with mergesort, 
    // it pays to switch to insertion sort for tiny arrays. 
    // The optimum value of the cutoff is system-dependent, 
    // but any value between 5 and 15 is likely to work well in most situations.
    this.CUTOFF = 8; 
  }

  _quicksort(A, p, r) {
    const n = r - p + 1;

    // Improvements. Cutoff to insertion sort.
    if (n <= this.CUTOFF) {
      this._insertionSort(A, p, r);
      return;
    }

    // Improvements. Median-of-three partitioning.
    // A second easy way to improve the performance of quicksort 
    // is to use the median of a small sample of items taken from 
    // the array as the partitioning item.
    const m = this._median3(A, p, Math.floor(p + n / 2), r);
    this._swap(A, m, p);

    const q = this._partition(A, p, r);
    this._quicksort(A, p, q - 1);
    this._quicksort(A, q + 1, r);
  }

  // Return the index of the median element among a[i], a[j], and a[k]
  _median3(A, i, j, k) {
    return (A[i] < A[j] ?
            (A[j] < A[k] ? j : A[i] < A[k] ? k : i) :
            (A[k] < A[j] ? j : A[k] < A[i] ? k : i));
  }

  _insertionSort(A, p, r) {
    for (let i = p; i <= r; i++) {
      for (let j = i; j > p && A[j] < A[j - 1]; j--) {
        this._swap(A, j, j - 1);
      }
    }
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

  _swap(A, i, j) {
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
  }

  sort() {

    // Shuffling is needed for performance guarantee
    this.A = shuffleArray(this.A);
  
    // Start sorting
    this._quicksort(this.A, 0, this.A.length - 1);

    return this.A;
  }
}

export default Quicksort;