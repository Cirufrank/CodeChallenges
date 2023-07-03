/*

Instructions:

14. Longest Common Prefix
Easy
14.5K
4K
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0]
    }
    let commonPrefix = "";
    let firstRun = true;
    while (strs.length !== 0) {
         if (firstRun) {      
             commonPrefix = findCommonPrefix(strs.shift(), strs.shift())
             firstRun = false
             continue
         }
 
        const curStr = strs.shift();
        if (curStr.slice(0, commonPrefix.length) === commonPrefix) continue;
        commonPrefix = findCommonPrefix(commonPrefix, curStr)
        if (commonPrefix === "") {
            return "";
        }
    }
 
    return commonPrefix;
 };
 
 function findCommonPrefix(str1, str2) {
     let commonPrefix = "";
             for (let index = 0; index < str1.length && index < str2.length; index += 1) {
                 const char1 = str1[index];
                 const char2 = str2[index];
                 if (char1 === char2) {
                     commonPrefix += char1;
                 } else {
                     break;
                 }
             }
     return commonPrefix;
 }

 /*
 
 Results:
 
sRuntime
55 ms
Beats
87.64%
Memory
41.5 MB
Beats
97.46%

 */