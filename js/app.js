"use strict";

function create2dArray(rows, cols) {
  const outputArray = new Array(rows, cols);
  let value = 1;

  for (let row = 0; row < rows; row++) {
    outputArray[row] = [];

    for (let col = 0; col < cols; col++) {
      outputArray[row][col] = value++;
    }
  }
  return outputArray;
}

console.log(create2dArray(6, 5));
