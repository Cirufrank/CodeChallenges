// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

export class Kata {
    static squareDigits(num: number): number {
     return Number(String(num).split("").map(val => Math.pow(Number(val),2)).join(""));
    }
}

// Time complexity: O(n);
// Space complexity: O(n);

// Tests

// import solution = require('./solution');
// import {assert} from "chai";

// describe("squareDigits", function() {
//   it("should pass a sample test", function() {
//     assert.strictEqual(solution.Kata.squareDigits(9119), 811181);
//     assert.strictEqual(solution.Kata.squareDigits(0), 0);
//   });
// });