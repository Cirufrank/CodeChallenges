/*

Instructions:

1480. Running Sum of 1d Array
Easy

3852

228

Add to List

Share
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]

*/

const runningSum = function(nums) {
        return nums.map((val,index) => {
            return nums.slice(0, index + 1).reduce(((sum, val) => sum + val), 0)
        });
    };

    const runningSum = function(nums) {
        let runningSumArray = [];
        let endingIndex = 1;
        
        while(endingIndex <= nums.length) {
            runningSumArray.push(nums.slice(0, endingIndex).reduce(((sum, val) => sum + val), 0));
            endingIndex += 1;
        }
        return runningSumArray;
    };

 /*
 
 Results:
 
 Success
Details 
Runtime: 105 ms, faster than 26.22% of JavaScript online submissions for Running Sum of 1d Array.
Memory Usage: 48.4 MB, less than 5.01% of JavaScript online submissions for Running Sum of 1d Array.

*/