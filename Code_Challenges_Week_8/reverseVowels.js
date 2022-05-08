/*

Instructions:

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.


*/

const reverseVowels = function(s) {
    const vowels = ['a','e','i','o','u'];
    const indexesToPlaceReversedVowels = [];
    const vowelstoReverse = [];
    const arrayOfCharacters = s.split("");

    arrayOfCharacters.forEach((char, index) => {
        if (vowels.includes(char.toLowerCase())) {
            vowelstoReverse.push(char);
            indexesToPlaceReversedVowels.push(index);
     }  
            
});
    
    vowelstoReverse.reverse();
        
    let numOfVowelsToReverse = vowelstoReverse.length;
            
    for(let i = 0; i < numOfVowelsToReverse; i += 1) {
        let currentIndex = indexesToPlaceReversedVowels.shift();
        let currentChar = vowelstoReverse.shift();
        arrayOfCharacters.splice(currentIndex, 1, currentChar);
    }

    
    return arrayOfCharacters.join("");
    
};

reverseVowels("hello");