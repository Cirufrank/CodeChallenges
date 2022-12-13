/*

Instructions:

228. Summary Ranges
Easy
2.4K
1.3K
Companies
You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
 

Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
 

Constraints:

0 <= nums.length <= 20
-231 <= nums[i] <= 231 - 1
All the values of nums are unique.
nums is sorted in ascending order.

*/

var summaryRanges = function(nums) {
    if (nums.length === 1) return [`${nums.pop()}`];
    const result = [];
    let beginRange = true;
    let resultPointer = 0;
    pointer1 = 0;
    pointer2 = 1;

    while(pointer2 < nums.length) {
        const firstNum = nums[pointer1];
        const secondNum = nums[pointer2];
        if (beginRange === true) {
            result.push("" + firstNum);
            if (firstNum + 1 !== secondNum) {
                if (pointer2 === nums.length - 1) {
                        result.push(secondNum + "");
                }
                resultPointer += 1;

            } else {
                    result[resultPointer] += "->";
                    if (pointer2 === nums.length - 1) {
                        result[resultPointer] += secondNum;
                    }
                    beginRange = false;
            }
        } else {
            if (firstNum + 1 !== secondNum) {
                result[resultPointer] += firstNum;
                if (pointer2 === nums.length - 1) {
                    result.push("" + secondNum);
                }
                beginRange = true;
                resultPointer += 1;
            } else {
               if (pointer2 === nums.length - 1) {
                    result[resultPointer] += secondNum;
                }
            }
        }
        pointer1 += 1;
        pointer2 += 1;
    }
    return result;
};

/*

Results:


Runtime
66 ms
Beats
88.37%
Memory
42.2 MB
Beats
33.59%

*/