/*

Instructions:

DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

*should work also on Leading and Trailing Spaces and caps.

"apple"            => "Apple"
"apple of banana"  => "Apple of Banana"
"one   space"      => "One   Space 
"   space WALK   " => "   Space Walk   " 
Note: you will be provided atleast one word and should take string as input and return string as output.

*/

function dropCap(n) {
    return n.split(" ").map(word => (word.trim().length > 2) ? word.trim()[0].toUpperCase() + word.trim().slice(1).toLowerCase() : word.trim().toLowerCase()).join(" ");
  }

/*

Tests:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", () => {
  it("Tests", () => {
    assert.strictEqual(dropCap('Apple Banana'),"Apple Banana");
    assert.strictEqual(dropCap('Apple'),"Apple");
    assert.strictEqual(dropCap(''),"");
    assert.strictEqual(dropCap('of'),"of");
    assert.strictEqual(dropCap('Revelation of the contents outraged American public opinion, and helped generate'),"Revelation of The Contents Outraged American Public Opinion, And Helped Generate");
    assert.strictEqual(dropCap('more  than    one space between words'),"More  Than    One Space Between Words")
    assert.strictEqual(dropCap('  leading spaces'),"  Leading Spaces")
    assert.strictEqual(dropCap('trailing spaces   '),"Trailing Spaces   ")
    assert.
    strictEqual(dropCap('ALL CAPS CRAZINESS'),"All Caps Craziness")
    assert.strictEqual(dropCap('rAnDoM CaPs CrAzInEsS'),"Random Caps Craziness")
  })
})
*/