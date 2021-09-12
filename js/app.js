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

function iterateArray(
  rows = 6,
  cols = 5,
  startRow = 4,
  startCol = 2,
  direction = "counter clockwise"
) {
  const matrix = create2dArray(rows, cols),
    iteratedArray = [];
  let startRowFix = startRow - 1,
    startColFix = startCol - 1;

  console.log(matrix);

  if (direction === "counter clockwise") {
    while (startRowFix < rows && startColFix < cols) {
      let value;
      let i;

      for (i = startColFix; i < cols; i++) {
        value = matrix[startRowFix][i];
        iteratedArray.push(value);
      }
      startRowFix++;

      for (i = startRowFix; i < rows; i++) {
        value = matrix[i][cols - 1];
        iteratedArray.push(value);
      }
      cols--;

      if (startRowFix < rows) {
        for (i = cols - 1; i >= startColFix; i--) {
          value = matrix[rows - 1][i];
          iteratedArray.push(value);
        }
        rows--;
      }

      if (startColFix < cols) {
        for (i = rows - 1; i >= startRowFix; i--) {
          value = matrix[i][startColFix];
          iteratedArray.push(value);
        }
        startColFix++;
      }
    }
    console.log(iteratedArray);
  }
}

iterateArray();
