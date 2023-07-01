// Instructions:

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

func twoSum(nums []int, target int) []int {
    numsAndIndices := map[int]int{}
    for index, num := range nums {
        if index == 0 {
            numsAndIndices[num] = index
            continue
        }
        if targetMinusNumIndex, ok := numsAndIndices[target - num]; ok {
            return []int{index, targetMinusNumIndex}
        }
        numsAndIndices[num] = index;
    }

    return []int{}
}
