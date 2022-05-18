/*

Instructions:

Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

Notes:
return an empty array if your array is empty
arrays will only contain numbers so don't worry about checking that

*/

function incrementer(nums) { 
    if (nums.length === 0) return nums;
    
    return nums.map((num, index) => {
      let newNum = num + index + 1;
      return  (10 - (newNum)) <= 0 ? Number(String(newNum).split("").pop()) : num + index + 1
    });
  }

/*

Tests:

const { assert } = require("chai");

describe("Basic Tests", function() {
  it("Testing for []", () => assert.deepEqual(incrementer([]), []));
  it("Testing for [1, 2, 3]", () => assert.deepEqual(incrementer([1, 2, 3]), [2, 4, 6]));
  it("Testing for [4, 6, 7, 1, 3]", () => assert.deepEqual(incrementer([4, 6, 7, 1, 3]), [5, 8, 0, 5, 8]));
  it("Testing for [3, 6, 9, 8, 9]", () => assert.deepEqual(incrementer([3, 6, 9, 8, 9]), [4, 8, 2, 2, 4]));
  it("Testing for [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]", () =>
    assert.deepEqual(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]), [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2]));
});

*/