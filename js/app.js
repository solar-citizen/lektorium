// --- --- Task #1 --- --- //

// Import modules:
import { create2dArray } from "./create2dArray.js";

// First step direction variables.
const firstStepDirectionLeft = "left";
const firstStepDirectionRight = "right";

function iterate2dArraySpirally(
  rows = 6,
  cols = 5,
  startingRow = 4,
  startingCol = 2,
  firstStepDirection = firstStepDirectionLeft
) {
  // Variables to store transformed
  // initial point input data to indexes.
  let startingRowIndex = startingRow - 1;
  let startingColIndex = startingCol - 1;

  // Variable to store result of
  // create2dArray function.
  let matrix;
  // Calculate all elements of matrix.
  const matrixSize = rows * cols;
  // Create output array.
  const spiralArray = [];

  // Variable to store a number of steps
  // required to move in certain direction.
  let step = 1;

  // Steps directions variables.
  const stepToLeft = "left";
  const stepToTop = "top";
  const stepToRight = "right";
  const stepToBottom = "bottom";

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

  // Check for valid rows and cols values.
  if (rows < 2 && cols < 2) {
    throw new Error(
      `Ivalid number of rows: ${rows} and columns: ${cols}. To build matrix use number 2 or more.`
    );
  } else if (rows < 2) {
    throw new Error(
      `Ivalid number of rows: ${rows}. To build matrix use number 2 or more.`
    );
  } else if (cols < 2) {
    throw new Error(
      `Ivalid number of columns: ${cols}. To build matrix use number 2 or more.`
    );
  } else {
    // Create matrix by using imported function.
    matrix = create2dArray(rows, cols);
  }

  // Check for valid startingRow and startingCol values.
  if (startingRow > rows && startingCol > cols) {
    throw new Error(
      `
        Ivalid startingRow value: ${startingRow} and startingCol value: ${startingCol}. 
        It must be less than rows value: ${rows} and columns value: ${cols}.
      `
    );
  } else if (startingRow > rows) {
    throw new Error(
      `Ivalid startingRow value: ${startingRow}. It must be less than rows value: ${rows}. `
    );
  } else if (startingCol > cols) {
    throw new Error(
      `Ivalid startingCol value: ${startingCol}. It must be less than cols value: ${cols}. `
    );
  } else {
    // Display input 2d array.
    console.log(matrix);
  }

  // Setting initial point.
  spiralArray.push(matrix[startingRowIndex][startingColIndex]);

  // 1 iteration = 1 pass of the square / 1 turn of the spiral.
  while (spiralArray.length < matrixSize) {
    let i, value;

    // If first step to left:
    if (firstStepDirection === firstStepDirectionLeft) {
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

    // If first step to right:
    if (firstStepDirection === firstStepDirectionRight) {
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

  // Display and return output array.
  console.log(spiralArray);
  return spiralArray;
}

iterate2dArraySpirally();

// Export main function and
// first step variables.
export {
  firstStepDirectionLeft,
  firstStepDirectionRight,
  iterate2dArraySpirally,
};
