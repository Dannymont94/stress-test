// Linear Search
function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }

  return -1;
}

// Binary Search
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

module.exports = { linearSearch, binarySearch };