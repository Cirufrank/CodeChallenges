/*

Description:

Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

Return the sorted array.

 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = function(nums) {
    return nums.sort((a,b) => {
        const totalAs = nums.filter(num => num === a).length
        const totalBs = nums.filter(num => num === b).length
        if (totalAs < totalBs) return -1
        else if (totalAs > totalBs) return 1
        else return b - a
    });
};