"use strict";

function create2dArray(rows = 6, cols = 5) {
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

function iterateArray(rows, cols, startRow, startCol, direction) {
  const matrix = create2dArray(rows, cols);
  console.log(matrix);
}

iterateArray();
