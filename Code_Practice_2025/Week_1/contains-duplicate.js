/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */
const containsDuplicate = function(nums) {
    const visistedNums = new Map();

    for (const num of nums) {
        if (map.get(num)) return true;
        map.set(num, true);
    }

    return false;
};

// Time complexity: O(n)
// Space complexity: O(n)