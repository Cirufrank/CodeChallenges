/*The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input! */

function duplicateEncode(word){
    let currentWord = word.toLowerCase();
    let arrayOfCharacters = currentWord.split("");
  let newString = "";
    for (let i = 0; i < word.length; i += 1) {
      let currentCharacter = arrayOfCharacters[i];
      let occurencesOfCharacter = arrayOfCharacters.filter
      (char => char === currentCharacter).length;
      if (occurencesOfCharacter === 1) {
        newString += "(";
      } else {
        newString += ")";
      }
    }
  
  return newString;
}

/*const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Duplicate Encoder", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(duplicateEncode("din"),"(((");
    assert.strictEqual(duplicateEncode("recede"),"()()()");
    assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
    assert.strictEqual(duplicateEncode("(( @"),"))((");
  });
});
 */