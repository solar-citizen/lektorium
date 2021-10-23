// Import main function and
// first step variables.
import {
  firstStepDirectionLeft,
  firstStepDirectionRight,
  iterate2dArraySpirally,
} from "../js/task-1/app.js";
// from "../js/app.js";

test("The function should iterate a matrix spirally and return an array with a strict sequence of numbers. In this case matrix has 6 rows and 5 columns, iteration starts with step to left from row 4 and col 2. Desired output is [17, 16, 11, 12, 13, 18, 23, 22, 21, 6, 7, 8, 9, 14, 19, 24, 29, 28, 27, 26, 1, 2, 3, 4, 5, 10, 15, 20, 25, 30]", () => {
  expect(
    iterate2dArraySpirally(6, 5, 4, 2, firstStepDirectionLeft)
  ).toStrictEqual([
    17, 16, 11, 12, 13, 18, 23, 22, 21, 6, 7, 8, 9, 14, 19, 24, 29, 28, 27, 26,
    1, 2, 3, 4, 5, 10, 15, 20, 25, 30,
  ]);
});

test("The function should iterate a matrix spirally and return an array with a strict sequence of numbers. In this case matrix has 6 rows and 5 columns, iteration starts with step to right from row 4 and col 2. Desired output is [17, 18, 23, 22, 21, 16, 11, 12, 13, 14, 19, 24, 29, 28, 27, 26, 6, 7, 8, 9, 10, 15, 20, 25, 30, 1, 2, 3, 4, 5]", () => {
  expect(
    iterate2dArraySpirally(6, 5, 4, 2, firstStepDirectionRight)
  ).toStrictEqual([
    17, 18, 23, 22, 21, 16, 11, 12, 13, 14, 19, 24, 29, 28, 27, 26, 6, 7, 8, 9,
    10, 15, 20, 25, 30, 1, 2, 3, 4, 5,
  ]);
});
