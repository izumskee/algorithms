import Mergesort from '../lib/Mergesort';
import assert from 'assert';

describe('Mergesort', () => {

  it('should sort', () => {
    const MSG = 'should be sorted';
    const actual = new Quicksort([4, 3, 1, 7, 2, 5, 6, 9, 8]).sort();
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    assert.deepEqual(actual, expected, MSG);
  });

  it('should sort an array with duplicated items', () => {
    const MSG = 'should be properly sorted';
    const actual = new Quicksort([4, 5, 5, 1, 3, 8, 6, 2, 9, 7, 6, 0]).sort();
    const expected = [0, 1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9];

    assert.deepEqual(actual, expected, MSG);
  });

  it('should sort an array with negative items', () => {
    const MSG = 'should be properly sorted with negative items';
    const actual = new Quicksort([5, -1, 6, -10, 3, 9, 0, 8, -2]).sort();
    const expected = [-10, -2, -1, 0, 3, 5, 6, 8, 9];

    assert.deepEqual(actual, expected, MSG);
  });

});