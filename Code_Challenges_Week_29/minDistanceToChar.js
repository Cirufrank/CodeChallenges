/*

Instructions:

821. Shortest Distance to a Character
Easy
2.6K
138
Companies
Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

 

Example 1:

Input: s = "loveleetcode", c = "e"
Output: [3,2,1,0,1,0,0,1,2,2,1,0]
Explanation: The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.
Example 2:

Input: s = "aaab", c = "b"
Output: [3,2,1,0]
 

Constraints:

1 <= s.length <= 104
s[i] and c are lowercase English letters.
It is guaranteed that c occurs at least once in s.

*/

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    if (s.length === 1) return [0];
    const answer = [];
    for (let index = 0; index < s.length; index += 1) {
        const currentChar = s[index];
        if (currentChar === c) {
            answer.push(0);
            continue;
        }
        if (index === 0) {
            answer.push(s.indexOf(c));
            continue;
        } 
        const firstSlice = s.slice(0, index);
        const nextSlice = s.slice(index);
        const charIndexLeft = firstSlice.lastIndexOf(c);
        const charIndexRight = (nextSlice.indexOf(c) === -1) ? -1 : nextSlice.indexOf(c) + firstSlice.length;
       
        if (charIndexLeft !== -1 && charIndexRight !== -1) {
            answer.push(Math.min(index - charIndexLeft, charIndexRight - index))
        } else if (charIndexLeft !== -1) {
            answer.push(index - charIndexLeft);
        } else {
            answer.push(charIndexRight - index);
        }
    }
    return answer;
};