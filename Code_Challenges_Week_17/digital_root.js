/*

Instructions:

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 

*/

//Option 1:

function digital_root(n) {
    return String(n).split("").map(val => Number(val)).reduce((acc, cur) => acc + cur)
    }

//Option 2
/*

Tests:

describe("Tests", () => {
  it("test", () => {
Test.assertEquals( digital_root(16), 7 )
Test.assertEquals( digital_root(456), 6 )
  });
});

*/