/*

Instructions:

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

// complete the function
function solution(string) {
    let stringArray = [...string];
    
    stringArray.forEach((char, index) => {
      if (char === char.toUpperCase()) stringArray[index] = ' ' + char;
    })
  
  return stringArray.join("");
}

/*

Tests:

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')

});
});

*/