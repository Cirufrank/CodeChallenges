// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

package kata

func EvenOrOdd(number int) string {
  if number % 2 == 0 {
    return "Even"
  }
  return "Odd"
}

  // Time complexity: O(1)
  // Space complexity: O(1)