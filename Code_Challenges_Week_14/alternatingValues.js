/*

Instructions:

Given a number n and two values firstValue and secondValue, build an array of size n filled with firstValue and secondValue alternating.

for input:                5, true, false
expected result would be: [true, false, true, false, true]

*/

function alternate(n, firstValue, secondValue){
    let result = [];
    while (n  > 0) {
      let pastValue = result[result.length - 1];
      if (pastValue === firstValue) {
        result.push(secondValue)
      } else {
        result.push(firstValue)
      }
      
      n -= 1;
     }
    
    return result
  }

  /*
  
  Tests:
  
  const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Test", () => {
  it('small arrays', () => {
    assert.deepEqual(alternate(5, true, false), [true, false, true, false, true])
  });
  
  it('larger arrays', () => {
    assert.deepEqual(alternate(20, 'blue', 'red'), ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red'])
  });
  
  it('with 0', () => {
    assert.deepEqual(alternate(0, "lemons", "apples"), [])
  });
});

*/