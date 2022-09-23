/*

Instructions:

The twist is that (for example) [3,2,9] does not equal 3 + 2 + 9, it would equal '3' + '2' + '9' converted to an integer for this kata, meaning it would equal 329. The output should be an array of the sum in a similar fashion to the input (for example, if the sum is 341, you would return [3,4,1]). Examples are given below of what two arrays should return.

[3,2,9],[1,2] --> [3,4,1]
[4,7,3],[1,2,3] --> [5,9,6]
[1],[5,7,6] --> [5,7,7]
If both arrays are empty, return an empty array.

In some cases, there will be an array containing a negative number as the first index in the array. In this case treat the whole number as a negative number. See below:

[3,2,6,6],[-7,2,2,8] --> [-3,9,6,2] # 3266 + (-7228) = -

*/

function addArrays(array1, array2) {
    if (array1.length === 0) return array2;
    if (array2.length === 0) return array1;
    const isArray1Negative = array1[0].length === 2
    const isArray2Negative = array2[0].length === 2;
    let arrayToNumber1 = parseInt(array1.join(''));
    let arrayToNumber2 = parseInt(array2.join(''));
    if (isArray1Negative) {
      array1[0] = array1[0].split("")[1];
      arrayToNumber1 = 0 - parseInt(array1.join(""));
    }
    if (isArray2Negative) {
      array2[0] = array2[0].split("")[1];
      arrayToNumber2 = 0 - parseInt(array2.join(""));
    }
    const resultIsNegative = String(arrayToNumber1 + arrayToNumber2).split("")[0] === "-";
    const arrayOfResultDigits = String(arrayToNumber1 + arrayToNumber2).split("").map(char => Number(char));
    if (!resultIsNegative) return arrayOfResultDigits;
    arrayOfResultDigits[0] = "-";
    const negativeSign = arrayOfResultDigits.shift();
    const firstNum = arrayOfResultDigits.shift();
    arrayOfResultDigits.unshift(Number(negativeSign + firstNum));
    return arrayOfResultDigits;
    
  }

/*

Tests:

describe("Tests", () => {
  it("test", () => {
Test.assertDeepEquals(addArrays([6,7], [6,7]), [ 1, 3, 4 ])

  });
});

*/