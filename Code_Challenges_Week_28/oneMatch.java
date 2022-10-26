/*

Instructions:

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

 */

 public class Solution {

    public static boolean check(Object[] a, Object x) {
       for (Object curObject : a) {
         if (curObject == x) return true;
       }
      return false;
    }

}

/*

Tests:

import org.junit.Test;
import static org.junit.Assert.assertEquals;
import org.junit.runners.JUnit4;

public class SolutionTest {

    @Test
    public void testSomething() {
        assertEquals(Solution.check(new Object[] {66, 101}, 66), true);
        assertEquals(Solution.check(new Object[] {80, 117, 115, 104, 45, 85, 112, 115}, 45), true);
        assertEquals(Solution.check(new Object[] {'t', 'e', 's', 't'}, 'e'), true);
        assertEquals(Solution.check(new Object[] {"what", "a", "great", "kata"}, "kat"), false);
    }

}

 */