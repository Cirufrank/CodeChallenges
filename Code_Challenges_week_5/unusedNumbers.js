/*

Instructions:

Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.

*/

function unusedDigits() {
    arrayOfDigits = [0,1,2,3,4,5,6,7,8,9];
    argumentsArray = [];
    
    for(let i = 0; i < arguments.length; i += 1) {
      argumentsArray.push(arguments[i]);
    }
    
    argumentsArray = argumentsArray.join("").split("").map(num => Number(num));
    
    for (let i = 0 ; i < argumentsArray.length; i += 1) {
      if (arrayOfDigits.includes(argumentsArray[i])) {
        arrayOfDigits = arrayOfDigits.filter(val => val !== argumentsArray[i]);
        console.log(argumentsArray[i])
      }
    }
  
    return arrayOfDigits.join("");
  }



/*

Tests:

const {assert} = require("chai");

it("example tests", () => {
  assert.strictEqual(unusedDigits(12, 34, 56, 78), "09")
  assert.strictEqual(unusedDigits(2015, 8, 26), "3479")
});

*/