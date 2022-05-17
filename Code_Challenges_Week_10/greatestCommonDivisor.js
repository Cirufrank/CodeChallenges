/*

Instructions:

Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

*/

function mygcd(x,y){
    for(let divisor = Math.ceil(x/2); divisor > 0; divisor -= 1) { //O(n)
      if ( x % divisor === 0 && y % divisor === 0) return divisor; //O(1)
    }
  }

  // T = c3 + n * c4;
  // T = n * c4;
  // T = O(n);

/*

Tests:

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(mygcd(30,12),6)
Test.assertEquals(mygcd(8,9),1)
Test.assertEquals(mygcd(1,1),1)
  });
});


*/

