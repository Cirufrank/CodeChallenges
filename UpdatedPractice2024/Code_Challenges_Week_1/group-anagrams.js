/*
49. Group Anagrams
Solved
Medium
Topics
Companies
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

Seen this question in a real interview before?
1/4
Yes
No
Accepted
2.7M
Submissions
4M
Acceptance Rate
68.3%
Topics
Companies
Similar Questions
Discussion (168)
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    if (!strs.length) return [];
    charMap = new Map();

    for (const str of strs) {
        const hash = getHash(str)
        const values = charMap.get(hash) || []

        values.push(str)
        charMap.set(hash, values)
    }

    return [...charMap.values()]
};

const getHash = (word) => {
    const frequency = new Array(26).fill(0)

    for (const char of word) {
        const charCode = char.charCodeAt(0) - "a".charCodeAt(0);
        frequency[charCode] += 1;
    }

    return frequency.toString()
}