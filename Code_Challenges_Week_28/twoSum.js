/*

Instructions: 

1. Two Sum
Easy
41K
1.3K
Companies
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

*/

function twoSum(nums, target) {
    const result = [];
    let pointer1 = 0;

    while(pointer1 < nums.length - 1) {
        for (let pointer2 = pointer1 + 1; pointer2 < nums.length; pointer2 += 1) {
            const firstNum = nums[pointer1];
            const secondNum = nums[pointer2];
            if (firstNum + secondNum === target) {
                result.push(pointer1, pointer2);
                return result;
            }
        }
        pointer1 += 1;
    }

};

/*

Results: 

JavaScript
Runtime
140 ms
Beats
48.4%
Memory
42.9 MB
Beats
39.44%

*/