// // Linear Search
// const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

// function findIndex(num) {
//   for (let i = 0; i < data.length; i++) {
//     if (data[i] === num) {
//       console.log(`${num} found at index ${i}`);
//       return;
//     }
//   }
// }

// findIndex(99);

// // Binary Search first pass
// const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

// function binarySearch(arr, num) {
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.floor((left + right) / 2);

//   if (num === arr[middle]) {
//     return 'found it';
//   } else if (num < arr[middle]) {
//     right = middle -1 ;
//     return `bring right down to ${right}`;
//   } else if (num > arr[middle]) {
//     left = middle + 1;
//     return `bring left up to ${left}`;
//   }
// }

// console.log(binarySearch(data, 71));

// // Binary Search full
const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

function binarySearch(arr, num, left, right) {
  let middle = Math.floor((left + right) / 2);

  // range overlapped, so never found number
  if (left > right) {
    return -1;
  } else if (num === arr[middle]) {
    return middle;
  } else if (num < arr[middle]) {
    // call again with a new right value
    return binarySearch(arr, num, left, middle - 1);
  } else {
    // call again with a new left value
    return binarySearch(arr, num, middle + 1, right);
  }
}

console.log(binarySearch(data, 38, 0, data.length - 1));