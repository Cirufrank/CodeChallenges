// You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, ensuring that:

// The resulting array is sorted in ascending order.

// Any duplicate values are removed, so each integer appears only once.

// If both input arrays are empty, return an empty array.

// No input validation is needed, as both arrays are guaranteed to contain zero or more integers.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// Happy coding!

package kata


func MergeArrays(arr1, arr2 []int) []int {
  mainArr := append(arr1, arr2...)
  
  for i := 0; i < len(mainArr); i += 1 {
    for j := 0; j < len(mainArr) - i - 1; j += 1 {
      if (mainArr[j] == mainArr[j + 1]) {
        mainArr = append(mainArr[0:j], mainArr[j+1:]...)
      } else if (mainArr[j] > mainArr[j + 1]) {
        temp := mainArr[j]
        mainArr[j] = mainArr[j + 1]
        mainArr[j + 1] = temp
      }
    }
  }
  
  return mainArr
}

// Time complexity: O(n^2)
// Space compleixty: O(n)

// TODO: replace with your own tests (TDD). An example to get you started is included below.
// Ginkgo BDD Testing Framework <http://onsi.github.io/ginkgo/>
// Gomega Matcher Library <http://onsi.github.io/gomega/>

// package kata_test
// import (
//   . "github.com/onsi/ginkgo"
//   . "github.com/onsi/gomega"
//   . "codewarrior/kata"
// )


// var _ = Describe("Tests", func() {
//      It("Sample tests", func() {
//        Expect(MergeArrays([]int{1,2,3,4}, []int{5,6,7,8})).To(Equal([]int{1,2,3,4,5,6,7,8}))
//        Expect(MergeArrays([]int{1,3,5,7,9}, []int{10,8,6,4,2})).To(Equal([]int{1,2,3,4,5,6,7,8,9,10}))
//        Expect(MergeArrays([]int{1,3,5,7,9,11,12}, []int{1,2,3,4,5,10,12})).To(Equal([]int{1,2,3,4,5,7,9,10,11,12}))
//      })
// })

