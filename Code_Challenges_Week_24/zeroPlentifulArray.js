/*

Instructions:

An array is called zero-plentiful if it contains multiple zeros, and every sequence of zeros is at least 4 items long.

Your task is to return the number of zero sequences if the given array is zero-plentiful, oherwise 0.

Examples
[0, 0, 0, 0, 0, 1]  -->  1
# 1 group of 5 zeros (>= 4), thus the result is 1

[0, 0, 0, 0, 1, 0, 0, 0, 0]  -->  2
# 2 group of 4 zeros (>= 4), thus the result is 2

[0, 0, 0, 0, 1, 0]  -->  0 
# 1 group of 4 zeros and 1 group of 1 zero (< 4)
# _every_ sequence of zeros must be at least 4 long, thus the result is 0

[0, 0, 0, 1, 0, 0]  -->  0
# 1 group of 3 zeros (< 4) and 1 group of 2 zeros (< 4)

[1, 2, 3, 4, 5]  -->  0
# no zeros

[]  -->  0
# no zeros

*/

function zeroPlentiful(arr){
    if (arr.length < 4 && !arr.find(num => num === 0)) return 0;
    let index = 0;
    let numOfSequences = 0;
    let currentSequence = [];
    while(index < arr.length) {
      const currentNum = arr[index];
      const nextNum = arr[index + 1];
      if (currentNum === 0) {
        currentSequence.push(currentNum);
        if (nextNum !== 0) {
          if (currentSequence.length >= 4) {
            numOfSequences += 1;
            currentSequence = [];
          } else {
            return 0;
          }
        }
        
      }
      index += 1;
    }
    return numOfSequences;
  }

/*

Tests:

const { strictEqual } = require('chai').assert;

function doTest(array, expected) {
	const log = `for array : [${array}]\n`;
	const actual = zeroPlentiful(array);
	strictEqual(actual, expected, log);
}

describe("zero-plentiful Array", () => {
	it("sample tests", () => {
		doTest([0, 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0], 0);
		doTest([3], 0);
		doTest([0, 0, 0, 0, 0, 0], 1);
		doTest([0, 2, 19, 4, 4], 0);
		doTest([1, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 0], 2);
		doTest([-3, 2, 1, 3, -1, -2], 0);
		doTest([1000, 0, 1, 0, 0, 0, 0], 0);
		doTest([10, 0, 0, 0], 0);
		doTest([], 0);
	});
});

*/