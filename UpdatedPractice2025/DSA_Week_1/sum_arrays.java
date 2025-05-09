// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

public class SumArray {

  public static double sum(double[] numbers) {
    double sum = 0;
    
    for (int index = 0; index < numbers.length; index += 1) {
      double num = numbers[index];
      sum += num;
    }
    return sum;
  }
}

// Time complexity: O(N)
// Space complixity O(1)

// Tests
// import org.junit.Test;
// import static org.junit.Assert.assertEquals;

// public class SumArrayTest {

//   @Test
//   public void testSum() {
//     assertEquals(0,      SumArray.sum(new double[] { }),                1e-4);
//     assertEquals(-2.398, SumArray.sum(new double[] {-2.398}),           1e-4);
//     assertEquals(6,      SumArray.sum(new double[] {1, 2, 3}),          1e-4);
//     assertEquals(6.6,    SumArray.sum(new double[] {1.1, 2.2, 3.3}),    1e-4);
//     assertEquals(9.2,    SumArray.sum(new double[] {1, 5.2, 4, 0, -1}), 1e-4);
//     assertEquals(320,    SumArray.sum(new double[] {30, 89, 100, 101}), 1e-4);
//   }
// }
