"use strict";

function create2dArray(rows, cols) {
  const outputArray = new Array(rows, cols);
  let value = 1;

  // Create rows.
  for (let row = 0; row < rows; row++) {
    outputArray[row] = [];
    // Create columns with values
    // from 1 to rows * cols
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
  // Create matrix by using pre-built function.
  const matrix = create2dArray(rows, cols);
  // Calculate all elements.
  const matrixSize = rows * cols;
  // Create output array.
  const spiralArray = [];
  // Direction variables.
  const directionLeft = "left";
  const directionRight = "right";
  // Variables to store transformed
  // initial point input data to indexes.
  let startingRowIndex = startingRow - 1;
  let startingColIndex = startingCol - 1;
  // Variable to store a number of steps
  // required to move in certain direction.
  let step = 1;

  // Display input 2d array.
  console.log(matrix);

  // Setting initial point.
  spiralArray.push(matrix[startingRowIndex][startingColIndex]);

  // 1 iteration = 1 pass of the square / 1 turn of the spiral.
  while (spiralArray.length < matrixSize) {
    let i, value;

    // Clockwise spiral.
    if (direction === directionLeft) {
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

    // Counterclockwise spiral.
    if (direction === directionRight) {
      console.log("Probably later...");
      break;
    }
  }
  // Display output array.
  console.log(spiralArray);
}

iterate2dArraySpirally();
