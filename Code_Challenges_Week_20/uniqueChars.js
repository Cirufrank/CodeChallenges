/*

Instructions:

Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

*/

function hasUniqueChars(str){
    const visitedChars = [];
    for (let position = 0; position < str.length; position += 1) {
      let currentChar = str[position];
      if (visitedChars.includes(currentChar)) return false;
      visitedChars.push(currentChar);
    }
    return true;
  }

/*

Tests:

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(hasUniqueChars("  nAa"),false) // because there are two spaces ' '
Test.assertEquals(hasUniqueChars("abcdef"),true)
Test.assertEquals(hasUniqueChars("aA"),true) // case - sensitivity
Test.assertEquals(hasUniqueChars("++-"),false) // because there are two '+'

  });
});

*/