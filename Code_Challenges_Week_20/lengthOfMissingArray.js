/*

Instructions:

ou get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
ou get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.

*/

function getLengthOfMissingArray(arrayOfArrays) {
    if (!arrayOfArrays || arrayOfArrays.length === 0) return 0;
    for (let index = 0; index < arrayOfArrays.length; index += 1) {
      if (!arrayOfArrays[index] || arrayOfArrays[index].length === 0) return 0;
    }
    
    arrayOfArrays.sort((a, b) => a.length - b.length);
    const lengthsOfArrays = arrayOfArrays.map(array => array.length);
    for (let index = 0; index < lengthsOfArrays.length; index += 1) {
      const currentLength = lengthsOfArrays[index];
      const nextLength = lengthsOfArrays[index + 1];
      if (nextLength - currentLength > 1) return currentLength + 1;
    }
  }

/*

Tests:

describe("KataTests", function(){
  it("Basic Tests", function(){
    Test.assertEquals(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 3);
    Test.assertEquals(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 2);
    Test.assertEquals(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ), 2);
    Test.assertEquals(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ), 5);
      
    Test.assertEquals(getLengthOfMissingArray([ ]), 0);
  });
});

*/