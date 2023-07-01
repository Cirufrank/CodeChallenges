/*

Instructions:

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const numsAndIndices = new Map();
 for (let index = 0; index < nums.length; index += 1) {
     const curNum = nums[index];
         if (index === 0) {
             numsAndIndices.set(curNum, index)
             continue
         }
     const targetMinusCurNumIndex = numsAndIndices.get(target - curNum);
         if (targetMinusCurNumIndex !== undefined) {
             return [index, targetMinusCurNumIndex]
         }
         numsAndIndices.set(curNum, index)
     }
 };