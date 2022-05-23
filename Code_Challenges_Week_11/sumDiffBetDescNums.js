/*

Instructions:

Your task is to sum the differences between consecutive pairs in the array in descending order.

For example:

[2, 1, 10]  ->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 ( Nothing in Haskell ).

*/

function sumOfDifferences(arr) {
    arr.sort((a, b) => a - b)
    let differencesArray = [];
    for (let i = 0; i < arr.length - 1; i += 1) {
      differencesArray.push(Math.abs(arr[i] - arr[i + 1]));
    }
    return differencesArray.reduce(((acc, c) => acc + c), 0);
  }

/*

Tests:

describe("sumOfDifferences([1, 2, 10]", function() {
  Test.assertEquals(sumOfDifferences([1, 2, 10]), 9);
});

describe("sumOfDifferences([-3, -2, -1])", function() {
  Test.assertEquals(sumOfDifferences([-3, -2, -1]), 2);
});

*/