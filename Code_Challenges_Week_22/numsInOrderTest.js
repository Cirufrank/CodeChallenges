/*

Instructions:

Are the numbers in order?
In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

For example:

inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.

*/

function inAscOrder(arr) {
    let pointer1 = 0;
    let pointer2 = 1;
    while (pointer2 < arr.length) {
      if (arr[pointer1] > arr[pointer2]) return false;
      pointer1 += 1;
      pointer2 += 1;
    }
    return true;
  }

/*

Tests:

describe("Tests", () => {
  it("test", () => {
console.log('Description Examples');

Test.expect(inAscOrder([1, 2, 4, 7, 19]), 'The list of numbers "1, 2, 4, 7, 19" is in ascending order');
Test.expect(inAscOrder([1, 2, 3, 4, 5]), 'The list of numbers "1, 2, 3, 4, 5" is in ascending order');
Test.expect(!inAscOrder([1, 6, 10, 18, 2, 4, 20]), 'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order');
Test.expect(!inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]), 'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order');
  });
});

*/