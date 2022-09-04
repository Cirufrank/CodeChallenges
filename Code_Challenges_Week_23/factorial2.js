/*

Instructions:

Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial

*/

function factorial(n){
    return (n > 1) ? n * (factorial(n - 1)) : 1;
  }

/*

Tests:

describe("Basic tests",() =>{
Test.assertEquals(factorial(0), 1);
Test.assertEquals(factorial(1), 1);
Test.assertEquals(factorial(4), 24);
Test.assertEquals(factorial(7), 5040);
Test.assertEquals(factorial(17), 355687428096000);
})

*/