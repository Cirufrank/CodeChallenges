// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

export function accum(s: string): string {
    let answer: string = "";
    for (let index: number = 0; index < s.length; index += 1) {
      if (index === 0) {
        answer = s[index].toUpperCase()
      } else {
        answer += "-" + s[index].toUpperCase() + (new Array(index).fill(s[index].toLowerCase()).join(""))
      }
    }
    
    return answer;
  }

// Time complexity: O(n^2)
// Space complexity: O(n^2)

// Tests

// import {accum} from './solution';
// import {assert} from "chai";

// describe("Fixed Tests accum", function() {
//   it("Basic tests", function() {
//     assert.strictEqual(
//       accum("ZpglnRxqenU"),
//       "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
//     );
//     assert.strictEqual(
//       accum("NyffsGeyylB"),
//       "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
//     );
//     assert.strictEqual(
//       accum("MjtkuBovqrU"),
//       "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
//     );
//     assert.strictEqual(
//       accum("EvidjUnokmM"),
//       "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
//     );
//     assert.strictEqual(
//       accum("HbideVbxncC"),
//       "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
//     );
//   });
// });
