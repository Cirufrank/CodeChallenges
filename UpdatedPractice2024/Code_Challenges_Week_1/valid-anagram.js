/**
 * 242. Valid Anagram
Solved
Easy
Topics
Companies
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const sChars = new Map();
    const tChars = new Map();

    for (let index = 0; index < s.length; index += 1) {
        sChars.set(s[index], (sChars.get(s[index]) || 0) + 1)
        tChars.set(t[index], (tChars.get(t[index]) || 0) + 1)
    }

    for (const key of sChars.keys()) {
        if (sChars.get(key) !== tChars.get(key)) return false
    }

    return true;
};