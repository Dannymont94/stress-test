function bubbleSort(arr) {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      // compare arr[i] to arr[i+1]
      if (arr[i] > arr[i+1]) {
        // swap places if needed using a third temp variable
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;

        sorted = false;
      }
      // if swapped, set sorted = false to run while loop again
    }
  }

  return arr;
}

function quickSort(arr) {
  // don't sort a small array; just return it immediately
  if (arr.length <= 1) {
    return arr;
  }

  // use first index as the pivot point
  const pivot = arr[0];
  const left = [];
  const right = [];

  // start at index 1 to ignore pivot
  for (let i = 1; i < arr.length; i++) {
    // push into different arrays based on value compared to the pivot
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // merge and return
  return quickSort(left).concat(pivot, quickSort(right));
}

module.exports = { bubbleSort, quickSort };