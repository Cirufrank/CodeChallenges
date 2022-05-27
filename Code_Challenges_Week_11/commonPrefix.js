/*

Instructions:

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.

 */

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    if (strs.length < 1) return "";
    strs.sort((a,b) => a.length - b.length);
    let commonPrefixArr = [];
    for (let i = 0; i < strs[0].length; i += 1) {
        let prefix = [];
        strs.forEach(str => prefix.push(str[i]));
        let commonPrefix = 1;
        for (let indx = 1; indx < prefix.length; indx += 1) {
            if (prefix[0] === prefix[indx]) commonPrefix += 1;
        }
        if (commonPrefix === strs.length) commonPrefixArr.push(prefix[0]);
        else return commonPrefixArr.join("");
    }
    return commonPrefixArr.join("")
};