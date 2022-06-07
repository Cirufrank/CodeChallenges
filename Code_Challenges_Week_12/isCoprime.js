/*

Instructions:

Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

The inputs will always be two positive integers between 2 and 99.

Examples
20 and 27:

Factors of 20: 1, 2, 4, 5, 10, 20
Factors of 27: 1, 3, 9, 27
Greatest shared factor: 1
Result: 20 and 27 are coprime
12 and 39:

Factors of 12: 1, 2, 3, 4, 6, 12
Factors of 39: 1, 3, 13, 39
Greatest shared factor: 3
Result: 12 and 39 are not coprimes

*/

function isCoprime(x, y) {
    let factorsOfX = [];
    let factorsOfY = [];
    
    for (let i = 1; i <= x; i += 1) {
      if (x % i === 0) factorsOfX.push(i);
    }
    for (let i = 1; i <= y; i += 1) {
      if (y % i === 0) factorsOfY.push(i);
    }
    
    let commonFactors = [];
    factorsOfX.forEach(factor => {
      if (factorsOfY.includes(factor)) commonFactors.push(factor);
    });
    
    
    return Math.max(...commonFactors) === 1;
  }

/*

Tests:

const chai = require("chai")
const assert = chai.assert

describe("Coprime numbers", function() {
  it("should test for coprimality", function() {
    assert.equal(isCoprime(20, 27), true, 'isCoprime(20, 27)')
    assert.equal(isCoprime(12, 39), false, 'isCoprime(12, 39)')
  })
})

*/