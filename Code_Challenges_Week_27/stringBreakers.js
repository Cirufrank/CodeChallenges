/*

Instructions:

I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces. If there are leftover characters, include those as well.

Example: 

N = 5;

String = "This is an example string";

Return value:
Thisi
sanex
ample
strin
g

Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'

*/

function stringBreakers(n, string){
    const brokenString = [];
    const charsOfString = string.split(" ").join("").split("");
     const beginningIndex = 0;
     const endingPosition = n;
    while(charsOfString.length > 0) {
      const currentSubStr = charsOfString.slice(beginningIndex, endingPosition).join("");
      brokenString.push(currentSubStr);
      charsOfString.splice(beginningIndex, endingPosition);
      n -= 1;
    }
    return brokenString.join("\n");
   }

/*

Tests:

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(stringBreakers(5, 'This is an example string'), 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'); 
  });
});

*/