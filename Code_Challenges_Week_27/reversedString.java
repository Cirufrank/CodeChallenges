/*

Instructions:

Instructions
Output
Past Solutions
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

 */

 public class Kata {

  public static String solution(String str) {
    String reversedString = "";
    for (int index = str.length() - 1; index >= 0; index -= 1) {
      final char currentChar = str.charAt(index);
      reversedString += currentChar;
    }
    return reversedString;
  }

}

/*

Tests:

import org.junit.Test;
import static org.junit.Assert.assertEquals;
import org.junit.runners.JUnit4;

public class SolutionTest {
    @Test
    public void sampleTests() {
      assertEquals("dlrow", Kata.solution("world"));
    }
}
 */