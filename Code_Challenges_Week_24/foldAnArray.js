/*

Instructions:

In this kata you have to write a method that folds a given array of integers by the middle x-times.

An example says more than thousand words:

Fold 1-times:
[1,2,3,4,5] -> [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\          
                    4/            4|          4\      
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*


Fold 2-times:
[1,2,3,4,5] -> [9,6]
As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

If an array with one element is folded, it stays as the same array.

The input array should not be modified!

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.

*/

function foldArray(array, runs)
{
  if (array.length === 1 || !runs) return array;
  let arrayToFold = array.slice();
  let foldedArray = [];
  
  while(runs > 0 && arrayToFold.length > 1) {
    while(arrayToFold.length > 1) {
      const firstElement = arrayToFold.shift();
      const lastElement = arrayToFold.pop();
      foldedArray.push(firstElement + lastElement);
    }
    arrayToFold = [...foldedArray, ...arrayToFold];
    foldedArray = [];
    runs -= 1; 
  }
  return arrayToFold;

}

/*

Tests:

const deepEquals = require('chai').assert.deepEqual;

describe("Solution", function(){
  it("basic tests", function(){
    var input = [ 1, 2, 3, 4, 5 ];
    var expected = [ 6, 6, 3 ];
    deepEquals(foldArray(input, 1), expected);
    
    expected = [ 9, 6 ];
    deepEquals(foldArray(input, 2), expected);
    
    expected = [ 15 ];
    deepEquals(foldArray(input, 3), expected);
    
    input = [ -9, 9, -8, 8, 66, 23 ];
    expected = [ 14, 75, 0 ];
    deepEquals(foldArray(input, 1), expected);
  });
});

*/