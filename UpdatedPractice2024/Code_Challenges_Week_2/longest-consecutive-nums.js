/*

Description:

128. Longest Consecutive Sequence
Solved
Medium
Topics
Companies
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109

Results:

Runtime
75
ms
Beats
99.92%
of users with JavaScript
Memory
58.82
MB
Beats
99.00%
of users with JavaScript

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
    if (!nums.length) return 0;
    else if (nums.length === 1) return 1
    nums.sort((a, b) => a - b);
    let maxConsecCount = 1;
    let curNum = nums.shift();
    let curConsecCount = 1;

    for (const num of nums) {
        if (num - 1 !== curNum && num !== curNum) {
            curConsecCount = 1;
        } else if (num - 1 === curNum) {
            curConsecCount += 1;
            maxConsecCount = Math.max(curConsecCount, maxConsecCount)
        }
        curNum = num;
    }

    return maxConsecCount;
};