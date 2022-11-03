/*

Instructions:

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

 */

 public class Kata
{
    public static int[] countPositivesSumNegatives(int[] input)
    {
        if (input == null || input.length == 0) return new int[0];
        final int POSITIVE_NUM_SUM_INDEX = 0,
          NEGATIVE_NUM_SUM_INDEX = 1,
          ONE_NUM = 1;
        int[] results = {0,0};
        for (int integer : input) {
          if (integer > 0) results[POSITIVE_NUM_SUM_INDEX] += ONE_NUM;
          else if (integer < 0) results[NEGATIVE_NUM_SUM_INDEX] += integer;
        }
      return results;
    }
}

/*

Tests:

import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runners.JUnit4;

public class KataTests {
    @Test
    public void countPositivesSumNegatives_BasicTest() {
      int[] expectedResult = new int[] {10, -65};
      assertArrayEquals(expectedResult, Kata.countPositivesSumNegatives(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15}));
    }
    
    @Test
    public void countPositivesSumNegatives_InputWithZeroes() {
      int[] expectedResult = new int[] {8, -50};
      assertArrayEquals(expectedResult, Kata.countPositivesSumNegatives(new int[] {0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14}));
    }
}

 */