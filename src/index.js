import QuickSort from './QuickSort';
import shuffleArray from './shuffleArray';

const A = [4, 8, 3, 9, 12, 15, 11, 1, 19, 17, 23];
shuffleArray(A); // for performance
QuickSort(A, 0, A.length - 1);

console.log('QuickSort >', A);