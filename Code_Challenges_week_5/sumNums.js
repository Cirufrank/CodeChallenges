/*

Instructions:

After calling the function findSum() with any number of non-negative integer arguments, it should return the sum of all those arguments. If no arguments are given, the function should return 0, if negative arguments are given, it should return -1.

Example
findSum(1,2,3,4); // returns 10 
findSum(1,-2);    // returns -1 
findSum();        // returns 0 
Hint: research the arguments object on google or read Chapter 4 from Eloquent Javascript

*/

function findSum(){
    let argumentsArray = [];
    for (let i = 0; i < arguments.length; i += 1) {
      argumentsArray.push(arguments[i]);
    }
    
    let check = argumentsArray.filter(num => num < 0);
    return (check.length >= 1) ? -1 : argumentsArray.reduce((prevVal, curVal) => prevVal + curVal, 0);
  }

  /*
  
  Tests:
  
  describe("Tests", () => {
  it("test", () => {
Test.assertEquals(findSum(1,3,5), 9, "1 + 3 + 5 = 9")
Test.assertEquals(findSum(0,3,9,2), 14, "0+3+9+2 = 14")
Test.assertEquals(findSum(), 0, "If no arguments, function should return 0")
Test.assertEquals(findSum(1,-2,4) , -1, "If negative arguments are passed, function should return -1")
Test.assertEquals(findSum(0), 0, "The sum of 0 is 0")
  });
});

*/