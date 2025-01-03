/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

const twoSum = function(nums, target) {
    const numsMap = new Map();

    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i]
        const solutionIndex = numsMap.get(target - num);

        if (solutionIndex !== undefined) {
            return [i, solutionIndex]
        }

        numsMap.set(num, i);
    }

    return []
};

// Time complexity: O(n)
// Space complexity: O(n)