/*

Instructions:

Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.

*/

function roundToNext5(n){
    if (typeof n !== 'number') {
      return 'Invalid input'
    } else if (n % 5 === 0) {
      return n;
    }
    
    let counter = n + 1;
    while (true) {
      if (counter % 5 === 0) {
        return counter
      }
      
      counter += 1;
    }

    /*
    
    Tests:
    
    const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    [[0,0],[1,5],[-1,0],[-5,-5],[3,5],[5,5],[7,10],[20,20],[39,40],[990,990],[121,125],[555,555]].forEach(
      ([x,exp])=> assert.strictEqual(roundToNext5(x), exp, `Input: ${x}`)
    );
  })
});

*/