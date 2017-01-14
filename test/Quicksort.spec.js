import Quicksort from '../lib/Quicksort';
import { expect } from 'chai';

describe('Quicksort testing', () => {

  it('sort array', () => {
    let A = [3, 2, 8, 4, 11, 1];
    Quicksort(A, 0, A.length - 1);

    expect(A).to.deep.equal([1, 2, 3, 4, 8, 11]);
  });

});