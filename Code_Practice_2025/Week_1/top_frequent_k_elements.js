/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const OCCURENCE_INDEX = 1;

const topKFrequent = function(nums, k) {
    if (nums.length === 0) return [];
    else if (nums.length === 1) return nums;
    const numsOccurences = new Map();

    for (const num of nums) {
        const numOccurred = numsOccurences.get(num);

        if (numOccurred === undefined) {
            numsOccurences.set(num, 1);
            continue
        }

        numsOccurences.set(num, numOccurred + 1);
    }

    const occurencesArray = Array.from(numsOccurences.entries()).sort(
        (a, b) => b[OCCURENCE_INDEX] - a[OCCURENCE_INDEX]);

    return occurencesArray.map(val => val[0]).slice(0, k)
};

// Time comlexity: O(n log n)
// Space compleixty: O(n)

// Runtime 12ms
// Beats 71.65%
// Analyze Complexity
// Memory 53.41MB
// Beats 73.82%