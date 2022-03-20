/*
Instructions:

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/


function isIsogram(str){
    let lettersWithRepeat = 0;
    let arrayOfCharacters = str.split("");
    
    for (let i = 0; i < arrayOfCharacters.length; i += 1) {
      let currentCharacter = arrayOfCharacters[i].toLowerCase();
      let currentCharOccurences = arrayOfCharacters.filter(char => char.toLowerCase() === currentCharacter).length;
      if (currentCharOccurences > 1) {
        lettersWithRepeat += 1;
      }
    }
    
    return lettersWithRepeat === 0;
  }

/*
  
Test:
  
  const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual( isIsogram("Dermatoglyphics"), true );
    assert.strictEqual( isIsogram("isogram"), true );
    assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
    assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
    assert.strictEqual( isIsogram("isIsogram"), false );
    assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
  });
});
*/