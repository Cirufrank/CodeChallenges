/*

Instructions:

215. Kth Largest Element in an Array
Medium

10696

556

Add to List

Share
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

 

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
 

Constraints:

1 <= k <= nums.length <= 104
-104 <= nums[i] <= 104

*/

var findKthLargest = function(nums, k) {
    return nums.sort((a,b) => b - a)[k - 1]
};

/*

Results:

Success
Details 
Runtime: 102 ms, faster than 62.65% of JavaScript online submissions for Kth Largest Element in an Array.
Memory Usage: 43.8 MB, less than 53.52% of JavaScript online submissions for Kth Largest Element in an Array.

*/