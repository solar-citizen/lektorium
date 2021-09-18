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
  rows = 6,
  cols = 5,
  startingRow = 4,
  startingCol = 2,
  direction = "left"
) {
  const matrix = create2dArray(rows, cols),
    spiralArray = [],
    matrixSize = rows * cols;

  let startingRowIndex = startingRow - 1,
    startingColIndex = startingCol - 1,
    step = 1;

  console.log(matrix);

  // Setting initial point.
  spiralArray.push(matrix[startingRowIndex][startingColIndex]);

  // 1 iteration = 1 pass of the square / 1 turn of the spiral.
  while (spiralArray.length < matrixSize) {
    let i, value;

    // Clockwise spiral
    if (direction === "left") {
      // TO LEFT
      for (i = step; i > 0; i--) {
        startingColIndex--;
        value = matrix[startingRowIndex][startingColIndex];
        if (value === undefined) {
          continue;
        } else {
          spiralArray.push(value);
        }
      }

      // TO TOP
      for (i = step; i > 0; i--) {
        startingRowIndex--;
        value = matrix[startingRowIndex][startingColIndex];
        if (value === undefined) {
          continue;
        } else {
          spiralArray.push(value);
        }
      }
      step++;

      // TO RIGHT
      for (i = step; i > 0; i--) {
        startingColIndex++;
        value = matrix[startingRowIndex][startingColIndex];
        if (value === undefined) {
          continue;
        } else {
          spiralArray.push(value);
        }
      }

      // TO BOTTOM
      for (i = step; i > 0; i--) {
        startingRowIndex++;
        value = matrix[startingRowIndex]?.[startingColIndex];
        if (value === undefined) {
          continue;
        } else {
          spiralArray.push(value);
        }
      }
      step++;
    }

    // Counterclockwise spiral
    if (direction === "right") {
      console.log("Probably later...");
      break;
    }
  }
  console.log(spiralArray);
}

iterate2dArraySpirally();
