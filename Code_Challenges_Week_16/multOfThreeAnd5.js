/*

Instructions:

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)

*/

function solution(number){
    if (number < 0 || number < 3) return 0;
    
    let count = 0;
    let multOfThree = 3;
    let multOfFive = 5;
    
    while(multOfThree < number || multOfFive < number) {
      if (multOfThree % 5 !== 0) count += multOfThree;
      
      if (multOfFive < number) {
        count += multOfFive
      }
      
      multOfThree += 3;
      multOfFive +=5;
      
    }
    
    return count;
  }

/*

Tests:

const { assert } = require("chai")

function test(n, expected) {
  let actual = solution(n)
  it(`Expected ${expected}, got ${actual}`, () => {  
  assert.strictEqual(actual, expected)
    })
}

describe("basic tests", function(){
  test(10,23)
})

*/