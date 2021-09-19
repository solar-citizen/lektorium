"use strict";

// Direction variables.
const directionLeft = "left";
const directionRight = "right";

// Step variables.
const stepToLeft = "left";
const stepToTop = "top";
const stepToRight = "right";
const stepToBottom = "bottom";

// Function, which creates matrix.
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
  firstStepDirection = directionLeft
) {
  // Create matrix by using pre-built function.
  const matrix = create2dArray(rows, cols);
  // Calculate all elements.
  const matrixSize = rows * cols;
  // Create output array.
  const spiralArray = [];
  // Function to iterate in certain direction.
  const iterateStepsToDirection = (i, value, stepToDirection) => {
    for (i = step; i > 0; i--) {
      if (stepToDirection === stepToLeft) {
        startingColIndex--;
      } else if (stepToDirection === stepToTop) {
        startingRowIndex--;
      } else if (stepToDirection === stepToRight) {
        startingColIndex++;
      } else if (stepToDirection === stepToBottom) {
        startingRowIndex++;
      }

      value = matrix[startingRowIndex]?.[startingColIndex];
      if (value === undefined) {
        continue;
      } else {
        spiralArray.push(value);
      }
    }
  };
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

    // If first step to right:
    if (firstStepDirection === directionLeft) {
      // TO LEFT
      iterateStepsToDirection(i, value, stepToLeft);

      // TO TOP
      iterateStepsToDirection(i, value, stepToTop);
      step++;

      // TO RIGHT
      iterateStepsToDirection(i, value, stepToRight);

      // TO BOTTOM
      iterateStepsToDirection(i, value, stepToBottom);
      step++;
    }

    // If first step to left:
    if (firstStepDirection === directionRight) {
      // TO RIGHT
      iterateStepsToDirection(i, value, stepToRight);

      // TO BOTTOM
      iterateStepsToDirection(i, value, stepToBottom);
      step++;

      // TO LEFT
      iterateStepsToDirection(i, value, stepToLeft);

      // TO TOP
      iterateStepsToDirection(i, value, stepToTop);
      step++;
    }
  }
  // Display output array.
  console.log(spiralArray);
}

iterate2dArraySpirally();
