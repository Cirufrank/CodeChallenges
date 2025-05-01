// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

func containsDuplicate(nums []int) bool {
    numsVisited := make(map[int]bool)

    for _, num := range nums { 
        if _, ok := numsVisited[num]; ok {
            return true
        }
        numsVisited[num] = true
    }
    
    return false;
}

// Time complexity: O(n)
// Space complexity: O(n)