const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

function findIndex(num) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === num) {
      console.log(`${num} found at index ${i}`);
      return;
    }
  }
}

findIndex(99);