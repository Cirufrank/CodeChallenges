/*

Instructions:

We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)

*/

function vowelIndices(word){
    let arrayOfVowelIndices = [];
   let vowels = ["a", "e", "i", "o", "u", "y"];
    
    word.split("").forEach((char, index) => {
      if (vowels.includes(char.toLowerCase())) arrayOfVowelIndices.push(index + 1);
      });
    
    return arrayOfVowelIndices;
    }

/*
    
    Tests:
    
    const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", function(){
  it("Test", () => {
    assert.deepEqual(vowelIndices("mmm"), []);
    assert.deepEqual(vowelIndices("apple"), [1,5]);
    assert.deepEqual(vowelIndices("super"), [2,4]);
    assert.deepEqual(vowelIndices("orange"), [1,3,6]);
    assert.deepEqual(vowelIndices("supercalifragilisticexpialidocious"), [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]);
  })
});

*/