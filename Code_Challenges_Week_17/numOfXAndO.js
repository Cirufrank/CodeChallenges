/*

Instructions:

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

function XO(str) {
    let numOfX = 0;
    let numOfO = 0;
    
    for (let index = 0; index < str.length; index += 1) {
      if (str[index].toLowerCase() === 'x') numOfX += 1;
      else if (str[index].toLowerCase() === 'o') numOfO += 1;
    }
  
    return numOfX === numOfO;
  }

/*

Tests:

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("ooom"),false);
  });
});


*/