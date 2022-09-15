/*

Instructions:

Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]

*/

function upArray(arr){
    if (arr.length === 0 || (!arr.every(num => !isNaN(num) && num >= 0 && num === Math.floor(num) && String(num).length === 1))) return null;
    for (let index = arr.length - 1; index >= 0; index -= 1) {
      if (index === 0) {
        if (arr[index] + 1 !== 10) {
          arr[index] += 1;
        } else {
          arr[index] = 0;
          arr.unshift(1);
        }
        
      } else {
        
        if (arr[index] + 1 !== 10) {
        arr[index] += 1;
        return arr;
        }
        if (arr[index] + 1 === 10) {
          arr[index] = 0;
        }
      }
      
    }
    return arr;
  }

/*

Tests:

describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(upArray([2,3,9]), [2,4,0]);
Test.assertSimilar(upArray([4,3,2,5]), [4,3,2,6]);
Test.assertSimilar(upArray([1,-9]), null);

  });
});

*/