import Quicksort from '../lib/Quicksort';
import { expect } from 'chai';

describe('Quicksort testing', () => {

  it('sort array', () => {
    let res = new Quicksort([3, 2, 8, 4, 11, 1]).sort();

    expect(res).to.deep.equal([1, 2, 3, 4, 8, 11]);
  });

});