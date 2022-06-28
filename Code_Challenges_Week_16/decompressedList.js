/*

Instructions:

We are given a list nums of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [2,4,4,4]
Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
At the end the concatenation [2] + [4,4,4] is [2,4,4,4].
Example 2:

Input: nums = [1,1,2,3]
Output: [1,3,3]
 

Constraints:

2 <= nums.length <= 100
nums.length % 2 == 0
1 <= nums[i] <= 100
Accepted
185,925
Submissions
216,472

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var decompressRLElist = function(nums) {
    let pointer1 = 0;
    let pointer2 = 1;
    let totalRounds = nums.length/2
    let decompressedList = [];
    
    while(totalRounds > 0) {
        let freq = nums[pointer1];
        let val = nums[pointer2];
        
        while(freq > 0) {
            decompressedList.push(val);
            freq -= 1;
        }
        pointer1 += 2;
        pointer2 += 2;
        totalRounds -= 1;
    }
    return decompressedList
};

/*

Results:

Runtime: 128 ms, faster than 34.72% of JavaScript online submissions for Decompress Run-Length Encoded List.
Memory Usage: 44.2 MB, less than 76.34% of JavaScript online submissions for Decompress Run-Length Encoded List.

*/