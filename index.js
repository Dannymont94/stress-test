const Benchmark = require('benchmark');
const { linearSearch, binarySearch } = require('./search');
const { bubbleSort, quickSort } = require('./sort');

const searchNumbers = [];
for (let i = 1; i <= 1000000; i++) {
  // populate the array with the numbers 1 through 1,000,000
  searchNumbers.push(i);
}

// grab the last number in the array as the number we want to find
const target = searchNumbers[searchNumbers.length - 1];

const sortNumbers = [];
for (let i = 0; i < 10000; i++) {
  sortNumbers.push(Math.floor(Math.random() * 10000) + 1);  
}

const suite = new Benchmark.Suite;

suite
  .add('linear search', function() {
    linearSearch(searchNumbers, target);
  })
  .add('binary search', function() {
    binarySearch(searchNumbers, target, 0, searchNumbers.length - 1);
  })
  .add('bubble sort', function() {
    const testArray = [...sortNumbers];
    bubbleSort(testArray);
  })
  .add('quick sort', function() {
    const testArray = [...sortNumbers];
    quickSort(testArray);
  })
  .on('complete', function() {
    // print test's name and average time in milliseconds
    this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean * 1000} milliseconds.`));
  })
  .run();

