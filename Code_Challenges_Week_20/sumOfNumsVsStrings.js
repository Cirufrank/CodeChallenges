/*

Instructions:

Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.

*/

function divCon(x){
    return x.filter(element => typeof element === 'number').reduce(((acc, curVal) => acc + curVal),0) - x.filter(element => typeof element === 'string').reduce(((acc, curVal) => Number(acc) + Number(curVal)),0)
  }

/*

Tests:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Divide and Conquer", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(divCon([9, 3, '7', '3']), 2);
    assert.strictEqual(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14); 
    assert.strictEqual(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13); 
  })
});

*/