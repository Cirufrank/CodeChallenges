/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 * 
 */
const longestConsecutive = function(nums) {
    if (nums.length === 0 || nums.length === 1) return nums.length
    nums = Array.from(new Set(nums.sort((a, b) => a - b)))
    prevNum = nums.shift()
    let curConsecSeq = [prevNum];
    let maxSeq = 1

    for (const num of nums) {
        if (prevNum + 1 === num) {
           curConsecSeq.push(num)
        } else {
            curConsecSeq = [num]
        }

        prevNum = num

        maxSeq = Math.max(maxSeq, curConsecSeq.length)
    }

    return maxSeq
};

// Time compelixty: O(n log n)
// Space compelexity: O(1)