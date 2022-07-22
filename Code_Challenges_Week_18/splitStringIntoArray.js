/*

Instructions:

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

function solution(str){
    let result = [];
   
   pointer1 = 0;
   pointer2 = 1;
   console.log(str);
   while(pointer1 < str.length) {
     if (str[pointer2]) {
       result.push(`${str[pointer1]}${str[pointer2]}`);
     } else {
       result.push(`${str[pointer1]}_`);
     }
     
     pointer1 += 2;
     pointer2 += 2;
     
   }
   return result;
 }

 /*
 
 Tests:
 
 const { assert } = require('chai');

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(solution(""), []);
  });
});

 */