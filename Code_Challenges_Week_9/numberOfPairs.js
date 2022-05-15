/*

Instructions:

You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
Examples
[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)

*/

function duplicates(array){
    let numOfPairs = 0;
     let pairsHolder = [];
     if (array.length > 1000 || array.length === 0) return numOfPairs;
     array.sort((a,b) => Number(a) - Number(b));
     array.forEach((num, index) => {
       if (num >= 0 || num <= 1000) {
         if (index !== array.length - 1) {
            let currentNum = array[index];
           let nextNum = array[index + 1];
           let prevNum = array[index - 1];
          if (currentNum === nextNum || currentNum === prevNum) pairsHolder.push(currentNum);
         } else {
           let currentNum = array[index];
            let prevNum = array[index - 1];
            if (currentNum === prevNum) pairsHolder.push(currentNum);
         }
          
       }
      
     });
     return pairsHolder.length === 0 ?  0 :  Math.floor(pairsHolder.length / 2);
     
   }

/*

Tests:

describe("Tests", () => {
  it("test", () => {
//simple test 

Test.assertEquals( duplicates([1, 2, 5, 6, 5, 2]),2 );
Test.assertEquals( duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]),4 );
Test.assertEquals( duplicates([0, 0, 0, 0, 0, 0, 0]),3 );
Test.assertEquals( duplicates([1000, 1000]),1 );
Test.assertEquals( duplicates([]),0 );
Test.assertEquals( duplicates([54]),0 );



  });
});


*/