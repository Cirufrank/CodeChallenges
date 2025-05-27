// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

public class Accumul {
    public static String accum(String s) {
      String answer = "";
      
      for (int index = 0; index < s.length(); index += 1) {
        char curChar = s.charAt(index);
        if (index == 0) {
          answer = String.valueOf(curChar).toUpperCase();
        } else {
          answer += "-" + String.valueOf(curChar).toUpperCase();
          for (int rep = 0; rep < index; rep += 1) {
            answer += String.valueOf(curChar).toLowerCase();
          }
        }
      }
      
      return answer;
    }
}

// Time complexity: O(n^2)
// Space complexity: O(n^2)

// Tests
// import org.junit.jupiter.api.Test;
// import static org.junit.jupiter.api.Assertions.assertEquals;

// public class AccumulTest {
//     @Test
//     public void sampleTests() {
//         testing("a", "A");
//         testing("aB", "A-Bb");
//         testing("AbC", "A-Bb-Ccc");
//         testing("ZpglnRxqenU", "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
//         testing("NyffsGeyylB", "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
//         testing("MjtkuBovqrU", "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
//         testing("EvidjUnokmM", "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
//     }

//     private static void testing(String input, String expected) {
//         String actual = Accumul.accum(input);
//         assertEquals(expected, actual, "input = \"" + input + "\"\n");
//     }
// }