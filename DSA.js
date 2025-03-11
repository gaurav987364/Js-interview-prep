//! Sorting algorithm in js;

// 1. Bubble sort,
//?Bubble sort is one of the simplest sorting algorithms, and it works by repeatedly stepping through the list, comparing adjacent items, and swapping them if they are in the wrong order. This process repeats until the list is sorted.

// 2. Insertion sort,
//?Insertion sort is another simple sorting algorithm, which works by dividing the array into a sorted and an unsorted part. The algorithm repeatedly takes the next element from the unsorted part and inserts it into the correct position in the sorted part.
// 3. Selection sort,
// 4. Quick sort,
// 5. Merge sort,
// 6. Heap sort.
function BubbleSorting(arr){
    let lenthg = arr.length;
    for (let i = 0; i < lenthg; i++) {
        for (let j = 0; j < lenthg - 1; j++) {
            // > means ascending order
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        
    }
    return arr;
};

let arr = [5, 3, 8, 2, 1, 9, 4, 7, 6];
console.log(BubbleSorting(arr)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// 2. Insertion sort
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
  
      // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
  
// Example usage
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", insertionSort(array));
