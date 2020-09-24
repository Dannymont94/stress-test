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
//     right = middle;
//     return `bring right down to ${right}`;
//   } else if (num > arr[middle]) {
//     left = middle + 1;
//     return `bring left up to ${left}`;
//   }
// }

// console.log(binarySearch(data, 71));