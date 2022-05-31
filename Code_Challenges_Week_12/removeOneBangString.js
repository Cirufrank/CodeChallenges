/*

Instructions:

Description:
Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

Examples
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"

*/

function remove (string) {
    let indicesOfWordsToRemove = [];
     string.split(" ").forEach((word, index) => {
       if (word.split("").filter((char) => char === '!').length === 1) indicesOfWordsToRemove.push(index)
     });
     
     return string.split(" ").filter((word, index) => !indicesOfWordsToRemove.includes(index)).join(" ")
   }

/*

Tests:

const strictEqual = require("chai").assert.strictEqual;

function doTest(input, expected) {
	const actual = remove(input);
	strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

describe("Basic Tests", function () {
	it("It should works for basic tests", function () {
		doTest("Hi!", "");
		doTest("Hi! Hi!", "");
		doTest("Hi! Hi! Hi!", "");
		doTest("Hi Hi! Hi!", "Hi");
		doTest("Hi! !Hi Hi!", "");
		doTest("Hi! Hi!! Hi!", "Hi!!");
		doTest("Hi! !Hi! Hi!", "!Hi!");
	});
});

*/