/*

Instructions:

Don't give me five!
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!

I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!

*/

function dontGiveMeFive(start, end)
{ let totalNums = end - start;
  let arrayOfNums = [];
 for (let i = start; i <= end; i += 1) {
   arrayOfNums.push(i);
 }
 
  return arrayOfNums.filter(num => !String(num).split("").includes("5")).length;
}

/*

Tests:

describe("KataTests", function(){
  it("exampleTests", function(){
    Test.assertEquals(dontGiveMeFive(1,9), 8);
    Test.assertEquals(dontGiveMeFive(4,17), 12);
  });
});

*/

function vowelIndices(word){
    let arrayOfVowelIndices = [];
   let vowels = ["a", "e", "i", "o", "u"];
    
    word.split("").forEach((char, index) => {
      if (vowels.includes(char)) arrayOfVowelIndices.push(index + 1);
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