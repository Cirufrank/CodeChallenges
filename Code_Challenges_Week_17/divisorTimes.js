/*

Instructions:

Calculate how many times a number can be divided by a given number.

Example
For example the number 6 can be divided by 2 two times:

1. 6 / 2 = 3
2. 3 / 2 = 1 remainder = 1
100 can be divided by 2 six times:

1. 100 / 2 = 50
2. 50 / 2 = 25
3. 25 / 2 = 12 remainder 1
4. 12 / 2 = 6
5. 6 / 2 = 3
6. 3 / 2 = 1 remainder 1

*/

const divisions = (n, divisor) => {
    if (n < divisor) return 0;
    let totalTimes = 0;
    while(n >= divisor) {
      totalTimes += 1;
      n = Math.floor(n / divisor)
    }
    return totalTimes
  };

/*

Tests:''describe("Your solution", function(){
  it("should work for example tests", function(){
    Test.assertEquals(divisions(6, 2), 2);
    Test.assertEquals(divisions(100, 2), 6);
    Test.assertEquals(divisions(2450, 5), 4);
    Test.assertEquals(divisions(9999, 3), 8);
    Test.assertEquals(divisions(2, 3), 0);
    Test.assertEquals(divisions(5, 5), 1);
  });
});

*/