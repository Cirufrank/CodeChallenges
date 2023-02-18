/*

Description:

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
 

Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.

*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function(pattern, s) {
    //1. check for unique chars in first string
    //2. check for unique words in second string
    //3. if these are different return false
    //4. Assign numbers to unique chars in first string
    //5. define patterns based on order of numbers
    //6. Assign number to unique words in first string
    //7. Iterate over pattern of second string and if a mismatch is found return false
    const wordArray = s.split(" ")
    if (wordArray.length === 1 && pattern.length === 1) return true
    if (s === pattern) return false
    if (wordArray.join("") === pattern) return true
    const charArray = pattern.split("")
    const uniqueChars = Array.from(new Set(pattern.split("")))
    const patrn = charArray.map((char, index) => uniqueChars.indexOf(char) + 1)
    const uniqueWords = new Set(wordArray)
    if (uniqueChars.length !== uniqueWords.size) return false
    
    
    const wordNumbers = new Map()
    let num = 1;
    console.log(wordNumbers)
    uniqueWords.forEach(word => {
        wordNumbers.set(word, num)
        num += 1
    })

    for (let index = 0; index < wordArray.length; index += 1) {
        const word = wordArray[index]
        const patrnRank = patrn[index]
        const wordRank = wordNumbers.get(word)
        if (parseInt(patrnRank) !== wordRank) return false
    }
    return true
};