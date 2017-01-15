class Insertionsort {
  constructor(array) {
    this.A = array;
  }

  _getLength() {
    return this.A.length;
  }

  sort() {
    const len = this._getLength();

    for (let j = 1; j < len; j++) {
      let key = this.A[j];
      let i = j - 1;

      while(i >= 0 && this.A[i] > key) {
        this.A[i + 1] = this.A[i];
        i--;
      }

      this.A[i + 1] = key;
    }

    return this.A;
  } 
}

export default Insertionsort;