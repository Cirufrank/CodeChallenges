/*

Instructions:

Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.

*/

var findMaxConsecutiveOnes = function(nums) {
    if (nums.length === 1) {
        if (nums[0] === 1) return 1;
        else return 0;
    }
    let continuedOnes = false;
    let onesPointer = 0;
    const consecutiveOnes = [];
    for (let index = 0; index < nums.length; index += 1) {
        const num = nums[index];
        if (num !== 1) {
            if (continuedOnes === true) {
                continuedOnes = false;
                onesPointer += 1;
            }
            continue;
        }
        if (continuedOnes === true) {
            consecutiveOnes[onesPointer] += 1;
        } else {
            consecutiveOnes[onesPointer] = 1;
            continuedOnes = true;
        }

    }
    return (consecutiveOnes.length > 0) ? Math.max(...consecutiveOnes) : 0;
};

/*

Results:

Runtime
65 ms
Beats
98.37%
Memory
45.1 MB
Beats
21.42%

*/