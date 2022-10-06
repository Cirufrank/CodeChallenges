/*

Instructions:

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

*/

function cleanString(s) {
    const stack = s.split("");
    const newString = [];
    while(stack.length !== 0) {
      const currentChar = stack.shift();
      if (currentChar === "#") {
        newString.pop();
        continue;
      }
      newString.push(currentChar);
    }
    return newString.join("")
  }

/*

Tests:

const {assert} = require('chai');

describe("cleanString", () => {
  it("should work correctly", () => {
    assert.strictEqual(cleanString('abc#d##c'), 'ac');
    assert.strictEqual(cleanString('abc####d##c#'), '');
  });
});

*/