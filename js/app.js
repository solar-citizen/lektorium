// ******** Test task #1 ******** //

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
    size = rows * cols,
    spiralArray = []; /*
    pushOrPassValue = (value) => {
      if (spiralArray.includes(value)) {
        spiralArray.push(value);
      } else {
        break;
      }
    } */
  let startRow = startRowInput - 1,
    startCol = startColInput - 1;
  let step = 1,
    multiplier = 0;

  console.log(matrix);

  //  while (startRow < rows && startCol < cols)
  while (spiralArray.length < size + 1 || spiralArray.length < 48) {
    // Variable to store value of matrix.
    let value;
    let i;

    if (direction === "left") {
      // LEFT
      if (step === 5) {
        for (i = startCol + 1; i >= startCol - step + multiplier; --i) {
          value = matrix[startRow][i];
          if (spiralArray.includes(value)) {
            break;
          } else {
            spiralArray.push(value);
          }
        }
      } else if (step === 7) {
        for (i = startCol + 2; i >= startCol - step + multiplier + 1; --i) {
          value = matrix[startRow][i];
          if (spiralArray.includes(value)) {
            break;
          } else {
            spiralArray.push(value);
          }
        }
      } else {
        for (i = startCol; i >= startCol - step + multiplier; --i) {
          value = matrix[startRow][i];
          if (spiralArray.includes(value)) {
            break;
          } else {
            spiralArray.push(value);
          }
        }
      }

      startCol--;
      startRow--;

      // TOP
      if (step === 7) {
        for (i = startRow; i > startRow - step; --i) {
          value = matrix[i][startCol - multiplier + 1];
          if (spiralArray.includes(value)) {
            break;
          } else {
            spiralArray.push(value);
          }
        }
      } else {
        for (i = startRow; i > startRow - step; --i) {
          value = matrix[i][startCol - multiplier];
          if (spiralArray.includes(value)) {
            break;
          } else {
            spiralArray.push(value);
          }
        }
      }

      startCol++;
      step++;

      // RIGHT
      for (i = startCol - multiplier; i < startCol + step - multiplier; i++) {
        value = matrix[startRow - multiplier * 2][i];
        if (spiralArray.includes(value)) {
          break;
        } else {
          spiralArray.push(value);
        }
      }
      startCol++;
      startRow++;

      // BOTTOM
      if (step === 4) {
        for (
          i = startRow - multiplier * 2;
          i < startRow + step - multiplier * 2;
          i++
        ) {
          value = matrix[i][startCol + multiplier];
          if (spiralArray.includes(value)) {
            break;
          } else {
            spiralArray.push(value);
          }
        }
      } else if (step === 6) {
        for (i = startRow - multiplier * 2; i < step + 1; i++) {
          value = matrix[i][startCol + multiplier];
          if (spiralArray.includes(value)) {
            break;
          } else {
            spiralArray.push(value);
          }
        }
      } else {
        for (i = startRow - multiplier * 2; i < startRow + step; i++) {
          value = matrix[i][startCol + multiplier];
          if (spiralArray.includes(value)) {
            break;
          } else {
            spiralArray.push(value);
          }
        }
      }

      startCol--;
      startRow++;
      step++;
      multiplier++;
    }
  }
  console.log(spiralArray);
}

iterate2dArraySpirally();
