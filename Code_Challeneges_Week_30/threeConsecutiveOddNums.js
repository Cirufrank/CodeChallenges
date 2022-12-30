/*

Description:

Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
 

Example 1:

Input: arr = [2,6,4,1]
Output: false
Explanation: There are no three consecutive odds.
Example 2:

Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
Explanation: [5,7,23] are three consecutive odds.
 

Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 1000

*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = function(arr) {
    if (arr.length < 3) return false
    if (arr.length === 3) return arr.every(num => num % 2 !== 0)
    let pointer1 = 0
    let pointer2 = 1
    let pointer3 = 2
    while (pointer3 < arr.length) {
        const num1 = arr[pointer1]
        const num2 = arr[pointer2]
        const num3 = arr[pointer3]
        if (num1 % 2 !== 0 && num2 %2 !== 0 && num3 % 2 !== 0) return true;
        if (num3 % 2 === 0) {
            pointer1 += 3
            pointer2 += 3
            pointer3 += 3
        } else if (num2 % 2 === 0) {
            pointer1 += 2;
            pointer2 += 2;
            pointer3 += 2
        } else {
            pointer1 += 1;
            pointer2 += 1;
            pointer3 += 1
        }
    }
    return false
};

/*

Results:

Runtime
55 ms
Beats
97.95%
Memory
41.5 MB
Beats
97.44%

*/