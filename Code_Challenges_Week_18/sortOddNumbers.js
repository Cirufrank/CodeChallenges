/*

Instructions:

Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 

*/

function sortArray(array) {
    let evenNumbersIndices= [];
    let evenNumbers = []
    
    array.forEach((val, index) => {
      if (val % 2 === 0) {
        evenNumbers.push(val);
        evenNumbersIndices.push(index);
      }
    });
    
    let result = array.filter(num => num % 2 !== 0);
    result.sort((a,b) => a - b);
    while(evenNumbers.length) {
      let numPosition = evenNumbersIndices.shift();
      let num = evenNumbers.shift();
      result.splice(numPosition, 0, num);
    }
    
    return result
     
    
  }

/*

Tests:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  it("should pass some sample tests", () => {
    assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
    assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
    assert.deepEqual(sortArray([]),[]);
  });
});

*/