class Bubblesort {
  constructor(array) {
    this.A = array;
  }

  _swap(A, i, j) {
    const temp = A[i];
    A[i] = A[j];
    A[j] = temp;
  }

  _sorting(a) {
    for (let i = a.length - 1; i > 0; i--) {

      let counter = 0;

      for (let j = 0; j < i; j++) {
        if (a[j] > a[j + 1]) {
          this._swap(a, j, j + 1);
          counter++;
        }
      }

      if (counter === 0) {
        break;
      } 
    }

    this.A = a;
  }

  sort() {
    this._sorting(this.A);
    return this.A;
  }
}

export default Bubblesort;