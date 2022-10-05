/*

Instructions:

You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'

*/

function insideOut(x){
    const words = x.split(" ");
    words.forEach((word, index) => {
      const beginningOfWord = word.slice(0, Math.floor(word.length / 2));
      const endOfWord = (word.length % 2 === 0) ? word.slice(word.length / 2) : word.slice(Math.ceil(word.length/2));
      const middleChar = (word.length % 2 === 0 ) ? "" : word[Math.floor(word.length/2)];
      const newWord = `${beginningOfWord.split("").reverse().join("")}${middleChar}${endOfWord.split("").reverse().join("")}`;
      words[index] = newWord;
    });
    return words.join(" ");
  }

/*

Tests:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Inside Out Strings", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(insideOut('man i need a taxi up to ubud'), 'man i ende a atix up to budu');
    assert.strictEqual(insideOut('what time are we climbing up the volcano'), 'hwta item are we milcgnib up the lovcona'); 
    assert.strictEqual(insideOut('take me to semynak'), 'atek me to mesykan'); 
  })
});
*/