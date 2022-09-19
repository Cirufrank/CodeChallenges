/*

Instructions:

Inspired by the Fold an Array kata. This one is sort of similar but a little different.

Task
You will receive an array as parameter that contains 1 or more integers and a number n.

Here is a little visualization of the process:

Step 1: Split the array in two:

[1, 2, 5, 7, 2, 3, 5, 7, 8]
      /            \
[1, 2, 5, 7]    [2, 3, 5, 7, 8]
Step 2: Put the arrays on top of each other:

   [1, 2, 5, 7]
[2, 3, 5, 7, 8]
Step 3: Add them together:

[2, 4, 7, 12, 15]
Repeat the above steps n times or until there is only one number left, and then return the array.

Example
Input: arr=[4, 2, 5, 3, 2, 5, 7], n=2


Round 1
-------
step 1: [4, 2, 5]  [3, 2, 5, 7]

step 2:    [4, 2, 5]
        [3, 2, 5, 7]

step 3: [3, 6, 7, 12]


Round 2
-------
step 1: [3, 6]  [7, 12]

step 2:  [3,  6]
         [7, 12]

step 3: [10, 18]


Result: [10, 18]

*/

function splitAndAdd(arr, n) {
    while (n > 0) {
      if (arr.length === 1) return arr;
      const firstArrEndingIndex = Math.floor(arr.length / 2);
      const arrBeginning = arr.slice(0, firstArrEndingIndex);
      const arrEnding = arr.slice(firstArrEndingIndex);
      for (let index = arrEnding.length - 1; index >= 0; index -= 1) {
        const numToAdd = arrBeginning.pop();
        if (numToAdd) arrEnding[index] += numToAdd;
      }
      arr = arrEnding;
      n -= 1;
    }
    return arr;
  }

/*

Tests:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", function() {
  
assert.deepEqual(splitAndAdd([1,2,3,4,5], 2), [5,10])
assert.deepEqual(splitAndAdd([1,2,3,4,5], 3), [15])
assert.deepEqual(splitAndAdd([15], 3), [15])
assert.deepEqual(splitAndAdd([32,45,43,23,54,23,54,34], 2), [183, 125])
assert.deepEqual(splitAndAdd([32,45,43,23,54,23,54,34], 0), [32,45,43,23,54,23,54,34])
assert.deepEqual(splitAndAdd([3,234,25,345,45,34,234,235,345], 3), [305, 1195])
assert.deepEqual(splitAndAdd([3,234,25,345,45,34,234,235,345,34,534,45,645,645,645,4656,45,3], 4), [1040, 7712])
assert.deepEqual(splitAndAdd([23,345,345,345,34536,567,568,6,34536,54,7546,456], 20), [79327])


});

*/