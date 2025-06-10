// 217. Contains Duplicate
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    return new Set(nums).size != nums.length;
};

// Time complexity: O(n)
// Space compleixty: O(1)

