/*

Instructions:

Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
* 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
* 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

*/

function oddCount(n){
    let resultArray = [];
    for (let i = 1; i < n; i += 1) {
      if (i % 2 !== 0) resultArray.push(i);
    }
    return resultArray.length
  }
  
/*

Tests:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
   it("Testing for fixed tests", () => {
    assert.strictEqual(oddCount(15), 7, "Oops! Wrong.");
    assert.strictEqual(oddCount(15023), 7511, "Oops! Wrong.");
  });
});

 */