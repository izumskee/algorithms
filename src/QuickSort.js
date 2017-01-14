const QuickSort = (A, p, r) => {
  if (r <= p) return;

  let q = Partition(A, p, r);

  QuickSort(A, p, q - 1);
  QuickSort(A, q + 1, r);
};

const Partition = (A, p, r) => {
  let x = A[r];
  let i = p - 1;

  for (let j = p; j <= r - 1; j++) {
    if (A[j] <= x) {
      i++;
      swap(A, i, j);
    }
  }

  swap(A, i + 1, r);

  return i + 1;
};

const swap = (array, indexA, indexB) => {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
};

export default QuickSort;