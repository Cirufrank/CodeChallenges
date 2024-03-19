/*
347. Top K Frequent Elements
Solved
Medium
Topics
Companies
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.


Seen this question in a real interview before?
1/4
Yes
No
Accepted
2M
Submissions
3.2M
Acceptance Rate
62.7%
Topics
Companies
Similar Questions
Discussion (137)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
    const numMap = new Map();

    for (const num of nums) {
        let total = numMap.get(num) || 0
        total += 1

        numMap.set(num, total)
    }

    return Array.from(numMap.entries()).sort((a, b) => b[1] - a[1]).slice(0, k).map(val => val[0]);
};