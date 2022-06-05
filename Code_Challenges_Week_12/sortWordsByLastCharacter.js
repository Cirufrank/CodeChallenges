/*

Instructions:

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.

*/

function last(x){
    return x.split(" ").sort((a,b) => {
      lastCharOfA = a[a.length - 1];
      lastCharOfB  = b[b.length - 1];
      if (lastCharOfA < lastCharOfB) return -1;
      else if (lastCharOfA > lastCharOfB) return 1;
      else return 0
    });
  }

/*

Tests:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sort by Last Char", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
    assert.deepEqual(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
    assert.deepEqual(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);    
  })
});

*/