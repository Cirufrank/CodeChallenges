/*

Instructions:

Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15
TIPS:
ruby/python : http://lmgtfy.com/?q=Ruby+splat+operator

JS/Coffeescript : http://lmgtfy.com/?q=Javascript+arguments+variable

C: https://www.geeksforgeeks.org/variadic-functions-in-c/

*/

function sum(...arguments) {
    return arguments.reduce(((preVal, curVal) => Number(preVal) + Number(curVal)), 0);
  }
  
  //Or
  
  function sum()) {
    return [...arguments].reduce(((preVal, curVal) => Number(preVal) + Number(curVal)), 0);
  }

  /*
  
  Tests:

  describe("Sample tests", () => {
  it("Small tests", () => {
    Test.assertEquals( sum(1), 1 )
    Test.assertEquals( sum(1, 2), 3 )
    Test.assertEquals( sum(5, 7, 9), 21 )
    Test.assertEquals( sum(12, 1, 1, 1, 1), 16 )
    Test.assertEquals( sum(12, 1, 1, 1, 1, 1, 1), 18 )
  })
})
  
  */