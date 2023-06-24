/*

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
Link to Jaden's former Twitter account @officialjaden via archive.org

*/

const FIRST_INDEX = 0;
String.prototype.toJadenCase = function () {
  //1. Split the string into an array
  //2. If a first character isn't capitalized then re-assign the current word to a capitilized version
  //3. Join the array into a string with each element separated by a space
  //4. Return the restuling string
  
  const strArray = this.split(" ");
  for (let index = 0; index < strArray.length; index += 1) {
    let curWord = strArray[index]
    const firstCharOfCurWord = curWord[FIRST_INDEX]
    if (firstCharOfCurWord !== firstCharOfCurWord.toUpperCase()) {
      curWord= firstCharOfCurWord.toUpperCase() + curWord.slice(FIRST_INDEX + 1)
    }
    strArray[index] = curWord
  }
  
  return strArray.join(" ");
};

/*

Tests:

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
var str = "How can mirrors be real if our eyes aren't real";
Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");

  });
});

*/