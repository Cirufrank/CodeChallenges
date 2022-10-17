/*

Instructions:

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

 */

 class YesOrNo
{
  public static String boolToWord(boolean b)
  {
    return (b == true) ? "Yes" : "No";
  }
  
}

/*

Tests:

import org.junit.Test;
import static org.junit.Assert.assertEquals;
import org.junit.runners.JUnit4;

public class BoolTest {
    @Test
    public void testBoolToWord() {
        assertEquals(YesOrNo.boolToWord(true),"Yes");
        assertEquals(YesOrNo.boolToWord(false),"No");
    }
}

 */