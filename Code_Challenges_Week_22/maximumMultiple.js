/*

Instructions:

Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .
It's guaranteed that a divisor is Found .
Input >> Output Examples
maxMultiple (2,7) ==> return (6)
Explanation:
(6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

maxMultiple (10,50)  ==> return (50)
Explanation:
(50) is divisible by (10) , (50) is less than or equal to bound (50) , and (50) is > 0 .*

maxMultiple (37,200) ==> return (185)
Explanation:
(185) is divisible by (37) , (185) is less than or equal to bound (200) , and (185) is > 0 .

*/

function maxMultiple(divisor, bound){
    let largestNum = bound
    while(largestNum % divisor !== 0) {
      largestNum -= 1;
    }
    return largestNum;
  }

/*

Tests:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(maxMultiple(2,7),6);
    assert.strictEqual(maxMultiple(3,10),9);
    assert.strictEqual(maxMultiple(7,17),14);
    assert.strictEqual(maxMultiple(10,50),50);
    assert.strictEqual(maxMultiple(37,200),185);
    assert.strictEqual(maxMultiple(7,100),98);
  });
})

*/