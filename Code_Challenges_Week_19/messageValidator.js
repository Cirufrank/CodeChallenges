/*

Tests:

n this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, and then compare the numbers with the number of characters in the following substring.

For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true.

Notes:

Messages are composed of only letters and digits
Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
If the message is an empty string, you should return true

*/

function isAValidMessage(message){
    if (message.length === 0) return true
    if (Number(message[0]) != message[0] || Number(message[message.length - 1]) == message[message.length - 1]) return false;
    const numAndSubStringArray = [''];
    let numAndSubStringPosition = 0;
    for (let position = 0; position < message.length; position += 1) {
      let currentCharOrDig = message[position];
      let prevCharOrDig = message[position - 1] || null;
      if (position === 0 || currentCharOrDig != Number(currentCharOrDig)) {
        numAndSubStringArray[numAndSubStringPosition] += currentCharOrDig;
      } else{
        if (prevCharOrDig && prevCharOrDig == Number(prevCharOrDig)) {
          numAndSubStringArray[numAndSubStringPosition] += currentCharOrDig;
        } else {
          numAndSubStringPosition += 1;
          numAndSubStringArray[numAndSubStringPosition] = currentCharOrDig;
        }
      }
    }
    
    for (let index = 0; index < numAndSubStringArray.length; index += 1) {
      const currentSubString = numAndSubStringArray[index];
      let numOfChars = '';
      let subString = '';
      let position = 0;
      while(Number(currentSubString[position]) == currentSubString[position]) {
        let currentNum = currentSubString[position];
        numOfChars += currentNum;
        position += 1
      }
      subString = currentSubString.slice(numOfChars.length);
      numOfChars = Number(numOfChars);
      if (numOfChars !== subString.length) return false
    }
    return true;
  }

/*

Tests:

describe("Solution", function() {
  const chai = require("chai");
  const assert = chai.assert;
  
  it("test1", function() {
    assert.equal(isAValidMessage("3hey5hello2hi"), true);
  });
  
  it("test2", function() {
    assert.equal(isAValidMessage("4code13hellocodewars"), true);
  });
  
  it("test3", function() {
    assert.equal(isAValidMessage("3hey5hello2hi5"), false);
  });
  
  it("test4", function() {
    assert.equal(isAValidMessage("code4hello5"), false);
  });
  
  it("test5", function() {
    assert.equal(isAValidMessage("1a2bb3ccc4dddd5eeeee"), true);
  });
  
  it("test6", function() {
    assert.equal(isAValidMessage(""), true);
  });
  
});
describe("Solution", function() {
  const chai = require("chai");
  const assert = chai.assert;
  
  it("test1", function() {
    assert.equal(isAValidMessage("3hey5hello2hi"), true);
  });
  
  it("test2", function() {
    assert.equal(isAValidMessage("4code13hellocodewars"), true);
  });
  
  it("test3", function() {
    assert.equal(isAValidMessage("3hey5hello2hi5"), false);
  });
  
  it("test4", function() {
    assert.equal(isAValidMessage("code4hello5"), false);
  });
  
  it("test5", function() {
    assert.equal(isAValidMessage("1a2bb3ccc4dddd5eeeee"), true);
  });
  
  it("test6", function() {
    assert.equal(isAValidMessage(""), true);
  });
  
});

*/