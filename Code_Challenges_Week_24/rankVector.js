/*

Instructions:

Given an array (or list) of scores, return the array of ranks for each value in the array. The largest value has rank 1, the second largest value has rank 2, and so on. Ties should be handled by assigning the same rank to all tied values. For example:

ranks([9,3,6,10]) = [2,4,3,1]
and

ranks([3,3,3,3,3,5,1]) = [2,2,2,2,2,1,7]
because there is one 1st place value, a five-way tie for 2nd place, and one in 7th place.

*/

function ranks(a) {
    const sortedArray = a.slice().sort((a, b) => b - a);
    const numsAndRanks = new Map();
    sortedArray.forEach((int, index) => {
      if (!numsAndRanks.has(int)) {
        const currentRank = index + 1; 
        numsAndRanks.set(int, currentRank);
      }
    });
    return a.map(num => numsAndRanks.get(num));
  }

  
//Variation

function ranks(a) {
    const sortedArray = a.slice().sort((a, b) => b - a);
    return a.map(num => sortedArray.indexOf(num) + 1);
}

/*

Tests:

const { assert } = require('chai');

const test = (input, expected, message) => {
  it(`[${input}]`, () => {
    assert.deepEqual(ranks(input), expected, message);
  });
}

describe('Basic tests', () => {
  const tests = [
    [[], []],
    [[2], [1]],
    [[2, 2], [1, 1]],
    [[1, 2, 3], [3, 2, 1]],
    [[5, 2, 3, 5, 5, 4, 9, 8, 0], [3, 8, 7, 3, 3, 6, 1, 2, 9]],
  ];

  for (const [input, expected] of tests) {
    test(input, expected);
  }
});

*/