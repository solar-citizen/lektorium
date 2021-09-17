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

function iterate2dArraySpirally(
  // rows = 6,
  // cols = 5,
  // startRowInput = 4,
  // startColInput = 2,
  rows = 8,
  cols = 8,
  startRowInput = 4,
  startColInput = 4,
  direction = "left"
) {
  const matrix = create2dArray(rows, cols),
    spiralArray = [];
  let startRow = startRowInput - 1,
    startCol = startColInput - 1;
  let step = 1;

  console.log(matrix);

  while (startRow < rows && startCol < cols) {
    if (direction === "left") {
      // Variable to store value of matrix.
      let value;
      let i;

      // LEFT
      for (i = startCol; i >= startCol - step; --i) {
        value = matrix[startRow][i];
        spiralArray.push(value);
      }
      // startRow--;
      startCol--;
      startRow--;

      // TOP
      for (i = startRow; i > startRow - step; --i) {
        value = matrix[i][startCol];
        spiralArray.push(value);
      }
      startCol++;
      step++;

      // RIGHT
      for (i = startCol; i < startCol + step; i++) {
        value = matrix[startRow][i];
        spiralArray.push(value);
      }
      startCol++;
      startRow++;

      // BOTTOM
      for (i = startRow; i < startRow + step; i++) {
        value = matrix[i][startCol];
        spiralArray.push(value);
      }
      startCol--;
      startRow++;
      step++;
    }
  }
  console.log(spiralArray);
}

iterate2dArraySpirally();
