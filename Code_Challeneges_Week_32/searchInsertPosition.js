/*

Description:

35. Search Insert Position
Easy
14.8K
637
Companies
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    if (nums.length === 1) return nums[0] >= target ? 0 : 1;
    let pointer1 = 0;
    let pointer2 = nums.length - 1;

    while(pointer1 < pointer2) {
        const num1 = nums[pointer1];
        const num2 = nums[pointer1 + 1];
        const num3 = nums[pointer2];
        const num4 = nums[pointer2 - 1];
        if (target < num1 && pointer1 === 0) return 0;
        if (target > num3 && pointer2 === nums.length - 1) return nums.length;
        if (target > num1 && target < num2) return pointer1 + 1;
        if (target < num3 && target > num4) return pointer2;
        if (target === num1) return pointer1;
        if (target === num2) return pointer1 + 1;
        if (target === num3) return pointer2;
        if (target === num4) return pointer2 - 1;
        pointer1 += 1;
        pointer2 -= 1;
    }

    return -1
};

/*

Results:

Runtime
Details
44ms
Beats 90.29%of users with JavaScript
Memory
Details
42.12MB
Beats 43.42%of users with JavaScript

*/