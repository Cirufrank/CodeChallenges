/*

Instructions:

Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

Example 1:

Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Example 2:

Input: s = "abcd", k = 2
Output: "bacd"
 

Constraints:

1 <= s.length <= 104
s consists of only lowercase English letters.
1 <= k <= 104

*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function(s, k) {
    if (s.length < k) return s.split("").reverse().join("");
    let stringArray = s.split("");
    let reversedString = "";
    let reverseChars = true;

    while(stringArray.length) {
        const curChars = stringArray.splice(0, k)
        if (reverseChars) {
            curChars.reverse();
            reverseChars = false;
        } else {
            reverseChars = true;
        }
        reversedString += curChars.join("");
    }

    return reversedString;
};

/*

Results:

Runtime
59 ms
Beats
74.32%
Memory
45 MB
Beats
52.37%

*/