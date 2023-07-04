/*

Instructions:

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    let pointer1 = 0;
    let pointer2 = 1;

    while(pointer2 < nums.length) {
        const num1 = nums[pointer1];
        const num2 = nums[pointer2];
        if (num1 === num2) {
            nums.splice(pointer2, 1);
        } else {
            pointer1 += 1;
            pointer2 += 1;
        }
    }

    return nums.length;
};