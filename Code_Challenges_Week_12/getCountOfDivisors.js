/*

Instructions:

Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

*/

function getDivisorsCnt(n){
    if (n === 1) return 1;
    let totalDivisors = 1;
    for (let i = Math.ceil(n/2); i > 0; i -=1) {
      if (n % i === 0) totalDivisors += 1;
    }
    
    return totalDivisors;
  }
/*

Tests:

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(getDivisorsCnt(1) , 1);
Test.assertEquals(getDivisorsCnt(10) , 4);
Test.assertEquals(getDivisorsCnt(11) , 2);
Test.assertEquals(getDivisorsCnt(54) , 8);
  });
});


*/  