/*

Instructions:

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/


//O(n) time complexity approach where n is the length of the string
function count (string) {  
    if (string === "") return {};
    const charsAndOccurences = {};
    for (let position = 0; position < string.length; position += 1) {
      const currentChar = string[position];
      if (!charsAndOccurences[currentChar]) {
        charsAndOccurences[currentChar] = 1;
      } else {
        const currentNumOfOccurences = charsAndOccurences[currentChar];
        charsAndOccurences[currentChar] = currentNumOfOccurences + 1;
      }
    }
    return charsAndOccurences;
  }

  //O(n^2) time complexity approach where the first n is the number of unique characters in a string, and the second n is the total number of characters in the string (since an anonymous function will be called on each characrter within a string when using the filter method)

  function count (string) {  
    if (string === "") return {};
    const charsAndOccurences = {};
    const charsArray = string.split("");
    const uniqueChars = new Set(charsArray);
    uniqueChars.forEach(char => {
      charsAndOccurences[char] = charsArray.filter(currentChar => currentChar === char).length;
    })
    return charsAndOccurences;
  }
  
/*



Tests:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("should pass sample tests", () => {
    assert.deepEqual(count("aba"), { a: 2, b: 1 }); 
    assert.deepEqual(count(""), {});    
  });
});

*/