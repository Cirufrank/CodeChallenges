// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function containsDuplicate(nums: number[]): boolean {
    let numsSet: Set<number> = new Set(nums);
    return numsSet.size !== nums.length;
};

// Time complexity: O(n)
// Space complexity: O(n)