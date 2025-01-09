/**
 * @param {string} s
 * @return {boolean}
 * 
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 */

const isPalindrome = function(s) {
    const convertS = s.split("").map(char => char.toLowerCase()).filter(char => (char.charCodeAt()-97 >= 0 && char.charCodeAt()-97 <= 25) || !isNaN(parseInt(char)))
    console.log(convertS)
    
    for (let index = 0; index < convertS.length; index += 1) {
        if (convertS[index] !== convertS[convertS.length - 1 - index]) return false
    }

    return true;
};

// Time compleixity: O(n)
// Space complexity: O(1)