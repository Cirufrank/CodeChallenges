/**
 * @param {number[]} nums
 * @return {boolean}
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */
const containsDuplicate = function(nums) {
    const visitedNums = new Map();

    for (const num of nums) {
        const numVisited = visitedNums.get(num)
        if (numVisited) {
            return true
        }
        visitedNums.set(num, true)
    }

    return false
};

// Time complexity: O(n)
// Space complexity: O(n)