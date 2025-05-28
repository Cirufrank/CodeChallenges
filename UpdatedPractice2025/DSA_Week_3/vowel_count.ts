// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

export class Kata {
    static getCount(str: string): number {
      const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
      let count: number = 0;
      
      for(const char of str) {
        if (vowels.includes(char)) {
          count += 1
        }
      }
      return count;
    }
  }

// Time complexity: O(n ^ 2)
// Space complexity: O(1)

// Tests

// import solution = require('./solution');
// import {assert} from "chai";

// describe("getCount", function(){
//     it ("should pass a sample test", function(){
//         assert.strictEqual(solution.Kata.getCount("abracadabra"), 5)
//     });
// });