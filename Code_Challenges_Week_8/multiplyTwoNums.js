/*

Instructions:

Implement a function which multiplies two numbers.

*/

function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') return
    
    return num1 * num2; 
  }

/*

Tests:

const chai = require('chai');
const assert = chai.assert;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(multiply(2, 3), 6);
  });
});


*/