/*

Instructions:

1. Two Sum
Easy

34288

1079

Add to List

Share
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
    for (let i = 0; i < nums.length; i += 1) {
        let currentNum = nums[i];
        let totalRounds = nums.length - (i + 1);
        let pointer = i + 1;
        
        while(totalRounds) {
            let secondNum = nums[pointer];
            if (currentNum + secondNum === target) return [i, pointer];
            totalRounds -= 1;
            pointer += 1
        }
    }
}

/*

Tests:

Success
Details 
Runtime: 130 ms, faster than 45.12% of JavaScript online submissions for Two Sum.
Memory Usage: 42.2 MB, less than 80.91% of JavaScript online submissions for Two Sum.

*/