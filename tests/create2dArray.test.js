// Import fucntion.

import { create2dArray } from "../js/create2dArray";

test("The function should return a matrix and have length of 6 (rows).", () => {
  expect(create2dArray(6, 5)).toHaveLength(6);
});
