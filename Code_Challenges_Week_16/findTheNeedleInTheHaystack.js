/*

Instructions:

28. Implement strStr()
Easy

4408

3757

Add to List

Share
Implement strStr().

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters

*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if (needle.trim() === "") return 0;
    
    let startingIndex = 0;
    let endingIndex = needle.length;
    
    while(endingIndex <= haystack.length) {
        if (haystack.slice(startingIndex, endingIndex) === needle) return startingIndex;
        startingIndex += 1;
        endingIndex += 1;
    }
    
    return -1;
};
//Time Complexity: O(n) (Best Case is O(1) whenever the needle is the substring located at the first index within the haystack)
//Space Complexity: O(1)
/*

Results:

Success
Details 
Runtime: 106 ms, faster than 19.36% of JavaScript online submissions for Implement strStr().
Memory Usage: 42.2 MB, less than 41.66% of JavaScript online submissions for Implement strStr().

*/