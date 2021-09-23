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

export { create2dArray };
