// --- --- Task #1 --- --- //

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
  // Function to create a matrix.
  const create2dArray = (rows, cols) => {
    const outputArray = new Array(rows, cols);
    let value = 1;

    // Create rows.
    for (let row = 0; row < rows; row++) {
      outputArray[row] = [];
      // Create columns with values
      // from 1 to (rows * cols)
      for (let col = 0; col < cols; col++) {
        outputArray[row][col] = value++;
      }
    }
    return outputArray;
  };

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

  // Steps directions variables.
  const stepToLeft = "left";
  const stepToTop = "top";
  const stepToRight = "right";
  const stepToBottom = "bottom";

  // Variable to store a number of steps
  // required to move in certain direction.
  let step = 1;

  // Variables to store transformed
  // initial point input data to indexes.
  let startingRowIndex = startingRow - 1;
  let startingColIndex = startingCol - 1;

  // Create matrix by using pre-built function.
  const matrix = create2dArray(rows, cols);
  // Calculate all elements of matrix.
  const matrixSize = rows * cols;
  // Create output array.
  const spiralArray = [];

  // Display input 2d array.
  console.log(matrix);

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
module.exports = {
  iterate2dArraySpirally,
  firstStepDirectionLeft,
  firstStepDirectionRight,
};
