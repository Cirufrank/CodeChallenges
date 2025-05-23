// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

package kata

import (
  "strings"
)

func Accum(s string) string {
   var answer = ""
  
  for index, runeChar := range s {
    char := string(runeChar)
    if (index == 0) {
      answer = strings.ToUpper(char)
    } else {
      answer += "-" + strings.ToUpper(char)
      for i := 0; i < index; i += 1 {
        answer += strings.ToLower(char)
      }
    }
  }
  
  return answer
}

// Time complexity: O(n ^2)
// Space complexity: O(n^2)

// Tests

// package kata_test
// import (
//   . "github.com/onsi/ginkgo"
//   . "github.com/onsi/gomega"
//   . "codewarrior/kata"
// )

// func dotest(s string, exp string) {
//     var ans = Accum(s)
//     Expect(ans).To(Equal(exp))
// }

// var _ = Describe("Test Example", func() {

//     It("should handle basic cases", func() {
//         dotest("ZpglnRxqenU", "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu")
//         dotest("NyffsGeyylB", "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb")
//         dotest("MjtkuBovqrU", "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu")
//         dotest("EvidjUnokmM", "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm")
//         dotest("HbideVbxncC", "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc")
//     })
// })